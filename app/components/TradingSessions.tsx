"use client";

import { useEffect, useState } from "react";

const SESSIONS = [
  {
    name: "Sydney",
    open: 22, // UTC hour open
    close: 7,  // UTC hour close
    color: "#6FCF97",
    pairs: "AUD/USD · NZD/USD",
  },
  {
    name: "Tokyo",
    open: 0,
    close: 9,
    color: "#EB5757",
    pairs: "USD/JPY · EUR/JPY",
  },
  {
    name: "London",
    open: 8,
    close: 17,
    color: "#5696E4",
    pairs: "EUR/USD · GBP/USD",
  },
  {
    name: "New York",
    open: 13,
    close: 22,
    color: "#D4AF37",
    pairs: "USD/CAD · USD/CHF",
  },
];

function isOpen(open: number, close: number, utcHour: number): boolean {
  if (open < close) return utcHour >= open && utcHour < close;
  // wraps midnight (e.g. Sydney 22–7)
  return utcHour >= open || utcHour < close;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function TradingSessions() {
  const [utcTime, setUtcTime] = useState<Date | null>(null);

  useEffect(() => {
    const id = setInterval(() => setUtcTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const utcHour = utcTime ? utcTime.getUTCHours() : 0;
  const utcMin  = utcTime ? utcTime.getUTCMinutes() : 0;
  const utcSec  = utcTime ? utcTime.getUTCSeconds() : 0;

  const openCount = utcTime
    ? SESSIONS.filter((s) => isOpen(s.open, s.close, utcHour)).length
    : 0;

  return (
    <section style={{
      background: "#0A0A0A",
      padding: "clamp(4rem,8vw,7rem) 0",
      borderBottom: "1px solid rgba(212,175,55,0.08)",
      position: "relative", overflow: "hidden",
    }}>
      <div className="section-num" style={{ position: "absolute", top: "-2rem", right: "-1rem", opacity: 0.2, fontSize: "clamp(6rem,16vw,14rem)" }}>
        FX
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }} className="inner">

        {/* Header row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "start", marginBottom: "3rem" }} className="sessions-header">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow__label">Market Hours</span>
              <div className="section-eyebrow__rule" />
            </div>
            <h2 className="section-heading">
              Trading Session<br /><span className="text-gradient-gold">Clock</span>
            </h2>
          </div>

          {/* UTC clock */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "6px" }}>
                Current UTC Time
              </div>
              <div className="font-display" style={{ fontSize: "3rem", letterSpacing: "0.06em", color: "var(--text-primary)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                {utcTime ? `${pad(utcHour)}:${pad(utcMin)}:${pad(utcSec)}` : "--:--:--"}
              </div>
            </div>
            <div style={{ height: "60px", width: "1px", background: "rgba(212,175,55,0.15)" }} />
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "6px" }}>
                Markets Open
              </div>
              <div className="font-display" style={{ fontSize: "3rem", letterSpacing: "0.06em", color: openCount > 0 ? "#6FCF97" : "var(--text-secondary)", lineHeight: 1 }}>
                {utcTime ? openCount : "—"}
                <span style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginLeft: "6px" }}>/ 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Session rows */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {SESSIONS.map((s) => {
            const open = utcTime ? isOpen(s.open, s.close, utcHour) : false;

            // progress through session (0–100%)
            let progress = 0;
            if (utcTime) {
              const nowMins = utcHour * 60 + utcMin;
              const openMins = s.open * 60;
              const closeMins = s.close * 60;
              const durationMins = s.open < s.close
                ? closeMins - openMins
                : (24 * 60) - openMins + closeMins;
              const elapsedMins = s.open < s.close
                ? nowMins - openMins
                : nowMins >= openMins
                  ? nowMins - openMins
                  : (24 * 60) - openMins + nowMins;
              if (open) progress = Math.min(100, Math.max(0, (elapsedMins / durationMins) * 100));
            }

            return (
              <div key={s.name} className="hover-row session-row" style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                padding: "1.5rem 0",
                display: "grid",
                gridTemplateColumns: "140px 1fr auto",
                gap: "2rem",
                alignItems: "center",
              }}>
                {/* Name + status */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: open ? s.color : "rgba(255,255,255,0.1)",
                    boxShadow: open ? `0 0 8px ${s.color}` : "none",
                    flexShrink: 0,
                  }} />
                  <div>
                    <div className="font-display" style={{ fontSize: "1.4rem", letterSpacing: "0.06em", color: open ? "var(--text-primary)" : "var(--text-secondary)", lineHeight: 1 }}>
                      {s.name}
                    </div>
                    <div className="session-pairs" style={{ fontSize: "0.62rem", color: "var(--text-secondary)", letterSpacing: "0.08em", marginTop: "3px" }}>
                      {s.pairs}
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", overflow: "hidden" }}>
                    <div style={{
                      height: "100%",
                      width: open ? `${progress}%` : "0%",
                      background: s.color,
                      transition: "width 1s linear",
                      boxShadow: open ? `0 0 8px ${s.color}` : "none",
                    }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                    <span style={{ fontSize: "0.6rem", color: "var(--text-secondary)", letterSpacing: "0.08em" }}>
                      Opens {pad(s.open)}:00 UTC
                    </span>
                    <span style={{ fontSize: "0.6rem", color: "var(--text-secondary)", letterSpacing: "0.08em" }}>
                      Closes {pad(s.close)}:00 UTC
                    </span>
                  </div>
                </div>

                {/* Status badge */}
                <div style={{
                  padding: "4px 14px",
                  border: `1px solid ${open ? s.color : "rgba(255,255,255,0.08)"}`,
                  background: open ? `${s.color}18` : "transparent",
                  fontSize: "0.6rem", fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: open ? s.color : "var(--text-secondary)",
                  whiteSpace: "nowrap",
                }}>
                  {open ? "Open" : "Closed"}
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} />
        </div>

        {/* Footer note */}
        <p style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginTop: "1.5rem", opacity: 0.6 }}>
          Times shown in UTC. Forex markets trade 24 hours, 5 days a week — Sunday 22:00 to Friday 22:00 UTC.
        </p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .sessions-header { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

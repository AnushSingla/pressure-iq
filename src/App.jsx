import React, { useMemo, useState } from "react";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  ReferenceLine,
} from "recharts";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  CircleHelp,
  Compass,
  Database,
  Download,
  Filter,
  Flame,
  LayoutDashboard,
  Menu,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Trophy,
  Users,
  X,
  Zap,
  ChartNoAxesCombined,
} from "lucide-react";

import rrLogo from "./assets/rr-logo.jpg";
import rrCollage from "./assets/rr-collage.png";
import rrHallaBol from "./assets/rr-hallabol.jpg";
import rrTrophy from "./assets/rr-trophy.webp";
import rrTeamCelebrate from "./assets/rr-team-celebrate.jpg";
import rrChampions2008 from "./assets/rr-champions-2008.webp";
import rrCollageAlt from "./assets/rr-collage-alt.jpg";

const batters = [
  ["Daryl Mitchell",    84.3, "High", 566, 351, 164.1, 27.0, 54.2, 15.4],
  ["Mark Chapman",     83.7, "High", 449, 275, 165.8, 40.8, 46.4, 16.9],
  ["Moeen Ali",        67.8, "High", 378, 234, 163.2, 25.2, 38.6, 16.5],
  ["Sikandar Raza",    60.0, "High", 466, 321, 148.7, 19.4, 11.5,  3.6],
  ["Najibullah Zadran",58.8, "High", 110,  56, 198.2, 27.5, 23.9, 42.6],
  ["Shai Hope",        51.3, "High",  74,  48, 157.6, 18.5,  5.3, 11.1],
  ["Ryan Burl",        50.3, "High", 388, 281, 141.9, 27.7,  8.4,  6.3],
  ["Harry Tector",     49.8, "High", 205, 151, 135.8, 22.8, 24.1, 21.5],
  ["Curtis Campher",   45.9, "High", 164, 125, 134.5, 18.2,  7.2,  5.1],
  ["Michael Bracewell",40.5, "High", 153, 106, 147.8, 13.9,  4.6,  3.9],
];

const bowlers = [
  ["Mujeeb Ur Rahman",   73.1, "High", 241, 7.4, 18,  0.9,  1.3],
  ["Fazalhaq Farooqi",   62.5, "High", 374, 7.9, 24,  1.1,  7.8],
  ["Liam Dawson",        59.7, "High", 169, 7.8, 12,  0.9,  4.2],
  ["Spencer Johnson",    57.1, "High", 147, 9.1, 13,  0.8,  2.3],
  ["Akash Madhwal",      56.4, "High", 112, 9.1, 12,  0.3,  4.0],
  ["Maheesh Theekshana", 55.5, "High", 678, 7.8, 39,  1.1,  7.7],
  ["Adil Rashid",        52.5, "High", 470, 8.3, 33,  0.1,  1.1],
  ["Richard Ngarava",    45.4, "High", 214, 8.3, 15,  0.8,  3.4],
  ["Umesh Yadav",        40.6, "High", 128, 9.6,  8,  0.2,  1.2],
  ["Joshua Little",      32.5, "High", 209, 9.0, 13,  0.4,  3.4],
];

const phases = [
  {
    name: "Powerplay",
    rows: [
      ["Mujeeb Ur Rahman", "6.81", "16 / 420"],
      ["Fazalhaq Farooqi", "7.32", "30 / 588"],
      ["Richard Ngarava", "7.24", "17 / 474"],
      ["Joshua Little", "7.25", "15 / 330"],
      ["Liam Dawson", "7.38", "6 / 126"],
    ],
  },
  {
    name: "Middle overs",
    rows: [
      ["Mujeeb Ur Rahman", "6.89", "28 / 324"],
      ["Maheesh Theekshana", "7.37", "33 / 925"],
      ["Adil Rashid", "7.62", "58 / 1,102"],
      ["Liam Dawson", "7.63", "17 / 246"],
      ["Fazalhaq Farooqi", "9.12", "3 / 102"],
    ],
  },
  {
    name: "Death overs",
    rows: [
      ["Maheesh Theekshana", "8.27", "30 / 415"],
      ["Spencer Johnson", "8.53", "9 / 90"],
      ["Mujeeb Ur Rahman", "8.45", "6 / 76"],
      ["Joshua Little", "9.00", "18 / 178"],
      ["Richard Ngarava", "9.29", "20 / 292"],
    ],
  },
];

const nav = [
  ["Overview", LayoutDashboard, "/dashboard"],
  ["Pressure Explorer", Compass, "/explorer"],
  ["Royal Rankings", Trophy, "/rankings"],
  ["Player Profiles", Users, "/players"],
  ["Head-to-Head", ChartNoAxesCombined, "/compare"],
  ["Methodology", ShieldCheck, "/methodology"],
  ["Data Sources", Database, "/data"],
];

function Shell() {
  const loc = useLocation(),
    go = useNavigate(),
    [collapsed, setCollapsed] = useState(false),
    [mobile, setMobile] = useState(false);
  const active = nav.find((n) => loc.pathname === n[2])?.[0] || (loc.pathname === "/" ? "Home" : "Overview");

  return (
    <div className="app">
      <aside
        className={`sidebar ${collapsed ? "collapsed" : ""} ${mobile ? "mobile-open" : ""}`}
        aria-label="Sidebar Navigation"
      >
        <div
          className="brand"
          onClick={() => {
            go("/");
            setMobile(false);
          }}
          role="button"
          tabIndex={0}
          aria-label="Pressure IQ Home"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              go("/");
              setMobile(false);
            }
          }}
        >
          <div className="brand-logo-wrap">
            <img src={rrLogo} alt="Rajasthan Royals Crest" className="brand-logo-img" />
          </div>
          {!collapsed && (
            <div>
              <b>PRESSURE IQ</b>
              <small>THE ROYAL GAME. DECODED.</small>
            </div>
          )}
        </div>
        <div className="side-label">INTELLIGENCE</div>
        {nav.map(([label, Icon, path]) => (
          <button
            key={path}
            className={`nav-item ${loc.pathname === path ? "active" : ""}`}
            onClick={() => {
              go(path);
              setMobile(false);
            }}
            title={collapsed ? label : undefined}
            aria-label={label}
          >
            <Icon size={19} />
            {!collapsed && <span>{label}</span>}
            {!collapsed && label === "Royal Rankings" && <i>TOP 10</i>}
          </button>
        ))}
        <div className="side-bottom">
          {!collapsed && (
            <div className="season-card">
              <div className="season-card-header">
                <span className="live-dot" /> ANALYSIS WINDOW
              </div>
              <div className="season-card-body">
                <div>
                  <strong>2022 — 2026</strong>
                  <small>IPL · SENIOR T20I</small>
                </div>
                <img src={rrTrophy} alt="IPL Championship Trophy" className="season-trophy-img" />
              </div>
            </div>
          )}
          <button
            className="nav-item"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronLeft
              size={19}
              style={{
                transform: collapsed ? "rotate(180deg)" : "none",
                transition: "transform 0.25s ease",
              }}
            />
            {!collapsed && <span>Collapse sidebar</span>}
          </button>
        </div>
      </aside>
      <main className="main">
        <header className="topbar">
          <button
            className="icon-btn mobile-menu"
            onClick={() => setMobile(!mobile)}
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={22} />
          </button>
          <div className="crumb">
            PRESSURE IQ <span>/</span> <b>{active.toUpperCase()}</b>
          </div>
          <div className="top-actions">
            <div className="period-pill">
              <span className="live-dot" /> 2022–2026 <ChevronDown size={14} />
            </div>
            <button className="avatar" aria-label="Rajasthan Royals Profile">
              <img src={rrLogo} alt="Rajasthan Royals" className="avatar-img" />
            </button>
          </div>
        </header>
        <div className="content">
          <AnimatePresence mode="wait">
            <motion.div
              key={loc.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {loc.pathname === "/" ? (
                <Landing go={go} />
              ) : loc.pathname === "/dashboard" ? (
                <Dashboard go={go} />
              ) : loc.pathname === "/rankings" ? (
                <Rankings />
              ) : loc.pathname === "/explorer" ? (
                <Explorer />
              ) : loc.pathname === "/players" ? (
                <Players />
              ) : loc.pathname === "/compare" ? (
                <Compare />
              ) : loc.pathname === "/methodology" ? (
                <Methodology />
              ) : (
                <DataPage />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <footer>
          <img
            src={rrLogo}
            alt="Rajasthan Royals"
            className="footer-logo"
            width="24"
            height="24"
            loading="lazy"
          />
          PRESSURE IQ <span>·</span> AN INDEPENDENT DATA-DRIVEN PLAYER
          EVALUATION CONCEPT <span>·</span> NOT AFFILIATED WITH RAJASTHAN ROYALS
        </footer>
      </main>
    </div>
  );
}

function Landing({ go }) {
  const [activeCollage, setActiveCollage] = useState(0);
  const collages = [
    { img: rrCollage, label: "Royals Forever" },
    { img: rrCollageAlt, label: "Matchday Collage" },
  ];

  return (
    <div className="landing">
      <section className="hero">
        <div
          className="hero-bg-collage"
          style={{ backgroundImage: `url(${collages[activeCollage].img})` }}
          aria-hidden="true"
        />
        <div className="hero-glow" />
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span /> THE PRESSURE PERFORMANCE INDEX
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            THE ROYAL GAME.
            <br />
            <em>DECODED.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            Pressure doesn't make players. It reveals them. Discover the
            performers who deliver when the game is on the line — backed by
            192,635 deliveries of data.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            <motion.button
              className="primary"
              onClick={() => go("/dashboard")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore intelligence <ArrowUpRight size={17} />
            </motion.button>
            <motion.button
              className="secondary"
              onClick={() => go("/methodology")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Our methodology <ChevronRight size={16} />
            </motion.button>
          </motion.div>
          <motion.div
            className="hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div>
              <strong>831</strong>
              <span>MATCHES</span>
            </div>
            <div>
              <strong>192.6K</strong>
              <span>DELIVERIES</span>
            </div>
            <div>
              <strong>67.7K</strong>
              <span>PRESSURE BALLS</span>
            </div>
          </motion.div>
        </div>
        <div className="hero-art">
          <motion.div
            className="orbit orbit-a"
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="orbit orbit-b"
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          />

          <div className="hero-art-layout">
            <div className="hero-spotlights">
              <motion.div
                className="spotlight-card batter-spotlight"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="spotlight-badge">
                  <span className="spotlight-pill">TOP BATTER</span>
                  <span className="mini-mark">PPI #1</span>
                </div>
                <div className="spotlight-name">D. Mitchell</div>
                <div className="spotlight-score">
                  <strong>84.3</strong>
                  <span>PPI / 100</span>
                </div>
                <div className="spotlight-sub">566 runs · 161.3 P-SR</div>
              </motion.div>

              <motion.div
                className="spotlight-card bowler-spotlight"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="spotlight-badge">
                  <span className="spotlight-pill gold">TOP BOWLER</span>
                  <span className="mini-mark">PPI #1</span>
                </div>
                <div className="spotlight-name">Mujeeb Ur Rahman</div>
                <div className="spotlight-score">
                  <strong className="gold-text">73.1</strong>
                  <span>PPI / 100</span>
                </div>
                <div className="spotlight-sub">7.4 econ · 18 wickets</div>
              </motion.div>
            </div>

            <div className="hero-collage-wrap">
              <div className="hero-collage-toolbar">
                {collages.map((c, i) => (
                  <button
                    key={c.label}
                    className={`collage-tab-btn ${activeCollage === i ? "active" : ""}`}
                    onClick={() => setActiveCollage(i)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <motion.div
                className="hero-collage-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={collages[activeCollage].img}
                  alt={`Rajasthan Royals ${collages[activeCollage].label}`}
                  className="hero-collage-img"
                  width="310"
                  height="460"
                />
                <div className="hero-collage-overlay" />
              </motion.div>
              <div className="art-caption">
                PRESSURE REVEALS GREATNESS
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          SCROLL TO EXPLORE <span>↓</span>
        </div>
      </section>

      <motion.section
        className="section intro-grid"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <div className="eyebrow">01 / THE INTELLIGENCE</div>
          <h2>
            Beyond the
            <br />
            <em>scorecard.</em>
          </h2>
        </div>
        <div className="intro-text">
          <p>
            Career numbers tell you what a player has done. Pressure IQ asks a
            different question:{" "}
            <b>what happens when the match gets difficult?</b>
          </p>
          <p>
            We compare every pressure performance against players in similar
            match contexts — then adjust for sample reliability.
          </p>
          <button className="text-link" onClick={() => go("/methodology")}>
            Understand the model <ArrowUpRight size={15} />
          </button>
        </div>
      </motion.section>

      <motion.section
        className="section featured"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="section-head">
          <div>
            <div className="eyebrow">02 / THE ROYAL RANKINGS</div>
            <h2>
              Built for the <em>big moments.</em>
            </h2>
          </div>
          <motion.button
            className="secondary"
            onClick={() => go("/rankings")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View all rankings <ArrowUpRight size={16} />
          </motion.button>
        </div>
        <div className="feature-cards">
          <Feature
            rank="01"
            name="Daryl Mitchell"
            role="BATTER · PRESSURE PPI"
            score="84.3"
            note="Best combination of volume and contextual contribution"
          />
          <Feature
            rank="02"
            name="Mark Chapman"
            role="BATTER · PRESSURE PPI"
            score="83.7"
            note="Excellent pressure average, strike rate and survival"
          />
          <Feature
            rank="01"
            name="Mujeeb Ur Rahman"
            role="BOWLER · PRESSURE PPI"
            score="73.1"
            note="Best pressure control and dot-ball performance"
          />
        </div>
      </motion.section>

      <motion.section
        className="section method-strip"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="method-hallabol-badge">
          <img src={rrHallaBol} alt="Halla Bol! Rajasthan Royals" className="method-hallabol-img" />
          <div className="hallabol-neon-glow" />
        </div>
        <div>
          <div className="eyebrow">03 / THE METHOD</div>
          <h2>
            Pressure is a <em>context.</em>
          </h2>
          <p>
            Not just the last five overs. We reconstruct the match state before
            every delivery.
          </p>
        </div>
        <div className="method-points">
          <span>
            <b>01</b> Difficult chase · RRR ≥ 9
          </span>
          <span>
            <b>02</b> Chase under collapse · 5+ down, ≤60 balls
          </span>
          <span>
            <b>03</b> First-innings collapse · 5+ down, ≤30 balls
          </span>
        </div>
        <motion.button
          className="primary"
          onClick={() => go("/explorer")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore pressure situations <ArrowUpRight size={16} />
        </motion.button>
      </motion.section>
    </div>
  );
}

function Feature({ rank, name, role, score, note }) {
  return (
    <motion.div
      className="feature-card"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="feature-top">
        <span>RANK {rank}</span>
        <span className="mini-mark">PIQ</span>
      </div>
      <div className="feature-person">
        <div className="player-monogram">
          {name
            .split(" ")
            .map((x) => x[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <small>{role}</small>
          <h3>{name}</h3>
        </div>
      </div>
      <div className="feature-score">
        <strong>{score}</strong>
        <span>/ 100 PPI</span>
      </div>
      <div className="feature-note">{note}</div>
    </motion.div>
  );
}

function PageTitle({ eyebrow, title, desc, action }) {
  return (
    <div className="page-title">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      {action}
    </div>
  );
}

function Dashboard({ go }) {
  const [format, setFormat] = useState("All formats");
  return (
    <>
      <PageTitle
        eyebrow="MATCH INTELLIGENCE / 2022—2026"
        title={
          <>
            The pressure <em>index.</em>
          </>
        }
        desc="A data-led view of who rises when the match gets difficult."
        action={
          <select
            className="filter-select"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            aria-label="Format Filter"
          >
            <option>All formats</option>
            <option>IPL</option>
            <option>T20I</option>
          </select>
        }
      />
      <div className="kpi-grid">
        <Kpi
          label="MATCHES ANALYSED"
          value="831"
          sub="367 IPL · 464 T20I"
          icon={Activity}
        />
        <Kpi
          label="DELIVERIES PROCESSED"
          value="192,635"
          sub="2022–2026 data window"
          icon={Database}
        />
        <Kpi
          label="PRESSURE DELIVERIES"
          value="67,699"
          sub="35.1% of all deliveries"
          icon={Flame}
        />
        <Kpi
          label="PLAYERS EVALUATED"
          value="20"
          sub="10 batters · 10 bowlers"
          icon={Users}
        />
      </div>
      <div className="dashboard-grid">
        <div className="panel chart-panel">
          <div className="panel-head">
            <div>
              <span className="panel-kicker">PRESSURE LANDSCAPE</span>
              <h3>Where the game tightens</h3>
            </div>
            <span className="subtle-tag">DELIVERY SHARE</span>
          </div>
          <div className="pressure-bars">
            <div className="bar-line">
              <div>
                <span>Difficult chase</span>
                <b>RRR ≥ 9</b>
              </div>
              <div className="bar-track">
                <i style={{ width: "58%" }} />
              </div>
              <strong>58%</strong>
            </div>
            <div className="bar-line">
              <div>
                <span>Chase collapse</span>
                <b>5+ wickets · ≤60 balls</b>
              </div>
              <div className="bar-track">
                <i style={{ width: "27%" }} />
              </div>
              <strong>27%</strong>
            </div>
            <div className="bar-line">
              <div>
                <span>First-innings collapse</span>
                <b>5+ wickets · ≤30 balls</b>
              </div>
              <div className="bar-track">
                <i style={{ width: "15%" }} />
              </div>
              <strong>15%</strong>
            </div>
          </div>
          <div className="chart-foot">
            Pressure condition categories are not mutually exclusive in the
            source methodology.
          </div>
        </div>
        <div className="panel insight-panel">
          <div
            className="insight-bg-image"
            style={{ backgroundImage: `url(${rrTeamCelebrate})` }}
            aria-hidden="true"
          />
          <div className="insight-content">
            <span className="panel-kicker">KEY FINDING</span>
            <div className="insight-icon">
              <Zap size={22} />
            </div>
            <h3>
              Career form ≠<br />
              <em>pressure form.</em>
            </h3>
            <p>
              A strong overall strike rate does not guarantee positive contextual
              pressure contribution. That gap is where Pressure IQ adds value.
            </p>
            <button className="text-link" onClick={() => go("/rankings")}>
              Explore the rankings <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
      <div className="panel table-panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">TOP PERFORMERS</span>
            <h3>Batting pressure leaderboard</h3>
          </div>
          <button className="text-link" onClick={() => go("/rankings")}>
            Full rankings <ArrowUpRight size={15} />
          </button>
        </div>
        <RankTable type="batters" rows={batters.slice(0, 5)} />
      </div>
      <div className="panel phase-panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">BOWLING INTELLIGENCE</span>
            <h3>Specialists by innings phase</h3>
          </div>
          <button className="text-link" onClick={() => go("/players")}>
            Player insights <ArrowUpRight size={15} />
          </button>
        </div>
        <div className="phase-cards">
          {phases.map((p) => (
            <div className="phase-card" key={p.name}>
              <span>{p.name}</span>
              <strong>{p.rows[0][0]}</strong>
              <b>
                {p.rows[0][1]} <small>ECON</small>
              </b>
              <p>{p.rows[0][2]} wickets / legal balls</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Kpi({ label, value, sub, icon: Icon }) {
  return (
    <motion.div
      className="kpi"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="kpi-top">
        <span>{label}</span>
        <Icon size={18} />
      </div>
      <strong>{value}</strong>
      <small>{sub}</small>
    </motion.div>
  );
}

function Rankings() {
  const [tab, setTab] = useState("batters"),
    [query, setQuery] = useState(""),
    [rel, setRel] = useState("All reliability");
  const rows = tab === "batters" ? batters : bowlers;
  const filtered = rows.filter(
    (r) =>
      r[0].toLowerCase().includes(query.toLowerCase()) &&
      (rel === "All reliability" || r[2] === rel),
  );
  return (
    <>
      <PageTitle
        eyebrow="THE ROYAL RANKINGS / PPI"
        title={
          <>
            The pressure <em>list.</em>
          </>
        }
        desc="Shortlist-relative scores, adjusted towards 50 for smaller pressure samples."
      />

      <div className="rankings-trophy-banner panel">
        <div className="trophy-banner-text">
          <span className="panel-kicker">THE CHAMPIONSHIP STANDARD</span>
          <h3>Evaluating players when silverware is on the line</h3>
          <p>
            Trophies are won in the crunch overs. The Pressure Performance Index identifies who steps up under maximum match tension.
          </p>
        </div>
        <div className="trophy-banner-visual">
          <img src={rrTrophy} alt="TATA IPL Championship Trophy" className="trophy-banner-img" />
          <div className="trophy-banner-glow" />
        </div>
      </div>

      <div className="ranking-toolbar">
        <div className="tabs">
          <button
            className={tab === "batters" ? "selected" : ""}
            onClick={() => setTab("batters")}
          >
            Batters <span>10</span>
          </button>
          <button
            className={tab === "bowlers" ? "selected" : ""}
            onClick={() => setTab("bowlers")}
          >
            Bowlers <span>10</span>
          </button>
        </div>
        <div className="tools">
          <div className="searchbox">
            <Search size={16} />
            <input
              placeholder="Find a player"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Find a player"
            />
          </div>
          <select
            className="filter-select"
            value={rel}
            onChange={(e) => setRel(e.target.value)}
            aria-label="Filter by reliability"
          >
            <option>All reliability</option>
            <option>High</option>
            <option>Medium</option>
          </select>
        </div>
      </div>
      <div className="panel table-panel ranking-table">
        <div className="table-caption">
          <div>
            <span className="panel-kicker">
              {tab === "batters" ? "BATTING" : "BOWLING"} PPI LEADERBOARD
            </span>
            <p>{filtered.length} players · sorted by Pressure IQ score</p>
          </div>
          <span className="subtle-tag">OUT OF 100</span>
        </div>
        <RankTable type={tab} rows={filtered} />
      </div>
      <div className="note-line">
        <CircleHelp size={16} /> PPI is a relative score within this 20-player
        shortlist, not a probability of future success.
      </div>
    </>
  );
}

function RankTable({ type, rows }) {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>RANK</th>
            <th>PLAYER</th>
            <th>PRESSURE PPI</th>
            <th>RELIABILITY</th>
            {type === "batters" ? (
              <>
                <th>PRESSURE RUNS</th>
                <th>P-SR</th>
                <th>RUNS ABOVE EXPECTED</th>
              </>
            ) : (
              <>
                <th>PRESSURE BALLS</th>
                <th>ECONOMY</th>
                <th>WICKETS</th>
                <th>WICKETS VS EXPECTED</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r[0]}>
              <td className="rank-num">{String(i + 1).padStart(2, "0")}</td>
              <td>
                <div className="table-player">
                  <div className="table-avatar">
                    {r[0]
                      .split(" ")
                      .map((x) => x[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <b>{r[0]}</b>
                </div>
              </td>
              <td>
                <div className="ppi-cell">
                  <b>{r[1].toFixed(1)}</b>
                  <div className="ppi-track">
                    <i style={{ width: r[1] + "%" }} />
                  </div>
                </div>
              </td>
              <td>
                <Reliability value={r[2]} />
              </td>
              {type === "batters" ? (
                <>
                  <td>
                    {r[3].toLocaleString()} / {r[4]}
                  </td>
                  <td>{r[5].toFixed(1)}</td>
                  <td className={r[8] >= 0 ? "positive" : "negative"}>
                    {r[8] >= 0 ? "+" : ""}
                    {r[8].toFixed(1)}
                  </td>
                </>
              ) : (
                <>
                  <td>{r[3]}</td>
                  <td>{r[4].toFixed(1)}</td>
                  <td>{r[5]}</td>
                  <td className={r[7] >= 0 ? "positive" : "negative"}>
                    {r[7] >= 0 ? "+" : ""}
                    {r[7].toFixed(1)}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Reliability({ value }) {
  return (
    <span
      className={`reliability ${
        value === "High"
          ? "high"
          : value.includes("Very")
          ? "verylow"
          : value === "Medium"
          ? "medium"
          : "low"
      }`}
    >
      <i />
      {value}
    </span>
  );
}

function Explorer() {
  const [situation, setSituation] = useState("All pressure situations"),
    [player, setPlayer] = useState("All players");
  return (
    <>
      <PageTitle
        eyebrow="DELIVERY-LEVEL CONTEXT"
        title={
          <>
            Pressure <em>explorer.</em>
          </>
        }
        desc="Explore how the model defines difficult match situations and compares player output with context-matched peers."
      />
      <div className="explorer-filters">
        <label>
          PRESSURE SCENARIO
          <select
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            aria-label="Pressure Scenario"
          >
            <option>All pressure situations</option>
            <option>Difficult chase · RRR ≥ 9</option>
            <option>Chase collapse · 5+ down, ≤60 balls</option>
            <option>First-innings collapse · 5+ down, ≤30 balls</option>
          </select>
        </label>
        <label>
          PLAYER GROUP
          <select
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
            aria-label="Player Group"
          >
            <option>All players</option>
            <option>Batters</option>
            <option>Bowlers</option>
          </select>
        </label>
        <span className="subtle-tag">RECONSTRUCTED PRE-DELIVERY STATE</span>
      </div>
      <div className="explorer-hero panel">
        <div
          className="explorer-hero-bg"
          style={{ backgroundImage: `url(${rrHallaBol})` }}
          aria-hidden="true"
        />
        <div className="explorer-hero-content">
          <span className="panel-kicker">PRESSURE ENGINE · HALLA BOL</span>
          <h2>
            67,699 <em>pressure deliveries.</em>
          </h2>
          <p>
            Every delivery is evaluated against the match state before it
            happened — not just the over number.
          </p>
        </div>
        <div className="pressure-dial">
          <div>
            <strong>35.1%</strong>
            <small>OF ALL BALLS</small>
          </div>
        </div>
      </div>
      <div className="scenario-grid">
        <Scenario
          num="01"
          title="Difficult chase"
          rule="Required run rate ≥ 9"
          detail="A chase where the scoring demand has moved into a high-pressure range."
        />
        <Scenario
          num="02"
          title="Chase under collapse"
          rule="5+ wickets lost · 60 or fewer balls left"
          detail="A depleted batting side with limited resources and a short runway."
        />
        <Scenario
          num="03"
          title="First-innings collapse"
          rule="5+ wickets lost · 30 or fewer balls left"
          detail="Late-innings recovery under severe batting-resource pressure."
        />
      </div>
      <div className="panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">CONTEXT MATCHING</span>
            <h3>What makes a fair comparison?</h3>
          </div>
        </div>
        <div className="matching-grid">
          {[
            "Competition format",
            "Innings number",
            "Innings phase",
            "Wickets already lost",
            "Required-run-rate category",
            "Batting-position group",
          ].map((x, i) => (
            <div key={x}>
              <span>0{i + 1}</span>
              <b>{x}</b>
            </div>
          ))}
        </div>
        <p className="chart-foot">
          Detailed peer groups require at least 100 balls. Smaller groups fall
          back to broader format / innings / phase comparisons. A player's own
          deliveries are excluded from their expected baseline.
        </p>
      </div>
    </>
  );
}

function Scenario({ num, title, rule, detail }) {
  return (
    <motion.div
      className="scenario-card"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <span>{num}</span>
      <h3>{title}</h3>
      <b>{rule}</b>
      <p>{detail}</p>
    </motion.div>
  );
}

function Players() {
  const [selected, setSelected] = useState("Daryl Mitchell"),
    [type, setType] = useState("batters");
  const rows = type === "batters" ? batters : bowlers;
  const p = rows.find((x) => x[0] === selected) || rows[0];
  return (
    <>
      <PageTitle
        eyebrow="PLAYER INTELLIGENCE"
        title={
          <>
            Inside the <em>numbers.</em>
          </>
        }
        desc="A closer look at player pressure profiles and the context behind each rating."
      />
      <div className="profile-select">
        <div className="tabs">
          <button
            className={type === "batters" ? "selected" : ""}
            onClick={() => {
              setType("batters");
              setSelected("Daryl Mitchell");
            }}
          >
            Batters
          </button>
          <button
            className={type === "bowlers" ? "selected" : ""}
            onClick={() => {
              setType("bowlers");
              setSelected("Mujeeb Ur Rahman");
            }}
          >
            Bowlers
          </button>
        </div>
        <select
          className="filter-select"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          aria-label="Select Player"
        >
          {rows.map((r) => (
            <option key={r[0]}>{r[0]}</option>
          ))}
        </select>
      </div>
      <div className="profile-hero panel">
        <div className="profile-avatar">
          {selected
            .split(" ")
            .map((x) => x[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div className="profile-main">
          <span className="panel-kicker">
            {type === "batters"
              ? "MIDDLE-ORDER PRESSURE BATTER"
              : "PRESSURE BOWLING PROFILE"}
          </span>
          <h2>{selected}</h2>
          <Reliability value={p[2]} />
        </div>
        <div className="profile-score">
          <strong>{p[1].toFixed(1)}</strong>
          <span>PRESSURE PPI / 100</span>
        </div>
      </div>
      {type === "batters" ? (
        <>
          <div className="kpi-grid profile-kpis">
            <Kpi
              label="PRESSURE RUNS"
              value={p[3]}
              sub={`${p[4]} balls faced`}
              icon={Activity}
            />
            <Kpi
              label="PRESSURE STRIKE RATE"
              value={p[5].toFixed(1)}
              sub="Runs per 100 balls"
              icon={Zap}
            />
            <Kpi
              label="PRESSURE AVERAGE"
              value={p[6].toFixed(1)}
              sub="Runs per dismissal"
              icon={Target}
            />
            <Kpi
              label="RUNS ABOVE EXPECTED"
              value={`${p[8] >= 0 ? "+" : ""}${p[8].toFixed(1)}`}
              sub="Context-matched baseline"
              icon={ChartNoAxesCombined}
            />
          </div>
          <div className="panel">
            <div className="panel-head">
              <div>
                <span className="panel-kicker">PLAYER READOUT</span>
                <h3>What the numbers say</h3>
              </div>
            </div>
            <div className="readout-grid">
              <div>
                <span>STRIKE RATE ADVANTAGE</span>
                <strong className={p[8] >= 0 ? "positive" : "negative"}>
                  {p[8] >= 0 ? "+" : ""}
                  {p[8].toFixed(1)}
                </strong>
              </div>
              <div>
                <span>DISMISSAL RATE</span>
                <strong>
                  {p[4] ? ((1 / p[6]) * 100).toFixed(1) + "%" : "—"}
                </strong>
              </div>
              <div>
                <span>PRESSURE SAMPLE</span>
                <strong>{p[4]} balls</strong>
              </div>
            </div>
            <p className="chart-foot">
              Batting PPI uses pressure deliveries faced at positions 4–7.
              Ordinary batting statistics in the report include all batting
              positions.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="kpi-grid profile-kpis">
            <Kpi
              label="PRESSURE LEGAL BALLS"
              value={p[3]}
              sub="Pressure bowling sample"
              icon={Activity}
            />
            <Kpi
              label="PRESSURE ECONOMY"
              value={p[4].toFixed(1)}
              sub="Recorded conceded runs"
              icon={Target}
            />
            <Kpi
              label="PRESSURE WICKETS"
              value={p[5]}
              sub="Credited wickets"
              icon={Flame}
            />
            <Kpi
              label="WICKETS ABOVE EXPECTED"
              value={`${p[7] >= 0 ? "+" : ""}${p[7].toFixed(1)}`}
              sub="Context-matched baseline"
              icon={ChartNoAxesCombined}
            />
          </div>
          <div className="panel">
            <div className="panel-head">
              <div>
                <span className="panel-kicker">PLAYER READOUT</span>
                <h3>Phase fit & risk profile</h3>
              </div>
            </div>
            <p className="body-copy">
              Use the phase explorer to compare this bowler's powerplay,
              middle-over and death-over evidence. Pressure PPI captures a
              different dimension from overall wickets and economy.
            </p>
            <button
              className="text-link"
              onClick={() =>
                document
                  .getElementById("phase-data")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View phase evidence <ArrowUpRight size={15} />
            </button>
          </div>
        </>
      )}
      {type === "bowlers" && (
        <div className="panel" id="phase-data">
          <div className="panel-head">
            <div>
              <span className="panel-kicker">PHASE COMPARISON</span>
              <h3>Best economy by innings phase</h3>
            </div>
          </div>
          <div className="phase-cards">
            {phases.map((p) => (
              <div className="phase-card" key={p.name}>
                <span>{p.name}</span>
                <strong>
                  {p.rows.find((x) => x[0] === selected)?.[0] || p.rows[0][0]}
                </strong>
                <b>
                  {p.rows.find((x) => x[0] === selected)?.[1] || "—"}{" "}
                  <small>ECON</small>
                </b>
                <p>
                  {p.rows.find((x) => x[0] === selected)?.[2] ||
                    "No phase row shown"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function Compare() {
  const [a, setA] = useState("Daryl Mitchell"),
    [b, setB] = useState("Mark Chapman");
  return (
    <>
      <PageTitle
        eyebrow="COMPARATIVE INTELLIGENCE"
        title={
          <>
            Compare the <em>composure.</em>
          </>
        }
        desc="A side-by-side view of pressure performers. Comparisons are descriptive, not a prediction."
      />

      <div className="compare-showcase-panel panel">
        <div
          className="compare-showcase-bg"
          style={{ backgroundImage: `url(${rrCollageAlt})` }}
          aria-hidden="true"
        />
        <div className="compare-showcase-content">
          <span className="panel-kicker">MATCH-UP SIMULATION</span>
          <h3>Head-to-head pressure showdown</h3>
          <p>
            Simulating middle-order composure under intense chase and collapse scenarios. Compare context-matched metrics side by side.
          </p>
        </div>
        <div className="compare-showcase-thumb">
          <img src={rrCollageAlt} alt="Royals Matchup" className="compare-thumb-img" />
        </div>
      </div>

      <div className="compare-controls">
        <PlayerSelect value={a} set={setA} options={batters} />
        <span>VS</span>
        <PlayerSelect value={b} set={setB} options={batters} />
      </div>
      <div className="compare-grid">
        {[a, b].map((n, i) => {
          let p = batters.find((x) => x[0] === n);
          return (
            <motion.div
              className="compare-card panel"
              key={n}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="panel-kicker">
                {i ? "CHALLENGER" : "PLAYER A"}
              </span>
              <h2>{n}</h2>
              <div className="compare-score">
                {p[1].toFixed(1)} <small>PPI</small>
              </div>
              <Reliability value={p[2]} />
              <div className="compare-stats">
                <span>
                  Pressure runs <b>{p[3]}</b>
                </span>
                <span>
                  Pressure balls <b>{p[4]}</b>
                </span>
                <span>
                  Pressure SR <b>{p[5].toFixed(1)}</b>
                </span>
                <span>
                  Pressure avg <b>{p[6].toFixed(1)}</b>
                </span>
                <span>
                  Runs above expected{" "}
                  <b className={p[8] >= 0 ? "positive" : "negative"}>
                    {p[8] >= 0 ? "+" : ""}
                    {p[8].toFixed(1)}
                  </b>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="note-line">
        <CircleHelp size={16} /> Both players are compared using middle-order
        pressure deliveries (positions 4–7). Mark Chapman has no IPL batting
        sample in this period; his evidence is international.
      </div>
    </>
  );
}

function PlayerSelect({ value, set, options }) {
  return (
    <label>
      <span>SELECT BATTER</span>
      <select
        value={value}
        onChange={(e) => set(e.target.value)}
        aria-label="Select Batter"
      >
        {options.map((p) => (
          <option key={p[0]}>{p[0]}</option>
        ))}
      </select>
    </label>
  );
}

function Methodology() {
  return (
    <>
      <PageTitle
        eyebrow="MODEL TRANSPARENCY"
        title={
          <>
            The science of <em>pressure.</em>
          </>
        }
        desc="A transparent, reproducible framework for evaluating performance when match conditions become difficult."
      />
      <div className="method-hero panel">
        <div
          className="method-hero-bg"
          style={{ backgroundImage: `url(${rrChampions2008})` }}
          aria-hidden="true"
        />
        <div className="method-hero-content">
          <span className="panel-kicker">PRESSURE PERFORMANCE INDEX</span>
          <h2>
            Context first.
            <br />
            <em>Reputation last.</em>
          </h2>
          <p>
            Pressure IQ uses empirical peer comparisons, not a trained
            machine-learning prediction model. A player's own deliveries are
            excluded from their expected baseline.
          </p>
          <div className="champions-legacy-tag">
            <span className="live-dot" /> 2008 INAUGURAL CHAMPIONS LEGACY · THE SHANE WARNE BLUEPRINT
          </div>
        </div>
        <div className="method-stat">
          <strong>100</strong>
          <span>
            MINIMUM PEER BALLS
            <br />
            FOR DETAILED CONTEXT
          </span>
        </div>
      </div>
      <div className="method-columns">
        <div className="panel">
          <span className="panel-kicker">01 / PRESSURE DEFINITION</span>
          <h3>Three pressure triggers</h3>
          <div className="method-row">
            <b>01</b>
            <div>
              <strong>Difficult chase</strong>
              <p>Required run rate of 9 or more.</p>
            </div>
          </div>
          <div className="method-row">
            <b>02</b>
            <div>
              <strong>Chase under collapse</strong>
              <p>5+ wickets lost and 60 or fewer balls remaining.</p>
            </div>
          </div>
          <div className="method-row">
            <b>03</b>
            <div>
              <strong>First-innings collapse</strong>
              <p>5+ wickets lost and 30 or fewer balls remaining.</p>
            </div>
          </div>
        </div>
        <div className="panel">
          <span className="panel-kicker">02 / CONTEXT MATCHING</span>
          <h3>Like-for-like baselines</h3>
          <p className="body-copy">
            Comparisons consider competition format, innings, innings phase,
            wickets lost, required-run-rate category and batting-position group.
            Detailed groups require 100 balls; smaller groups fall back to
            broader groups.
          </p>
          <div className="baseline-list">
            <span>IPL or T20I</span>
            <span>First or second innings</span>
            <span>Powerplay / middle / death</span>
            <span>Wickets already lost</span>
            <span>Required run-rate category</span>
            <span>Batting position group</span>
          </div>
        </div>
      </div>
      <div className="panel weights-panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">03 / SCORING MODEL</span>
            <h3>What goes into the PPI?</h3>
          </div>
        </div>
        <div className="weight-columns">
          <Weight
            title="Batting PPI"
            rows={[
              ["Runs above expected", 25],
              ["Strike-rate advantage", 20],
              ["Pressure batting average", 15],
              ["Survival / dismissal rate", 10],
              ["Boundary contribution", 10],
              ["Dot-ball control", 5],
              ["Match consistency", 5],
              ["Sample-size reliability", 10],
            ]}
          />
          <Weight
            title="Bowling PPI"
            rows={[
              ["Runs saved per six legal pressure balls", 25],
              ["Wickets above expected", 20],
              ["Pressure wickets per 100 legal balls", 15],
              ["Pressure dot-ball percentage", 15],
              ["Boundary prevention", 10],
              ["Match consistency", 5],
              ["Sample-size reliability", 10],
            ]}
          />
        </div>
        <p className="chart-foot">
          Component scores are percentile-based within the shortlisted players,
          then adjusted towards 50 for smaller samples. PPI is not a probability
          of success.
        </p>
      </div>
      <div className="panel">
        <span className="panel-kicker">04 / DATA PREPARATION</span>
        <h3>What the calculations include</h3>
        <div className="data-rules">
          {[
            "Matches played are counted using the playing-eleven file.",
            "Batting innings require at least one delivery faced.",
            "Balls faced exclude wides; no-balls count as balls faced.",
            "Bowling legal balls exclude wides and no-balls.",
            "Bowler wickets exclude run-outs, retired hurt, retired out and obstructing-the-field dismissals.",
            "Economy, average and bowling strike rate are calculated from supplied delivery records.",
          ].map((x) => (
            <div key={x}>
              <ShieldCheck size={16} />
              {x}
            </div>
          ))}
        </div>
      </div>
      <div className="limitations">
        <div className="eyebrow">05 / READ THE FINE PRINT</div>
        <h3>Limitations & interpretation</h3>
        <ul>
          <li>
            Pressure is a match-state proxy, not a measure of a player's actual
            psychological state.
          </li>
          <li>
            Expected performance is an empirical comparison, not an ML
            prediction.
          </li>
          <li>
            Small samples carry more uncertainty; reliability labels must be
            read alongside scores.
          </li>
          <li>
            IPL and T20I are different environments. International performance
            is not proof of IPL performance.
          </li>
          <li>
            Extras are incompletely recorded; exact official economy and extras
            figures are not guaranteed.
          </li>
          <li>PPI is shortlist-relative, not an absolute universal rating.</li>
          <li>
            Auction availability and player registration are not evaluated.
          </li>
        </ul>
      </div>
    </>
  );
}

function Weight({ title, rows }) {
  return (
    <div className="weight-card">
      <h4>{title}</h4>
      {rows.map(([n, v]) => (
        <div className="weight-row" key={n}>
          <span>{n}</span>
          <div>
            <i style={{ width: v * 3 + "px" }} />
          </div>
          <b>{v}%</b>
        </div>
      ))}
    </div>
  );
}

function DataPage() {
  return (
    <>
      <PageTitle
        eyebrow="DATA FOUNDATION"
        title={
          <>
            The numbers <em>behind it.</em>
          </>
        }
        desc="Coverage, preparation rules and known constraints for the selected 2022–2026 data window."
      />
      <div className="kpi-grid">
        <Kpi
          label="IPL MATCHES"
          value="367"
          sub="87,687 deliveries"
          icon={Activity}
        />
        <Kpi
          label="SENIOR T20I MATCHES"
          value="464"
          sub="104,948 deliveries"
          icon={Activity}
        />
        <Kpi
          label="TOTAL MATCHES"
          value="831"
          sub="Selected match records"
          icon={Database}
        />
        <Kpi
          label="TOTAL DELIVERIES"
          value="192,635"
          sub="Ball-by-ball records"
          icon={BarChart3}
        />
      </div>
      <div className="panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">DATA COVERAGE</span>
            <h3>Competition breakdown</h3>
          </div>
          <span className="subtle-tag">2022 — 2026</span>
        </div>
        <div className="coverage">
          <div>
            <span>IPL</span>
            <strong>45.1%</strong>
            <div className="bar-track">
              <i style={{ width: "45.1%" }} />
            </div>
            <small>367 matches · 87,687 deliveries</small>
          </div>
          <div>
            <span>Senior T20I</span>
            <strong>54.9%</strong>
            <div className="bar-track">
              <i style={{ width: "54.9%" }} />
            </div>
            <small>464 matches · 104,948 deliveries</small>
          </div>
        </div>
        <p className="chart-foot">
          Selected competition records include senior T20I competitions and
          senior Asia Cups. Emerging and Rising Stars competitions are excluded.
          16 selected match records without delivery data are not included in
          calculations.
        </p>
      </div>
      <div className="panel">
        <span className="panel-kicker">DATA QUALITY NOTE</span>
        <h3>Extras require caution</h3>
        <p className="body-copy">
          The dataset identifies wide and no-ball deliveries but does not
          consistently store their complete penalty-run amounts. An identifiable
          base penalty is included where missing. Exact extras conceded should
          not be treated as an official scorecard figure.
        </p>
      </div>
      <div className="note-line">
        <Database size={16} /> This website prototype is populated from the
        final evaluation report supplied in this conversation. It does not
        currently connect to the original CSV files or recompute the statistics
        live.
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;

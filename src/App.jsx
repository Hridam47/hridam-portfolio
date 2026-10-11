import { useEffect, useState } from 'react'
import './App.css'
import { person, hero, stats, interests, research, skillGroups, publications, education, honors, certs, experience, supervisors, galleries, folderOf } from './data.js'

const nice = v => v.replaceAll('-', ' ').replace(/\b\w/g, c => c.toUpperCase())
const img = (section, folder, file) => `/assets/${folderOf(section)}/${folder}/${file}`

const nav = [
  ['research', 'Research'],
  ['methods', 'Methods'],
  ['work', 'Engineering work'],
  ['publications', 'Publications'],
  ['background', 'Experience'],
  ['supervisors', 'For supervisors'],
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="top">
      <a className="brand" href="#top">{person.name}</a>
      <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? '×' : '☰'}</button>
      <nav className={open ? 'open' : ''}>
        {nav.map(([id, t]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{t}</a>)}
        <a className="btn small" href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-text">
        <p className="pill"><span className="dot" />{hero.seeking}</p>
        <h1>{hero.headline}</h1>
        <p className="lead">{hero.sub}</p>
        <div className="cta">
          <a className="btn" href={`mailto:${person.email}`}>Email me</a>
          <a className="btn ghost" href={person.cv} target="_blank" rel="noreferrer">Download CV ↓</a>
          <a className="btn ghost" href="#research">See research →</a>
        </div>
      </div>
      <aside className="card id-card">
        <img src="/profile.jpg" alt={person.name} width="320" height="320" />
        <div>
          <h2>{person.name}</h2>
          <p>{person.title}</p>
          <p className="muted">{person.affiliation}</p>
        </div>
      </aside>
    </section>
  )
}

function Interests() {
  return (
    <section className="wrap band" aria-label="Research interests">
      <div className="stats">{stats.map(x => <div key={x.l}><b>{x.n}</b><span>{x.l}</span></div>)}</div>
      <div className="grid4">
        {interests.map(i => (
          <article key={i.n} className="interest">
            <span className="mono">{i.n}</span>
            <h3>{i.t}</h3>
            <p>{i.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Research() {
  return (
    <section className="wrap section" id="research">
      <SectionHead eyebrow="Research" title="Current work" lead="Three projects connected by one question: how do we control composite behaviour by controlling what goes where?" />
      <div className="stack">
        {research.map((r, idx) => (
          <article className="card project" key={r.title}>
            <div className="project-side">
              <span className="mono">{String(idx + 1).padStart(2, '0')}</span>
              <span className="tag">{r.tag}</span>
              <span className="status">{r.status}</span>
              {r.supervisor && <span className="muted small">{r.supervisor}</span>}
            </div>
            <div>
              <h3>{r.title}</h3>
              <p>{r.summary}</p>
              <ul>{r.points.map(p => <li key={p}>{p}</li>)}</ul>
              <div className="chips">{r.meta.map(m => <span key={m}>{m}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Methods() {
  return (
    <section className="wrap section" id="methods">
      <SectionHead eyebrow="Methods" title="From filament to finite elements" lead="I work across the pipeline: making the material, testing it and modelling it." />
      <div className="pipeline" aria-hidden="true">
        {['Extrude', 'Print', 'Test', 'Image', 'Simulate'].map((s, i) => <span key={s}>{s}{i < 4 && <i>→</i>}</span>)}
      </div>
      <div className="grid4">
        {skillGroups.map(g => (
          <div key={g.t} className="card skill">
            <h3>{g.t}</h3>
            <ul>{g.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Work({ open }) {
  const [tab, setTab] = useState('simulations')
  const g = galleries[tab]
  return (
    <section className="wrap section" id="work">
      <SectionHead eyebrow="Engineering work" title="Simulation, design and applied projects" lead="Computational and design work that supports my research: analysis, modelling and delivery to real briefs." />
      <div className="tabs" role="tablist">
        {Object.entries(galleries).map(([k, v]) => (
          <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{v.label}<small>{v.items.length}</small></button>
        ))}
      </div>
      <p className="muted">{g.blurb}</p>
      <div className="tiles">
        {g.items.map(([folder, files]) => (
          <button key={folder} className="tile" onClick={() => open({ section: tab, folder, files })}>
            <img loading="lazy" src={img(tab, folder, files[0])} alt={nice(folder)} />
            <span><b>{nice(folder)}</b><small>{files.length} image{files.length > 1 ? 's' : ''} ↗</small></span>
          </button>
        ))}
      </div>
    </section>
  )
}

function Publications() {
  return (
    <section className="wrap section" id="publications">
      <SectionHead eyebrow="Publications" title="Papers and book chapters" lead="Status is shown as of today; none of these is published yet." />
      <div className="pubs">
        {publications.map(p => (
          <article key={p.title} className="card pub">
            <div className="pub-meta"><span className="tag">{p.type}</span><span className="status">{p.status}</span></div>
            <h3>{p.title}</h3>
            <p className="muted">{p.authors}</p>
            <p className="venue">{p.venue}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Background() {
  return (
    <section className="wrap section" id="background">
      <SectionHead eyebrow="Experience" title="Education, honours and leadership" />
      <div className="two">
        <div>
          <h3 className="sub">Education</h3>
          {education.map(e => (
            <div key={e.t} className="card edu">
              <span className="mono">{e.years}</span>
              <h4>{e.t}</h4>
              <p>{e.s}</p>
              <p className="muted">{e.n}</p>
            </div>
          ))}
          <h3 className="sub">Certifications</h3>
          <div className="card edu"><ul className="plain">{certs.map(c => <li key={c}>{c}</li>)}</ul></div>
        </div>
        <div>
          <h3 className="sub">Honours & awards</h3>
          <div className="card edu">
            {honors.map(([d, t, o]) => <div key={t} className="honor"><span className="mono">{d}</span><b>{t}</b><span className="muted small">{o}</span></div>)}
          </div>
        </div>
      </div>
      <div className="exp">
        {experience.map(g => (
          <div key={g.t}>
            <h3 className="sub">{g.t}</h3>
            {g.items.map(([h, d]) => <div key={h} className="exp-item"><b>{h}</b><p>{d}</p></div>)}
          </div>
        ))}
      </div>
    </section>
  )
}

function Supervisors() {
  const s = supervisors
  return (
    <section className="wrap section" id="supervisors">
      <div className="card dark">
        <SectionHead eyebrow="For prospective supervisors" title="Is there a fit with your group?" lead={s.intro} />
        <div className="grid3">
          <div><h3>Where I fit</h3><ul>{s.fit.map(i => <li key={i}>{i}</li>)}</ul></div>
          <div><h3>What I bring</h3><ul>{s.bring.map(i => <li key={i}>{i}</li>)}</ul></div>
          <div><h3>What I’m looking for</h3><ul>{s.looking.map(i => <li key={i}>{i}</li>)}</ul></div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const links = person.links.filter(l => l.href)
  return (
    <section className="wrap section contact" id="contact">
      <p className="eyebrow">Contact</p>
      <h2>Let’s talk about a PhD project.</h2>
      <a className="mail" href={`mailto:${person.email}?subject=PhD%20inquiry%20%E2%80%93%20${encodeURIComponent(person.name)}`}>{person.email}</a>
      <div className="cta center">
        <a className="btn" href={person.cv} target="_blank" rel="noreferrer">Download CV ↓</a>
        {links.map(l => <a key={l.label} className="btn ghost" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
      </div>
    </section>
  )
}

function SectionHead({ eyebrow, title, lead }) {
  return <div className="head"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{lead && <p className="lead">{lead}</p>}</div>
}

function Lightbox({ item, onClose }) {
  const [i, setI] = useState(0)
  const n = item.files.length
  const move = d => setI(v => (v + d + n) % n)
  useEffect(() => {
    const k = e => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') move(1); if (e.key === 'ArrowLeft') move(-1) }
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  })
  return (
    <div className="lb" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <div className="lb-box" role="dialog" aria-modal="true" aria-label={nice(item.folder)}>
        <button className="lb-x" onClick={onClose} aria-label="Close">×</button>
        <img src={img(item.section, item.folder, item.files[i])} alt={`${nice(item.folder)} ${i + 1}`} />
        <div className="lb-bar">
          <b>{nice(item.folder)}</b>
          {n > 1 && <span><button onClick={() => move(-1)} aria-label="Previous">←</button> {i + 1} / {n} <button onClick={() => move(1)} aria-label="Next">→</button></span>}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [item, setItem] = useState(null)
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Interests />
        <Research />
        <Methods />
        <Work open={setItem} />
        <Publications />
        <Background />
        <Supervisors />
        <Contact />
      </main>
      <footer className="wrap foot"><span>© {new Date().getFullYear()} {person.name}</span><span>{person.affiliation}</span></footer>
      {item && <Lightbox item={item} onClose={() => setItem(null)} />}
    </>
  )
}

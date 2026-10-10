import { useMemo, useState } from 'react'
import './App.css'

const pages = [['research','Research'],['projects','Projects'],['cad','CAD Designs'],['freelance','Freelance Work'],['graphics','Graphics Designs'],['photography','Photography'],['models','Engineering Models'],['simulations','Simulations']]
const copy = {
  research:'A focused record of research questions, methods, and technical contribution—structured for academic review.',
  projects:'Selected engineering projects that move from a defined problem to a testable technical outcome.',
  cad:'Mechanical designs, assemblies, and production-minded concepts developed through iterative CAD workflows.',
  freelance:'Applied engineering and design work delivered for external briefs, presented with scope and outcomes.',
  graphics:'Graphic experiments and visual communication work that make technical ideas clear, memorable, and human.',
  photography:'Observational photography—material, place, and process—curated as a visual research practice.',
  models:'Physical and digital engineering models used to test form, structure, and spatial or mechanical relationships.',
  simulations:'Simulation work is presented as evidence: setup, assumptions, mesh strategy, and results—not just attractive contours.'
}
const placeholders = {research:[['Research direction','Computational Engineering','shape-research'],['Methods notebook','Numerical Modelling','shape-graph']],projects:[['Design investigation','Systems Concept','shape-cad'],['Prototype build','Test Rig','shape-model']],graphics:[['Editorial experiment','Typography','shape-design'],['Infographic system','Information Design','shape-graph']],photography:[['Field study','Built Environment','shape-photo'],['Material study','Texture & Light','shape-photo']],models:[['Physical prototype','Iterative Model','shape-model'],['Assembly model','Mechanism Study','shape-cad']]}
const folders = {cad:'cad-designs',freelance:'freelance-work',simulations:'simulations'}
const projects = {
  cad:[['apple-watch',['21.1.jpg','21.2.jpg','21.3.jpg']],['bell',['22.1.jpg','22.2.jpg','22.3.jpg']],['coffee-mug',['15.1.jpg','15.2.jpg']],['concept-bike',['20.1.jpg','20.2.jpg']],['concept-robot',['16.1.jpg','16.2.jpg','16.3.jpg','16.4.jpg']],['curved-monitor',['3.1.jpg','3.2.jpg','3.3.jpg']],['drone',['14.1.jpg','14.2.jpg','14.3.jpg']],['gaming-chair',['13.1.jpg','13.2.jpg']],['hand-shower',['10.1.jpg','10.2.jpg','10.3.jpg']],['havit-headphone',['9.1.jpg','9.2.jpg','9.3.jpg']],['katana',['11.1.jpg','11.2.jpg','11.3.jpg','11.4.jpg']],['nothing-phone',['5.1.jpg','5.2.jpg','5.3.jpg','5.4.jpg']],['old-telephone',['17.1.jpg','17.2.jpg','17.3.jpg']],['oneplus-neckband',['18.1.jpg','18.2.jpg','18.3.jpg']],['robot-spot',['16.1.jpg','16.2.jpg','16.3.jpg','16.4.jpg']],['spoon',['2.1.jpg','2.2.jpg']],['stand-fan',['4.1.jpg']],['table-lamp',['8.1.jpg']],['vending-machine',['23.1.jpg']],['water-bottle',['1.1.jpg','1.2.jpg']],['xiaomi-redmi-phone',['6.1.jpg','6.2.jpg','6.3.jpg']],['yashica-camera',['19.1.jpg','19.2.jpg','19.3.jpg','19.4.jpg','19.5.jpg']]],
  freelance:[['folding-table-auto',['Assembly Isometric View Folded.jpg','Assembly Isometric View Transparent.jpg']],['forklift',['1.jpg','3.jpg']],['voltage-generator-teg-module',['1.1.jpg']]],
  simulations:[['airfoil',['4.1.png','4.2.png']],['flexural-test-sandwich',['1.1.jpeg']],['forklift-casing-simulation',['5.1.jpg']],['heat-simulation',['6.1.jpg']],['pipe-flow',['3.1.jpg','3.2.jpg']],['stress-analysis-table',['2.1.jpg','2.2.png','2.3.jpg']]]
}
const name = value => value.replaceAll('-',' ').replace(/\b\w/g, letter => letter.toUpperCase())
const imagePath = (section, folder, image) => `/assets/${folders[section]}/${folder}/${image}`

function Gallery({ project, onClose }) {
  const [folder, images] = project
  const [current, setCurrent] = useState(0)
  const move = step => setCurrent((current + step + images.length) % images.length)
  return <div className="gallery-modal" onMouseDown={event => event.target === event.currentTarget && onClose()}>
    <div className="gallery-dialog" role="dialog" aria-modal="true" aria-label={`${name(folder)} image gallery`}>
      <button className="gallery-close" onClick={onClose} aria-label="Close gallery">×</button>
      <div className="gallery-image"><img src={imagePath(project.section, folder, images[current])} alt={`${name(folder)} ${current + 1}`} /></div>
      <div className="gallery-controls"><button onClick={() => move(-1)} aria-label="Previous image">←</button><span>{current + 1} / {images.length}</span><button onClick={() => move(1)} aria-label="Next image">→</button></div>
      <h2>{name(folder)}</h2><p>Portfolio gallery · {images.length} image{images.length === 1 ? '' : 's'}</p>
    </div>
  </div>
}

function App() {
  const [page, setPage] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const label = useMemo(() => pages.find(([id]) => id === page)?.[1], [page])
  const go = id => { setPage(id); setMenuOpen(false); window.scrollTo(0,0) }
  const hasProjects = Boolean(projects[page])
  return <>
    <header className="topbar"><button className="brand" onClick={() => go('home')}>A<span>•</span>R</button><button className="menu" onClick={() => setMenuOpen(!menuOpen)}>Menu</button><nav className={menuOpen ? 'open' : ''}><button onClick={() => go('home')} className={page === 'home' ? 'active' : ''}>Home</button>{pages.map(([id, title]) => <button key={id} onClick={() => go(id)} className={page === id ? 'active' : ''}>{title}</button>)}</nav><button className="cv-link" onClick={() => go('contact')}>Contact <i>↗</i></button></header>
    <main>{page === 'home' ? <Home go={go} /> : page === 'contact' ? <Contact /> : <section className="page"><div className="section-top"><div><div className="eyebrow">Portfolio / {label}</div><h1>{label}</h1></div><p>{copy[page]}</p></div><div className="gallery real-gallery">{hasProjects ? projects[page].map(item => <button className="tile real-tile" key={item[0]} onClick={() => setSelected(Object.assign([...item], {section:page}))}><img src={imagePath(page,item[0],item[1][0])} alt={name(item[0])} /><div className="tile-info"><small>{item[1].length} image{item[1].length === 1 ? '' : 's'} · selected work</small><h3>{name(item[0])}</h3><small>Open gallery ↗</small></div></button>) : placeholders[page].map((item,index) => <article className="tile" key={item[0]}><div className={`visual ${item[2]}`}></div><div className="tile-info"><small>Selected work · 0{index+1}</small><h3>{item[0]}</h3><small>{item[1]}</small></div></article>)}</div><div className="notice"><b>Portfolio note</b><p>Replace the remaining illustrated placeholders with project folders and images when they are ready.</p></div></section>}</main>
    <footer><span>Research & Engineering Portfolio</span><span>Built for ideas that move from analysis to impact.</span></footer>
    {selected && <Gallery project={selected} onClose={() => setSelected(null)} />}
  </>
}
function Home({go}) { return <section className="page"><div className="hero"><div><div className="eyebrow">Research · Engineering · Visual Practice</div><h1>Thinking in <em>systems,</em><br/>making ideas<br/>legible.</h1></div><p className="hero-copy">A research-first portfolio for doctoral applications, technical collaboration, and interdisciplinary engineering work.</p></div><div className="home-grid">{[['Research','Research questions, methods, and scholarly direction.','research'],['Engineering work','Projects, CAD, models, and simulations.','projects'],['Creative practice','Freelance, graphics, and photography.','graphics']].map(([title,description,id], index) => <button className="home-card" key={id} onClick={() => go(id)}><span className="count">0{index+1}</span><div><h2>{title}</h2><p>{description}</p></div><span className="arrow">↗</span></button>)}</div></section> }
function Contact(){return <section className="page contact"><div className="eyebrow">Let’s connect</div><h1>Available for research conversations and thoughtful collaboration.</h1><a href="mailto:your.email@example.com">your.email@example.com ↗</a></section>}
export default App

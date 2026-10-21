// All site content lives here, taken from the final CV.

export const person = {
  name: 'Hridam Roshan Paul',
  short: 'Hridam',
  title: 'Mechanical Engineering Undergraduate · Materials & Additive Manufacturing Researcher',
  affiliation: 'Khulna University of Engineering & Technology (KUET), Bangladesh',
  email: 'hridampaul2004@gmail.com',
  cv: '/Hridam_Roshan_Paul_CV.pdf',
  links: [
    { label: 'ORCID', href: 'https://orcid.org/0009-0003-6566-5388' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hridam-roshan-paul-58a92724b/' },
  ],
}

export const hero = {
  headline: 'Mechanical Engineering Student | Aspiring Researcher',
  sub: 'I am a final-year BSc Mechanical Engineering student at KUET with interests in research, engineering design, simulation, and computational methods. I enjoy solving engineering problems, learning new tools, and working on projects that connect theory with real applications.',
  seeking: 'Prospective PhD Applicant  -  Fall 2027',
}

export const stats = [
  { n: '4', l: 'Papers & book chapters' },
  { n: '3', l: 'National CAD contest podiums' },
  { n: 'May 2027', l: 'B.Sc. expected' },
  { n: '2×', l: 'KUET Technical Scholarship' },
]

export const interests = [
  { n: '01', t: 'Additive manufacturing', d: 'Fused filament fabrication, filament extrusion and process–structure–property relationships in printed polymers.' },
  { n: '02', t: 'Functionally graded materials', d: 'Graded filler content in uniform, step-gradient and sandwich architectures for tailored mechanical and thermal behaviour.' },
  { n: '03', t: 'Sandwich & architected structures', d: 'Bio-inspired cores, energy absorption and topology optimisation for lightweight design.' },
  { n: '04', t: 'Composites & computation', d: 'Natural-fibre and metal-matrix composites, with finite element analysis for computational mechanics.' },
]

export const research = [
  {
    tag: 'Undergraduate thesis · ongoing',
    title: 'Experimental Investigation of Graphite/PLA Composites: Fused Filament Fabrication and FGAM Performance Characterization',
    summary:
      'A planned experimental study of graphite-filled PLA covering filament fabrication, FFF printing and characterisation of functionally graded additive-manufactured (FGAM) specimens. It asks how graphite loading affects thermal dissipation and interlayer mechanical integrity.',
    points: [
      'Uniform, step-gradient and sandwich graded architectures built from one PLA matrix.',
      'Filament extrusion, printing and performance testing in a single workflow.',
    ],
    meta: ['PLA / graphite', 'FFF', 'FGAM', 'Thermal & mechanical'],
    status: 'In progress',
    supervisor: 'Supervisor: Dr. Md. Shariful Islam, Dept. of Mechanical Engineering, KUET',
  },
  {
    tag: 'Journal article · first author',
    title: 'Synergistic effects of TiO₂/SiC hybrid ceramic fillers on jute/glass fibre epoxy composites',
    summary:
      'Five jute/glass fibre epoxy composites with varying TiO₂ (0–2 wt%) and SiC (0–3 wt%) content, linking filler dispersion to mechanical, morphological and moisture-resistance behaviour.',
    points: [
      'Mechanical testing, SEM/EDS, FTIR and water absorption.',
      'I am first author on this manuscript.',
    ],
    meta: ['Jute / glass / epoxy', 'TiO₂ · SiC', 'SEM · EDS · FTIR'],
    status: 'Manuscript in preparation',
  },
]

export const skillGroups = [
  { t: 'Additive manufacturing (FFF/FDM)', items: ['FDM / FFF 3D printing', 'Filament extrusion', 'Printed prototypes in PLA'] },
  { t: 'CAD modelling and design', items: ['SolidWorks (CSWP, CSWA)', 'AutoCAD', 'Technical drawing'] },
  { t: 'Finite element analysis', items: ['Ansys · Abaqus', 'Static structural simulation', 'Aerodynamic simulation'] },
  { t: 'Computational mechanics', items: ['Computational mechanics and FEA', 'Python · C', 'Arduino embedded control'] },
  { t: 'Material characterisation', items: ['Tensile & flexural testing', 'SEM · EDS/EDX', 'FTIR', 'Shore D hardness · water absorption'] },
]

export const publications = [
  {
    type: 'Journal article',
    status: 'Published',
    title: 'Experimental and Numerical Investigation of Flexural Energy Absorption in Octopus Suction-Cup-Inspired FDM-Printed Sandwich Structures',
    authors: 'S. Baidya, S. Ahmed, T. Ahmed, H.R. Paul, M.A. Hasib, A.M. Billah, A.K. Debnath',
    venue: 'Materials Today Communications, Elsevier',
      link: 'https://doi.org/10.1016/j.mtcomm.2026.116421',  

  },
  {
    type: 'Journal article',
    status: 'In preparation',
    title: 'Synergistic Effects of TiO₂/SiC Hybrid Ceramic Fillers on the Mechanical, Morphological and Moisture Resistance Behavior of Jute/Glass Fiber Epoxy Composites',
    authors: 'H.R. Paul, M.J. Rahman, S.B. Aesop, S.M.H. Aronno, M.A. Hasib, A.M. Billah, A.K. Debnath',
    venue: 'First-author manuscript',
  },
  {
    type: 'Book chapter',
    status: 'Revision submitted · book listed for March 2027',
    title: 'Additive Manufacturing and 3D Printing of Sandwich Structures (Ch. 11)',
    authors: 'M.A. Chowdhury, R. Ahammad, H.R. Paul, S. Roy, N.U.H. Durjoy, A.D. Sarker, M.M. Rahman',
    venue: 'Sandwich Structured Composites: Materials, Design and Applications, Elsevier',
  },
  {
    type: 'Book chapter',
    status: 'Revision submitted · book listed for March 2027',
    title: 'Sandwich Composites in Automotive, Rail, Aerospace, Unmanned Air Vehicle, and Marine Applications (Ch. 29)',
    authors: 'M.A. Chowdhury, R. Ahammad, H.R. Paul, S. Roy, N.U.H. Durjoy, A.D. Sarker, M.M. Rahman',
    venue: 'Sandwich Structured Composites: Materials, Design and Applications, Elsevier',
  },
]

export const education = [
  { years: 'Jan 2023 – May 2027 (expected)', t: 'B.Sc. in Mechanical Engineering', s: 'Khulna University of Engineering & Technology (KUET)', n: 'Technical Scholarship recipient for the 1st- and 2nd-year sessions.' },
]

export const honors = [
  ['May 2026', '2nd Runner Up, National CAD Contest – Ignition 2026', 'Dept. of Mechanical Engineering, KUET'],
  ['Nov 2024', '1st Runner Up, National CAD Contest – TECHNOMIZE 1.0', 'IEM Robotics & CAD Club, KUET'],
  ['Feb 2024', '1st Runner Up, National CAD Contest – Calibration 1.0', 'Dept. of Mechatronics Engineering, KUET'],
  ['Years 1–2', 'Technical Scholarship, KUET', '1st- and 2nd-year academic sessions'],
]

export const certs = [
  'Certified SOLIDWORKS Professional (CSWP), Dassault Systèmes, 2024',
  'Certified SOLIDWORKS Associate – Mechanical Design (CSWA), Dassault Systèmes, 2024',
]

export const experience = [
  {
    t: 'Leadership',
    items: [
      ['CADers, KUET (Computer Aided Designers Club)', 'Chief Executive Officer, 2025–2026. Led 40 members across 6 sub-teams; ran SolidWorks and AutoCAD workshops for nearly 200 participants. Now Quality Audit Officer on the independent Audit Board.'],
      ['Team Kilo Flight (FSAE)', 'Senior Executive, Body & Aerodynamics, 2024–2026. Designed a hub, ran structural simulation and optimised it; assembled steering and braking CAD models.'],
      ['IMechE KUET Student Chapter', 'Policy Analyst, since Aug 2026.'],
    ],
  },
  {
    t: 'Teaching',
    items: [
      ['CADers, KUET', 'Instructor & mentor, 2024–2026. Taught AutoCAD and SolidWorks workshops to 40–50 students per session and mentored contest and certification candidates.'],
      ['10 Minute School', 'Junior teacher (doubt solver), 2023–2025. Online guidance in physics, chemistry, biology and mathematics for grades 6–12.'],
    ],
  },
  {
    t: 'Academic project',
    items: [
      ['Compact Motorized Multi-Axis Stirring System (ME-3200)', 'Individual course project: three-axis automated stirring prototype with SolidWorks CAD, PLA printing and Arduino Uno control.'],
    ],
  },
]

const folders = { simulations: 'simulations', cad: 'cad-designs', freelance: 'freelance-work' }
export const folderOf = s => folders[s]

export const galleries = {
  simulations: {
    label: 'Simulations',
    blurb: 'FEA and CFD studies — structural, thermal and flow.',
    items: [
      ['flexural-test-sandwich', ['1.1.jpeg']],
      ['pipe-flow', ['3.1.jpg', '3.2.jpg']],
      ['airfoil', ['4.1.png', '4.2.png']],
      ['forklift-casing-simulation', ['5.1.jpg']],
      ['heat-simulation', ['6.1.jpg']],
    ],
  },
  freelance: {
    label: 'Applied work',
    blurb: 'Engineering design delivered for external clients.',
    items: [
      ['forklift', ['1.jpg', '3.jpg']],
      ['folding-table-auto', ['Assembly Isometric View Folded.jpg', 'Assembly Isometric View Transparent.jpg']],
      ['voltage-generator-teg-module', ['1.1.jpg']],
    ],
  },
  cad: {
    label: 'CAD',
    blurb: 'Product and mechanism modelling.',
    items: [
      ['apple-watch', ['21.1.jpg', '21.2.jpg', '21.3.jpg']],
      ['concept-robot', ['16.1.jpg', '16.2.jpg', '16.3.jpg', '16.4.jpg']],
      ['drone', ['14.1.jpg', '14.2.jpg', '14.3.jpg']],
      ['concept-bike', ['20.1.jpg', '20.2.jpg']],
      ['yashica-camera', ['19.1.jpg', '19.2.jpg', '19.3.jpg', '19.4.jpg', '19.5.jpg']],
      ['nothing-phone', ['5.1.jpg', '5.2.jpg', '5.3.jpg', '5.4.jpg']],
      ['katana', ['11.1.jpg', '11.2.jpg', '11.3.jpg', '11.4.jpg']],
      ['havit-headphone', ['9.1.jpg', '9.2.jpg', '9.3.jpg']],
      ['curved-monitor', ['3.1.jpg', '3.2.jpg', '3.3.jpg']],
      ['old-telephone', ['17.1.jpg', '17.2.jpg', '17.3.jpg']],
      ['oneplus-neckband', ['18.1.jpg', '18.2.jpg', '18.3.jpg']],
      ['xiaomi-redmi-phone', ['6.1.jpg', '6.2.jpg', '6.3.jpg']],
      ['hand-shower', ['10.1.jpg', '10.2.jpg', '10.3.jpg']],
      ['gaming-chair', ['13.1.jpg', '13.2.jpg']],
      ['bell', ['22.1.jpg', '22.2.jpg', '22.3.jpg']],
      ['coffee-mug', ['15.1.jpg', '15.2.jpg']],
      ['robot-spot', ['16.1.jpg', '16.2.jpg', '16.3.jpg', '16.4.jpg']],
      ['spoon', ['2.1.jpg', '2.2.jpg']],
      ['water-bottle', ['1.1.jpg', '1.2.jpg']],
      ['stand-fan', ['4.1.jpg']],
      ['table-lamp', ['8.1.jpg']],
      ['vending-machine', ['23.1.jpg']],
    ],
  },
}

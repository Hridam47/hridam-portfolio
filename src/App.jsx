import { useMemo, useState } from "react";
import profileImage from "./assets/profile.jpg";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const achievements = [
    {
      title: "CEO of CADers (KUET CAD Club)",
      year: "Present",
      description:
        "Leading CADers as CEO while helping shape technical activities, community growth, and hands-on design learning at KUET.",
    },
    {
      title: "Featured by Dassault Systèmes",
      year: "Highlight",
      description:
        "CAD design work featured by Dassault Systèmes on official social media, marking a major recognition milestone.",
    },
    {
      title: "Workshops and Contests Leadership",
      year: "Ongoing",
      description:
        "Organized and led multiple CAD workshops and contests, including CADatthon, with a focus on practical design skills.",
    },
    {
      title: "AutoCAD & SolidWorks Trainer",
      year: "Training",
      description:
        "Conducted training sessions for university students, helping them build confidence in AutoCAD and SolidWorks.",
    },
    {
      title: "Engineering Seminar Contributor",
      year: "Academic",
      description:
        "Contributed to engineering seminars covering career guidance, CAD fundamentals, and design-focused learning.",
    },
    {
      title: "CAD Competition Participant",
      year: "Competitive",
      description:
        "Participated in CAD competitions and collaborative design challenges, sharpening technical and teamwork skills.",
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hridam-roshan-paul-58a92724b/",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100039291372355",
    },
    {
      name: "Email",
      url: "mailto:hridampaul2004@gmail.com",
    },
  ];

  const stats = [
    { label: "Leadership Role", value: "CEO" },
    { label: "Primary Tools", value: "SolidWorks" },
    { label: "Growing In", value: "ANSYS" },
    { label: "Long-Term Goal", value: "PhD Abroad" },
  ];

  const certifications = [
    "Certified SOLIDWORKS Professional (CSWP) - CAD Design",
    "Certified SOLIDWORKS Associate (CSWA) - Mechanical Design",
    "Technical Drawing & CAD Competition 2023",
  ];

  const skills = [
    "CAD Design",
    "SolidWorks Modeling",
    "AutoCAD",
    "Simulation Basics",
    "ANSYS",
    "Workshop Leadership",
    "Research Interest",
    "Aerodynamics",
    "Lightweight Design",
    "Technical Communication",
  ];

  const theme = useMemo(
    () =>
      darkMode
        ? {
            page: "bg-gradient-to-br from-black via-zinc-950 to-neutral-900 text-white",
            panel: "border-white/10 bg-white/5",
            panelSoft: "border-white/10 bg-black/20",
            textSoft: "text-zinc-300",
            textMuted: "text-zinc-400",
            accent: "text-amber-300",
            accentSoft: "text-yellow-200",
            chip: "border-white/10 bg-white/5 text-zinc-200",
            buttonPrimary: "bg-gradient-to-r from-orange-400 to-yellow-300 text-black",
            buttonSecondary: "border-white/15 bg-white/5 text-white hover:bg-white/10",
            heroGlow: "from-orange-400/20 via-yellow-300/15 to-transparent",
            cardHover: "hover:bg-white/10",
          }
        : {
            page: "bg-gradient-to-br from-amber-50 via-white to-yellow-50 text-zinc-900",
            panel: "border-black/10 bg-white/80",
            panelSoft: "border-black/10 bg-black/[0.03]",
            textSoft: "text-zinc-700",
            textMuted: "text-zinc-500",
            accent: "text-orange-500",
            accentSoft: "text-amber-600",
            chip: "border-black/10 bg-white text-zinc-700",
            buttonPrimary: "bg-gradient-to-r from-orange-500 to-yellow-400 text-white",
            buttonSecondary: "border-black/10 bg-white text-zinc-900 hover:bg-black/[0.03]",
            heroGlow: "from-orange-300/30 via-yellow-200/20 to-transparent",
            cardHover: "hover:bg-black/[0.03]",
          },
    [darkMode]
  );

  return (
    <div className={`min-h-screen ${theme.page} scroll-smooth transition-colors duration-500`}>
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          animation: fadeUp 0.8s ease both;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">
        <header className={`sticky top-0 z-30 mb-8 rounded-3xl border ${theme.panel} backdrop-blur-xl`}>
          <div className="flex flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-xl font-semibold tracking-wide">Hridam Roshan Paul</h1>
              <p className={`text-sm ${theme.textSoft}`}>
                Mechanical Engineering Undergraduate • CAD Designer • Research Enthusiast
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <nav className="flex flex-wrap gap-2 text-sm">
                <a href="#about" className="rounded-full px-4 py-2 transition hover:bg-white/10">
                  About
                </a>
                <a href="#achievements" className="rounded-full px-4 py-2 transition hover:bg-white/10">
                  Achievements
                </a>
                <a href="#skills" className="rounded-full px-4 py-2 transition hover:bg-white/10">
                  Skills
                </a>
                <a href="#socials" className="rounded-full px-4 py-2 transition hover:bg-white/10">
                  Socials
                </a>
                <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-white/10">
                  Contact
                </a>
              </nav>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`rounded-full border px-4 py-2 text-sm transition ${theme.chip}`}
              >
                {darkMode ? "Switch to Light" : "Switch to Dark"}
              </button>
            </div>
          </div>
        </header>

        <section className="relative grid items-center gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className={`absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-r ${theme.heroGlow} blur-3xl`} />

          <div className="fade-up">
            <span className={`inline-flex rounded-full border px-4 py-1 text-sm ${theme.chip}`}>
              Minimal + Slightly Technical Portfolio
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Designing ideas with precision, leadership, and an engineer’s mindset.
            </h2>

            <p className={`mt-5 max-w-2xl text-base leading-7 md:text-lg ${theme.textSoft}`}>
              I am Hridam Roshan Paul, a Mechanical Engineering undergraduate from KUET with a strong passion
              for CAD design, simulation, and research. My work centers on SolidWorks modeling, growing ANSYS
              expertise, and long-term interests in lightweight design, aerodynamics, and research-driven
              engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#achievements"
                className={`rounded-2xl px-5 py-3 font-medium shadow-lg transition hover:scale-[1.02] ${theme.buttonPrimary}`}
              >
                Explore Achievements
              </a>
              <a
                href="#socials"
                className={`rounded-2xl border px-5 py-3 font-medium transition ${theme.buttonSecondary}`}
              >
                Social Links
              </a>
            </div>
          </div>

          <div className={`fade-up rounded-[2rem] border p-6 shadow-2xl backdrop-blur-sm ${theme.panel}`}>
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-orange-400/20 via-yellow-300/10 to-black/10 p-6">
              <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border border-white/20 bg-black/80 shadow-xl">
                <img src={profileImage} alt="Hridam Roshan Paul" className="h-full w-full object-cover" />
              </div>

              <h3 className="mt-5 text-center text-2xl font-semibold">Hridam Roshan Paul</h3>
              <p className={`mt-2 text-center ${theme.textSoft}`}>
                CEO of CADers • KUET ME-2k21 • Future Researcher
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className={`rounded-2xl border p-4 ${theme.panelSoft}`}>
                  <p className={theme.textMuted}>Current Focus</p>
                  <p className="mt-1 font-medium">CAD & Simulation</p>
                </div>
                <div className={`rounded-2xl border p-4 ${theme.panelSoft}`}>
                  <p className={theme.textMuted}>Career Vision</p>
                  <p className="mt-1 font-medium">PhD Abroad</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fade-up mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className={`rounded-[1.6rem] border p-5 ${theme.panel}`}>
              <p className={`text-sm ${theme.textMuted}`}>{stat.label}</p>
              <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </section>

        <section id="about" className="mt-12 grid gap-6 md:grid-cols-3">
          <div className={`fade-up md:col-span-2 rounded-[2rem] border p-8 ${theme.panel}`}>
            <p className={`text-sm uppercase tracking-[0.25em] ${theme.accent}`}>About Me</p>
            <h3 className="mt-3 text-3xl font-semibold">Engineering creativity backed by technical ambition.</h3>
            <p className={`mt-4 leading-7 ${theme.textSoft}`}>
              As a Mechanical Engineering undergraduate at KUET, I am building a path centered on technical
              design, engineering analysis, and research. I enjoy transforming concepts into practical CAD
              models, exploring simulation workflows, and leading technical communities that help others grow.
              Through CADers, workshops, competitions, and seminars, I aim to contribute to a stronger
              engineering culture while preparing for advanced research in the future.
            </p>
          </div>

          <div className={`fade-up rounded-[2rem] border p-8 ${theme.panel}`}>
            <p className={`text-sm uppercase tracking-[0.25em] ${theme.accentSoft}`}>Quick Facts</p>
            <ul className={`mt-4 space-y-3 ${theme.textSoft}`}>
              <li>🎓 KUET Mechanical Engineering (ME-2k21)</li>
              <li>🛠 Strong interest in CAD and simulation</li>
              <li>📐 Focused on lightweight design and aerodynamics</li>
              <li>🔬 Long-term goal: PhD and research abroad</li>
            </ul>
          </div>
        </section>

        <section id="achievements" className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div className="fade-up">
              <p className={`text-sm uppercase tracking-[0.25em] ${theme.accent}`}>Achievements</p>
              <h3 className="mt-2 text-3xl font-semibold">Milestones shaped through leadership and design.</h3>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((item, index) => (
              <div
                key={item.title}
                className={`fade-up rounded-[2rem] border p-6 transition duration-300 hover:-translate-y-1 ${theme.panel} ${theme.cardHover}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <span className={`rounded-full border px-3 py-1 text-xs ${theme.chip}`}>{item.year}</span>
                </div>
                <p className={`mt-4 leading-7 ${theme.textSoft}`}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`fade-up mt-12 rounded-[2rem] border p-8 ${theme.panel}`}>
          <p className={`text-sm uppercase tracking-[0.25em] ${theme.accent}`}>Certifications</p>
          <h3 className="mt-2 text-3xl font-semibold">Recognized credentials in CAD and design.</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((item) => (
              <div key={item} className={`rounded-[1.5rem] border p-5 ${theme.panelSoft}`}>
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className={`fade-up mt-12 rounded-[2rem] border p-8 ${theme.panel}`}>
          <p className={`text-sm uppercase tracking-[0.25em] ${theme.accentSoft}`}>Skills & Interests</p>
          <h3 className="mt-2 text-3xl font-semibold">Technical strengths and future direction.</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className={`rounded-full border px-4 py-2 text-sm ${theme.chip}`}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="socials" className="mt-12">
          <div className="fade-up">
            <p className={`text-sm uppercase tracking-[0.25em] ${theme.accent}`}>Find Me Online</p>
            <h3 className="mt-2 text-3xl font-semibold">Professional presence across platforms.</h3>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                className={`fade-up rounded-[1.5rem] border p-5 transition duration-300 hover:-translate-y-1 ${theme.panel} ${theme.cardHover}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <p className="text-lg font-medium">{social.name}</p>
                <p className={`mt-2 break-all text-sm ${theme.textMuted}`}>
                  {social.url.replace("mailto:", "")}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 mb-8">
          <div className="fade-up rounded-[2rem] border border-white/10 bg-gradient-to-r from-orange-400/15 via-yellow-300/10 to-transparent p-8">
            <p className={`text-sm uppercase tracking-[0.25em] ${theme.accent}`}>Contact</p>
            <h3 className="mt-2 text-3xl font-semibold">Let’s build, design, and explore ideas together.</h3>
            <p className={`mt-4 max-w-2xl leading-7 ${theme.textSoft}`}>
              I am always interested in meaningful conversations around CAD design, technical learning,
              engineering leadership, and research-oriented collaboration.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:hridampaul2004@gmail.com"
                className={`rounded-2xl px-5 py-3 font-medium ${theme.buttonPrimary}`}
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/hridam-roshan-paul-58a92724b/"
                target="_blank"
                rel="noreferrer"
                className={`rounded-2xl border px-5 py-3 font-medium transition ${theme.buttonSecondary}`}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import QuoteBlock from "./components/QuoteBlock";
import ArtifactCard from "./components/ArtifactCard";
import SkillPill from "./components/SkillPill";
import {
  ARTIFACTS,
  COURSEWORK_HIGHLIGHTS,
  FEATURED_PROJECTS,
  GUIDE_EXAMPLES,
  GUIDE_FEATURES,
  GUIDE_SKILLS,
  JOURNEY_STEPS,
  PITCH_SKILLS,
  PITCH_STRUCTURE,
  PITCH_TRANSCRIPT,
  PRESS_DETAILS,
  PRESS_SKILLS,
  REFLECTION_PARAGRAPHS,
  VENTURE_OVERVIEW,
  VENTURE_PILLARS,
  VENTURE_SKILLS,
  VENTURE_STATS,
} from "./data";

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />

      {/* HOME / HERO */}
      <section id="home" className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <span className="hero__eyebrow">ENGL398B · University of Maryland</span>
          <h1 className="hero__title">
            Words Are <span className="hero__title-accent">Power.</span>
          </h1>
          <p className="hero__subtitle">
            My ENGL398B journey from academic writing to real-world communication, persuasion, and
            social entrepreneurship.
          </p>
          <p className="hero__body">
            ENGL398B taught me that writing is not just about sounding smart. It is about making
            people care, understand, and act. Over the semester, I moved from treating writing like
            an assignment to treating it like a tool: a tool for persuasion, design,
            entrepreneurship, and impact.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--primary" onClick={() => smoothScrollTo("featured")}>
              Explore the Portfolio
            </button>
            <button className="btn btn--ghost" onClick={() => smoothScrollTo("venture")}>
              View Code and Reentry
            </button>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>4</dt>
              <dd>Featured projects</dd>
            </div>
            <div>
              <dt>5</dt>
              <dd>Course artifacts</dd>
            </div>
            <div>
              <dt>1</dt>
              <dd>Real social venture</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* INTRO / JOURNEY */}
      <Section id="journey" eyebrow="Introduction" title="My Communication Journey">
        <div className="grid grid--two reveal">
          <div className="prose">
            <p>
              At the beginning of ENGL398B, I already felt comfortable with persuasive,
              outcome-driven writing. I liked writing that had a clear audience and a real purpose:
              convincing someone to care, act, fund, support, or respond. What I did not fully
              understand yet was how much the form of communication shapes whether the idea
              succeeds.
            </p>
            <p>
              This course pushed me to treat writing as strategy. &ldquo;Words Are Power&rdquo; gave
              the course its central mindset, but the later assignments showed me what that
              actually means in practice. Cutting fluff taught me that clarity is respect for the
              reader. Design thinking taught me that strong ideas begin with human needs, not
              assumptions. Research taught me that persuasion needs evidence. The pitch video
              taught me that powerful communication often depends on what you leave out.
            </p>
            <p>
              My biggest growth came from connecting writing, design, and audience awareness. I
              started the semester knowing that concise writing mattered, but I ended it
              understanding that layout, tone, hierarchy, and evidence matter just as much. A
              professional reader does not owe you attention. You have to earn it.
            </p>
            <p>
              This ePortfolio shows that journey: from writing as an academic task to writing as a
              real-world tool. My professional communication mindset is simple now: know the
              audience, lead with purpose, cut what does not matter, and make the message strong
              enough to move people toward action.
            </p>
          </div>
          <div className="journey">
            <h3 className="journey__title">The arc of the semester</h3>
            <ol className="journey__steps">
              {JOURNEY_STEPS.map((s) => (
                <li key={s.step} className="journey__step">
                  <span className="journey__num">{s.step}</span>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="reveal">
          <QuoteBlock>
            The professional world does not reward the longest message. It rewards the clearest
            one.
          </QuoteBlock>
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section
        id="featured"
        tone="muted"
        eyebrow="Featured work"
        title="Featured Course Projects"
        subtitle="Four artifacts where strategy, design, and persuasion converged."
      >
        <div className="grid grid--projects reveal">
          {FEATURED_PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.id}
              index={i + 1}
              title={p.title}
              teaser={p.teaser}
              href={p.anchor}
              onNavigate={smoothScrollTo}
            />
          ))}
        </div>
      </Section>

      {/* SOCIAL VENTURE PLAN */}
      <Section
        id="venture"
        eyebrow="Project 01"
        title="Social Venture Plan"
        subtitle="Turning a social problem into a fundable, research-backed venture."
      >
        <p className="prose reveal">
          The Social Venture Plan was the assignment where I learned how much communication matters
          in entrepreneurship. A good idea is not enough. I had to prove the problem, define the
          audience, explain the innovation, analyze the ecosystem, justify the budget, and make
          the whole plan feel credible to a real funder. Code and Reentry pushed me to write with
          both urgency and structure: urgent enough to show why reentry employment matters, but
          structured enough to show that the model could actually work. This project taught me
          that persuasive writing is not about exaggeration. It is about evidence, clarity, and
          making the reader believe the next step is possible.
        </p>

        <div className="grid grid--venture reveal">
          <div className="overview-card">
            <span className="overview-card__tag">Project Overview</span>
            <h3 className="overview-card__title">Code and Reentry</h3>
            <dl className="overview-card__list">
              {VENTURE_OVERVIEW.filter((v) => v.label !== "Project").map((v) => (
                <div key={v.label} className="overview-card__row">
                  <dt>{v.label}</dt>
                  <dd>{v.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="stat-grid">
            {VENTURE_STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-card__value">{s.value}</span>
                <span className="stat-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <QuoteBlock>
          Participants do not prepare for a job and then hope for the best. They work, get paid,
          and leave with proof.
        </QuoteBlock>

        <div className="grid grid--pillars reveal">
          {VENTURE_PILLARS.map((p) => (
            <article key={p.title} className="pillar">
              <h4 className="pillar__title">{p.title}</h4>
              <p className="pillar__body">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="skills reveal">
          <h4 className="skills__title">Skills gained</h4>
          <div className="skills__list">
            {VENTURE_SKILLS.map((s) => (
              <SkillPill key={s} label={s} />
            ))}
          </div>
        </div>
      </Section>

      {/* PRESS RELEASE */}
      <Section
        id="press"
        tone="muted"
        eyebrow="Project 02"
        title="Press Release"
        subtitle="Writing for journalists, not professors."
      >
        <p className="prose reveal">
          The press release taught me how to make a social venture feel public, timely, and
          newsworthy. Unlike academic writing, a press release has no patience for slow
          introductions. The first sentence has to matter immediately. For Code and Reentry, I
          focused on a headline and lead that framed the venture as more than a training program: a
          Baltimore studio turning prison records into tech portfolios. This assignment helped me
          practice writing with speed, clarity, and a sharp sense of audience, because journalists
          need a story they can understand and retell fast.
        </p>

        <article className="newsroom reveal">
          <div className="newsroom__top">
            <span className="newsroom__label">For Immediate Release</span>
            <span className="newsroom__date">April 29, 2025 · Baltimore, MD</span>
          </div>
          <h3 className="newsroom__headline">
            Baltimore Studio Turns Prison Records Into Tech Portfolios
          </h3>
          <p className="newsroom__lede">
            Code and Reentry hires formerly incarcerated adults to build real software for real
            clients, transforming reentry from a waiting game into a paid career pathway.
            Participants train as web developers while completing projects for local businesses
            and nonprofits, leaving with a portfolio, paycheck history, and proof of ability.
          </p>
          <blockquote className="newsroom__quote">
            &ldquo;The barrier for returning citizens isn&rsquo;t willingness. It&rsquo;s
            proof.&rdquo;
          </blockquote>
          <dl className="newsroom__details">
            {PRESS_DETAILS.map((d) => (
              <div key={d.label} className="newsroom__detail">
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <div className="skills reveal">
          <h4 className="skills__title">Skills gained</h4>
          <div className="skills__list">
            {PRESS_SKILLS.map((s) => (
              <SkillPill key={s} label={s} />
            ))}
          </div>
        </div>
      </Section>

      {/* PITCH VIDEO */}
      <Section
        id="pitch"
        eyebrow="Project 03"
        title="Pitch Video"
        subtitle="Compressing urgency, solution, and ask into under one minute."
      >
        <p className="prose reveal">
          The pitch video forced me to communicate with pressure. In less than a minute, every word
          had to earn its place. I could not explain the entire venture, so I had to choose the
          clearest emotional entry point: 600,000 people return from prison every year, many want
          to work, and the word they keep hearing is &ldquo;no.&rdquo; From there, the pitch had to
          move fast: problem, solution, location, expansion plan, and funding ask. This assignment
          taught me that powerful communication is not just what you include. It is what you cut so
          the message lands.
        </p>

        <div className="grid grid--pitch reveal">
          <div className="video">
            <div className="video__frame" role="img" aria-label="Pitch video placeholder">
              <div className="video__play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="36" height="36">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </div>
              <span className="video__title">Code and Reentry Pitch Video</span>
              <span className="video__hint">Video embed goes here.</span>
            </div>
            <p className="video__note">
              Replace this placeholder with the final uploaded pitch video or embed link.
            </p>
          </div>

          <div className="pitch-structure">
            <h4 className="pitch-structure__title">Pitch structure</h4>
            <ul>
              {PITCH_STRUCTURE.map((p) => (
                <li key={p.label}>
                  <span className="pitch-structure__label">{p.label}</span>
                  <span className="pitch-structure__body">{p.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <details className="transcript reveal">
          <summary>Read the full pitch transcript</summary>
          <div className="transcript__body">
            {PITCH_TRANSCRIPT.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>

        <div className="skills reveal">
          <h4 className="skills__title">Skills gained</h4>
          <div className="skills__list">
            {PITCH_SKILLS.map((s) => (
              <SkillPill key={s} label={s} />
            ))}
          </div>
        </div>
      </Section>

      {/* WRITING GUIDE */}
      <Section
        id="guide"
        tone="muted"
        eyebrow="Project 04"
        title="Writing Guide"
        subtitle="From academic padding to professional precision."
      >
        <p className="prose reveal">
          The Writing Guide helped me turn course concepts into practical communication advice. Our
          group focused on the gap between academic writing and professional writing: in school,
          longer writing can sometimes feel more impressive, but in the real world, unclear
          writing loses attention and trust. This project taught me how to explain writing
          principles in a way that is useful, direct, and visually engaging. It also reinforced one
          of the biggest lessons of the class: design is part of communication. If the layout is
          confusing, the message feels confusing too.
        </p>

        <div className="guide-card reveal">
          <span className="guide-card__tag">The Orcastrators</span>
          <h3 className="guide-card__title">Orchestrate Your Path to Excellence</h3>
          <p className="guide-card__summary">
            A professional writing guide focused on concise writing, clarity, style, tone, voice,
            and visual design. The guide helps students move from academic writing to real-world
            communication by showing how to cut fluff, write clearly, shape tone, and use design
            to guide the reader.
          </p>
        </div>

        <div className="grid grid--three reveal">
          {GUIDE_FEATURES.map((f, i) => (
            <article key={f.title} className="feature">
              <span className="feature__num">0{i + 1}</span>
              <h4 className="feature__title">{f.title}</h4>
              <p className="feature__body">{f.body}</p>
            </article>
          ))}
        </div>

        <QuoteBlock>
          When design is chaotic, the message feels chaotic. When design is intentional, the
          writer looks prepared.
        </QuoteBlock>

        <div className="examples reveal">
          <h4 className="examples__title">Before &amp; after</h4>
          <div className="examples__grid">
            {GUIDE_EXAMPLES.map((ex, i) => (
              <div key={i} className="example">
                <div className="example__row example__row--wordy">
                  <span className="example__tag">Wordy</span>
                  <p>{ex.wordy}</p>
                </div>
                <div className="example__row example__row--concise">
                  <span className="example__tag">Concise</span>
                  <p>{ex.concise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills reveal">
          <h4 className="skills__title">Skills gained</h4>
          <div className="skills__list">
            {GUIDE_SKILLS.map((s) => (
              <SkillPill key={s} label={s} />
            ))}
          </div>
        </div>
      </Section>

      {/* ARTIFACTS */}
      <Section
        id="artifacts"
        eyebrow="More work"
        title="Other Course Artifacts"
        subtitle="Smaller assignments that shaped the bigger communication journey."
      >
        <div className="grid grid--artifacts reveal">
          {ARTIFACTS.map((a) => (
            <ArtifactCard key={a.title} title={a.title} type={a.type} description={a.description} />
          ))}
        </div>

        <div className="skills reveal">
          <h4 className="skills__title">Additional coursework</h4>
          <div className="skills__list">
            {COURSEWORK_HIGHLIGHTS.map((s) => (
              <SkillPill key={s} label={s} variant="muted" />
            ))}
          </div>
        </div>
      </Section>

      {/* REFLECTION */}
      <Section
        id="reflection"
        tone="dark"
        eyebrow="Closing"
        title="Final Reflection"
        subtitle="What I actually got out of the course."
      >
        <div className="prose prose--invert reveal">
          {REFLECTION_PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="closing reveal">
          <h3 className="closing__title">My professional writing mindset</h3>
          <p className="closing__quote">
            &ldquo;Know the audience. Lead with purpose. Cut what does not matter.&rdquo;
          </p>
        </div>
      </Section>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__main">
            <strong>Advay Choudhury</strong>
            <span>ENGL398B: Writing for Social Entrepreneurs</span>
            <span>University of Maryland</span>
          </div>
          <p className="footer__quote">
            Clear writing moves people. Powerful writing moves work forward.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Sparkles,
  Target,
  Users,
  LineChart,
  Lightbulb,
  Layers,
  CheckCircle2,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { z } from "zod";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAME = "Aarav Sharma";
const ROLE = "Aspiring Product Manager";
const LOCATION = "Bengaluru, India";
const EMAIL = "aarav.sharma@example.com";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const skills = [
  { icon: Target, label: "Product Discovery", desc: "User interviews, JTBD, problem framing" },
  { icon: LineChart, label: "Data & Analytics", desc: "SQL basics, Mixpanel, GA4, A/B tests" },
  { icon: Users, label: "User Research", desc: "Surveys, usability testing, personas" },
  { icon: Layers, label: "Roadmapping", desc: "Prioritization (RICE, MoSCoW), PRDs" },
  { icon: Lightbulb, label: "Wireframing", desc: "Figma, low-fi prototypes, user flows" },
  { icon: Sparkles, label: "Go-to-Market", desc: "Positioning, launch plans, metrics" },
];

const projects = [
  {
    title: "Campus Carpool — MVP Concept",
    tag: "0 → 1 Concept",
    summary:
      "Designed a college-only carpool app to cut commute costs. Ran 12 user interviews, built a clickable Figma prototype, and defined a north-star metric (rides per active user / week).",
    metrics: [
      { k: "12", v: "Interviews" },
      { k: "68%", v: "Would use weekly" },
      { k: "3", v: "Prioritized features" },
    ],
  },
  {
    title: "EdTech Drop-off Analysis",
    tag: "Case Study",
    summary:
      "Investigated onboarding drop-off for a learning app. Mapped the funnel, identified a 41% drop at email verification, and proposed a 3-step fix with expected uplift.",
    metrics: [
      { k: "41%", v: "Funnel drop found" },
      { k: "+18%", v: "Projected lift" },
      { k: "5", v: "Hypotheses tested" },
    ],
  },
  {
    title: "Grocery Reorder Feature",
    tag: "Feature Spec",
    summary:
      "Wrote a complete PRD for a one-tap reorder feature: user stories, success metrics, edge cases, and a phased rollout plan with experiment design.",
    metrics: [
      { k: "1", v: "PRD shipped" },
      { k: "4", v: "User stories" },
      { k: "A/B", v: "Experiment plan" },
    ],
  },
];

const experience = [
  {
    role: "Product Management Intern",
    org: "FinTech Startup (Seed stage)",
    period: "Jan 2025 — Apr 2025",
    points: [
      "Owned a payments onboarding flow used by ~2k weekly signups",
      "Ran weekly user interviews and synthesized insights into a backlog",
      "Shipped 3 small experiments; one improved activation by 9%",
    ],
  },
  {
    role: "Associate, Product Club",
    org: "University Product Society",
    period: "Aug 2023 — Present",
    points: [
      "Led case-study sessions on Spotify, Notion, and Swiggy",
      "Organized a 48-hour product hackathon with 80+ participants",
    ],
  },
];

const education = {
  degree: "B.Tech, Computer Science",
  school: "XYZ Institute of Technology",
  period: "2021 — 2025",
  extra: "Minor in Business Analytics · GPA 8.6/10",
};

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

function Portfolio() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Toaster richColors position="top-center" />
      <TopBar />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border animate-fade-in">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-serif text-lg">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          {NAME}
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition"
        >
          <Mail className="h-4 w-4" /> Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-secondary-foreground animate-fade-up">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        Open to full-time Product Manager roles · 2025
      </div>
      <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: "60ms" }}>
        Curious builder who turns
        <span className="italic text-accent"> user problems </span>
        into shipped products.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "140ms" }}>
        I'm {NAME.split(" ")[0]} — an {ROLE.toLowerCase()} who loves discovery, sharp PRDs,
        and learning from real users. Below: my skills, projects, experience, and a way to reach me — all on one page.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
        <Button asChild size="lg" className="rounded-full">
          <a href="#work">See my work <ArrowUpRight className="ml-1 h-4 w-4" /></a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <a href="#contact">Get in touch</a>
        </Button>
        <span className="ml-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" /> {LOCATION}
        </span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 border-t border-border reveal">
      <SectionLabel>01 — About</SectionLabel>
      <div className="mt-6 grid md:grid-cols-3 gap-10">
        <h2 className="font-serif text-3xl md:text-4xl leading-tight md:col-span-1">
          A fresher with a builder's mindset.
        </h2>
        <div className="md:col-span-2 text-lg text-muted-foreground space-y-4">
          <p>
            I picked product management because I enjoy the messy middle — sitting with a vague
            problem, talking to users, and slowly shaping it into something teams can build.
          </p>
          <p>
            During college I shipped side projects, led case-study sessions in my product club,
            and interned at a fintech startup where I owned a small onboarding flow end-to-end.
            I write clearly, ask "why" a lot, and care about outcomes over outputs.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-border reveal">
      <SectionLabel>02 — Skills</SectionLabel>
      <h2 className="mt-6 font-serif text-3xl md:text-4xl">What I bring to a product team.</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div
            key={s.label}
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] hover:border-accent/40"
          >
            <s.icon className="h-6 w-6 text-accent" />
            <div className="mt-4 font-medium">{s.label}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="py-16 border-t border-border reveal">
      <SectionLabel>03 — Selected Work</SectionLabel>
      <h2 className="mt-6 font-serif text-3xl md:text-4xl">Projects & case studies.</h2>
      <div className="mt-10 space-y-5">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group grid md:grid-cols-12 gap-6 rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
          >
            <div className="md:col-span-3 text-sm text-muted-foreground flex md:flex-col justify-between md:justify-start gap-2">
              <span className="font-mono">0{i + 1}</span>
              <span className="inline-flex w-fit items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                {p.tag}
              </span>
            </div>
            <div className="md:col-span-9">
              <h3 className="font-serif text-2xl md:text-3xl group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{p.summary}</p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {p.metrics.map((m) => (
                  <div key={m.v} className="rounded-xl bg-secondary/60 p-4">
                    <div className="font-serif text-2xl text-primary">{m.k}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-border reveal">
      <SectionLabel>04 — Experience & Education</SectionLabel>
      <div className="mt-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">Experience</h2>
          <div className="mt-8 space-y-8">
            {experience.map((e) => (
              <div key={e.role} className="relative pl-6 border-l-2 border-border">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                <div className="text-xs text-muted-foreground">{e.period}</div>
                <div className="mt-1 font-medium">{e.role}</div>
                <div className="text-sm text-muted-foreground">{e.org}</div>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">Education</h2>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="text-xs text-muted-foreground">{education.period}</div>
            <div className="mt-1 font-medium">{education.degree}</div>
            <div className="text-sm text-muted-foreground">{education.school}</div>
            <div className="mt-3 text-sm text-muted-foreground">{education.extra}</div>
          </div>
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-secondary/80 to-background border border-border p-6">
            <div className="font-serif text-xl">Certifications & Learning</div>
            <ul className="mt-3 text-sm text-muted-foreground space-y-1.5">
              <li>· Google Project Management — Coursera</li>
              <li>· Reforge: Product Foundations (audited)</li>
              <li>· SQL for Data Analysis — Mode</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    // Simulated submission — wire to your backend / form service later
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Thanks! I'll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="py-20 border-t border-border reveal">
      <SectionLabel>05 — Contact</SectionLabel>
      <div className="mt-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Let's build something <span className="italic text-accent">useful</span> together.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            I'm actively interviewing for Associate PM and PM-fresher roles. Drop a note — internships,
            full-time, or just a friendly chat about product.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-primary transition">
              <Mail className="h-4 w-4 text-accent" /> {EMAIL}
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-primary transition">
              <Linkedin className="h-4 w-4 text-accent" /> linkedin.com/in/aaravsharma
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-primary transition">
              <Github className="h-4 w-4 text-accent" /> github.com/aaravsharma
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" /> {LOCATION}
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]"
        >
          <div className="grid gap-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                className="mt-1.5"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={160}
                className="mt-1.5"
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about the role or what's on your mind…"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="mt-1.5 resize-none"
                required
              />
            </div>
            <Button type="submit" size="lg" disabled={loading} className="rounded-full">
              {loading ? "Sending…" : (<>Send message <Send className="ml-1.5 h-4 w-4" /></>)}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} {NAME}. Built with care.</div>
        <div className="font-serif italic">"Fall in love with the problem, not the solution."</div>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      {children}
    </div>
  );
}

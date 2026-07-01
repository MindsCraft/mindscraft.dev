'use client';

import React from 'react';
import Image from 'next/image';
import { Variants } from 'framer-motion';
import { AnimatedSection, AnimatedDiv } from '@/components/ui/AnimatedSection';
import {
  FiCode, FiLayout, FiCpu, FiDatabase,
  FiGlobe, FiArrowRight, FiMapPin, FiUsers
} from 'react-icons/fi';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiWordpress,
  SiFigma, SiTypescript, SiPostgresql,
  SiPython, SiPhp, SiMysql,
  SiAmazonwebservices, SiDocker, SiVercel, SiCloudflare
} from 'react-icons/si';
import { Button } from '@/components/ui/button';

// ─── Data ────────────────────────────────────────────────────────────────────

const team = [
  {
    name: 'Tawshif Ahsan Khan',
    photo: '/images/team/tawshif.png',
    role: 'Founder, UX Designer & Web Developer',
    tag: 'Founder',
    exp: '10+ yrs',
    skills: ['Next.js', 'React', 'UI/UX', 'AI Integration', 'Project Lead'],
  },
  {
    name: 'Mustafa Kamal Hossain',
    photo: '/images/team/mustofa.png',
    role: 'Backend, Infra & WordPress Expert',
    tag: 'Senior Dev',
    exp: '10+ yrs',
    skills: ['PHP', 'WordPress', 'MySQL', 'Docker', 'Linux/VPS'],
  },
  {
    name: 'Habibullah Nahid',
    photo: '/images/team/nahid.jpg',
    role: 'UX Expert & Frontend Developer',
    tag: 'Senior Dev',
    exp: '10+ yrs',
    skills: ['Figma', 'React', 'TypeScript', 'UI Systems', 'CSS'],
  },
  {
    name: 'Moin Uddin Ahmed',
    photo: '/images/team/moin.jpg',
    role: 'AI, Backend & Cloud Infra Engineer',
    tag: 'Senior Dev',
    exp: '12+ yrs',
    skills: ['Python', 'AI/ML', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    name: 'Iftekhar Prantic',
    photo: '/images/team/Iftekhar.jpeg',
    role: 'Bringing 10+ years of experience in design, I create intuitive, high-impact digital products that blend usability, strategy, and emerging AI technologies.',
    tag: 'Senior Designer',
    exp: '10+ yrs',
    skills: ['UI/UX Design', 'Experience Design', 'Product Strategy', 'AI Technologies', 'Usability'],
  },
];

const values = [
  {
    title: 'Craft over quantity',
    description: 'We take on projects we can do exceptionally well. Every client gets the team\'s full attention — not a rushed handover to a junior.',
    icon: <FiCode />,
  },
  {
    title: 'Design that works',
    description: 'Good UI isn\'t decoration — it\'s function. Every design decision is tied to how real users interact with your product.',
    icon: <FiLayout />,
  },
  {
    title: 'AI where it counts',
    description: 'We integrate AI tools where they genuinely improve your product — not as a buzzword, but as a practical force multiplier.',
    icon: <FiCpu />,
  },
  {
    title: 'No black boxes',
    description: 'You\'ll always know what\'s being built and why. Clear communication, documented code, and full ownership handed to you on delivery.',
    icon: <FiDatabase />,
  },
];

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#101828' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Cloudflare', icon: SiCloudflare, color: '#F38020' },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeInUp: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft: Variants = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } };
const fadeInRight: Variants = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } };
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutContent() {
  return (
    <div className="about-page">

      {/* ── HERO — Company identity ──────────────────────────────────────────── */}
      <section
        className="about-hero"
        style={{ backgroundColor: 'var(--btn-navy-primary)' }}
      >
        <div className="about-hero-overlay" />

        <div className="about-container">
          <div className="about-hero-grid">

            {/* Left — company story */}
            <AnimatedDiv
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInLeft} transition={{ duration: 0.7 }}
            >
              <span className="about-hero-eyebrow">
                About MindsCraft
              </span>

              <h1 className="about-hero-title">
                A team that builds{' '}
                <span className="about-hero-title-accent">what matters.</span>
              </h1>

              <p className="about-hero-text-primary">
                MindsCraft is a digital product studio based in Dhaka, Bangladesh. We partner with founders, product teams, and businesses worldwide to design and build web products that are fast, purposeful, and built to last.
              </p>

              <p className="about-hero-text-secondary">
                We started because we saw a gap: too many agencies hand great clients to junior developers and produce average work. We do the opposite — every project is led by a senior specialist with 10+ years of real-world experience.
              </p>

              <div className="about-hero-meta">
                <div className="about-meta-chip">
                  <FiMapPin />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="about-meta-chip">
                  <FiGlobe />
                  <span>Clients across 14+ countries</span>
                </div>
                <div className="about-meta-chip">
                  <FiUsers />
                  <span>Team of 5 senior specialists</span>
                </div>
              </div>
            </AnimatedDiv>

            {/* Right — World Map */}
            <AnimatedDiv
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInRight} transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="about-map-wrap">

                <svg
                  viewBox="0 0 1000 500"
                  className="about-map-svg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <style>{`
                      @keyframes map-pulse {
                        0%   { r: 7;  opacity: 0.7; }
                        100% { r: 22; opacity: 0; }
                      }
                      .mp { animation: map-pulse 2.4s ease-out infinite; }
                      .mp1 { animation-delay: 0s;    }
                      .mp2 { animation-delay: 0.5s;  }
                      .mp3 { animation-delay: 1s;    }
                      .mp4 { animation-delay: 1.5s;  }
                      .mp5 { animation-delay: 2s;    }
                    `}</style>
                  </defs>

                  {/* ── Continent fills (equirectangular approx) ── */}
                  {[
                    /* North America */
                    'M 33,103 L 111,83 L 178,72 L 250,78 L 314,100 L 319,119 L 353,119 L 305,165 L 278,181 L 250,206 L 230,215 L 200,210 L 175,200 L 158,185 L 125,168 L 100,160 L 70,135 Z',
                    /* Greenland */
                    'M 328,55 L 365,44 L 392,50 L 396,72 L 380,90 L 352,92 L 328,86 L 318,70 Z',
                    /* South America */
                    'M 283,256 L 295,232 L 320,224 L 380,228 L 403,264 L 392,298 L 367,328 L 344,344 L 319,390 L 308,405 L 285,392 L 268,358 L 264,320 L 268,290 L 275,268 Z',
                    /* Europe */
                    'M 475,150 L 486,115 L 508,97 L 538,89 L 572,84 L 602,91 L 622,110 L 620,142 L 600,155 L 572,160 L 545,158 L 519,155 L 498,154 L 479,152 Z',
                    /* Africa */
                    'M 483,155 L 530,148 L 570,155 L 594,178 L 620,222 L 617,250 L 604,280 L 592,316 L 553,346 L 518,345 L 492,326 L 475,296 L 472,266 L 482,244 L 500,238 L 515,238 L 506,212 L 490,190 L 480,170 Z',
                    /* Asia main */
                    'M 622,110 L 700,95 L 764,88 L 833,88 L 892,90 L 947,95 L 976,116 L 958,136 L 920,142 L 895,152 L 868,136 L 833,140 L 806,156 L 775,176 L 762,200 L 740,220 L 720,230 L 695,228 L 708,196 L 714,176 L 764,176 L 689,188 L 667,183 L 642,181 L 620,184 L 620,222 L 622,142 Z',
                    /* Indian sub-continent */
                    'M 689,188 L 714,176 L 762,176 L 770,206 L 750,230 L 726,240 L 717,229 L 703,219 L 696,206 Z',
                    /* Japan */
                    'M 885,133 L 896,126 L 910,130 L 913,143 L 902,153 L 888,156 L 878,148 Z',
                    /* Australia */
                    'M 820,300 L 865,283 L 907,299 L 922,340 L 906,358 L 878,354 L 828,346 L 810,326 L 810,309 Z',
                  ].map((d, i) => (
                    <path
                      key={i} d={d}
                      fill="rgba(243,244,192,0.15)"
                      stroke="rgba(243,244,192,0.28)"
                      strokeWidth="0.6"
                    />
                  ))}

                  {/* ── Dashed lines from Dhaka to each city ── */}
                  {[
                    { x: 295, y: 137 },
                    { x: 500, y: 107 },
                    { x: 654, y: 180 },
                    { x: 920, y: 344 },
                  ].map((c, i) => (
                    <line
                      key={i}
                      x1={751} y1={184}
                      x2={c.x} y2={c.y}
                      stroke="rgba(243,244,192,0.22)"
                      strokeWidth="1"
                      strokeDasharray="6 5"
                    />
                  ))}

                  {/* ── City dots with pulse ── */}
                  {[
                    { x: 751, y: 184, cls: 'mp1', home: true, label: 'Dhaka' },
                    { x: 295, y: 137, cls: 'mp2', label: 'New York' },
                    { x: 500, y: 107, cls: 'mp3', label: 'London' },
                    { x: 654, y: 180, cls: 'mp4', label: 'Dubai' },
                    { x: 920, y: 344, cls: 'mp5', label: 'Sydney' },
                  ].map((loc) => (
                    <g key={loc.label}>
                      <circle cx={loc.x} cy={loc.y} r="8"
                        fill="rgba(243,244,192,0.35)"
                        className={`mp ${loc.cls}`}
                      />
                      <circle cx={loc.x} cy={loc.y} r={loc.home ? 5 : 3.5}
                        fill={loc.home ? '#F3F4C0' : 'rgba(243,244,192,0.85)'}
                      />
                    </g>
                  ))}
                </svg>

                {/* ── Floating stat chips ── */}
                <div className="about-map-stat-chip">
                  🌍 14+ Countries
                </div>
                <div className="about-map-stat-chip-right">
                  🚀 50+ Projects
                </div>
                <div className="about-map-stat-chip-bottom">
                  📍 Based in Dhaka · Serving worldwide
                </div>

              </div>
            </AnimatedDiv>

          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────────── */}
      <AnimatedSection
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="about-stats-section"
      >
        <div className="about-container">
          <div className="about-stats-grid">
            {[
              { num: '50+', label: 'Years combined experience' },
              { num: '50+', label: 'Projects delivered' },
              { num: '14+', label: 'Countries served' },
              { num: '100%', label: 'Client code ownership' },
            ].map((stat, i) => (
              <AnimatedDiv
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="about-stat-num">
                  {stat.num}
                </p>
                <p className="about-stat-label">{stat.label}</p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Team ──────────────────────────────────────────────────────────────── */}
      <AnimatedSection
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="about-team-section"
      >
        <div className="about-container">
          <AnimatedDiv
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp} transition={{ duration: 0.6 }}
            className="about-section-heading"
          >
            <h2>Meet the team</h2>
            <p>Every project is led by a senior specialist — no hand-offs to juniors, no surprises.</p>
          </AnimatedDiv>

          <div className="about-team-list">
            {team.map((member, i) => (
              <AnimatedDiv
                key={member.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp} transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`about-team-member${i < team.length - 1 ? ' about-team-member--bordered' : ''}`}
              >
                {/* Left — square photo, no border radius */}
                <div
                  className="about-team-photo-wrap"
                  style={{ aspectRatio: '4/5' }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 256px"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>

                {/* Right — info */}
                <div className="about-team-info">
                  {/* Eyebrow */}
                  <div className="about-team-eyebrow-row">
                    <span className="about-team-eyebrow">
                      {member.exp}
                    </span>
                    <span className="about-team-divider" />
                    <span className="about-team-tag">
                      {member.tag}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="about-team-name">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="about-team-role">
                    {member.role}
                  </p>

                  {/* Skills */}
                  <div className="about-team-skills">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="about-team-skill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>

          {/* Part-time specialists note */}
          <AnimatedDiv
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp} transition={{ duration: 0.5, delay: 0.45 }}
            className="about-network-note"
          >
            <div className="about-network-icon">
              +
            </div>
            <div>
              <p className="about-network-title">
                Extended network of specialists
              </p>
              <p className="about-network-text">
                For larger projects, we bring in trusted mid-level UX designers, frontend developers, and QA specialists — scaling the right talent to your project&apos;s scope without compromising on quality.
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      {/* ── How we work ───────────────────────────────────────────────────────── */}
      <AnimatedSection
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="about-how-section"
      >
        <div className="about-container">
          <div className="about-how-grid">

            {/* Left — heading */}
            <AnimatedDiv
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInLeft} transition={{ duration: 0.6 }}
              className="about-how-heading"
            >
              <h2>How we work</h2>
              <p>
                We&apos;ve worked inside agencies, startups, and product companies. We know what makes projects succeed — and what kills them. These are the principles we bring to every engagement.
              </p>
              <Button variant="primary" size="md" href="/contact" icon={<FiArrowRight />}>
                Start a project
              </Button>
            </AnimatedDiv>

            {/* Right — values grid */}
            <div className="about-how-values">
              {values.map((value, i) => (
                <AnimatedDiv
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeInUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="about-value-card"
                >
                  <div className="about-value-icon">
                    {value.icon}
                  </div>
                  <h3 className="about-value-title">
                    {value.title}
                  </h3>
                  <p className="about-value-text">{value.description}</p>
                </AnimatedDiv>
              ))}
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* ── Tech stack ────────────────────────────────────────────────────────── */}
      <AnimatedSection
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="about-tech-section"
      >
        <div className="about-container">
          <AnimatedDiv
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp} transition={{ duration: 0.6 }}
            className="about-tech-heading"
          >
            <h2>Our tech stack</h2>
            <p>Chosen for reliability and performance — the tools our team uses to ship great products.</p>
          </AnimatedDiv>

          <div className="about-tech-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <AnimatedDiv
                  key={skill.name}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeInUp} transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="about-tech-card"
                >
                  <Icon style={{ color: skill.color }} />
                  <span className="about-tech-name">
                    {skill.name}
                  </span>
                </AnimatedDiv>
              );
            })}
            <AnimatedDiv
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp} transition={{ duration: 0.4, delay: skills.length * 0.06 }}
              className="about-tech-card about-tech-card--ai"
            >
              <FiCpu />
              <span className="about-tech-name">AI Integration</span>
            </AnimatedDiv>
            <AnimatedDiv
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp} transition={{ duration: 0.4, delay: (skills.length + 1) * 0.06 }}
              className="about-tech-card about-tech-card--api"
            >
              <FiGlobe />
              <span className="about-tech-name">REST APIs</span>
            </AnimatedDiv>
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <AnimatedSection
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="about-cta-section"
      >
        <div className="about-container-narrow">
          <AnimatedDiv
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp} transition={{ duration: 0.7 }}
          >
            <h2>Ready to work with us?</h2>
            <p>
              We take on a limited number of new projects each quarter. If you have something in mind, let&apos;s talk — no commitment required.
            </p>
            <div className="about-cta-actions">
              <Button variant="accent" size="lg" href="/contact" icon={<FiArrowRight />}>
                Start a project
              </Button>
              <Button variant="secondary" size="lg" href="/work">
                See our work
              </Button>
            </div>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

    </div>
  );
}
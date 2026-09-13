import React from "react";
import "./subpage-team-integration.css";

export interface TeamIntegrationPillar {
  number: string;
  title: string;
  desc: string;
}

export interface SubpageTeamIntegrationProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  pillars?: TeamIntegrationPillar[];
  className?: string;
}

const DEFAULT_PILLARS: TeamIntegrationPillar[] = [
  {
    number: "01",
    title: "Rigorous internal vetting",
    desc: "Every designer is hired full-time and trained internally on SaaS UI/UX patterns before working on client roadmaps.",
  },
  {
    number: "02",
    title: "Dedicated to your product",
    desc: "You get a dedicated designer 100% focused on your product, working synchronously like an in-house team member.",
  },
  {
    number: "03",
    title: "Embedded in your stack",
    desc: "Integrated directly into your Slack, Jira, GitHub, and daily rituals for instant feedback and zero handoff lag.",
  },
  {
    number: "04",
    title: "Flexible monthly subscription",
    desc: "Predictable flat-rate pricing with zero lock-in contracts. Pause, resume, or scale capacity whenever priorities shift.",
  },
];

export const SubpageTeamIntegration: React.FC<SubpageTeamIntegrationProps> = ({
  badge = "Studio Partnership",
  title = "A design partner you can rely on",
  subtitle = "We don’t assign random freelancers. We run a battle-tested product design process embedded directly into your team.",
  pillars = DEFAULT_PILLARS,
  className = "",
}) => {
  return (
    <section className={`subpage-team-section ${className}`}>
      <div className="container">
        <div className="subpage-team__intro text-center">
          {badge && <span className="subpage-team__badge">{badge}</span>}
          <h2 className="subpage-team__title">{title}</h2>
          {subtitle && <p className="subpage-team__subtitle">{subtitle}</p>}
        </div>

        <div className="subpage-team__grid">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="subpage-team-card">
              <div className="subpage-team-card__top">
                <span className="subpage-team-card__number">{pillar.number}</span>
              </div>
              <h3 className="subpage-team-card__title">{pillar.title}</h3>
              <p className="subpage-team-card__desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

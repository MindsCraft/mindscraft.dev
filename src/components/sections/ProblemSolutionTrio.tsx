"use client";

import React from "react";
import Link from "next/link";
import { LottiePlayer } from "@/components/ui/LottiePlayer";
import "./problem-solution.css";

const ArrowIcon = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="lottie-btn-icon"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8.5C2 8.91421 2.33579 9.25 2.75 9.25L11.4393 9.25L10.2197 10.4697C9.92678 10.7626 9.92678 11.2374 10.2197 11.5303C10.5126 11.8232 10.9874 11.8232 11.2803 11.5303L13.7803 9.03033C14.0732 8.73744 14.0732 8.26256 13.7803 7.96967L11.2803 5.46967C10.9874 5.17678 10.5126 5.17678 10.2197 5.46967C9.92678 5.76256 9.92678 6.23744 10.2197 6.53033L11.4393 7.75L2.75 7.75C2.33579 7.75 2 8.08579 2 8.5Z"
      fill="white"
    />
  </svg>
);

export const ProblemSolutionTrio: React.FC = () => {
  return (
    <div className="problem-solution-container">
      {/* --- Section 1: Sophisticated product and confusing design (User Requested Portion) --- */}
      <section className="section-lottie" id="product-redesign-problem">
        <div className="container">
          <div className="grid-lottie">
            <div className="lottie-col-text">
              <h2 className="lottie-h2">
                You have a sophisticated product and a confusing design
              </h2>
              <div className="lottie-desc">
                <p className="mb-2">
                  Your product was designed by engineers — a solid backend,
                  packed with features, but the interface is a mess. Nothing’s
                  clear. Users can’t find their way around. They get confused,
                  frustrated, then leave before they ever see the value.
                </p>
                <p>
                  Let us gently take over your UI/UX and turn it into something
                  very intuitive, so your product finally delivers on its full
                  potential.
                </p>
              </div>
              <div className="lottie-btn-wrap">
                <Link
                  href="/services/product-redesign"
                  className="lottie-btn"
                >
                  <span className="lottie-btn-text">Redesign my SaaS</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="lottie-col-visual">
              <div className="lottie-animation-item">
                <LottiePlayer
                  animationPath="/animations/maze.json"
                  className="lottie-canvas lottie-canvas--maze"
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Hunting for UX designer (Alternating Layout) --- */}
      <section className="section-lottie" id="team-extension-problem">
        <div className="container">
          <div className="grid-lottie grid-lottie--reversed">
            <div className="lottie-col-visual">
              <div className="lottie-animation-item">
                <LottiePlayer
                  animationPath="/animations/magnify.json"
                  className="lottie-canvas lottie-canvas--magnify"
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>

            <div className="lottie-col-text">
              <h2 className="lottie-h2">
                Hunting for UX designer takes months of interviews and portfolio
                reviews
              </h2>
              <div className="lottie-desc">
                <p className="mb-2">
                  You needed design help weeks ago. But you&apos;re still buried
                  in resumes and portfolios, hoping someone actually knows SaaS.
                  You try freelancers — they disappear. You try hiring — it
                  drags for months. Meanwhile, your devs are blocked, and designs
                  aren’t moving.
                </p>
                <p>
                  Let us drop in immediately with a senior designer who’s done
                  this before — no onboarding, no hand-holding, just real work
                  from day one.
                </p>
              </div>
              <div className="lottie-btn-wrap">
                <Link
                  href="/services/dedicated-designer"
                  className="lottie-btn"
                >
                  <span className="lottie-btn-text">Extend my team</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Aggressive timeline / MVP --- */}
      <section className="section-lottie" id="mvp-timeline-problem">
        <div className="container">
          <div className="grid-lottie">
            <div className="lottie-col-text">
              <h2 className="lottie-h2">
                You have a very aggressive timeline. You need MVP asap
              </h2>
              <div className="lottie-desc">
                <p>
                  You don’t want a long research phase. You want screens — fast.
                  The sooner you put it in front of users, the sooner you know if
                  it works. We take a pragmatic approach: using proven UX
                  patterns to speed up design, and component libraries like Ant
                  Design or Tailwind to make handoff to developers instant. You
                  get an MVP that’s usable, testable, and ready to build on.
                </p>
              </div>
              <div className="lottie-btn-wrap">
                <Link href="/services/mvp-design" className="lottie-btn">
                  <span className="lottie-btn-text">Design from scratch</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="lottie-col-visual">
              <div className="lottie-animation-item">
                <LottiePlayer
                  animationPath="/animations/circle.json"
                  className="lottie-canvas lottie-canvas--circle"
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

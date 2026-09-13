"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { clientsData } from "@/content/clients";
import "./hero.css";

export const HeroSection: React.FC = () => {
  // Desktop: Show all 23 logos across 4 rows
  const desktopClients = clientsData;

  // Mobile: 3 columns * 4 rows = 12 items per slide (Slide 1: 12, Slide 2: 11)
  const mobileSlides = [
    clientsData.slice(0, 12),
    clientsData.slice(12),
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);

  const handleScroll = () => {
    if (isDraggingRef.current || !trackRef.current) return;
    const { scrollLeft, clientWidth } = trackRef.current;
    if (clientWidth > 0) {
      const page = Math.round(scrollLeft / clientWidth);
      setActiveSlide(page);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!trackRef.current) return;
    const clientWidth = trackRef.current.clientWidth;
    trackRef.current.scrollTo({
      left: index * clientWidth,
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  // Mouse & touch pointer drag handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (!trackRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollLeftStartRef.current = trackRef.current.scrollLeft;
    trackRef.current.style.scrollBehavior = "auto";
    trackRef.current.style.scrollSnapType = "none";
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const dx = e.clientX - startXRef.current;
    trackRef.current.scrollLeft = scrollLeftStartRef.current - dx;
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current || !trackRef.current) return;
    isDraggingRef.current = false;
    if (!trackRef.current) return;
    trackRef.current.style.scrollBehavior = "smooth";
    trackRef.current.style.scrollSnapType = "x mandatory";

    const { scrollLeft, clientWidth } = trackRef.current;
    if (clientWidth > 0) {
      const target = Math.round(scrollLeft / clientWidth);
      const clamped = Math.max(0, Math.min(mobileSlides.length - 1, target));
      trackRef.current.scrollTo({
        left: clamped * clientWidth,
        behavior: "smooth",
      });
      setActiveSlide(clamped);
    }
  };

  return (
    <section className="hero-section" aria-label="Introduction and client track record">
      {/* Background Magic: Big Shape-Shifting Liquid Gradients in Top Corners */}
      <div className="hero-gradient-mesh" aria-hidden="true">
        <div className="hero-mesh-blob hero-mesh-blob--tl" />
        <div className="hero-mesh-blob hero-mesh-blob--tr" />
        <div className="hero-mesh-frosted-veil" />
      </div>

      <div className="container hero-container">
        {/* Main Hero Copy & Actions */}
        <div className="hero-content">
          <h1 className="h1 hero-title">
            World-class UX design.{" "}
            <span className="hero-title-break">Engineered to launch. Supported forever.</span>
          </h1>

          <p className="hero-subtitle">
            We design intuitive digital products, engineer full-stack code, and provide ongoing support — with zero handoff friction.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="hero-btn hero-btn--primary">
              <span>Book a Discovery Call</span>
            </Link>

            <Link href="/cases" className="hero-btn hero-btn--secondary">
              <span>Explore Our Work</span>
              <svg
                className="hero-btn__arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.333 8h9.334M8.667 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Social Proof / Rating (temporarily hidden for later use) */}
          {/*
          <div className="hero-rating" aria-label="Rated 5 stars with 100+ reviews on Clutch">
            <div className="hero-rating__stars" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="hero-rating__star-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="hero-rating__text">5.0 on Clutch • Verified Client Outcomes</span>
          </div>
          */}

        </div>
      </div>

      {/* Customer Logo List Section */}
      <div className="hero-logos-container">
        {/* Desktop / Tablet Layout (7-column / 4-column) */}
        <div className="hero-logos-desktop">
          <div className="hero-logos-grid" role="list" aria-label="Clients we have designed for">
            {desktopClients.map((client) => (
              <div key={client.id} className="hero-logo-card" role="listitem">
                <div className="hero-logo-card__logo-wrap">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="hero-logo-card__img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Screen Slider (3x4 Grid per Slide) */}
        <div className="hero-logos-mobile" aria-label="Clients we have designed for">
          <div
            ref={trackRef}
            className="hero-logos-slider-track"
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {mobileSlides.map((slide, slideIdx) => (
              <div
                key={slideIdx}
                className="hero-logos-slide"
                aria-label={`Client logos slide ${slideIdx + 1} of ${mobileSlides.length}`}
              >
                <div className="hero-logos-grid hero-logos-grid--mobile-3x4" role="list">
                  {slide.map((client, idx) => (
                    <div key={`${client.id}-m-${slideIdx}-${idx}`} className="hero-logo-card" role="listitem">
                      <div className="hero-logo-card__logo-wrap">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="hero-logo-card__img"
                          draggable={false}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Dots (Buttons removed) */}
          <div className="hero-logos-dots" role="tablist" aria-label="Logo slides">
            {mobileSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => scrollToSlide(dotIdx)}
                className={`hero-logos-dot ${activeSlide === dotIdx ? "hero-logos-dot--active" : ""}`}
                aria-label={`Go to slide ${dotIdx + 1}`}
                role="tab"
                aria-selected={activeSlide === dotIdx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import Image from "next/image";
import { clientsData } from "@/content/clients";
import "./marquee.css";

export const ClientMarquee: React.FC = () => {
  return (
    <section className="client-grid-section" aria-label="Brands we have worked with">
      <div className="container">
        <div className="client-section-header">
          <span className="caption text-accent">Track Record</span>
          <h2 className="h3" style={{ marginTop: "8px" }}>
            Brands and products we’ve worked with
          </h2>
        </div>

        <div className="client-grid">
          {clientsData.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-card__logo-wrapper">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={140}
                  height={40}
                  className="client-card__img"
                />
              </div>
              <span className="client-card__tag">{client.industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

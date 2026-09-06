import React from "react";
import { clientsData } from "@/content/clients";
import "./marquee.css";

export const ClientMarquee: React.FC = () => {
  return (
    <section className="client-grid-section">
      <div className="container">
        <div className="client-grid">
          {clientsData.map((client) => (
            <div key={client.id} className="client-card">
              <span className="client-card__tag">{client.industry}</span>
              <span className="client-card__name">{client.name}</span>
              <span className="client-card__service">{client.service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

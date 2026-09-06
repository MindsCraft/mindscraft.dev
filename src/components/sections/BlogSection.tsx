import React from "react";
import { articlesData } from "@/content/articles";
import "./blog.css";

export const BlogSection: React.FC = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <span className="caption text-accent">Insights</span>
          <h2 className="h2" style={{ marginTop: "8px" }}>Explore our blog posts</h2>
        </div>

        <div className="blog-grid">
          {articlesData.map((art) => (
            <div key={art.id} className="blog-card">
              <div>
                <h3 className="blog-card__title">{art.title}</h3>
                <p className="blog-card__desc">{art.description}</p>
              </div>
              <a href={art.link} className="blog-card__link">
                Read article →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

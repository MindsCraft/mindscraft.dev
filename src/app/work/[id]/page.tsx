import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';
import { getWorkItem, getRelatedWork } from '@/data/workData';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const work = getWorkItem(Number(resolvedParams.id));

  if (!work) {
    return {
      title: 'Work Not Found',
      description: 'The requested work item could not be found.',
    };
  }

  const url = `https://mindscraft.dev/work/${work.id}`;

  return {
    title: `${work.title} | Mindscraft Work`,
    description: work.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: work.title,
      description: work.description,
      url,
      type: 'article',
      images: [
        {
          url: work.image,
          alt: work.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: work.title,
      description: work.description,
      images: [work.image],
    },
  };
}

export default async function WorkDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const work = getWorkItem(Number(resolvedParams.id));

  if (!work) {
    notFound();
  }

  const relatedWork = getRelatedWork(work.id, work.category);

  return (
    <article className="work-detail-page">
      <header className="work-detail-header">
        <div className="work-detail-header-grid" />
        <div className="work-detail-header-glow" />

        <div className="work-detail-header-inner">
          <Link href="/work" className="work-detail-back-link">
            <FiArrowLeft /> Back to all projects
          </Link>

          <div className="work-detail-title-row">
            <div className="work-detail-title-block">
              <span className="work-detail-category-tag">{work.category}</span>
              <h1 className="work-detail-title">{work.title}</h1>
            </div>

            <div className="work-detail-actions">
              {work.link && work.link !== '#' && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-detail-btn-primary"
                >
                  <FiExternalLink /> Live Site
                </a>
              )}
              {work.github && work.github !== '#' && (
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-detail-btn-secondary"
                >
                  <FiGithub /> View Code
                </a>
              )}
            </div>
          </div>

          <p className="work-detail-subtitle">{work.description}</p>

          <div className="work-detail-tech-row">
            {work.technologies.map((tech) => (
              <span key={tech} className="work-detail-tech-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="work-detail-content">
        <div className="work-detail-featured">
          <Image
            src={work.image}
            alt={work.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        <div className="work-detail-grid">
          <div className="work-detail-main">
            <section className="work-detail-panel">
              <h2>Project Overview</h2>
              <p className="work-detail-overview-text">{work.content}</p>
            </section>

            {work.challenges && work.challenges.length > 0 && (
              <section>
                <h3 className="work-detail-challenges-title">
                  <span className="work-detail-challenges-icon">
                    <FiCode />
                  </span>
                  Technical Challenges
                </h3>
                <div className="work-detail-challenges-list">
                  {work.challenges.map((challenge, index) => (
                    <div key={index} className="work-detail-challenge-item">
                      <div className="work-detail-challenge-dot" />
                      <p className="work-detail-challenge-text">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="work-detail-sidebar">
            {work.results && work.results.length > 0 && (
              <div className="work-detail-impact-panel">
                <div className="work-detail-impact-glow" />
                <h3 className="work-detail-impact-title">The Impact</h3>
                <div className="work-detail-impact-list">
                  {work.results.map((result, index) => (
                    <div key={index} className="work-detail-impact-item">
                      <p className="work-detail-impact-text">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {work.features && work.features.length > 0 && (
              <div className="work-detail-features-panel">
                <h3 className="work-detail-features-title">Key Features</h3>
                <ul className="work-detail-features-list">
                  {work.features.map((feature, index) => (
                    <li key={index} className="work-detail-feature-item">
                      <span className="work-detail-feature-num">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {work.images && work.images.length > 1 && (
          <div className="work-detail-gallery">
            <h2 className="work-detail-gallery-title">Project Gallery</h2>
            <div className="work-detail-gallery-grid">
              {work.images.slice(1).map((image, index) => (
                <div key={index} className="work-detail-gallery-item">
                  <Image
                    src={image}
                    alt={`${work.title} gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="work-detail-bottom-cta">
          <span className="work-detail-cta-tag">Start Your Project</span>
          <h3 className="work-detail-cta-title">Like what you see?</h3>
          <p className="work-detail-cta-text">
            We work with ambitious founders to build products that scale. Send us an inquiry and
            let&apos;s map out your MVP.
          </p>
          <div className="work-detail-cta-actions">
            <Link href="/contact" className="work-detail-cta-btn">
              Contact Us To Build It
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

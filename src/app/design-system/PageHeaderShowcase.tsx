import React from 'react';
import PageHeader from '@/components/ui/PageHeader';

/**
 * PageHeader Component Showcase
 *
 * This page demonstrates all variants of the PageHeader component
 * with different configurations for reference.
 */
export default function PageHeaderShowcase() {
    return (
        <div className="phs-page">
            {/* Gradient Variant Example */}
            <section>
                <PageHeader
                    title="Gradient Variant"
                    description="Soft gradient background with floating blobs and grid pattern. Perfect for landing pages and main sections."
                    variant="gradient"
                    align="center"
                    badge="Default"
                    breadcrumbs={[
                        { label: 'Home', href: '#' },
                        { label: 'Components', href: '#' },
                        { label: 'PageHeader' }
                    ]}
                    cta={{
                        text: 'View Documentation',
                        href: '#',
                        variant: 'primary'
                    }}
                />
            </section>

            {/* Solid Variant Example */}
            <section className="phs-section">
                <PageHeader
                    title="Solid Variant"
                    description="Navy background with white text and cream accents. Ideal for about pages and formal content."
                    variant="solid"
                    align="center"
                    badge="Professional"
                    breadcrumbs={[
                        { label: 'Home', href: '#' },
                        { label: 'About' }
                    ]}
                    cta={{
                        text: 'Learn More',
                        href: '#',
                        variant: 'secondary'
                    }}
                />
            </section>

            {/* Minimal Variant Example */}
            <section className="phs-section">
                <PageHeader
                    title="Minimal Variant"
                    description="Clean white background with subtle border. Best for content-heavy pages like blogs and documentation."
                    variant="minimal"
                    align="left"
                    badge="Simple"
                    breadcrumbs={[
                        { label: 'Home', href: '#' },
                        { label: 'Blog' }
                    ]}
                    cta={{
                        text: 'Read Articles',
                        href: '#',
                        variant: 'primary'
                    }}
                />
            </section>

            {/* Usage Examples */}
            <section className="phs-section--gray">
                <div className="phs-container">
                    <h2 className="phs-section-title">Usage Examples</h2>

                    <div className="phs-example-grid">
                        {/* Example 1 */}
                        <div className="phs-example-card">
                            <h3>Basic Usage</h3>
                            <pre>{`<PageHeader
  title="Page Title"
  description="Description"
/>`}</pre>
                        </div>

                        {/* Example 2 */}
                        <div className="phs-example-card">
                            <h3>With Breadcrumbs</h3>
                            <pre>{`<PageHeader
  title="Services"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Services' }
  ]}
/>`}</pre>
                        </div>

                        {/* Example 3 */}
                        <div className="phs-example-card">
                            <h3>With CTA</h3>
                            <pre>{`<PageHeader
  title="About Us"
  cta={{
    text: 'Contact',
    href: '/contact'
  }}
/>`}</pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Props Reference */}
            <section className="phs-section--white">
                <div className="phs-container">
                    <h2 className="phs-section-title">Props Reference</h2>

                    <div className="phs-table-wrap">
                        <table className="phs-table">
                            <thead>
                                <tr>
                                    <th>Prop</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="phs-table-mono">title</td>
                                    <td>string</td>
                                    <td className="phs-table-required">Required</td>
                                    <td>Main page title</td>
                                </tr>
                                <tr>
                                    <td className="phs-table-mono">description</td>
                                    <td>string</td>
                                    <td className="phs-table-optional">undefined</td>
                                    <td>Subtitle or description</td>
                                </tr>
                                <tr>
                                    <td className="phs-table-mono">variant</td>
                                    <td>&apos;gradient&apos; | &apos;solid&apos; | &apos;minimal&apos;</td>
                                    <td>&apos;gradient&apos;</td>
                                    <td>Background style</td>
                                </tr>
                                <tr>
                                    <td className="phs-table-mono">align</td>
                                    <td>&apos;left&apos; | &apos;center&apos;</td>
                                    <td>&apos;center&apos;</td>
                                    <td>Content alignment</td>
                                </tr>
                                <tr>
                                    <td className="phs-table-mono">badge</td>
                                    <td>string</td>
                                    <td className="phs-table-optional">undefined</td>
                                    <td>Optional badge text</td>
                                </tr>
                                <tr>
                                    <td className="phs-table-mono">breadcrumbs</td>
                                    <td>Array</td>
                                    <td className="phs-table-optional">undefined</td>
                                    <td>Breadcrumb items</td>
                                </tr>
                                <tr>
                                    <td className="phs-table-mono">cta</td>
                                    <td>Object</td>
                                    <td className="phs-table-optional">undefined</td>
                                    <td>CTA button config</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
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
        <div className="min-h-screen bg-white">
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
            <section className="mt-16">
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
            <section className="mt-16">
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
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Usage Examples</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Example 1 */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
                                {`<PageHeader
  title="Page Title"
  description="Description"
/>`}
                            </pre>
                        </div>

                        {/* Example 2 */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <h3 className="text-xl font-semibold mb-4">With Breadcrumbs</h3>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
                                {`<PageHeader
  title="Services"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Services' }
  ]}
/>`}
                            </pre>
                        </div>

                        {/* Example 3 */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <h3 className="text-xl font-semibold mb-4">With CTA</h3>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
                                {`<PageHeader
  title="About Us"
  cta={{
    text: 'Contact',
    href: '/contact'
  }}
/>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Props Reference */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Props Reference</h2>

                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Prop</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Default</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 text-sm font-mono text-navy-900">title</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">string</td>
                                    <td className="px-6 py-4 text-sm text-red-600">Required</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Main page title</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-mono text-navy-900">description</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">string</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">undefined</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Subtitle or description</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-mono text-navy-900">variant</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">'gradient' | 'solid' | 'minimal'</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">'gradient'</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Background style</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-mono text-navy-900">align</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">'left' | 'center'</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">'center'</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Content alignment</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-mono text-navy-900">badge</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">string</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">undefined</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Optional badge text</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-mono text-navy-900">breadcrumbs</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Array</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">undefined</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Breadcrumb items</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-mono text-navy-900">cta</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Object</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">undefined</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">CTA button config</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import '@/styles/components/admin.css';

// Define interface for project form data
interface ProjectFormData {
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  url: string;
  githubUrl: string;
  tags: string[];
  featured: boolean;
}

export function AdminProjectNew() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    slug: '',
    description: '',
    content: '',
    image: '',
    url: '',
    githubUrl: '',
    tags: [],
    featured: false,
  });
  const [tagInput, setTagInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');

    setFormData((prev) => ({ ...prev, slug }));
  };

  const addTag = () => {
    if (tagInput.trim() && Array.isArray(formData.tags) && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: Array.isArray(prev.tags) ? [...prev.tags, tagInput.trim()] : [tagInput.trim()],
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: Array.isArray(prev.tags) ? prev.tags.filter((tag) => tag !== tagToRemove) : [],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      router.push('/admin/projects');
      router.refresh();
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="prn-page">
      <div className="prn-page-header">
        <Link href="/admin/projects" className="prn-back-link">
          <ArrowLeft />
          Back to projects
        </Link>
        <h1 className="prn-page-title">Create New Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="prn-form">
        <div className="prn-field">
          <label htmlFor="title" className="prn-label">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={formData.title}
            onChange={handleChange}
            onBlur={() => !formData.slug && generateSlug()}
            className="prn-input"
          />
        </div>

        <div className="prn-field">
          <label htmlFor="slug" className="prn-label">Slug</label>
          <div className="prn-input-group">
            <input
              type="text"
              name="slug"
              id="slug"
              required
              value={formData.slug}
              onChange={handleChange}
              className="prn-input"
            />
            <button type="button" onClick={generateSlug} className="prn-input-action">
              Generate
            </button>
          </div>
        </div>

        <div className="prn-field">
          <label htmlFor="description" className="prn-label">Description</label>
          <textarea
            name="description"
            id="description"
            rows={2}
            required
            value={formData.description}
            onChange={handleChange}
            className="prn-textarea"
          />
        </div>

        <div className="prn-field">
          <label htmlFor="content" className="prn-label">Content</label>
          <textarea
            name="content"
            id="content"
            rows={10}
            required
            value={formData.content}
            onChange={handleChange}
            className="prn-textarea prn-textarea--tall"
          />
        </div>

        <div className="prn-field">
          <label htmlFor="image" className="prn-label">Image URL</label>
          <input
            type="url"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="prn-input"
          />
        </div>

        <div className="prn-field">
          <label htmlFor="url" className="prn-label">Project URL</label>
          <input
            type="url"
            name="url"
            id="url"
            value={formData.url}
            onChange={handleChange}
            className="prn-input"
          />
        </div>

        <div className="prn-field">
          <label htmlFor="githubUrl" className="prn-label">GitHub URL</label>
          <input
            type="url"
            name="githubUrl"
            id="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
            className="prn-input"
          />
        </div>

        <div className="prn-field">
          <label htmlFor="tags" className="prn-label">Tags</label>
          <div className="prn-input-group">
            <input
              type="text"
              id="tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              className="prn-input"
              placeholder="Add a tag"
            />
            <button type="button" onClick={addTag} className="prn-input-action">
              Add
            </button>
          </div>
          <div className="prn-tag-row">
            {Array.isArray(formData.tags) && formData.tags.map((tag, index) => (
              <span key={index} className="prn-tag">
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="prn-tag-remove"
                  aria-label={`Remove ${tag}`}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="prn-checkbox-row">
          <input
            id="featured"
            name="featured"
            type="checkbox"
            checked={formData.featured}
            onChange={handleChange}
            className="prn-checkbox"
          />
          <label htmlFor="featured" className="prn-checkbox-label">
            Featured project
          </label>
        </div>

        <div className="prn-actions">
          <Link href="/admin/projects" className="prn-button prn-button--cancel">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="prn-button prn-button--primary"
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
}

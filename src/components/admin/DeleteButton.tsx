'use client';

import { Trash } from '@/components/ui/icons';
import '@/styles/components/admin-surfaces.css';

interface DeleteButtonProps {
  title: string;
  itemId?: string;
  resourceType?: string;
}

export function DeleteButton({ title, itemId, resourceType }: DeleteButtonProps) {
  const handleDelete = async () => {
    // Confirm deletion
    const confirmed = window.confirm(`Are you sure you want to delete ${title}?`);

    if (!confirmed) return;

    // In a real implementation, you would make an API call here
    // For now, just show an alert
    alert(`Delete ${title} (ID: ${itemId || 'unknown'}, Type: ${resourceType || 'unknown'})`);

    // Example of how you would implement the actual delete functionality:
    // if (itemId && resourceType) {
    //   try {
    //     const response = await fetch(`/api/${resourceType}/${itemId}`, {
    //       method: 'DELETE',
    //     });
    //     if (response.ok) {
    //       // Refresh the page or update the UI
    //       window.location.reload();
    //     } else {
    //       alert('Failed to delete. Please try again.');
    //     }
    //   } catch (error) {
    //     console.error('Error deleting item:', error);
    //     alert('An error occurred. Please try again.');
    //   }
    // }
  };

  return (
    <button
      className="del-btn"
      onClick={handleDelete}
    >
      <Trash />
      <span className="sr-only">Delete {title}</span>
    </button>
  );
}

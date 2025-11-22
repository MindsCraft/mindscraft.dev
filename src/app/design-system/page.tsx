import { Metadata } from 'next';
import DesignSystemContent from './DesignSystemContent';

export const metadata: Metadata = {
  title: 'Design System | Mindscraft',
  description: 'Visual showcase of our design system, components, and style guide',
};

export default function DesignSystemPage() {
  return <DesignSystemContent />;
}
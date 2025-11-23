'use client';

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function DesignSystemContent() {
  return (
    <div className="p-4">
      <Button variant="secondary" className="border-gray-400 text-white hover:bg-white/10">Design System</Button>
      <Button>Sample Button</Button>
    </div>
  );
}
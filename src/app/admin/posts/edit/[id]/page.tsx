export const dynamic = 'force-dynamic'

import { AdminPostEdit } from '@/components/admin/PostEdit'
import { use } from 'react'

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  return <AdminPostEdit id={resolvedParams.id} />
}

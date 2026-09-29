import { BrowserRouter } from 'react-router-dom'
import NutriPlanApp from '@/components/nutriplan-app'

export default function Page() {
  return (
    <BrowserRouter>
      <NutriPlanApp />
    </BrowserRouter>
  )
}

export const dynamic = 'force-dynamic'

// Route links are handled client-side by the shared application shell.
export function generateStaticParams() {
  return []
}

export const metadata = {
  title: 'NutriPlan · Mess planning overview',
  description: 'Institutional meal planning and nutrition optimization for hostel messes.',
}

// The preview shell renders the same app at each requested workspace path.

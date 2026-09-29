import { BrowserRouter } from 'react-router-dom'
import NutriPlanApp from '@/components/nutriplan-app'

export default function WorkspacePage() {
  return (
    <BrowserRouter>
      <NutriPlanApp />
    </BrowserRouter>
  )
}

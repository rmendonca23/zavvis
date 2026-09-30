import { useState } from 'react'
import './App.css'
import DashboardLayout from './components/dashboard/DashboardLayout/DashboardLayout'
import './components/dashboard/dashboard.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DashboardLayout>
        <h1>Corporate Finance Overview</h1>
        <p>Monitor financial systems, transactions, and operational health.</p>
      </DashboardLayout>

      <section id="spacer"></section>
    </>
  )
}

export default App

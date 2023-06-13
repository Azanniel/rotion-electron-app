import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export function Default() {
  return (
    <div className="text-rotion-100 flex h-screen w-screen">
      <Sidebar />

      <div className="flex max-h-screen flex-1 flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import * as Collapsible from '@radix-ui/react-collapsible'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export function Default() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Collapsible.Root
      defaultOpen
      onOpenChange={setIsSidebarOpen}
      className="text-rotion-100 flex h-screen w-screen"
    >
      <Sidebar />

      <div className="flex max-h-screen flex-1 flex-col">
        <Header isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  )
}

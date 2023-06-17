import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { DotsThree } from 'phosphor-react'
import { ReactNode } from 'react'

interface LinkProps {
  to: string
  children: ReactNode
}

export function Link({ to, children }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return clsx(
          'text-rotion-100 hover:text-rotion-50 hover:bg-rotion-700 group flex items-center gap-2 rounded px-3 py-1 text-sm',
          {
            'bg-rotion-700': isActive,
          },
        )
      }}
    >
      <span className="flex-1 truncate">{children}</span>

      <div className="text-rotion-100 ml-auto flex h-full items-center group-hover:visible">
        <button className="hover:bg-rotion-500 rounded-sm px-px">
          <DotsThree weight="bold" className="h-4 w-4" />
        </button>
      </div>
    </NavLink>
  )
}

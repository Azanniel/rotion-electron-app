import clsx from 'clsx'
import { useQuery } from 'react-query'
import { CaretDoubleLeft } from 'phosphor-react'
import * as Collapsible from '@radix-ui/react-collapsible'

import * as Navigation from './Navigation'
import { CreatePage } from './CreatePage'
import { Profile } from './Profile'
import { Search } from './Search'

export function Sidebar() {
  const isMacOS = process.platform === 'darwin'

  const { data } = useQuery(['documents'], async () => {
    const response = await window.api.fetchDocuments()
    return response.data
  })

  return (
    <Collapsible.Content className="bg-rotion-800 border-rotion-600 data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut group relative h-screen flex-shrink-0 overflow-hidden border-r">
      <Collapsible.Trigger
        className={clsx(
          'text-rotion-200 hover:text-rotion-50 absolute right-4 inline-flex h-5 w-5 items-center justify-center',
          {
            'top-[1.125rem]': isMacOS,
            'top-6': !isMacOS,
          },
        )}
      >
        <CaretDoubleLeft className="h-4 w-4" />
      </Collapsible.Trigger>

      <div
        className={clsx('region-drag h-14', {
          block: isMacOS,
          hidden: !isMacOS,
        })}
      ></div>

      <div
        className={clsx(
          'flex h-full w-[240px] flex-1 flex-col gap-8 transition-opacity duration-200 group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100',
          {
            'pt-6': !isMacOS,
          },
        )}
      >
        <Profile />
        <Search />

        <Navigation.Root>
          <Navigation.Section>
            <Navigation.SectionTitle>Workspace</Navigation.SectionTitle>
            <Navigation.SectionContent>
              {data?.map((document) => {
                return (
                  <Navigation.Link
                    to={`/documents/${document.id}`}
                    key={document.id}
                  >
                    {document.title}
                  </Navigation.Link>
                )
              })}
            </Navigation.SectionContent>
          </Navigation.Section>
        </Navigation.Root>

        <CreatePage />
      </div>
    </Collapsible.Content>
  )
}

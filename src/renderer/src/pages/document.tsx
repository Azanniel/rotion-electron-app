import { useMemo } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

import { Editor, onContentUpdatedParams } from '../components/Editor'
import { ToC } from '../components/ToC'
import { Document as IPCDocument } from '@shared/types/ipc'

export function Document() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()

  const { data, isFetching } = useQuery(['document', id], async () => {
    const response = await window.api.fetchDocument({ id: id! })

    return response.data
  })

  const initialContent = useMemo(() => {
    if (data) {
      return `<h1>${data.title}</h1>${data.content ?? '<p></p>'}`
    }

    return ''
  }, [data])

  const { mutateAsync: saveDocument } = useMutation(
    async ({ title, content }: onContentUpdatedParams) => {
      await window.api.saveDocument({ id: id!, title, content })
    },
    {
      onSuccess: (_, { title }) => {
        queryClient.setQueryData<IPCDocument[]>(['documents'], (documents) => {
          if (!documents) {
            return []
          }

          return documents.map((document) => {
            if (document.id === id) {
              return { ...document, title }
            }

            return document
          })
        })
      },
    },
  )

  function handleEditorContentUpdated({
    title,
    content,
  }: onContentUpdatedParams) {
    saveDocument({ title, content })
  }

  return (
    <main className="flex flex-1 gap-8 px-10 py-12">
      <aside className="sticky top-0 hidden lg:block">
        <span className="text-rotion-300 text-sx font-semibold uppercase">
          Table of contents
        </span>

        <ToC.Root>
          <ToC.Link>Backend</ToC.Link>
          <ToC.Section>
            <ToC.Link>Banco de dados</ToC.Link>
            <ToC.Link>Autenticação</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex flex-1 flex-col items-center">
        {!isFetching && data && (
          <Editor
            content={initialContent}
            onContentUpdated={handleEditorContentUpdated}
          />
        )}
      </section>
    </main>
  )
}

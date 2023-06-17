import { Plus } from 'phosphor-react'
import { useMutation, useQueryClient } from 'react-query'
import { Document } from '@shared/types/ipc'

export function CreatePage() {
  const queryClient = useQueryClient()

  const {
    isLoading: isCreatingNewDocument,
    mutateAsync: handleCreateDocument,
  } = useMutation(
    async () => {
      const response = await window.api.createDocument()

      return response.data
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData<Document[]>(['documents'], (documents) => {
          if (!documents) {
            return [data]
          }

          return [...documents, data]
        })
      },
    },
  )

  return (
    <button
      onClick={() => handleCreateDocument()}
      disabled={isCreatingNewDocument}
      className="border-rotion-600 hover:bg-rotion-700 absolute bottom-0 left-0 right-0 flex w-[240px] items-center gap-2 border-t px-5 py-4 text-sm disabled:opacity-60"
    >
      <Plus className="h-4 w-4" />
      Novo documento
    </button>
  )
}

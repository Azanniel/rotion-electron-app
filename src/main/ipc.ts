import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async (event, params) => {
  console.log(params)

  return 'Hello world'
})

import { BrowserWindow, Menu, Tray } from 'electron'
import iconWin32 from '../../resources/icon.ico?asset'
import rotionTemplate from '../../resources/rotionTemplate.png?asset'

export function createTray(window: BrowserWindow) {
  const icon = process.platform === 'win32' ? iconWin32 : rotionTemplate
  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      accelerator: 'CommandOrControl+N',
      click: () => {
        window.webContents.send('new-document')

        if (!window.isFocused()) {
          window.focus()
        }
      },
    },
    { type: 'separator' },
    { label: 'Documentos recentes', enabled: false },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+1',
    },
    {
      label: 'Ignite',
      accelerator: 'CommandOrControl+2',
    },
    {
      label: 'Rocketseat',
      accelerator: 'CommandOrControl+3',
    },
    { type: 'separator' },
    {
      label: 'Sair do Rotion',
      role: 'quit',
    },
  ])

  tray.setToolTip('This is my application.')
  tray.setTitle('This is my title')
  tray.setContextMenu(menu)
}

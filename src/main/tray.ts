import { Menu, Tray, app } from 'electron'
import iconWin32 from '../../resources/icon.ico?asset'
import rotionTemplate from '../../resources/rotionTemplate.png?asset'

app.whenReady().then(() => {
  const icon = process.platform === 'win32' ? iconWin32 : rotionTemplate
  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    { type: 'checkbox', label: 'Dark mode' },
  ])

  tray.setToolTip('This is my application.')
  tray.setTitle('This is my title')
  tray.setContextMenu(menu)
})

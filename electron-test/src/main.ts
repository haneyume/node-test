import { app, BrowserWindow } from 'electron';
import path from 'node:path';

import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import electronReload from 'electron-reload';

electronReload(__dirname, {});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false,
    },
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  // mainWindow.loadURL('http://localhost:3000');
  mainWindow.loadFile('public/index.html');

  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

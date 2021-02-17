

const { app, BrowserWindow, ipcMain } = require('electron');

const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    fullscreen: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.maximize();
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  mainWindow.webContents.on("did-finish-load", () => {
    // mainWindow.webContents.executeJavaScript('Hello world'); // <--- this does not execute with electron-3.0.0-beta.1
  });
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

ipcMain.on('ping', (event) => {
  mainWindow = null
});

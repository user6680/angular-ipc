function logEverywhere(mainWindow, message) {
  if (mainWindow && mainWindow.webContents) {
    mainWindow.webContents.executeJavaScript(`console.log(\`${message}\`)`);
  }
}

logEverywhere();

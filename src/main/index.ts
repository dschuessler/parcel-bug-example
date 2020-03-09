import { BrowserWindow, app } from 'electron';
import path = require("path");

const pathToHtml = path.join(__dirname, "../renderer/index.html")
  app.on("ready", () => {
  const window = new BrowserWindow({
    height: 300,
    width: 200
  });

  window.loadFile(pathToHtml);
});
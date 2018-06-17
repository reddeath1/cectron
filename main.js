const electron  = require('electron')
const path = require('path')
const {app, BrowserWindow} = electron

app.on('ready',()=>{
    let win = new BrowserWindow({
        width: 1281,
        height: 800,
        minWidth: 1281,
        minHeight: 800,
        icon: path.join(__dirname, '/images/logos/logo.ico'),
        titleBarStyle: 'hidden'
    })
    
    //win.loadURL(`file://${__dirname}/index.html`)
    win.show()
});
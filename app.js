const https = require('https')
const fs = require('fs')
const path = require('path')
const port = 5555
const index = '/register.html'
const mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "svg": "image/svg+xml",
    "json": "application/json",
    "js": "text/javascript",
    "css": "text/css"
}

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, function (req, res) {
    const r = resource(req)
    const mimeType = getMimeType(r)

    fs.readFile(__dirname + r, function (err, data) {
        if (err) {
            res.writeHead(500)
            res.write('Error: Requested resource not available')
        } else {
            res.writeHead(200, {'Content-Type': mimeType})
            res.write(data)
        }
        res.end()
    })

})

server.listen(port, function (err) {
    if (err) {
        console.log('oops !! something went wrong here', err)
    } else {
        console.log(`Server started successfully, listening on : ${port}`)
    }
})

function getMimeType(filename){
    var mimeType = mimeTypes[filename.split('.').pop()];
    return mimeType ? mimeType : 'text/plain'
}

var resource = (req) => req.url == '/' ? index : req.url


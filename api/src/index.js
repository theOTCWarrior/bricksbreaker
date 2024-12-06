const { app } = require('@azure/functions');

app.setup({
    enableHttpStream: true,
});
let hostname = location.hostname; 
location.href(hostname + "/index.html")
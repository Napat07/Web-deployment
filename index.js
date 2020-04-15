let express = require('express')
let app = express()

app.get('/',(req,res) => {
    console.log('Hello World')
    res.send('Hello world')
})

app.listen(80, () => console.log('Server in running at ', 80))
let express = require('express')
let app = express()

app.get('/',(req,res) => {
    console.log('Hello World')
    res.send('Hello world')
})

app.get('/crash',(req,res) => {
    console.log('Crash !!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(process.env.PORT, () => console.log('Server in running at ', process.env.PORT))



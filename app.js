//import module
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverRide = require('method-override')

//items created from imported modules
const app = express()

// self-definition setting
const post = 3000
const routes = require('./routes/index')

//template setting
app.engine('handlebars', exphbs({ defaultLayout: main }))
app.set('view-engine', 'handlebars')

//body-parser setting
app.use(express.urlencoded({ extended: true }))

//method override setting
app.use(methodOverRide('_method'))

//routes setting
app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})


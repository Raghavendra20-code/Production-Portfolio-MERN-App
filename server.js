const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const portfolioRoutes = require('./routes/portfolioRoutes')
const path = require('path');

const app = express();

dotenv.config()

//middleware

app.use(cors());
app.use(express.json());

//access static file

app.use(express.static(path.join(__dirname, './client/build')))

//routes

app.use('/api/v1/portfolio', portfolioRoutes)

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
// })

app.use((req, res, next) => {
    if (req.method === 'GET' && !req.url.startsWith('/api')) {
      res.sendFile(path.join(clientBuildPath, 'index.html'));
    } else {
      next(); // Let other middleware handle API or POST/PUT/DELETE
    }
  });


//port

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})
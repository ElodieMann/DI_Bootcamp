const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send("-----In the Home Page with router-----");
  });
  

  router.get('/about', (req, res) => {
    res.send("-----In the About Page with router-----");
  });


module.exports = router
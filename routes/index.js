var express = require('express');
var router = express.Router();
var randomstring = require("randomstring");


let urlToHashMap = {};
let hashToUrlMap = {};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Url shortner' });
});


const createUrlHash = (url) => {
  // TODO: validate url
  // TODO: sanitize url

  // generate random hash and store in urlMap
  const hash = randomstring.generate({
    length: 8,
    charset: 'hex'
  });
  console.log(`hash`, hash);
  //TODO: consider hash collision case
  urlToHashMap[url] = hash;
  hashToUrlMap[hash] = url;
  return hash;
}


// GET/:hash  - redirects to the stored initial url
router.get('/:hash', function (req, res, next) {
  console.log(`redirect req`, req);
  const hash = req.params.hash;
  const redirectUrl = hashToUrlMap[hash];
  if (redirectUrl) {
    res.redirect(301, redirectUrl);
  } else {
    res.status(404);
    res.send();
  }
  
});



router.post('/shorten', function (req, res, next) {
  console.log(`shorten req`, req.body);
  const url = req.body.url;
  let response;
  // check if url exists
  if (urlToHashMap[url]) {
    response = {
      shortenedLink : urlToHashMap[url]
    }
  } else {
    response = {
      shortenedLink : createUrlHash(url)
    };
  }
  res.send(response);
});

module.exports = router;

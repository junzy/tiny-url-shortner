# tiny-url-shortner
quick poc url shortner with express


Running instructions
- npm install
- npm start

The application will be deployed at localhost:3000


API:
- POST /shorten - 
example POST body 
`{
    url: "google.com"
}`

Response sample `{
    shortenedLink: ddAwdgaS12
}`

- GET /:hash
Replace hash with shortenedLink received from /shorten endpoint and you will receive a redirect to the original url

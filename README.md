# tiny-url-shortner
quick poc url shortner with express
/POST/shorten - 
request sample {
    url: "google.com"
}
response sample {
    shortenedLink: ddAwdgaS12
}

/GET/:hash
Replace hash with shortenedLink received from /shorten endpoint and you will receive a redirect to the original url
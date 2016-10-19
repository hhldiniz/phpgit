<?php
require_once 'vendor/autoload.php';
use Milo\Github\Http;

$method = Http\Request::GET;
$url = 'https://api.github.com/users';
$headers = [
    'Content-Type' => 'application/json',
];
$content = json_encode($_SERVER);

$request = new Http\Request($method, $url, $headers, $content);

$request->getMethod();   # POST
$request->getUrl();      # http://example.com/sniff
$request->hasHeader('CONTENT-type');                      # TRUE
$request->getHeader('Accept-Encoding', 'default/value');  # default/value
$request->getHeaders();  # ['content-type' => 'application/json']
$request->getContent();  # ...

$request->addHeader('Content-Type', 'text/html');  # does nothing
$request->setHeader('Content-Type', 'text/html');  # changes the header


?>
<?php

// Target URL to fetch
$url = 'https://www.bna.com.ar/Home/PlazoFijoWebinformacion';

// Fetch the content from the target URL
$content = file_get_contents($url);

// Set the appropriate headers for the client response
header('Content-Type: text/html');
echo $content;

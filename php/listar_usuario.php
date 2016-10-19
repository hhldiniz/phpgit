<?php
	$curl = curl_init();
	curl_setopt_array($curl, array(
	    CURLOPT_RETURNTRANSFER => 1,
	    CURLOPT_URL => 'https://api.github.com/users',
	    CURLOPT_USERAGENT =>'Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0'
	));
	$result = curl_exec($curl);
	if(!$result){
	    die('Error: "' . curl_error($curl) . '" - Code: ' . curl_errno($curl));
	}
	curl_close($curl);
	echo $result;
?>
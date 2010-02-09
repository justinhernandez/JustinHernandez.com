<?php

// generate random greeting with a link ;)
function greeting()
{
	$greetings = array(
		'Talofa' => 'http://en.wikipedia.org/wiki/Samoan_language',
		'Aloha' => 'http://en.wikipedia.org/wiki/Hawaiian_Language',
		'Kaltxì' => 'http://en.wikipedia.org/wiki/Na%27vi_language',
		'Habari' => 'http://en.wikipedia.org/wiki/Swahili_language',
		'Saluton' => 'http://en.wikipedia.org/wiki/Esperanto_language',
		'Hafa' => 'http://en.wikipedia.org/wiki/Chamorro_language',
		"Ya'at'eeh" => 'http://en.wikipedia.org/wiki/Navajo_language',
		"Haai" => 'http://en.wikipedia.org/wiki/Afrikaans_language',
		"Namaskar" => 'http://en.wikipedia.org/wiki/Bengali_language',
		"Nei ho" => 'http://en.wikipedia.org/wiki/Cantonese_language',
		"Salvete" => 'http://en.wikipedia.org/wiki/Latin_language',
		"Kia ora" => 'http://en.wikipedia.org/wiki/Maori_language',
		"Ia orana" => 'http://en.wikipedia.org/wiki/Tahitian_language',
		"Selam" => 'http://en.wikipedia.org/wiki/Turkish_language',
		"Xin chào" => 'http://en.wikipedia.org/wiki/Vietnamese_language',
		"Shwmae" => 'http://en.wikipedia.org/wiki/Welsh_language',
		"Sawubona" => 'http://en.wikipedia.org/wiki/Zulu_language',
		"Shalom" => 'http://en.wikipedia.org/wiki/Hebrew_language',
	);

	// get random entry
	$keys = array_keys($greetings);
	shuffle($keys);
	shuffle($keys);

	// simplize
	$hello = $keys[0];
	$url = $greetings[$keys[0]];
	preg_match('/.+\/(.+)_/', $url, $matches);
	$lang = urldecode($matches[1]);

	print "<a id='greeting' title=\"Hello in $lang\" target='_blank' class='large' href='$url'>$hello!</a>";
}

function title()
{
	$titles = array(
		"You've just been erased.",
		'Hey toots!',
		'Long time no see!',
		"It's a me! Justin Hernandez!",
		'Professional Dreamer',
		'Just me.',
		'Putting the funk in functionality.',
		'Keeping it clever since 1982.',
		'J-Money the Remix',
		'Classy and sassy mo massay.',
		'Hello Mcfly?',
		'There is no spoon.',
		"I thought what I'd do was, I'd pretend I was one of those deaf-mutes.",
	);

	shuffle($titles);
	shuffle($titles);

	return $titles[0];
}
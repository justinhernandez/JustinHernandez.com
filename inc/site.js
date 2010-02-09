var captionLength = 0;
var stuff_list = ['programming', 'beer', 'people', 'porkchops', 'q-tips',
'jquery', 'php', 'ruby', 'classical music', 'npr', 'gum', 'menudo', 'v-neck tees',
'football', 'netbeans', "america's most wanted", 'rice', 'spam musubis', 'having fun',
'jokes', 'algorithms', 'cartoons', 'the internet', 'hawaii', 'computers',
'simplicity', 'minimalism', 'coffee', 'laughing', 'osx', 'sashimi', 'grandma'];
var stuff_index = 0;
var stuff_count = stuff_list.length;
// shuffle
stuff_list = fisherYates(stuff_list);
var caption = get_caption();

$(function(){
	setInterval ( "cursorAnimation()", 600 );
	// start the typing
	type();
	// enable qtip
	qtips();
	// set bg
	me_bg();
	// open links in new window
	$('a').click(function(){
		window.open(this.href);
		return false;
	});
});




// thanks http://www.burnmind.com/howto/how-to-create-a-typing-effect-an-eraser-effect-and-a-blinking-cursor-using-jquery
function type()
{
	$('#stuff').html(caption.substr(0, captionLength++));
	if(captionLength < caption.length+1)
	{
		setTimeout("type()", 100);
	}
	else
	{
		captionLength = 0;
		caption = get_caption();
		// run type
		setTimeout('type()', 2500);
	}
}

// position background pic right above footer
function me_bg()
{
	p = $('#footer').position();
	$('#me_bg').css({ top: p.top-75 });
}

// get a new caption
function get_caption()
{
	if (stuff_index >= stuff_count) stuff_index = 0;

	caption = stuff_list[stuff_index++];

	return caption;
}

// animate cursor
function cursorAnimation()
{
  $("#cursor").animate(
  {
    opacity: 0
  }, "normal", "swing").animate(
  {
    opacity: 1
  }, "normal", "swing");
}

// randomize array
function fisherYates(myArray)
{
	var i = myArray.length;

	if ( i == 0 ) return false;

	while ( --i )
	{
		var j = Math.floor( Math.random() * ( i + 1 ) );
		var tempi = myArray[i];
		var tempj = myArray[j];
		myArray[i] = tempj;
		myArray[j] = tempi;
	}

	return myArray;
}

// set nice qtips
function qtips()
{
	$("#projects, #greeting").qtip({
		style: {
			width: 300, // Set a high max width so the text doesn't wrap
			tip: true, // Give them tips with auto corner detection
			textAlign: 'center',
			color: '#444',
			background: 'white',
			padding: 10,
			border: {
				radius: 5,
				color: '#FAC8D0'
			}
		},
		position: {
			corner: {
				target:'bottomMiddle'
			}
		}
	});
	$("#findme a[title], #emailage").qtip({
		style: {
			width: 300, // Set a high max width so the text doesn't wrap
			tip: true, // Give them tips with auto corner detection
			textAlign: 'center',
			color: '#444',
			background: 'white',
			padding: 10,
			border: {
				radius: 5,
				color: '#FAC8D0'
			}
		},
		position: {
			corner: {
				target:'bottomMiddle',
				tooltip: 'topRight'
			}
		}
	});
	$("#iplay a[title]").qtip({
		style: {
			width: 300, // Set a high max width so the text doesn't wrap
			tip: true, // Give them tips with auto corner detection
			textAlign: 'center',
			color: '#444',
			background: 'white',
			padding: 10,
			border: {
				radius: 5,
				color: '#FAC8D0'
			}
		},
		position: {
			corner: {
				target:'topMiddle',
				tooltip: 'bottomRight'
			}
		}
	});
}
// This is the main Javascript document for this website, it contains Jquery. More documentation to come

//--------------------------------------------------------------------
// This is the main Javascript file for my first personal website. The
// code contains JQuery, and is not required in order to use the site
// that it is used by. Because of my background in non-scripted languages
// and object orientated programming, I have grouped all code into 
// functions which I then execute in the right order. 
//
// Author: Mason O'Mara
// Last Edit: 7/25/2012
//--------------------------------------------------------------------
$(document).ready(function()
{
	
	//----------------------------------------------------------------
	// Variable declaration
	//----------------------------------------------------------------
	var images = new Array();
	images[0] = "http://img534.imageshack.us/img534/204/plantsheader.jpg";
	images[1] = "http://img822.imageshack.us/img822/464/chewdestiny.jpg";
	images[2] = "http://img802.imageshack.us/img802/598/leavesontree.jpg";
	
	var x = 0;
	
	//----------------------------------------------------------------
	// This function is used to gradually fade in and out a sequence
	// of images in the header section of the site. The images are stored
	// in an array decalred above. For the time being I have the images
	// hosted on a imageshack account located at: http://imageshack.us/homepage/?user=masonoh91
	// TODO: randomize the sequence, host images locally once site is live
	//----------------------------------------------------------------
	function headerChange()
	{	
		$(".indexHeader").fadeOut(1000, function()
		{
			document.getElementById("testing").src = images[x++];
			if(x >= images.length)
				x = 0;
		});
		$(".indexHeader").fadeIn(1000);
		setTimeout(headerChange, 10000);
	}
	
	//---------------------------------------------------------------
	// This function gradually fades in the divs on page load
	// TODO: only do this once on home page viist, then just fade in 
	// everything below header information, if possible
	//---------------------------------------------------------------
	function initialFade()
	{
		$(".title").hide();
		$(".indexHeader").hide();
		$(".indexNavigation").hide();
		$(".indexHeaderSeparation").hide();
		$(".photoReel").hide();
		$("#photoDisplayFrame").hide();
		$(".photoDesc").hide();
		$(".aboutParagraph").hide();
		$(".aboutList").hide();
		$(".aboutPhoto").hide();
		
		$(".title").fadeIn(300, function() 
		{ 
			$(".indexHeader").fadeIn(300, function()
			{
				$(".indexNavigation").fadeIn(300, function()
				{
					$(".indexHeaderSeparation").fadeIn(300, function()
					{
						$(".indexHeaderSeparation").fadeIn(300, function()
						{
							$(".photoReel").fadeIn(300, function()
							{
								$("#photoDisplayFrame").fadeIn(300, function()
								{
									$(".photoDesc").fadeIn(300);
								});
							});
							
							$(".aboutParagraph").fadeIn(300, function()
							{
								$(".aboutList").fadeIn(300, function()
								{
									$(".aboutPhoto").fadeIn(300);
								});
							});
						});
					});
				});
			});
		});
	}
	
	//--------------------------------------------------------------------
	// This function fades in a photo in the reel, changes it and it's 
	// description, and then fades the new content in. I tried doing this with
	// images offline, and it didn't work. For now I'll be using images 
	// hosted on a imageshack.us account which is located at:
	//
	// http://imageshack.us/homepage/?user=masonoh91
	//
	// also once again, I'm SURE there is a more OO, easier, organized
	// way to do this shit... but for now as I learn I'll keep it as is
	// ill prob just look into lumping this shit into functions with a case
	// switch somewhere. this is hella redundant.
	//--------------------------------------------------------------------
	function photoCycle()
	{
		$(".photoThumb1").click(function() 
		{
			$(".photoDisplay").fadeOut(800, function()
			{
				document.getElementById("photoDisplayFrame").src= "http://img232.imageshack.us/img232/6717/alreadytherefull.jpg";
				$(".photoDisplay").fadeIn(800);
			});
			$(".photoDesc").fadeOut(1000, function() 
			{									   
				document.getElementById("photoTitle").innerHTML="Title: Already There";
				document.getElementById("photoDesc").innerHTML="This photo was the 2nd in a failed 52 week project. Inspired by Meatyard.";
				$(".photoDesc").fadeIn(1000);
			});
		});
		
		$(".photoThumb2").click(function()
		{
			$(".photoDisplay").fadeOut(800, function()
			{
				document.getElementById("photoDisplayFrame").src = "http://img26.imageshack.us/img26/5752/earthquakefull.jpg";
				$(".photoDisplay").fadeIn(800);
	
			});
			$(".photoDesc").fadeOut(1000, function() 
			{
				document.getElementById("photoTitle").innerHTML="Title: Earthquake";
				document.getElementById("photoDesc").innerHTML="This photo was the 1st in a failed 52 week project. Inspired by Meatyard and Deerhunter's Halcyon Digest.";
				$(".photoDesc").fadeIn(1000);
			});
		});
	}
	
	//accordian testing
	function accordianMenus()
	{
		$(".indexNavigation > ul > li > div").click(function()
		{
			if(false == $(this).next().is(":visible"))
			{
				$(".indexNavigation > ul > li > div > ul").slideDown(300);
			}
			$(this).next().slideToggle(300);
		});
		$(".indexNavigation ul:eq(0)").show();
	}
	
	//main
	
	initialFade();
	headerChange();
	photoCycle();
	accordianMenus();
});
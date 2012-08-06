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
	images[0] = "../Photos/PlantsHeader.jpg";
	images[1] = "../Photos/ChewDestiny.jpg";
	images[2] = "../Photos/LeavesOnTree.jpg";

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
			document.getElementById("headerImage").src = images[x++];
			if(x >= images.length)
				x = 0;
		});
		$(".indexHeader").fadeIn(1000);
		setTimeout(headerChange, 10000);
	}

/*
	//---------------------------------------------------------------
	// This function gradually fades in the divs on page load
	//
	// TODO: Until I can have both this and the custom scroll bars
	// I'm going to prioitize the scroll bars. The problem is that
	// when things are initially hidden the plugin cannot determine the
	// size of the div (because it's hidden) and thus doesn't construct
	// a scrollbar. You then can only see what is initially loaded into the 
	// list. But, if the list is not initially hidden then the animation
	// is meaningless. Perhaps look into the update() funciton or manually
	// determining the size of the scroll. 
	//
	// NOTE: After stopping the usage of this function, not only do 
	// my scroll bars work, but my site loads significantly faster.
	// I'm going to discontinue its use, but keep it commented out for a 
	// while incase I can find a use for it.
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
*/
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
		$("ul.photoReel > li").click(function()
		{
			var photoId = $(this).attr('id');

			$(".photoDisplay").fadeOut(800, function()
			{
				switch(photoId)
				{
					case "photoThumb1":
						document.getElementById("photoDisplayFrame").src = "Photos/AlreadyThere_Full.jpg";
						document.getElementById("photoLink").href = "http://www.flickr.com/photos/masonoh/6275196820/in/photostream";
						break;

					case "photoThumb2":
						document.getElementById("photoDisplayFrame").src = "Photos/Earthquake_Full.jpg";
						document.getElementById("photoLink").href = "http://www.flickr.com/photos/masonoh/6255898909/in/photostream";
						break;

					case "photoThumb3":
						document.getElementById("photoDisplayFrame").src = "Photos/PhantogramFull.jpg";
						document.getElementById("photoLink").href = "http://www.flickr.com/photos/masonoh/7606989438/in/photostream";
						break;

					case "photoThumb4":
						document.getElementById("photoDisplayFrame").src = "Photos/Replica_Full.jpg";
						document.getElementById("photoLink").href = "http://www.flickr.com/photos/masonoh/7676340440/in/photostream";
						break;

					case "photoThumb5":
						document.getElementById("photoDisplayFrame").src = "Photos/Ashley_Full.jpg";
						document.getElementById("photoLink").href = "http://www.flickr.com/photos/masonoh/7676413290/in/photostream";
						break;
				}
				$(".photoDisplay").fadeIn(800);
			});

			$(".photoDesc").fadeOut(1000, function()
			{
				switch(photoId)
				{
					case "photoThumb1":
						document.getElementById("photoTitle").innerHTML="Title: Already There";
						document.getElementById("photoDesc").innerHTML="This photo was the 2nd in a failed 52 week project. Inspired by Meatyard.";
						break;

					case "photoThumb2":
						document.getElementById("photoTitle").innerHTML="Title: Earthquake";
						document.getElementById("photoDesc").innerHTML="This photo was the 1st in a failed 52 week project. Inspired by Meatyard and Deerhunter's Halcyon Digest.";
						break;

					case "photoThumb3":
						document.getElementById("photoTitle").innerHTML="Title: Untitled";
						document.getElementById("photoDesc").innerHTML="A simple self portrait taken on UW-Platteville's campus.";
						break;

					case "photoThumb4":
						document.getElementById("photoTitle").innerHTML="Title: Replica";
						document.getElementById("photoDesc").innerHTML="A conceptual self-portrait taken behind Platteville's Main Street.";
						break;

					case "photoThumb5":
						document.getElementById("photoTitle").innerHTML="Title: Untitled";
						document.getElementById("photoDesc").innerHTML="Ashley enjoying some Noodle's n' Company!";
						break;
				}
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
	
	function scrollBarLoading()
	{
		(function($){
        $(window).load(function(){
            $("div.photoReel").mCustomScrollbar();
        });
   		})(jQuery);	
	}

	scrollBarLoading();
	setTimeout(headerChange, 10000);
	photoCycle();
	accordianMenus();
	
});
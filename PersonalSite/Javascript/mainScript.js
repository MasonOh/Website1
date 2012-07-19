// This is the main Javascript document for this website, it contains Jquery. More documentation to come

//--------------------------------------------------------------------
// This function gradually fades in all of the divs in the home page.
// I still need to make sure that I account for additional pages in the 
// heirarchy. And I'm sure there is a better way to do this, this looks
// ug as fuck.
//
// TODO: learn how to use cookies to make sure this funciton is only 
// executed once per website viist. in addition look into ways to fade out
// other divs from other pages and such. this could get really in dept/
// cool if done right.
//
// for example, on first visit everyhting fades in as is, after this 
// when visiting each page the header and navigation stays the same and
// only the content fades in and out.
//--------------------------------------------------------------------
$(document).ready(function()
{
	var images = new Array();
	images[0] = "http://img534.imageshack.us/img534/204/plantsheader.jpg";
	images[1] = "http://img822.imageshack.us/img822/464/chewdestiny.jpg";
	images[2] = "http://img802.imageshack.us/img802/598/leavesontree.jpg";
	
	var x = 0;
	
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
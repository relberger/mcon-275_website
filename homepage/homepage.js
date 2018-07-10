"use strict";
$(document).ready(function()
{
	var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=4a8c77aca266491d9db4b871be6670f2";
	$.getJSON(url, function(data)
	{
		var html = "";
		
		$.each(data.results, function(i, result)
		{
			html += "<li>" + result.title + " by " + result.author + "</li>";		
		});

		$("#bestSeller").html(html);
	});
	
	/*$.ajax(
	{
		url: "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=4a8c77aca266491d9db4b871be6670f2",
		dataType: "json",	
		success: function(results)
		{
			$("#bestSeller").html("");
			$("#bestSeller").append("<h2>" + results.title +" by " + result.author + "</h2>");
		}		
	});*/
	
	var slider = $("#images");
	var leftProperty;
	var newLeftProperty;
	
	$("#rightButton").click(function ()
	{
		leftProperty = parseInt(slider.css("left"));
		if (leftProperty - 330 <= -1950)
		{
			newLeftProperty = 0;
		}
		else
		{
			newLeftProperty = leftProperty - 340;
		}
		slider.animate(
		{
			left : newLeftProperty
		}, 1000);
	}); 
	$("#leftButton").click(function ()
	{
		leftProperty = parseInt(slider.css("left"));

		if (leftProperty < 0)
		{
			newLeftProperty = leftProperty + 340;
		}
		else
		{
			newLeftProperty = -1620;
		}

		slider.animate(
		{
			left : newLeftProperty
		}, 1000);		
	});

});

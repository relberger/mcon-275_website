"use strict";
$(document).ready(function ()
{
	// set focus on load
	$("#username").focus();

	//set datepicker
	$("#datepicker").datepicker(
	{
		minDate : new Date ()
	});

	var isDate = function (date)
	{
		if (! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(date))
		{
			return false;
		}

		var index1 = date.indexOf("/");
		var index2 = date.indexOf("/", index1 + 1);
		var month = parseInt(date.substring(0, index1));
		var day = parseInt(date.substring(index1 + 1, index2));

		if (month < 1 || month > 12)
		{
			return false;
		}
		if (day > 31)
		{
			return false;
		}
		return true;

	};

	$("#submit").click(function (e)
	{
		$("span").text("");
		var isValid = true;
		var username = $("#username").val();
		var password1 = $("#password1").val();
		var password2 = $("#password2").val();
		var email = $("#email").val();
		var booksRead = $("#booksRead").val();
		var booksToRead = $("#booksToRead").val();
		var dob = $("#dob").val();

		if (username === "")
		{
			isValid = false;
			$("#username").next().text("Please enter a username.");
		}

		if (password1 === "")
		{
			isValid = false;
			$("#password1").next().text("Please enter a password.");
		}
		
		if (password2 === "" || password2 !== password1)
		{
			isValid = false;
			$("#password2").next().text("Passwords must match.");
		}
		
		if (email === "" || ! /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(email))
		{
			isValid = false;
			$("#email").next().text("Please enter a valid email.");
		}

		if (dob === "" || !isDate(dob, "full"))
		{
			isValid = false;
			$("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
		}
		
		if (booksToRead === "")
		{
			isValid = false;
			$("#booksToRead").next().text("Please enter a number of books want to read.");
		}		
		
		if (booksRead === "")
		{
			isValid = false;
			$("#booksRead").next().text("Please enter a number of books you have read.");
		}
		if ($("#datepicker").val() === "")
		{
			isValid = false;
			$("#datepicker").next().text("Please enter a date for your goal.");
		}

		var calculateBooks = function (booksRead, booksToRead)
		{
			var books = booksToRead - booksRead;
			return books;
		};

		var books = calculateBooks(booksRead, booksToRead);
		if (books == 1)
		{
			alert("We'll help you read " + books + " more book before " + $("#datepicker").val() + "!");
		}
		else if (books > 1)
		{
			alert("We'll help you read " + books + " more books before " + $("#datepicker").val() + "!");
		}

		if (isValid === true)
		{
			$("#registration_form").submit();
		}	
		else if (isValid === false)
		{
			return false;
		}
	});
});

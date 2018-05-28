"use strict";
$(document).ready(function ()
{
	// set focus on load
	$("#username").focus();

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

	$("#submit").click(function ()
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
		var calculateBooks = function (booksRead, booksToRead)
		{
			var books = booksToRead - booksRead;
			return books;
		};

		if (booksRead <= booksToRead)
		{
			var books = calculateBooks(booksRead, booksToRead);
			if (books == 1)
			{
				alert("We'll help you read " + books + " more book before your goal!");
			}
			else
			{
				alert("We'll help you read " + books + " more books before your goal!");
			}
		}
		else
		{
			$("#booksToRead").next().text("Please enter a number greater than or equal to the previous entry.");
		}

		//set datepicker
		$("#datepicker").datepicker(
		{
			minDate: new Date()
		});
		
		if (isValid === true)
		{
			$("#registration_form").submit();
		}
	});
});

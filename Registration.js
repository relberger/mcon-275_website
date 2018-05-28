"use strict";

window.onload() = function()
{
	$("#username").focus();
};

$(document).ready(function ()
{
	$("#submit").click(function ()
	{
		var username = $("#username").val();
		var password1 = $("#password1").val();
		var password2 = $("#password2").val();
		var email = $("#email").val();
		var dob = $("#dob").val();
		var isValid = true;

		//validate user entries
		if (username == "")
		{
			$("username").nextElementSibling.firstChild.nodeValue = "Username is required";
			isValid = false;
		}
		else if (password1 == "")
		{
			$("password1").nextElementSibling.firstChild.nodeValue = "Password is required";
			isValid = false;
		}
		else if (password2 == "")
		{
			$("password2").nextElementSibling.firstChild.nodeValue = "Please re-enter password";
			isValid = false;
		}
		else if (email == "")
		{
			$("email").nextElementSibling.firstChild.nodeValue = "Email address is required";
			isValid = false;
		}
		else if (dob == "")
		{
			$("dob").nextElementSibling.firstChild.nodeValue = "Date of birth is required";
			isValid = false;
		}
		if(isValid == true)
		{
			$("#Registration").submit();
		}
	});
}
/*
 var submit = function() {
 var emailAddress1 = $(#"email_address1").value;
 var emailAddress2 = $("email_address2").value;
 var firstName = $("first_name").value;
 var isValid = true;

 // validate the entries
 if (emailAddress1 == "") {
 $("email_address1").nextElementSibling.firstChild.nodeValue = "First email address entry required";
 isValid = false;
 } else if (emailAddress2 == "") {
 $("email_address2").nextElementSibling.firstChild.nodeValue = "Second email address entry required";
 isValid = false;
 } else if (emailAddress2 != emailAddress1) {
 $("email_address2").nextElementSibling.firstChild.nodeValue = "Email address entries must match";
 isValid = false;
 } else if (firstName == "") {
 $("first_name").nextElementSibling.firstChild.nodeValue = "First name entry required";
 isValid = false;
 }

 // submit the form if all entries are valid
 // otherwise, display an error message
 if (isValid == true) {
 $("email_form").submit();
 }
 };

 window.onload = function() {
 $("join_list").onclick = joinList;
 $("email_address1").focus();
 };*/


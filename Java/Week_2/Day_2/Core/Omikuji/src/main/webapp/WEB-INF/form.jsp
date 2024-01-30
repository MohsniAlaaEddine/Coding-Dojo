<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="container p-5">
<h1>Send an Omikuji!</h1>

<form action="/processForm" method="POST" class="d-flex flex-column gap-4">
<div>
<label>Pick any number from 5 to 25:</label>
<input class="form-control" type="number" name="num">
</div>
<div>
<label>Enter the name of the city:</label>
<input class="form-control" type="text" name="cityName">
</div>
<div>
<label>Enter the name of any real person:</label>
<input class="form-control" type="text" name="personName">
</div>
<div>
<label>Enter professional endeavor or hobby:</label>
<input class="form-control" type="text" name="profession">
</div>
<div>
<label>Enter any type of living thing:</label>
<input class="form-control" type="text" name="living">
</div>
<div>
<label>Say something nice to someone:</label>
<textarea class="form-control" rows="5" cols="30" name="description"></textarea>
</div>
<div>
<p>Send and show a friend</p>
<button class="btn btn-primary">Send</button>
</div>
</form>
</div>
</body>
</html>
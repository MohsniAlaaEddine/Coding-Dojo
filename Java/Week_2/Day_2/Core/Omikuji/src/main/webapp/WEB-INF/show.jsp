<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="container p-5">
<h1>Here's Your Omikuji!</h1>
<div class="card border border-dark bg-primary-subtle" style="width: 190px;">
<h6 class="card-text p-4">In ${num} years, you will live in ${cityName} with ${personName} as your roommate,${profession} for a living.\n the next time you see a ${living},you will have good luck. Also,${description}.</h6>
</div>
<a href="/omikuji">Go Back</a>
</div>
</body>
</html>
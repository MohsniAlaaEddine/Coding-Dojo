<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="container p-5">
<div class="d-flex justify-content-between">
<h1 class="text-success">Edit Expense</h1>
<a href="/expenses">Go back</a>
</div>

	<form:form class="mt-5" action="/expenses/${travel.id}" method="Post"
		modelAttribute="travel">
		<form:errors path="*" class="text-danger" />
		<p>
			<form:label path="name">Expense Name:</form:label>

			<form:input class="form-control" path="name" />
		</p>
		<p>
			<form:label path="vendor">Vendor:</form:label>

			<form:input class="form-control" path="vendor" />
		</p>

		<p>
			<form:label path="amount">Amount:</form:label>

			<form:input class="form-control" type="number" path="amount" />
		</p>
		<p>
			<form:label path="description">Description:</form:label>

			<form:textarea class="form-control" cols="8" rows="3"
				path="description" />
		</p>

		<button class="btn btn-primary">Submit</button>
	</form:form>
</div>
</body>
</html>
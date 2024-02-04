<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Dorm</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>
	<div class="container p-5">
		<h1 class="text-center">New Dorm</h1>
		<div class="d-flex flex-column gap-3">

			<a href="/dorms">Dashboard</a>

			<form:form class="border border-dark p-5 d-flex flex-column" action="/dorms/processDorm" method="post"
				modelAttribute="dorm">
				<form:errors path="*" />
				<p class="d-flex gap-3 align-items-center">
					<form:label  path="name">Name</form:label>

					<form:input class="form-control" path="name" />
				</p>
				
				<button class="btn btn-primary ">Add</button>
			
			</form:form>
		</div>
	</div>
</body>
</html>
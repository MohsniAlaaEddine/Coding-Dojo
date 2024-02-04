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
	<h1 class="text-center">New Student</h1>
	<div class="d-flex flex-column gap-3 mt-5">

		<a href="/dorms">Dashboard</a>

		<form:form class="border border-dark p-5 d-flex flex-column gap-2" action="/students/processStudents" method="post"
			modelAttribute="student">
			<form:errors path="*" />
			<p>
				<form:label path="name">Name</form:label>

				<form:input class="form-control" path="name" />
			</p>
			<p>
				<form:label path="dorm">Select Dorm</form:label>

				<form:select path="dorm" class="form-select">
					<c:forEach items="${dorm}" var="oneDorm">
						<option value="${oneDorm.id }">${oneDorm.name }</option>
					</c:forEach>
				</form:select>
			</p>

			<button class="btn btn-primary mt-3">Add</button>
		</form:form>
	</div>
</div>
</body>
</html>
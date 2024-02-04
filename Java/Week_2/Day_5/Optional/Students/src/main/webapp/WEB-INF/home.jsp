<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>
	<div class="d-flex flex-column gap-3 container p-5">
		<div class="d-flex flex-column">
			<a href="/dorm/new">Add a new dorm</a> <a href="/student/new">Add
				a new student</a>
		</div>
		<div class="border border-dark">
			<table class="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${dorm }" var="oneDorm">
						<tr>
							<td>${oneDorm.name}</td>

							<td><a href="/dorm/${oneDorm.id }">See Students</a>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>

	</div>
</body>
</html>
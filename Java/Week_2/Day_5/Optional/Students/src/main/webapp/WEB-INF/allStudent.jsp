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

	<div class="d-flex flex-column gap-5 container p-5">
		<h1 class="text-center">${dorm.name}</h1>
		<div>
			<a href="/dorms">Dashbard</a>
			<div class="border border-dark">
				<table class="table border-dark">
					<thead>
						<tr>
							<th>Student</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${dorm.students }" var="oneStudent">
							<tr>
								<td>${oneStudent.name}</td>

								<td>
									<form action="/dorm/${oneStudent.id}" method="post">
										<input class="btn btn-danger" type="hidden" name="_method" value="delete"> <button class="btn btn-danger">Delete</button>
									</form>
								</td>

							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>

		</div>
	</div>
</body>
</html>
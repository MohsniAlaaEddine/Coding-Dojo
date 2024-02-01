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
	<div class="container d-flex flex-column gap-5">
		<table class="table border-dark">
			<thead>
				<tr>
					<th scope="col">Burger Name</th>
					<th scope="col">Restaurant Name</th>
					<th scope="col">Rating (out of 5)</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>

			<tbody>
				<c:forEach items="${allBurger}" var="oneBurger">
					<tr>
						<td>${oneBurger.burgerName}</td>
						<td>${oneBurger.restoName}</td>
						<td>${oneBurger.rating}</td>
						<td><a href="burgers/edit/${oneBurger.id}">edit</a></td>
					</tr>
				</c:forEach>

			</tbody>
		</table>

		<form:form class="" action="/processBurger" method="Post"
			modelAttribute="burger">
			<form:errors path="*" class="text-danger" />
			<p>
				<form:label path="burgerName">Burger Name: </form:label>

				<form:input class="form-control" path="burgerName" />
			</p>
			<p>
				<form:label  path="restoName">Restaurant Name: </form:label>

				<form:input class="form-control" path="restoName" />
			</p>

			<p>
				<form:label path="rating">Rating</form:label>

				<form:input class="form-control" type="number" path="rating" />
			</p>
			<p>
				<form:label path="notes">Notes</form:label>

				<form:textarea class="form-control" cols="8" rows="3" path="notes" />
			</p>

			<button class="btn btn-primary">Submit</button>
		</form:form>

	</div>
</body>
</html>
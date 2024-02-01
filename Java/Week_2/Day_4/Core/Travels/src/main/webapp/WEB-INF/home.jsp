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
	<div class="container d-flex flex-column gap-5 p-5">
	<h1 class="text-primary">Save Travels</h1>
		<table class="table border-dark">
			<thead>
				<tr>
					<th scope="col">Expense </th>
					<th scope="col">Vendor</th>
					<th scope="col">Amount</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>

			<tbody>
				<c:forEach items="${allTravel}" var="oneTravel">
					<tr>
						<td> <a href="expenses/${oneTravel.id}">${oneTravel.name}</a></td>
						<td>${oneTravel.vendor}</td>
						<td>$${oneTravel.amount}</td>
						<td class="d-flex gap-2"><a href="expenses/edit/${oneTravel.id}" class="btn btn-warning">edit</a>
							<form action="/expenses/${oneTravel.id}" method="post">
								<input type="hidden" name="_method" value="delete"> <input
									type="submit" value="Delete" class="btn btn-danger">
							</form></td>

					</tr>
				</c:forEach>

			</tbody>
		</table>
		<div>
		<h2 class="text-primary">Add an expense:</h2>
		<form:form class="mt-5" action="/expenses/processTravel" method="Post"
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

				<form:textarea class="form-control" cols="8" rows="3" path="description" />
			</p>

			<button class="btn btn-primary">Submit</button>
		</form:form>
		</div>

	</div>
</body>
</html>
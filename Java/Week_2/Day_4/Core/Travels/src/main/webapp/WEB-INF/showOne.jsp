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
<div class="container p-5 d-flex flex-column gap-5">
<div class="d-flex justify-content-between align-items-center">
<h1 class="text-primary">Expense Details</h1>
<a href="/expenses">Go back</a>
</div>
<div class="d-flex flex-column gap-3">
<p><strong>Expense Name: </strong> ${travel.name }</p>
<p><strong>Expense Description: </strong> ${travel.description }</p>
<p><strong>Vendor: </strong> ${travel.vendor }</p>
<p><strong>Amount Spent: </strong> ${travel.amount }</p>
</div>
</div>
</body>
</html>
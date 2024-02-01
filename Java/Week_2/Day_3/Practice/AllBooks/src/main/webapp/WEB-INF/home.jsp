<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="container p-5">
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Language</th>
      <th scope="col"># Pages</th>
    </tr>
  </thead>
  <tbody>
  <c:forEach items="${books}" var="oneBook">
    <tr>
      <th scope="row">${oneBook.id}</th>
      <td><a href="/books/${oneBook.id}">${oneBook.title}</a> </td>
      <td>${oneBook.language}</td>
      <td>${oneBook.numberOfPages}</td>
    </tr>
  </c:forEach>
    
  </tbody>
</table>
</div>
</body>
</html>
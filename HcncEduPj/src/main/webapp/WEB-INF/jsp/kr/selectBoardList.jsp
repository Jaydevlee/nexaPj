<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$("#btnInsertPage").on("click", function() {
			location.href="<c:url value = "insertPage.do"/>" ;
		})
	});
	
</script>
</head>
<body class="bg-light">

<div class="container mt-5 bg-white p-4 rounded shadow-sm">
    <h3 class="mb-4 fw-bold">게시판 목록</h3>
    
    <div class="table-responsive">
        <table class="table table-bordered table-hover table-striped text-center align-middle">
            <thead class="table-dark">
                <tr>
                	<th width="15%">BOARD_NO</th>
                    <th width="40%">TITLE</th>
                    <th width="15%">WRITER</th>
                    <th width="15%">REG_DT</th>
                    <th width="15%">MOD_DT</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="board" items="${list}">
                    <tr>
                    	<td><c:out value="${board.BOARD_NO }" /></td>
                        <td class="text-start">
                            <a href="selectBoardDetail.do?BOARD_NO=<c:out value='${board.BOARD_NO}' />" class="text-decoration-none fw-bold text-primary">
                                <c:out value="${board.TITLE}" />
                            </a>
                        </td>
                        <td><c:out value="${board.WRITER}" /></td>
                        <td><c:out value="${board.REG_DT}" /></td>
                        <td><c:out value="${board.MOD_DT}" /></td>
                    </tr>
                </c:forEach>
                
                <c:if test="${empty list}">
                    <tr>
                        <td colspan="4" class="text-muted py-4">등록된 데이터가 없습니다.</td>
                    </tr>
                </c:if>
            </tbody>
        </table>
    </div>
    
    <div class="d-flex justify-content-end mt-3">
        <button id="btnInsertPage" type="button" class="btn btn-primary px-4">신규등록</button>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
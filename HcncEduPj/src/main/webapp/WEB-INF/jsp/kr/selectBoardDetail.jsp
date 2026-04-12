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
		$("#btnUpdate").on("click", function() {
			location.href='<c:url value = "updatePage.do?BOARD_NO=${list[0].BOARD_NO}"/>'
		});
		
		$("#btnDelete").on("click", function() {
			var answer = confirm("삭제하시겠습니까?")
			if(answer){
				location.href='<c:url value = "deleteBoard.do?BOARD_NO=${list[0].BOARD_NO}"/>'
			}
		});
		$("#btnList").on("click", function() {
			location.href='<c:url value="/selectBoardList.do"/>';
		});
	});
</script>

</head>
<body class="bg-light">

<div class="container mt-5 bg-white p-4 rounded shadow-sm" style="max-width: 800px;">
    <h3 class="mb-4 fw-bold">게시글 상세</h3>
    
    <table class="table table-bordered align-middle">
        <tbody>
            <tr>
                <th class="table-light text-center" style="width: 25%;">TITLE</th>
                <td class="px-3"><c:out value="${list[0].TITLE}" /></td>
            </tr>
            <tr>
                <th class="table-light text-center">CONT</th>
                <td class="px-3 py-4">
                    <div style="white-space: pre-wrap; min-height: 100px;"><c:out value="${list[0].CONT}" /></div>
                </td>
            </tr>
            <tr>
                <th class="table-light text-center">WRITER</th>
                <td class="px-3"><c:out value="${list[0].WRITER}" /></td>
            </tr>
            <tr>
                <th class="table-light text-center">MODIFIER</th>
                <td class="px-3"><c:out value="${list[0].MODIFIER}" /></td>
            </tr>
            <tr>
                <th class="table-light text-center">REG_DT</th>
                <td class="px-3"><c:out value="${list[0].REG_DT}" /></td>
            </tr>
            <tr>
                <th class="table-light text-center">MOD_DT</th>
                <td class="px-3"><c:out value="${list[0].MOD_DT}" /></td>
            </tr>
        </tbody>
    </table>

    <div class="d-flex justify-content-between mt-4">
        <div>
            <button type="button" id="btnList" class="btn btn-secondary px-4">목록</button>
        </div>
        <div class="gap-2 d-flex">
            <button type="button" id="btnUpdate" class="btn btn-warning px-4 text-white">수정</button>
            <button type="button" id="btnDelete" class="btn btn-danger px-4">삭제</button>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
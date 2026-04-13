<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 작성</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
<script>
	$(document).ready(function(){
		
		const title = $("#title");
		const cont = $("#cont");
		const writer = $("#writer");
		
		const titleReg = /^[a-zA-Z0-9\s]{1,1000}$/;
		const contReg = /^[a-zA-Z0-9\s]{1,1000}$/;
		const nameReg = /^[a-zA-Z0-9\s]{1,100}$/;
		
		function titleChck(){
			if(title.val().length === 0) {
				$("#titleError").text("제목을 입력해주세요.").show();
				return false;
			}
			if(!titleReg.test(title.val().trim())) {
				$("#titleError").text("제목은 영숫자 1000자만 가능합니다.").show();
				return false;
			}
			$("#titleError").hide();
			return true;
		};
		
		function contChck(){
			if(cont.val().length === 0) {
				$("#contError").text("내용을 입력해주세요.").show();
				return false;
			}
			if(!contReg.test(cont.val().trim())) {
				$("#contError").text("내용은 영숫자 1000자만 가능합니다.").show();
				return false;
			}
			$("#contError").hide();
			return true;
		};
		
		function writerChck(){
			if(writer.val().length === 0) {
				$("#writerError").text("작성자를 입력해주세요.").show();
				return false;
			}
			if(!nameReg.test(writer.val().trim())) {
				$("#writerError").text("작성자이름은 영숫자 100자만 가능합니다.").show();
				return false;
			}
			$("#writerError").hide();
			return true;
		};

		$("#btnInsert").on("click", function() {
			if(!titleChck() || !contChck() || !writerChck())
				return;
			if(confirm("게시글을 작성하시겠습니까?")) {
				$("#insertForm").submit(); 
			}
		});
	});
</script>
</head>
<body class="bg-light">

<div class="container mt-5 bg-white p-4 rounded shadow-sm" style="max-width: 800px;">
    <h3 class="mb-4 fw-bold">게시글 신규 등록</h3>
    
    <form id="insertForm" action='<c:url value="/insertBoard.do" />' >
        <table class="table table-bordered align-middle">
            <tbody>
                <tr>
                    <th class="table-light text-center" style="width: 25%;">
                        <label for="title" class="form-label mb-0">TITLE</label>
                    </th>
                    <td class="px-3">
                        <input type="text" id="title" name="title" class="form-control" placeholder="제목을 입력하세요" />
                        <div id="titleError" class="text-danger mt-1" style="display: none; font-size: 0.875em;"></div>
                    </td>
                </tr>
                <tr>
                    <th class="table-light text-center">
                        <label for="cont" class="form-label mb-0">CONT</label>
                    </th>
                    <td class="px-3">
                        <textarea id="cont" name="cont" class="form-control" rows="5" placeholder="내용을 입력하세요"></textarea>
                        <div id="contError" class="text-danger mt-1" style="display: none; font-size: 0.875em;"></div>
                    </td>
                </tr>
                <tr>
                    <th class="table-light text-center">
                        <label for="writer" class="form-label mb-0">WRITER</label>
                    </th>
                    <td class="px-3">
                        <input type="text" id="writer" name="writer" class="form-control" placeholder="작성자를 입력하세요" />
                        <div id="writerError" class="text-danger mt-1" style="display: none; font-size: 0.875em;"></div>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="d-flex justify-content-end gap-2 mt-4">
            <button type="button" id="btnCancel" class="btn btn-secondary px-4">취소</button>
            <button type="button" id="btnInsert" class="btn btn-primary px-4">작성</button>
        </div>
    </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Parameter Test</title>
<script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
<script type="text/javascript">
	// $("tag") > tag를 가진 모든 DOM
	// $(".tag") > tag라는 클래스를 가진 DOM
	// $("#tag") > tag라는 id를 가진 DOM
		function chkValidation() {
			//console.log($("input[name=P1]").val());
			//console.log($("input[name=P2]").val());
			//console.log($("input[name=P3]").val());
			
			console.log($("#P1").val());
			console.log($("#P2").val());
			console.log($("#P3").val());
			
			console.log($("#P1").val().length);
			console.log($("#P2").val().length);
			console.log($("#P3").val().length);
			
			if($("#P1").val().length > 10) {
				alert("P1의 자릿수가 10자리보다 큽니다");
				return;
			}
			if($("#P2").val().length > 10) {
				alert("P2의 자릿수가 10자리보다 큽니다");
				return;
			}
			if($("#P3").val().length > 10) {
				alert("P3의 자릿수가 10자리보다 큽니다");
				return;
			}
			$("#form01").submit();
		}
		

</script>
</head>
<body>
<form id="form01" action="insertTestData.do" method="POST">
	p1(10자)=<input id="P1" name="TITLE" maxLength="10" /><br/>
	p2(20자)=<input id="P2" name="CONT" maxLength="20"/><br/>
	p3(30자)=<input id="P3" name="WRITER" maxLength="30"/><br/>
	<input type="button" value="제출" onclick="chkValidation()" />
</form>
<hr>
[요청파라미터값] request.getParameter("변수") = <%= request.getParameter("A") %> <br/>
[처리 후 리턴해준 값] request.getAttribute("변수") = <%= request.getAttribute("A") %>
</body>
</html>
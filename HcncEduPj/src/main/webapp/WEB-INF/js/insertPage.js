	$(document).ready(function(){
		
		const title = $("#title");
		const writer = $("#writer");
		const modifier = $("#modifer")
		
		const titleReg = /^[a-zA-Z0-9\s]{1,1000}$/;
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

		$("#insertBoard").on("click", function() {
			if(!titleChck() || !writerChck())
				return;
			if(confirm("게시글을 작성하시겠습니까?")) {
				$("#insertForm").submit(); 
			}
		});
	});
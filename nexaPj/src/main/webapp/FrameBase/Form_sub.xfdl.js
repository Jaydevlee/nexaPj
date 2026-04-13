(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_sub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoardDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"boardNo\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtTitle","69","31","380","59",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("제목");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtCont","25","122","420","170",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("내용");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWriter","26","332","202","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("작성자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtModifier","250","332","195","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("수정자");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","34","43","143","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","34","92","143","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","26","302","143","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("작성자");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","267","302","143","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("수정자");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","197","480","250","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","202","428","115","44",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","338","426","115","44",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtTitle","value","dsBoardDetail","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtCont","value","dsBoardDetail","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtWriter","value","dsBoardDetail","WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtModifier","value","dsBoardDetail","MODIFIER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_sub.xfdl", function() {

        this.Form_sub_onload = function(obj,e)
        {
        	console.log("FormSub::" + this.parent.boardNo);
        	if(this.parent.boardNo == "") {
        		this.dsBoardDetail.clearData();
        		this.dsBoardDetail.addRow();
        	} else {
        		this.transaction( "selectList"            	// 서비스ID (임의 지정 가능)
        						,"DataSrv::selectList.do" 	// 호출 URL http://localhost/nexaPj/selectList.do (TypeDefinition에서 설정)
        						,""		// 데이터를 넘길 dataset ([nexa]에서 보내는 dataset id = java에서 받는 datasetId 여러개는 ' '공백으로 구분하여 처리)
        						,"dsBoardDetail=dsList"			// 데이터를 받을 dataset (nexa에서 받는 datasetId = java에서 보내는 datasetId 여러개는 ' '공백으로 구분하여 처리))
        						,"boardNo="+this.parent.boardNo	// 파라미터로 넘길 값	(key=value 여러개는 ' '공백으로 구분하여 처리)) , <- 여러개 필요한 경우
        						,"fnCallback"
        						, true
        						);
        	}
        };


        this.btnSave_onclick = function(obj,e)
        {
        	// 입력값 검증, null과 공백만 확인
        	var title = this.edtTitle.value;
        	var cont = this.edtCont.value;
        	var writer = this.edtWriter.value;
        	var modifier = this.edtModifier.value;
        	if(title == undefined || title.trim() == "") {
        		alert("제목을 입력해주세요.");
        		this.edtTitle.setFocus();
        		return;
        	}
        	if(cont == undefined || cont.trim() == "") {
        		alert("내용을 입력해주세요.");
        		this.edtCont.setFocus();
        		return;
        	}
        	if(writer == undefined || writer.trim() == "") {
        		alert("작성자를 입력해주세요.");
        		this.edtWriter.setFocus();
        		return;
        	}

        	if(modifier == undefined || modifier.trim() == ""){
        		alert("수정자를 입력해주세요.");
        		this.edtModifier.setFocus();
        		return;
        	}
        	var serviceId = "";
        	var callUrl = "";
        	var callBackFn = "fnCallback"

        	if(this.parent.boardNo == "") {
        		serviceId = "insertBoard"
        		callUrl = "DataSrv::insertBoard.do";
        	} else {
        		serviceID = "updateBoard"
        		callUrl = "DataSrv::updateBoard.do";
        	}


        	if(confirm("저장하시겠습니까?")){
        		this.transaction( serviceId            			// 서비스ID (임의 지정 가능)
        						,callUrl 						// 호출 URL http://localhost/nexaPj/selectList.do (TypeDefinition에서 설정)
        						,"dsBoardDetail=dsBoardDetail"	// :U - 업데이트되는 부분만 보내기 :A 데이터 전체를 보내기
        						,""									// 데이터를 받을 dataset (nexa에서 받는 datasetId = java에서 보내는 datasetId 여러개는 ' '공백으로 구분하여 처리))
        						,""									// 파라미터로 넘길 값	(key=value 여러개는 ' '공백으로 구분하여 처리)) , <- 여러개 필요한 경우
        						,callBackFn
        						,true
        						);
        	}
        };

        this.btnDelete_onclick = function(obj,e)
        {

        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };


        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag) {
        	alert("fnCallback : " + strSvcID);
        	this.dsList.saveXML();
        	this.dsBoardDetail.saveXML();
        	this.close();
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_sub_onload,this);
            this.edtTitle.addEventHandler("onkillfocus",this.edtTitle_onkillfocus,this);
            this.edtCont.addEventHandler("onkillfocus",this.edtCont_onkillfocus,this);
            this.edtWriter.addEventHandler("onkillfocus",this.edtWriter_onkillfocus,this);
            this.edtModifier.addEventHandler("onkillfocus",this.edtModfier_onkillfocus,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
        };
        this.loadIncludeScript("Form_sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

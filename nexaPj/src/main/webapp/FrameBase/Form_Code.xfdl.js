(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Code");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearchCmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeNm\">전체</Col><Col id=\"code\">ALL</Col></Row><Row><Col id=\"codeNm\">코드</Col><Col id=\"code\">CODE</Col></Row><Row><Col id=\"codeNm\">코드명</Col><Col id=\"code\">CODE_NM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCmbDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeNm\">전체</Col><Col id=\"code\">ALL</Col></Row><Row><Col id=\"codeNm\">코드</Col><Col id=\"code\">CODE</Col></Row><Row><Col id=\"codeNm\">코드명</Col><Col id=\"code\">CODE_NM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCmb\" type=\"STRING\" size=\"256\"/><Column id=\"searchVal\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCmbDtl\" type=\"STRING\" size=\"256\"/><Column id=\"searchValDtl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"코드\" type=\"STRING\" size=\"256\"/><Column id=\"코드명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeListDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"코드\" type=\"STRING\" size=\"256\"/><Column id=\"코드명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","36","15","128","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("마스터코드");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSearch","25","57","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSearchCmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","165","55","185","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect","364","56","76","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","362","515","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","456","515","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","450","56","71","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","30","105","445","384",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsCodeList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"122\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:코드\"/><Cell col=\"1\" text=\"bind:코드명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCode","74","515","116","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","243","515","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","35","501","29","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("코드");
            obj.getSetter("onchanged").set("Static01_onchanged");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","200","501","40","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("코드명");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","670","15","128","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("세부코드");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSearchDtl","619","57","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsSearchCmbDtl");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchDtl","776","55","168","38",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelectDtl","956","55","74","36",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveDtl","956","515","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteDtl","1050","515","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddDtl","1044","56","71","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grdListDtl","624","105","445","384",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("dsCodeListDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"135\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:코드\"/><Cell col=\"1\" text=\"bind:코드명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCodeDtl","668","515","116","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCodeNmDtl","840","515","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","629","501","31","60",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","794","501","36","60",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("코드명");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmbSearch","value","dsSearch","searchCmb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtSearch","value","dsSearch","searchVal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cmbSearchDtl","value","dsSearchDtl","searchCmbDtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtSearchDtl","value","dsSearchDtl","searchValDtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtCode","value","dsCodeList","코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtCodeNm","value","dsCodeList","코드명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtCodeDtl","value","dsCodeListDtl","코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtCodeNmDtl","value","dsCodeListDtl","코드명");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Code.xfdl", function() {
        this.Form_Code_onload = function(obj,e)
        {
        	this.dsSearch.clearData();
            this.dsSearch.addRow();
        	this.dsSearchDtl.clearData();
        	this.dsSearchDtl.addRow();

            // (선택 사항) 행이 추가된 후, 콤보박스 초기값을 "ALL" 등으로 세팅하고 싶다면
            this.dsSearch.setColumn(0, "searchCmb", "ALL");
        	this.dsSearchDtl.setColumn(0, "searchCmbDtl", "ALL");
        };

        // 조회
        this.btnSelect_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var searchCmb = this.cmbSearch.value;
        	var searchVal = this.edtSearch.value;

        	if(searchCmb == undefined) {
        		searchCmb = "";
        	}
        	if(searchVal == undefined) {
        		searchVal = "";
        	}

        	this.transaction( "selectCodeList"            	// 서비스ID (임의 지정 가능)
        						,"DataSrv::selectCodeList.do" 	// 호출 URL http://localhost/nexaPj/selectList.do (TypeDefinition에서 설정)
        						,"dsSearch=dsSearch"		// 데이터를 넘길 dataset ([nexa]에서 보내는 dataset id = java에서 받는 datasetId 여러개는 ' '공백으로 구분하여 처리)
        						,"dsCodeList=dsCodeList"			// 데이터를 받을 dataset (nexa에서 받는 datasetId = java에서 보내는 datasetId 여러개는 ' '공백으로 구분하여 처리))
        						,"searchCmb="+searchCmb
        						+" searchVal="+searchVal	// 파라미터로 넘길 값	(key=value 여러개는 ' '공백으로 구분하여 처리)) , <- 여러개 필요한 경우
        						,"fnCallback"
        						,true
        						);

        };

        this.btnSelectDtl_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var searchCmb = this.cmbSearch.value;
        	var searchVal = this.edtSearch.value;

        	if(searchCmb == undefined) {
        		searchCmb = "";
        	}
        	if(searchVal == undefined) {
        		searchVal = "";
        	}

        	this.transaction( "selectCodeListDtl"            	// 서비스ID (임의 지정 가능)
        						,"DataSrv::selectCodeListDtl.do" 	// 호출 URL http://localhost/nexaPj/selectList.do (TypeDefinition에서 설정)
        						,"dsSearch=dsSearch"		// 데이터를 넘길 dataset ([nexa]에서 보내는 dataset id = java에서 받는 datasetId 여러개는 ' '공백으로 구분하여 처리)
        						,"dsCodeListDtl=dsCodeListDtl"			// 데이터를 받을 dataset (nexa에서 받는 datasetId = java에서 보내는 datasetId 여러개는 ' '공백으로 구분하여 처리))
        						,"searchCmb="+searchCmb
        						+" searchVal="+searchVal	// 파라미터로 넘길 값	(key=value 여러개는 ' '공백으로 구분하여 처리)) , <- 여러개 필요한 경우
        						,"fnCallback"
        						,true
        						);

        };

        // insert
        // insert할 행 추가
        this.btnAdd_onclick = function(obj,e)
        {
        	this.dsCodeList.addRow();
        };

        this.btnSave_onclick = function(obj,e)
        {
        	if(this.edtCode.value == undefined || this.edtCode.value.trim() == "") {
        		alert("코드를 입력해주세요");
        		return;
        	}

        	if(this.edtCodeNm.value  == undefined || this.edtCodeNm.trim() == "") {
        		alert("코드명을 입력해주세요");
        		return;
        	}

        	var serviceId = "";
        	var callUrl = "";
        	var callBackFn = "fnCallback"

        	if(this.edtCodeDtl.enable){
        		serviceId = "insertCode"
        		callUrl = "DataSrv::insertCode.do";
        	} else {
        		serviceId = "updateCode"
        		callUrl = "DataSrv::updateCode.do";
        	}
        	if(confirm("저장하시겠습니까?")){
        		this.transaction(serviceId
        						,callUrl
        						,"dsCodeList=dsCodeList:U"
        						,""
        						,""
        						,callBackFn
        						,true
        						);
        	}
        };


        // 콜백함수
        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag) {
        	if(strSvcID == "selectCodeList" || strSvcID == "selectCodeListDtl"){
        		alert("callback" + strSvcID);
        		console.log(this.dsList.saveXML());
        	} else if(strSvcID == "insertCode") {
        		alert("callback"+ strSvcID);
        	} else if(strSvcID == "updateCode") {
        		alert("callback"+ strSvcID);
        	}
        };


        // grid에서 코드 클릭 이벤트
        this.dsCodeList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;

        	var nRowType = obj.getRowType(e.newrow);

        	if(nRowType == obj.ROWTYPE_INSERT){
        		this.edtCode.enable = true;
        	} else {
        		this.edtCode.enable = false;
        	}
        	this.edtCodeNm.enable = true;
        };

        this.dsCodeListDtl_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;

        	var nRowType = obj.getRowType(e.newrow);

        	if(nRowType == obj.ROWTYPE_INSERT){
        		this.edtCodeDtl.enable = true;
        	} else {
        		this.edtCodeDtl.enable = false;
        	}
        	this.edtCodeNmDtl.enable = true;
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Code_onload,this);
            this.btnSelect.addEventHandler("onclick",this.btnSelect_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnSelectDtl.addEventHandler("onclick",this.btnSelectDtl_onclick,this);
            this.dsCodeList.addEventHandler("onrowposchanged",this.dsCodeList_onrowposchanged,this);
            this.dsCodeListDtl.addEventHandler("onrowposchanged",this.dsCodeListDtl_onrowposchanged,this);
        };
        this.loadIncludeScript("Form_Code.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

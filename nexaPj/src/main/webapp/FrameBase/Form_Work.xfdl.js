(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeNm\">전체</Col><Col id=\"code\">ALL</Col></Row><Row><Col id=\"codeNm\">타이틀</Col><Col id=\"code\">TITLE</Col></Row><Row><Col id=\"codeNm\">내용</Col><Col id=\"code\">CONT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BOARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCmb\" type=\"STRING\" size=\"256\"/><Column id=\"searchVal\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmbSearch","44","47","136","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsSearchCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","190","50","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","470","50","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btnInsert","415","427","155","53",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","224","427","166","53",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("게시글삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","50","108","520","300",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"79\"/><Column size=\"86\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"BOARD_NO\"/><Cell col=\"2\" text=\"TITLE\"/><Cell col=\"3\" text=\"CONT\"/><Cell col=\"4\" text=\"WRITER\"/><Cell col=\"5\" text=\"MODIFIER\"/><Cell col=\"6\" text=\"REG_DT\"/><Cell col=\"7\" text=\"MOD_DT\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"bind:BOARD_NO\"/><Cell col=\"2\" text=\"bind:TITLE\"/><Cell col=\"3\" text=\"bind:CONT\"/><Cell col=\"4\" text=\"bind:WRITER\"/><Cell col=\"5\" text=\"bind:MODIFIER\"/><Cell col=\"6\" text=\"bind:REG_DT\"/><Cell col=\"7\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtSearch","value","dsSearch","searchVal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmbSearch","value","dsSearch","searchCmb");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        // 검색하는 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	//combobox있는 code 값
        	//edit에 있는 검색 값
        	//데이터를 넘길 때는 parameter 혹은 dataset을 만들어서  colum을 지정한 후에 넘길 수 있다.
        	var objApp = nexacro.getApplication() ;
        	var searchCmb = this.cmbSearch.value;
        	var searchVal = this.edtSearch.value;
        	if(searchCmb == undefined) {
        		searchCmb == "";
        	}
        	if(searchVal == undefined) {
        		searchVal == "";
        	}

        	//this.dsSearch.setColumn(0, "searchCmb", searchCmb); // datset에 값 부여(행, 칼럼id, 값)
        	//this.dsSearch.setColumn(0, "searchVal", searchVal); // datset에 값 부여(행, 칼럼id, 값)

        	this.transaction( "selectList"            	// 서비스ID (임의 지정 가능)
        						,"DataSrv::selectList.do" 	// 호출 URL http://localhost/nexaPj/selectList.do (TypeDefinition에서 설정)
        						,"dsSearch=dsSearch"		// 데이터를 넘길 dataset ([nexa]에서 보내는 dataset id = java에서 받는 datasetId 여러개는 ' '공백으로 구분하여 처리)
        						,"dsList=dsList"			// 데이터를 받을 dataset (nexa에서 받는 datasetId = java에서 보내는 datasetId 여러개는 ' '공백으로 구분하여 처리))
        						,"searchCmb="+searchCmb
        						+" searchVal="+searchVal	// 파라미터로 넘길 값	(key=value 여러개는 ' '공백으로 구분하여 처리)) , <- 여러개 필요한 경우
        						,"fnCallback"
        						);

        };

        // 등록화면으로 이동 이벤트
        this.btnInsert_onclick = function(obj,e)
        {
        	//this.go("FrameBase/Form_sub.xfdl"); // 특정 화면으로 이동
        	var objParam  = {"boardNo":""
        					}
        	this.showPopup(objParam);

        };


        // 선택한 게시글을 삭제하는 이벤트
        this.btnDelete_onclick = function(obj,e)
        {

        };

        // 콜백 함수
        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag) {
        	alert("callback" + strSvcID);
        	console.log(this.dsList.saveXML());
        }

        // 폼(화면)이 로드될 시 동작하는 이벤트
        this.Form_Work_onload = function(obj,e)
        {
        	this.dsSearch.clearData(); // dataSet의 데이터만 지우는 메소드(칼럼 유지)
        	this.dsSearch.addRow();	// dataSet에 행을 추가하는 메소드, 행 위치를 return해줌
        };


        this.cmbSearch_onkillfocus = function(obj,e)
        {
        	console.log(this.dsSearch.saveXML());
        };

        this.edtSearch_onkillfocus = function(obj,e)
        {
        	console.log(this.dsSearch.saveXML());
        };

        this.showPopup = function(objParam){
        	popup = new nexacro.ChildFrame;
        	popup.init("popupwork", 0, 0, 800, 700, null, null, "FrameBase::Form_sub.xfdl");
        	popup.set_dragmovetype('all');
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("Popup Title");
        	popup.set_showstatusbar(false)
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fnPopupCallback", true);
        	}
        this.grdList_oncelldblclick = function(obj,e)
        {
        	var objParam = {"boardNo" : this.dsList.getColumn(this.dsList.rowposition, "BOARD_NO")};
        	this.showPopup(objParam);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.cmbSearch.addEventHandler("onkillfocus",this.cmbSearch_onkillfocus,this);
            this.edtSearch.addEventHandler("onchanged",this.edtSearch_onchanged,this);
            this.edtSearch.addEventHandler("onkillfocus",this.edtSearch_onkillfocus,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnInsert.addEventHandler("onclick",this.btnInsert_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

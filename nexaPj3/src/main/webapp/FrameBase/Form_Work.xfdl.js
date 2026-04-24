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
            obj = new Dataset("dsLoanList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOAN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"LOAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col><Col id=\"codeNm\">전체</Col></Row><Row><Col id=\"code\">NAME</Col><Col id=\"codeNm\">이름</Col></Row><Row><Col id=\"code\">TITLE</Col><Col id=\"codeNm\">제목</Col></Row><Row><Col id=\"code\">STATUS</Col><Col id=\"codeNm\">상태</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCmb\" type=\"STRING\" size=\"256\"/><Column id=\"searchVal\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsertLoan", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsertMem", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"birthDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmbSearch","295","53","174","47",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsSearchCmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","495","50","529","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","1035","53","141","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoan","755","533","115","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("대출");
            this.addChild(obj.name, obj);

            obj = new Button("btnReturn","885","533","115","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("반납");
            this.addChild(obj.name, obj);

            obj = new Button("btnListBook","1034","182","141","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("도서목록");
            this.addChild(obj.name, obj);

            obj = new Grid("grdLoanList","295","123","729","394",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsLoanList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"59\"/><Column size=\"63\"/><Column size=\"80\"/><Column size=\"149\"/><Column size=\"121\"/><Column size=\"125\"/><Column size=\"73\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"대출번호\"/><Cell col=\"2\" text=\"회원번호\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"제목\"/><Cell col=\"5\" text=\"대출일자\"/><Cell col=\"6\" text=\"반납일자\"/><Cell col=\"7\" text=\"상태\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:LOAN_ID\"/><Cell col=\"2\" text=\"bind:MEMBER_ID\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:TITLE\"/><Cell col=\"5\" text=\"bind:LOAN_DATE\"/><Cell col=\"6\" text=\"bind:RETURN_DATE\"/><Cell col=\"7\" text=\"bind:STATUS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnListMem","1034","123","141","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("회원목록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmbSearch","value","dsSearch","searchCmb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtSearch","value","dsSearch","searchVal");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Form_Work_onload = function(obj,e)
        {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	this.dsSearch.setColumn(0, "searchCmb", "ALL");
        	this.dsSearch.setColumn(0, "searchVal", "");
        	this.btnSearch_onclick();
        };

        // 대출화면으로 이동
        this.btnLoan_onclick = function(obj,e)
        {
        	var objParam  = {"LOAN_ID":""}
        	this.fnShowPopup(objParam);
        };

        // 대출 셀 더블클릭
        this.grdLoanList_oncelldblclick = function(obj,e)
        {
        	var objParam = {"LOAN_ID": this.dsLoanList.getColumn(this.dsLoanList.rowposition, "LOAN_ID")};
        	this.fnShowPopup(objParam);
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	var searchCmb = this.cmbSearch.value;
        	var searchVal = this.edtSearch.value;
        	if(searchCmb == undefined){
        		searchCmb = "";
        	}
        	if(searchVal == undefined){
        		searchVal = "";
        	}
        	this.fnSearch();
        };

        this.btnListMem_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_ListMem.xfdl");
        };

        this.btnListBook_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_Book.xfdl");
        };


        this.fnSearch = function()
        {
        		this.transaction("searchLoans"
        						,"DataSrv::selectLoans.do"
        						,"dsSearch=dsSearch"
        						,"dsLoanList=dsLoanList"
        						, ""
        						,"fnCallBack"
        						,true)
        }

        this.fnUpdateStatus = function()
        {
        		this.transaction("updateStatus"
        						,"DataSrv::updateStatus.do"
        						,"dsLoan=dsLoan"
        						,""
        						,""
        						,"fnCallBack"
        						,true)
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	alert("rowcount: " + this.dsLoanList.getRowCount());
        	if(nErrorCode < 0){  // 에러일 때
                alert("오류: " + strErrorMag);
                return;
            }
        	if(strSvcID="insertLoan"){
        		alert(strErrorMag);
        		return;
        	}
        }

        this.fnShowPopup = function(objParam)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popup", 0, 0, 800, 700, null, null, "FrameBase::Form_Loan.xfdl");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fnPopupCallback", true);
        }

        this.fnShowSignup = function(objParam)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("signUpPopup", 0, 0, 800, 700, null, null, "FrameBase::Form_SignUp.xfdl");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fnPopupCallback", true);
        }









        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnLoan.addEventHandler("onclick",this.btnLoan_onclick,this);
            this.btnListBook.addEventHandler("onclick",this.btnListBook_onclick,this);
            this.grdLoanList.addEventHandler("oncelldblclick",this.grdLoanList_oncelldblclick,this);
            this.btnListMem.addEventHandler("onclick",this.btnListMem_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

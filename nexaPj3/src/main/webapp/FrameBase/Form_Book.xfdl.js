(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Book");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListBooks", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOK_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHOR\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLISHER\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"GENRE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lblListBook","590","40","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서목록");
            obj.set_font("normal 20pt/0 \"Arial\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdListBook","250","136","800","428",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsListBooks");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"58\"/><Column size=\"163\"/><Column size=\"110\"/><Column size=\"93\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"108\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"책번호\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"저자\"/><Cell col=\"4\" text=\"출판사\"/><Cell col=\"5\" text=\"출판일자\"/><Cell col=\"6\" text=\"장르\"/><Cell col=\"7\" text=\"가격\"/><Cell col=\"8\" text=\"재고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:BOOK_ID\"/><Cell col=\"2\" text=\"bind:TITLE\"/><Cell col=\"3\" text=\"bind:AUTHOR\"/><Cell col=\"4\" text=\"bind:PUBLISHER\"/><Cell col=\"5\" text=\"bind:PUB_YEAR\"/><Cell col=\"6\" text=\"bind:GENRE\"/><Cell col=\"7\" text=\"bind:PRICE\"/><Cell col=\"8\" text=\"bind:STOCK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnBack","250","82","112","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("뒤로가기");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnStock","938","82","112","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("입고");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Book.xfdl", function() {

        this.Form_Book_onload = function(obj,e)
        {
        		this.fnSelectListBook();
        };


        this.fnSelectListBook = function()
        {
        	this.transaction("selectBooks",
        					 "DataSrv::selectBooks.do",
        					 "",
        					 "dsListBooks=dsListBooks",
        					 "",
        					 "fnCallback",
        					 true
        					)
        }

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(strSvcID = "selectBooks")
        	{
        		alert(strErrorMag);
        	}
        }


        this.btnBack_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_Work.xfdl");
        };

        this.btnStock_onclick = function(obj,e)
        {
        	var objParam = {"BOOK_ID":""};
        	this.fnShowPopup(objParam);

        };

        this.fnShowPopup = function(objParam)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("signUpPopup", 0, 0, 800, 700, null, null, "FrameBase::Form_InsertBook.xfdl");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fnPopupCallback", true);
        }
        this.grdListBook_oncelldblclick = function(obj,e)
        {
        	var objParam = {"BOOK_ID": this.dsListBooks.getColumn(this.dsListBooks.rowposition, "BOOK_ID")};
        	this.fnShowPopup(objParam);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Book_onload,this);
            this.grdListBook.addEventHandler("oncelldblclick",this.grdListBook_oncelldblclick,this);
            this.btnBack.addEventHandler("onclick",this.btnBack_onclick,this);
            this.btnStock.addEventHandler("onclick",this.btnStock_onclick,this);
        };
        this.loadIncludeScript("Form_Book.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

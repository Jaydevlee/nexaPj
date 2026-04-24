(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ListMem");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListMem", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDATE\" type=\"DATE\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lblTitle","660","30","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회원목록");
            obj.set_font("normal 20pt/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdListMem","330","138","780","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsListMem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"66\"/><Column size=\"119\"/><Column size=\"194\"/><Column size=\"118\"/><Column size=\"147\"/><Column size=\"94\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"회원번호\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"전화번호\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"회원등급\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:MEMBER_ID\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:EMAIL\"/><Cell col=\"4\" text=\"bind:PHONE\"/><Cell col=\"5\" text=\"bind:BIRTHDATE\"/><Cell col=\"6\" text=\"bind:GRADE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnBack","330","83","112","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("뒤로가기");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnSignUp","998","83","112","37",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("회원가입");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ListMem.xfdl", function() {

        this.Form_ListMem_onload = function(obj,e)
        {
        	this.fnSelectMember();
        };

        this.btnBack_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_Work.xfdl");
        };

        this.btnSignUp_onclick = function(obj,e)
        {
        	var objParam = {"member_id":""};
        	this.fnShowPopup(objParam);
        };


        this.fnSelectMember = function()
        {
        	this.transaction("selectListMem"
        					,"DataSrv::selectMembers.do"
        					,""
        					,"dsListMem = dsListMem"
        					,""
        					,"fnCallback"
        					, true
        					);
        }

        this.fnCallback = function(strSvcID, nErrorCode, StrErrorMag)
        {
        	if(strSvcID = "selectListMem")
        	{
        		alert(StrErrorMag);
        	}
        }


        this.fnShowPopup = function(objParam)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("signUpPopup", 0, 0, 800, 700, null, null, "FrameBase::Form_SignUp.xfdl");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fnPopupCallback", true);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ListMem_onload,this);
            this.btnBack.addEventHandler("onclick",this.btnBack_onclick,this);
            this.btnSignUp.addEventHandler("onclick",this.btnSignUp_onclick,this);
        };
        this.loadIncludeScript("Form_ListMem.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_SignUp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMember", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lblEmail","70","130","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Static("lblName","70","46","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("lblBirth","70","230","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("생년월일");
            this.addChild(obj.name, obj);

            obj = new Static("lblPhone","70","320","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전화번호(선택)");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","200","53","221","47",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","200","137","221","47",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBirth","200","230","221","47",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPhone","200","327","221","47",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSignup","187","416","244","45",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("가입하기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",530,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtName","value","dsMember","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtEmail","value","dsMember","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtBirth","value","dsMember","BIRTHDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtPhone","value","dsMember","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_SignUp.xfdl", function() {

        this.btnSignup_onclick = function(obj,e)
        {
        		this.fnSignUp();
        };



        this.fnSignUp = function()
        {
        	this.transaction("insertMember"
        					,"DataSrv::insertMember.do"
        					,"dsMember=dsMember"
        					,""
        					,""
        					,"fnCallback"
        					,true
        					)
        }


        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(strSvcID == "insertMember") alert(strErrorMag);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSignup.addEventHandler("onclick",this.btnSignup_onclick,this);
        };
        this.loadIncludeScript("Form_SignUp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

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

        this.Form_SignUp_onload = function(obj,e)
        {
        		this.dsMember.clearData();
        		this.dsMember.addRow();
        };


        this.btnSignup_onclick = function(obj,e)
        {
        		var name = this.edtName.value.trim();
        		var email = this.edtEmail.value.trim();
        		var birthDate = this.edtBirth.value.trim();
        		var phone = this.edtPhone.value.trim();

        		var regResult = this.fnRegMember(name, email, birthDate);
        		if(regResult) this.fnSignUp();
        		else alert("입력내용을 확인해주세요");
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


        this.fnRegMember = function(name, email, birthDate, phone)
        {
        		var nameReg = /^[가-힣]{2,5}$/;
        		var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        		var birthReg = /^(19|20)\d{2}-(0[1-9]|1[0-2])-([0-2][1-9]|3[01])$/;
        		var phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;


        		if(name == "" || name == undefined) {
        			alert("이름을 입력해주세요");
        			this.edtName.setFocus(true);
        			return;
        		} else if(!nameReg.test(name)) {
        			alert("이름은 한글만 입력가능합니다");
        			this.edtName.setFocus(true);
        			return;
        		}

        		if(email == "" || email == undefined) {
        			alert("email을 입력해주세요");
        			this.edtEmail.setFocus(true);
        			return;
        		} else if(!emailReg.test(email)) {
        			alert("email양식이 올바르지 않습니다.");
        			this.edtEmail.setFocus(true);
        			return;
        		}

        		if(birthDate == "" || birthDate == undefined) {
        			alert("생년월일을 입력해주세요");
        			this.edtBirth.setFocus(true);
        			return;
        		} else if (!birthReg.test(birthDate)) {
        			alert("생년월일은 (yyyy-mm-dd)로 입력해주세요.");
        			this.edtBirth.setFocus(true);
        			return;
        		}
         		if(phone != "" || phone != undefined) {
         			if(phoneReg.test(phone)){
        				alert("전화번호는 000-0000-0000으로 입력해주세요");
        				this.edtphone.setFocus(true);
        				return;
        			}
        		}
        		return true;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_SignUp_onload,this);
            this.btnSignup.addEventHandler("onclick",this.btnSignup_onclick,this);
        };
        this.loadIncludeScript("Form_SignUp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

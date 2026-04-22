(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Loan");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListName", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListBook", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOK_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLoan", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOAN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnLoan","143","413","114","47",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대출");
            this.addChild(obj.name, obj);

            obj = new Button("btnReturn","285","413","118","47",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("반납");
            this.addChild(obj.name, obj);

            obj = new Static("lblName","62","75","56","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("lblBook","62","251","56","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("도서");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","132","70","288","47",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBook","132","246","288","47",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new ListBox("listName","132","117","288","100",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_innerdataset("dsListName");
            obj.set_codecolumn("MEMBER_ID");
            obj.set_datacolumn("DISPLAYNAME");
            this.addChild(obj.name, obj);

            obj = new ListBox("listBook","132","293","288","97",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsListBook");
            obj.set_codecolumn("BOOK_ID");
            obj.set_datacolumn("TITLE");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",530,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Loan.xfdl", function() {


        this.Form_Loan_onload = function(obj,e)
        {
        	if(this.parent.LOAN_ID =="")
        	{
        		this.fnListBoxName();
        		this.fnListBoxBook();
        		this.dsLoan.clearData();
        		this.dsLoan.addRow();
        	} else
        	{
        		console.log("FormLoan::" + this.parent.LOAN_ID);
        		this.edtName.readonly = true;
        		this.edtBook.readonly = true;
        		this.fnSelectLoan();
        	}
        };

        this.btnLoan_onclick = function(obj,e)
        {
        		if(this.listName.value == "" || this.listName.value == null) {
                alert("회원을 선택해주세요.");
                return;
        		}
        		if(this.listBook.value == "" || this.listBook.value == null) {
        			alert("도서를 선택해주세요.");
        			return;
        		}
        		this.dsLoan.clearData();
        		this.dsLoan.addRow();

        		this.dsLoan.setColumn(0, "MEMBER_ID", this.listName.value);
        		this.dsLoan.setColumn(0, "BOOK_ID", this.listBook.value);
        		this.fnInsertLoan();
        };



        this.fnListBoxName = function()
        {
        	this.transaction("selectName"
        					,"DataSrv::selectName.do"
        					,""
        					,"dsListName=dsListName"
        					,""
        					,"fnCallback"
        					,true
        					)
        }

        this.fnListBoxBook = function()
        {
        	this.transaction("selectBook"
        					,"DataSrv::selectBook.do"
        					,""
        					,"dsListBook=dsListBook"
        					,""
        					,"fnCallback"
        					,true
        					)
        }

        this.fnInsertLoan = function()
        {
        	this.transaction("insertLoan"
        					,"DataSrv::insertLoan.do"
        					,"dsLoan=dsLoan"
        					,""
        					,""
        					,"fnCallback"
        					,true
        					)
        }

        this.fnSelectLoan = function ()
        {
        	this.transaction("selectLoan"
        					,"DataSrv::selectLoans.do"
        					,""
        					,"dsLoan=dsLoanList"
        					,"LOAN_ID="+ this.parent.LOAN_ID
        					,"fnCallback"
        					,true
        				)
        }

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode < 0) {
        		alert(strErrorMag);
        	}
        	if(strSvcID == "selectName"){
        		this.dsListName.addColumn("DISPLAYNAME", "STRING", 256);

         		for(var i = 0; i < this.dsListName.rowcount; i++){
        			var name = this.dsListName.getColumn(i, "NAME");
        			var bday = this.dsListName.getColumn(i, "BIRTHDATE");

         			this.dsListName.setColumn(i, "DISPLAYNAME", name + "(" + bday + ")" );
         		}
        		alert(this.dsListName.getColumn(0, "DISPLAYNAME"));
        	}
        	if(strSvcID == "selectBook"){
        		alert(this.dsListBook.rowcount);
        	}
        	if(strSvcID == "insertLoan"){
        		alert(strErrorMag);
        	}
        	if(strSvcID == "selectLoan")
        	{
        		alert(strErrorMag);
        		this.edtName.value = this.dsLoan.getColumn(0, "NAME");
        		this.edtBook.value = this.dsLoan.getColumn(0, "TITLE");
        	}
        }


        this.edtName_oninput = function(obj,e)
        {
        	var edtNameLen = this.edtName.value.length;

        	if(edtNameLen > 0){
        		this.listName.set_visible(true);
        		this.dsListName.filter("");
        		this.dsListName.filter("NAME.toString().search('"+this.edtName.value+"') >= 0")
        		if(this.dsListName.rowcount == 0){
        			this.listName.set_visible(false);
        		}
        	} else {
        		this.dsListName.filter("");
        		this.listName.set_visible(false);
        	}
        };



        this.edtName_onkeydown = function(obj,e)
        {
        	this.listName.set_visible(true);

        	switch(e.keycode){
        		case 13: //Enter
        			if(this.listName.index != -1) {
        				this.edtName.set_value(this.listName.text);
        			}
        			this.listName.set_visible(false);
        			break;
        		case 27: //ESC
        			this.listName.set_visible(false);
        			break;
        		case 38:
        			if(this.listName.index > 0) {
        				this.listName.set_index(this.listName.index -1);
        			}
        			break;
        		case 40:
        			this.listName.set_index(this.listName.index +1);
        			 break;
                default:
                    trace("keycode = " + e.keycode);
        	}
        };

        this.listName_onitemclick = function(obj,e)
        {
        	this.edtName.set_value(obj.text);
        	this.listName.set_visible(false);
        };



        this.edtBook_oninput = function(obj,e)
        {
        	var edtBookLen = this.edtBook.value.length;

        	if(edtBookLen > 0){
        		this.listBook.set_visible(true);
        		this.dsListBook.filter("");
        		this.dsListBook.filter("TITLE.toString().search('"+this.edtBook.value+"') >= 0")
        		if(this.dsListBook.rowcount == 0){
        			this.listBook.set_visible(false);
        		}
        	} else {
        		this.dsListBook.filter("");
        		this.listBook.set_visible(false);
        	}
        };



        this.edtBook_onkeydown = function(obj,e)
        {
        	this.listBook.set_visible(true);

        	switch(e.keycode){
        		case 13: //Enter
        			if(this.listBook.index != -1) {
        				this.edtBook.set_value(this.listBook.text);
        			}
        			this.listBook.set_visible(false);
        			break;
        		case 27: //ESC
        			this.listBook.set_visible(false);
        			break;
        		case 38:
        			if(this.listBook.index > 0) {
        				this.listBook.set_index(this.listBook.index -1);
        			}
        			break;
        		case 40:
        			this.listBook.set_index(this.listBook.index +1);
        			 break;
                default:
                    trace("keycode = " + e.keycode);
        	}
        };

        this.listBook_onitemclick = function(obj,e)
        {
        	this.edtBook.set_value(obj.text);
        	this.listBook.set_visible(false);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Loan_onload,this);
            this.btnLoan.addEventHandler("onclick",this.btnLoan_onclick,this);
            this.edtName.addEventHandler("oninput",this.edtName_oninput,this);
            this.edtName.addEventHandler("onkeydown",this.edtName_onkeydown,this);
            this.edtBook.addEventHandler("oninput",this.edtBook_oninput,this);
            this.edtBook.addEventHandler("onkeydown",this.edtBook_onkeydown,this);
            this.listName.addEventHandler("onitemclick",this.listName_onitemclick,this);
            this.listBook.addEventHandler("onitemclick",this.listBook_onitemclick,this);
        };
        this.loadIncludeScript("Form_Loan.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

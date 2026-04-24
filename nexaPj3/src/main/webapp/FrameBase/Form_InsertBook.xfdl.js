(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_InsertBook");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(710,410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInsertBook", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHOR\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLISHER\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"GENRE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lblInsertBook","310","27","121","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서입고");
            obj.set_font("normal 20pt/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("lblTitle","70","110","46","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTitle","140","105","196","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("lblAuthor","70","180","46","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAuthor","140","170","196","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("lblPub","70","235","46","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출판사");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPublisher","140","226","196","41",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("lblPubYear","67","290","46","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("출판일자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPubYear","140","285","196","41",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("lblGenre","374","110","46","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("장르");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGenre","440","105","196","41",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("lblPrice","374","170","46","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("가격");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPrice","440","165","196","41",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("lblStock","374","240","46","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("재고");
            this.addChild(obj.name, obj);

            obj = new Edit("edtStock","440","235","196","41",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","439","334","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","560","333","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",710,410,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtTitle","value","dsInsertBook","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtAuthor","value","dsInsertBook","AUTHOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtPublisher","value","dsInsertBook","PUBLISHER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtPubYear","value","dsInsertBook","PUB_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtGenre","value","dsInsertBook","GENRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtPrice","value","dsInsertBook","PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtStock","value","dsInsertBook","STOCK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_InsertBook.xfdl", function() {

        this.Form_InsertBook_onload = function(obj,e)
        {
        	if(this.parent.BOOK_ID =="")
        	{
        		this.dsInsertBook.clearData();
        		this.dsInsertBook.addRow();
        	} else
        	{
        		console.log("FormInsert::" + this.parent.Book_ID);

        	}
        };

        this.btnSave_onclick = function(obj,e)
        {
        	var regs = {
        		 title : this.edtTitle.value,
        		 author : this.edtAuthor.value,
        		 publisher : this.edtPublisher.value,
        		 pubYear : this.edtPubYear.value,
        		 genre : this.edtGenre.value,
        		 price : this.edtPrice.value,
        		 stock : this.edtStock.value
        	};
        	var result = this.fnRegBook(regs);
        	if(result) this.fnInsertBook();
        	else alert("입고처리 되지 않았습니다");
        };


        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.fnInsertBook = function()
        {
        	this.transaction("insertBook"
        					,"DataSrv::insertBook.do"
        					,"dsInsertBook=dsInsertBook"
        					,""
        					,""
        					,"fnCallback"
        					,true
        					);
        }

        this.fnRegBook = function(regs)
        {
        	if(regs.title == null || regs.title == "")
        	{
        		alert("제목을 입력해주세요");
        		this.edtTitle.setFocus();
        		return false;
        	}
        	if(regs.author == null || regs.author == "")
        	{
        		alert("저자를 입력해주세요");
        		this.edtAuthor.setFocus();
        		return false;
        	}
        	if(regs.publisher == null || regs.publisher == "")
        	{
        		alert("출판사를 입력해주세요");
        		this.edtPublisher.setFocus();
        		return false;
        	}

        	if(regs.pubYear == null || regs.pubYear == "")
        	{
        		alert("출판년도를 입력해주세요");
        		this.edtPubYear.setFocus();
        		return false;
        	}
        	if(regs.pubYear < 0)
        	{
        		alert("출판년도는 0이상의 숫자만 입력할 수 있습니다.");
        		this.edtPubYear.setFocus();
        		return false;
        	}
        	if(regs.genre == null || regs.genre == "")
        	{
        		alert("장르를 입력해주세요");
        		this.edtGenre.setFocus();
        		return false;
        	}
        /*	if(regs.genre !=
        */	if(regs.price == null || regs.price == "")
        	{
        		alert("가격을 입력해주세요");
        		this.edtPrice.setFocus();
        		return false;
        	}
        	if(regs.price < 0) {
        		alert("가격은 0이상의 숫자로 입력해주세요");
        		this.edtPrice.setFocus();
        		return false;
        	}
        	if(regs.stock == null || regs.stock == "")
        	{
        		alert("재고를 입력해주세요");
        		this.edtStock.setFocus();
        		return false;
        	}
        	if(regs.stock < 0)
        	{
        		alert("재고를 입력해주세요");
        		this.edtStock.setFocus();
        		return false;
        	}
        	return true;
        }

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(strSvcID == "insertBook")
        	{
        		alert(strErrorMag);
        		this.close();
        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_InsertBook_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("Form_InsertBook.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col><Col id=\"codeNm\">전체</Col></Row><Row><Col id=\"code\">TITLE</Col><Col id=\"codeNm\">제목</Col></Row><Row><Col id=\"code\">WRITER</Col><Col id=\"codeNm\">작성자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmbSearch","34","40","126","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsSearchCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","165","40","295","57",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","471","40","189","57",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btnInsert","266","440","189","57",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","465","442","190","57",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("dsGrid","36","112","625","315",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"79\"/><Column size=\"84\"/><Column size=\"88\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"BOARD_NO\"/><Cell col=\"2\" text=\"CONT\"/><Cell col=\"3\" text=\"TITLE\"/><Cell col=\"4\" text=\"WRITER\"/><Cell col=\"5\" text=\"MODIFIER\"/><Cell col=\"6\" text=\"REG_DT\"/><Cell col=\"7\" text=\"MOD_DT\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"bind:BOARD_NO\"/><Cell col=\"2\" text=\"bind:CONT\"/><Cell col=\"3\" text=\"bind:TITLE\"/><Cell col=\"4\" text=\"bind:WRITER\"/><Cell col=\"5\" text=\"bind:MODIFIER\"/><Cell col=\"6\" text=\"bind:REG_DT\"/><Cell col=\"7\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {


        this.btnSearch_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var searchCmb = this.cmbSearch.value;
        	var searchVal = this.edtSearch.value;
        	this.transaction( "selectList"
        						,"DataSrv::selectList.do"
        						,""
        						,"dsList = dsList"
        						,"searchCmb="+searchCmb
        						+" searchVal="+searchVal
        						,"fnCallback"
        						);

        };

        this.btnInsert_onclick = function(obj,e)
        {

        };

        this.btnDelete_onclick = function(obj,e)
        {

        };

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag) {
        	alert("callback" + strSvcID);
        	console.log(this.dsList.saveXML());
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.cmbSearch.addEventHandler("onitemchanged",this.cmbSearch_onitemchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnInsert.addEventHandler("onclick",this.btnInsert_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

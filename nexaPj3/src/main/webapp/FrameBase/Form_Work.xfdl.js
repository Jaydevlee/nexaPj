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
            obj = new Dataset("dsLoan", this);
            obj._setContents("<ColumnInfo><Column id=\"loanId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"loanDate\" type=\"STRING\" size=\"256\"/><Column id=\"returnDate\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col></Row><Row><Col id=\"code\">NAME</Col></Row><Row><Col id=\"code\">TITLE</Col></Row><Row><Col id=\"code\">STATUS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCmb\" type=\"STRING\" size=\"256\"/><Column id=\"searchVal\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmdSearch","295","53","174","47",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsSearchCmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","495","50","505","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","1035","53","141","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btnInStock","755","533","115","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("대출");
            this.addChild(obj.name, obj);

            obj = new Button("btnReturn","885","533","115","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("반납");
            this.addChild(obj.name, obj);

            obj = new Button("btnSignup","1035","127","141","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("회원가입");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoan","1034","182","141","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("입고");
            this.addChild(obj.name, obj);

            obj = new Grid("grdLoans","288","134","712","386",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsLoan");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"대출번호\"/><Cell col=\"2\" text=\"회원번호\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"제목\"/><Cell col=\"5\" text=\"대출일자\"/><Cell col=\"6\" text=\"반납일자\"/><Cell col=\"7\" text=\"상태\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:loanId\"/><Cell col=\"2\" text=\"bind:memberId\"/><Cell col=\"3\" text=\"bind:name\"/><Cell col=\"4\" text=\"bind:title\"/><Cell col=\"5\" text=\"bind:loanDate\"/><Cell col=\"6\" text=\"bind:returnDate\"/><Cell col=\"7\" text=\"bind:status\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmdSearch","value","dsSearch","searchCmb");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var configLoader  = require("$UI/myHome/config");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.loadConfig = function(){
	
		var data = this.comp("confData");
		
		var self = this
		
		configLoader.read(function(conf){
			
			data.loadData(conf);
			
			data.first();	
			
			self.LoadWeb();
	
		});
	};
	
	Model.prototype.LoadWeb = function(){
	

		var data = this.comp("confData").getCurrentRow().toJson();
		
		var url = "http://";
		
		if (data.fName.value != '' && data.fPassword.value != ''){
		
			url = url + data.fName.value + ":" + data.fPassword.value + "@";
		
		}
		
		url = url + data.fInnerIP.value;
		
		url = url + "/cgi-bin/scada-vis/touch.html";
		
		this.getElementByXid('WebSite').src	= url;
	};
	
	Model.prototype.btnHomeClick = function(event){

	};

	Model.prototype.btnSettingClick = function(event){
		// 调用对话框
		this.comp("setDialog").open();
	};

	Model.prototype.setDialogReceived = function(event){
	
			

	};

	Model.prototype.confDataDataChange = function(event){
	
	
		this.LoadWeb();	
		
	};

	Model.prototype.confDataValueChanged = function(event){
		
		//debugger;

	};

	Model.prototype.modelActive = function(event){
	
		//debugger;
	
		this.loadConfig();
		
		this.LoadWeb();

	};

	Model.prototype.modelLoad = function(event){

		this.loadConfig();
		
		//
	};

	return Model;
});
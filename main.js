define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var configLoader  = require("$UI/myHome/config");
	
	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-http");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.loadConfig = function(){
	
		var data = this.comp("confData");
		
		var self = this;
		
		configLoader.read(function(conf){
			
			data.loadData(conf);
			
			data.first();	
			
			self.LoadWeb();
	
		});
	};
	
	Model.prototype.loadWebContent = function(url, timeout){
	
	};
	
	Model.prototype.LoadWeb = function(){
	
		var webFrame = this.getElementByXid('WebSite');
		
//		debugger;
		
//		webFrame.src = "";
//	
//		webFrame.src	= "http://m.baidu.com";
//		
//		webFrame.hidden	= true;
//		
//		return;
//	
		var data = this.comp("confData").getCurrentRow().toJson();
		
		var url = "http://";
		
		if (data.fName.value != '' && data.fPassword.value != ''){
		
			url = url + data.fName.value + ":" + data.fPassword.value + "@";
		
		}
		
		var innerIP = url + data.fInnerIP.value + "/cgi-bin/scada-vis/touch.html";
		
		var outerIP = url + data.fOuterIP.value + "/cgi-bin/scada-vis/touch.html";	
		
//		debugger;	
		
		webError = function(){
			alert("内网或者外网地址错误！");
			webFrame.hidden	= true;	
			//webFrame.src = "blank.html";		
		}
	
		cordovaHTTP.get(innerIP, {
			    id: 12,
			    message: "test"
			}, {  }, function(response) {
				webFrame.hidden	= false;
			    webFrame.src	= innerIP;
			}, function(response) {
				cordovaHTTP.get(outerIP, {
				        id: 12,
				        message: "test"
					}, {  }, function(response) {
						
						if (response.data.indexOf("Lyndoo") == -1){
							webError();
						}
						else {
							webFrame.hidden	= false;
							webFrame.src	= outerIP;						
						}					    
					}, function(response) {
						webError();						
				    });
		});
		
	
		
		//this.getElementByXid('WebSite').src	= url;
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

	Model.prototype.WebSiteLoad = function(event){
	
		//debugger;

	};

	return Model;
});
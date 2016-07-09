define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var configLoader  = require("$UI/myHome/config");
	require("cordova!cordova-plugin-http");
	
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
	
	Model.prototype.loadWebContent = function(url, timeout){
	
	};
	
	Model.prototype.LoadWeb = function(){
	
		var data = this.comp("confData").getCurrentRow().toJson();
		
		var url = "http://";
		
		if (data.fName.value != '' && data.fPassword.value != ''){
		
			url = url + data.fName.value + ":" + data.fPassword.value + "@";
		
		}
		
		var innerIP = url + data.fInnerIP.value + "/cgi-bin/scada-vis/touch.html";
		
		var outerIP = url + data.fOuterIP.value + "/cgi-bin/scada-vis/touch.html";		
	
		debugger;
		
		var self = this;
		
		x5callback = function(){
			debugger;
		};
		
    cordovaHTTP.get("https://www.baidu.com", {
	        id: 12,
	        message: "test"
		    }, {  }, function(response) {
		        console.log(response.status);
		    }, function(response) {
		        console.error(response.error);
		    });
		
		$.ajax({
	        type: "GET",
	        cache: false,
	        timeout: 1000,
	        url: innerIP,
	        processData: false,
			jsonpCallback: "x5callback",
			"data" : {
				"a" : 15,
				"b" : 10
			},

	        dataType: "jsonp",
	        complete: function (XMLHttpRequest, textStatus) {
	        	debugger;
	        	if (XMLHttpRequest.status == 200){
	        	//	debugger;
	        		self.getElementByXid('WebSite').src	= innerIP;	        		
	        	}
	        	else {
					$.ajax({
				        type: "GET",
				        cache: false,
				        timeout: 5000,
				        url: outerIP,
				        data: "{}",
				        dataType: "jsonp",
				        complete: function (XMLHttpRequest, textStatus) {
				        	if (XMLHttpRequest.status == 200){
				        	//	debugger;
				        		self.getElementByXid('WebSite').src	= outerIP;	        		
				        	}
				        	else {
				        		self.getElementByXid('WebSite').src = "";
				        	//	debugger;
				        	}
				        }
			
					});
	        	}
	        }

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
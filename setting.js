define(function(require){
	var $ = require("jquery");
	require("$UI/system/lib/cordova/cordova");
	var justep = require("$UI/system/lib/justep");

	var config  = require("$UI/myHome/config");
	

	
	var Model = function(){
		this.callParent();
	};



	Model.prototype.confDataCustomRefresh = function(event){

	};


	Model.prototype.btnReadClick = function(event){
	
		this.loadConfig(this);
		
	};

	Model.prototype.btnWriteClick = function(event){
		var conf = [{
			"fID" : {"value" : 1},
			"fName" : {"value" : "admin"},
			"fPassword" : {"value" : "admin123"},
			"fInnerIP" : {"value" : "192.168.1.230"},
			"fOuterIP" : {"value" : "192.168.1.230"}		
		}];
		config.write(conf);	

	};




	Model.prototype.regBtnClick = function(event){
	
		var data = this.comp("confData");
		
		var conf = data.toJson().rows;
		
		var cur = data.getCurrentRow();
		
		config.write(conf);
		
		// 确定后返回当前行，用于windowDialog的mapping映射

		var receiver = this.comp("windowReceiver1");
		receiver.windowEnsure(conf);		

	};



	Model.prototype.modelLoad = function(event){
		
		this.loadConfig(this);

	};


	Model.prototype.loadConfig = function(win){
	
		config.read(function(conf){
		
			var data = win.comp("confData");	
			
			data.loadData(conf);
			
			data.first();	
	
		});			
	};
	
	Model.prototype.modelActive = function(event){
	
		this.loadConfig(this);

	};
	
	Model.prototype.windowReceiver1Receive = function(event){

	};

	
	return Model;
});
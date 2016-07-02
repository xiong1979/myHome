define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var configLoader  = require("$UI/myHome/config");
	var config;
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.loadConfig = function(win){
		
		configLoader.read(function(conf){
		
			var data = win.comp("confData");	
			
			data.loadData(conf);
			
			data.first();	
	
		});
	};
	
	Model.prototype.iframe2Load = function(event){

	};

	Model.prototype.modelActive = function(event){		
	
		debugger;

		configLoader.read(function(con){
			config = con;
		});
		
		
		
	};

	Model.prototype.WebSiteLoad = function(event){
		var webSite = this.getElementByXid('WebSite');
		debugger;
		//webSite.
		console.log("WebSite");
		//console.log(this.comp("WebSite").valueOf("src"));
		//client.valueOf();
	};

	Model.prototype.button2Click = function(event){
		debugger;
		
//		$.ajax({
//		  url: require.toUrl('http://www.baidu.com'),
//		  type: 'GET',
//		  dataType:'jsonp',
//		  success : function(data, textStatus) {
//			  alert('有效');
//		  },
//		  error : function(XMLHttpRequest, textStatus, errorThrown) {
//			  alert('无效');
//		  }
//		 });
		 
		this.getElementByXid('WebSite').src = 'http://cn.bing.com';
	};

	Model.prototype.button1Click = function(event){

//		$.ajax({
//		  url: 'http://www.baidu.com',
//		  type: 'GET',
//		  dataType:'jsonp',
//		  success : function(data, textStatus) {
//			  alert('有效');
//		  },
//		  error : function(XMLHttpRequest, textStatus, errorThrown) {
//			  alert('无效');
//		  }
//		 });	
		var web = this.comp('inWeb').val();
		this.getElementByXid('WebSite').src = web;
	};

	Model.prototype.modelLoad = function(event){
		debugger;
		//this.comp('inWeb').val('http://m.baidu.com');
	};

	return Model;
});
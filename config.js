define(function(require){
	var $ = require("jquery");

	var cordova = require("$UI/system/lib/cordova/cordova");
	
	var fileApi = require("$UI/iHome/fileApi");
	
	var confFileName = "conf.json";
	var defConf = [{
			"fID" : {"value" : 1},
			"fName" : {"value" : "admin"},
			"fPassword" : {"value" : "admin123"},
			"fInnerIP" : {"value" : "192.168.1.230"},
			"fOuterIP" : {"value" : "192.168.1.230"}		
		}];
	
	var Config = function(){
		
	};
	
	Config.prototype.read = function(onRead)
	{
		var dtd = $.Deferred();
		var self = this;
		fileApi.getFS(0, 1024*1024).done(function(fs) {
			fs.root.getDirectory('Lyndoo', {
				create : true
			}, function(dirEntry) {
				fs.root.getFile('Lyndoo/config.json', {
					create : false
				}, function(fileEntry) {
					  fileEntry.file(function(file){
						var fileReader = new FileReader();					
						
						fileReader.onloadend = function(e) {
							var conf = JSON.parse(this.result);
							onRead(conf);
							console.log('读入完毕.');
							dtd.resolve();
						};
						
						fileReader.readAsText(file);
					  }, null);
					},
				function(e){
					self.write(defConf);
					onRead(defConf);
				});
			}, null);
		});
		return dtd;	
	};
	
	Config.prototype.write = function(conf){
		var dtd = $.Deferred();
		fileApi.getFS(0, 1024*1024).done(function(fs) {
			fs.root.getDirectory('Lyndoo', {
				create : true
			}, function(dirEntry) {
				fs.root.getFile('Lyndoo/config.json', {
					create : true
				}, function(fileEntry) {
					fileEntry.createWriter(function(fileWriter) {
						fileWriter.onwriteend = function(e) {
							console.log('截掉完毕.');
							dtd.resolve();
							
							var data = JSON.stringify(conf, null, '\t');
							
							var blob = new Blob([ data ], {
								type : 'text/plain'
							});						
							fileWriter.write(blob);	
							
							fileWriter.onwriteend = function(e){
								console.log("写入完毕");
							};
						};
						fileWriter.onerror = function(e) {
							console.log('写入失败: ' + e.toString());
							dtd.reject();
						};

						fileWriter.truncate(0);
					}, null);
				}, null);
			}, null);
		});
		return dtd;		
	};


	
	return new Config();
	
});
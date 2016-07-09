define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/myHome/main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cIbqAjq';
	this._flag_='6c3fdb765e8330fb2d662b22e490f5e8';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"ID：","name":"fID","relation":"fID","rules":{"integer":true},"type":"Integer"},"fInnerIP":{"define":"fInnerIP","label":"内网IP：","name":"fInnerIP","relation":"fInnerIP","type":"String"},"fName":{"define":"fName","label":"用户名称：","name":"fName","relation":"fName","type":"String"},"fOuterIP":{"define":"fOuterIP","label":"外网IP：","name":"fOuterIP","relation":"fOuterIP","type":"String"},"fPassword":{"define":"fPassword","label":"密码：","name":"fPassword","relation":"fPassword","type":"String"}},"directDelete":false,"events":{"onDataChange":"confDataDataChange","onValueChanged":"confDataValueChanged"},"idColumn":"fID","initData":"[]","limit":20,"xid":"confData"});
}}); 
return __result;});
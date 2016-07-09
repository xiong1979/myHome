define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/myHome/setting'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ciuUvMv';
	this._flag_='f29656a816f2ede599bacd532a727634';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"ID：","name":"fID","relation":"fID","rules":{"integer":true},"type":"Integer"},"fInnerIP":{"define":"fInnerIP","label":"内网网址：","name":"fInnerIP","relation":"fInnerIP","type":"String"},"fName":{"define":"fName","label":"用户名称：","name":"fName","relation":"fName","type":"String"},"fOuterIP":{"define":"fOuterIP","label":"外网网址：","name":"fOuterIP","relation":"fOuterIP","type":"String"},"fPassword":{"define":"fPassword","label":"密码：","name":"fPassword","relation":"fPassword","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[]","limit":20,"xid":"confData"});
}}); 
return __result;});
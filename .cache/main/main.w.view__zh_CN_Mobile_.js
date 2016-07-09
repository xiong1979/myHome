window.__justep.__ResourceEngine.loadCss([{url: '/v_b348304438a74ae68205fa7a5ebe4fa4l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_eb802db385034925ab7e2174af3d1f96l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_c413efd1fd6e44c1a7ed7b7b8469734bl_zh_CNs_d_m/system/core.min.js','/v_5de2ba4a90e749af80f44df524f00d7fl_zh_CNs_d_m/system/common.min.js','/v_6ca1c34c0abb40dd86801c85f9a3525bl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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

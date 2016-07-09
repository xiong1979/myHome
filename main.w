<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:165px;left:50px;height:auto;" onActive="modelActive" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="confData" idColumn="fID" onValueChanged="confDataValueChanged" onDataChange="confDataDataChange">
   <column label="ID：" name="fID" type="Integer" xid="xid3"></column>
   <column label="用户名称：" name="fName" type="String" xid="xid4"></column>
   <column label="密码：" name="fPassword" type="String" xid="xid5"></column>
   <column label="内网IP：" name="fInnerIP" type="String" xid="xid6"></column>
   <column label="外网IP：" name="fOuterIP" type="String" xid="xid7"></column>
   <data xid="default1">[]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel3" style="height:100%;width:100%;">
   <div class="x-panel-content" xid="Contents"><iframe src="" xid="WebSite" height="100%" width="100%" scrolling="false" bind-load="WebSiteLoad" frameborder="false" marginheight="0" marginwidth="0"></iframe></div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup2" style="height:100%;width:100%;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="设置" xid="btnSetting" icon="icon-android-settings" onClick="btnSettingClick">
   <i xid="i8" class="icon-android-settings"></i>
   <span xid="span8">设置</span></a></div></div>
  </div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="setDialog" src="$UI/myHome/setting.w" style="top:255px;left:56px;" onReceived="setDialogReceived"><result concept="confData" operation="new" origin="confData" xid="default8">
   <mapping from="fID" to="fID" xid="default9"></mapping>
   <mapping from="fName" to="fName" xid="default10"></mapping>
   <mapping from="fPassword" to="fPassword" xid="default11"></mapping>
   <mapping from="fInnerIP" to="fInnerIP" xid="default12"></mapping>
   <mapping from="fOuterIP" to="fOuterIP" xid="default13"></mapping></result></span></div>
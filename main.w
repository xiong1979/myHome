<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel3" style="height:100%;width:100%;">
   <div class="x-panel-content" xid="Contents"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents3">
   <div class="x-contents-content" xid="ctrlContent"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer2" src="./home.w"></div></div><div class="x-contents-content" xid="setContent"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer1" src="./setting.w"></div></div>
  </div></div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup2" style="height:100%;width:100%;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="首页" xid="btnHome" icon="icon-home" target="ctrlContent" onClick="btnHomeClick">
   <i xid="i6" class="icon-home"></i>
   <span xid="span6">首页</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="设置" xid="btnSetting" icon="icon-android-settings" target="setContent">
   <i xid="i8" class="icon-android-settings"></i>
   <span xid="span8">设置</span></a></div></div>
  </div></div>
<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:316px;left:24px;" onLoad="modelLoad" onActive="modelActive"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="confData" idColumn="fID"><column label="ID：" name="fID" type="Integer" xid="xid3"></column>
  <column label="用户名称：" name="fName" type="String" xid="xid4"></column>
  <column label="密码：" name="fPassword" type="String" xid="xid5"></column>
  <column label="内网网址：" name="fInnerIP" type="String" xid="xid6"></column>
  <column label="外网网址：" name="fOuterIP" type="String" xid="xid7"></column>
  <data xid="default1">[]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1">
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="设置"> 
        <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button3" onClick="{operation:'windowReceiver1.windowCancel'}" icon="icon-android-close">
   <i xid="i3" class="icon-android-close"></i>
   <span xid="span3"></span></a></div>  
        <div class="x-titlebar-title" xid="title1">设置</div>  
        <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="确定" xid="okBtn" icon="icon-android-checkmark" onClick="regBtnClick">
   <i xid="i2" class="icon-android-checkmark"></i>
   <span xid="span1">确定</span></a></div>
      </div>
    </div>  
    <div class="x-panel-content" xid="content1">
      <div component="$UI/system/components/justep/controlGroup/controlGroup"
        class="x-control-group" title="title" xid="controlGroup1">  
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
          xid="labelEdit1"> 
          <label class="x-label" xid="label1" bind-text='$model.confData.label("fName")'/>  
          <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
            xid="userName" placeHolder="请输入账号，无帐号不用输入" bind-ref='$model.confData.ref("fName")'/>
        </div>  
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2" bind-text='$model.confData.label("fPassword")'></label>
   <input component="$UI/system/components/justep/input/password" class="form-control x-edit" xid="password1" bind-ref='$model.confData.ref("fPassword")' placeHolder="请输入密码"></input></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3"> 
        <label class="x-label" xid="label3" bind-text='$model.confData.label("fInnerIP")'/>  
        <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="innerIP" placeHolder="例如：192.168.1.100" bind-ref='$model.confData.ref("fInnerIP")'/>
      </div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4"> 
        <label class="x-label" xid="label4" bind-text='$model.confData.label("fOuterIP")'/>  
        <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="outerIP" placeHolder="例如：104071.cicp.net" dataType="String" bind-ref='$model.confData.ref("fOuterIP")'/>
      </div>
  </div>  
        
      
    </div>  
    </div>
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="top:316px;left:202px;" onReceive="windowReceiver1Receive"></span></div>
(function(k,p,C){k.guardFatal(function(){k.when("A","reg-jquery-ui-sortable").register("reg-jquery-ui-touch-punch",function(k){(function(b){function k(a,b){if(!(1<a.originalEvent.touches.length)){a.preventDefault();var d=a.originalEvent.changedTouches[0],g=document.createEvent("MouseEvents");g.initMouseEvent(b,!0,!0,p,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null);a.target.dispatchEvent(g)}}b.support.touch="ontouchend"in document;if(b.support.touch){var n=b.ui.mouse.prototype,h=n._mouseInit,
a=n._mouseDestroy,d;n._touchStart=function(a){!d&&this._mouseCapture(a.originalEvent.changedTouches[0])&&(d=!0,this._touchMoved=!1,k(a,"mouseover"),k(a,"mousemove"),k(a,"mousedown"))};n._touchMove=function(a){d&&(this._touchMoved=!0,k(a,"mousemove"))};n._touchEnd=function(a){d&&(k(a,"mouseup"),k(a,"mouseout"),this._touchMoved||k(a,"click"),d=!1)};n._mouseInit=function(){this.element.bind({touchstart:b.proxy(this,"_touchStart"),touchmove:b.proxy(this,"_touchMove"),touchend:b.proxy(this,"_touchEnd")});
h.call(this)};n._mouseDestroy=function(){this.element.unbind({touchstart:b.proxy(this,"_touchStart"),touchmove:b.proxy(this,"_touchMove"),touchend:b.proxy(this,"_touchEnd")});a.call(this)}}})(k.$)})})()})(function(){var k=window.AmazonUIPageJS||window.P,p=k._namespace||k.attributeErrors;return p?p("RegistryJQueryUITouchPunch"):k}(),window);
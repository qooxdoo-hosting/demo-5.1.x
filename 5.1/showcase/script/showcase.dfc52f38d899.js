qx.$$packageData['417']={"locales":{},"resources":{},"translations":{"C":{},"cs":{},"de":{},"en":{},"es":{},"pt":{},"ro":{},"sv":{}}};
qx.Part.$$notifyLoad("417", function() {
(function(){var a="resize",b="qx.ui.groupbox.GroupBox",c="groupbox",d="frame",f="legend",g="top",h="middle",i="_applyLegendPosition";qx.Class.define(b,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(j,k){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.Canvas);this._createChildControl(d);this._createChildControl(f);if(j!=null){this.setLegend(j);};if(k!=null){this.setIcon(k);};},properties:{appearance:{refine:true,init:c},legendPosition:{check:[g,h],init:h,apply:i,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(n,m){var l;switch(n){case d:l=new qx.ui.container.Composite();this._add(l,{left:0,top:6,right:0,bottom:0});break;case f:l=new qx.ui.basic.Atom();l.addListener(a,this._repositionFrame,this);this._add(l,{left:0,right:0});break;};return l||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);},_getContentPaddingTarget:function(){return this.getChildControl(d);},_applyLegendPosition:function(e){if(this.getChildControl(f).getBounds()){this._repositionFrame();};},_repositionFrame:function(){var p=this.getChildControl(f);var o=this.getChildControl(d);var q=p.getBounds().height;if(this.getLegendPosition()==h){o.setLayoutProperties({"top":Math.round(q/2)});}else if(this.getLegendPosition()==g){o.setLayoutProperties({"top":q});};},getChildrenContainer:function(){return this.getChildControl(d);},setLegend:function(s){var r=this.getChildControl(f);if(s!==null){r.setLabel(s);r.show();}else {r.exclude();};},getLegend:function(){return this.getChildControl(f).getLabel();},setIcon:function(t){this.getChildControl(f).setIcon(t);},getIcon:function(){return this.getChildControl(f).getIcon();}}});})();(function(){var a="changeModel",b="qx.core.Object",c="qx.data.controller.Object",d="get",e="[",f="reset",g="_applyModel",h="last";qx.Class.define(c,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);this.__bc={};this.__hc=[];if(j!=null){this.setModel(j);};},properties:{model:{check:b,event:a,apply:g,nullable:true,dereference:true}},members:{__hc:null,__bc:null,_applyModel:function(o,l){for(var i=0;i<this.__hc.length;i++ ){var t=this.__hc[i][0];var q=this.__hc[i][1];var n=this.__hc[i][2];var r=this.__hc[i][3];var p=this.__hc[i][4];var m=this.__hc[i][5];if(l!=undefined&&!l.isDisposed()){this.__Eo(t,q,n,l);};if(o!=undefined){this.__En(t,q,n,r,p,m);}else {if(t.isDisposed()||qx.core.ObjectRegistry.inShutDown){continue;};if(q.indexOf(e)==-1){t[f+qx.lang.String.firstUp(q)]();}else {var open=q.indexOf(e);var k=parseInt(q.substring(open+1,q.length-1),10);q=q.substring(0,open);var s=t[d+qx.lang.String.firstUp(q)]();if(k==h){k=s.length;};if(s){s.setItem(k,null);};};};};},addTarget:function(z,w,u,x,y,v){this.__hc.push([z,w,u,x,y,v]);this.__En(z,w,u,x,y,v);},__En:function(F,D,B,G,E,A){if(this.getModel()==null){return;};var C=this.getModel().bind(B,F,D,E);var I=null;if(G){I=F.bind(D,this.getModel(),B,A);};var H=F.toHashCode();if(this.__bc[H]==undefined){this.__bc[H]=[];};this.__bc[H].push([C,I,D,B,E,A]);},removeTarget:function(K,J,L){this.__Eo(K,J,L,this.getModel());for(var i=0;i<this.__hc.length;i++ ){if(this.__hc[i][0]==K&&this.__hc[i][1]==J&&this.__hc[i][2]==L){this.__hc.splice(i,1);};};},__Eo:function(R,O,N,M){if(!(R instanceof qx.core.Object)){return;};var P=this.__bc[R.toHashCode()];if(P==undefined||P.length==0){return;};for(var i=0;i<P.length;i++ ){if(P[i][2]==O&&P[i][3]==N){var Q=P[i][0];M.removeBinding(Q);if(P[i][1]!=null){R.removeBinding(P[i][1]);};P.splice(i,1);return;};};}},destruct:function(){if(this.getModel()!=null&&!this.getModel().isDisposed()){this.setModel(null);};}});})();(function(){var a="popupOpen",b="PageUp",c="blur",d="one",f="Escape",g="_applyMaxListHeight",h="Function",i="",j="Abstract method: _onListPointerDown()",k="visible",l="changeSelection",m="middle",n="Abstract method: _onListChangeSelection()",o="changeVisibility",p="resize",q="list",r="qx.ui.form.AbstractSelectBox",s="pointerdown",t="keypress",u="PageDown",v="abstract",w="popup",x="Number",y="pane",z="tap";qx.Class.define(r,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:v,construct:function(){qx.ui.core.Widget.call(this);var A=new qx.ui.layout.HBox();this._setLayout(A);A.setAlignY(m);this.addListener(t,this._onKeyPress);this.addListener(c,this._onBlur,this);this.addListener(p,this._onResize,this);},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:x,apply:g,nullable:true,init:200},format:{check:h,init:function(B){return this._defaultFormat(B);},nullable:true}},members:{_createChildControlImpl:function(E,D){var C;switch(E){case q:C=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:d,quickSelection:true});C.addListener(l,this._onListChangeSelection,this);C.addListener(s,this._onListPointerDown,this);C.getChildControl(y).addListener(z,this.close,this);break;case w:C=new qx.ui.popup.Popup(new qx.ui.layout.VBox());C.setAutoHide(false);C.setKeepActive(true);C.add(this.getChildControl(q));C.addListener(o,this._onPopupChangeVisibility,this);break;};return C||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,E);},_applyMaxListHeight:function(G,F){this.getChildControl(q).setMaxHeight(G);},getChildrenContainer:function(){return this.getChildControl(q);},open:function(){var H=this.getChildControl(w);H.placeToWidget(this,true);H.show();},close:function(){this.getChildControl(w).hide();},toggle:function(){var I=this.getChildControl(w).isVisible();if(I){this.close();}else {this.open();};},_defaultFormat:function(J){var L=J?J.getLabel():i;var K=J?J.getRich():false;if(K){L=L.replace(/<[^>]+?>/g,i);L=qx.bom.String.unescape(L);};return L;},_onBlur:function(e){this.close();},_onKeyPress:function(e){var M=e.getKeyIdentifier();var N=this.getChildControl(w);if(N.isHidden()&&(M==u||M==b)){e.stopPropagation();}else if(!N.isHidden()&&M==f){this.close();e.stop();}else {this.getChildControl(q).handleKeyPress(e);};},_onResize:function(e){this.getChildControl(w).setMinWidth(e.getData().width);},_onListChangeSelection:function(e){throw new Error(n);},_onListPointerDown:function(e){throw new Error(j);},_onPopupChangeVisibility:function(e){e.getData()==k?this.addState(a):this.removeState(a);}}});})();(function(){var a="inherit",b="toolbar-button",c="keydown",d="qx.ui.toolbar.Button",e="keyup";qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(f,h,g){qx.ui.form.Button.call(this,f,h,g);this.removeListener(c,this._onKeyDown);this.removeListener(e,this._onKeyUp);},properties:{appearance:{refine:true,init:b},show:{refine:true,init:a},focusable:{refine:true,init:false}},members:{_applyVisibility:function(j,i){qx.ui.form.Button.prototype._applyVisibility.call(this,j,i);var parent=this.getLayoutParent();if(parent&&parent instanceof qx.ui.toolbar.PartContainer){qx.ui.core.queue.Appearance.add(parent);};}}});})();(function(){var a="hovered",b="Enter",c="pressed",d="one",f="pointerover",g="changeLabel",h="changeIcon",i="Space",j="abandoned",k="key",l="list",m="keyinput",n="arrow",o="changeSelection",p="quick",q="",r="qx.ui.form.SelectBox",s="spacer",t="selectbox",u="popup",v=" ",w="tap",x="pointerout",y="atom";qx.Class.define(r,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){qx.ui.form.AbstractSelectBox.call(this);this._createChildControl(y);this._createChildControl(s);this._createChildControl(n);this.addListener(f,this._onPointerOver,this);this.addListener(x,this._onPointerOut,this);this.addListener(w,this._onTap,this);this.addListener(m,this._onKeyInput,this);this.addListener(o,this.__og,this);},properties:{appearance:{refine:true,init:t}},members:{__px:null,_createChildControlImpl:function(B,A){var z;switch(B){case s:z=new qx.ui.core.Spacer();this._add(z,{flex:1});break;case y:z=new qx.ui.basic.Atom(v);z.setCenter(false);z.setAnonymous(true);this._add(z,{flex:1});break;case n:z=new qx.ui.basic.Image();z.setAnonymous(true);this._add(z);break;};return z||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,B);},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();},_isAllowEmptySelection:function(){return this.getChildrenContainer().getSelectionMode()!==d;},__og:function(e){var D=e.getData()[0];var C=this.getChildControl(l);if(C.getSelection()[0]!=D){if(D){C.setSelection([D]);}else {C.resetSelection();};};this.__py();this.__pz();},__py:function(){var F=this.getChildControl(l).getSelection()[0];var E=this.getChildControl(y);var G=F?F.getIcon():q;G==null?E.resetIcon():E.setIcon(G);},__pz:function(){var J=this.getChildControl(l).getSelection()[0];var H=this.getChildControl(y);var I=J?J.getLabel():q;var K=this.getFormat();if(K!=null){I=K.call(this,J);};if(I&&I.translate){I=I.translate();};I==null?H.resetLabel():H.setLabel(I);},_onPointerOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;};if(this.hasState(j)){this.removeState(j);this.addState(c);};this.addState(a);},_onPointerOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;};this.removeState(a);if(this.hasState(c)){this.removeState(c);this.addState(j);};},_onTap:function(e){this.toggle();},_onKeyPress:function(e){var L=e.getKeyIdentifier();if(L==b||L==i){if(this.__px){this.setSelection([this.__px]);this.__px=null;};this.toggle();}else {qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);};},_onKeyInput:function(e){var M=e.clone();M.setTarget(this._list);M.setBubbles(false);this.getChildControl(l).dispatchEvent(M);},_onListPointerDown:function(e){if(this.__px){this.setSelection([this.__px]);this.__px=null;};},_onListChangeSelection:function(e){var Q=e.getData();var O=e.getOldData();if(O&&O.length>0){O[0].removeListener(h,this.__py,this);O[0].removeListener(g,this.__pz,this);};if(Q.length>0){var N=this.getChildControl(u);var P=this.getChildControl(l);var R=P.getSelectionContext();if(N.isVisible()&&(R==p||R==k)){this.__px=Q[0];}else {this.setSelection([Q[0]]);this.__px=null;};Q[0].addListener(h,this.__py,this);Q[0].addListener(g,this.__pz,this);}else {this.resetSelection();};},_onPopupChangeVisibility:function(e){qx.ui.form.AbstractSelectBox.prototype._onPopupChangeVisibility.call(this,e);var T=this.getChildControl(u);if(!T.isVisible()){var V=this.getChildControl(l);if(V.hasChildren()){V.setSelection(this.getSelection());};}else {var S=T.getLayoutLocation(this);var X=qx.bom.Viewport.getHeight();var W=S.top;var Y=X-S.bottom;var U=W>Y?W:Y;var ba=this.getMaxListHeight();var V=this.getChildControl(l);if(ba==null||ba>U){V.setMaxHeight(U);}else if(ba<U){V.setMaxHeight(ba);};};}},destruct:function(){this.__px=null;}});})();
});
qx.$$packageData['144']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("144", function() {
(function(){var a="loadEnd",b="qx.io.request.AbstractRequest",c="changePhase",d="GET",f="sent",g="qx.event.type.Data",h="qx.io.request.authentication.IAuthentication",i="error",j="Blob",k="fail",l="loading",m="load",n="qx.event.type.Event",o="abort",p="success",q="String",r="",s="opened",t="POST",u="timeout",v="statusError",w="readyStateChange",x="Abstract method call",y="abstract",z="unsent",A="changeResponse",B="Number",C="FormData",D="Content-Type",E="ArrayBuffer",F="undefined";qx.Class.define(b,{type:y,extend:qx.core.Object,construct:function(G){qx.core.Object.call(this);if(G!==undefined){this.setUrl(G);};this.__rW={};var H=this._transport=this._createTransport();this._setPhase(z);this.__rX=qx.lang.Function.bind(this._onReadyStateChange,this);this.__rY=qx.lang.Function.bind(this._onLoad,this);this.__sa=qx.lang.Function.bind(this._onLoadEnd,this);this.__sb=qx.lang.Function.bind(this._onAbort,this);this.__np=qx.lang.Function.bind(this._onTimeout,this);this.__sc=qx.lang.Function.bind(this._onError,this);H.onreadystatechange=this.__rX;H.onload=this.__rY;H.onloadend=this.__sa;H.onabort=this.__sb;H.ontimeout=this.__np;H.onerror=this.__sc;},events:{"readyStateChange":n,"success":n,"load":n,"loadEnd":n,"abort":n,"timeout":n,"error":n,"statusError":n,"fail":n,"changeResponse":g,"changePhase":g},properties:{url:{check:q},timeout:{check:B,nullable:true,init:0},requestData:{check:function(I){return qx.lang.Type.isString(I)||qx.Class.isSubClassOf(I.constructor,qx.core.Object)||qx.lang.Type.isObject(I)||qx.lang.Type.isArray(I)||qx.Bootstrap.getClass(I)==j||qx.Bootstrap.getClass(I)==E||qx.Bootstrap.getClass(I)==C;},nullable:true},authentication:{check:h,nullable:true}},members:{__rX:null,__rY:null,__sa:null,__sb:null,__np:null,__sc:null,__sd:null,__ns:null,__se:null,__rW:null,__sf:null,_transport:null,_createTransport:function(){throw new Error(x);},_getConfiguredUrl:function(){},_getConfiguredRequestHeaders:function(){},_getParsedResponse:function(){throw new Error(x);},_getMethod:function(){return d;},_isAsync:function(){return true;},send:function(){var M=this._transport,K,L,N,J;K=this._getConfiguredUrl();if(/\#/.test(K)){K=K.replace(/\#.*/,r);};M.timeout=this.getTimeout();L=this._getMethod();N=this._isAsync();{};M.open(L,K,N);this._setPhase(s);J=this.getRequestData();if([E,j,C].indexOf(qx.Bootstrap.getClass(J))==-1){J=this._serializeData(J);};this._setRequestHeaders();{};L==d?M.send():M.send(J);this._setPhase(f);},abort:function(){{};this.__ns=true;this.__se=o;this._transport.abort();},_setRequestHeaders:function(){var P=this._transport,O=this._getAllRequestHeaders();for(var Q in O){P.setRequestHeader(Q,O[Q]);};},_getAllRequestHeaders:function(){var R={};qx.lang.Object.mergeWith(R,this._getConfiguredRequestHeaders());qx.lang.Object.mergeWith(R,this.__sg());qx.lang.Object.mergeWith(R,this.__sf);qx.lang.Object.mergeWith(R,this.__rW);return R;},__sg:function(){var T=this.getAuthentication(),S={};if(T){T.getAuthHeaders().forEach(function(U){S[U.key]=U.value;});return S;};},setRequestHeader:function(V,W){this.__rW[V]=W;},getRequestHeader:function(X){return this.__rW[X];},removeRequestHeader:function(Y){if(this.__rW[Y]){delete this.__rW[Y];};},getTransport:function(){return this._transport;},getReadyState:function(){return this._transport.readyState;},getPhase:function(){return this.__se;},getStatus:function(){return this._transport.status;},getStatusText:function(){return this._transport.statusText;},getResponseText:function(){return this._transport.responseText;},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();},getResponseHeader:function(ba){return this._transport.getResponseHeader(ba);},overrideResponseContentType:function(bb){return this._transport.overrideMimeType(bb);},getResponseContentType:function(){return this.getResponseHeader(D);},isDone:function(){return this.getReadyState()===4;},getResponse:function(){return this.__sd;},_setResponse:function(bd){var bc=bd;if(this.__sd!==bd){this.__sd=bd;this.fireEvent(A,qx.event.type.Data,[this.__sd,bc]);};},_onReadyStateChange:function(){var be=this.getReadyState();{};this.fireEvent(w);if(this.__ns){return;};if(be===3){this._setPhase(l);};if(this.isDone()){this.__sh();};},__sh:function(){{};this._setPhase(m);if(qx.util.Request.isSuccessful(this.getStatus())){{};this._setResponse(this._getParsedResponse());this._fireStatefulEvent(p);}else {try{this._setResponse(this._getParsedResponse());}catch(e){};if(this.getStatus()!==0){this._fireStatefulEvent(v);this.fireEvent(k);};};},_onLoad:function(){this.fireEvent(m);},_onLoadEnd:function(){this.fireEvent(a);},_onAbort:function(){this._fireStatefulEvent(o);},_onTimeout:function(){this._fireStatefulEvent(u);this.fireEvent(k);},_onError:function(){this.fireEvent(i);this.fireEvent(k);},_fireStatefulEvent:function(bf){{};this._setPhase(bf);this.fireEvent(bf);},_setPhase:function(bg){var bh=this.__se;{};this.__se=bg;this.fireDataEvent(c,bg,bh);},_serializeData:function(bk){var bi=typeof this.getMethod!==F&&this.getMethod()==t,bj=/application\/.*\+?json/.test(this.getRequestHeader(D));if(!bk){return null;};if(qx.lang.Type.isString(bk)){return bk;};if(qx.Class.isSubClassOf(bk.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(bk);};if(bj&&(qx.lang.Type.isObject(bk)||qx.lang.Type.isArray(bk))){return qx.lang.Json.stringify(bk);};if(qx.lang.Type.isObject(bk)){return qx.util.Uri.toParameter(bk,bi);};return null;}},environment:{"qx.debug.io":false},destruct:function(){var bm=this._transport,bl=function(){};if(this._transport){bm.onreadystatechange=bm.onload=bm.onloadend=bm.onabort=bm.ontimeout=bm.onerror=bl;window.setTimeout(function(){bm.dispose();},0);};}});})();(function(){var a="HEAD",b="CONNECT",c="OPTIONS",d="PUT",e="GET",f="PATCH",g="//",h="DELETE",i="POST",j="TRACE",k="qx.util.Request";qx.Bootstrap.define(k,{statics:{isCrossDomain:function(l){var n=qx.util.Uri.parseUri(l),location=window.location;if(!location){return false;};var m=location.protocol;if(!(l.indexOf(g)!==-1)){return false;};if(m.substr(0,m.length-1)==n.protocol&&location.host===n.host&&location.port===n.port){return false;};return true;},isSuccessful:function(status){return (status>=200&&status<300||status===304);},isMethod:function(p){var o=[e,i,d,h,a,c,j,b,f];return (o.indexOf(p)!==-1)?true:false;},methodAllowsRequestBody:function(q){return !((/^(GET|HEAD)$/).test(q));}}});})();(function(){var a="qx.util.Serializer",b='\\\\',c='\\f',d='"',e="null",f='\\"',g="}",h="get",j="{",k='\\r',l="",m='\\t',n="]",o="Class",p="Interface",q="[",r="Mixin",s='":',t="&",u='\\b',v="=",w='\\n',x=",";qx.Class.define(a,{statics:{toUriParameter:function(z,C,y){var E=l;var B=qx.util.PropertyUtil.getAllProperties(z.constructor);for(var name in B){if(B[name].group!=undefined){continue;};var A=z[h+qx.lang.String.firstUp(name)]();if(qx.lang.Type.isArray(A)){var D=qx.data&&qx.data.IListData&&qx.Class.hasInterface(A&&A.constructor,qx.data.IListData);for(var i=0;i<A.length;i++ ){var F=D?A.getItem(i):A[i];E+=this.__si(name,F,C);};}else if(qx.lang.Type.isDate(A)&&y!=null){E+=this.__si(name,y.format(A),C);}else {E+=this.__si(name,A,C);};};return E.substring(0,E.length-1);},__si:function(name,I,G){if(I&&I.$$type==o){I=I.classname;};if(I&&(I.$$type==p||I.$$type==r)){I=I.name;};if(I instanceof qx.core.Object&&G!=null){var H=encodeURIComponent(G(I));if(H===undefined){var H=encodeURIComponent(I);};}else {var H=encodeURIComponent(I);};return encodeURIComponent(name)+v+H+t;},toNativeObject:function(L,N,K){var O;if(L==null){return null;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(L.constructor,qx.data.IListData)){O=[];for(var i=0;i<L.getLength();i++ ){O.push(qx.util.Serializer.toNativeObject(L.getItem(i),N,K));};return O;};if(qx.lang.Type.isArray(L)){O=[];for(var i=0;i<L.length;i++ ){O.push(qx.util.Serializer.toNativeObject(L[i],N,K));};return O;};if(L.$$type==o){return L.classname;};if(L.$$type==p||L.$$type==r){return L.name;};if(L instanceof qx.core.Object){if(N!=null){var J=N(L);if(J!=undefined){return J;};};O={};var Q=qx.util.PropertyUtil.getAllProperties(L.constructor);for(var name in Q){if(Q[name].group!=undefined){continue;};var M=L[h+qx.lang.String.firstUp(name)]();O[name]=qx.util.Serializer.toNativeObject(M,N,K);};return O;};if(qx.lang.Type.isDate(L)&&K!=null){return K.format(L);};if(qx.locale&&qx.locale.LocalizedString&&L instanceof qx.locale.LocalizedString){return L.toString();};if(qx.lang.Type.isObject(L)){O={};for(var P in L){O[P]=qx.util.Serializer.toNativeObject(L[P],N,K);};return O;};return L;},toJson:function(T,V,S){var W=l;if(T==null){return e;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(T.constructor,qx.data.IListData)){W+=q;for(var i=0;i<T.getLength();i++ ){W+=qx.util.Serializer.toJson(T.getItem(i),V,S)+x;};if(W!=q){W=W.substring(0,W.length-1);};return W+n;};if(qx.lang.Type.isArray(T)){W+=q;for(var i=0;i<T.length;i++ ){W+=qx.util.Serializer.toJson(T[i],V,S)+x;};if(W!=q){W=W.substring(0,W.length-1);};return W+n;};if(T.$$type==o){return d+T.classname+d;};if(T.$$type==p||T.$$type==r){return d+T.name+d;};if(T instanceof qx.core.Object){if(V!=null){var R=V(T);if(R!=undefined){return d+R+d;};};W+=j;var Y=qx.util.PropertyUtil.getAllProperties(T.constructor);for(var name in Y){if(Y[name].group!=undefined){continue;};var U=T[h+qx.lang.String.firstUp(name)]();W+=d+name+s+qx.util.Serializer.toJson(U,V,S)+x;};if(W!=j){W=W.substring(0,W.length-1);};return W+g;};if(qx.locale&&qx.locale.LocalizedString&&T instanceof qx.locale.LocalizedString){T=T.toString();};if(qx.lang.Type.isDate(T)&&S!=null){return d+S.format(T)+d;};if(qx.lang.Type.isObject(T)){W+=j;for(var X in T){W+=d+X+s+qx.util.Serializer.toJson(T[X],V,S)+x;};if(W!=j){W=W.substring(0,W.length-1);};return W+g;};if(qx.lang.Type.isString(T)){T=T.replace(/([\\])/g,b);T=T.replace(/(["])/g,f);T=T.replace(/([\r])/g,k);T=T.replace(/([\f])/g,c);T=T.replace(/([\n])/g,w);T=T.replace(/([\t])/g,m);T=T.replace(/([\b])/g,u);return d+T+d;};if(qx.lang.Type.isDate(T)||qx.lang.Type.isRegExp(T)){return d+T+d;};return T+l;}}});})();(function(){var a="null",b="XMLHttpRequest",c="Boolean",d="X-Requested-With",e="",f="application/x-www-form-urlencoded",g="Cache-Control",h="Content-Type",i="qx.event.type.Event",j="GET",k="qx.io.request.Xhr",l="Accept",m="String";qx.Class.define(k,{extend:qx.io.request.AbstractRequest,construct:function(n,o){if(o!==undefined){this.setMethod(o);};qx.io.request.AbstractRequest.call(this,n);this._parser=this._createResponseParser();},events:{"readyStateChange":i,"success":i,"load":i,"statusError":i},properties:{method:{init:j},async:{check:c,init:true},accept:{check:m,nullable:true},cache:{check:function(p){return qx.lang.Type.isBoolean(p)||qx.lang.Type.isString(p);},init:true}},members:{_parser:null,_createTransport:function(){return new qx.bom.request.Xhr();},_getConfiguredUrl:function(){var q=this.getUrl(),r;if(this.getMethod()===j&&this.getRequestData()){r=this._serializeData(this.getRequestData());q=qx.util.Uri.appendParamsToUrl(q,r);};if(this.getCache()===false){q=qx.util.Uri.appendParamsToUrl(q,{nocache:new Date().valueOf()});};return q;},_getConfiguredRequestHeaders:function(){var s={},t=qx.util.Request.methodAllowsRequestBody(this.getMethod());if(!qx.util.Request.isCrossDomain(this.getUrl())){s[d]=b;};if(qx.lang.Type.isString(this.getCache())){s[g]=this.getCache();};if(this.getRequestData()!==a&&t){s[h]=f;};if(this.getAccept()){{};s[l]=this.getAccept();};return s;},_getMethod:function(){return this.getMethod();},_isAsync:function(){return this.isAsync();},_createResponseParser:function(){return new qx.util.ResponseParser();},_getParsedResponse:function(){var v=this._transport.responseText,u=this.getResponseContentType()||e;return this._parser.parse(v,u);},setParser:function(w){return this._parser.setParser(w);}}});})();(function(){var a="activex",b="No XHR support available.",c="If-None-Match",d="xhr",f="If-Modified-Since",g="engine.version",h="onunload",i="GET",j="-1",k="qx.debug.io",l="HTMLDocument",m="error",n="loadend",o="Blob",p="load",q="abort",r="String",s="browser.documentmode",t="",u="engine.name",v="Microsoft.XMLHTTP",w="Already disposed",x="browser.version",y="opera",z="qx.bom.request.Xhr",A="Not enough arguments",B="timeout",C="gecko",D="If-Match",E="mshtml",F="readystatechange",G="Microsoft.XMLDOM",H="file:",I="FormData",J="If-Range",K="Content-Type",L="io.xhr",M="on",N="ArrayBuffer",O="undefined",P="Native XHR object doesn't support overrideMimeType.";qx.Bootstrap.define(z,{extend:Object,construct:function(){var Q=qx.Bootstrap.bind(this.__sv,this);if(qx.event&&qx.event.GlobalError&&qx.event.GlobalError.observeMethod){this.__sj=qx.event.GlobalError.observeMethod(Q);}else {this.__sj=Q;};this.__sk=qx.Bootstrap.bind(this.__su,this);this.__np=qx.Bootstrap.bind(this.__sz,this);this.__st();this._emitter=new qx.event.Emitter();if(window.attachEvent){this.__sl=qx.Bootstrap.bind(this.__sC,this);window.attachEvent(h,this.__sl);};},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},events:{"readystatechange":z,"error":z,"loadend":z,"timeout":z,"abort":z,"load":z},members:{readyState:0,responseText:t,responseXML:null,status:0,statusText:t,timeout:0,open:function(V,R,S,U,T){this.__sE();if(typeof R===O){throw new Error(A);}else if(typeof V===O){V=i;};this.__ns=false;this.__sm=false;this.__sn=false;this.__nt=R;if(typeof S==O){S=true;};this.__so=S;if(!this.__sD()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();this.__st();};this.__sq.onreadystatechange=this.__sj;try{{};this.__sq.open(V,R,S,U,T);}catch(W){if(!qx.util.Request.isCrossDomain(R)){throw W;};if(!this.__so){this.__sp=W;};if(this.__so){if(window.XDomainRequest){this.readyState=4;this.__sq=new XDomainRequest();this.__sq.onerror=qx.Bootstrap.bind(function(){this._emit(F);this._emit(m);this._emit(n);},this);{};this.__sq.open(V,R,S,U,T);return;};window.setTimeout(qx.Bootstrap.bind(function(){if(this.__nu){return;};this.readyState=4;this._emit(F);this._emit(m);this._emit(n);},this));};};if(qx.core.Environment.get(u)===E&&qx.core.Environment.get(s)<9&&this.__sq.readyState>0){this.__sq.setRequestHeader(f,j);};if(qx.core.Environment.get(u)===C&&parseInt(qx.core.Environment.get(g),10)<2&&!this.__so){this.readyState=qx.bom.request.Xhr.OPENED;this._emit(F);};},setRequestHeader:function(X,Y){this.__sE();if(X==D||X==f||X==c||X==J){this.__sn=true;};this.__sq.setRequestHeader(X,Y);return this;},send:function(bb){this.__sE();if(!this.__so&&this.__sp){throw this.__sp;};if(qx.core.Environment.get(u)===y&&this.timeout===0){this.timeout=10000;};if(this.timeout>0){this.__sr=window.setTimeout(this.__np,this.timeout);};bb=typeof bb==O?null:bb;var ba=qx.Bootstrap.getClass(bb);bb=(bb!==null&&this.__ss.indexOf(ba)===-1)?bb.toString():bb;try{{};this.__sq.send(bb);}catch(bd){if(!this.__so){throw bd;};if(this._getProtocol()===H){this.readyState=2;this.__sw();var bc=this;window.setTimeout(function(){if(bc.__nu){return;};bc.readyState=3;bc.__sw();bc.readyState=4;bc.__sw();});};};if(qx.core.Environment.get(u)===C&&!this.__so){this.__sv();};this.__sm=true;return this;},abort:function(){this.__sE();this.__ns=true;this.__sq.abort();if(this.__sq){this.readyState=this.__sq.readyState;};return this;},_emit:function(event){if(this[M+event]){this[M+event]();};this._emitter.emit(event,this);},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},on:function(name,be,bf){this._emitter.on(name,be,bf);return this;},getResponseHeader:function(bg){this.__sE();if(qx.core.Environment.get(s)===9&&this.__sq.aborted){return t;};return this.__sq.getResponseHeader(bg);},getAllResponseHeaders:function(){this.__sE();if(qx.core.Environment.get(s)===9&&this.__sq.aborted){return t;};return this.__sq.getAllResponseHeaders();},overrideMimeType:function(bh){this.__sE();if(this.__sq.overrideMimeType){this.__sq.overrideMimeType(bh);}else {throw new Error(P);};return this;},getRequest:function(){return this.__sq;},dispose:function(){if(this.__nu){return false;};window.clearTimeout(this.__sr);if(window.detachEvent){window.detachEvent(h,this.__sl);};try{this.__sq.onreadystatechange;}catch(bj){return false;};var bi=function(){};this.__sq.onreadystatechange=bi;this.__sq.onload=bi;this.__sq.onerror=bi;this.abort();this.__sq=null;this.__nu=true;return true;},isDisposed:function(){return !!this.__nu;},_createNativeXhr:function(){var bk=qx.core.Environment.get(L);if(bk===d){return new XMLHttpRequest();};if(bk==a){return new window.ActiveXObject(v);};qx.Bootstrap.error(this,b);},_getProtocol:function(){var bl=this.__nt;var bm=/^(\w+:)\/\//;if(bl!==null&&bl.match){var bn=bl.match(bm);if(bn&&bn[1]){return bn[1];};};return window.location.protocol;},__sq:null,__so:null,__sj:null,__sk:null,__sl:null,__np:null,__sm:null,__nt:null,__ns:null,__gs:null,__nu:null,__sr:null,__sp:null,__sn:null,__ss:null,__st:function(){this.__sq=this._createNativeXhr();this.__sq.onreadystatechange=this.__sj;if(this.__sq.onabort){this.__sq.onabort=this.__sk;};this.__nu=this.__sm=this.__ns=false;this.__ss=[N,o,l,r,I];},__su:function(){if(!this.__ns){this.abort();};},__sv:function(){var bo=this.__sq,bp=true;{};if(this.readyState==bo.readyState){return;};this.readyState=bo.readyState;if(this.readyState===qx.bom.request.Xhr.DONE&&this.__ns&&!this.__sm){return;};if(!this.__so&&(bo.readyState==2||bo.readyState==3)){return;};this.status=0;this.statusText=this.responseText=t;this.responseXML=null;if(this.readyState>=qx.bom.request.Xhr.HEADERS_RECEIVED){try{this.status=bo.status;this.statusText=bo.statusText;this.responseText=bo.responseText;this.responseXML=bo.responseXML;}catch(bq){bp=false;};if(bp){this.__sA();this.__sB();};};this.__sw();if(this.readyState==qx.bom.request.Xhr.DONE){if(bo){bo.onreadystatechange=function(){};};};},__sw:function(){if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__sr);};this._emit(F);if(this.readyState===qx.bom.request.Xhr.DONE){this.__sx();};},__sx:function(){if(this.__gs){this._emit(B);if(qx.core.Environment.get(u)===y){this._emit(m);};this.__gs=false;}else {if(this.__ns){this._emit(q);}else {if(this.__sy()){this._emit(m);}else {this._emit(p);};};};this._emit(n);},__sy:function(){var br;if(this._getProtocol()===H){br=!this.responseText;}else {br=!this.statusText;};return br;},__sz:function(){var bs=this.__sq;this.readyState=qx.bom.request.Xhr.DONE;this.__gs=true;bs.aborted=true;bs.abort();this.responseText=t;this.responseXML=null;this.__sw();},__sA:function(){var bt=this.readyState===qx.bom.request.Xhr.DONE;if(this._getProtocol()===H&&this.status===0&&bt){if(!this.__sy()){this.status=200;};};if(this.status===1223){this.status=204;};if(qx.core.Environment.get(u)===y){if(bt&&this.__sn&&!this.__ns&&this.status===0){this.status=304;};};},__sB:function(){if(qx.core.Environment.get(u)==E&&(this.getResponseHeader(K)||t).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var bu=new window.ActiveXObject(G);bu.async=false;bu.validateOnParse=false;bu.loadXML(this.responseText);this.responseXML=bu;};},__sC:function(){try{if(this){this.dispose();};}catch(e){};},__sD:function(){var name=qx.core.Environment.get(u);var bv=qx.core.Environment.get(x);return !(name==E&&bv<9||name==C&&bv<3.5);},__sE:function(){if(this.__nu){throw new Error(w);};}},defer:function(){qx.core.Environment.add(k,false);}});})();(function(){var a="function",b="qx.util.ResponseParser",c="";qx.Bootstrap.define(b,{construct:function(d){if(d!==undefined){this.setParser(d);};},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},members:{__sF:null,parse:function(g,f){var e=this._getParser(f);if(typeof e===a){if(g!==c){return e.call(this,g);};};return g;},setParser:function(h){if(typeof qx.util.ResponseParser.PARSER[h]===a){return this.__sF=qx.util.ResponseParser.PARSER[h];};{};return this.__sF=h;},_getParser:function(j){var i=this.__sF,l=c,k=c;if(i){return i;};l=j||c;k=l.replace(/;.*$/,c);if(/^application\/(\w|\.)*\+?json$/.test(k)){i=qx.util.ResponseParser.PARSER.json;};if(/^application\/xml$/.test(k)){i=qx.util.ResponseParser.PARSER.xml;};if(/[^\/]+\/[^\+]+\+xml$/.test(l)){i=qx.util.ResponseParser.PARSER.xml;};return i;}}});})();(function(){var a="changeModel",b="application/json",c="json",d="aborted",e="loaded",f="qx.event.type.Data",g="__uy",h="error",i="fail",j="receiving",k="queued",l="changeState",m="success",n="String",o="changePhase",p="sending",q="_marshaler",r="completed",s="failed",t="qx.data.store.Json",u="configured",v="changeUrl",w="timeout",x="_applyUrl";qx.Class.define(t,{extend:qx.core.Object,construct:function(y,z){qx.core.Object.call(this);this._marshaler=new qx.data.marshal.Json(z);this._delegate=z;if(y!=null){this.setUrl(y);};},events:{"loaded":f,"error":f},properties:{model:{nullable:true,event:a},state:{check:[u,k,p,j,r,d,w,s],init:u,event:l},url:{check:n,apply:x,event:v,nullable:true}},members:{_marshaler:null,_delegate:null,__uy:null,_applyUrl:function(B,A){if(B!=null){B=qx.util.AliasManager.getInstance().resolve(B);B=qx.util.ResourceManager.getInstance().toUri(B);this._createRequest(B);};},_getRequest:function(){return this.__uy;},_setRequest:function(C){this.__uy=C;},_createRequest:function(D){if(this.__uy){this.__uy.dispose();this.__uy=null;};var E=new qx.io.request.Xhr(D);this._setRequest(E);E.setAccept(b);E.setParser(c);E.addListener(m,this._onSuccess,this);var F=this._delegate;if(F&&qx.lang.Type.isFunction(F.configureRequest)){this._delegate.configureRequest(E);};E.addListener(o,this._onChangePhase,this);E.addListener(i,this._onFail,this);E.send();},_onChangePhase:function(I){var G=I.getData(),J={},H;J={"opened":u,"sent":p,"loading":j,"success":r,"abort":d,"timeout":w,"statusError":s};H=J[G];if(H){this.setState(H);};},_onFail:function(K){var L=K.getTarget();this.fireDataEvent(h,L);},_onSuccess:function(Q){if(this.isDisposed()){return;};var N=Q.getTarget(),M=N.getResponse();var O=this._delegate;if(O&&qx.lang.Type.isFunction(O.manipulateData)){M=this._delegate.manipulateData(M);};this._marshaler.toClass(M,true);var P=this.getModel();this.setModel(this._marshaler.toModel(M));if(P&&P.dispose){P.dispose();};this.fireDataEvent(e,this.getModel());if(this.__uy){this.__uy.dispose();this.__uy=null;};},reload:function(){var R=this.getUrl();if(R!=null){this._createRequest(R);};}},destruct:function(){if(this.__uy!=null){this._disposeObjects(g);};this._disposeSingletonObjects(q);this._delegate=null;}});})();(function(){var a="qx.data.marshal.IMarshaler";qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});})();(function(){var a='"',b="Class '",c="",d="Unsupported type!",e="change",f="qx.data.marshal.Json",g="Array",h="_validate",j="' could not be found.",k="]",l="[",m="set",n="_applyEventPropagation",o="qx.data.model.";qx.Class.define(f,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(p){qx.core.Object.call(this);this.__yL=p;},statics:{$$instance:null,createModel:function(q,r){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();};this.$$instance.toClass(q,r);return this.$$instance.toModel(q);}},members:{__yL:null,__yM:function(s){return Object.keys(s).sort().join(a);},toClass:function(t,u){this.__yN(t,u,null,0);},__yN:function(G,B,v,D){if(!qx.lang.Type.isObject(G)||!!G.$$isString||G instanceof qx.core.Object){if(G instanceof Array||qx.Bootstrap.getClass(G)==g){for(var i=0;i<G.length;i++ ){this.__yN(G[i],B,v+l+i+k,D+1);};};return;};var x=this.__yM(G);if(this.__yR(x,v,D)){return;};for(var F in G){this.__yN(G[F],B,F,D+1);};if(qx.Class.isDefined(o+x)){return;};if(this.__yL&&this.__yL.getModelClass&&this.__yL.getModelClass(x,G,v,D)!=null){return;};var H={};var y={__yO:this.__yO};for(var F in G){if(this.__yL&&this.__yL.getPropertyMapping){F=this.__yL.getPropertyMapping(F,x);};F=F.replace(/-|\.|\s+/g,c);{};H[F]={};H[F].nullable=true;H[F].event=e+qx.lang.String.firstUp(F);if(B){H[F].apply=n;};if(this.__yL&&this.__yL.getValidationRule){var A=this.__yL.getValidationRule(x,F);if(A){H[F].validate=h+F;y[h+F]=A;};};};if(this.__yL&&this.__yL.getModelSuperClass){var E=this.__yL.getModelSuperClass(x,v,D)||qx.core.Object;}else {var E=qx.core.Object;};var z=[];if(this.__yL&&this.__yL.getModelMixins){var C=this.__yL.getModelMixins(x,v,D);if(!qx.lang.Type.isArray(C)){if(C!=null){z=[C];};}else {z=C;};};if(B){z.push(qx.data.marshal.MEventBubbling);};var w={extend:E,include:z,properties:H,members:y,destruct:this.__yP};qx.Class.define(o+x,w);},__yP:function(){var I=qx.util.PropertyUtil.getAllProperties(this.constructor);for(var J in I){this.__yO(this.get(I[J].name));};},__yO:function(K){if(!(K instanceof qx.core.Object)){return;};if(K.isDisposed()){return;};K.dispose();},__yQ:function(L,P,Q,O){var R;if(this.__yL&&this.__yL.getModelClass){R=this.__yL.getModelClass(L,P,Q,O);};if(R!=null){return (new R());}else {var N=o+L;var M=qx.Class.getByName(N);if(!M){throw new Error(b+N+j);};return (new M());};},__yR:function(S,V,T){var U=this.__yL;return U&&U.ignore&&U.ignore(S,V,T);},toModel:function(W){return this.__yS(W,null,0);},__yS:function(bj,Y,bf){var bd=qx.lang.Type.isObject(bj);var X=bj instanceof Array||qx.Bootstrap.getClass(bj)==g;if((!bd&&!X)||!!bj.$$isString||bj instanceof qx.core.Object){return bj;}else if(this.__yR(this.__yM(bj),Y,bf)){return bj;}else if(X){var bh=qx.data.Array;if(this.__yL&&this.__yL.getArrayClass){var be=this.__yL.getArrayClass(Y,bf);bh=be||bh;};var bk=new bh();bk.setAutoDisposeItems(true);for(var i=0;i<bj.length;i++ ){bk.push(this.__yS(bj[i],Y+l+i+k,bf+1));};return bk;}else if(bd){var ba=this.__yM(bj);var bi=this.__yQ(ba,bj,Y,bf);for(var bg in bj){var bb=bg;if(this.__yL&&this.__yL.getPropertyMapping){bb=this.__yL.getPropertyMapping(bg,ba);};var bl=bb.replace(/-|\.|\s+/g,c);{};bb=bl;var bc=m+qx.lang.String.firstUp(bb);if(bi[bc]){bi[bc](this.__yS(bj[bg],bg,bf+1));};};return bi;};throw new Error(d);}},destruct:function(){this.__yL=null;}});})();
});
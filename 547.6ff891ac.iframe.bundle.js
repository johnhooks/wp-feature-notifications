"use strict";(self.webpackChunk_wordpress_wp_feature_notifications_stories=self.webpackChunk_wordpress_wp_feature_notifications_stories||[]).push([[547],{"../node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-state.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return use_controlled_state}});var react=__webpack_require__("../node_modules/react/index.js");function isValueDefined(value){return null!=value}const defaultOptions={initial:void 0,fallback:""};var use_controlled_state=function useControlledState(currentState){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:defaultOptions;const{initial:initial,fallback:fallback}={...defaultOptions,...options},[internalState,setInternalState]=(0,react.useState)(currentState),hasCurrentState=isValueDefined(currentState);(0,react.useEffect)((()=>{hasCurrentState&&internalState&&setInternalState(void 0)}),[hasCurrentState,internalState]);const state=function getDefinedValue(){var _values$find;let fallbackValue=arguments.length>1?arguments[1]:void 0;return null!==(_values$find=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find(isValueDefined))&&void 0!==_values$find?_values$find:fallbackValue}([currentState,internalState,initial],fallback);return[state,(0,react.useCallback)((nextState=>{hasCurrentState||setInternalState(nextState)}),[hasCurrentState])]}},"../node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _registry_provider_use_registry__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");__webpack_exports__.Z=storeNameOrDescriptor=>{const{dispatch:dispatch}=(0,_registry_provider_use_registry__WEBPACK_IMPORTED_MODULE_0__.Z)();return void 0===storeNameOrDescriptor?dispatch:dispatch(storeNameOrDescriptor)}},"../node_modules/@wordpress/keyboard-shortcuts/build-module/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{vn:function(){return ShortcutProvider},h:function(){return store},bx:function(){return useShortcut}});var actions_namespaceObject={};__webpack_require__.r(actions_namespaceObject),__webpack_require__.d(actions_namespaceObject,{registerShortcut:function(){return registerShortcut},unregisterShortcut:function(){return unregisterShortcut}});var selectors_namespaceObject={};__webpack_require__.r(selectors_namespaceObject),__webpack_require__.d(selectors_namespaceObject,{getAllShortcutKeyCombinations:function(){return getAllShortcutKeyCombinations},getAllShortcutRawKeyCombinations:function(){return getAllShortcutRawKeyCombinations},getCategoryShortcuts:function(){return getCategoryShortcuts},getShortcutAliases:function(){return getShortcutAliases},getShortcutDescription:function(){return getShortcutDescription},getShortcutKeyCombination:function(){return getShortcutKeyCombination},getShortcutRepresentation:function(){return getShortcutRepresentation}});var redux_store=__webpack_require__("../node_modules/@wordpress/data/build-module/redux-store/index.js"),build_module=__webpack_require__("../node_modules/@wordpress/data/build-module/index.js");var store_reducer=function reducer(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"REGISTER_SHORTCUT":return{...state,[action.name]:{category:action.category,keyCombination:action.keyCombination,aliases:action.aliases,description:action.description}};case"UNREGISTER_SHORTCUT":const{[action.name]:actionName,...remainingState}=state;return remainingState}return state};function registerShortcut(_ref){let{name:name,category:category,description:description,keyCombination:keyCombination,aliases:aliases}=_ref;return{type:"REGISTER_SHORTCUT",name:name,category:category,keyCombination:keyCombination,aliases:aliases,description:description}}function unregisterShortcut(name){return{type:"UNREGISTER_SHORTCUT",name:name}}var LEAF_KEY={};function arrayOf(value){return[value]}function isShallowEqual(a,b,fromIndex){var i;if(a.length!==b.length)return!1;for(i=fromIndex;i<a.length;i++)if(a[i]!==b[i])return!1;return!0}function rememo(selector,getDependants){var rootCache,normalizedGetDependants=getDependants||arrayOf;function clear(){rootCache=new WeakMap}function callSelector(){var cache,node,i,args,dependants,len=arguments.length;for(args=new Array(len),i=0;i<len;i++)args[i]=arguments[i];for(cache=function getCache(dependants){var i,dependant,map,cache,value,caches=rootCache,isUniqueByDependants=!0;for(i=0;i<dependants.length;i++){if(!(value=dependant=dependants[i])||"object"!=typeof value){isUniqueByDependants=!1;break}caches.has(dependant)?caches=caches.get(dependant):(map=new WeakMap,caches.set(dependant,map),caches=map)}return caches.has(LEAF_KEY)||((cache=function createCache(){var cache={clear:function(){cache.head=null}};return cache}()).isUniqueByDependants=isUniqueByDependants,caches.set(LEAF_KEY,cache)),caches.get(LEAF_KEY)}(dependants=normalizedGetDependants.apply(null,args)),cache.isUniqueByDependants||(cache.lastDependants&&!isShallowEqual(dependants,cache.lastDependants,0)&&cache.clear(),cache.lastDependants=dependants),node=cache.head;node;){if(isShallowEqual(node.args,args,1))return node!==cache.head&&(node.prev.next=node.next,node.next&&(node.next.prev=node.prev),node.next=cache.head,node.prev=null,cache.head.prev=node,cache.head=node),node.val;node=node.next}return node={val:selector.apply(null,args)},args[0]=null,node.args=args,cache.head&&(cache.head.prev=node,node.next=cache.head),cache.head=node,node.val}return callSelector.getDependants=normalizedGetDependants,callSelector.clear=clear,clear(),callSelector}var keycodes_build_module=__webpack_require__("../node_modules/@wordpress/keycodes/build-module/index.js");const EMPTY_ARRAY=[],FORMATTING_METHODS={display:keycodes_build_module.E_,raw:keycodes_build_module.Ac,ariaLabel:keycodes_build_module.J3};function getKeyCombinationRepresentation(shortcut,representation){return shortcut?shortcut.modifier?FORMATTING_METHODS[representation][shortcut.modifier](shortcut.character):shortcut.character:null}function getShortcutKeyCombination(state,name){return state[name]?state[name].keyCombination:null}function getShortcutRepresentation(state,name){let representation=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"display";return getKeyCombinationRepresentation(getShortcutKeyCombination(state,name),representation)}function getShortcutDescription(state,name){return state[name]?state[name].description:null}function getShortcutAliases(state,name){return state[name]&&state[name].aliases?state[name].aliases:EMPTY_ARRAY}const getAllShortcutKeyCombinations=rememo(((state,name)=>[getShortcutKeyCombination(state,name),...getShortcutAliases(state,name)].filter(Boolean)),((state,name)=>[state[name]])),getAllShortcutRawKeyCombinations=rememo(((state,name)=>getAllShortcutKeyCombinations(state,name).map((combination=>getKeyCombinationRepresentation(combination,"raw")))),((state,name)=>[state[name]])),getCategoryShortcuts=rememo(((state,categoryName)=>Object.entries(state).filter((_ref=>{let[,shortcut]=_ref;return shortcut.category===categoryName})).map((_ref2=>{let[name]=_ref2;return name}))),(state=>[state])),store=(0,redux_store.Z)("core/keyboard-shortcuts",{reducer:store_reducer,actions:actions_namespaceObject,selectors:selectors_namespaceObject});(0,build_module.z2)(store);var react=__webpack_require__("../node_modules/react/index.js"),use_select=__webpack_require__("../node_modules/@wordpress/data/build-module/components/use-select/index.js");const context=(0,react.createContext)();function useShortcut(name,callback){let{isDisabled:isDisabled}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const shortcuts=(0,react.useContext)(context),isMatch=function useShortcutEventMatch(){const{getAllShortcutKeyCombinations:getAllShortcutKeyCombinations}=(0,use_select.Z)(store);return function isMatch(name,event){return getAllShortcutKeyCombinations(name).some((_ref=>{let{modifier:modifier,character:character}=_ref;return keycodes_build_module.vd[modifier](event,character)}))}}(),callbackRef=(0,react.useRef)();callbackRef.current=callback,(0,react.useEffect)((()=>{if(!isDisabled)return shortcuts.current.add(_callback),()=>{shortcuts.current.delete(_callback)};function _callback(event){isMatch(name,event)&&callbackRef.current(event)}}),[name,isDisabled])}var esm_extends=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/extends.js");const{Provider:Provider}=context;function ShortcutProvider(props){const keyboardShortcuts=(0,react.useRef)(new Set);return(0,react.createElement)(Provider,{value:keyboardShortcuts},(0,react.createElement)("div",(0,esm_extends.Z)({},props,{onKeyDown:function onKeyDown(event){props.onKeyDown&&props.onKeyDown(event);for(const keyboardShortcut of keyboardShortcuts.current)keyboardShortcut(event)}})))}},"../node_modules/re-resizable/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{e:function(){return Resizable}});var extendStatics,react=__webpack_require__("../node_modules/react/index.js"),react_dom=__webpack_require__("../node_modules/react-dom/index.js"),__extends=(extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])},extendStatics(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},rowSizeBase={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},colSizeBase={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},edgeBase={width:"20px",height:"20px",position:"absolute"},styles={top:__assign(__assign({},rowSizeBase),{top:"-5px"}),right:__assign(__assign({},colSizeBase),{left:void 0,right:"-5px"}),bottom:__assign(__assign({},rowSizeBase),{top:void 0,bottom:"-5px"}),left:__assign(__assign({},colSizeBase),{left:"-5px"}),topRight:__assign(__assign({},edgeBase),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:__assign(__assign({},edgeBase),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:__assign(__assign({},edgeBase),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:__assign(__assign({},edgeBase),{left:"-10px",top:"-10px",cursor:"nw-resize"})},Resizer=function(_super){function Resizer(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.onMouseDown=function(e){_this.props.onResizeStart(e,_this.props.direction)},_this.onTouchStart=function(e){_this.props.onResizeStart(e,_this.props.direction)},_this}return __extends(Resizer,_super),Resizer.prototype.render=function(){return react.createElement("div",{className:this.props.className||"",style:__assign(__assign({position:"absolute",userSelect:"none"},styles[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},Resizer}(react.PureComponent),lib_extends=function(){var extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])},extendStatics(d,b)};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}(),lib_assign=function(){return lib_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},lib_assign.apply(this,arguments)},DEFAULT_SIZE={width:"auto",height:"auto"},clamp=function(n,min,max){return Math.max(Math.min(n,max),min)},snap=function(n,size){return Math.round(n/size)*size},hasDirection=function(dir,target){return new RegExp(dir,"i").test(target)},isTouchEvent=function(event){return Boolean(event.touches&&event.touches.length)},findClosestSnap=function(n,snapArray,snapGap){void 0===snapGap&&(snapGap=0);var closestGapIndex=snapArray.reduce((function(prev,curr,index){return Math.abs(curr-n)<Math.abs(snapArray[prev]-n)?index:prev}),0),gap=Math.abs(snapArray[closestGapIndex]-n);return 0===snapGap||gap<snapGap?snapArray[closestGapIndex]:n},getStringSize=function(n){return"auto"===(n=n.toString())||n.endsWith("px")||n.endsWith("%")||n.endsWith("vh")||n.endsWith("vw")||n.endsWith("vmax")||n.endsWith("vmin")?n:n+"px"},getPixelSize=function(size,parentSize,innerWidth,innerHeight){if(size&&"string"==typeof size){if(size.endsWith("px"))return Number(size.replace("px",""));if(size.endsWith("%"))return parentSize*(Number(size.replace("%",""))/100);if(size.endsWith("vw"))return innerWidth*(Number(size.replace("vw",""))/100);if(size.endsWith("vh"))return innerHeight*(Number(size.replace("vh",""))/100)}return size},definedProps=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Resizable=function(_super){function Resizable(props){var _this=_super.call(this,props)||this;return _this.ratio=1,_this.resizable=null,_this.parentLeft=0,_this.parentTop=0,_this.resizableLeft=0,_this.resizableRight=0,_this.resizableTop=0,_this.resizableBottom=0,_this.targetLeft=0,_this.targetTop=0,_this.appendBase=function(){if(!_this.resizable||!_this.window)return null;var parent=_this.parentNode;if(!parent)return null;var element=_this.window.document.createElement("div");return element.style.width="100%",element.style.height="100%",element.style.position="absolute",element.style.transform="scale(0, 0)",element.style.left="0",element.style.flex="0 0 100%",element.classList?element.classList.add("__resizable_base__"):element.className+="__resizable_base__",parent.appendChild(element),element},_this.removeBase=function(base){var parent=_this.parentNode;parent&&parent.removeChild(base)},_this.ref=function(c){c&&(_this.resizable=c)},_this.state={isResizing:!1,width:void 0===(_this.propsSize&&_this.propsSize.width)?"auto":_this.propsSize&&_this.propsSize.width,height:void 0===(_this.propsSize&&_this.propsSize.height)?"auto":_this.propsSize&&_this.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},_this.onResizeStart=_this.onResizeStart.bind(_this),_this.onMouseMove=_this.onMouseMove.bind(_this),_this.onMouseUp=_this.onMouseUp.bind(_this),_this}return lib_extends(Resizable,_super),Object.defineProperty(Resizable.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(Resizable.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(Resizable.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||DEFAULT_SIZE},enumerable:!1,configurable:!0}),Object.defineProperty(Resizable.prototype,"size",{get:function(){var width=0,height=0;if(this.resizable&&this.window){var orgWidth=this.resizable.offsetWidth,orgHeight=this.resizable.offsetHeight,orgPosition=this.resizable.style.position;"relative"!==orgPosition&&(this.resizable.style.position="relative"),width="auto"!==this.resizable.style.width?this.resizable.offsetWidth:orgWidth,height="auto"!==this.resizable.style.height?this.resizable.offsetHeight:orgHeight,this.resizable.style.position=orgPosition}return{width:width,height:height}},enumerable:!1,configurable:!0}),Object.defineProperty(Resizable.prototype,"sizeStyle",{get:function(){var _this=this,size=this.props.size,getSize=function(key){if(void 0===_this.state[key]||"auto"===_this.state[key])return"auto";if(_this.propsSize&&_this.propsSize[key]&&_this.propsSize[key].toString().endsWith("%")){if(_this.state[key].toString().endsWith("%"))return _this.state[key].toString();var parentSize=_this.getParentSize();return Number(_this.state[key].toString().replace("px",""))/parentSize[key]*100+"%"}return getStringSize(_this.state[key])};return{width:size&&void 0!==size.width&&!this.state.isResizing?getStringSize(size.width):getSize("width"),height:size&&void 0!==size.height&&!this.state.isResizing?getStringSize(size.height):getSize("height")}},enumerable:!1,configurable:!0}),Resizable.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var base=this.appendBase();if(!base)return{width:0,height:0};var wrapChanged=!1,wrap=this.parentNode.style.flexWrap;"wrap"!==wrap&&(wrapChanged=!0,this.parentNode.style.flexWrap="wrap"),base.style.position="relative",base.style.minWidth="100%",base.style.minHeight="100%";var size={width:base.offsetWidth,height:base.offsetHeight};return wrapChanged&&(this.parentNode.style.flexWrap=wrap),this.removeBase(base),size},Resizable.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},Resizable.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},Resizable.prototype.componentDidMount=function(){if(this.resizable&&this.window){var computedStyle=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==computedStyle.flexBasis?computedStyle.flexBasis:void 0})}},Resizable.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},Resizable.prototype.createSizeForCssProperty=function(newSize,kind){var propsSize=this.propsSize&&this.propsSize[kind];return"auto"!==this.state[kind]||this.state.original[kind]!==newSize||void 0!==propsSize&&"auto"!==propsSize?newSize:"auto"},Resizable.prototype.calculateNewMaxFromBoundary=function(maxWidth,maxHeight){var boundWidth,boundHeight,boundsByDirection=this.props.boundsByDirection,direction=this.state.direction,widthByDirection=boundsByDirection&&hasDirection("left",direction),heightByDirection=boundsByDirection&&hasDirection("top",direction);if("parent"===this.props.bounds){var parent_1=this.parentNode;parent_1&&(boundWidth=widthByDirection?this.resizableRight-this.parentLeft:parent_1.offsetWidth+(this.parentLeft-this.resizableLeft),boundHeight=heightByDirection?this.resizableBottom-this.parentTop:parent_1.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(boundWidth=widthByDirection?this.resizableRight:this.window.innerWidth-this.resizableLeft,boundHeight=heightByDirection?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(boundWidth=widthByDirection?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),boundHeight=heightByDirection?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return boundWidth&&Number.isFinite(boundWidth)&&(maxWidth=maxWidth&&maxWidth<boundWidth?maxWidth:boundWidth),boundHeight&&Number.isFinite(boundHeight)&&(maxHeight=maxHeight&&maxHeight<boundHeight?maxHeight:boundHeight),{maxWidth:maxWidth,maxHeight:maxHeight}},Resizable.prototype.calculateNewSizeFromDirection=function(clientX,clientY){var scale=this.props.scale||1,resizeRatio=this.props.resizeRatio||1,_a=this.state,direction=_a.direction,original=_a.original,_b=this.props,lockAspectRatio=_b.lockAspectRatio,lockAspectRatioExtraHeight=_b.lockAspectRatioExtraHeight,lockAspectRatioExtraWidth=_b.lockAspectRatioExtraWidth,newWidth=original.width,newHeight=original.height,extraHeight=lockAspectRatioExtraHeight||0,extraWidth=lockAspectRatioExtraWidth||0;return hasDirection("right",direction)&&(newWidth=original.width+(clientX-original.x)*resizeRatio/scale,lockAspectRatio&&(newHeight=(newWidth-extraWidth)/this.ratio+extraHeight)),hasDirection("left",direction)&&(newWidth=original.width-(clientX-original.x)*resizeRatio/scale,lockAspectRatio&&(newHeight=(newWidth-extraWidth)/this.ratio+extraHeight)),hasDirection("bottom",direction)&&(newHeight=original.height+(clientY-original.y)*resizeRatio/scale,lockAspectRatio&&(newWidth=(newHeight-extraHeight)*this.ratio+extraWidth)),hasDirection("top",direction)&&(newHeight=original.height-(clientY-original.y)*resizeRatio/scale,lockAspectRatio&&(newWidth=(newHeight-extraHeight)*this.ratio+extraWidth)),{newWidth:newWidth,newHeight:newHeight}},Resizable.prototype.calculateNewSizeFromAspectRatio=function(newWidth,newHeight,max,min){var _a=this.props,lockAspectRatio=_a.lockAspectRatio,lockAspectRatioExtraHeight=_a.lockAspectRatioExtraHeight,lockAspectRatioExtraWidth=_a.lockAspectRatioExtraWidth,computedMinWidth=void 0===min.width?10:min.width,computedMaxWidth=void 0===max.width||max.width<0?newWidth:max.width,computedMinHeight=void 0===min.height?10:min.height,computedMaxHeight=void 0===max.height||max.height<0?newHeight:max.height,extraHeight=lockAspectRatioExtraHeight||0,extraWidth=lockAspectRatioExtraWidth||0;if(lockAspectRatio){var extraMinWidth=(computedMinHeight-extraHeight)*this.ratio+extraWidth,extraMaxWidth=(computedMaxHeight-extraHeight)*this.ratio+extraWidth,extraMinHeight=(computedMinWidth-extraWidth)/this.ratio+extraHeight,extraMaxHeight=(computedMaxWidth-extraWidth)/this.ratio+extraHeight,lockedMinWidth=Math.max(computedMinWidth,extraMinWidth),lockedMaxWidth=Math.min(computedMaxWidth,extraMaxWidth),lockedMinHeight=Math.max(computedMinHeight,extraMinHeight),lockedMaxHeight=Math.min(computedMaxHeight,extraMaxHeight);newWidth=clamp(newWidth,lockedMinWidth,lockedMaxWidth),newHeight=clamp(newHeight,lockedMinHeight,lockedMaxHeight)}else newWidth=clamp(newWidth,computedMinWidth,computedMaxWidth),newHeight=clamp(newHeight,computedMinHeight,computedMaxHeight);return{newWidth:newWidth,newHeight:newHeight}},Resizable.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var parent_2=this.parentNode;if(parent_2){var parentRect=parent_2.getBoundingClientRect();this.parentLeft=parentRect.left,this.parentTop=parentRect.top}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var targetRect=this.props.bounds.getBoundingClientRect();this.targetLeft=targetRect.left,this.targetTop=targetRect.top}if(this.resizable){var _a=this.resizable.getBoundingClientRect(),left=_a.left,top_1=_a.top,right=_a.right,bottom=_a.bottom;this.resizableLeft=left,this.resizableRight=right,this.resizableTop=top_1,this.resizableBottom=bottom}},Resizable.prototype.onResizeStart=function(event,direction){if(this.resizable&&this.window){var flexBasis,clientX=0,clientY=0;if(event.nativeEvent&&function(event){return Boolean((event.clientX||0===event.clientX)&&(event.clientY||0===event.clientY))}(event.nativeEvent)?(clientX=event.nativeEvent.clientX,clientY=event.nativeEvent.clientY):event.nativeEvent&&isTouchEvent(event.nativeEvent)&&(clientX=event.nativeEvent.touches[0].clientX,clientY=event.nativeEvent.touches[0].clientY),this.props.onResizeStart)if(this.resizable)if(!1===this.props.onResizeStart(event,direction,this.resizable))return;this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var computedStyle=this.window.getComputedStyle(this.resizable);if("auto"!==computedStyle.flexBasis){var parent_3=this.parentNode;if(parent_3){var dir=this.window.getComputedStyle(parent_3).flexDirection;this.flexDir=dir.startsWith("row")?"row":"column",flexBasis=computedStyle.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var state={original:{x:clientX,y:clientY,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:lib_assign(lib_assign({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(event.target).cursor||"auto"}),direction:direction,flexBasis:flexBasis};this.setState(state)}},Resizable.prototype.onMouseMove=function(event){var _this=this;if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&isTouchEvent(event))try{event.preventDefault(),event.stopPropagation()}catch(e){}var _a=this.props,maxWidth=_a.maxWidth,maxHeight=_a.maxHeight,minWidth=_a.minWidth,minHeight=_a.minHeight,clientX=isTouchEvent(event)?event.touches[0].clientX:event.clientX,clientY=isTouchEvent(event)?event.touches[0].clientY:event.clientY,_b=this.state,direction=_b.direction,original=_b.original,width=_b.width,height=_b.height,parentSize=this.getParentSize(),max=function(parentSize,innerWidth,innerHeight,maxWidth,maxHeight,minWidth,minHeight){return maxWidth=getPixelSize(maxWidth,parentSize.width,innerWidth,innerHeight),maxHeight=getPixelSize(maxHeight,parentSize.height,innerWidth,innerHeight),minWidth=getPixelSize(minWidth,parentSize.width,innerWidth,innerHeight),minHeight=getPixelSize(minHeight,parentSize.height,innerWidth,innerHeight),{maxWidth:void 0===maxWidth?void 0:Number(maxWidth),maxHeight:void 0===maxHeight?void 0:Number(maxHeight),minWidth:void 0===minWidth?void 0:Number(minWidth),minHeight:void 0===minHeight?void 0:Number(minHeight)}}(parentSize,this.window.innerWidth,this.window.innerHeight,maxWidth,maxHeight,minWidth,minHeight);maxWidth=max.maxWidth,maxHeight=max.maxHeight,minWidth=max.minWidth,minHeight=max.minHeight;var _c=this.calculateNewSizeFromDirection(clientX,clientY),newHeight=_c.newHeight,newWidth=_c.newWidth,boundaryMax=this.calculateNewMaxFromBoundary(maxWidth,maxHeight);this.props.snap&&this.props.snap.x&&(newWidth=findClosestSnap(newWidth,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(newHeight=findClosestSnap(newHeight,this.props.snap.y,this.props.snapGap));var newSize=this.calculateNewSizeFromAspectRatio(newWidth,newHeight,{width:boundaryMax.maxWidth,height:boundaryMax.maxHeight},{width:minWidth,height:minHeight});if(newWidth=newSize.newWidth,newHeight=newSize.newHeight,this.props.grid){var newGridWidth=snap(newWidth,this.props.grid[0]),newGridHeight=snap(newHeight,this.props.grid[1]),gap=this.props.snapGap||0;newWidth=0===gap||Math.abs(newGridWidth-newWidth)<=gap?newGridWidth:newWidth,newHeight=0===gap||Math.abs(newGridHeight-newHeight)<=gap?newGridHeight:newHeight}var delta={width:newWidth-original.width,height:newHeight-original.height};if(width&&"string"==typeof width)if(width.endsWith("%"))newWidth=newWidth/parentSize.width*100+"%";else if(width.endsWith("vw")){newWidth=newWidth/this.window.innerWidth*100+"vw"}else if(width.endsWith("vh")){newWidth=newWidth/this.window.innerHeight*100+"vh"}if(height&&"string"==typeof height)if(height.endsWith("%"))newHeight=newHeight/parentSize.height*100+"%";else if(height.endsWith("vw")){newHeight=newHeight/this.window.innerWidth*100+"vw"}else if(height.endsWith("vh")){newHeight=newHeight/this.window.innerHeight*100+"vh"}var newState={width:this.createSizeForCssProperty(newWidth,"width"),height:this.createSizeForCssProperty(newHeight,"height")};"row"===this.flexDir?newState.flexBasis=newState.width:"column"===this.flexDir&&(newState.flexBasis=newState.height),(0,react_dom.flushSync)((function(){_this.setState(newState)})),this.props.onResize&&this.props.onResize(event,direction,this.resizable,delta)}},Resizable.prototype.onMouseUp=function(event){var _a=this.state,isResizing=_a.isResizing,direction=_a.direction,original=_a.original;if(isResizing&&this.resizable){var delta={width:this.size.width-original.width,height:this.size.height-original.height};this.props.onResizeStop&&this.props.onResizeStop(event,direction,this.resizable,delta),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:lib_assign(lib_assign({},this.state.backgroundStyle),{cursor:"auto"})})}},Resizable.prototype.updateSize=function(size){this.setState({width:size.width,height:size.height})},Resizable.prototype.renderResizer=function(){var _this=this,_a=this.props,enable=_a.enable,handleStyles=_a.handleStyles,handleClasses=_a.handleClasses,handleWrapperStyle=_a.handleWrapperStyle,handleWrapperClass=_a.handleWrapperClass,handleComponent=_a.handleComponent;if(!enable)return null;var resizers=Object.keys(enable).map((function(dir){return!1!==enable[dir]?react.createElement(Resizer,{key:dir,direction:dir,onResizeStart:_this.onResizeStart,replaceStyles:handleStyles&&handleStyles[dir],className:handleClasses&&handleClasses[dir]},handleComponent&&handleComponent[dir]?handleComponent[dir]:null):null}));return react.createElement("div",{className:handleWrapperClass,style:handleWrapperStyle},resizers)},Resizable.prototype.render=function(){var _this=this,extendsProps=Object.keys(this.props).reduce((function(acc,key){return-1!==definedProps.indexOf(key)||(acc[key]=_this.props[key]),acc}),{}),style=lib_assign(lib_assign(lib_assign({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(style.flexBasis=this.state.flexBasis);var Wrapper=this.props.as||"div";return react.createElement(Wrapper,lib_assign({ref:this.ref,style:style,className:this.props.className},extendsProps),this.state.isResizing&&react.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},Resizable.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},Resizable}(react.PureComponent)}}]);
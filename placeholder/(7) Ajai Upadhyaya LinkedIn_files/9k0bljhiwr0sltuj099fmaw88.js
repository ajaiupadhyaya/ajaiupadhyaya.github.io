define.alias("@glimmer/component/-private/ember-component-manager","msg-reactions/component-managers/glimmer")
define.alias("artdeco-button/components/artdeco-button","msg-reactions/components/artdeco-button")
define.alias("artdeco-modal/components/artdeco-confirmation-dialog","msg-reactions/components/artdeco-confirmation-dialog")
define.alias("artdeco-dropdown/components/artdeco-dropdown-content","msg-reactions/components/artdeco-dropdown-content")
define.alias("artdeco-dropdown/components/artdeco-dropdown-header","msg-reactions/components/artdeco-dropdown-header")
define.alias("artdeco-dropdown/components/artdeco-dropdown-item","msg-reactions/components/artdeco-dropdown-item")
define.alias("artdeco-dropdown/components/artdeco-dropdown-trigger","msg-reactions/components/artdeco-dropdown-trigger")
define.alias("artdeco-dropdown/components/artdeco-dropdown","msg-reactions/components/artdeco-dropdown")
define.alias("artdeco-hoverables/components/artdeco-hoverable-content","msg-reactions/components/artdeco-hoverable-content")
define.alias("artdeco-hoverables/components/artdeco-hoverable-trigger","msg-reactions/components/artdeco-hoverable-trigger")
define.alias("artdeco-loader/components/artdeco-loader","msg-reactions/components/artdeco-loader")
define.alias("artdeco-modal/components/container","msg-reactions/components/artdeco-modal-container")
define.alias("artdeco-modal/components/artdeco-modal-content","msg-reactions/components/artdeco-modal-content")
define.alias("artdeco-modal/components/artdeco-modal-footer","msg-reactions/components/artdeco-modal-footer")
define.alias("artdeco-modal/components/artdeco-modal-header","msg-reactions/components/artdeco-modal-header")
define.alias("artdeco-modal/components/artdeco-modal","msg-reactions/components/artdeco-modal")
define.alias("artdeco-notification-badge/components/artdeco-notification-badge","msg-reactions/components/artdeco-notification-badge")
define.alias("artdeco-toast/components/artdeco-toast-item","msg-reactions/components/artdeco-toast-item")
define.alias("artdeco-toast/components/artdeco-toasts","msg-reactions/components/artdeco-toasts")
define.alias("ember-vector-images/components/custom-image","msg-reactions/components/custom-image")
define.alias("ember-wormhole/components/ember-wormhole","msg-reactions/components/ember-wormhole")
define("msg-reactions/components/emoji/emoji-i18n",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,i,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const a=(0,i.createTemplateFactory)({id:"becpl/Hc",block:'[[[1,"\\n"],[1,"\\n"]],[],false,[]]',moduleName:"msg-reactions/components/emoji/emoji-i18n.hbs",isStrictMode:!1})
var o=(0,t.setComponentTemplate)(a,(0,r.default)())
e.default=o}))
define("msg-reactions/components/emoji/promoted-reactions-list-presenter",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/component","@ember/template-factory","@ember/debug","@ember/object","@ember/service","@glimmer/tracking","@glimmer/component","emoji-picker/utils/emojis/emojis-popular","emoji-picker/helpers/emoji-skintone-modifier","msg-shared/utils/constants"],(function(e,t,i,r,a,o,n,s,l,c,m,d,p,u,g){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var h,f,y,b,v,j,_,k,w,S,R,N
const D=(0,n.createTemplateFactory)({id:"X+DPrqtj",block:'[[[10,"ul"],[14,0,"emoji-popular-list__container"],[14,"role","menu"],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,0,["emojisWithSkintone"]]],null]],null],null,[[[1,"    "],[10,"li"],[12],[1,"\\n"],[1,"      "],[11,0],[16,"aria-label",[28,[37,2],["i18n_react_a11y","msg-reactions/components/emoji/promoted-reactions-list-presenter"],[["emoji"],[[30,1,["shortName"]]]]]],[24,0,"emoji-popular-list__item"],[16,"onblur",[30,3]],[16,"onfocus",[28,[37,3],[[30,4],true],null]],[24,"tabindex","0"],[24,"role","menuitem"],[16,"title",[30,1,["shortName"]]],[4,[38,4],["click",[28,[37,3],[[30,0,["handlePopularEmojiSelect"]],[30,1,["unicode"]],[30,2]],null]],null],[4,[38,4],["keyup",[28,[37,3],[[30,0,["handlePopularEmojiSelect"]],[30,1,["unicode"]],[30,2]],null]],null],[12],[1,"\\n        "],[10,1],[14,0,"emoji-popular-list__item-emoji"],[12],[1,"\\n          "],[1,[30,1,["unicode"]]],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[1,2]],null],[1,"\\n  "],[10,"li"],[12],[1,"\\n    "],[8,[39,5],null,[["@handleEmojiSelect","@hoverableIdPrefix","@hoverableOutletId","@onTriggerClick","@onTriggerBlur","@onHoverableShow","@onHoverableHide","@isCircleTrigger","@size","@trackingClosePickerString","@trackingOpenPickerString","@trackingSelectEmojiString","@trackingSelectSearchedEmojiString","@triggerClasses","@triggerData"],[[30,0,["addReactionToMessageEvent"]],[52,[30,5],"msg_overlay_hover_reaction","msg_pillar_hover_reaction"],[52,[30,5],"msg-overlay__emoji-hoverable-outlet"],[30,0,["onTriggerClick"]],[30,0,["handleEmojiTriggerBlur"]],[30,6],[30,0,["onActionMenuEmojiPickerClose"]],false,1,[52,[30,5],"overlay.close_reactionpicker_frompromotedmenu","close_reactionpicker_frompromotedmenu"],[52,[30,5],"overlay.open_reactionpicker_frompromotedmenu","open_reactionpicker_frompromotedmenu"],[52,[30,5],"overlay.select_emoji_frompromotedmenu","select_emoji_frompromotedmenu"],[52,[30,5],"overlay.select_searched_emoji_frompromotedmenu","select_searched_emoji_frompromotedmenu"],"msg-reactions__entry-point msg-reactions-action-menu__entry-point m0 p0",[30,0,["triggerData"]]]],null],[1,"\\n  "],[13],[1,"\\n"],[13]],["emoji","index","@hideAllActionMenus","@setMessageFocusState","@isOverlay","@onEmojiHoverableShow"],false,["each","-track-array","t","fn","on","emoji-picker@emoji-hoverable","if"]]',moduleName:"msg-reactions/components/emoji/promoted-reactions-list-presenter.hbs",isStrictMode:!1}),{KEYCODES:T}=g.default
let E=(h=(0,c.inject)("i18n"),f=(0,c.inject)("msg-data@data-manager"),y=(0,c.inject)("msg-shared@emoji-skintone"),b=(0,c.inject)("tracking"),v=(0,c.inject)("persistent-toast-manager@persistent-toast-manager"),j=class extends d.default{get emojisWithSkintone(){return this.emojis.map((e=>e.hasSkintone?{...e,unicode:(0,u.modifySingleEmojiWithSkintone)(e.unicode,this.emojiSkintoneManager.selectedSkintone)}:e))}constructor(){super(...arguments);(0,t.default)(this,"i18n",_,this);(0,t.default)(this,"msgDataManager",k,this);(0,t.default)(this,"emojiSkintoneManager",w,this);(0,t.default)(this,"tracking",S,this);(0,t.default)(this,"persistentToastManager",R,this);(0,t.default)(this,"triggerData",N,this)
this.triggerData={messageUrn:this.args.messageUrn,conversationUrn:this.args.conversationUrn,hideAllActionMenus:this.args.hideAllActionMenus}
this.emojis=this._computeTranslatedEmojis(p.default)}_computeTranslatedEmojis(e){return e.map((e=>{if(e.shortName)return e
e.shortName=this.i18n.lookupTranslation("components/msg-reactions@emoji/emoji-i18n",e.i18nNameKey)()
e.i18nKeywords&&(e.keywords=e.i18nKeywords.map((e=>this.i18n.lookupTranslation("components/msg-reactions@emoji/emoji-i18n",e)())))
return e}))}handlePopularEmojiSelect(e,t,i){if("keyup"===i.type&&i.which!==T.ENTER&&i.which!==T.SPACEBAR)return
const r=this.args.isOverlay?"overlay.add_promoted_emoji":"add_promoted_emoji"
this.tracking.fireInteractionEvent(`${r}${t+1}`)
this.msgDataManager.addReaction(this.args.messageUrn,e,this.args.conversationUrn)
"click"===i.type&&this.args.hideAllActionMenus&&this.args.hideAllActionMenus()}addReactionToMessageEvent(e){let{body:t,triggerData:i={}}=e
const{messageUrn:r,conversationUrn:a}=i
if(r){this.msgDataManager.addReaction(r,t,a)
this.onActionMenuEmojiPickerClose(i)}}onActionMenuEmojiPickerClose(e){this.args.onEmojiHoverableHide&&this.args.onEmojiHoverableHide(e)
e&&e.hideAllActionMenus&&"function"==typeof e.hideAllActionMenus&&e.hideAllActionMenus()}onTriggerClick(){this.args.hideOptionsMenu()
this.args.setMessageFocusState(!0)}handleEmojiTriggerBlur(e){if(!e)return
if(!e.relatedTarget){this.args.setMessageFocusState(!1)
return}const t=document.querySelector(".msg-s-event-listitem__message-bubble--is-focused .msg-s-event-listitem__actions-container"),i=e.relatedTarget.classList.contains("artdeco-hoverable-content--visible"),r=t&&t.contains(e.relatedTarget)
i||r||this.args.setMessageFocusState(!1)}_showMaxReactionNumberToastMessage(){const e=this.i18n.lookupTranslation("components/msg-reactions@emoji/msg-reactions","i18n_reached_maximum_number_of_reactions")()
this.persistentToastManager.notice({message:e})}},_=(0,r.default)(j.prototype,"i18n",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=(0,r.default)(j.prototype,"msgDataManager",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=(0,r.default)(j.prototype,"emojiSkintoneManager",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=(0,r.default)(j.prototype,"tracking",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=(0,r.default)(j.prototype,"persistentToastManager",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=(0,r.default)(j.prototype,"triggerData",[m.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,r.default)(j.prototype,"handlePopularEmojiSelect",[l.action],Object.getOwnPropertyDescriptor(j.prototype,"handlePopularEmojiSelect"),j.prototype),(0,r.default)(j.prototype,"addReactionToMessageEvent",[l.action],Object.getOwnPropertyDescriptor(j.prototype,"addReactionToMessageEvent"),j.prototype),(0,r.default)(j.prototype,"onActionMenuEmojiPickerClose",[l.action],Object.getOwnPropertyDescriptor(j.prototype,"onActionMenuEmojiPickerClose"),j.prototype),(0,r.default)(j.prototype,"onTriggerClick",[l.action],Object.getOwnPropertyDescriptor(j.prototype,"onTriggerClick"),j.prototype),(0,r.default)(j.prototype,"handleEmojiTriggerBlur",[l.action],Object.getOwnPropertyDescriptor(j.prototype,"handleEmojiTriggerBlur"),j.prototype),j)
e.default=E;(0,o.setComponentTemplate)(D,E)}))
define("msg-reactions/components/emoji/reaction-summary-presenter",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/component","@ember/template-factory","@ember/destroyable","@ember/object","@ember/service","ember-batcher","@glimmer/component","@glimmer/tracking","global-utils/utils/is-browser","ember-lifeline","emoji-picker/utils/emojis","msg-shared/utils/constants","emoji-picker/helpers/emoji-skintone-modifier"],(function(e,t,i,r,a,o,n,s,l,c,m,d,p,u,g,h,f,y){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var b,v,j,_,k,w,S,R,N,D,T,E,M,P,O,z,x,C,U,I
const A=(0,n.createTemplateFactory)({id:"FdTDXltD",block:'[[[41,[30,1,["reactionSummaryItems","length"]],[[[1,"  "],[11,"ul"],[24,0,"msg-reactions-reaction-summary-presenter__container"],[4,[38,1],[[28,[37,2],[[30,0],"reactionListEl"],null]],null],[12],[1,"\\n"],[42,[28,[37,4],[[28,[37,4],[[30,1,["reactionSummaryItems"]]],null]],null],null,[[[1,"      "],[10,"li"],[14,0,"msg-reactions-reaction-summary-presenter__pill-container"],[12],[1,"\\n        "],[11,"button"],[16,"aria-pressed",[52,[30,2,["viewerReacted"]],"true","false"]],[24,0,"m0"],[16,"data-reaction-id",[30,2,["emoji"]]],[24,4,"button"],[4,[38,5],["click",[28,[37,6],[[30,0,["toggleExistingReaction"]],[30,2]],null]],null],[4,[38,5],["mouseenter",[28,[37,6],[[30,0,["showReactors"]],[30,2]],null]],null],[4,[38,5],["focus",[28,[37,6],[[30,0,["showReactors"]],[30,2]],null]],null],[4,[38,5],["mouseleave",[28,[37,6],[[30,0,["stopShowingReactors"]],[30,2]],null]],null],[4,[38,5],["blur",[28,[37,6],[[30,0,["stopShowingReactors"]],[30,2]],null]],null],[4,[38,5],["keyup",[28,[37,6],[[30,0,["onReactorsKeyUp"]],[30,2]],null]],null],[12],[1,"\\n          "],[10,0],[15,0,[29,["msg-reactions-reaction-summary-presenter__pill",[52,[30,2,["viewerReacted"]]," msg-reactions-reaction-summary-presenter__pill--viewer-reacted"]]]],[12],[1,"\\n            "],[10,1],[14,0,"a11y-text"],[12],[1,"\\n"],[41,[30,2,["viewerReacted"]],[[[1,"                "],[1,[28,[35,7],["i18n_a11y_unreact_text","msg-reactions/components/emoji/reaction-summary-presenter"],null]],[1,"\\n"]],[]],[[[1,"                "],[1,[28,[35,7],["i18n_a11y_react_text","msg-reactions/components/emoji/reaction-summary-presenter"],null]],[1,"\\n"]],[]]],[1,"            "],[13],[1,"\\n            "],[10,1],[14,0,"msg-reactions-reaction-summary-presenter__pill-emoji"],[12],[1,"\\n              "],[1,[30,2,["emoji"]]],[1,"\\n            "],[13],[1,"\\n            "],[10,1],[14,0,"msg-reactions-reaction-summary-presenter__pill-emoji-count-container t-mono"],[12],[1,"\\n              "],[10,1],[14,0,"emoji-count"],[12],[1,[30,2,["count"]]],[13],[1,"\\n            "],[13],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n\\n"],[41,[30,0,["reactionBeingViewed"]],[[[1,"          "],[8,[39,8],null,[["@to"],[[52,[30,3],"msg-overlay__reactor-list-outlet","msg-pillar__reactor-list-outlet"]]],[["default"],[[[[1,"\\n            "],[10,0],[14,0,"msg-reactions-reaction-summary-presenter__reactors-list-container t-14 t-white artdeco-card"],[15,5,[30,0,["reactorListStyle"]]],[12],[1,"\\n"],[41,[28,[37,9],[[30,0,["displayedReactorNames","length"]],5],null],[[[1,"                "],[1,[28,[35,7],["i18n_reactors_list_full_names_lte_5","msg-reactions/components/emoji/reaction-summary-presenter"],[["reactorNames","emojiName"],[[30,0,["displayedReactorNames"]],[30,0,["emojiI18nName"]]]]]],[1,"\\n"]],[]],[[[1,"                "],[1,[28,[35,7],["i18n_reactors_list_full_names_gt_5","msg-reactions/components/emoji/reaction-summary-presenter"],[["name1","name2","name3","name4","othersCount","emojiName"],[[28,[37,10],[[30,0,["displayedReactorNames"]],"0"],null],[28,[37,10],[[30,0,["displayedReactorNames"]],"1"],null],[28,[37,10],[[30,0,["displayedReactorNames"]],"2"],null],[28,[37,10],[[30,0,["displayedReactorNames"]],"3"],null],[28,[37,11],[[30,0,["displayedReactorNames","length"]],4],null],[30,0,["emojiI18nName"]]]]]],[1,"\\n"]],[]]],[1,"            "],[13],[1,"\\n          "]],[]]]]],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n"]],[2]],null],[1,"\\n"],[1,"    "],[10,"li"],[12],[1,"\\n      "],[8,[39,12],null,[["@handleEmojiSelect","@onHoverableShow","@onHoverableHide","@hoverableIdPrefix","@hoverableOutletId","@isCircleTrigger","@size","@trackingClosePickerString","@trackingOpenPickerString","@trackingSelectEmojiString","@trackingSelectSearchedEmojiString","@triggerClasses","@triggerData"],[[30,0,["addReactionToMessageEvent"]],[30,4],[30,5],[52,[30,3],"msg_overlay_summary_reaction","msg_pillar_summary_reaction"],[52,[30,3],"msg-overlay__emoji-hoverable-outlet"],false,1,[52,[30,3],"overlay.close_reactionpicker_frommessage","close_reactionpicker_frommessage"],[52,[30,3],"overlay.open_reactionpicker_frommessage","open_reactionpicker_frommessage"],[52,[30,3],"overlay.select_emoji_frommessage","select_emoji_frommessage"],[52,[30,3],"overlay.select_searched_emoji_frommessage","select_searched_emoji_frommessage"],"msg-reactions-reaction-summary-presenter__entry-point msg-reactions-reaction-summary-presenter__reaction-summary__entry-point m0 p0",[30,0,["triggerData"]]]],null],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],["@viewData","reaction","@isOverlay","@onEmojiHoverableShow","@onEmojiHoverableHide"],false,["if","did-insert","ember-set-helper@set","each","-track-array","on","fn","t","ember-wormhole@ember-wormhole","global-helpers@lte","get","global-helpers@sub","emoji-picker@emoji-hoverable"]]',moduleName:"msg-reactions/components/emoji/reaction-summary-presenter.hbs",isStrictMode:!1})
let H=(b=(0,c.inject)("i18n"),v=(0,c.inject)("msg-data@data-manager"),j=(0,c.inject)("authentication@authenticated-user"),_=(0,c.inject)("global-services@a11y-notification"),k=(0,c.inject)("client-sensor-web@client-sensor"),w=(0,c.inject)("jet"),S=(0,c.inject)("tracking"),R=class extends d.default{constructor(){super(...arguments);(0,t.default)(this,"i18n",N,this);(0,t.default)(this,"msgDataManager",D,this);(0,t.default)(this,"authenticatedUser",T,this);(0,t.default)(this,"a11yNotification",E,this);(0,t.default)(this,"clientSensor",M,this);(0,t.default)(this,"jet",P,this);(0,t.default)(this,"reactionBeingViewed",O,this);(0,t.default)(this,"triggerData",z,this);(0,t.default)(this,"displayedReactorNames",x,this);(0,t.default)(this,"emojiI18nName",C,this);(0,t.default)(this,"reactorListStyle",U,this);(0,i.default)(this,"delayedShowReactorTasks",{});(0,t.default)(this,"tracking",I,this)
this.triggerData={messageUrn:this.args.viewData.messageUrn,conversationUrn:this.args.viewData.conversationUrn}
this.selfDisplayName={firstName:this.i18n.lookupTranslation("components/msg-reactions@emoji/reaction-summary-presenter","i18n_you")(),isSelf:!0}
this.selfDisplayNameCapitalized={firstName:this.i18n.lookupTranslation("components/msg-reactions@emoji/reaction-summary-presenter","i18n_you_capitalized")(),isSelf:!0}}toggleExistingReaction(e,t){const{emoji:i}=e,r=this.args.isOverlay?"overlay.":"",{viewerReacted:a}=e,o=a?"remove_reaction":"add_plusone_reaction",n=e.count
u.default&&this._animateCount(t,n,a)
this.tracking.fireInteractionEvent(`${r}${o}`)
const{messageUrn:s,conversationUrn:l}=this.args.viewData
if(a){this.msgDataManager.removeReaction(s,i,l)
1===n&&this.stopShowingReactors(e)
this.displayedReactorNames&&(this.displayedReactorNames=this.displayedReactorNames.filter((e=>!e.isSelf)))}else{this.msgDataManager.addReaction(s,i,l)
this.displayedReactorNames&&(this.displayedReactorNames=[...this.displayedReactorNames,this.selfDisplayName])}}addReactionToMessageEvent(e){let{body:t,triggerData:i={}}=e
const{messageUrn:r,conversationUrn:a}=i
r&&this.msgDataManager.addReaction(r,t,a)}_animateCount(e,t,i){const r=e.currentTarget
if(r&&u.default&&!this.isDestroying){const e=r.querySelector(".msg-reactions-reaction-summary-presenter__pill-emoji-count-container"),a=document.createElement("span")
jSecure.setElementContent(a,t)
const o=document.createElement("span")
o.textContent=t+(i?-1:1)
let n=0,s=i?-14:14
const l=i?14:-14,c=i?1:-1,d=r.querySelector(".emoji-count")
d.style.visibility="hidden"
a.style.position="absolute"
a.style.left=0
a.style.top=n
o.style.position="absolute"
o.style.left=0
o.style.top=s
const p=()=>{if(n===l)(0,g.cancelTask)(this,this.origNumIntervalId)
else{n+=c
a.style.top=`${n}px`}if(0===s)(0,g.cancelTask)(this,this.newNumIntervalId)
else{s+=c
o.style.top=`${s}px`}};(0,m.mutateDOM)((()=>{e.appendChild(a)
e.appendChild(o)}))
this.origNumIntervalId=this.scheduleInterval(p,"origNumIntervalId",33);(0,g.runTask)(this,(()=>{this.isDestroying||(0,m.mutateDOM)((()=>{d.removeAttribute("style")
a.remove()
o.remove()}))}),200)}}scheduleInterval(e,t,i){return(0,g.runTask)(this,(()=>{if(!this.isDestroying){this[t]=this.scheduleInterval(e,t,i)
e.apply(this)}}),i)}showReactors(e){const{emoji:t}=e
if(this.reactionBeingViewed&&this.reactionBeingViewed.emoji===e.emoji)return
const i=(0,g.runTask)(this,(()=>{this.msgDataManager.fetchReactors(this.args.viewData.messageUrnForReactors,e,this.args.viewData.conversationUrn).then((i=>{if(!(0,s.isDestroying)(this)&&void 0!==this.delayedShowReactorTasks[t]&&i.length){const r=this.reactionListEl.querySelector(`[data-reaction-id="${t}"]`)
this.reactionBeingViewed=e
const a=r.closest(".msg-reactions-reaction-summary-presenter__pill-container").getBoundingClientRect()
this.reactorListStyle=`top:${a.top}px;left:${a.left}px;`
const o=(0,y.removeSkintoneFromEmojis)(t),{i18nNameKey:n}=h.default.find((e=>e.unicode===o))
this.emojiI18nName=n?this.i18n.lookupTranslation("components/msg-reactions@emoji/emoji-i18n",n)():t
this.displayedReactorNames=this._reactorsToReactorNamesDisplay(i)
this.a11yNotification.setTextInLiveRegion(this.i18n.lookupTranslation("components/msg-reactions@emoji/reaction-summary-presenter","i18n_a11y_reactors_full_names")([{reactorNames:this.displayedReactorNames,emojiName:this.emojiI18nName}]))
if(this.displayedReactorNames.length!==e.count){this.clientSensor.incrementMetricCounter({groupName:"messaging",metricName:"reaction-count-mismatch"})
this.jet.info(new Error("Reaction count from summary mismatches with number of reactors"),[`reactors list length: ${this.displayedReactorNames.length}`,`reaction summary count: ${e.count}`,`self reacted: ${e.viewerReacted}`])}}}))}),200)
this.delayedShowReactorTasks[t]=i}_reactorsToReactorNamesDisplay(e){const{miniProfile:t}=this.authenticatedUser,i=t.dashEntityUrn,r=e.map((e=>e.hostIdentityUrn===i?this.selfDisplayName:{firstName:e.firstName,lastName:e.lastName}));(null==r?void 0:r[0])===this.selfDisplayName&&(r[0]=this.selfDisplayNameCapitalized)
return r}stopShowingReactors(e,t){if(t&&"blur"===t.type&&!t.relatedTarget)return
const{emoji:i}=e,r=this.delayedShowReactorTasks[i]
if(r){(0,g.cancelTask)(this,r)
delete this.delayedShowReactorTasks[i]
this.reactionBeingViewed=void 0
this.displayedReactorNames=void 0}}onReactorsKeyUp(e,t){"keyup"===t.type&&t.which===f.default.KEYCODES.ESC&&this.stopShowingReactors(e)}},N=(0,r.default)(R.prototype,"i18n",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=(0,r.default)(R.prototype,"msgDataManager",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=(0,r.default)(R.prototype,"authenticatedUser",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=(0,r.default)(R.prototype,"a11yNotification",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=(0,r.default)(R.prototype,"clientSensor",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=(0,r.default)(R.prototype,"jet",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=(0,r.default)(R.prototype,"reactionBeingViewed",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=(0,r.default)(R.prototype,"triggerData",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=(0,r.default)(R.prototype,"displayedReactorNames",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=(0,r.default)(R.prototype,"emojiI18nName",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=(0,r.default)(R.prototype,"reactorListStyle",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),I=(0,r.default)(R.prototype,"tracking",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,r.default)(R.prototype,"toggleExistingReaction",[l.action],Object.getOwnPropertyDescriptor(R.prototype,"toggleExistingReaction"),R.prototype),(0,r.default)(R.prototype,"addReactionToMessageEvent",[l.action],Object.getOwnPropertyDescriptor(R.prototype,"addReactionToMessageEvent"),R.prototype),(0,r.default)(R.prototype,"showReactors",[l.action],Object.getOwnPropertyDescriptor(R.prototype,"showReactors"),R.prototype),(0,r.default)(R.prototype,"stopShowingReactors",[l.action],Object.getOwnPropertyDescriptor(R.prototype,"stopShowingReactors"),R.prototype),(0,r.default)(R.prototype,"onReactorsKeyUp",[l.action],Object.getOwnPropertyDescriptor(R.prototype,"onReactorsKeyUp"),R.prototype),R)
e.default=H;(0,o.setComponentTemplate)(A,H)}))
define.alias("ember-vector-images/components/lazy-background","msg-reactions/components/lazy-background")
define.alias("ember-vector-images/components/lazy-image","msg-reactions/components/lazy-image")
define.alias("artdeco-icons-web/components/linkedin-logo","msg-reactions/components/linkedin-logo")
define("msg-reactions/config/environment",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
let t
try{const e="msg-reactions/config/environment",i=document.querySelector('meta[name="'+e+'"]').getAttribute("content")
t=JSON.parse(unescape(i))}catch(e){t={}}var i=t
e.default=i}))
define.alias("ember-truth-helpers/helpers/and","msg-reactions/helpers/and")
define.alias("ember-holy-futuristic-template-namespacing-batman/helpers/-translate-dynamic-2","msg-reactions/helpers/ember-holy-futuristic-template-namespacing-batman-translate-dynamic-2")
define.alias("ember-truth-helpers/helpers/eq","msg-reactions/helpers/eq")
define.alias("ember-cli-pemberly-i18n/helpers/format-number","msg-reactions/helpers/format-number")
define.alias("hue-web-icons/helpers/get-asset-url","msg-reactions/helpers/get-asset-url")
define.alias("ember-truth-helpers/helpers/gt","msg-reactions/helpers/gt")
define.alias("ember-truth-helpers/helpers/gte","msg-reactions/helpers/gte")
define.alias("ember-truth-helpers/helpers/is-array","msg-reactions/helpers/is-array")
define.alias("ember-truth-helpers/helpers/is-empty","msg-reactions/helpers/is-empty")
define.alias("ember-truth-helpers/helpers/is-equal","msg-reactions/helpers/is-equal")
define.alias("artdeco-icons-web/helpers/li-icon","msg-reactions/helpers/li-icon")
define.alias("ember-async-data/helpers/load","msg-reactions/helpers/load")
define.alias("ember-truth-helpers/helpers/lt","msg-reactions/helpers/lt")
define.alias("ember-truth-helpers/helpers/lte","msg-reactions/helpers/lte")
define.alias("ember-truth-helpers/helpers/not-eq","msg-reactions/helpers/not-eq")
define.alias("ember-truth-helpers/helpers/not","msg-reactions/helpers/not")
define.alias("ember-truth-helpers/helpers/or","msg-reactions/helpers/or")
define.alias("ember-app-scheduler/helpers/route-idle","msg-reactions/helpers/route-idle")
define.alias("ember-set-helper/helpers/set","msg-reactions/helpers/set")
define.alias("ember-cli-pemberly-i18n/helpers/t","msg-reactions/helpers/t")
define.alias("ember-truth-helpers/helpers/xor","msg-reactions/helpers/xor")
define.alias("ember-uuid","msg-reactions/index")
define("msg-reactions/initializers/icons",["exports","artdeco-icons-web/src/icons","msg-reactions/config/environment"],(function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
function r(e){throw e}var a={name:"icons",initialize:function(){const{environment:e,APP:a}=i.default
let o,n
a&&({artdecoCustomSpriteUrl:o,artdecoCustomSpriteName:n}=a)
const s="test"!==e
t.default.load(s,o,n).catch(r)}}
e.default=a}))
define.alias("ember-cli-pemberly-lix/initializers/lix","msg-reactions/initializers/lix")
define.alias("ember-m3/initializers/m3-store","msg-reactions/initializers/m3-store")
define.alias("@ember/render-modifiers/modifiers/did-insert","msg-reactions/modifiers/did-insert")
define.alias("@ember/render-modifiers/modifiers/did-update","msg-reactions/modifiers/did-update")
define.alias("@ember/render-modifiers/modifiers/will-destroy","msg-reactions/modifiers/will-destroy")
define.alias("artdeco-hoverables/services/artdeco-hoverable","msg-reactions/services/artdeco-hoverable")
define.alias("artdeco-modal/services/artdeco-modal","msg-reactions/services/artdeco-modal")
define.alias("artdeco-toast/services/artdeco-toast","msg-reactions/services/artdeco-toast")
define.alias("client-sensor-web/services/client-sensor","msg-reactions/services/client-sensor")
define.alias("ember-date-service/services/date","msg-reactions/services/date")
define.alias("@linkedin/ember-restli-graphql/services/graphql","msg-reactions/services/graphql")
define.alias("@linkedin/ember-pem/services/internal-event-utils","msg-reactions/services/internal-event-utils")
define.alias("@linkedin/ember-pem/services/internal-pem-tracking","msg-reactions/services/internal-pem-tracking")
define.alias("ember-cli-pemberly-lix/services/lix","msg-reactions/services/lix")
define.alias("ember-m3/services/m3-schema-manager","msg-reactions/services/m3-schema-manager")
define.alias("@linkedin/ember-pem/services/pem-response-metadata","msg-reactions/services/pem-response-metadata")
define.alias("@linkedin/ember-pem/services/pem-tracking","msg-reactions/services/pem-tracking")
define.alias("persistent-toast-manager/services/persistent-toast-manager","msg-reactions/services/persistent-toast-manager")
define.alias("ember-cli-pemberly-m3/services/store","msg-reactions/services/store")
define.alias("@linkedin/ember-pem/services/tracer","msg-reactions/services/tracer")
define.alias("ember-async-data/tracked-async-data","msg-reactions/tracked-async-data")
define.alias("client-sensor-web/utils/helpers","msg-reactions/utils/helpers")
define("msg-reactions/utils/uuid-generator",["exports","ember-uuid/utils/uuid-generator"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})
Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return t.parse}})
Object.defineProperty(e,"unparse",{enumerable:!0,get:function(){return t.unparse}})
Object.defineProperty(e,"v1",{enumerable:!0,get:function(){return t.v1}})
Object.defineProperty(e,"v4",{enumerable:!0,get:function(){return t.v4}})}))
define.alias("ember-vector-images/utils/vector-url","msg-reactions/utils/vector-url")

//# sourceMappingURL=engine.map
define.alias("@glimmer/component/-private/ember-component-manager","msg-multisend/component-managers/glimmer")
define.alias("artdeco-button/components/artdeco-button","msg-multisend/components/artdeco-button")
define.alias("artdeco-modal/components/artdeco-confirmation-dialog","msg-multisend/components/artdeco-confirmation-dialog")
define.alias("artdeco-dropdown/components/artdeco-dropdown-content","msg-multisend/components/artdeco-dropdown-content")
define.alias("artdeco-dropdown/components/artdeco-dropdown-header","msg-multisend/components/artdeco-dropdown-header")
define.alias("artdeco-dropdown/components/artdeco-dropdown-item","msg-multisend/components/artdeco-dropdown-item")
define.alias("artdeco-dropdown/components/artdeco-dropdown-trigger","msg-multisend/components/artdeco-dropdown-trigger")
define.alias("artdeco-dropdown/components/artdeco-dropdown","msg-multisend/components/artdeco-dropdown")
define.alias("artdeco-hoverables/components/artdeco-hoverable-content","msg-multisend/components/artdeco-hoverable-content")
define.alias("artdeco-hoverables/components/artdeco-hoverable-trigger","msg-multisend/components/artdeco-hoverable-trigger")
define.alias("artdeco-inline-feedback/components/artdeco-inline-feedback","msg-multisend/components/artdeco-inline-feedback")
define.alias("artdeco-loader/components/artdeco-loader","msg-multisend/components/artdeco-loader")
define.alias("artdeco-modal/components/container","msg-multisend/components/artdeco-modal-container")
define.alias("artdeco-modal/components/artdeco-modal-content","msg-multisend/components/artdeco-modal-content")
define.alias("artdeco-modal/components/artdeco-modal-footer","msg-multisend/components/artdeco-modal-footer")
define.alias("artdeco-modal/components/artdeco-modal-header","msg-multisend/components/artdeco-modal-header")
define.alias("artdeco-modal/components/artdeco-modal","msg-multisend/components/artdeco-modal")
define.alias("artdeco-notification-badge/components/artdeco-notification-badge","msg-multisend/components/artdeco-notification-badge")
define.alias("artdeco-pill/components/artdeco-pill-choice-group","msg-multisend/components/artdeco-pill-choice-group")
define.alias("artdeco-pill/components/artdeco-pill-choice","msg-multisend/components/artdeco-pill-choice")
define.alias("artdeco-pill/components/artdeco-pill-dismiss","msg-multisend/components/artdeco-pill-dismiss")
define.alias("artdeco-pill/components/artdeco-pill-input","msg-multisend/components/artdeco-pill-input")
define.alias("artdeco-pill/components/artdeco-pill-link","msg-multisend/components/artdeco-pill-link")
define.alias("artdeco-pill/components/artdeco-pill-toggle","msg-multisend/components/artdeco-pill-toggle")
define.alias("artdeco-toast/components/artdeco-toast-item","msg-multisend/components/artdeco-toast-item")
define.alias("artdeco-toast/components/artdeco-toasts","msg-multisend/components/artdeco-toasts")
define.alias("ember-vector-images/components/custom-image","msg-multisend/components/custom-image")
define.alias("ember-wormhole/components/ember-wormhole","msg-multisend/components/ember-wormhole")
define.alias("ember-vector-images/components/lazy-background","msg-multisend/components/lazy-background")
define.alias("ember-vector-images/components/lazy-image","msg-multisend/components/lazy-image")
define.alias("artdeco-icons-web/components/linkedin-logo","msg-multisend/components/linkedin-logo")
define("msg-multisend/components/multi-send",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/component","@ember/template-factory","@ember/destroyable","@ember/object","ember","@glimmer/component","@glimmer/tracking","ember-lifeline","@ember/service","tracked-built-ins","global-helpers/helpers/name","global-utils/utils/scroll-to-element","msg-shared/utils/constants","msg-typeahead/viewdata/graphql-possible-recipient-viewdata","msg-shared/utils/view-data-helpers"],(function(e,t,n,i,s,l,r,o,a,d,c,m,u,p,h,g,f,b,y,v){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var _,S,R,T,w,k,P,M,x,D,A,O,U,C,E,z,G,j,N,F,q,I
const L=(0,r.createTemplateFactory)({id:"Xq+98rd0",block:'[[[8,[39,0],[[4,[38,2],[[30,0,["fetchSuggestedRecipients"]],[30,0,["multiSend","isMultiSendModalOpen"]]],null]],[["@isOpen","@size","@dismissModal","@modalClasses"],[[30,0,["multiSend","isMultiSendModalOpen"]],"large",[30,0,["closeMultiSend"]],[29,["msg-multisend__modal ",[52,[51,[30,0,["isSendToGroup"]]],"full-height"]]]]],[["default"],[[[[1,"\\n  "],[8,[30,1,["artdeco-modal-header"]],null,[["@classNames"],["display-flex"]],[["default"],[[[[1,"\\n"],[41,[30,0,["isSendToGroup"]],[[[1,"      "],[8,[39,4],null,[["@class","@click","@circle","@color","@icon","@type","@controlType","@tabindex"],["mr3",[30,0,["closeSendToGroup"]],true,"muted","arrow-left","tertiary","button","1"]],null],[1,"\\n      "],[10,0],[12],[1,"\\n        "],[10,2],[14,1,"multi-send-modal-send-to-group-header"],[14,0,"t-16 t-bold"],[12],[1,"\\n          "],[1,[28,[35,5],["i18n_send_to_group_title","msg-multisend/components/multi-send"],[["names"],[[30,0,["selectedRecipientNames"]]]]]],[1,"\\n        "],[13],[1,"\\n        "],[10,2],[14,0,"t-12 t-black--light"],[12],[1,"\\n          "],[1,[28,[35,5],["i18n_send_to_group_subtitle","msg-multisend/components/multi-send"],[["numRecipients"],[[28,[37,6],[[30,0,["selectedRecipients","length"]],1],null]]]]],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],[[[1,"      "],[10,"h2"],[14,1,"multi-send-modal-header"],[12],[1,"\\n"],[41,[30,0,["postAuthor"]],[[[1,"          "],[1,[28,[35,5],["i18n_sendPost","msg-multisend/components/multi-send"],[["postAuthor"],[[30,0,["postAuthor"]]]]]],[1,"\\n"]],[]],[[[1,"          "],[1,[28,[35,5],["i18n_sendPostNoAuthor","msg-multisend/components/multi-send"],null]],[1,"\\n"]],[]]],[1,"      "],[13],[1,"\\n"]],[]]],[1,"  "]],[]]]]],[1,"\\n  "],[8,[30,1,["artdeco-modal-content"]],[[16,0,[29,["msg-multisend__modal-content full-height\\n      ",[52,[30,0,["isSendToGroup"]],"hidden"]]]]],null,[["default"],[[[[1,"\\n    "],[10,0],[14,0,"relative"],[12],[1,"\\n      "],[10,"label"],[14,"for","multisend-typeahead"],[14,0,"visually-hidden"],[12],[1,"\\n        "],[1,[28,[35,5],["i18n_typeahead_label","msg-multisend/components/multi-send"],null]],[1,"\\n      "],[13],[1,"\\n      "],[8,[39,7],[[24,1,"multisend-typeahead"],[24,0,"mb4"],[16,"placeholder",[28,[37,5],["i18n_typeahead_placeholder","msg-multisend/components/multi-send"],null]],[24,"role","combobox"],[24,"aria-controls","multisend-recipient-results-container"],[24,"aria-expanded","true"],[4,[38,8],["input",[30,0,["debounceFetchRecipients"]]],null],[4,[38,9],null,[["when"],[[30,0,["tyahDefaultFocusLixEnabled"]]]]]],null,null],[1,"\\n"],[41,[30,0,["searchTerm"]],[[[1,"        "],[11,"button"],[24,0,"msg-multisend__typeahead-cancel-icon"],[24,4,"button"],[4,[38,8],["click",[30,0,["clearTypeaheadSearch"]]],null],[12],[1,"\\n          "],[8,[39,10],null,[["@type","@size","@name"],["system","small","close"]],null],[1,"\\n        "],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n    "],[10,0],[14,1,"multisend-recipient-results-container"],[12],[1,"\\n"],[41,[30,0,["searchTerm"]],[[[41,[30,0,["isLoading"]],[[[1,"          "],[8,[39,11],null,[["@size","@a11yText"],["small",[28,[37,5],["i18n_loading","msg-multisend/components/multi-send"],null]]],null],[1,"\\n"]],[]],[[[41,[30,0,["typeaheadRecipients","length"]],[[[42,[28,[37,13],[[28,[37,13],[[30,0,["typeaheadRecipients"]]],null]],null],null,[[[1,"              "],[8,[39,14],null,[["@index","@viewData","@selectPersonResult","@isSelectedRecipient","@isMultiSend"],[[30,3],[30,2],[30,0,["selectPossibleRecipient"]],[28,[37,15],[[30,0,["selectedRecipientUrns"]],[30,2,["entityUrn"]]],null],true]],null],[1,"\\n"]],[2,3]],null]],[]],[[[1,"            "],[8,[39,16],null,[["@message"],[[28,[37,5],["i18n_no_results","msg-multisend/components/multi-send"],null]]],null],[1,"\\n"]],[]]]],[]]]],[]],[[[41,[30,0,["selectedRecipients","length"]],[[[1,"          "],[10,0],[14,0,"mb2"],[12],[1,"\\n            "],[10,0],[14,0,"display-flex justify-space-between"],[12],[1,"\\n              "],[10,2],[14,0,"t-14 t-black t-normal"],[12],[1,"\\n                "],[1,[28,[35,5],["i18n_selected","msg-multisend/components/multi-send"],null]],[1,"\\n              "],[13],[1,"\\n              "],[8,[39,4],[[16,"aria-label",[28,[37,5],["i18n_create_group","msg-multisend/components/multi-send"],null]],[4,[38,17],["create_group"],null]],[["@click","@type","@size","@text","@disabled"],[[30,0,["openSendToGroup"]],"tertiary",1,[28,[37,5],["i18n_create_group","msg-multisend/components/multi-send"],null],[30,0,["disableSendToGroup"]]]],null],[1,"\\n            "],[13],[1,"\\n"],[42,[28,[37,13],[[28,[37,13],[[30,0,["selectedRecipients"]]],null]],null],null,[[[1,"              "],[8,[39,14],null,[["@index","@viewData","@selectPersonResult","@isSelectedRecipient","@isMultiSend","@customControlName"],[[30,5],[30,4],[30,0,["selectPossibleRecipient"]],true,true,"deselect"]],null],[1,"\\n"]],[4,5]],null],[1,"          "],[13],[1,"\\n"]],[]],null],[41,[28,[37,18],[[30,0,["isSendFeedPropsEnabled"]],[30,0,["sharedConnectionUrn"]]],null],[[[42,[28,[37,13],[[28,[37,13],[[30,0,["possibleRecipientsToShow"]]],null]],null],null,[[[41,[30,6,["possibleRecipients"]],[[[1,"              "],[10,2],[14,0,"t-14 t-black t-normal"],[12],[1,"\\n                "],[1,[30,6,["title"]]],[1,"\\n              "],[13],[1,"\\n"],[42,[28,[37,13],[[28,[37,13],[[30,6,["possibleRecipients"]]],null]],null],null,[[[1,"                "],[8,[39,14],null,[["@index","@viewData","@selectPersonResult","@isSelectedRecipient","@isMultiSend","@customControlName"],[[30,9],[30,8],[30,0,["selectPossibleRecipient"]],false,true,"suggested_select"]],null],[1,"\\n"]],[8,9]],null]],[]],null]],[6,7]],null]],[]],[[[1,"          "],[10,2],[14,0,"t-14 t-black t-normal"],[12],[1,"\\n            "],[1,[28,[35,5],["i18n_suggested","msg-multisend/components/multi-send"],null]],[1,"\\n          "],[13],[1,"\\n"],[42,[28,[37,13],[[28,[37,13],[[30,0,["possibleRecipientsToShow"]]],null]],null],null,[[[1,"            "],[8,[39,14],null,[["@index","@viewData","@selectPersonResult","@isSelectedRecipient","@isMultiSend","@customControlName"],[[30,11],[30,10],[30,0,["selectPossibleRecipient"]],false,true,"suggested_select"]],null],[1,"\\n"]],[10,11]],null]],[]]]],[]]],[1,"    "],[13],[1,"\\n  "]],[]]]]],[1,"\\n"],[41,[30,0,["showComposeFooter"]],[[[1,"    "],[8,[30,1,["artdeco-modal-footer"]],null,null,[["default"],[[[[1,"\\n      "],[8,[39,19],null,[["@isMessagingExternalSendFlow","@overridePlaceholder","@submitMessage","@update","@externallyValid","@composeIsFullyExpanded"],[true,[28,[37,5],["i18n_write_a_message","msg-multisend/components/multi-send"],null],[30,0,["submitMessage"]],[30,0,["multiSend","update"]],[30,0,["enableMultiSend"]],[30,0,["isSendToGroup"]]]],[["default"],[[[[1,"\\n        "],[10,0],[15,0,[29,["msg-multisend__msg-form\\n            ",[52,[30,0,["hideMessageContainer"]]," hidden"]]]],[12],[1,"\\n          "],[8,[30,12,["messageContentContainerPresenter"]],[[24,0,"msg-form__message-texteditor relative flex-grow-1 display-flex"]],null,null],[1,"\\n          "],[10,0],[14,0,"msg-form__multisend-preview t-12 t-black--light t-normal"],[12],[1,"\\n            "],[8,[39,10],[[24,0,"msg-multisend__attachment-icon"]],[["@type","@size","@name"],["system","small","newspaper"]],null],[1,[30,0,["attachmentPreviewLabel"]]],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"align-items-center msg-multisend__send-controls"],[12],[1,"\\n          "],[8,[30,12,["sendControlsPresenter"]],[[4,[38,17],[[52,[30,0,["isSendToGroup"]],"send_as_group","send"]],null]],[["@buttonClass","@customSendButtonText"],["artdeco-button artdeco-button--primary msg-multisend__send-button",[52,[30,0,["isSendToGroup"]],[28,[37,5],["i18n_send_message_as_group","msg-multisend/components/multi-send"],null],[52,[28,[37,20],[[30,0,["selectedRecipients","length"]],1],null],[28,[37,5],["i18n_send_message_separately","msg-multisend/components/multi-send"],null],[28,[37,5],["i18n_send_message","msg-multisend/components/multi-send"],null]]]]],null],[1,"\\n        "],[13],[1,"\\n      "]],[12]]]]],[1,"\\n    "]],[]]]]],[1,"\\n"]],[]],null]],[1]]]]]],["modal","recipient","index","recipient","index","section","index","recipient","recipientIndex","recipient","index","components"],false,["artdeco-modal@artdeco-modal","unless","did-update","if","artdeco-button@artdeco-button","t","global-helpers@sum","input","on","global-modifiers@focus","hue-web-icons@icon","artdeco-loader@artdeco-loader","each","-track-array","msg-typeahead@possible-recipient-presenter","global-helpers@includes","artdeco-inline-feedback@artdeco-inline-feedback","ember-cli-pemberly-tracking@track-interaction","global-helpers@and","msg-ui@msg-form/base-form-feature","global-helpers@gt"]]',moduleName:"msg-multisend/components/multi-send.hbs",isStrictMode:!1}),{GROUP_THREADS:H}=b.MESSAGE_TYPEAHEAD_RESULT_TYPES
let B=(_=(0,p.inject)("message-button@multi-send"),S=(0,p.inject)("msg-data@data-manager"),R=(0,p.inject)("i18n"),T=(0,p.inject)("persistent-toast-manager@persistent-toast-manager"),w=(0,p.inject)("formatter"),k=(0,p.inject)("tracking"),P=(0,p.inject)("lix"),M=class extends c.default{get tyahDefaultFocusLixEnabled(){return"tyah_enabled"===this.lix.getTreatment("voyager.web.messaging-multi-send-from-feed")}get postAuthor(){var e,t,n,i,s,l,r
return(null===(e=this.multiSend.update)||void 0===e||null===(t=e.actor)||void 0===t||null===(n=t.name)||void 0===n?void 0:n.text)||(null===(i=this.multiSend.update)||void 0===i||null===(s=i.content)||void 0===s||null===(l=s.actor)||void 0===l||null===(r=l.name)||void 0===r?void 0:r.text)}get selectedRecipientNames(){return[...this.selectedRecipients.map((e=>(0,g.getName)(e.profileAPIModel))),{firstName:this.i18n.lookupTranslation("components/msg-multisend@multi-send","i18n_you")(),isSelf:!0}]}get postAuthorProfileUrn(){var e,t,n,i,s,l,r,o,a,d,c,m,u,p
const{update:h}=this.multiSend,g=(null==h||null===(e=h.content)||void 0===e?void 0:e.actor)||(null==h||null===(t=h.content)||void 0===t||null===(n=t.announcementComponent)||void 0===n?void 0:n.actor)||(null==h?void 0:h.actor),f=(null==g?void 0:g.name)||(null==g?void 0:g.image)
return(null==f||null===(i=f.attributes)||void 0===i||null===(s=i[0])||void 0===s||null===(l=s.miniProfile)||void 0===l?void 0:l.entityUrn)||(null==f||null===(r=f.attributesV2)||void 0===r||null===(o=r[0])||void 0===o||null===(a=o.detailData)||void 0===a||null===(d=a.profileFullName)||void 0===d?void 0:d.entityUrn)||(null==f||null===(c=f.attributes)||void 0===c||null===(m=c[0])||void 0===m||null===(u=m.detailData)||void 0===u||null===(p=u.nonEntityProfilePicture)||void 0===p?void 0:p.profileUrn)}get possibleRecipientsToShow(){return this.isSendFeedPropsEnabled&&this.sharedConnectionUrn?this.possibleRecipientsAsSections.map((e=>({title:e.title,possibleRecipients:e.possibleRecipients.filter((e=>!this.selectedRecipients.includes(e)))}))):this.possibleRecipients.filter((e=>!this.selectedRecipients.includes(e)))}get selectedRecipientUrns(){return this.selectedRecipients.map((e=>e.entityUrn))}get messagePermission(){var e,t,n
return null===(e=this.multiSend.update)||void 0===e||null===(t=e.socialDetail)||void 0===t||null===(n=t.socialPermissions)||void 0===n?void 0:n.messagePermission}get isSendFeedPropsEnabled(){return this.lix.getTreatmentIsEnabled("voyager.web.props-send-feed-props")}get sharedConnectionUrn(){return"MUTUAL_CONNECTIONS"===this.messagePermission?this.postAuthorProfileUrn:null}get disableSendToGroup(){const e=this.selectedRecipients.filter((e=>e.recipientType===H))
return this.selectedRecipients.length<2||e.length}constructor(){super(...arguments);(0,t.default)(this,"multiSend",x,this);(0,t.default)(this,"msgDataManager",D,this);(0,t.default)(this,"i18n",A,this);(0,t.default)(this,"persistentToastManager",O,this);(0,t.default)(this,"formatter",U,this);(0,t.default)(this,"tracking",C,this);(0,t.default)(this,"lix",E,this);(0,t.default)(this,"searchTerm",z,this);(0,t.default)(this,"isLoading",G,this);(0,t.default)(this,"isSendToGroup",j,this);(0,t.default)(this,"possibleRecipients",N,this);(0,t.default)(this,"selectedRecipients",F,this);(0,t.default)(this,"typeaheadRecipients",q,this);(0,t.default)(this,"possibleRecipientsAsSections",I,this)
this.fetchSuggestedRecipients()}selectPossibleRecipient(e,t){t.preventDefault()
const n=this.selectedRecipients.findIndex((t=>t.entityUrn===e.entityUrn))
if(-1!==n)this._removeRecipient(n)
else{if(10===this.selectedRecipients.length){const e=this.i18n.lookupTranslation("components/msg-multisend@multi-send","i18n_maximum_selected_recipients")([{maxRecipients:10}])
this.persistentToastManager.notice({message:e})
return}this._addRecipient(e)}const i=document.querySelector("#multisend-typeahead");(0,f.default)(i)}debounceFetchRecipients(e){let{target:{value:t}}=e
this.searchTerm=t
this.isLoading=!0
if(this.searchTerm){this.tracking.fireInteractionEvent("begin_recipient_search")
if(d.default.testing)this._fetchTypeaheadRecipients(this.searchTerm)
else{const e=200;(0,u.debounceTask)(this,"_fetchTypeaheadRecipients",this.searchTerm,e)}}else this.typeaheadRecipients=new h.TrackedArray}clearTypeaheadSearch(){const e=document.querySelector("#multisend-typeahead")
e&&(e.value="")
this.typeaheadRecipients=new h.TrackedArray
this.searchTerm=""}closeMultiSend(){this.isSendToGroup=!1
this.selectedRecipients=new h.TrackedArray
this.clearTypeaheadSearch()
this.multiSend.closeMultiSend()}_removeRecipient(e){this.selectedRecipients.splice(e,1)
this.clearTypeaheadSearch()}_addRecipient(e){this.selectedRecipients.unshift(e)
this.clearTypeaheadSearch()}get hideMessageContainer(){return!this.selectedRecipients.length}get showComposeFooter(){return!this.searchTerm}get attachmentPreviewLabel(){var e
const t=this.postAuthor,n=null===(e=this.multiSend.update)||void 0===e?void 0:e.content
if(t)return this.i18n.lookupTranslation("components/msg-multisend@multi-send","i18n_postByAuthor")([{postAuthor:t}])
if(n){var i
return null===(i=n.title)||void 0===i?void 0:i.text}return this.i18n.lookupTranslation("components/msg-multisend@multi-send","i18n_content")}get enableMultiSend(){return!!this.selectedRecipients.length}openSendToGroup(){this.tracking.firePageViewEvent("flagship3_messaging_multisend_group")
this.isSendToGroup=!0}closeSendToGroup(){this.isSendToGroup=!1}fetchSuggestedRecipients(){this.multiSend.isMultiSendModalOpen&&this.msgDataManager.fetchSuggestedRecipients([],this.sharedConnectionUrn,this.isSendFeedPropsEnabled).then((e=>{(0,o.isDestroying)(this)||(this.sharedConnectionUrn&&this.isSendFeedPropsEnabled&&e?this.possibleRecipientsAsSections=e.map((e=>{const{title:t,suggestedRecipients:n}=e
return{title:t,possibleRecipients:n.map((e=>new y.default({possibleRecipient:e,formatter:this.formatter})))}})):e&&(this.possibleRecipients=e.map((e=>new y.default({possibleRecipient:e,formatter:this.formatter})))))}))}_fetchTypeaheadRecipients(e){const t=["CONNECTIONS"]
let n=null
"MUTUAL_CONNECTIONS"===this.messagePermission?n=this.postAuthorProfileUrn:t.push("GROUP_THREADS")
this.msgDataManager.fetchTypeaheadResults(e,t,n).then((e=>{if(!(0,o.isDestroying)(this)&&e){this.typeaheadRecipients=e.map((e=>new y.default({possibleRecipient:e,formatter:this.formatter})))
this.isLoading=!1}}))}submitMessage(e){var t,n
e.attributedBody.text&&this.tracking.fireInteractionEvent("compose_custom")
const i={renderContent:[]}
i.renderContent.push({hostUrnData:{hostUrn:(null===(t=this.multiSend.update)||void 0===t?void 0:t.dashEntityUrn)||(null===(n=this.multiSend.update)||void 0===n?void 0:n.entityUrn),type:"FEED_UPDATE"}})
return this.isSendToGroup?this._sendToGroup(e,i):this._sendSeparately(e,i)}_sendToGroup(e,t){return this.msgDataManager.getMailbox().then((e=>e.createDraftConversation(this.selectedRecipients.map((e=>(0,v.getProfileDashUrn)(e.profileAPIModel)))))).then((n=>{this.isDestroying||this._sendMessageAndHandleResponse(n.clientId,e.attributedBody,t)}))}_sendSeparately(e,t){const n=[],i=[],s=[]
this.selectedRecipients.forEach((e=>{e.recipientType===H?i.push(e.groupThreadConversationId):n.push(e.entityUrn)}))
n.forEach((n=>{this.msgDataManager.fetchLatestConversationByRecipients([n]).then((n=>{if(!(0,o.isDestroying)(this)&&n){const i=n.entityUrn??n.clientId
s.push(this._sendMessageAndHandleResponse(i,e.attributedBody,t))}}))}))
i.forEach((n=>{this.msgDataManager.fetchConversation(n).then((n=>{(0,o.isDestroying)(this)||n.entityUrn&&s.push(this._sendMessageAndHandleResponse(n.entityUrn,e.attributedBody,t))}))}))
return Promise.all(s)}_sendMessageAndHandleResponse(e,t,n){return this.msgDataManager.sendMessage(e,t,n,!0).then((e=>{let{conversation:t}=e
if((0,o.isDestroying)(this))return
const{entityUrn:n}=t
return this.msgDataManager.fetchMailboxConversation(n)})).then((e=>{if(!(0,o.isDestroying)(this))return e?this._onMessageSendSuccess(e):e})).catch((e=>{if((0,o.isDestroying)(this))throw e
this._onMessageSendFail(e)
throw e})).finally((()=>{(0,o.isDestroying)(this)||this.closeMultiSend()}))}_onMessageSendFail(e){const t=this.i18n.lookupTranslation("components/msg-multisend@multi-send","i18n_send_failed_message")
this.persistentToastManager.error({message:t})
return e}_onMessageSendSuccess(e){var t,n
const i=this.i18n.lookupTranslation("components/msg-multisend@multi-send","i18n_send_success_message")
null===(t=(n=this.multiSend).afterSend)||void 0===t||t.call(n)
this.persistentToastManager.success({message:i})
return e}},x=(0,i.default)(M.prototype,"multiSend",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=(0,i.default)(M.prototype,"msgDataManager",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=(0,i.default)(M.prototype,"i18n",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=(0,i.default)(M.prototype,"persistentToastManager",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=(0,i.default)(M.prototype,"formatter",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=(0,i.default)(M.prototype,"tracking",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=(0,i.default)(M.prototype,"lix",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=(0,i.default)(M.prototype,"searchTerm",[m.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),G=(0,i.default)(M.prototype,"isLoading",[m.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=(0,i.default)(M.prototype,"isSendToGroup",[m.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=(0,i.default)(M.prototype,"possibleRecipients",[m.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new h.TrackedArray}}),F=(0,i.default)(M.prototype,"selectedRecipients",[m.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new h.TrackedArray}}),q=(0,i.default)(M.prototype,"typeaheadRecipients",[m.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new h.TrackedArray}}),I=(0,i.default)(M.prototype,"possibleRecipientsAsSections",[m.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new h.TrackedArray}}),(0,i.default)(M.prototype,"selectPossibleRecipient",[a.action],Object.getOwnPropertyDescriptor(M.prototype,"selectPossibleRecipient"),M.prototype),(0,i.default)(M.prototype,"debounceFetchRecipients",[a.action],Object.getOwnPropertyDescriptor(M.prototype,"debounceFetchRecipients"),M.prototype),(0,i.default)(M.prototype,"clearTypeaheadSearch",[a.action],Object.getOwnPropertyDescriptor(M.prototype,"clearTypeaheadSearch"),M.prototype),(0,i.default)(M.prototype,"closeMultiSend",[a.action],Object.getOwnPropertyDescriptor(M.prototype,"closeMultiSend"),M.prototype),(0,i.default)(M.prototype,"openSendToGroup",[a.action],Object.getOwnPropertyDescriptor(M.prototype,"openSendToGroup"),M.prototype),(0,i.default)(M.prototype,"closeSendToGroup",[a.action],Object.getOwnPropertyDescriptor(M.prototype,"closeSendToGroup"),M.prototype),(0,i.default)(M.prototype,"fetchSuggestedRecipients",[a.action],Object.getOwnPropertyDescriptor(M.prototype,"fetchSuggestedRecipients"),M.prototype),(0,i.default)(M.prototype,"submitMessage",[a.action],Object.getOwnPropertyDescriptor(M.prototype,"submitMessage"),M.prototype),M)
e.default=B;(0,l.setComponentTemplate)(L,B)}))
define("msg-multisend/config/environment",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
let t
try{const e="msg-multisend/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content")
t=JSON.parse(unescape(n))}catch(e){t={}}var n=t
e.default=n}))
define.alias("ember-truth-helpers/helpers/and","msg-multisend/helpers/and")
define.alias("ember-holy-futuristic-template-namespacing-batman/helpers/-translate-dynamic-2","msg-multisend/helpers/ember-holy-futuristic-template-namespacing-batman-translate-dynamic-2")
define.alias("ember-truth-helpers/helpers/eq","msg-multisend/helpers/eq")
define.alias("ember-cli-pemberly-i18n/helpers/format-number","msg-multisend/helpers/format-number")
define.alias("hue-web-icons/helpers/get-asset-url","msg-multisend/helpers/get-asset-url")
define.alias("ember-truth-helpers/helpers/gt","msg-multisend/helpers/gt")
define.alias("ember-truth-helpers/helpers/gte","msg-multisend/helpers/gte")
define.alias("ember-truth-helpers/helpers/is-array","msg-multisend/helpers/is-array")
define.alias("ember-truth-helpers/helpers/is-empty","msg-multisend/helpers/is-empty")
define.alias("ember-truth-helpers/helpers/is-equal","msg-multisend/helpers/is-equal")
define.alias("artdeco-icons-web/helpers/li-icon","msg-multisend/helpers/li-icon")
define.alias("ember-async-data/helpers/load","msg-multisend/helpers/load")
define.alias("ember-truth-helpers/helpers/lt","msg-multisend/helpers/lt")
define.alias("ember-truth-helpers/helpers/lte","msg-multisend/helpers/lte")
define.alias("ember-truth-helpers/helpers/not-eq","msg-multisend/helpers/not-eq")
define.alias("ember-truth-helpers/helpers/not","msg-multisend/helpers/not")
define.alias("ember-truth-helpers/helpers/or","msg-multisend/helpers/or")
define.alias("ember-app-scheduler/helpers/route-idle","msg-multisend/helpers/route-idle")
define.alias("ember-set-helper/helpers/set","msg-multisend/helpers/set")
define.alias("ember-cli-pemberly-i18n/helpers/t","msg-multisend/helpers/t")
define.alias("ember-truth-helpers/helpers/xor","msg-multisend/helpers/xor")
define.alias("ember-uuid","msg-multisend/index")
define("msg-multisend/initializers/icons",["exports","artdeco-icons-web/src/icons","msg-multisend/config/environment"],(function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
function i(e){throw e}var s={name:"icons",initialize:function(){const{environment:e,APP:s}=n.default
let l,r
s&&({artdecoCustomSpriteUrl:l,artdecoCustomSpriteName:r}=s)
const o="test"!==e
t.default.load(o,l,r).catch(i)}}
e.default=s}))
define.alias("ember-cli-pemberly-lix/initializers/lix","msg-multisend/initializers/lix")
define.alias("ember-m3/initializers/m3-store","msg-multisend/initializers/m3-store")
define.alias("@ember/render-modifiers/modifiers/did-insert","msg-multisend/modifiers/did-insert")
define.alias("@ember/render-modifiers/modifiers/did-update","msg-multisend/modifiers/did-update")
define.alias("@ember/render-modifiers/modifiers/will-destroy","msg-multisend/modifiers/will-destroy")
define.alias("artdeco-hoverables/services/artdeco-hoverable","msg-multisend/services/artdeco-hoverable")
define.alias("artdeco-modal/services/artdeco-modal","msg-multisend/services/artdeco-modal")
define.alias("artdeco-toast/services/artdeco-toast","msg-multisend/services/artdeco-toast")
define.alias("client-sensor-web/services/client-sensor","msg-multisend/services/client-sensor")
define.alias("ember-date-service/services/date","msg-multisend/services/date")
define.alias("@linkedin/ember-restli-graphql/services/graphql","msg-multisend/services/graphql")
define.alias("@linkedin/ember-pem/services/internal-event-utils","msg-multisend/services/internal-event-utils")
define.alias("@linkedin/ember-pem/services/internal-pem-tracking","msg-multisend/services/internal-pem-tracking")
define.alias("ember-cli-pemberly-lix/services/lix","msg-multisend/services/lix")
define.alias("ember-m3/services/m3-schema-manager","msg-multisend/services/m3-schema-manager")
define.alias("@linkedin/ember-pem/services/pem-response-metadata","msg-multisend/services/pem-response-metadata")
define.alias("@linkedin/ember-pem/services/pem-tracking","msg-multisend/services/pem-tracking")
define.alias("persistent-toast-manager/services/persistent-toast-manager","msg-multisend/services/persistent-toast-manager")
define.alias("ember-cli-pemberly-m3/services/store","msg-multisend/services/store")
define.alias("ember-cli-pemberly-litms/services/tag-manager","msg-multisend/services/tag-manager")
define.alias("@linkedin/ember-pem/services/tracer","msg-multisend/services/tracer")
define.alias("ember-cli-pemberly-litms/services/tracking-adapter-for-tag-manager","msg-multisend/services/tracking-adapter-for-tag-manager")
define.alias("ember-async-data/tracked-async-data","msg-multisend/tracked-async-data")
define.alias("client-sensor-web/utils/helpers","msg-multisend/utils/helpers")
define("msg-multisend/utils/uuid-generator",["exports","ember-uuid/utils/uuid-generator"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})
Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return t.parse}})
Object.defineProperty(e,"unparse",{enumerable:!0,get:function(){return t.unparse}})
Object.defineProperty(e,"v1",{enumerable:!0,get:function(){return t.v1}})
Object.defineProperty(e,"v4",{enumerable:!0,get:function(){return t.v4}})}))
define.alias("ember-vector-images/utils/vector-url","msg-multisend/utils/vector-url")

//# sourceMappingURL=engine.map
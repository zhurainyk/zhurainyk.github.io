(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-eacc67c6"],{"04c1":function(e,t,a){},"3cb2":function(e,t,a){"use strict";a.r(t);var i={name:"search",data:()=>({formInline:{sort:"",pageNo:1,pageSize:10,key:""},sortList:[{name:"订货总金额-高到低",value:0},{name:"订货总金额-低到高",value:1},{name:"订货总次数-高到低",value:2},{name:"订货总次数-低到高",value:3},{name:"采购总金额-高到低",value:4},{name:"采购总金额-低到高",value:5},{name:"采购总次数-高到低",value:6},{name:"采购总次数-低到高",value:7}]}),mounted(){},methods:{onSubmit(){this.$emit("search",this.formInline)},clearbox(){this.formInline={sort:"",pageNo:1,pageSize:10,key:""},this.$emit("search",this.formInline)}}},n=(a("b974"),a("2877")),r=Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("div",[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[t("el-form-item",{attrs:{label:"关键字:"}},[t("el-input",{staticClass:"inputbox",attrs:{placeholder:"请输入品名，工厂货号，供应商搜索"},model:{value:e.formInline.key,callback:function(t){e.$set(e.formInline,"key",t)},expression:"formInline.key"}})],1),t("el-form-item",{attrs:{label:"排序:"}},[t("el-select",{staticClass:"inputbox",attrs:{placeholder:"请选择"},model:{value:e.formInline.sort,callback:function(t){e.$set(e.formInline,"sort",t)},expression:"formInline.sort"}},e._l(e.sortList,(function(e,a){return t("el-option",{key:a,attrs:{label:e.name,value:e.value}})})),1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.onSubmit}},[e._v("搜索")]),t("el-button",{attrs:{icon:"el-icon-delete"},on:{click:e.clearbox}},[e._v("清空")])],1)],1)],1)}),[],!1,null,"f4dfc27c",null),o=r.exports,s=a("4d86"),l=a("2934"),c=a("7ec2"),d=a("d4a2");const h=[{name:"image",fixed:!0,ch:"图片",width:"80"},{name:"specimenName",fixed:!0,ch:"样品名称",width:"150"},{name:"factoryNo",fixed:!1,ch:"工厂货号",width:"100"},{name:"stockPrice",fixed:!1,ch:"进货价",width:"80"},{name:"supplyFactoryName",fixed:!1,ch:"供应商"},{name:"orderLastTime",fixed:!1,ch:"上次订货",width:"120"},{name:"orderTotalCount",fixed:!1,ch:"订货总次数",width:"110"},{name:"orderTotalMoney",fixed:!1,ch:"订货总金额",width:"120"},{name:"orderTotalNum",fixed:!1,ch:"订货总数量",width:"110"},{name:"purchaseLastTime",fixed:!1,ch:"上次采购",width:"120"},{name:"purchaseTotalCount",fixed:!1,ch:"采购总次数",width:"110"},{name:"purchaseTotalMoney",fixed:!1,ch:"采购总金额",width:"120"},{name:"purchaseTotalNum",fixed:!1,ch:"采购总数量",width:"110"}],u=[{name:"orderName",ch:"客户",width:"120"},{name:"orderDate",ch:"订货日期",width:"120"},{name:"receiveDate",ch:"收货日期",width:"120"},{name:"orderNo",ch:"订单编号",width:"120"},{name:"sheetTypeName",ch:"分类",width:"120"},{name:"totalMoney",ch:"总金额",width:"120"},{name:"actualMoney",ch:"已收款",width:"120"},{name:"progress",ch:"状态",width:"120"},{name:"createName",ch:"创建人",width:"120"},{name:"createTime",ch:"创建日期",width:"120"}];u.push({name:"operation",fixed:"right",ch:"操作",width:80,align:"center",btnList:[{value:1,name:"详情"}]});const p=[{name:"factoryName",ch:"供应商",width:"120"},{name:"purchaseDate",ch:"采购日期",width:"120"},{name:"receiveDate",ch:"发货日期",width:"120"},{name:"orderNo",ch:"订单编号",width:"120"},{name:"sheetTypeName",ch:"分类",width:"120"},{name:"totalMoney",ch:"总金额",width:"120"},{name:"payedMoney",ch:"已结款",width:"120"},{name:"progress",ch:"状态",width:"120"},{name:"createName",ch:"创建人",width:"120"},{name:"createTime",ch:"创建日期",width:"120"}];p.push({name:"operation",fixed:"right",ch:"操作",width:80,align:"center",btnList:[{value:1,name:"详情"}]});var m={name:"tableList",components:{pagination:s.a,detailform:c.a,detailform2:d.a},props:{tableInfo:{type:Object,default:{pageNo:1,limit:10,total:0,totalPage:0,rows:[]}}},watch:{tableInfo:{handler(e){this.listQuery.pageNo=e.pageNo,this.listQuery.limit=e.pageSize},immediate:!0,deep:!0},multipleSelection:{handler(e){this.$emit("selectedItems",e)},immediate:!0,deep:!0}},data:()=>({lables2:u,lables3:p,relativeOrderSheetShow:!1,relativeOrderSheetShow2:!1,relativeOrderSheetList:[],relativeOrderSheetList2:[],lables:h,listQuery:{pageNo:1,pageSize:10},addShow:!1,addShow2:!1,orderSheetId:"",purchaseSheetId:"",formType:""}),methods:{pageList(e){const t={pageNo:e.page,pageSize:e.rows};this.$emit("getList",t)},purchaseSheetCount(e){console.log(e);const t={specimenId:e.specimenId};this.relativeOrderSheetShow=!0,Object(l.a)(t).then((e=>{this.relativeOrderSheetList=e.data}))},purchaseTotalCount(e){const t={specimenId:e.specimenId};this.relativeOrderSheetShow2=!0,Object(l.f)(t).then((e=>{this.relativeOrderSheetList2=e.data}))},hanldeClick(e,t){this.orderSheetId=t,this.addShow=!0,this.formType=3},hanldeClick2(e,t){this.purchaseSheetId=t,this.addShow2=!0,this.formType=3}}},f=m,w=(a("d6ad"),Object(n.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"tablelist",staticStyle:{"z-index":"2000"}},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableInfo.rows,"tooltip-effect":"dark",border:""}},[t("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"index",label:"序号",fixed:"",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",[e._v(e._s(a.$index+1))])]}}])}),e._l(e.lables,(function(a,i){return t("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"card"!=a.name,label:a.ch,prop:a.name,fixed:a.fixed,width:a.width||"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("div",["image"==a.name?t("div",{staticClass:"demo-image__preview"},[t("el-image",{staticStyle:{width:"48px",height:"48px"},attrs:{src:i.row.image,"preview-src-list":[i.row.image]}},[t("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(" 加载中"),t("span",{staticClass:"dot"},[e._v("...")])]),t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"el-icon-picture-outline"})])])],1):"orderTotalCount"==a.name?t("div",{staticStyle:{color:"blue"},on:{click:function(t){return e.purchaseSheetCount(i.row)}}},[e._v(" "+e._s(i.row[String(a.name)])+" ")]):"purchaseTotalCount"==a.name?t("div",{staticStyle:{color:"blue"},on:{click:function(t){return e.purchaseTotalCount(i.row)}}},[e._v(" "+e._s(i.row[String(a.name)])+" ")]):t("div",[e._v(" "+e._s(i.row[String(a.name)])+" ")])])]}}],null,!0)})}))],2),t("el-dialog",{attrs:{title:"订货单列表",visible:e.relativeOrderSheetShow,width:"60%","append-to-body":""},on:{"update:visible":function(t){e.relativeOrderSheetShow=t}}},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.relativeOrderSheetList,"tooltip-effect":"dark",border:""}},[t("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"selection",width:"45"}}),e._l(e.lables2,(function(a,i){return t("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"card"!=a.name,label:a.ch,prop:a.name,fixed:a.fixed,width:a.width||"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("div",["operation"==a.name?t("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[e._l(a.btnList,(function(a,n){return[t("el-button",{key:n,attrs:{type:"text",size:"small"},on:{click:function(t){return e.hanldeClick(a.value,i.row.orderSheetId,i.row)}}},[e._v(e._s(a.name))])]}))],2):t("div",[e._v(" "+e._s(i.row[String(a.name)])+" ")])])]}}],null,!0)})}))],2)],1),t("el-dialog",{attrs:{title:"采购单列表",visible:e.relativeOrderSheetShow2,width:"60%","append-to-body":""},on:{"update:visible":function(t){e.relativeOrderSheetShow2=t}}},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.relativeOrderSheetList2,"tooltip-effect":"dark",border:""}},[t("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"selection",width:"45"}}),e._l(e.lables3,(function(a,i){return t("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"card"!=a.name,label:a.ch,prop:a.name,fixed:a.fixed,width:a.width||"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("div",["operation"==a.name?t("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[e._l(a.btnList,(function(a,n){return[t("el-button",{key:n,attrs:{type:"text",size:"small"},on:{click:function(t){return e.hanldeClick2(a.value,i.row.purchaseSheetId,i.row)}}},[e._v(e._s(a.name))])]}))],2):t("div",[e._v(" "+e._s(i.row[String(a.name)])+" ")])])]}}],null,!0)})}))],2)],1),t("detailform",{attrs:{addShow:e.addShow,orderSheetId:e.orderSheetId,formType:e.formType},on:{"update:addShow":function(t){e.addShow=t},"update:add-show":function(t){e.addShow=t}}}),t("detailform2",{attrs:{addShow:e.addShow2,purchaseSheetId:e.purchaseSheetId,formType:e.formType},on:{"update:addShow":function(t){e.addShow2=t},"update:add-show":function(t){e.addShow2=t}}}),t("pagination",{attrs:{total:e.tableInfo.total||0,page:e.listQuery.pageNo||0,limit:e.listQuery.pageSize||0},on:{"update:page":function(t){return e.$set(e.listQuery,"pageNo || 0",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize || 0",t)},pagination:e.pageList}})],1)}),[],!1,null,"618e1cd4",null)),S=w.exports,b=a("5ffe"),y={name:"spacimen",components:{search:o,tablelist:S},data:()=>({tableInfo:{},formInline:{sort:"",pageNo:1,pageSize:10,key:""},selectedItemList:[]}),async created(){this.search(this.formInline)},methods:{search(e){this.formInline=e,Object(b.k)(e).then((t=>{1==t.code&&(this.tableInfo={pageNo:e.pageNo,pageSize:e.pageSize,total:t.data.total,rows:t.data.items})}))},getList(e){this.formInline=Object.assign(this.formInline,e),this.search(this.formInline)},selectedItems(e){this.selectedItemList=e},refresh(){this.search(this.formInline)},deleteConform(){let e=[];this.selectedItemList.forEach((t=>{e.push(t.orderSheetId)})),deleteList({orderSheetId:e.toString()}).then((e=>{1==e.code?(this.$message.success(e.message),this.search(this.formInline)):this.$message.error(e.message)}))}},mounted(){}},v=y,g=Object(n.a)(v,(function(){var e=this,t=e._self._c;return t("div",[t("search",{on:{search:e.search}}),t("tablelist",{attrs:{tableInfo:e.tableInfo},on:{getList:e.getList,selectedItems:e.selectedItems,refresh:e.refresh}})],1)}),[],!1,null,"96fcd62a",null);t.default=g.exports},"4d43":function(e,t,a){},"5ffe":function(e,t,a){"use strict";a.d(t,"k",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"h",(function(){return s})),a.d(t,"g",(function(){return l})),a.d(t,"m",(function(){return c})),a.d(t,"l",(function(){return d})),a.d(t,"f",(function(){return h})),a.d(t,"e",(function(){return u})),a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return m})),a.d(t,"j",(function(){return f})),a.d(t,"i",(function(){return w})),a.d(t,"o",(function(){return S})),a.d(t,"p",(function(){return b})),a.d(t,"n",(function(){return y}));var i=a("b775");function n(e){return Object(i.a)({url:"/supplyApp/specimenStatisticsList",method:"post",params:e})}function r(e){return Object(i.a)({url:"/admin/orderSheetStatisticsList",method:"post",params:e})}function o(e){return Object(i.a)({url:"/supplyApp/orderSheetSpecimenStatisticsList",method:"post",params:e})}function s(e){return Object(i.a)({url:"/admin/purchaseSheetStatisticsList",method:"post",params:e})}function l(e){return Object(i.a)({url:"/supplyApp/purchaseSheetSpecimenStatisticsList",method:"post",params:e})}function c(e){return Object(i.a)({url:"/supplyApp/specimenStockStatisticsList",method:"post",params:e})}function d(e){return Object(i.a)({url:"/supplyApp/specimenStockList",method:"post",params:e})}function h(e){return Object(i.a)({url:"/supplyApp/purchaseSheetDuiZhangList",method:"post",params:e})}function u(e){return Object(i.a)({url:"/supplyApp/purchaseSheetDuiZhang",method:"post",params:e})}function p(e){return Object(i.a)({url:"/supplyApp/orderSheetDuiZhangList",method:"post",params:e})}function m(e){return Object(i.a)({url:"/supplyApp/orderSheetDuiZhang",method:"post",params:e})}function f(e){return Object(i.a)({url:"/supplyApp/sheetExceptionGenerateList",method:"post",params:e})}function w(e){return Object(i.a)({url:"/supplyApp/sheetExceptionGenerate",method:"post",params:e})}function S(e){return Object(i.a)({url:"/supplyApp/supplyStoreStaffList",method:"post",params:e})}function b(e){return Object(i.a)({url:"/supplyApp/supplyUserSetAdmin",method:"post",params:e})}function y(e){return Object(i.a)({url:"/supplyApp/supplyStoreStaffDelete",method:"post",params:e})}},b974:function(e,t,a){"use strict";a("4d43")},d6ad:function(e,t,a){"use strict";a("04c1")}}]);
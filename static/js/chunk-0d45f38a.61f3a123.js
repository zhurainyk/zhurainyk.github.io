(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0d45f38a"],{"013a":function(e,t,n){"use strict";n("64cb")},"2cce":function(e,t,n){},"5ffe":function(e,t,n){"use strict";n.d(t,"k",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"h",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"m",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return h})),n.d(t,"j",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"o",(function(){return y})),n.d(t,"p",(function(){return g})),n.d(t,"n",(function(){return S}));var a=n("b775");function i(e){return Object(a.a)({url:"/supplyApp/specimenStatisticsList",method:"post",params:e})}function r(e){return Object(a.a)({url:"/admin/orderSheetStatisticsList",method:"post",params:e})}function s(e){return Object(a.a)({url:"/supplyApp/orderSheetSpecimenStatisticsList",method:"post",params:e})}function o(e){return Object(a.a)({url:"/admin/purchaseSheetStatisticsList",method:"post",params:e})}function l(e){return Object(a.a)({url:"/supplyApp/purchaseSheetSpecimenStatisticsList",method:"post",params:e})}function c(e){return Object(a.a)({url:"/supplyApp/specimenStockStatisticsList",method:"post",params:e})}function u(e){return Object(a.a)({url:"/supplyApp/specimenStockList",method:"post",params:e})}function p(e){return Object(a.a)({url:"/supplyApp/purchaseSheetDuiZhangList",method:"post",params:e})}function d(e){return Object(a.a)({url:"/supplyApp/purchaseSheetDuiZhang",method:"post",params:e})}function m(e){return Object(a.a)({url:"/supplyApp/orderSheetDuiZhangList",method:"post",params:e})}function h(e){return Object(a.a)({url:"/supplyApp/orderSheetDuiZhang",method:"post",params:e})}function f(e){return Object(a.a)({url:"/supplyApp/sheetExceptionGenerateList",method:"post",params:e})}function b(e){return Object(a.a)({url:"/supplyApp/sheetExceptionGenerate",method:"post",params:e})}function y(e){return Object(a.a)({url:"/supplyApp/supplyStoreStaffList",method:"post",params:e})}function g(e){return Object(a.a)({url:"/supplyApp/supplyUserSetAdmin",method:"post",params:e})}function S(e){return Object(a.a)({url:"/supplyApp/supplyStoreStaffDelete",method:"post",params:e})}},"64cb":function(e,t,n){},"8e4e":function(e,t,n){"use strict";n.r(t);var a={name:"search",data:()=>({formInline:{sort:0,page:1,rows:10,key:""},sortList:[{name:"总金额-高到低",value:0},{name:"总金额-低到高",value:1},{name:"总次数-高到低",value:2},{name:"总次数-低到高",value:3}]}),mounted(){this.formInline.sort=0},methods:{onSubmit(){this.$emit("search",this.formInline)},clearbox(){this.formInline={sort:0,page:1,rows:10,key:""},this.$emit("search",this.formInline)}}},i=(n("013a"),n("2877")),r=Object(i.a)(a,(function(){var e=this,t=e._self._c;return t("div",[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[t("el-form-item",{attrs:{label:"关键字:"}},[t("el-input",{staticClass:"inputbox",attrs:{placeholder:"请输入供应商名称搜索"},model:{value:e.formInline.key,callback:function(t){e.$set(e.formInline,"key",t)},expression:"formInline.key"}})],1),t("el-form-item",{attrs:{label:"排序:"}},[t("el-select",{staticClass:"inputbox",attrs:{placeholder:"请选择"},model:{value:e.formInline.sort,callback:function(t){e.$set(e.formInline,"sort",t)},expression:"formInline.sort"}},e._l(e.sortList,(function(e,n){return t("el-option",{key:n,attrs:{label:e.name,value:e.value}})})),1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.onSubmit}},[e._v("搜索")]),t("el-button",{attrs:{icon:"el-icon-delete"},on:{click:e.clearbox}},[e._v("清空")])],1)],1)],1)}),[],!1,null,"35ab8529",null),s=r.exports,o=n("4d86"),l=(n("2934"),n("5ffe"));const c=[{name:"factoryName",fixed:!0,ch:"供应商名称",width:"120"},{name:"purchaseTotalCount",fixed:!0,ch:"采购总次数",width:"150"},{name:"purchaseTotalMoney",fixed:!1,ch:"采购总金额",width:"150"},{name:"lastPurchaseTime",fixed:!1,ch:"上次采购",width:"150"}];c.push({name:"operation",ch:"操作",width:80,align:"center",btnList:[{value:1,name:"详情"}]});const u=[{name:"image",ch:"图片",width:"120"},{name:"name",ch:"样品名称"},{name:"factoryNo",ch:"工厂货号"},{name:"totalCtnsNum",ch:"总箱数"},{name:"totalNum",ch:"总数量"},{name:"totalMoney",ch:"总金额"}];var p={name:"tableList",components:{pagination:o.a},props:{tableInfo:{type:Object,default:{pageNo:1,limit:10,total:0,totalPage:0,rows:[]}}},watch:{tableInfo:{handler(e){this.listQuery.pageNo=e.pageNo,this.listQuery.limit=e.pageSize},immediate:!0,deep:!0},multipleSelection:{handler(e){this.$emit("selectedItems",e)},immediate:!0,deep:!0}},data:()=>({lables2:u,relativeOrderSheetShow:!1,relativeOrderSheetList:[],lables:c,listQuery:{pageNo:1,pageSize:10},addShow:!1,supplyCustomerId:""}),methods:{pageList(e){this.$emit("getList",e)},hanldeClick(e,t){console.log(arguments),this.supplyCustomerId=t.supplyCustomerId,this.relativeOrderSheetShow=!0,Object(l.g)({factoryName:t.factoryName,supplyFactoryId:t.supplyFactoryId}).then((e=>{1==e.code&&(this.relativeOrderSheetList=e.data.items)}))}}},d=p,m=(n("eada"),Object(i.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"tablelist",staticStyle:{"z-index":"2000"}},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableInfo.rows,"tooltip-effect":"dark",height:"70vh",border:""}},[t("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"index",label:"序号",fixed:"",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("div",[e._v(e._s(n.$index+1))])]}}])}),e._l(e.lables,(function(n,a){return t("el-table-column",{key:a,attrs:{"show-overflow-tooltip":"card"!=n.name,label:n.ch,prop:n.name,fixed:n.fixed,width:n.width||"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",["operation"==n.name?t("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[e._l(n.btnList,(function(n,i){return[t("el-button",{key:i,attrs:{type:"text",size:"small"},on:{click:function(t){return e.hanldeClick(n.value,a.row)}}},[e._v(e._s(n.name))])]}))],2):t("div",[e._v(" "+e._s(a.row[String(n.name)])+" ")])])]}}],null,!0)})}))],2),t("el-dialog",{attrs:{title:"采购单样品统计",visible:e.relativeOrderSheetShow,width:"60%","append-to-body":""},on:{"update:visible":function(t){e.relativeOrderSheetShow=t}}},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%","max-height":"500px",overflow:"auto"},attrs:{data:e.relativeOrderSheetList,"tooltip-effect":"dark",border:""}},[t("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"index",label:"序号",fixed:"",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("div",[e._v(e._s(n.$index+1))])]}}])}),e._l(e.lables2,(function(n,a){return t("el-table-column",{key:a,attrs:{"show-overflow-tooltip":"card"!=n.name,label:n.ch,prop:n.name,fixed:n.fixed,width:n.width||"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["image"==n.name?t("div",{staticClass:"demo-image__preview"},[t("el-image",{staticStyle:{width:"48px",height:"48px"},attrs:{src:a.row.image,"preview-src-list":[a.row.image]}},[t("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(" 加载中"),t("span",{staticClass:"dot"},[e._v("...")])]),t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"el-icon-picture-outline"})])])],1):t("div",[e._v(" "+e._s(a.row[String(n.name)])+" ")])]}}],null,!0)})}))],2)],1),t("pagination",{attrs:{total:e.tableInfo.total||0,page:e.listQuery.pageNo||0,limit:e.listQuery.pageSize||0},on:{"update:page":function(t){return e.$set(e.listQuery,"pageNo || 0",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize || 0",t)},pagination:e.pageList}})],1)}),[],!1,null,"a3618934",null)),h={name:"spacimen",components:{search:s,tablelist:m.exports},data:()=>({tableInfo:{},formInline:{sort:0,page:1,rows:10,key:""},selectedItemList:[]}),async created(){this.search(this.formInline)},methods:{search(e){this.formInline=e,Object(l.h)(e).then((e=>{e&&(this.tableInfo=e)}))},getList(e){this.formInline=Object.assign(this.formInline,e),this.search(this.formInline)},selectedItems(e){this.selectedItemList=e},refresh(){this.search(this.formInline)},deleteConform(){let e=[];this.selectedItemList.forEach((t=>{e.push(t.orderSheetId)})),deleteList({orderSheetId:e.toString()}).then((e=>{1==e.code?(this.$message.success(e.message),this.search(this.formInline)):this.$message.error(e.message)}))}},mounted(){}},f=h,b=Object(i.a)(f,(function(){var e=this,t=e._self._c;return t("div",[t("search",{on:{search:e.search}}),t("tablelist",{attrs:{tableInfo:e.tableInfo},on:{getList:e.getList,selectedItems:e.selectedItems,refresh:e.refresh}})],1)}),[],!1,null,"00afc23e",null);t.default=b.exports},eada:function(e,t,n){"use strict";n("2cce")}}]);
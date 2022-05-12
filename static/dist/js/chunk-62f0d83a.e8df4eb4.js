(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62f0d83a"],{a1724:function(t,e,n){"use strict";var s=n("cd2f"),i=n.n(s);i.a},cd2f:function(t,e,n){},fb1a:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"settings"},[n("breadcrumb",{attrs:{data:["Clusters",t.$route.params.id,"session"]}}),n("section",{staticClass:"container"},[n("div",{staticClass:"total flex flex-end pb-10 flex-vcenter"}),n("div",{staticClass:"tables"},[n("h3",{staticClass:"mb-10"},[t._v(t._s(t.$t("session.Open Sessions")))]),n("session-table",{attrs:{list:t.openList,clusterName:t.id,type:"open"}}),n("div",{staticClass:"mb-10 mt-50",staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"fs-18 font-bold pull-left"},[t._v(t._s(t.$t("session.Slow Sessions")))]),n("div",{staticClass:"pull-right"},[n("time-filter",{on:{input:t.timeFilterChange,"on-refresh":t.timeFilterRefresh},model:{value:t.timeFilter,callback:function(e){t.timeFilter=e},expression:"timeFilter"}}),n("label",{staticClass:"ml-20"},[t._v(t._s(t.$t("session.Limit Count")))]),n("el-input-number",{staticClass:"ml-10",staticStyle:{width:"100px"},attrs:{placeholder:"查询条数",size:"small",min:5},on:{change:t.timeFilterRefresh},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1)]),n("session-table",{attrs:{list:t.closeList,clusterName:t.id,type:"close"}})],1)])],1)},i=[],r=n("a34a"),a=n.n(r),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-column"},[n("vxe-table",t._b({staticClass:"flex-1",attrs:{border:"",align:"center",data:t.currentPageData},on:{"sort-change":t.sortChangeEvent}},"vxe-table",t.gridOptions,!1),[t._l(t.columns,(function(e,s){return n("vxe-column",{key:s,attrs:{"show-header-overflow":"","show-footer-overflow":"","show-overflow":!0,field:e.prop,title:e.label,width:e.width,align:"center",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){var i=s.row;return["startTime"===e.prop?n("span",[t._v(t._s(t._f("formatDate")(1e3*i.startTime)))]):n("span",[t._v(t._s(i[e.prop]))])]}}],null,!0)})})),"open"===t.type?n("vxe-column",{attrs:{fixed:"right",align:"center",title:t.$t("tables.Action"),width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.killSession(e.row)}}},[t._v(t._s(t.$t("session.Kill")))])]}}],null,!1,801917647)}):t._e()],2),n("vxe-pager",{attrs:{"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,"page-sizes":t.pagination.pageSizes,total:t.total,layouts:["PrevPage","JumpNumber","NextPage","FullJump","Sizes","Total"]},on:{"update:pageSize":function(e){return t.$set(t.pagination,"pageSize",e)},"update:page-size":function(e){return t.$set(t.pagination,"pageSize",e)},"page-change":t.handlePageChange}})],1)},l=[],u=n("c949");function c(t,e,n,s,i,r,a){try{var o=t[r](a),l=o.value}catch(u){return void n(u)}o.done?e(l):Promise.resolve(l).then(s,i)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(s,i){var r=t.apply(e,n);function a(t){c(r,s,i,a,o,"next",t)}function o(t){c(r,s,i,a,o,"throw",t)}a(void 0)}))}}function f(t){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}var h={props:{list:{type:Array,default:[]},type:{type:String},clusterName:{type:String}},data:function(){return{sort:{},pagination:{total:0,pageSize:10,pageSizes:[10,15,20,50,100,200,500,1e3],currentPage:1},gridOptions:{border:!0,resizable:!0,showHeaderOverflow:!0,showOverflow:!0,highlightHoverRow:!0,rowId:"tableName",toolbarConfig:{zoom:!0,custom:!0},sortConfig:{trigger:"cell"},filterConfig:{}}}},computed:{total:function(){return this.list.length},columns:function(){return[{prop:"startTime",label:this.$t("session.Query Start Time"),sortable:!0},{prop:"queryDuration",label:this.$t("session.Query Duration"),sortable:!0},{prop:"query",label:this.$t("session.Query"),sortable:!0},{prop:"user",label:this.$t("session.Initial User"),sortable:!0},{prop:"queryId",label:this.$t("session.Initial Query ID"),sortable:!0},{prop:"host",label:this.$t("session.Node Host"),sortable:!0},{prop:"address",label:this.$t("session.Initial Address"),sortable:!0},{prop:"threads",label:this.$t("session.Thread Numbers"),sortable:!0}]},queryList:function(){var t=this.sort,e=t.property,n=t.order;return this.list.sort((function(t,s){var i=f(t[e]);if("number"===i){var r=t[e]-s[e];if("asc"===n)return r;if("desc"===n)return-r}else if("string"===i){var a;if(a=t[e].length===s[e].length?t[e].localeCompare(s[e]):t[e].length-s[e].length,"asc"===n)return a;if("desc"===n)return-a}})),this.list},currentPageData:function(){var t=this.pagination,e=t.currentPage,n=t.pageSize;return this.queryList.slice((e-1)*n,e*n)}},methods:{sortChangeEvent:function(t){var e=t.property,n=t.order;this.sort={property:e,order:n}},handlePageChange:function(t){this.pagination.currentPage=t.currentPage},killSession:function(t){var e=this;return p(a.a.mark((function n(){var s,i,r,o;return a.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.clusterName,i=t.host,r=t.queryId,n.next=4,u["e"].kill(s,{host:i,queryId:r});case 4:o=n.sent,o.data.entity,e.$message.success("".concat(e.$t("common.Action Success")));case 7:case"end":return n.stop()}}),n)})))()}}},d=h,m=n("2877"),g=Object(m["a"])(d,o,l,!1,null,null,null),v=g.exports,b=n("c281");function y(t,e,n,s,i,r,a){try{var o=t[r](a),l=o.value}catch(u){return void n(u)}o.done?e(l):Promise.resolve(l).then(s,i)}function w(t){return function(){var e=this,n=arguments;return new Promise((function(s,i){var r=t.apply(e,n);function a(t){y(r,s,i,a,o,"next",t)}function o(t){y(r,s,i,a,o,"throw",t)}a(void 0)}))}}var S={data:function(){return{id:"",refresh:null,openList:[],closeList:[],timeFilter:["now-7d","now"],limit:10}},created:function(){this.id=this.$route.params.id},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return w(a.a.mark((function e(){var n,s,i;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,u["e"].open(n);case 3:s=e.sent,i=s.data.entity,t.openList=i,t.getSlowSessionList();case 7:case"end":return e.stop()}}),e)})))()},getSlowSessionList:function(){var t=this;return w(a.a.mark((function e(){var n,s,i,r,o,l,c;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(b["b"])(t.timeFilter),s=n.min,i=n.max,r=t.limit,o=t.id,e.next=4,u["e"].close(o,{limit:r,start:parseInt(s/1e3),end:parseInt(i/1e3)});case 4:l=e.sent,c=l.data.entity,t.closeList=c;case 7:case"end":return e.stop()}}),e)})))()},timeFilterRefresh:function(){this.getSlowSessionList()},timeFilterChange:function(){this.getSlowSessionList()}},components:{SessionTable:v}},x=S,C=(n("a1724"),Object(m["a"])(x,s,i,!1,null,"44fbbfc3",null));e["default"]=C.exports}}]);
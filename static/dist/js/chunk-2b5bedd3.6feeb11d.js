(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b5bedd3"],{"472f":function(t,e,s){"use strict";s("6c44")},"6c44":function(t,e,s){},fb1a:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"settings"},[s("breadcrumb",{attrs:{data:["Clusters",t.$route.params.id,"session"]}}),s("section",{staticClass:"container"},[s("div",{staticClass:"total flex flex-end pb-10 flex-vcenter"}),s("div",{staticClass:"tables"},[s("h3",{staticClass:"mb-10"},[t._v(t._s(t.$t("session.Open Sessions")))]),s("session-table",{attrs:{list:t.openList}}),s("div",{staticClass:"mb-10 mt-50",staticStyle:{overflow:"hidden"}},[s("div",{staticClass:"fs-18 font-bold pull-left"},[t._v(t._s(t.$t("session.Slow Sessions")))]),s("div",{staticClass:"pull-right"},[s("time-filter",{on:{input:t.timeFilterChange,"on-refresh":t.timeFilterRefresh},model:{value:t.timeFilter,callback:function(e){t.timeFilter=e},expression:"timeFilter"}}),s("label",{staticClass:"ml-20"},[t._v(t._s(t.$t("session.Limit Count")))]),s("el-input-number",{staticClass:"ml-10",staticStyle:{width:"100px"},attrs:{placeholder:"查询条数",size:"small",min:5},on:{change:t.timeFilterRefresh},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1)]),s("session-table",{attrs:{list:t.closeList}})],1)])],1)},n=[],r=s("a34a"),a=s.n(r),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-column"},[s("vxe-table",t._b({staticClass:"flex-1",attrs:{border:"",align:"center",data:t.currentPageData},on:{"sort-change":t.sortChangeEvent}},"vxe-table",t.gridOptions,!1),t._l(t.columns,(function(e,i){return s("vxe-column",{key:i,attrs:{"show-header-overflow":"","show-footer-overflow":"","show-overflow":"ellipsis",field:e.prop,title:e.label,width:e.width,align:"center",sortable:""},scopedSlots:t._u([{key:"default",fn:function(i){var n=i.row;return["startTime"===e.prop?s("span",[t._v(t._s(t._f("formatDate")(1e3*n.startTime)))]):s("span",[t._v(t._s(n[e.prop]))])]}}],null,!0)})})),1),s("vxe-pager",{attrs:{"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,"page-sizes":t.pagination.pageSizes,total:t.total,layouts:["PrevPage","JumpNumber","NextPage","FullJump","Sizes","Total"]},on:{"update:pageSize":function(e){return t.$set(t.pagination,"pageSize",e)},"update:page-size":function(e){return t.$set(t.pagination,"pageSize",e)},"page-change":t.handlePageChange}})],1)},l=[];function u(t){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}var c={props:{list:{type:Array,default:[]}},data:function(){return{sort:{},pagination:{total:0,pageSize:10,pageSizes:[10,15,20,50,100,200,500,1e3],currentPage:1},gridOptions:{border:!0,resizable:!0,showHeaderOverflow:!0,showOverflow:!0,highlightHoverRow:!0,rowId:"tableName",toolbarConfig:{zoom:!0,custom:!0},sortConfig:{trigger:"cell"},filterConfig:{}}}},computed:{total:function(){return this.list.length},columns:function(){return[{prop:"startTime",label:this.$t("session.Query Start Time"),width:180,sortable:!0},{prop:"queryDuration",label:this.$t("session.Query Duration"),width:140,sortable:!0},{prop:"query",label:this.$t("session.Query"),sortable:!0},{prop:"user",label:this.$t("session.Initial User"),width:140,sortable:!0},{prop:"queryId",label:this.$t("session.Initial Query ID"),width:140,sortable:!0},{prop:"address",label:this.$t("session.Initial Address"),width:140,sortable:!0},{prop:"threads",label:this.$t("session.Thread Numbers"),width:140,sortable:!0}]},queryList:function(){var t=this.sort,e=t.property,s=t.order;return console.log(this.list),this.list.sort((function(t,i){var n=u(t[e]);if("number"===n){var r=t[e]-i[e];if("asc"===s)return r;if("desc"===s)return-r}else if("string"===n){var a;if(a=t[e].length===i[e].length?t[e].localeCompare(i[e]):t[e].length-i[e].length,"asc"===s)return a;if("desc"===s)return-a}})),this.list},currentPageData:function(){var t=this.pagination,e=t.currentPage,s=t.pageSize;return console.log(this.queryList),this.queryList.slice((e-1)*s,e*s)}},methods:{sortChangeEvent:function(t){var e=t.property,s=t.order;this.sort={property:e,order:s}},handlePageChange:function(t){this.pagination.currentPage=t.currentPage}}},p=c,f=s("2877"),h=Object(f["a"])(p,o,l,!1,null,null,null),d=h.exports,m=s("c949"),g=s("c281");function b(t,e,s,i,n,r,a){try{var o=t[r](a),l=o.value}catch(u){return void s(u)}o.done?e(l):Promise.resolve(l).then(i,n)}function v(t){return function(){var e=this,s=arguments;return new Promise((function(i,n){var r=t.apply(e,s);function a(t){b(r,i,n,a,o,"next",t)}function o(t){b(r,i,n,a,o,"throw",t)}a(void 0)}))}}var w={data:function(){return{id:"",refresh:null,openList:[],closeList:[],timeFilter:["now-7d","now"],limit:10}},created:function(){this.id=this.$route.params.id},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return v(a.a.mark((function e(){var s,i,n;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.id,e.next=3,m["e"].open(s);case 3:i=e.sent,n=i.data.entity,t.openList=n,t.getSlowSessionList();case 7:case"end":return e.stop()}}),e)})))()},getSlowSessionList:function(){var t=this;return v(a.a.mark((function e(){var s,i,n,r,o,l,u;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=Object(g["b"])(t.timeFilter),i=s.min,n=s.max,r=t.limit,o=t.id,e.next=4,m["e"].close(o,{limit:r,start:parseInt(i/1e3),end:parseInt(n/1e3)});case 4:l=e.sent,u=l.data.entity,t.closeList=u;case 7:case"end":return e.stop()}}),e)})))()},timeFilterRefresh:function(){this.getSlowSessionList()},timeFilterChange:function(){this.getSlowSessionList()}},components:{SessionTable:d}},y=w,S=(s("472f"),Object(f["a"])(y,i,n,!1,null,"62816ed7",null));e["default"]=S.exports}}]);
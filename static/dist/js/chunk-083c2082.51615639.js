(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-083c2082"],{1574:function(t,e,s){},bf72:function(t,e,s){"use strict";var n=s("1574"),a=s.n(n);a.a},fb1a:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"settings"},[s("breadcrumb",{attrs:{data:["Clusters",t.$route.params.id,"session"]}}),s("section",{staticClass:"container"},[s("div",{staticClass:"total flex flex-end pb-10 flex-vcenter"}),s("div",{staticClass:"tables"},[s("h3",{staticClass:"mb-10"},[t._v(t._s(t.$t("session.Open Sessions")))]),s("session-table",{attrs:{list:t.openList}}),s("h3",{staticClass:"mb-10 mt-50"},[t._v(t._s(t.$t("session.Slow Sessions")))]),s("session-table",{attrs:{list:t.closeList}})],1)])],1)},a=[],o=s("a34a"),r=s.n(o),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-table",{attrs:{data:t.list,border:"",align:"center"}},[s("el-table-column",{attrs:{prop:"startTime","show-overflow-tooltip":"",label:t.$t("session.Query Start Time"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("span",[t._v(t._s(t._f("formatDate")(1e3*n.startTime)))])]}}])}),s("el-table-column",{attrs:{prop:"queryDuration","show-overflow-tooltip":"",label:t.$t("session.Query Duration"),width:"140",align:"center"}}),s("el-table-column",{attrs:{prop:"query","show-overflow-tooltip":"",label:t.$t("session.Query"),align:"center"}}),s("el-table-column",{attrs:{prop:"user","show-overflow-tooltip":"",label:t.$t("session.Initial User"),width:"120",align:"center"}}),s("el-table-column",{attrs:{prop:"queryId","show-overflow-tooltip":"",label:t.$t("session.Initial Query ID"),align:"center"}}),s("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:t.$t("session.Initial Address"),align:"center"}}),s("el-table-column",{attrs:{prop:"threads","show-overflow-tooltip":"",label:t.$t("session.Thread Numbers"),width:"120",align:"center"}})],1)},i=[],c={props:{list:{type:Array,default:[]}},data:function(){return{}},mounted:function(){},components:{}},u=c,f=s("2877"),p=Object(f["a"])(u,l,i,!1,null,null,null),d=p.exports,b=s("c949");function h(t,e,s,n,a,o,r){try{var l=t[o](r),i=l.value}catch(c){return void s(c)}l.done?e(i):Promise.resolve(i).then(n,a)}function m(t){return function(){var e=this,s=arguments;return new Promise((function(n,a){var o=t.apply(e,s);function r(t){h(o,n,a,r,l,"next",t)}function l(t){h(o,n,a,r,l,"throw",t)}r(void 0)}))}}var w={data:function(){return{refresh:null,openList:[],closeList:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return m(r.a.mark((function e(){var s,n,a,o,l;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.$route.params.id,e.next=3,b["e"].open(s);case 3:return n=e.sent,a=n.data.entity,e.next=7,b["e"].close(s);case 7:o=e.sent,l=o.data.entity,t.openList=a,t.closeList=l;case 11:case"end":return e.stop()}}),e)})))()},timeFilterRefresh:function(){this.fetchData()}},components:{SessionTable:d}},v=w,y=(s("bf72"),Object(f["a"])(v,n,a,!1,null,"39fa21fd",null));e["default"]=y.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2366c2b1"],{3312:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("Header",{attrs:{page:"development"}}),e("div",{staticClass:"content"},[e("div",{staticClass:"tags-box"},[e("Tags",{attrs:{list:a.developSubType},on:{onClickTag:a.onClickTag}})],1),e("div",{staticClass:"article-box"},[a.articleList.length>0?e("ArticleS",{attrs:{list:a.articleList,isLoading:a.isLoading,isEnd:a.isEnd},on:{getMoreData:a.getMoreData}}):e("NoData")],1)]),e("Footer")],1)},n=[],s=(e("99af"),e("80af")),o=e("d5be"),r=new s["a"],d={data:function(){return{developSubType:o["a"],page:1,isLoading:!1,isEnd:!1,articleList:[],subType:"",params:{page:1,pageSize:8,type:"develop",subType:""}}},mounted:function(){this.getData()},methods:{getData:function(){var a=this;r.getArticle(this.params).then((function(t){a.articleList=t.data.list,a.params.page>=t.data.total&&(a.isEnd=!0)}))},onClickTag:function(a){this.params.subType=a,this.params.page=1,this.isEnd=!1,this.getData()},getMoreData:function(){var a=this;this.isLoading=!0,this.params.page=this.params.page+1,r.getArticle(this.params).then((function(t){a.params.page>=t.data.total&&(a.isEnd=!0),a.articleList=a.articleList.concat(t.data.list),a.isLoading=!1}))}}},c=d,l=(e("f5f4"),e("2877")),u=Object(l["a"])(c,i,n,!1,null,"b09f054c",null);t["default"]=u.exports},"77e0":function(a,t,e){},d5be:function(a,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return n}));var i=[{index:0,name:"全部",value:""},{index:1,name:"前端",value:"web"},{index:2,name:"后端",value:"end"},{index:6,name:"算法",value:"algorithm"},{index:4,name:"iOS",value:"ios"}],n=[{index:0,name:"全部",value:""},{index:1,name:"Apple",value:"apple"},{index:2,name:"Android",value:"android"},{index:6,name:"PC",value:"pc"}]},f5f4:function(a,t,e){"use strict";e("77e0")}}]);
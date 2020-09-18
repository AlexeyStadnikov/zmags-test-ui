(this["webpackJsonpzmags-test-ui"]=this["webpackJsonpzmags-test-ui"]||[]).push([[0],{18:function(e,t,r){e.exports=r(31)},28:function(e,t,r){},31:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(7),c=r.n(s),o=r(8),i=(r(28),r(2)),u=r.n(i),l=r(4),d=r(6);function f(e){return fetch(e).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)}))}function E(e){return Promise.all(e.map((function(e){return function(e){return f(d.storyUrl.replace("{id}",e))}(e)})))}function p(e){return Promise.all(e.map((function(e){return function(e){return f(d.userUrl.replace("{id}",e))}(e)})))}var S=function(e,t){return function(r){return r(function(e,t){return function(){var r=Object(l.a)(u.a.mark((function r(n,a){var s,c,o;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=a(),t&&(c=s.users.byId,e=e.filter((function(e){return!c[e]}))),!e.length){r.next=15;break}return n({type:"GET_USERS_REQUEST"}),r.prev=4,r.next=7,p(e);case 7:o=r.sent,r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(4),n({type:"GET_USERS_FAILURE",payload:{message:"Error loading users data"}}),r.abrupt("return");case 14:n({type:"GET_USERS_SUCCESS",payload:{users:o}});case 15:case"end":return r.stop()}}),r,null,[[4,10]])})));return function(e,t){return r.apply(this,arguments)}}()}(function(e){return Array.from(e.reduce((function(e,t){return(null===t||void 0===t?void 0:t.by)&&e.add(t.by)}),new Set))}(e),t))}},m=function(e){return function(t,r){return t(S(r().stories.selectedStories,e))}};var v=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(r,n){var a,s,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=n(),c=e?s.stories.storiesIds:null,null===(a=c)||void 0===a?void 0:a.length){t.next=15;break}return r({type:"GET_TOP_STORIES_REQUEST"}),t.prev=4,t.next=7,f(d.topStoriesUrl);case 7:c=t.sent,t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(4),r({type:"GET_TOP_STORIES_FAILURE",payload:{message:"Error loading topStories list"}}),t.abrupt("return");case 14:r({type:"GET_TOP_STORIES_SUCCESS",payload:{storiesIds:c}});case 15:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e,r){return t.apply(this,arguments)}}()},T=function(){return function(e,t){var r=t().stories.storiesIds;r.length&&e({type:"SELECT_STORIES",payload:{selectedStoriesIds:function(e,t){if(e>=t)return Array.from(Array(t).keys());for(var r=new Set;r.size<e;)r.add(Math.round(Math.random()*t));return Array.from(r)}(d.storiesCount,r.length-1).map((function(e){return r[e]}))}})}},b=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(r,n){var a,s,c,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n(),s=a.stories.cached,c=a.stories.selectedStoriesIds,!(e?c.filter((function(e){return!s[e]})):c).length){t.next=17;break}return r({type:"GET_STORIES_CONTENT_REQUEST"}),t.prev=6,t.next=9,E(c);case 9:o=t.sent,t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(6),r({type:"GET_STORIES_CONTENT_FAILURE",payload:{message:"Error loading stories content"}}),t.abrupt("return");case 16:r({type:"GET_STORIES_CONTENT_SUCCESS",payload:{stories:o}});case 17:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e,r){return t.apply(this,arguments)}}()},y=function(e){return e.stories.selectedStories},h=function(e){return e.users.byId};var O,_=function(e){var t=e.stories,r=e.usersById;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("span",{className:"time mr-3"},(t=e.time,new Date(1e3*t).toLocaleString())),e.url?a.a.createElement("a",{href:e.url},e.title):e.title,a.a.createElement("span",{className:"score ml-1"},e.score),a.a.createElement("span",{className:"author ml-3"},"by ",e.by),a.a.createElement("span",{className:"karma ml-1"},function(e){var t;return null===(t=r[e])||void 0===t?void 0:t.karma}(e.by)));var t})))},I=function(){return a.a.createElement("div",{className:"d-flex flex-grow-1 justify-content-center align-items-center"},a.a.createElement("div",{className:"spinner-border text-primary pl-1",role:"status"},"Loading..."))},R=(O=["GET_RANDOM_STORIES"],function(e){return O.some((function(t){return e.loading[t]}))}),g=function(e){return function(t){return e.map((function(e){return t.error[e]})).filter((function(e){return e}))[0]||""}}(["GET_TOP_STORIES","GET_STORIES_CONTENT","GET_USERS"]),j={loadRandomTopStories:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"GET_RANDOM_STORIES_REQUEST"}),t.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:r(v(e)).then((function(){return r(T())})).then((function(){return r(b(e))})).then((function(){return r(m(e))})).then((function(){return r({type:"GET_RANDOM_STORIES_SUCCESS"})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},U=Object(o.b)((function(e){return{isLoading:R(e),errorMessage:g(e),stories:y(e),usersById:h(e)}}),j)((function(e){var t=e.isLoading,r=e.errorMessage,s=e.stories,c=e.usersById,o=e.loadRandomTopStories;Object(n.useEffect)((function(){return o()}),[o]);var i=Object(n.useCallback)((function(){return o(!0)}),[o]);return a.a.createElement("div",{className:"container d-flex flex-column h-100 page-index"},t&&a.a.createElement(I,null),r&&a.a.createElement("div",{className:"alert alert-danger"},r),!t&&a.a.createElement("div",{className:"text-right"},a.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:i},"Try again")),!t&&!r&&a.a.createElement(_,{stories:s,usersById:c}))}));var x=function(){return a.a.createElement("div",{className:"App d-flex flex-column h-100"},a.a.createElement("header",null,a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"Hacker Stories"))),a.a.createElement("div",{className:"flex-grow-1"},a.a.createElement(U,null)),a.a.createElement("footer",null,a.a.createElement("div",{className:"container text-center"},"\xa9 2020 *****")))},N=r(3),C=r(16),w=r(17),k=(r(30),r(5)),G=r(1),A=r(9),L={storiesIds:[],selectedStoriesIds:[],selectedStories:[],cached:{}};function M(e,t){return e.map((function(e){return t[e]})).filter((function(e){return e})).sort((function(e,t){return e.score-t.score}))}var P={byId:{}},Q=Object(N.combineReducers)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=t.type,n=/(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(r);if(!n)return e;var a=Object(A.a)(n,3),s=a[1],c=a[2];return Object(G.a)(Object(G.a)({},e),{},Object(k.a)({},s,"REQUEST"===c))},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload,a=/(.*)_(REQUEST|FAILURE)/.exec(r);if(!a)return e;var s=Object(A.a)(a,3),c=s[1],o=s[2];return Object(G.a)(Object(G.a)({},e),{},Object(k.a)({},c,"FAILURE"===o?n.message:""))},stories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,r=t.payload||{};switch(t.type){case"GET_TOP_STORIES_SUCCESS":var n=r.storiesIds;return Object(G.a)(Object(G.a)({},e),{},{storiesIds:n});case"SELECT_STORIES":var a=r.selectedStoriesIds,s=M(a,e.cached);return Object(G.a)(Object(G.a)({},e),{},{selectedStoriesIds:a,selectedStories:s});case"GET_STORIES_CONTENT_SUCCESS":var c=r.stories,o={};c.forEach((function(e){return o[e.id]=e}));var i=Object(G.a)(Object(G.a)({},e.cached),o),u=M(e.selectedStoriesIds,i);return Object(G.a)(Object(G.a)({},e),{},{selectedStories:u,cached:i})}return e},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,r=t.payload||{};switch(t.type){case"GET_USERS_SUCCESS":var n=r.users,a={};return n.forEach((function(e){return a[e.id]=e})),Object(G.a)(Object(G.a)({},e),{},{byId:Object(G.a)(Object(G.a)({},e.byId),a)})}return e}}),F=[w.a];var B=Object(N.createStore)(Q,{},Object(C.composeWithDevTools)(N.applyMiddleware.apply(void 0,F)));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,{store:B},a.a.createElement(x,null))),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('{"storiesCount":10,"topStoriesUrl":"https://hacker-news.firebaseio.com/v0/topstories.json","storyUrl":"https://hacker-news.firebaseio.com/v0/item/{id}.json","userUrl":"https://hacker-news.firebaseio.com/v0/user/{id}.json"}')}},[[18,1,2]]]);
//# sourceMappingURL=main.5bb27af1.chunk.js.map
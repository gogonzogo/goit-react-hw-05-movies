"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{644:function(t,n,e){e.d(n,{$h:function(){return a},CJ:function(){return o},TS:function(){return c},_n:function(){return r},hH:function(){return i}});var a="5d8e08b77a668b368d7194faf94b14f5",r="https://api.themoviedb.org/3",c="https://image.tmdb.org/t/p/w500",i="https://placehold.jp/84848b/ffffff/200x300.jpg?text=Movie%20Poster%20Unavailable",o="https://placehold.jp/95959d/ffffff/80x120.png?text=NO%20IMAGE%20AVAILABLE"},290:function(t,n,e){e.d(n,{Df:function(){return s},TP:function(){return u},V0:function(){return f}});var a=e(861),r=e(757),c=e.n(r),i=e(243),o=e(644);i.Z.defaults.baseURL=o._n;var s=function(){var t=(0,a.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("trending/movie/day?api_key=".concat(o.$h));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,a.Z)(c().mark((function t(n,e){var a,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n).concat(e,"?api_key=").concat(o.$h));case 2:return a=t.sent,r=a.data,console.log(r),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)(c().mark((function t(n){var e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("search/movie?api_key=".concat(o.$h,"&query=").concat(n));case 2:return e=t.sent,a=e.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},970:function(t,n,e){e.d(n,{Z:function(){return i}});var a={castItem:"AdditionalInfoCard_castItem__QOaj4",reviewItem:"AdditionalInfoCard_reviewItem__06fkW"},r=e(644),c=e(184),i=function(t){var n=t.profilePath,e=t.name,i=t.character,o=t.author,s=t.reviewDate,u=t.reviewContent,f="".concat(r.TS).concat(n);return(0,c.jsxs)("li",{className:"".concat(a.additionaInfoItem," ").concat(n&&a.castItem," ").concat(u&&a.reviewItem),children:[e&&(0,c.jsx)("img",{className:a.additionaInfoImg,src:function(t){return t?f:r.CJ}(n),alt:e,width:"80px"}),(0,c.jsx)("p",{className:a.additionaInfoTitle,children:e||o}),i&&(0,c.jsx)("p",{className:a.additionaInfoText,children:i}),s&&(0,c.jsx)("p",{className:a.additionaInfoText,children:s}),u&&(0,c.jsx)("p",{className:a.additionaInfoText,children:u})]})}},459:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var a=e(439),r={castDetailsList:"Cast_castDetailsList__ZOOHV"},c=e(970),i=e(809),o=e(290),s=e(791),u=e(689),f=e(184),l=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),e=n[0],l=n[1],d=(0,s.useState)(!1),p=(0,a.Z)(d,2),h=p[0],m=p[1],v=(0,s.useState)(null),x=(0,a.Z)(v,2),I=x[0],_=x[1],w=(0,u.UO)().movieId;return(0,s.useEffect)((function(){m(!0),(0,o.TP)(w,"/credits").then((function(t){return l(t.cast)})).catch((function(t){_(t),console.log(t)})).finally((function(){return m(!1)}))}),[w]),e.length>0?h?(0,f.jsx)(i.Z,{}):(0,f.jsx)("div",{className:r.castDetailsContainer,children:(0,f.jsx)("ul",{className:r.castDetailsList,children:e.map((function(t){return(0,f.jsx)(c.Z,{className:r.castItem,profilePath:t.profile_path,name:t.name,character:t.character,isLoading:h,error:I},t.cast_id)}))})}):(0,f.jsx)("h5",{children:"Sorry, no cast details at this time."})}}}]);
//# sourceMappingURL=459.9c13d96d.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[469],{970:function(t,e,a){a.d(e,{Z:function(){return i}});var r={castItem:"AdditionalInfoCard_castItem__QOaj4",reviewItem:"AdditionalInfoCard_reviewItem__06fkW"},n=a(952),c=a(184),i=function(t){var e=t.profilePath,a=t.name,i=t.character,s=t.author,o=t.reviewDate,u=t.reviewContent,l=n.y.IMG_BASE_URL,f=n.y.CAST_IMG_PLACEHOLDER_URL,d="".concat(l).concat(e);return(0,c.jsxs)("li",{className:"".concat(r.additionaInfoItem," ").concat(e&&r.castItem," ").concat(u&&r.reviewItem),children:[a&&(0,c.jsx)("img",{className:r.additionaInfoImg,src:function(t){return t?d:f}(e),alt:a,width:"200px"}),(0,c.jsx)("p",{className:r.additionaInfoTitle,children:a||s}),i&&(0,c.jsx)("p",{className:r.additionaInfoText,children:i}),o&&(0,c.jsx)("p",{className:r.additionaInfoText,children:o}),u&&(0,c.jsx)("p",{className:r.additionaInfoText,children:u})]})}},952:function(t,e,a){a.d(e,{_:function(){return r},y:function(){return n}});var r=function(t,e,a){var r="/search/movie?query=".concat(a),n="/movie/".concat(t),c="/movie/".concat(t,"/credits"),i="/movie/".concat(t,"/reviews");switch(e){case"trending":return"/trending/all/day";case"search":return r;case"details":return n;case"cast":return c;case"reviews":return i;default:return}},n={API_KEY:"5d8e08b77a668b368d7194faf94b14f5",BASE_URL:"https://api.themoviedb.org/3",IMG_BASE_URL:"https://image.tmdb.org/t/p/w500",MOVIE_IMG_PLACEHOLDER_URL:"https://placehold.jp/84848b/ffffff/200x300.jpg?text=Movie%20Poster%20Unavailable",CAST_IMG_PLACEHOLDER_URL:"https://placehold.jp/95959d/ffffff/80x120.png?text=NO%20IMAGE%20AVAILABLE"}},402:function(t,e,a){a.d(e,{Z:function(){return h},A:function(){return p}});var r=a(689),n=a(861),c=a(439),i=a(757),s=a.n(i),o=a(243),u=a(791),l=a(952),f=function(t){return!t||t!==d()},d=function(){var t=new Date,e=t.getDate(),a=t.getMonth()+1;return"".concat(e,"-").concat(a)},m=function(t){var e=(0,u.useState)(null),a=(0,c.Z)(e,2),r=a[0],i=a[1],m=(0,u.useState)(null),p=(0,c.Z)(m,2),h=p[0],_=p[1],v=(0,u.useState)(0),I=(0,c.Z)(v,2),g=I[0],x=I[1],L=(0,u.useState)(!0),S=(0,c.Z)(L,2),A=S[0],b=S[1],w=l.y.API_KEY,E=l.y.BASE_URL;return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var a,r,n,c,u,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&"/search/movie?query="!==t){e.next=4;break}return i(),b(!1),e.abrupt("return");case 4:if(e.prev=4,b(!0),!localStorage.getItem(t)){e.next=18;break}if(a=JSON.parse(localStorage.getItem(t)),r=a.timeStamp,n=a.responseData,f(r)){e.next=17;break}return i(n),_(null),b(!1),e.abrupt("return");case 17:localStorage.clear();case 18:return e.next=20,(0,o.Z)("".concat(E).concat(t),{params:{api_key:w,language:"en-US",adult:!1}});case 20:if(c=e.sent,0!==(u=c.data).total_results){e.next=26;break}return i(null),_(!0),e.abrupt("return");case 26:l=d(),localStorage.setItem(t,JSON.stringify({timeStamp:l,responseData:u})),i(c.data),_(null),x(c.data.total_results),e.next=38;break;case 33:e.prev=33,e.t0=e.catch(4),_(e.t0),i(null),console.log("Error fetching data from ".concat(t,": , ").concat(e.t0));case 38:return e.prev=38,b(!1),e.finish(38);case 41:case"end":return e.stop()}}),e,null,[[4,33,38,41]])})));return function(){return e.apply(this,arguments)}}();e()}),[t,w,E]),{data:r,error:h,isLoading:A,totalResults:g}},p=function(t,e){var a=(0,r.UO)().movieId,n=(0,l._)(a,t,e),c=m(n,e);return{movieId:a,URL:n,data:c.data,isLoading:c.isLoading,error:c.error}},h=p},469:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var r={castDetailsList:"Cast_castDetailsList__r-vVj"},n=a(402),c=a(970),i=a(809),s=a(184),o=function(){var t=(0,n.Z)("cast"),e=t.data,a=t.isLoading,o=t.error;return o?(0,s.jsx)("h5",{children:"Sorry, no cast details at this time."}):a?(0,s.jsx)(i.Z,{}):(0,s.jsx)("div",{className:r.castDetailsContainer,children:(0,s.jsx)("ul",{className:r.castDetailsList,children:e.cast.map((function(t){return(0,s.jsx)(c.Z,{className:r.castItem,profilePath:t.profile_path,name:t.name,character:t.character,isLoading:a,error:o},t.cast_id)}))})})}}}]);
//# sourceMappingURL=469.39c5835c.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[381],{970:function(t,e,a){a.d(e,{Z:function(){return i}});var r={castItem:"AdditionalInfoCard_castItem__QOaj4",reviewItem:"AdditionalInfoCard_reviewItem__06fkW"},n=a(952),c=a(184),i=function(t){var e=t.profilePath,a=t.name,i=t.character,o=t.author,s=t.reviewDate,u=t.reviewContent,l=n.y.IMG_BASE_URL,d=n.y.CAST_IMG_PLACEHOLDER_URL,f="".concat(l).concat(e);return(0,c.jsxs)("li",{className:"".concat(r.additionaInfoItem," ").concat(e&&r.castItem," ").concat(u&&r.reviewItem),children:[a&&(0,c.jsx)("img",{className:r.additionaInfoImg,src:function(t){return t?f:d}(e),alt:a,width:"200px"}),(0,c.jsx)("p",{className:r.additionaInfoTitle,children:a||o}),i&&(0,c.jsx)("p",{className:r.additionaInfoText,children:i}),s&&(0,c.jsx)("p",{className:r.additionaInfoText,children:s}),u&&(0,c.jsx)("p",{className:r.additionaInfoText,children:u})]})}},952:function(t,e,a){a.d(e,{_:function(){return r},y:function(){return n}});var r=function(t,e,a){var r="/search/movie?query=".concat(a),n="/movie/".concat(t),c="/movie/".concat(t,"/credits"),i="/movie/".concat(t,"/reviews");switch(e){case"trending":return"/trending/all/day";case"search":return r;case"details":return n;case"cast":return c;case"reviews":return i;default:return}},n={API_KEY:"5d8e08b77a668b368d7194faf94b14f5",BASE_URL:"https://api.themoviedb.org/3",IMG_BASE_URL:"https://image.tmdb.org/t/p/w500",MOVIE_IMG_PLACEHOLDER_URL:"https://placehold.jp/84848b/ffffff/200x300.jpg?text=Movie%20Poster%20Unavailable",CAST_IMG_PLACEHOLDER_URL:"https://placehold.jp/95959d/ffffff/80x120.png?text=NO%20IMAGE%20AVAILABLE"}},402:function(t,e,a){a.d(e,{Z:function(){return v},A:function(){return p}});var r=a(689),n=a(861),c=a(439),i=a(757),o=a.n(i),s=a(243),u=a(791),l=a(952),d=function(t){return!t||t!==f()},f=function(){var t=new Date,e=t.getDate(),a=t.getMonth()+1;return"".concat(e,"-").concat(a)},m=function(t){var e=(0,u.useState)(null),a=(0,c.Z)(e,2),r=a[0],i=a[1],m=(0,u.useState)(null),p=(0,c.Z)(m,2),v=p[0],h=p[1],_=(0,u.useState)(0),I=(0,c.Z)(_,2),g=I[0],x=I[1],w=(0,u.useState)(!0),L=(0,c.Z)(w,2),S=L[0],A=L[1],b=l.y.API_KEY,E=l.y.BASE_URL;return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var a,r,n,c,u,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&"/search/movie?query="!==t){e.next=4;break}return i(),A(!1),e.abrupt("return");case 4:if(e.prev=4,A(!0),!localStorage.getItem(t)){e.next=18;break}if(a=JSON.parse(localStorage.getItem(t)),r=a.timeStamp,n=a.responseData,d(r)){e.next=17;break}return i(n),h(null),A(!1),e.abrupt("return");case 17:localStorage.clear();case 18:return e.next=20,(0,s.Z)("".concat(E).concat(t),{params:{api_key:b,language:"en-US",adult:!1}});case 20:if(c=e.sent,0!==(u=c.data).total_results){e.next=26;break}return i(null),h(!0),e.abrupt("return");case 26:l=f(),localStorage.setItem(t,JSON.stringify({timeStamp:l,responseData:u})),i(c.data),h(null),x(c.data.total_results),e.next=38;break;case 33:e.prev=33,e.t0=e.catch(4),h(e.t0),i(null),console.log("Error fetching data from ".concat(t,": , ").concat(e.t0));case 38:return e.prev=38,A(!1),e.finish(38);case 41:case"end":return e.stop()}}),e,null,[[4,33,38,41]])})));return function(){return e.apply(this,arguments)}}();e()}),[t,b,E]),{data:r,error:v,isLoading:S,totalResults:g}},p=function(t,e){var a=(0,r.UO)().movieId,n=(0,l._)(a,t,e),c=m(n,e);return{movieId:a,URL:n,data:c.data,isLoading:c.isLoading,error:c.error}},v=p},381:function(t,e,a){a.r(e),a.d(e,{default:function(){return s}});var r={},n=a(402),c=a(970),i=a(809),o=a(184),s=function(){var t=(0,n.Z)("reviews"),e=t.data,a=t.isLoading;return t.error?(0,o.jsx)("h5",{children:"No reviews at this time."}):a?(0,o.jsx)(i.Z,{}):(0,o.jsx)("div",{className:r.reviewsDetailsContainer,children:(0,o.jsx)("ul",{className:r.reviewsDetails,children:e.results.map((function(t){return(0,o.jsx)(c.Z,{avatarPath:t.author_details.avatar_path,author:t.author,reviewData:t.created_at,reviewContent:t.content,isLoading:a},t.id)}))})})}}}]);
//# sourceMappingURL=381.a1e40672.chunk.js.map
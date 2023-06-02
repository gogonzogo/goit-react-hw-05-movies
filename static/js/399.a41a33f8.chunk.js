"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[399],{644:function(e,t,a){a.d(t,{_:function(){return n},y:function(){return r}});var n=function(e,t,a){var n="/search/movie?query=".concat(a),r="/movie/".concat(e),i="/movie/".concat(e,"/credits"),s="/movie/".concat(e,"/reviews");switch(t){case"trending":return"/trending/all/day";case"search":return n;case"details":return r;case"cast":return i;case"reviews":return s;default:return}},r={API_KEY:"5d8e08b77a668b368d7194faf94b14f5",BASE_URL:"https://api.themoviedb.org/3",IMG_BASE_URL:"https://image.tmdb.org/t/p/w500",MOVIE_IMG_PLACEHOLDER_URL:"https://placehold.jp/84848b/ffffff/200x300.jpg?text=Movie%20Poster%20Unavailable",CAST_IMG_PLACEHOLDER_URL:"https://placehold.jp/95959d/ffffff/80x120.png?text=NO%20IMAGE%20AVAILABLE"}},972:function(e,t,a){a.d(t,{Z:function(){return _},A:function(){return f}});var n=a(689),r=a(861),i=a(439),s=a(757),o=a.n(s),c=a(243),l=a(791),d=a(644),u=function(e){return!e||e!==v()},v=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1;return"".concat(t,"-").concat(a)},m=function(e){var t=(0,l.useState)(null),a=(0,i.Z)(t,2),n=a[0],s=a[1],m=(0,l.useState)(null),f=(0,i.Z)(m,2),_=f[0],h=f[1],x=(0,l.useState)(0),p=(0,i.Z)(x,2),I=p[0],g=p[1],j=(0,l.useState)(!0),L=(0,i.Z)(j,2),M=L[0],S=L[1],k=d.y.API_KEY,N=d.y.BASE_URL;return(0,l.useEffect)((function(){var t=function(){var t=(0,r.Z)(o().mark((function t(){var a,n,r,i,l,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&"/search/movie?query="!==e){t.next=4;break}return s(),S(!1),t.abrupt("return");case 4:if(t.prev=4,S(!0),!localStorage.getItem(e)){t.next=18;break}if(a=JSON.parse(localStorage.getItem(e)),n=a.timeStamp,r=a.responseData,u(n)){t.next=17;break}return s(r),h(null),S(!1),t.abrupt("return");case 17:localStorage.clear();case 18:return t.next=20,(0,c.Z)("".concat(N).concat(e),{params:{api_key:k,language:"en-US",adult:!1}});case 20:if(i=t.sent,0!==(l=i.data).total_results){t.next=26;break}return s(null),h(!0),t.abrupt("return");case 26:d=v(),localStorage.setItem(e,JSON.stringify({timeStamp:d,responseData:l})),s(i.data),h(null),g(i.data.total_results),t.next=38;break;case 33:t.prev=33,t.t0=t.catch(4),h(t.t0),s(null),console.log("Error fetching data from ".concat(e,": , ").concat(t.t0));case 38:return t.prev=38,S(!1),t.finish(38);case 41:case"end":return t.stop()}}),t,null,[[4,33,38,41]])})));return function(){return t.apply(this,arguments)}}();t()}),[e,k,N]),{data:n,error:_,isLoading:M,totalResults:I}},f=function(e,t){var a=(0,n.UO)().movieId,r=(0,d._)(a,e,t),i=m(r,t);return{movieId:a,URL:r,data:i.data,isLoading:i.isLoading,error:i.error}},_=f},254:function(e,t,a){a.d(t,{Z:function(){return d}});var n="MovieCard_movieGalleryItem__dnDEx",r="MovieCard_movieGalleryImg__9rhm1",i="MovieCard_movieItemDetails__QiHqU",s="MovieCard_movieGalleryDetailItem__w2MbF",o=a(644),c=a(809),l=a(184),d=function(e){var t=e.movie,a=e.releaseYear,d=e.userScore,u=e.overview,v=e.genres,m=e.isLoading,f=o.y.IMG_BASE_URL,_=o.y.MOVIE_IMG_PLACEHOLDER_URL,h="".concat(f).concat(t.poster_path);return m?(0,l.jsx)(c.Z,{}):(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("li",{className:n,children:[(0,l.jsx)("img",{className:r,src:function(e){return e.poster_path?h:_}(t),alt:t.title,"data-value":t.id,width:"200px"}),(0,l.jsxs)("ul",{className:i,children:[a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("li",{className:s,children:t.title||t.original_name}),(0,l.jsx)("li",{className:s,children:a.slice(0,4)})]}),d&&(0,l.jsxs)("li",{className:s,children:["User Score: ",d]}),u&&(0,l.jsx)("li",{className:s,children:u}),v&&(0,l.jsxs)("li",{className:s,children:["Genres:"," ",v.map((function(e){return(0,l.jsxs)("span",{children:[e.name," "]},e.id)}))]})]})]})})}},399:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n="MovieDetails_movieDetailsContainer__hxmcN",r="MovieDetails_movieDetailsList__goILT",i=a(972),s="BackButton_backButton__SI3qJ",o=a(689),c=a(87),l=a(184),d=function(e){e.onClick;var t=(0,o.TH)(),a=function(){var e,a=t.pathname;return a.includes("?query=")&&(e="/movies"),a.includes("/movie")&&(e="/"),e}();return(0,l.jsx)(c.rU,{className:s,to:a,children:"Go Back"})},u=a(254),v={additionalMovieInfo:"AdditionalInfoLinks_additionalMovieInfo__5r-Jb",additionalMovieInfoListItem:"AdditionalInfoLinks_additionalMovieInfoListItem__IF9Rl"},m=a(791),f=a(809),_=function(){var e=(0,o.UO)().movieId;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:v.additionalMovieInfo,children:[(0,l.jsx)("p",{className:v.additionalMovieInfoTitle,children:"Additional information"}),(0,l.jsxs)("ul",{className:v.additionalMovieInfoList,children:[(0,l.jsx)("li",{className:v.additionalMovieInfoListItem,children:(0,l.jsx)(c.OL,{to:"/movies/".concat(e,"/cast"),className:v.castLink,children:"Cast"})}),(0,l.jsx)("li",{className:v.additionalMovieInfoListItem,children:(0,l.jsx)(c.OL,{to:"/movies/".concat(e,"/reviews"),className:v.reviewLink,children:"Reviews"})})]})]}),(0,l.jsx)("div",{children:(0,l.jsx)(m.Suspense,{fallback:(0,l.jsx)(f.Z,{}),children:(0,l.jsx)(o.j3,{})})})]})},h=function(){var e=(0,i.Z)("details"),t=e.data,a=e.isLoading,s=t;return e.error?(0,l.jsx)("h1",{children:"Sorry, no movie details for the selected movie."}):a?(0,l.jsx)(f.Z,{}):(0,l.jsxs)("div",{className:n,children:[(0,l.jsx)(d,{}),(0,l.jsx)("ul",{className:r,children:(0,l.jsx)(u.Z,{movie:s,releaseYear:s.release_date,userScore:s.vote_average,overview:s.overview,genres:s.genres})}),(0,l.jsx)(_,{})]})}}}]);
//# sourceMappingURL=399.a41a33f8.chunk.js.map
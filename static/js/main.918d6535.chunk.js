(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{16:function(e,a,t){e.exports=t(47)},21:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),o=t.n(c),r=(t(21),t(4)),s=t(2),m=t(15),i=t.n(m),u=t(3);t(39);function d(e){return l.a.createElement("div",{className:"search"},l.a.createElement("input",{className:"search-field",type:"text",placeholder:"Search Movies",value:e.value,onChange:e.onChange}))}t(40);function p(e){return l.a.createElement("div",{className:"navbar"},l.a.createElement("p",{className:"navbar-title animate__animated animate__zoomInDown"},"Movie CMS"),l.a.createElement(d,{value:e.value,onChange:e.onChange}))}t(41);function v(e){var a=e.props,t=e.close;return l.a.createElement("div",{className:"modal"},l.a.createElement("button",{className:"modal-button1",onClick:t},"\xd7"),l.a.createElement("div",{className:"modal-block"},l.a.createElement("p",{className:"modal-header"},a.title),l.a.createElement("br",null),l.a.createElement("p",{className:"modal-font-size"},"Release date: ",a.release_date),a.adult&&l.a.createElement("p",{className:"modal-font-size"},"Category: Adult Only"),!a.adult&&l.a.createElement("p",{className:"modal-font-size"},"Category: All public"),l.a.createElement("p",{className:"modal-font-size"},"Original Language: ",a.original_language.toUpperCase()),l.a.createElement("br",null),l.a.createElement("p",{className:"modal-font-size"},"Overview:"),l.a.createElement("p",{className:"modal-content"},a.overview),l.a.createElement("br",null),l.a.createElement("p",{className:"modal-average modal-font-size"},"Vote average: ",a.vote_average),l.a.createElement("br",null),l.a.createElement("button",{className:"modal-button2",onClick:function(){t()}},"Close"),l.a.createElement("br",null)))}t(42);function E(e){var a=Object(n.useState)(" http://image.tmdb.org/t/p/w185"),t=Object(s.a)(a,1)[0];return l.a.createElement(u.a,{trigger:l.a.createElement("button",{className:"modal-button"},e.props.poster_path&&l.a.createElement("img",{src:t+e.props.poster_path,alt:"not found"}),l.a.createElement("p",{className:"modal-title"},e.props.title)),modal:!0,lockScroll:!0,closeOnDocumentClick:!0},(function(a){return l.a.createElement(v,{props:e.props,close:a})}))}t(43);function f(e){return l.a.createElement("li",{key:e.index,className:"moviecard"},l.a.createElement(E,{props:e.value}))}t(44);function b(e){return l.a.createElement("ul",null,Object.keys(e.value.results).map((function(a){return l.a.createElement(f,{key:a,index:a,value:e.value.results[a]})})))}t(45);function g(e){return l.a.createElement("div",{className:"container"},l.a.createElement(b,{value:e.value}))}t(46);function h(){var e=l.a.useState(""),a=Object(s.a)(e,2),t=a[0],n=a[1],c=l.a.useState({results:{}}),o=Object(s.a)(c,2),m=o[0],u=o[1];return l.a.useEffect((function(){i()("https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&query="+(""===t?"a":t)).then((function(e){return e})).then((function(e){u((function(a){return Object(r.a)(Object(r.a)({},a),{},{results:e.data.results})}))}))}),[t]),l.a.createElement("div",{className:"App"},l.a.createElement(p,{value:t,onChange:function(e){n(e.target.value)}}),l.a.createElement(g,{value:m}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.918d6535.chunk.js.map
(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{55:function(e,t,a){e.exports=a(90)},60:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),i=(a(60),a(61),a(4)),c=a(10),s=a(92),u=a(93),m=a(94),d=a(95),E=a(96),h=a(97),v=a(98),f=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{color:"faded",light:!0},r.a.createElement(u.a,{href:"/",className:"mr-auto"},"Sudoku Solver"),r.a.createElement(m.a,{onClick:function(){return l(!a)},className:"mr-2"}),r.a.createElement(d.a,{isOpen:!a,navbar:!0},r.a.createElement(E.a,{navbar:!0},r.a.createElement(h.a,null,r.a.createElement(v.a,{href:"#/"},"Home")),r.a.createElement(h.a,null,r.a.createElement(v.a,{href:"#/about"},"About"))))))},g=a(18),p=a(21),b=function(){function e(){Object(g.a)(this,e),this.board=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],this.type=e.TYPES.NORMAL}return Object(p.a)(e,[{key:"setBoard",value:function(e){for(var t=0;t<9;++t)for(var a=0;a<9;++a)this.board[t][a]=e[t][a]}},{key:"setType",value:function(e){this.type=e}},{key:"isInItsRow",value:function(e,t){for(var a=0;a<9;++a)if(this.board[e][a]===t)return!0;return!1}},{key:"isInItsCol",value:function(e,t){for(var a=0;a<9;++a)if(this.board[a][e]===t)return!0;return!1}},{key:"isInItsBox",value:function(e,t,a){for(var n=e-e%3,r=t-t%3,l=n;l<n+3;++l)for(var o=r;o<r+3;++o)if(this.board[l][o]===a)return!0;return!1}},{key:"isInItsKnight",value:function(e,t,a){for(var n=[-2,-1,1,2,2,1,-1,-2],r=[1,2,2,1,-1,-2,-2,-1],l=0;l<8;++l){var o=e+n[l],i=t+r[l];if(o>=0&&i>=0&&o<9&&i<9&&this.board[o][i]===a)return!0}return!1}},{key:"isInItsKing",value:function(e,t,a){for(var n=[-1,-1,1,1],r=[-1,1,-1,1],l=0;l<4;++l){var o=e+n[l],i=t+r[l];if(o>=0&&i>=0&&o<9&&i<9&&this.board[o][i]===a)return!0}return!1}},{key:"isAConsecutiveOrhtogonallyAdjacent",value:function(e,t,a){for(var n=[-1,0,0,1],r=[0,1,-1,0],l=0;l<4;++l){var o=e+n[l],i=t+r[l],c=a-1,s=a+1;if(o>=0&&i>=0&&o<9&&i<9){if(c>=1&&c<=9&&this.board[o][i]===c)return!0;if(s>=1&&s<=9&&this.board[o][i]===s)return!0}}return!1}},{key:"isOkToPlace",value:function(t,a,n){switch(this.type){case e.TYPES.NORMAL:return!this.isInItsRow(t,n)&&!this.isInItsCol(a,n)&&!this.isInItsBox(t,a,n);case e.TYPES.KING:return!this.isInItsRow(t,n)&&!this.isInItsCol(a,n)&&!this.isInItsBox(t,a,n)&&!this.isInItsKing(t,a,n);case e.TYPES.KNIGHT:return!this.isInItsRow(t,n)&&!this.isInItsCol(a,n)&&!this.isInItsBox(t,a,n)&&!this.isInItsKnight(t,a,n);case e.TYPES.MIRACLE:return!this.isInItsRow(t,n)&&!this.isInItsCol(a,n)&&!this.isInItsBox(t,a,n)&&!this.isInItsKnight(t,a,n)&&!this.isInItsKing(t,a,n)&&!this.isAConsecutiveOrhtogonallyAdjacent(t,a,n);default:return!1}}},{key:"solve",value:function(){for(var e=0;e<9;++e)for(var t=0;t<9;++t)if(!this.board[e][t]){for(var a=1;a<=9;++a)if(this.isOkToPlace(e,t,a)){if(this.board[e][t]=a,this.solve())return!0;this.board[e][t]=0}return!1}return!0}},{key:"display",value:function(){for(var e="",t=0;t<9;++t){for(var a=0;a<9;++a)e=e.concat(this.board[t][a]," ");console.log(e),e=""}}}]),e}();b.TYPES={NORMAL:1,KING:2,KNIGHT:3,MIRACLE:4};var I=function(e){var t=e.number,a=e.setBoard,l=e.i,o=e.j,i=e.disabled,s=Object(n.useState)(t),u=Object(c.a)(s,2),m=u[0],d=u[1],E=Object(n.useState)(!0),h=Object(c.a)(E,2),v=h[0],f=h[1];Object(n.useEffect)((function(){f(!0),d(t)}),[t]);return r.a.createElement("div",{className:"square ".concat(v?"":"bad")},r.a.createElement("input",{className:"inputNumber ".concat(v?"":"bad"),type:"text",maxLength:"1",value:m||"",disabled:i,onChange:function(e){return function(e){var t=parseInt(e.target.value);Number.isInteger(t)&&t>0&&t<=9||""===e.target.value?(f(!0),""===e.target.value&&(t=0),a((function(e){return e[l][o]=t,e}))):f(!1),d(e.target.value)}(e)}}))},y=function(e){var t=e.board,a=e.setBoard,n=e.disabled;return r.a.createElement("div",{className:"grid"},t.map((function(e,t){return e.map((function(e,l){return r.a.createElement(I,{key:"".concat(t,"-").concat(l),i:t,j:l,disabled:n,setBoard:a,number:e})}))})))},k=a(99),N=a(100),O=a(101),T=a(102),S=a(103),j=a(104),w=a(105),K=a(106),C=a(107);var B=function(){var e=Object(n.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),t=Object(c.a)(e,2),a=t[0],l=t[1],o=new b,i=Object(n.useState)(!0),s=Object(c.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(b.TYPES.NORMAL),E=Object(c.a)(d,2),h=E[0],v=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:"mt-3"},r.a.createElement(N.a,null,r.a.createElement(O.a,{xs:"auto"},r.a.createElement(y,{board:a,setBoard:l,disabled:!u})),r.a.createElement(O.a,{xs:"3",className:"mt-3"},r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(T.a,{className:"mt-1",color:"primary",disabled:!u,onClick:function(){m(!1),o.setBoard(a),o.setType(h),o.solve(),l(o.board)}},"Solve")),r.a.createElement(N.a,null,r.a.createElement(T.a,{className:"mt-1",color:"secondary",onClick:function(){m(!0),l([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]])}},"Reset")),r.a.createElement(N.a,{className:"mt-1"},r.a.createElement(S.a,null,r.a.createElement(j.a,null,r.a.createElement(w.a,{className:"col-form-label",style:{textDecoration:"underline"}},"Sudoku Type:"),r.a.createElement(O.a,{onChange:function(e){"normal"===e.target.value?v(b.TYPES.NORMAL):"knight"===e.target.value?v(b.TYPES.KNIGHT):"king"===e.target.value?v(b.TYPES.KING):"miracle"===e.target.value&&v(b.TYPES.MIRACLE)}},r.a.createElement(j.a,null,r.a.createElement(w.a,null,r.a.createElement(K.a,{type:"radio",value:"normal",name:"radio",defaultChecked:!0})," ",r.a.createElement("span",{id:"tooltipNormal"},"Normal")),r.a.createElement(C.a,{placement:"right",target:"tooltipNormal"},"Normal sudoku rules apply.")),r.a.createElement(j.a,null,r.a.createElement(w.a,null,r.a.createElement(K.a,{type:"radio",value:"knight",name:"radio"})," ",r.a.createElement("span",{id:"tooltipKnight"},"Knight")),r.a.createElement(C.a,{placement:"right",target:"tooltipKnight"},"Normal sudoku rules apply. Two cells separated by a knight's move cannot cointain the same digit.")),r.a.createElement(j.a,null,r.a.createElement(w.a,null,r.a.createElement(K.a,{type:"radio",value:"king",name:"radio"})," ",r.a.createElement("span",{id:"tooltipKing"},"King")),r.a.createElement(C.a,{placement:"right",target:"tooltipKing"},"Normal sudoku rules apply. Two cells separated by a king's move cannot cointain the same digit.")),r.a.createElement(j.a,null,r.a.createElement(w.a,null,r.a.createElement(K.a,{type:"radio",value:"miracle",name:"radio"})," ",r.a.createElement("span",{id:"tooltipMiracle"},"Miracle")),r.a.createElement(C.a,{placement:"right",target:"tooltipMiracle"},"Normal sudoku rules apply. Two cells separated by a king's move or a knight's move cannot cointain the same digit. Two orthogonally adjacent cells cannot contain consecutive digits.")))))))))))},R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:"mt-3"},r.a.createElement(N.a,null,r.a.createElement("p",{style:{textDecoration:"underline"}},"By Jose"))))};var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(B,null)}),r.a.createElement(i.a,{path:"/about",element:r.a.createElement(R,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(37);o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null,r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.0597f668.chunk.js.map
(this["webpackJsonptinder-clone"]=this["webpackJsonptinder-clone"]||[]).push([[0],{54:function(e,a,t){e.exports=t(86)},59:function(e,a,t){},60:function(e,a,t){},66:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),l=t.n(r),s=(t(59),t(60),t(41)),m=t.n(s),o=t(42),i=t.n(o),p=t(99),u=t(40),_=t.n(u),h=t(5),E=t(22);var f=function(e){var a=e.backButton,t=Object(h.f)();return c.a.createElement("div",{className:"header"},a?c.a.createElement(p.a,{onClick:function(){return t.replace(a)}},c.a.createElement(_.a,{fontSize:"large",className:"header__icon"})):c.a.createElement(p.a,null,c.a.createElement(m.a,{className:"header__icon",fontSize:"large"})),c.a.createElement(E.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"logo101.png",alt:"tinder logo"})),c.a.createElement(E.b,{to:"/chats"},c.a.createElement(p.a,null,c.a.createElement(i.a,{className:"header__icon",fontSize:"large"}))))},d=(t(66),t(32)),g=t(43),v=t.n(g),b=t(44),N=t.n(b).a.initializeApp({apiKey:"AIzaSyBrSstHWD5fZHPkbNN1J5IkCNPdayeM8x4",authDomain:"tinder-clone-1a925.firebaseapp.com",databaseURL:"https://tinder-clone-1a925.firebaseio.com",projectId:"tinder-clone-1a925",storageBucket:"tinder-clone-1a925.appspot.com",messagingSenderId:"23198969677",appId:"1:23198969677:web:aa6ce678514866015b9104",measurementId:"G-0DJCVSZ7RE"}).firestore(),S=(t(81),[{name:"Rachel",url:"rachel.jpeg"},{name:"Arpit",url:"https://avatars1.githubusercontent.com/u/16517873?v=4"},{name:"Poonam",url:"poonam_soni.jpeg"},{name:"Emily",url:"emily.jpeg"},{name:"Monica",url:"monica.jpeg"},{name:"Phoebe",url:"pheoebe.jpeg"},{name:"Rachel",url:"rachel.jpeg"},{name:"Joey",url:"Joey.jpeg"},{name:"Chandler",url:"chandler.jpeg"}]);var w=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){var e=N.collection("people").onSnapshot((function(e){t(e.docs.map((function(e){return e.data()})))}));return function(){e()}}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"tinderCards__cardContainer"},S.map((function(e){return c.a.createElement(v.a,{className:"swipe",key:e.name,preventSwipe:["up","down"]},c.a.createElement("div",{className:"card",style:{backgroundImage:"url(".concat(e.url,")")}},c.a.createElement("h3",null,e.name)))}))))},j=t(45),y=t.n(j),k=t(46),z=t.n(k),B=t(47),A=t.n(B),I=t(48),P=t.n(I),x=t(49),O=t.n(x);t(82);var F=function(){return c.a.createElement("div",{className:"swipeButtons"},c.a.createElement(p.a,{className:"swipeButtons_repeat"},c.a.createElement(y.a,{fontSize:"large"})),c.a.createElement(p.a,{className:"swipeButtons__left"},c.a.createElement(z.a,{fontSize:"large"})),c.a.createElement(p.a,{className:"swipeButtons__star"},c.a.createElement(A.a,{fontSize:"large"})),c.a.createElement(p.a,{className:"swipeButtons__right"},c.a.createElement(P.a,{fontSize:"large"})),c.a.createElement(p.a,{className:"swipeButtons__lightning"},c.a.createElement(O.a,{fontSize:"large"})))},H=(t(83),t(84),t(100));var C=function(e){var a=e.name,t=e.message,n=e.profilePic,r=e.timestamp;return c.a.createElement(E.b,{to:"/chat/".concat(a)},c.a.createElement("div",{className:"chat"},c.a.createElement(H.a,{className:"chat__image",alt:a,src:n}),c.a.createElement("div",{className:"chat__details"},c.a.createElement("h2",null,a),c.a.createElement("p",null,t)),c.a.createElement("p",{className:"chat__timestamp"},r)))};var J=function(){return c.a.createElement("div",{className:"chats"},c.a.createElement(C,{name:"Mark",message:"Hey! How are you?",timestamp:"40 seconds ago",profilePic:"..."}),c.a.createElement(C,{name:"Arpit",message:"Whats up ?",timestamp:"30 seconds ago",profilePic:"https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/p960x960/117411674_3071504492897135_521212679289573870_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=vU74FSQIwmEAX88zqLm&_nc_ht=scontent.fblr1-4.fna&tp=6&oh=37a1f65100379849a7e086dc9e697c51&oe=5F814450"}),c.a.createElement(C,{name:"Jean",message:"Ola !!",timestamp:"3 days ago",profilePic:"..."}),c.a.createElement(C,{name:"Poonam",message:"Yo whats up",timestamp:"1 week ago",profilePic:"https://scontent.fblr1-3.fna.fbcdn.net/v/t31.0-8/p960x960/21768614_1781951555179006_3081378396254504956_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=jVKxI4zaPGAAX-ehqkm&_nc_ht=scontent.fblr1-3.fna&tp=6&oh=9e529c90405a2beafaf775c24251927a&oe=5F7E8B05"}))};t(85);var L=function(){var e=Object(n.useState)([{name:"Arpit",image:"https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/p960x960/117411674_3071504492897135_521212679289573870_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=vU74FSQIwmEAX88zqLm&_nc_ht=scontent.fblr1-4.fna&tp=6&oh=37a1f65100379849a7e086dc9e697c51&oe=5F814450",message:"Whats up :heart"},{name:"Arpit",image:"https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/p960x960/117411674_3071504492897135_521212679289573870_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=vU74FSQIwmEAX88zqLm&_nc_ht=scontent.fblr1-4.fna&tp=6&oh=37a1f65100379849a7e086dc9e697c51&oe=5F814450",message:"Howz it going?"},{message:"Howddyy!!"}]),a=Object(d.a)(e,2),t=a[0];return a[1],c.a.createElement("div",{className:"chatScreen"},c.a.createElement("p",{className:"chatScreen_timeStamp"},"YOU MATCHED WITH ELLEN ON 10/08/20"),t.map((function(e){return e.name?c.a.createElement("div",{className:"chatScreen__message"},c.a.createElement(H.a,{className:"chatScreen__image",alt:e.name,src:e.image}),c.a.createElement("p",{className:"chatScreen_text"},e.message)):c.a.createElement("div",{className:"chatScreen__message"},c.a.createElement("p",{className:"chatScreen_textUser"},e.message))})),c.a.createElement("form",{className:"chatScreen_input"},c.a.createElement("input",{className:"chatScreen_inputField",placeholder:"Type a message...",type:"text"}),c.a.createElement("button",{className:"chatScreen_inputButton"},"SEND ")))};var U=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E.a,null,c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/chat/:person"},c.a.createElement(f,{backButton:"/chats"}),c.a.createElement(L,null)),c.a.createElement(h.a,{path:"/chats"},c.a.createElement(f,{backButton:"/"}),c.a.createElement(J,null)),c.a.createElement(h.a,{path:"/"},c.a.createElement(f,null),c.a.createElement(w,null),c.a.createElement(F,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.70132a09.chunk.js.map
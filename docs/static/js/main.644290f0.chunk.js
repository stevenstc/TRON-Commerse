(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(54),i=t.n(s),c=t(2),o=t.n(c),l=t(6),m=t(11),u=t(12),p=t(14),d=t(13),h=t(15),g=t(55),b=t.n(g),f={tronWeb:!1,contract:!1,setTronWeb:function(e){this.tronWeb=e},setContract:function(){var e=Object(l.a)(o.a.mark(function e(a,t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.contract().at(t);case 2:this.contract=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}()},k=t(4),w=t(16),v=t.n(w),j=t(27),y=(t(197),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(d.a)(a).call(this,e))).state={dataLength:j.length,allItems:[],totalItems:0},t.addItem=t.addItem.bind(Object(k.a)(Object(k.a)(t))),t.buyItem=t.buyItem.bind(Object(k.a)(Object(k.a)(t))),t.checkItem=t.checkItem.bind(Object(k.a)(Object(k.a)(t))),t.checkItemsTotal=t.checkItemsTotal.bind(Object(k.a)(Object(k.a)(t))),t.startEventListeners=t.startEventListeners.bind(Object(k.a)(Object(k.a)(t))),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.setContract(window.tronWeb,"41A03ED915BAAA7C556C0A9624B3130E74162453F4");case 2:this.startEventListeners();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"addItem",value:function(){var e=this,a=this.state,t=a.totalItems,n=a.dataLength,s=a.allItems;if(t>=n)v()({title:"No more items in data to add.",type:"error"});else{var i=j[t];i.price=parseFloat(10*Math.random()).toFixed(0),i.id=t,s.push(r.a.createElement("div",{className:"eCommerce-item",key:i.id},r.a.createElement("img",{className:"item-image",src:i.image,alt:i.name}),r.a.createElement("div",{className:"item-name"},i.name),r.a.createElement("div",{className:"price-buy-container"},r.a.createElement("div",{className:"item-price"},i.price," TRX"),r.a.createElement("button",{className:"buy-button",onClick:function(){return e.buyItem(i.id,i.price)}},"Buy"),r.a.createElement("button",{className:"buy-button",onClick:function(){return e.checkItem(i.id)}},"Check")))),this.setState({totalItems:t+1}),f.contract.addItem(i.name,i.price).send({shouldPollResponse:!0})}}},{key:"checkItemsTotal",value:function(){var e=Object(l.a)(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f.contract.checkItemsTotal().send({callValue:0}),e.next=3,f.contract.Total().watch(function(e,t){var n=t.result;if(e)return console.log("Failed to bind event listener",e);n&&(v.a.fire({title:"This contract has ".concat(n.totalItems," items."),type:"success"}),a.stop())});case 3:a=e.sent;case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"checkItem",value:function(){var e=Object(l.a)(o.a.mark(function e(a){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f.contract.checkItem(a).send({callValue:0}),e.next=3,f.contract.Availability().watch(function(e,a){var n=a.result;if(e)return console.log("Failed to bind event listener",e);n&&(v.a.fire({title:"Available: ".concat(n.available,"."),type:n.available?"success":"error"}),t.stop())});case 3:t=e.sent;case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},{key:"buyItem",value:function(e,a){f.contract.buyItem(e).send({shouldPollResponse:!0,callValue:1e6*a})}},{key:"startEventListeners",value:function(){f.contract.Purchased().watch(function(e,a){var t=a.result;if(e)return console.log("Failed to bind event listener",e);t&&v.a.fire({title:"".concat(t.name," has been purchased for ").concat(t.price,"."),html:"<p>Seller: ".concat(t.seller,"</p><p>Buyer: ").concat(t.buyer,"</p>"),type:"success"})}),f.contract.Added().watch(function(e,a){var t=a.result;if(e)return console.log("Failed to bind event listener",e);t&&v.a.fire({title:"".concat(t.name," has been added for ").concat(t.price,"."),html:"<p>Seller: ".concat(t.seller,"</p>")+"<p>Added: ".concat(t.exists,"</p>")+"<p>Available: ".concat(t.available,"</p>"),type:"success"})})}},{key:"render",value:function(){var e=this.state,a=e.allItems,t=e.totalItems;return r.a.createElement("div",{className:"eCommerce-component-container"},r.a.createElement("div",{className:"eCommerce-component-dash"},r.a.createElement("div",null,"Total Items In Store: ",t),r.a.createElement("button",{onClick:this.checkItemsTotal},"Total Contract Items"),r.a.createElement("button",{onClick:this.addItem},"Add Item")),r.a.createElement("div",{className:"eCommerce-item-container"},a))}}]),a}(n.Component)),E=(t(198),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(d.a)(a).call(this,e))).state={accountAddress:"account address will show up here",accountBalance:"account balance will show up here",accountBandwidth:"account bandwidth will show up here"},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchAccountAddress(),this.fetchAccountBalance(),this.fetchAccountBandwidth()}},{key:"fetchAccountAddress",value:function(){var e=Object(l.a)(o.a.mark(function e(){var a,t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:a=e.sent,t=a.address,n=window.tronWeb.address.fromHex(t),this.setState({accountAddress:n});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchAccountBalance",value:function(){var e=Object(l.a)(o.a.mark(function e(){var a,t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getBalance();case 2:a=e.sent,t=window.tronWeb.fromSun(a),this.setState({accountBalance:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchAccountBandwidth",value:function(){var e=Object(l.a)(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getBandwidth();case 2:a=e.sent,this.setState({accountBandwidth:a});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.accountAddress,t=e.accountBalance,n=e.accountBandwidth;return r.a.createElement("div",{className:"tronLinkInfo-component-container"},r.a.createElement("div",{className:"account-info-header"}," Account Information "),r.a.createElement("div",{className:"account-info-address"},"Address: ",r.a.createElement("span",null,a)),r.a.createElement("div",{className:"account-info-balance"},"Balance: ",r.a.createElement("span",null,t)),r.a.createElement("div",{className:"account-info-bandwidth"},"Bandwidth: ",r.a.createElement("span",null,n)))}}]),a}(n.Component)),W=t(56),B=t.n(W),I=(t(199),"https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/"),N=r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:B.a,alt:"TronLink logo"})),O=function(){window.open(I,"_blank")},T=function(e){var a=e.installed;return void 0!==a&&a?r.a.createElement("div",{className:"tronLink hover",onClick:O},r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,"Log in Required"),r.a.createElement("p",null,"TronLink is installed but you must first log in. Open TronLink from the browser bar and set up your first wallet or decrypt a previously-created wallet.")),N):r.a.createElement("div",{className:"tronLink",onClick:O},r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,"TronLink Required"),r.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink is a TRON wallet for the browser that can be ",r.a.createElement("a",{href:I,target:"_blank",rel:"noopener noreferrer"},"installed from the Chrome Webstore"),". Once installed, return back and refresh the page.")),N)},x=(t(200),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(d.a)(a).call(this,e))).state={tronWeb:{installed:!1,loggedIn:!1}},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){var a=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){var t={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(t.installed)return a.setState({tronWeb:t}),e();var n=0,r=setInterval(function(){if(n>=10){return window.tronWeb=new b.a("https://api.trongrid.io","https://api.trongrid.io","https://api.trongrid.io"),a.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),e()}if(t.installed=!!window.tronWeb,t.loggedIn=window.tronWeb&&window.tronWeb.ready,!t.installed)return n++;a.setState({tronWeb:t}),e()},100)});case 2:this.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex("TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"),base58:"TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"},window.tronWeb.on("addressChange",function(){a.state.tronWeb.loggedIn||a.setState({tronWeb:{installed:!0,loggedIn:!0}})})),f.setTronWeb(window.tronWeb);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?r.a.createElement("div",null,r.a.createElement("header",{className:"header-container"},r.a.createElement("div",{className:"resource-links-container"},r.a.createElement("div",{className:"app-title"},"TRX-Kicks"),r.a.createElement("a",{className:"nav-link",href:"https://developers.tron.network/docs",rel:"noopener noreferrer",target:"_blank"},"Guides"),"\xa0 \xa0",r.a.createElement("a",{className:"nav-link",href:"https://developers.tron.network/docs",rel:"noopener noreferrer",target:"_blank"},"API Reference"),"\xa0 \xa0",r.a.createElement("a",{className:"nav-link",href:"https://tronscan.org/#/",rel:"noopener noreferrer",target:"_blank"},"TronScan"),"\xa0 \xa0",r.a.createElement("a",{className:"nav-link",href:"https://tronstation.io/",rel:"noopener noreferrer",target:"_blank"},"TronStation")),r.a.createElement(E,null)),r.a.createElement("div",null,r.a.createElement(y,null))):r.a.createElement(T,{installed:!0}):r.a.createElement(T,null)}}]),a}(n.Component)),A=document.getElementById("root");i.a.render(r.a.createElement(x,null),A)},27:function(e){e.exports=[{name:"Beige Pointed-toe Pumps",price:"",image:"/images/beige-pointedtoe-pumps-photos-by-lanty-568659-unsplash.jpg"},{name:"Black on White High Top Converse",price:"",image:"/images/black-hi-converse-mitch-lensink-256007-unsplash.jpg"},{name:"Black Stilettos",price:"",image:"/images/black-stilettos-andrew-tanglao-505288-unsplash.jpg"},{name:"Black on Black High Top Converse",price:"",image:"/images/blk-blk-chucks-omar-prestwich-91708-unsplash.jpg"},{name:"Black Chunky Heels",price:"",image:"/images/blk-chnky-heels-camila-damasio-259526-unsplash.jpg"},{name:"Black and Colorful Nike Trainers",price:"",image:"/images/blk-clrfl-nike-kristian-egelund-113903-unsplash.jpg"},{name:"Classic Black Dress Shoes",price:"",image:"/images/blk-dress-shs-mark-rabe-341214-unsplash.jpg"},{name:"Black Boots with Floral Print",price:"",image:"/images/blk-floral-boots-dakota-krupp-559713-unsplash.jpg"},{name:"Gray and Black Nike Trainers",price:"",image:"/images/blk-grey-nike-imani-clovis-234736-unsplash.jpg"},{name:"Black and Gray Wedges",price:"",image:"/images/blk-grey-wedges-allyson-johnson-73023-unsplash.jpg"},{name:"Black on White Pumas",price:"",image:"/images/blk-wh-puma-kunal-barua-571176-unsplash.jpg"},{name:"Black, White and Red Nike Air Jordans",price:"",image:"/images/blk-wh-red-air-js-paul-volkmer-451300-unsplash.jpg"},{name:"Blue Nikes with White Swoosh",price:"",image:"/images/blue-white-nike-alexander-rotker-513958-unsplash.jpg"},{name:"Brown Suede Shoes",price:"",image:"/images/brown-suede-shoes-josh-sorenson-1091452-unsplash.jpg"},{name:"Brown Boots",price:"",image:"/images/brwn-boots-pablo-e-ortiz-439934-unsplash.jpg"},{name:"Brown Dress Shoes",price:"",image:"/images/brwn-drs-shoes-rob-potter-364323-unsplash.jpg"},{name:"Brown Lace Ups",price:"",image:"/images/brwn-laceups-jeremy-yap-444082-unsplash.jpg"},{name:"Brown Leather Shoes",price:"",image:"/images/brwn-lthr-dress-shoes-clem-onojeghuo-130511-unsplash.jpg"},{name:"Gold Glittery Heels",price:"",image:"/images/glitter-gold-sandheels-charisse-kenion-509807-unsplash.jpg"},{name:"Gray Nike Air Jordans with Gold Swoosh",price:"",image:"/images/gold-grey-air-js-mnz-1150338-unsplash.jpg"},{name:"Gray Heel Booties",price:"",image:"/images/grey-booties-caitlyn-wilson-114549-unsplash.jpg"},{name:"Gray Platform Stilettos",price:"",image:"/images/grey-platform-stilettos-eric-nopanen-658043-unsplash.jpg"},{name:"Gray and White Vans",price:"",image:"/images/grey-wh-vans-peter-fogden-456187-unsplash.jpg"},{name:"Gray and White Adidas",price:"",image:"/images/grey-white-addidas-fachry-zella-devandra-549690-unsplash.jpg"},{name:"Maroon and White Vans",price:"",image:"/images/maroon-white-vans-paul-gaudriault-661082-unsplash.jpg"},{name:"Military Green Nikes",price:"",image:"/images/military-green-nike-jayson-hinrichsen-713153-unsplash.jpg"},{name:"Hot Pink Stilettos",price:"",image:"/images/pink-stilettos-sladjana-karvounis-475851-unsplash.jpg"},{name:"Pink Red Bottom Heels",price:"",image:"/images/pnk-red-bottom-heels-photos-by-lanty-568716-unsplash.jpg"},{name:"Red and White Converse",price:"",image:"/images/red-converse-tirza-van-dijk-74845-unsplash.jpg"},{name:"Red Nike High Tops",price:"",image:"/images/red-hi-nike-eddy-lackmann-139878-unsplash.jpg"},{name:"Tan Timberlands",price:"",image:"/images/tan-timberlands-kyle-loftus-1169706-unsplash.jpg"},{name:"Tan, White ands Blue Nike Air Max",price:"",image:"/images/tan-white-blue-airmax-lefteris-kallergis-499890-unsplash.jpg"},{name:"Orange and Teal Adidas",price:"",image:"/images/teal-orange-addidas-joshua-coleman-707057-unsplash.jpg"},{name:"White and Black Nikes",price:"",image:"/images/wh-blk-nike-joseph-barrientos-82309-unsplash.jpg"},{name:"White Stilettos",price:"",image:"/images/wh-stilettos-james-bold-607809-unsplash.jpg"},{name:"White, High Top Nike Air Force 1",price:"",image:"/images/white-af1-hi-xavier-teo-469050-unsplash.jpg"},{name:"White and Blue Nike Air Force 1",price:"",image:"/images/white-blue-af1-arthur-ogleznev-672410-unsplash.jpg"},{name:"White and red Jordans",price:"",image:"/images/white-red-jordans-nick-faltermeier-98575-unsplash.jpg"},{name:"White Yeezys",price:"",image:"/images/white-yeezys-sebastian-pociecha-373358-unsplash.jpg"},{name:"Black and White Yeezys",price:"",image:"/images/yeezys-daniel-chen-217770-unsplash.jpg"}]},56:function(e,a,t){e.exports=t.p+"static/media/TronLinkLogo.d3a8f115.png"},57:function(e,a,t){e.exports=t(201)},89:function(e,a){},91:function(e,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.644290f0.chunk.js.map
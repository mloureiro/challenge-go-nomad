(this["webpackJsonpgo-nomad"]=this["webpackJsonpgo-nomad"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"a":"Aq6YtQjJ7PaDknkrFTyHBKhAsV6GKdUm"}')},,function(e,t,a){e.exports=a(25)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),l=a.n(c),o=(a(15),a(16),a(17),a(2)),s=a(9),i=(a(18),function(e){var t=e.title,a=e.children,c=Object(s.a)(a),l=c[0],o=c.slice(1);return n.a.createElement(r.Fragment,null,n.a.createElement("header",{className:"header-with-dynamic-content-blocks--header"},n.a.createElement("h1",{className:"is-size-3"},t),l),n.a.createElement("section",{className:"header-with-dynamic-content-blocks--content-wrapper"},o))}),u=function(e){return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")},m=function(e){var t=e.url,a=e.path,r=e.query,n=-1===a.indexOf("?")?"?":"",c=0===a.indexOf("/")?"":"/";return"".concat(t).concat(c).concat(a).concat(n).concat(r)},d=function(e){var t=null;return function(){return t||(t=e.apply(void 0,arguments)),t}},p=a(1),f=function(e){return{id:e.id,code:e.code,relevancyRank:e.rank,name:e.name,cityName:e.city.name,countryName:e.city.country.name,countryCode:e.city.country.id}},h=function(e){return{id:e.id,code:e.code,relevancyRank:e.rank,cityName:e.name,countryName:e.country.name,countryCode:e.country.id}},y=function(e){return function(t){return e({service:"/locations",parameters:{term:t,location_types:"city"}}).then((function(e){return e.locations.map(h)}))}},g=function(e){return{dates:{durationInSeconds:e.aTimeUTC-e.dTimeUTC,departure:{utc:new Date(1e3*e.dTimeUTC),local:new Date(1e3*e.dTime)},arrival:{utc:new Date(1e3*e.aTimeUTC),local:new Date(1e3*e.aTime)}}}},v=function(e){return{from:{code:e.flyFrom,city:{code:e.cityCodeFrom,name:e.cityFrom},country:e.countryFrom}}},w=function(e){return{to:{code:e.flyTo,city:{code:e.cityCodeTo,name:e.cityTo},country:e.countryTo}}},E=function(e){return e.flight_no?{number:e.flight_no,carrier:e.airline}:null},b=function(e){return Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)({},g(e)),v(e)),w(e)),{},{vehicleType:e.vehicle_type,flight:E(e)})},N=function(e){var t=e.getDate().toString().padStart(2,"0"),a=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getFullYear();return"".concat(t,"/").concat(a,"/").concat(r)},C=function(e){return function(t){var a=t.fromCity,r=t.toCity,n=t.fromDate,c=t.toDate,l=t.currency,o=void 0===l?"EUR":l,s=t.limit,i=void 0===s?10:s,u=t.sort,m=void 0===u?"price":u,d=t.maxJumps,f=void 0===d?5:d;return e({service:"/flights",parameters:{partner:"picky",fly_to:r,fly_from:a,to_type:"city",flyFrom_type:"city",date_from:N(n),date_to:N(c),curr:o,limit:i,sort:m,max_stopovers:f}}).then((function(e){return e.data.map(function(e){return function(t){return Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)({id:t.id,price:{value:t.price,currency:e},bookUrl:t.deep_link,seatsAvailable:t.availability.seats},g(t)),v(t)),w(t)),{},{route:t.route.map(b)})}}(o))}))}},S=d((function(){var e,t=function(e){var t=e.service,a=e.parameters,r=void 0===a?{}:a,n=e.headers,c=void 0===n?{}:n,l=m({url:"https://api.skypicker.com",path:t,query:u(r)});return fetch(l,{method:"GET",headers:Object(p.a)({"Accept-Encoding":"gzip, deflate"},c)}).then((function(e){return e.json()}))};return{findAirport:(e=t,function(t){return e({service:"/locations",parameters:{term:t,location_types:"airport"}}).then((function(e){return e.locations.map(f)}))}),findCity:y(t),findFlight:C(t)}})),k=a(8),j=function(e){return{id:e.Key,relevancyRank:e.Rank,name:e.LocalizedName,country:e.Country.LocalizedName,countryCode:e.Country.ID}},O={1:{src:"https://developer.accuweather.com/sites/default/files/01-s.png",alt:"Sunny"},2:{id:2,src:"https://developer.accuweather.com/sites/default/files/02-s.png",alt:"Mostly Sunny"},3:{id:3,src:"https://developer.accuweather.com/sites/default/files/03-s.png",alt:"Partly Sunny"},4:{id:4,src:"https://developer.accuweather.com/sites/default/files/04-s.png",alt:"Intermittent Clouds"},5:{id:5,src:"https://developer.accuweather.com/sites/default/files/05-s.png",alt:"Hazy Sunshine"},6:{id:6,src:"https://developer.accuweather.com/sites/default/files/06-s.png",alt:"Mostly Cloudy"},7:{id:7,src:"https://developer.accuweather.com/sites/default/files/07-s.png",alt:"Cloudy"},8:{id:8,src:"https://developer.accuweather.com/sites/default/files/08-s.png",alt:"Dreary (Overcast"},11:{id:11,src:"https://developer.accuweather.com/sites/default/files/11-s.png",alt:"Fog"},12:{id:12,src:"https://developer.accuweather.com/sites/default/files/12-s.png",alt:"Showers"},13:{id:13,src:"https://developer.accuweather.com/sites/default/files/13-s.png",alt:"Mostly Cloudy w/ Showers"},14:{id:14,src:"https://developer.accuweather.com/sites/default/files/14-s.png",alt:"Partly Sunny w/ Showers"},15:{id:15,src:"https://developer.accuweather.com/sites/default/files/15-s.png",alt:"T-Storms"},16:{id:16,src:"https://developer.accuweather.com/sites/default/files/16-s.png",alt:"Mostly Cloudy w/ T-Storms"},17:{id:17,src:"https://developer.accuweather.com/sites/default/files/17-s.png",alt:"Partly Sunny w/ T-Storms"},18:{id:18,src:"https://developer.accuweather.com/sites/default/files/18-s.png",alt:"Rain"},19:{id:19,src:"https://developer.accuweather.com/sites/default/files/19-s.png",alt:"Flurries"},20:{id:20,src:"https://developer.accuweather.com/sites/default/files/20-s.png",alt:"Mostly Cloudy w/ Flurries"},21:{id:21,src:"https://developer.accuweather.com/sites/default/files/21-s.png",alt:"Partly Sunny w/ Flurries"},22:{id:22,src:"https://developer.accuweather.com/sites/default/files/22-s.png",alt:"Snow"},23:{id:23,src:"https://developer.accuweather.com/sites/default/files/23-s.png",alt:"Mostly Cloudy w/ Snow"},24:{id:24,src:"https://developer.accuweather.com/sites/default/files/24-s.png",alt:"Ice"},25:{id:25,src:"https://developer.accuweather.com/sites/default/files/25-s.png",alt:"Sleet"},26:{id:26,src:"https://developer.accuweather.com/sites/default/files/26-s.png",alt:"Freezing Rain"},29:{id:29,src:"https://developer.accuweather.com/sites/default/files/29-s.png",alt:"Rain and Snow"},30:{id:30,src:"https://developer.accuweather.com/sites/default/files/30-s.png",alt:"Hot"},31:{id:31,src:"https://developer.accuweather.com/sites/default/files/31-s.png",alt:"Cold"},32:{id:32,src:"https://developer.accuweather.com/sites/default/files/32-s.png",alt:"Windy"},33:{id:33,src:"https://developer.accuweather.com/sites/default/files/33-s.png",alt:"Clear"},34:{id:34,src:"https://developer.accuweather.com/sites/default/files/34-s.png",alt:"Mostly Clear"},35:{id:35,src:"https://developer.accuweather.com/sites/default/files/35-s.png",alt:"Partly Cloudy"},36:{id:36,src:"https://developer.accuweather.com/sites/default/files/36-s.png",alt:"Intermittent Clouds"},37:{id:37,src:"https://developer.accuweather.com/sites/default/files/37-s.png",alt:"Hazy Moonlight"},38:{id:38,src:"https://developer.accuweather.com/sites/default/files/38-s.png",alt:"Mostly Cloudy"},39:{id:39,src:"https://developer.accuweather.com/sites/default/files/39-s.png",alt:"Partly Cloudy w/ Showers"},40:{id:40,src:"https://developer.accuweather.com/sites/default/files/40-s.png",alt:"Mostly Cloudy w/ Showers"},41:{id:41,src:"https://developer.accuweather.com/sites/default/files/41-s.png",alt:"Partly Cloudy w/ T-Storms"},42:{id:42,src:"https://developer.accuweather.com/sites/default/files/42-s.png",alt:"Mostly Cloudy w/ T-Storms"},43:{id:43,src:"https://developer.accuweather.com/sites/default/files/43-s.png",alt:"Mostly Cloudy w/ Flurries"},44:{id:44,src:"https://developer.accuweather.com/sites/default/files/44-s.png",alt:"Mostly Cloudy w/ Snow"}},L=function(e){return{date:e.Date,temperature:{min:e.Temperature.Minimum.Value,max:e.Temperature.Maximum.Value,unit:e.Temperature.Unit},day:{phrase:e.Day.IconPhrase,icon:O[e.Day.Icon]},night:{phrase:e.Night.IconPhrase,icon:O[e.Night.Icon]}}},D=function(e){return function(t){var a=t.locationId,r=t.unit,n=void 0===r?"c":r;return e({service:"/forecasts/v1/daily/5day/".concat(a.toString().replace(/[^\d]/g,"")),parameters:{metric:"c"===n?"true":"false"}}).then((function(e){return e.DailyForecasts.map(L)}))}},T=d((function(){var e,t=function(e){var t=e.apiKey;return function(e){var a=e.service,r=e.headers,n=void 0===r?{}:r,c=e.parameters,l=m({url:"https://dataservice.accuweather.com",path:a,query:u(Object(p.a)(Object(p.a)({},c),{},{apikey:t}))});return fetch(l,{method:"GET",headers:Object(p.a)({"Accept-Encoding":"gzip, deflate"},n)}).then((function(e){return e.json()}))}}({apiKey:k.a});return{findLocation:(e=t,function(t){return e({service:"/locations/v1/cities/search",parameters:{q:t}}).then((function(e){if(!Array.isArray(e))throw Error("Response content is not an array");return e.map(j)}))}),forecast:D(t)}})),I=(a(19),function(e){return e.toString().padStart(2,"0")}),x=function(e){return e.toDateString().replace(/\s?\d+$/,"")},M=function(e){return"".concat(I(e.getHours()),":").concat(I(e.getMinutes()))},F=function(e){var t,a=e.departureDate,r=e.arrivalDate,c=e.fromLocationName,l=e.fromLocationCode,o=e.toLocationName,s=e.toLocationCode,i=e.totalStops,u=void 0===i?null:i,m=e.className,d=void 0===m?"":m,p=new Date(a),f=new Date(r),h=x(p),y=x(f),g=function(e){var t=Math.round(e/1e3/60);return"".concat(Math.floor(t/60),"h ").concat(I(t%60),"m")}((t=p,f.getTime()-t.getTime()));return n.a.createElement("ul",{className:"route--wrapper ".concat(d)},n.a.createElement("li",null,n.a.createElement("span",{className:"route--date--start"},h)),n.a.createElement("li",{className:"route--departure"},n.a.createElement("span",{className:"route--side-connection"}),n.a.createElement("span",{className:"route--departure--time"},M(p)),n.a.createElement("span",{className:"route--departure--location"},c),n.a.createElement("span",{className:"route--departure--location-code has-text-grey-light"},"(",l,")")),n.a.createElement("li",{className:"route--detail-tags"},n.a.createElement("span",{className:"route--side-connection"}),n.a.createElement("span",{className:"route--duration has-background-info has-text-light"},g),0===u?n.a.createElement("span",{className:"route--no-stops has-background-primary has-text-light"},"Direct"):null,u>0?n.a.createElement("span",{className:"route--stops has-background-light"},u," ",1===u?"stop":"stops"):null),n.a.createElement("li",{className:"route--arrival"},n.a.createElement("span",{className:"route--side-connection"}),n.a.createElement("span",{className:"route--arrival--time"},M(f)),n.a.createElement("span",{className:"route--arrival--location"},o),n.a.createElement("span",{className:"route--arrival--location-code has-text-grey-light"},"(",s,")")),h!==y?n.a.createElement("li",null,n.a.createElement("span",{className:"route--date--start"},y)):null)},U=(a(20),function(e){var t=e.value,a=e.currency,r=e.className,c=void 0===r?"":r;return n.a.createElement("p",{className:"price ".concat(c)},n.a.createElement("span",{className:"price--currency"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EUR";switch(e.toUpperCase()){case"EUR":return"\u20ac";case"YEN":return"\xa5";case"USD":default:return"$"}}(a)),n.a.createElement("span",{className:"price--value"},t))}),R=function(e){var t=e.flight;return n.a.createElement("article",{className:"flight--wrapper box"},n.a.createElement("main",{className:"flight--content--wrapper columns is-mobile is-vcentered"},n.a.createElement(F,{className:"flight--main-route column is-mobile",departureDate:t.dates.departure.utc,arrivalDate:t.dates.arrival.utc,fromLocationName:t.from.city.name,fromLocationCode:t.from.city.code,toLocationName:t.to.city.name,toLocationCode:t.to.city.code,totalStops:t.route.length-1}),n.a.createElement("aside",{className:"flight--main-side column"},n.a.createElement(U,{className:"has-text-primary-dark",currency:t.price.currency,value:t.price.value}),n.a.createElement("a",{className:"flight--main-side--book button is-primary",href:t.bookUrl,target:"_blank",rel:"noopener noreferrer"},"Book"))),t.route&&t.route.length>1?n.a.createElement("details",{className:"flight--itinerary"},n.a.createElement("summary",{className:"button is-small"}),n.a.createElement("div",null,t.route.map((function(e){return n.a.createElement(F,{key:e.from.city.code,className:"flight--single-route",departureDate:e.dates.departure.utc,arrivalDate:e.dates.arrival.utc,fromLocationName:e.from.city.name,fromLocationCode:e.from.city.code,toLocationName:e.to.city.name,toLocationCode:e.to.city.code,totalStops:null})})))):null)},_=(a(21),a(22),function(e){var t=e.min,a=e.max,r=e.unit,c=e.img,l=function(e){return e&&"c"!==e.toString().toLowerCase()?"\xbaF":"\xbaC"}(r);return n.a.createElement("div",{className:"weather-day-forecast--wrapper"},n.a.createElement("img",{className:"weather-day-forecast--image",src:c.src,alt:c.alt}),n.a.createElement("div",{className:"weather-day-forecast--temperature--wrapper"},n.a.createElement("span",{className:"weather-day-forecast--temperature temperature-low"},Math.round(t),n.a.createElement("sup",null,l)),n.a.createElement("span",{className:"weather-day-forecast--temperature temperature-high"},Math.round(a),n.a.createElement("sup",null,l))))}),A=function(e){var t=e.forecast;return e.isLoading?n.a.createElement("p",null,"Loading..."):t?0===t.length?n.a.createElement("p",{className:"has-text-warning"},"Could not load forecast."):n.a.createElement("table",{className:"table weather-list-forecast--wrapper"},n.a.createElement("thead",null,n.a.createElement("tr",null,t.map((function(e){return n.a.createElement("th",{key:e.date},n.a.createElement("span",{className:"weather-list-forecast--date"},e.date.replace(/^\d{4}.(\d{2}).(\d{2}).*$/,"$2/$1")))})))),n.a.createElement("tbody",null,n.a.createElement("tr",null,t.map((function(e){return n.a.createElement("th",{key:e.date},n.a.createElement(_,{min:e.min,max:e.max,unit:e.unit,img:e.img}))}))))):n.a.createElement("p",{className:"has-text-danger-dark is-bold"},n.a.createElement("span",{className:"has-text-danger is-bold"},"Something failed"),n.a.createElement("span",null,"(possibly hit API limits)"))},P=(a(23),function(e){var t=e.locationName,a=e.forecast,r=e.isLoadingForecast,c=e.flightList,l=e.isLoadingFlights,o=e.className,s=void 0===o?"":o,i=!l&&c&&c.length>0,u=!l&&c&&0===c.length;return n.a.createElement("section",{className:"destination--wrapper ".concat(s)},n.a.createElement("h2",null,t),n.a.createElement(A,{forecast:a,isLoading:r}),l?n.a.createElement("p",null,"Finding flights..."):null,u?n.a.createElement("p",{className:"box"},"No flights found for this destination."):null,i?c.map((function(e){return n.a.createElement(R,{key:e.id,flight:e,isLoading:l})})):null)}),z=function(e){return{date:e.date,min:e.temperature.min,max:e.temperature.max,img:{src:e.day.icon.src,alt:e.day.icon.alt}}},H=function(e){var t=e.fromLabel,a=e.fromCode,c=e.toCode,l=e.toWeatherId,s=Object(r.useState)(!1),i=Object(o.a)(s,2),u=i[0],m=i[1],d=Object(r.useState)(!1),p=Object(o.a)(d,2),f=p[0],h=p[1],y=Object(r.useState)(null),g=Object(o.a)(y,2),v=g[0],w=g[1],E=Object(r.useState)(null),b=Object(o.a)(E,2),N=b[0],C=b[1];return Object(r.useEffect)((function(){m(!0),T().forecast({locationId:l}).then((function(e){return C(e.map(z))})).catch((function(e){console.error(e),C([])})).finally((function(){return m(!1)}))}),[l]),Object(r.useEffect)((function(){if(a){var e=new Date,t=new Date;t.setDate(t.getDate()+1),h(!0),S().findFlight({fromCity:a,toCity:c,fromDate:e,toDate:t,limit:3}).then(w).catch((function(e){console.error(e),w([])})).finally((function(){return h(!1)}))}}),[a,c]),n.a.createElement(P,{locationName:t,isLoadingForecast:u,forecast:N,isLoadingFlights:f,flightList:v})},q=function(e){var t=e.list,a=e.onSelect,c=e.className,l=Object(r.useCallback)((function(e){a(t[e.target.dataset.index])}),[a,t]);return 0===t.length?null:n.a.createElement("div",{className:"panel ".concat(c)},t.map((function(e,t){return n.a.createElement("label",{key:e.label,className:"panel-block is-active","data-index":t,onClick:l},e.label)})))},B=function(e){var t=e.label,a=e.isLoading,c=e.onChange,l=e.onClear,o=e.leftIcon,s=e.rightIcon,i=e.value,u=Object(r.useCallback)((function(e){c(e.target.value)}),[c]),m=i&&l;return n.a.createElement("div",{className:"field"},n.a.createElement("p",{className:"control ".concat(o?"has-icons-left":""," ").concat(s?"has-icons-right":""," ").concat(a?"is-loading":"")},o?n.a.createElement("span",{className:"icon is-small is-left"},n.a.createElement("i",{className:"fas fa-".concat(o),"aria-hidden":"true"})):null,n.a.createElement("input",{className:"input",type:"text",onChange:u,placeholder:t,value:i}),m?n.a.createElement("span",{className:"icon is-small is-right","aria-label":"clear",onClick:l},n.a.createElement("i",{className:"fas fa-times-circle","aria-hidden":"true"})):null,!m&&s?n.a.createElement("span",{className:"icon is-small is-right"},n.a.createElement("i",{className:"fas fa-".concat(s),"aria-hidden":"true"})):null))},J=(a(24),function(e){var t=e.onTermsChange,a=e.onSelectItem,c=e.itemList,l=e.label,s=e.rightIcon,i=Object(r.useState)(""),u=Object(o.a)(i,2),m=u[0],d=u[1],p=Object(r.useCallback)((function(e){t(e),d(e)}),[t]),f=Object(r.useCallback)((function(e){a(e),d(e.label)}),[a]);return n.a.createElement(r.Fragment,null,n.a.createElement(B,{label:l,rightIcon:s,onChange:p,value:m}),n.a.createElement(q,{className:"search-input-with-selection--box",list:c,onSelect:f}))}),K=function(e){return{node:e,label:"".concat(e.cityName,", ").concat(e.countryName)}},$=function(e){var t=e.onSelect,a=Object(r.useState)([]),c=Object(o.a)(a,2),l=c[0],s=c[1],i=Object(r.useRef)(),u=Object(r.useCallback)((function(e){t(e.node),s([])}),[t]),m=Object(r.useCallback)((function(e){i.current=e,S().findCity(e).then((function(t){e===i.current&&s(t.map(K))}))}),[]);return n.a.createElement(J,{label:"Where will you fly from...",rightIcon:"search",onTermsChange:m,onSelectItem:u,itemList:l})},G=[{label:"Amsterdam, Netherlands",flightLocationCode:"AMS",weatherLocationId:249758},{label:"Budapest, Hungary",flightLocationCode:"BUD",weatherLocationId:187423},{label:"Madrid, Spain",flightLocationCode:"MAD",weatherLocationId:308526}],W=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1];return n.a.createElement(i,{title:"Go Nomad"},n.a.createElement($,{onSelect:c}),G.map((function(e){return n.a.createElement(H,{key:e.label,fromLabel:e.label,fromCode:a?a.code:null,toCode:e.flightLocationCode,toWeatherId:e.weatherLocationId})})))};var V=function(){return n.a.createElement(W,null)};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(V,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.6147f4b2.chunk.js.map
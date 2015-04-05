"use strict";angular.module("robertkalfas",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","mm.foundation","angular-cache"]).config(["$stateProvider","$urlRouterProvider","CacheFactoryProvider",function(e,a,t){e.state("work",{url:"/work/:movie",templateUrl:"app/work/work.html",controller:"WorkCtrl",resolve:{load:["Items",function(e){return e.fetch("movies")}],movie:["$stateParams",function(e){return e.movie}]}}).state("contact",{url:"/contact",templateUrl:"app/contact/contact.html",controller:"ContactCtrl"}),a.otherwise("/work/"),angular.extend(t.defaults,{maxAge:9e5})}]).run(["$rootScope","$http","CacheFactory",function(e,a,t){var o=$("body");e.$on("$stateChangeStart",function(){o.animate({scrollTop:0},"slow"),o.removeClass("loaded")}),e.$on("$stateChangeSuccess",function(){o.addClass("loaded")}),a.defaults.cache=t("defaultCache",{maxAge:6e4,cacheFlushInterval:36e5,deleteOnExpire:"aggressive"})}]),angular.module("robertkalfas").controller("NavbarCtrl",function(){$(".nav-bar .toggle-button").click(function(){$(".nav-bar .menu").toggleClass("opened")})}).run(["$rootScope",function(e){e.$on("$stateChangeStart",function(){$(".nav-bar .menu").removeClass("opened")})}]),angular.module("robertkalfas").directive("customVideo",function(){return{restrict:"EA",template:'<iframe ng-src="{{source}}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',scope:{source:"="},link:function(e,a){var t=a.parent().parent();a.children("iframe").load(function(){t.addClass("loaded")})}}}),angular.module("robertkalfas").directive("customImage",function(){return{restrict:"EA",template:'<img ng-src="{{source}}" alt="{{title}}" />',scope:{source:"=",title:"="},link:function(e,a){a.children("img").load(function(){a.addClass("loaded")})}}}),angular.module("robertkalfas").controller("WorkCtrl",["$scope","Items","movie","$sce","Config",function(e,a,t,o,r){function i(){for(var a=0,o=e.movies.length;o>a;a++)if(parseInt(t)===e.movies[a].id)return e.movies[a];return!1}("undefined"==typeof e.movies||0===e.movies.length)&&(e.movies=a.query());var n=i();if(t&&n){var l=r.vimeoPlayerUrl+t+"?title=0&byline=0&portrait=0";e.movie={src:o.trustAsResourceUrl(l),title:n.title,description:n.description}}}]),angular.module("robertkalfas").controller("MainCtrl",function(){}),angular.module("robertkalfas").controller("ContactCtrl",function(){$("img").load(function(){$(this).addClass("loaded")})}),angular.module("robertkalfas").factory("Items",["$q","$http","Config","CacheFactory",function(e,a,t,o){return{data:{},config:{},fetch:function(r){var i=this,n=e.defer(),l=[];return a.get(t.sourceUrl,{cache:o.get("config")}).success(function(s){i.config=s;for(var c=i.config,u=[],d=0,v=c.users.length;v>d;d++){var m=a.get(t.apiUrl+c.users[d]+t.apiSource,{cache:o.get(r)});u.push(m)}e.all(u).then(function(e){angular.forEach(e,function(e){l=l.concat(e.data)}),l=i.filter(l),i.data=l,n.resolve()})}),n.promise},filter:function(e){for(var a=[],t=0,o=e.length;o>t;t++)for(var r=e[t],i=0,n=this.config.ids.length;n>i;i++)this.config.ids[i]===r.id&&a.push(r);return a},query:function(){return this.data}}}]),angular.module("robertkalfas").service("Config",function(){return{apiUrl:"http://vimeo.com/api/v2/",apiSource:"/videos.json",vimeoPlayerUrl:"https://player.vimeo.com/video/",sourceUrl:"data/config.json"}}),angular.module("robertkalfas").run(["$templateCache",function(e){e.put("app/contact/contact.html",'<div class="profile"><div class="image-wrapper"><img class="image" src="https://scontent-cdg.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/424681_468190799879099_1964791624_n.jpg?oh=3d53f403acdd87c2c77495ffde57c548&oe=55A9A232"></div><div class="description"><h2>Robert Kalfas</h2><a href="tel:+48601301201">+48 601 301 201</a></div></div>'),e.put("app/main/main.html","Strona główna"),e.put("app/work/work.html",'<div><div ng-if="movie" ng-class="{ open: movie }" class="movie-container"><h1 class="title" ng-bind-html="movie.title"></h1><div class="video-container"><div class="video-element"><div class="loader"></div><div class="video-wrapper"><custom-video class="video" source="movie.src"></custom-video></div></div></div><div class="description" ng-bind-html="movie.description"></div></div><ul class="movies-container"><li class="movie" ng-repeat="movie in movies"><a ui-sref="work({ movie: movie.id })" title=""><div class="image-wrapper"><custom-image class="image" source="movie.thumbnail_large" title="movie.title"></custom-image><div class="meta-wrapper"><div class="meta"><span class="title" ng-bind-html="movie.title"></span> <span class="description" ng-bind-html="movie.description"></span></div></div></div></a></li></ul></div>'),e.put("components/navbar/navbar.html",'<nav class="nav-bar" ng-controller="NavbarCtrl"><h1 class="title"><a ui-sref="work({movie:\'\'})">Robert Kalfas</a></h1><span class="toggle-button"><span class="divider"></span> <span class="divider"></span> <span class="divider"></span></span><ul class="menu"><li ui-sref-active="active"><a ui-sref="work({movie:\'\'})">Work</a></li><li ui-sref-active="active"><a href="//jestwysoko.com" target="_blank">Blog</a></li><li ui-sref-active="active"><a ui-sref="contact">Contact</a></li></ul></nav>')}]);
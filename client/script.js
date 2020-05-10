let Vue         = require("vue");
let VueRouter   = require("vue-router");
let VueResource = require("vue-resource");
let vjm         = require("vue-jwt-mongo");

let app      = require("./Components/app.vue");
let register = require("./Components/register.vue");
let login    = require("./Components/login.vue");
let index    = require("./Components/index.vue");
let feed     = require("./Components/feed.vue");
let upload   = require("./Components/upload.vue");

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(vjm.Client);

let router = new VueRouter({
	routes:[
		{path: "/register", component: register},
		{path: "/upload", component: upload},
		{path: "/login", component: login},
		{path: "/feed", component: feed},
		{path: "/", component: index}
	]
});

let vm = new Vue({
	el: "#app",
	router: router,
	render: function(createElements) {
		return createElements(app);
	}
});


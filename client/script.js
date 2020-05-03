let Vue       = require("vue");
let VueRouter = require("vue-router");

let app      = require("./Components/app.vue");
let register = require("./Components/register.vue");
let login    = require("./Components/login.vue");
let index    = require("./Components/index.vue");

Vue.use(VueRouter);

let router = new VueRouter({
	routes:[
		{path: "/register", component: register},
		{path: "/login", component: login},
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


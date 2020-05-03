<style>
	#log{
		background: blue;
		width: 100%;
		border-color: grey;
	}
	input, #log{
		box-shadow: 0 0 10px rgba(0,0,0,0.5);
	}
	form{
		width: 700px;
	}
	*{
		font-size: 25px;
	}
	a{
		font-size: 17px;
	}
</style>

<template>
	<div>
		<form id="login_form">
		  <div class="form-group">
		    <label for="login">Логин</label>
		    <input type="text" class="form-control" id="login" placeholder="Введите Логин">
		  </div>
		  <div class="form-group">
		    <label for="password">Пароль</label>
		    <input type="password" class="form-control" id="password" placeholder="Введите пароль">
		  </div>
		  <button type="submit" class="btn btn-primary" id="log" v-on:click="login">Войти!</button>
		  <center><a href="http://localhost:8080/#/register" class="form-link" >Регистрация</a></center>
		</form>
	</div>
</template>

<script>
	module.exports={
		methods:{
			login: function(){
				event.preventDefault();
				let form = document.getElementById("login_form");
				let login = form.login.value;
				let password = form.password.value;
				let promise = this.$auth.logIn(login, password);
				promise.then(function(res){
					console.log("login success!");
					this.$router.push("/feed");
				}).catch(function(res){
					console.log("login fail!");
				});
			}
		}
	}
</script>
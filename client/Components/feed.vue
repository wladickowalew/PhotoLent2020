<style scoped>
	*{
		font-size: 25px;
	}
	#photolent{
		margin-top: 250px;
		background-color: green;
	}
</style>

<template>
	<div>
		<header-m></header-m>
		<div id="photolent">
			<photo-card v-for="record in records" v-bind:record="record"></photo-card>
		</div>
	</div>
</template>

<script>
	let Header = require("./header.vue");
	let PhotoCard = require("./photoCard.vue");
	module.exports={
		components:{
			headerM: Header,
			photoCard: PhotoCard
		},
		data: function() {
			return {records: []}
		},
		mounted: function(){
			this.$http.get("/feed", {bearer: true}).then(
				function(res){
					console.log(res.body);
					this.records = res.body;
				});
		}
	}
</script>

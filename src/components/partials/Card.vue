<script>
export default {
  name: 'Card',
  // props:{
  //   id: Number,
  //   name: String,
	// 	frameType: String,
  //   desc: String,
  //   image_url: String
  // }
}
</script>

<template>
	<div class="col-2">
		<div class="card">
			<div class="card-image">
				<img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">
			</div>
			<div class="card-info">
				<h2>name</h2>
				<p>type</p>
			</div>
		</div>
	</div>
</template>



<style lang="scss" scoped>


.card {
	color: white;
	background-color: #D48F38;
	margin-bottom: 30px;
	
	.card-image {
		width: 100%;
	}
	.card-info {
		text-align: center;
	}
}
</style>
<script>
import { store } from '../../data/store';
export default {
  name: 'Card',
	data() {
		return {
			store
		}
	},
  props:{
    id: Number,
    name: String,
		frameType: String,
		archetype: String,
    desc: String,
    image: String
  },
	mounted() {
		
	},
}
</script>

<template>
	<div class="col-2">
		<div class="card">
			<div 
		
				class="card-image"
			>
				<!-- <img 
					
					:src="img.image_url" 
					:alt="name"
				> -->
				<img :src="image" alt="">
			</div>
			<div class="card-info my-3">
				<h5>{{ name }}</h5>
				<p>{{ archetype }}</p>
			</div>
		</div>
	</div>
</template>



<style lang="scss" scoped>


.card {
	color: white;
	background-color: #D48F38;
	margin-bottom: 20px;
	max-height: 500px;
	
	.card-image {
		width: 100%;
	}
	.card-info {
		text-align: center;
	}
}
</style>
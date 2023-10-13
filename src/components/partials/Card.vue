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
			<div class="card-image">
				<img :src="image" :alt="name">
			</div>
			<div class="card-info my-3">
				<h6>{{ name }}</h6>
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
	height: 380px;
	
	.card-image {
		width: 100%;
	}
	.card-info {
		text-align: center;
	}
}
</style>
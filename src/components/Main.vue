<script>

import Card from './partials/Card.vue';
export default {
	name: 'Main',
	components:{
		Card
	}
}
</script>

<template>
	<main>
		<div>ciao</div>
		<div class="container">
			<div class="results">results</div>
			<div class="row card-wrapper">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			
			
			</div>	
		</div>
	</main>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss';
	.container {
		margin: 0 auto;
		padding: 40px;
		background-color: white;
		
		.results{
			height: 60px;
			background-color: #212529;
		}

		.card-wrapper {
			display: flex;
			flex-wrap: wrap;
			
		}
	}
</style>
<script>

import { store } from '../data/store';
import Card from './partials/Card.vue';
import Loader from './partials/Loader.vue';


export default {
	name: 'Main',
	components:{
		Card,
		Loader
	},
	data() {
		return {
			store,
			selected: '',
		}
	},
	methods: {
		getImagePath(img){
			return new URL(`${img}`,import.meta.url).href;
		}
	},
	computed: {
		resultQuery(){
			return cardList.filter(card => {
				card.name.toLowerCase().includes(this.selected.toLowerCase()) || card.archetype.toLowerCase().includes(this.selected.toLowerCase())
			})
    }
	},
	mounted() {
		console.log()
	},
}
</script>

<template>
	<main>
		<select 
			class="form-select form-select-lg my-3" 
			v-model="selected"
		>
		  <option selected>Open this select menu</option>
		  <option value="Alien">Alien</option>
		  <option value="2">Two</option>
		  <option value="3">Three</option>
		</select>
		<div class="container">
			<div class="results">results</div>
			<Loader v-if="store.cardList.length <= 0" />
			<div class="row card-wrapper">
				<Card 
					v-for="card in store.cardList"
					:key="card.id"
					:name="card.name"
					:archetype="card.archetype"
					:image="getImagePath(card.card_images[0].image_url)"
				/>
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
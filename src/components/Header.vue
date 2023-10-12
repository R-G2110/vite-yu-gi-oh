<script>
export default {
	name: 'Header',
	props:{
    titleStr: String
  }
}
</script>

<template>
	<header class="text-center">
		<div class="row">
			<div class="col-4">
				<div class="logo">
					<img src="/Yu-Gi-Oh-logo.webp" alt="Yu-Gi-Oh-logo">
				</div>
				<span>{{ titleStr }}</span>
			</div>
		</div>
  </header>
</template>

<style lang="scss" scoped>

	header {
		padding: 20px;
		background-color: white;
		height: 100px;
		.logo {
			width: 90px;
			margin-right: 10px;
			display: inline-block;
		}
		span {
			font-size: 2rem;
			font-weight: 700;
		}
	}

</style>
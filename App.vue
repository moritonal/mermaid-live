<template>
	<div id="root" class="root" ref="root">
		<!-- Left hand side -->
		<div class="monaco">
			<Monaco ref="diagram" v-bind:content="diagram_content" v-on:content="content" v-bind:markers="markers" v-bind:width="width">
		</div>
		<!-- Right hand side -->
		<div class="mermaid" ref="mermaid"></div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		data: function () {
			return {
				editor: null,
				diagram_content: String,
				config_content: String,
				left: String,
				right: String,
				markers: Array,
				width: Number
			};
		},
		components: {
			Monaco: async () => await import("./Monaco.vue")
		},
		methods:{
			content: async function(newContent : String) {

				let mermaid = await import("mermaid");
				
				try {
					
					mermaid.parse(newContent);

					localStorage.setItem("mermaid_content", newContent);

					let elem = this.$refs["mermaid"];

					console.log("Rendering", newContent);

					mermaid.render("mermaid", newContent, (svgCode: String) => {
						elem.innerHTML = svgCode;
					});

					this.markers = [];

				} catch (ex) {

					console.log("Error", ex);

					this.markers = [
						{
							startLineNumber: ex.hash.loc.first_line,
							startColumn: ex.hash.loc.first_column,
							endLineNumber: ex.hash.loc.last_column,
							endColumn: ex.hash.loc.last_column,
							message: ex.str,
						}
					];
				}
			}
		},
		mounted: async function () {

			// import Resizer from "resizerjs";
			const Resizer = (await import("resizerjs")).default;

			// Setup resizer
			const myResizer = new Resizer("#root");

			myResizer.on("resize", (c: any) => {
				this.width = c.handleX;
			});
		},
	});
</script>

<style lang="scss" scoped>
	.container {
		color: green;
	}
	.editor_container {
		height: 100%;
	}
	.parent {
		height: 100%;
	}
	.editor {
		height: 100%;
	}
	.root {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100vh;
	}
	.config {
		height: 20%;
	}
	.monaco {
		//height: 600px;
		width: 1600px;
		height:100%;
	}
	.mermaid {
		width: 100%;
	}
	.h-80 {
		height: 80%;
	}
	.h-20 {
		height: 20%;
	}
</style>

<style>
	[data-rz-handle] {
		flex: 0 0 6px;
		background-color: rgba(0, 0, 0, 0.5);
	}

	[data-rz-handle] div {
		width: 6px;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
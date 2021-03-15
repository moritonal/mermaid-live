<template>
	<div id="root" v-bind:class="rootClases" ref="root">
		<!-- Left hand side -->
		<div v-bind:class="monacoClasses" ref="monaco">
			<Monaco ref="diagram"  v-bind:content="diagram_content" v-on:content="content" v-bind:markers="markers" v-bind:height="height" v-bind:width="width">
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
				width: Number,
				height: Number,
				screenMode: "vertical"
			};
		},
		components: {
			Monaco: async () => await import("./Monaco.vue")
		},
		computed:{
			rootClases: function() {
				switch (this.screenMode) {
					case "vertical":
						return {
							root: true, 
							'flex-direction-row': true,
							'flex-direction-column': false,
							'v-height-100': true
						}
					case "horizontal":
						return {
							root: true, 
							'flex-direction-row': false,
							'flex-direction-column': true,
							'v-height-100': true
						}
				}
			},
			monacoClasses: function() {
				switch (this.screenMode) {
					case "vertical":
						return {
							monaco: true,
							'h-100': true
						};
					case "horizontal":
						return {
							monaco: true,
							'h-20': true
						};
				}
			}
		},
		methods:{
			content: async function(newContent : string) {

				if (newContent.startsWith("gantt")) {
					this.screenMode = "horizontal";
					this.$refs["monaco"].style.width = "100vw";
				} else {
					this.screenMode = "vertical";
				}

				let mermaid : Mermaid = await import("mermaid");
				
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

			this.$refs["monaco"].style.width = "1600px";
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
		width: 100%;
	}
	.v-height-100 {
		height: 100vh;
	}
	.v-height-30 {
		height: 30;
	}
	.flex-direction-row {
		flex-direction: row;
	}
	.flex-direction-column {
		flex-direction: column;
	}
	.config {
		height: 20%;
	}
	.monaco {
		//width: 1600px;
		height:100%;
	}
	.mermaid {
		width: 100%;
	}
	.h-100 {
		height: 100%;
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
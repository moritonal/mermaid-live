<template>
    <div class="diagram" ref="monaco">
        <div
            ref="editor_container"
            class="vs-dark editor_container"
        >
            <div ref="editor" class="editor"></div>
        </div>
    </div>
</template>

<script lang="ts">
	import Vue from "vue";

	import "monaco-editor/esm/vs/editor/browser/controller/coreCommands.js";
	import "monaco-editor/esm/vs/editor/contrib/find/findController.js";
	import "monaco-editor/esm/vs/editor/editor.api.js";
	import * as monaco from "monaco-editor";

	monaco.languages.register({ id: "mermaid" });

	// Register a tokens provider for the language
	monaco.languages.setMonarchTokensProvider("mermaid", {
		tokenizer: {
			root: [
				[/\[graph.*/, "custom-error"],
				[/\[notice.*/, "custom-notice"],
				[/\[info.*/, "custom-info"],
				[/\[[a-zA-Z 0-9:]+\]/, "custom-date"],
			],
		},
	});

	self.MonacoEnvironment = {
		getWorkerUrl: function (moduleId: any, label: String) {
			console.log(`Worker: ${label}`);

			if (label === "json") {
				return "./json.worker.js";
			}
			if (label === "css") {
				return "./css.worker.js";
			}
			if (label === "html") {
				return "./html.worker.js";
			}
			if (label === "typescript" || label === "javascript") {
				return "./ts.worker.js";
			}
			return "./editor.worker.js";
		},
	};

	interface IData {
		editor: monaco.editor.IStandaloneCodeEditor;
	}

	interface IEditorConstructionOptions extends monaco.editor.IEditorConstructionOptions {
		language: string,
		theme: string,
		value?: string
	}

	export default Vue.extend({
		data: function (): IData {
			return <IData>{
				editor: null,
				left: String,
				right: String,
				internalContent: String,
				_height: Number,
				_width: Number
			};
		},
		props: [
			"content", "markers", "width", "height"
		],
		watch: {
			markers: function(newVal) {
				
				newVal.severity = monaco.MarkerSeverity.Error;

				monaco.editor.setModelMarkers(this.editor.getModel(), "owner", newVal);	
			},
			width: function(newVal : number) {
				this._width = newVal;
				this.editor.layout({ width: this._width, height: this._height });
			},
			height: function(newVal : number) {
				this._height = newVal;
				this.editor.layout({ width: this._width, height: this._height });
			}
		},
		mounted: async function () {
			console.log("Creating monaco!");

			let element = this.$refs.editor;

			console.log("Monaco", this, element);

			let options: IEditorConstructionOptions = {
				language: "mermaid",
				theme: "vs-dark",
				readOnly: false,
				automaticLayout: true,
				wordWrap: "off",
			}

			let content: string | null = localStorage.getItem("mermaid_content");

			if (content == null) {
				content = [
					"sequenceDiagram",
					"	Alice->>+John: Hello John, how are you?",
					"	Alice->>+John: John, can you hear me?",
					"	John-->>-Alice: Hi Alice, I can hear you!",
					"	John-->>-Alice: I feel great!",
				].join("\r\n");
			}

			options.value = content;

			let editor: monaco.editor.IStandaloneCodeEditor = monaco.editor.create(
				element,
				options
			);

			this.editor = editor;

			this.editor.onDidChangeModelContent((event: KeyboardEvent) => {
				this.$emit("content", this.editor.getValue());
			});

			setTimeout(() => {
				this.$emit("content", this.editor.getValue());
			}, 0);
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
	.diagram {
		// height: 80%;
		height: 100%;
	}
	.config {
		height: 20%;
	}
	.monaco {
		//height: 600px;
		//width: 1600px;
	}
</style>

<style>

</style>
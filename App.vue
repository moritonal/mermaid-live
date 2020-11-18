<template>
	<div id="root" class="root" ref="root">

		<!-- Left hand side -->
		<div class="monaco" ref="monaco">
			<div id="editor_container" ref="editor_container" class="vs-dark editor_container">
				<div id="editor" ref="editor" class="editor"></div>
			</div>
		</div>

		<!-- Right hand side -->
		<div class="mermaid" ref="mermaid"></div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	import "monaco-editor/esm/vs/editor/browser/controller/coreCommands.js";
	import "monaco-editor/esm/vs/editor/contrib/find/findController.js";
	import "monaco-editor/esm/vs/editor/editor.api.js";
	import * as monaco from "monaco-editor";

	import Resizer from "resizerjs";

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
		getWorkerUrl: function (moduleId, label) {
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

	export default Vue.extend({
		data: function (): IData {
			return <IData>{
				editor: null,
				left: String,
				right: String,
			};
		},
		mounted: async function () {
			console.log("Creating monaco!");

			let element = this.$refs.editor;

			console.log(element);

			let options = {
				language: "mermaid",
				theme: "vs-dark",
				readOnly: false,
				automaticLayout: true,
				wordWrap: "off",
			} as monaco.editor.IEditorConstructionOptions;

			var content = [
				"sequenceDiagram",
				"	Alice->>+John: Hello John, how are you?",
				"	Alice->>+John: John, can you hear me?",
				"	John-->>-Alice: Hi Alice, I can hear you!",
				"	John-->>-Alice: I feel great!",
			].join("\r\n");

			options.value = content;

			var editor = monaco.editor.create(
				element,
				options
			) as monaco.editor.IStandaloneCodeEditor;

			this.editor = editor;

			this.editor.onDidChangeModelContent((event) => {
				var value = this.editor.getValue();

				try {
					mermaid.parse(value);

					mermaid.render("mermaid", value, (svgCode) => {
						elem.innerHTML = svgCode;
					});

					monaco.editor.setModelMarkers(editor.getModel(), "owner", []);
				} catch (ex) {
					console.warn(ex);

					monaco.editor.setModelMarkers(editor.getModel(), "owner", [
						{
							startLineNumber: ex.hash.loc.first_line,
							startColumn: ex.hash.loc.first_column,
							endLineNumber: ex.hash.loc.last_column,
							endColumn: ex.hash.loc.last_column,
							message: ex.str,
							severity: monaco.MarkerSeverity.Error,
						},
					]);
				}
			});

			var mermaid = await import("mermaid");

			var elem = this.$refs["mermaid"];

			setTimeout(() => {
				mermaid.render("mermaid", content, (svgCode) => {
					elem.innerHTML = svgCode;
				});
			}, 500);

			editor.layout();

			const myResizer = new Resizer("#root");

			myResizer.on("resize", (c) => {
				editor.layout({ width: c.handleX, height: null });
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
	.monaco {
		//height: 600px;
		width: 800px;
	}
	.mermaid {
		width: 100%;
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
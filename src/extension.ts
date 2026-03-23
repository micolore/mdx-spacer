import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "mdx-spacer.addSpaces",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const document = editor.document;
      editor.edit((editBuilder) => {
        for (let i = 0; i < document.lineCount; i++) {
          const line = document.lineAt(i);
          if (!line.isEmptyOrWhitespace && !line.text.endsWith("  ")) {
            editBuilder.insert(line.range.end, "  ");
          }
        }
      });
    },
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}

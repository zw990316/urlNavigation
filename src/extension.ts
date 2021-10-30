// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { TreeViewProvider } from './classes/treeViewProvider';
import { createWebView } from './classes/webView';

export function activate(context: vscode.ExtensionContext) {
	console.log('插件启动啦！！！');
	TreeViewProvider.initTreeViewItem();
	const treeItems = vscode.commands.registerCommand('itemClick', (label)=>{
		// vscode.window.showInformationMessage(label);
		const webView = createWebView(context, vscode.ViewColumn.Active, label);
		context.subscriptions.push(webView);
	});
	context.subscriptions.push(treeItems);
	

}

export function deactivate() {
	console.log('插件关闭啦！！！');
}


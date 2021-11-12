import { join } from 'path';
import { ExtensionContext, ViewColumn, WebviewPanel, window, commands, Uri, Webview } from 'vscode';
import { getIframeHtml } from "../views/iframe";
import website from "../website";
import { proxyUrl } from '../server/proxy';
let webviewPanel : WebviewPanel | undefined;

function getIframePage(webview : Webview,label: string) {
    // Local path to main script run in the webview
    const resourceRoot =
      webview
        .asWebviewUri(Uri.file(join(__filename,'..','..','src','views')))
        .toString() + '/';

    return getIframeHtml(resourceRoot, label);
  }
export function createWebView(
    context: ExtensionContext,
    viewColumn: ViewColumn,
    label: string,
){
    if(webviewPanel === undefined){
        webviewPanel = window.createWebviewPanel(
            'webView',
            label,
            viewColumn,
            {
                retainContextWhenHidden: true,
                enableScripts: true
            }
        );
        // webviewPanel.iconPath = Uri.file(join(__filename,'..','..','src','assets','imgs','js.png'));
        webviewPanel.title = "README.md";
        // handleUrl(website);
        webviewPanel.webview.postMessage({label :label, website: website, proxyUrl: proxyUrl()});
        webviewPanel.webview.html = getIframePage(webviewPanel.webview, label);
    } else {
        webviewPanel.webview.postMessage({label :label, website: website, proxyUrl: proxyUrl});
        webviewPanel.reveal();
    }

    webviewPanel.onDidDispose(()=>{
        webviewPanel = undefined;
    });

    return webviewPanel;
}
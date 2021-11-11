import { join } from 'path';
import path = require('path');
import { ExtensionContext, ViewColumn, WebviewPanel, window, commands, Uri } from 'vscode';
import website from "../website";
import { proxyUrl } from '../server/proxy';
let webviewPanel : WebviewPanel | undefined;

function handleUrl(datArr:any){
    datArr.map( (item: any) => {
        item.site = proxyUrl(item.site)
    });
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
        handleUrl(website);
        webviewPanel.webview.postMessage({label :label, website: website});
        webviewPanel.webview.html = getIframeHtml(label);
    } else {
        webviewPanel.webview.postMessage({label :label, website: website});
        webviewPanel.reveal();
    }

    webviewPanel.onDidDispose(()=>{
        webviewPanel = undefined;
    });

    return webviewPanel;
}

export function getIframeHtml(label: string ) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
            html,
            body {
                margin: 0 !important;
                padding: 0 !important;
                width: 100%;
                height: 100%;
            }
            .iframeDiv {
                width: 100%;
                height: 100%;
            }
        </style>
        <script>
            window.addEventListener('message', (e) => {
                console.log(e)
                e.data.website.map(item =>{
                    if(item.label === e.data.label){
                        document.getElementById('iframe1').src = item.site
                    }
                })
            })
        //     window.onhashchange = function(){
        //         alert("发生变化");  
        // }
        console.log('111111111111111111111111111111111',window.iframe)
        </script>
        </head>

        <body>
        <iframe id='iframe1' class="iframeDiv" frameborder="0"  src="https://weread.qq.com/" scrolling="auto"></iframe>
        </body>
    </html>
    `;
}
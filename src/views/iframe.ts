export function getIframeHtml(resourceRoot: string, label: string ) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <base href="${resourceRoot}">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script>
        console.log("222222222222222222222222222222222222222222222222222222222222222")
        </script>
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
        </head>

        <body>
        <iframe id='iframe1' class="iframeDiv" frameborder="0" scrolling="auto"></iframe>
        <script  type="text/javascript" src="iframe.js"></script>
        </body>
    </html>
    `;
}
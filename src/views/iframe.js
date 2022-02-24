window.addEventListener('message', (e) => {
    console.log(e);
    e.data.website.map(item =>{
        if(item.label === e.data.label){
            document.getElementById('iframe1').src = item.site;
            // document.getElementById('iframe1').src = proxy(item.site);
            // console.log(proxy(item.site));
        }
    });
});

// function proxy(url) {
//     if (window.proxyUrl) {
//       return `${proxyUrl}${encodeURIComponent(url)}`;
//     }
//     console.log(url);
//     return url;
//   }
//     window.onhashchange = function(){
//         console.log("发生变化");  
// };
// setTimeout(function(){
//     var iframe = document.getElementById('iframe1');
//     var frameContent = iframe.contentWindow;
//     console.log("33333333333333333", frameContent);
// }, 100000);

// console.log('1111111111111', window.location.href);
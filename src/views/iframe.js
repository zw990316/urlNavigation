window.addEventListener('message', (e) => {
    console.log(e);
    e.data.website.map(item =>{
        if(item.label === e.data.label){
            document.getElementById('iframe1').src = item.site;
        }
    });
});
//     window.onhashchange = function(){
//         alert("发生变化");  
// }
console.log('111111111111111111111111111111111');
// let worldIcon = document.querySelector(".img__myFoto").addEventListener("click", function(){
//     document.querySelector(".icon-react").classList.toggle("active__react");
// });
// document.querySelector(".btn").addEventListener("click", function () {
//     document.querySelector(".web-container").classList.toggle("web-opas");
// });



document.querySelector(".web-container").addEventListener("click", function () {
    document.querySelector(".html-container").classList.toggle("html-pos");
    document.querySelector(".css-container").classList.toggle("css-pos");
    document.querySelector(".js-container").classList.toggle("js-pos");
    document.querySelector(".react-container").classList.toggle("react-pos");
    document.querySelector(".reactNative-container").classList.toggle("reactNative-pos");
    document.querySelector(".php-container").classList.toggle("php-pos");

});
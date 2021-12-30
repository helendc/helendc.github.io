var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {

    var coll0 = document.getElementById("coll0");
    var cont0 = document.getElementById("content0");
    coll0.onclick = function(){
        if (cont0.style.display === "inline") {
            cont0.style.display = "none";

            coll0.textContent = "View Details";
        } else {
            cont0.style.display = "inline";
            coll0.textContent = "Hide Details";
        }
    };
    var coll1 = document.getElementById("coll1");
    var cont1 = document.getElementById("content1");
    coll1.onclick = function(){
        if (cont1.style.display === "inline") {
            cont1.style.display = "none";
            coll1.textContent = "View Details";
        } else {
            cont1.style.display = "inline"; 
            coll1.textContent = "Hide Details";     
        }
    };
    var coll2 = document.getElementById("coll2");
    var cont2 = document.getElementById("content2");
    coll2.onclick = function(){
        if (cont2.style.display === "inline") {
            cont2.style.display = "none";;
            coll2.textContent = "View Details";
        } else {
            cont2.style.display = "inline";
            coll2.textContent = "Hide Details";
        }
    };
})
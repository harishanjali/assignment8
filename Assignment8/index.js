
let remove = document.getElementById("remove");
let replace = document.getElementById("replace");

remove.onclick = function(){
    var list = document.getElementById("list");
    list.removeChild(list.children[0]);
    console.log(list);
}

replace.onclick = function(){
    var mobileList = document.getElementById("mobileList");
    var newItem = document.createElement("li");
    newItem.textContent = "Iphone";
    mobileList.replaceChild(newItem,mobileList.children[0]);
}

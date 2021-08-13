//check items when clicked
var listItem = document.querySelector("ul");
listItem.addEventListener( "click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }},
);

//function to add new item to the end of the list
function addItem() {
    var li = document.createElement("li");
    var input = document.getElementById("task").value;
    var t = document.createTextNode(input);

    li.appendChild(t);

    if (input === "")
        {$(".error").toast("show");}
    else {   
        $(".success").toast("show");
        document.getElementById("list").appendChild(li);
        }
    document.getElementById("task").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    removeItem();

};

//close button function to remove items
function removeItem() {
    var delItem = document.getElementsByClassName("close");

    for (var i = 0; i<delItem.length; i++) {
        delItem[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    };
}

removeItem();
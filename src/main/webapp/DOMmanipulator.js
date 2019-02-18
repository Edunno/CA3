/* 
Created by: Esben
 */

var boys = ["Mikael","Birger","jan"]
var girls = ["Anne", "Simone", "mie"]
updateLists()

var ascending = true;

document.getElementById("addboy").addEventListener("click", addBoy);
document.getElementById("addgirl").addEventListener("click", addGirl);
document.getElementById("removeboy").addEventListener("click", removeBoy);
document.getElementById("removegirl").addEventListener("click", removeGirl);
document.getElementById("reverse").addEventListener("click", reverse);
document.getElementById("sort").addEventListener("click", sortAll);


function updateLists() {
    document.getElementById("boys").innerHTML = boys.join("<br>")
    document.getElementById("girls").innerHTML = girls.join("<br>")
    document.getElementById("all").innerHTML = boys.concat(girls).join("<br>")
}

function addBoy() {
    boys.push(document.getElementById("newboy").value)
    updateLists()
}

function addGirl() {
    girls.push(document.getElementById("newgirl").value)
    updateLists()
}

function removeBoy() {
    if (document.getElementById("first").checked) {
        boys.shift();
    }
    if (document.getElementById("last").checked) {
        boys.pop();
    }
    updateLists();
}

function removeGirl() {
    if (document.getElementById("first").checked) {
        girls.shift();
    }
    if (document.getElementById("last").checked) {
        girls.pop();
    }
    updateLists();
}

function reverse() {
    document.getElementById("all").innerHTML = boys.concat(girls).reverse().join("<br>")
}

function sortAll() {
    if (ascending === true) {
        document.getElementById("all").innerHTML = boys.concat(girls).sort(sortThings).join("<br>")
        ascending = false;
    }
    else{
        document.getElementById("all").innerHTML = boys.concat(girls).sort(sortThings).reverse().join("<br>")
        ascending = true;
    }
}

function sortThings(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    }
}
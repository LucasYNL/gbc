/*~~~~~~~~~~~~~~~~~~~~~~~~~~~ Database for each list ~~~~~~~~~~~~~~~~~~~~~~~~*/
/* 
List for which signup sheet to add.
0 = Stage18 Thur / sbThurList
1 = Stage18 Sat  / sbSatList
2 = Stage18 Sun  / sbSunList
3 = Drive Thur   / dbThurList
4 = Drive Fri    / dbFriList
*/
let sbThurList = new Array(24).fill({});
let sthur = document.getElementById("sbthur");

let sbSatList = new Array(12).fill({});
let ssat = document.getElementById("sbsat");

let sbSunList = new Array(24).fill({});
let ssun = document.getElementById("sbsun");

let dbThurList = new Array(18).fill({});
let dthur = document.getElementById("dbthur");

let dbFriList = new Array(18).fill({});
let dfri = document.getElementById("dbfri");

const body = document.querySelector("#body");

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Universal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* Constructor */
function player(name, pass, num) {
    console.log("object constructor called") // 
    this.playerName = name;
    this.password = pass;
    this.list = num;
}

// sets form to invisible 
console.log("set both form display to none") //
const cancelForm = document.querySelector(".cancelWrap");
cancelForm.style.display = "none";
const form = document.querySelector(".formWrap");
form.style.display = "none"; 
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Cancel Button Section ~~~~~~~~~~~~~~~~~~~~~~ */

// remove function
function remove(check, i, list) {
    console.log("set selected array at index to {} empty, and html to '' empty") // 
    if (list == 0) {
        if (sbThurList[i].password == check) {
            const lists = sthur.getElementsByTagName("li");
            sbThurList[i] = {};
            lists[i].innerHTML = "";
        }
    } else if (list == 1) {
        if (sbSatList[i].password == check) {
            const lists = ssat.getElementsByTagName("li");
            sbSatList[i] = {};
            lists[i].innerHTML = "";
        }
    } else if (list == 2) {
        if (sbSunList[i].password == check) {
            const lists = ssun.getElementsByTagName("li");
            sbSunList[i] = {};
            lists[i].innerHTML = "";
        }
    } else if (list == 3) {
        if (dbThurList[i].password == check) {
            const lists = dthur.getElementsByTagName("li");
            dbThurList[i] = {};
            lists[i].innerHTML = "";
        }
    } else if (list == 4) {
        if (dbFriList[i].password == check) {
            const lists = dfri.getElementsByTagName("li");
            dbFriList[i] = {};
            lists[i].innerHTML = "";
        }
    }
}

// Cancel Form Submission
cancelForm.addEventListener("submit", (event) => {
    console.log("cancelform submitted, acquire list id, index, and entered pin, call remove, cancelform display to none, body overflow to visible") // 

    const cancelPin = cancelForm.elements["cPin"];
    const index = cancelForm.elements["cancelIndex"];
    const cList = cancelForm.elements["cancelList"];

    let pin = cancelPin.value;
    let i = index.value;
    let list = cList.value;

    remove(pin, i, list);
    cancelForm.style.display = "none";
    body.style.overflow = "visible";
});

// Gets info for the cancel form and make it visible.
function prepCancelForm(list, i) {

    const cList = document.getElementById("getCancelList");
    const cIndex = document.getElementById("getIndex");
    cList.value = list;
    cIndex.value = i;

    cancelForm.style.display = "";
    body.style.overflow = "hidden";
}

// Creates cancellation button
function createBtn(index, listNum) {
    console.log("DOM btn created, create btn attribute for array id and index, create pointerdown event listener,  create textnode and append it, return btn") //
    const btn = document.createElement("button");
    btn.setAttribute("index", index);
    btn.setAttribute("list", listNum);

    btn.addEventListener("pointerdown", (event) => {
        console.log("btn eventlistener called, append btn attribute value to hidden cancel form inputs") //
        console.log("cancel form display to '', body overflow to hidden") //
        prepCancelForm(btn.getAttribute("list"), btn.getAttribute("index"));
    });

    const bNode = document.createTextNode("X");
    btn.appendChild(bNode);
    return btn;
}

function closeCancel() {
    console.log("cancel button pushed, cancel form display to none, body overflow to visible") // 
    cancelForm.style.display = "none";
    body.style.overflow = "visible";
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Create Player Section ~~~~~~~~~~~~~~~~~~~~~~ */

// Prints player name into html and creates cancel button
function print(player, i) {
    console.log("assert player name into html and append a delete button with player's index in array and array id as parameters") //
    if (player.list == 0) {
        const lists = sthur.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        let cancelBTN = createBtn(i, player.list)
        lists[i].appendChild(cancelBTN);
    } else if (player.list == 1) {
        const lists = ssat.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        let cancelBTN = createBtn(i, player.list)
        lists[i].appendChild(cancelBTN);
    } else if (player.list == 2) {
        const lists = ssun.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        let cancelBTN = createBtn(i, player.list)
        lists[i].appendChild(cancelBTN);
    } else if (player.list == 3) {
        const lists = dthur.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        let cancelBTN = createBtn(i, player.list)
        lists[i].appendChild(cancelBTN);
    } else if (player.list == 4) {
        const lists = dfri.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        let cancelBTN = createBtn(i, player.list)
        lists[i].appendChild(cancelBTN);
    }
}

// Checks for closest empty object
function checkSpace(a) {
    for (let i = 0; i < a.length; i++) {
        if (Object.keys(a[i]).length === 0) {
            return i;
        }
    }

    return false;
}

// Appends player object into array 
function update(player) {
    console.log("pushes object into open space in selected array if there is space") // 
    if (player.list == 0) {
        let check = checkSpace(sbThurList);
        if (check !== false) {
            sbThurList.splice(check, 1, player);
            print(player, check);
        }
    } else if (player.list == 1) {
        let check = checkSpace(sbSatList);
        if (check !== false) {
            sbSatList.splice(check, 1, player);
            print(player, check);
        }
    } else if (player.list == 2) {
        let check = checkSpace(sbSunList);
        if (check !== false) {
            sbSunList.splice(check, 1, player);
            print(player, check);
        }
    } else if (player.list == 3) {
        let check = checkSpace(dbThurList);
        if (check !== false) {
            dbThurList.splice(check, 1, player);
            print(player, check);
        }
    } else if (player.list == 4) {
        let check = checkSpace(dbFriList);
        if (check !== false) {
            dbFriList.splice(check, 1, player);
            print(player, check);
        }
    }
}

// Create Form submission
form.addEventListener("submit", (event) => {
    console.log("form submitted with all values for object, object created, form display none, body overflow visible") //
    const name = form.elements["playerName"];
    const passw = form.elements["pin"];
    const listNum = form.elements["listNum"];

    let playerName = name.value;
    let pin = passw.value;
    let list = listNum.value;

    const person = new player(playerName, pin, list);
    form.style.display = "none";
    body.style.overflow = "visible";

    update(person);
});

// gathers info for register form
function createPlayer(num) {
    console.log("Join button pushed, form appears, get hidden input listNum and set value with button id (id same as array), body overflow hidden") // 
    form.style.display = "";
    const list = document.getElementById("getListNum");
    list.value = num;
    body.style.overflow = "hidden";
}

function closeSignUp() {
    console.log("cancel button pushed. set form display to none and body overflow to visible") //
    form.style.display = "none";
    body.style.overflow = "visible";
}

///////////////////////////////////////////////////// If register mulitply with the same info. bugged
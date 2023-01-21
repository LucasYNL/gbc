/*~~~~~~~~~~~~~~~~~~~~~~~~~~~ Database for each list ~~~~~~~~~~~~~~~~~~~~~~~~*/
/* 
List for which signup sheet to add.
0 = Stage18 Thur / sbThurList
1 = Stage18 Sat  / sbSatList
2 = Stage18 Sun  / sbSunList
3 = Drive Thur   / dbThurList
4 = Drive Fri    / dbFriList
*/
let sbThurList = new Array(24).fill({}); const sthur = document.getElementById("sbthur");
let sbSatList = new Array(12).fill({}); const ssat = document.getElementById("sbsat");
let sbSunList = new Array(24).fill({}); const ssun = document.getElementById("sbsun");
let dbThurList = new Array(18).fill({}); const dthur = document.getElementById("dbthur");
let dbFriList = new Array(18).fill({}); const dfri = document.getElementById("dbfri");

const body = document.querySelector("#body");

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Universal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* Constructor */
function player(name, pass, num){
    this.playerName = name;
    this.password = pass;
    this.list = num;
}

function closeForm() {
    form.style.display = "none";
    cancelForm.style.display = "none";
    body.style.overflow = "";
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Cancel Button Section ~~~~~~~~~~~~~~~~~~~~~~ */

// sets form to invisible 
const cancelForm = document.querySelector(".cancelWrap");
cancelForm.style.display = "none";

// remove function
function remove(check, i, list) {
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
    const cancelPin = cancelForm.elements["cPin"];
    const index = cancelForm.elements["cancelIndex"];
    const cList = cancelForm.elements["cancelList"];

    let pin = cancelPin.value;
    let i = index.value;
    let list = cList.value;

    remove(pin, i, list);
    closeForm();
});

// Gets info for the cancel form
function removePlayer(list, i) {
    cancelForm.style.display = "";
    body.style.overflow = "hidden";

    const cList = document.getElementById("getCancelList");
    const cIndex = document.getElementById("getIndex");
    cList.value = list;
    cIndex.value = i;
}

// Creates cancellation button
function createBtn(index, listNum){
    const btn = document.createElement("button");
    btn.setAttribute("index", index);
    btn.setAttribute("list", listNum);

    btn.addEventListener("touchstart", (event) => {
        removePlayer(btn.getAttribute("list"), btn.getAttribute("index"));
    });
    btn.addEventListener("click", (event) => {
        removePlayer(btn.getAttribute("list"), btn.getAttribute("index"));
    });

    const bNode = document.createTextNode("X");
    btn.appendChild(bNode);
    return btn;
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Create Player Section ~~~~~~~~~~~~~~~~~~~~~~ */

// sets form to invisible
const form = document.querySelector(".formWrap");
form.style.display = "none"; // sets form to hidden onload 

// Prints player name into html and creates cancel button
function print(player, i) {
    if (player.list == 0) {
        const lists = sthur.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        lists[i].appendChild(createBtn(i, player.list));
    } else if (player.list == 1) {
        const lists = ssat.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        lists[i].appendChild(createBtn(i, player.list));
    } else if (player.list == 2) {
        const lists = ssun.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        lists[i].appendChild(createBtn(i, player.list));
    } else if (player.list == 3) {
        const lists = dthur.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        lists[i].appendChild(createBtn(i, player.list));
    } else if (player.list == 4) {
        const lists = dfri.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        lists[i].appendChild(createBtn(i, player.list));
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
    const name = form.elements["playerName"];
    const passw = form.elements["pin"];
    const listNum = form.elements["listNum"];

    let playerName = name.value;
    let pin = passw.value;
    let list = listNum.value;

    const person = new player(playerName, pin, list);
    update(person);
    closeForm();
});

// gathers info for register form
function createPlayer(num) {
    form.style.display = "";
    body.style.overflow = "hidden";
    const list = document.getElementById("getListNum");
    list.value = num;
}


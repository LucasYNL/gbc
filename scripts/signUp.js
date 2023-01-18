/*------ Database for each list ------*/
let sbThurList = new Array(24).fill({});
let sbSatList = new Array(12).fill({});
let sbSunList = new Array(24).fill({});
let dbThurList = new Array(18).fill({});
let dbFriList = new Array(18).fill({});

/* Constructor */
function player(name, pass, num){
    this.playerName = name;
    this.password = pass;
    this.list = num;
}

/* 
Create oject and push to appropriate array
Each button will push in a data (num) that is associated with the ordered list that it's for
*/
function createPlayer(num){
    let title = prompt("Enter player name");
    let passw = prompt("Enter a pin (Used for Cancellation)")
    let list = num;
    const person = new player(title, passw, list);

    update(person);
}


/* 
List for which signup sheet to add.
0 = Stage18 Thur / sbThurList
1 = Stage18 Sat  / sbSatList
2 = Stage18 Sun  / sbSunList
3 = Drive Thur   / dbThurList
4 = Drive Fri    / dbFriList
*/
function update(player){

    if(player.list == 0){
        let check = checkSpace(sbThurList);
        if(check !== false){
            sbThurList.splice(check, 1, player);
            print(player, check);
        }else{
            noSpace();
        }
    }else if(player.list == 1){
        let check = checkSpace(sbSatList);
        if(check !== false){
            sbSatList.splice(check, 1, player);
            print(player, check);
        }else{
            noSpace();
        }
    }else if(player.list == 2){
        let check = checkSpace(sbSunList);
        if(check !== false){
            sbSunList.splice(check, 1, player);
            print(player, check);
        }else{
            noSpace();
        }
    }else if(player.list == 3){
        let check = checkSpace(dbThurList);
        if(check !== false){
            dbThurList.splice(check, 1, player);
            print(player, check);
        }else{
            noSpace();
        }
    }else if(player.list == 4){
        let check = checkSpace(dbFriList);
        if(check !== false){
            dbFriList.splice(check, 1, player);
            print(player, check);
        }else{
            noSpace();
        }
    }
    
}

//checks array for empty object and returns its index. otherwise, return false
function checkSpace(a){
    for(let i = 0; i < a.length; i++){
        if(Object.keys(a[i]).length === 0){
            return i;
        }
    }

    return false;
}

function noSpace(){
    alert("The sign-up list is full");
}

/////////////// DOM ///////////////

const sthur = document.getElementById("sbthur");
const ssat = document.getElementById("sbsat");
const ssun = document.getElementById("sbsun");
const dthur = document.getElementById("dbthur");
const dfri = document.getElementById("dbfri");

// Uses info and changes specific ol's li innerHTML to players name.
function print(player, i){
    if(player.list === 0){
        const lists = sthur.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        lists[i].appendChild(createBtn(i, player.list));
    }else if(player.list === 1){
        const lists = ssat.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        lists[i].appendChild(createBtn(i, player.list));
    }else if(player.list === 2){
        const lists = ssun.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        lists[i].appendChild(createBtn(i, player.list));
    }else if(player.list === 3){
        const lists = dthur.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        lists[i].appendChild(createBtn(i, player.list));
    }else if(player.list === 4){
        const lists = dfri.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName; 
        lists[i].appendChild(createBtn(i, player.list));
    }
}

function createBtn(index, listNum){
    const btn = document.createElement("button");
    btn.setAttribute("index", index);
    btn.setAttribute("list", listNum);
    btn.addEventListener("click", function(){
        remove(btn.getAttribute("list"), btn.getAttribute("index"));
    });

    const bNode = document.createTextNode("X");
    btn.appendChild(bNode);
    return btn;
}

// Removes player name and empty the object at its index
function remove(list, i){
    let check = prompt("Enter your pin");

    if(list == 0){
        if(sbThurList[i].password == check){
            const lists = sthur.getElementsByTagName("li");
            sbThurList[i] = {};
            lists[i].innerHTML = "";
            correctPin();
        }else{
            wrongPin();
        }
    }else if(list == 1){
        if(sbSatList[i].password == check){
            const lists = ssat.getElementsByTagName("li");
            sbSatList[i] = {};
            lists[i].innerHTML = "";
            correctPin();
        }else{
            wrongPin();
        }
    }else if(list == 2){
        if(sbSunList[i].password == check){
            const lists = ssun.getElementsByTagName("li");
            sbSunList[i] = {};
            lists[i].innerHTML = "";
            correctPin();
        }else{
            wrongPin();
        }
    }else if(list == 3){
        if(dbThurList[i].password == check){
            const lists = dthur.getElementsByTagName("li");
            dbThurList[i] = {};
            lists[i].innerHTML = "";
            correctPin();
        }else{
            wrongPin();
        }
    }else if(list == 4){
        if(dbFriList[i].password == check){
            const lists = dfri.getElementsByTagName("li");
            dbFriList[i] = {};
            lists[i].innerHTML = "";
            correctPin();
        }else{
            wrongPin();
        }
    }
}

function wrongPin(){
    alert("Wrong Pin");
}

function correctPin(){
    alert("Successfully Cancelled")
}
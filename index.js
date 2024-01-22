var five = document.getElementById("five");
var two = document.getElementById("two");
var hundred = document.getElementById("hundred");
var fifty = document.getElementById("fifty");
var fivenum = 0;
var Twonum = 0;
var onenum = 0;
var fiftynum = 0;
let TotalMoney;


document.getElementById("calc")
calc.addEventListener('click', function () {
    console.log("500 notes count", five.value);
    console.log("200 notes count", two.value);
    console.log("100 notes count", hundred.value);
    console.log("50 notes count", fifty.value);
    fivenum = 500 * five.value;
    Twonum = 200 * two.value;
    onenum = 100 * hundred.value;
    fiftynum = 50 * fifty.value;
    TotalMoney = fivenum + Twonum + onenum + fiftynum;

    if (fivenum >= 0 & Twonum >= 0 & onenum >= 0 & fiftynum >= 0) {
        console.log("Total Money", TotalMoney)
        let answer = document.getElementById("Answer").innerHTML = (fivenum + Twonum + onenum + fiftynum);
    }
    else {
        alert("You Can't Enter Negaltive Note Count")
    }

})
// console.log(five.vl)
// --------------Clear Function---------------

clear.addEventListener('click', function () {
    five.value = '0';
    five.value = '0';
    two.value = '0';
    hundred.value = '0';
    fifty.value = '0';
})

// --------------Clear Function---------------

// ----------------------------------------------------------------

// ---------------ADD Function----------------
// ---------------ADD Function----------------

//Display The Add input Field....................
let noteC_Add = document.getElementById("noteC_Add");
let addcount = 0;
five.onclick = (() => {
    addcount = dblock(addcount);
    noteC_Add.style.marginTop = "-23vh";
    addTheNumber(0);
})
two.onclick = (() => {
    addcount = dblock(addcount);
    noteC_Add.style.marginTop = "-8.7vh";
    addTheNumber(1);
})
hundred.onclick = (() => {
    addcount = dblock(addcount);
    noteC_Add.style.marginTop = "5vh";
    addTheNumber(2);
})
fifty.onclick = (() => {
    addcount = dblock(addcount);
    noteC_Add.style.marginTop = "19vh";
    addTheNumber(3);
})
function dblock(addcount) {
    if (addcount === 0) {
        noteC_Add.style.display = "Block";
        addcount++;
    }
    return addcount;
}

if (0 > 1) {
    console("papa")

}
elseif()


function addTheNumber(inNum) {


    document.getElementById("addd").onclick = (() => {
        let valfive = 0;
        if (inNum === 0) {
            valfive = parseInt(document.getElementById("five").value);
            let addInput = parseInt(document.getElementById("add_Field").value);
            let ten = parseInt(valfive + addInput);
            document.getElementById("five").value = ten;
        }
        else if (inNum === 1) {
            valfive = parseInt(document.getElementById("two").value);
            let addInput = parseInt(document.getElementById("add_Field").value);
            let ten = parseInt(valfive + addInput);
            document.getElementById("two").value = ten;
        }
        else if (inNum === 2) {
            valfive = parseInt(document.getElementById("hundred").value);
            let addInput = parseInt(document.getElementById("add_Field").value);
            let ten = parseInt(valfive + addInput);
            document.getElementById("hundred").value = ten;
        }
        else if (inNum === 3) {
            valfive = parseInt(document.getElementById("fifty").value);
            let addInput = parseInt(document.getElementById("add_Field").value);
            let ten = parseInt(valfive + addInput);
            document.getElementById("fifty").value = ten;
        }
    })

    document.getElementById("minus").onclick = (() => {
        let mvalfive = 0;
        if (inNum === 0) {
            mvalfive = parseInt(document.getElementById("five").value);
            // alert(typeof(mvalfive) + mvalfive)
            if(mvalfive===NaN){
                alert("papa")
                mvalfive=0;
            }
            let addInput = parseInt(document.getElementById("add_Field").value);
            let ten = parseInt(mvalfive - addInput);
            document.getElementById("five").value = ten;
        }
        else if (inNum === 1) {
            mvalfive = parseInt(document.getElementById("two").value);
            let addInput = parseInt(document.getElementById("add_Field").value);
            let ten = parseInt(mvalfive - addInput);
            document.getElementById("two").value = ten;
        }
        else if (inNum === 2) {
            mvalfive = parseInt(document.getElementById("hundred").value);
            let addInput = parseInt(document.getElementById("add_Field").value);
            let ten = parseInt(mvalfive - addInput);
            document.getElementById("hundred").value = ten;
        }
        else if (inNum === 3) {
            mvalfive = parseInt(document.getElementById("fifty").value);
            let addInput = parseInt(document.getElementById("add_Field").value);
            let ten = parseInt(mvalfive - addInput);
            document.getElementById("fifty").value = ten;
        }
    })
}



// ---------------ADD Function----------------
// ---------------ADD Function----------------

























// console.log(fivenum)


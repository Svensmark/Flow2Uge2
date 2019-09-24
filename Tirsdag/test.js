//Opgave 1 
//a
var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
var result = names.filter(name => name.includes('a'));
console.log(result);

//b
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
var result = names.map(x => reverseString(x));
console.log(result);


//Opgave 2 
//a
function myFilter(array, callback) {
    var result = [];
    for (let item of array) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}
var res = myFilter(names, x => x.includes("e"));
console.log(res);

//b
function myMap(array, callback) {
    var result = [];
    for (let item of array) {
        result.push(callback(item));
    }
    return result;
}
var res = myMap(names, x => reverseString(x));
console.log(res);


//Opgave 3
var names = ["Lars", "Peter", "Jan", "Bo"];
function Names(array) {
    this.nameArray = array;
}
Names.prototype.myFilter = function (callback) {
    return myFilter(this.nameArray, callback);
}
Names.prototype.myMap = function (callback) {
    return myMap(this.nameArray, callback);
}
var namesObj = new Names(names);
var res = namesObj.myFilter(x => x.includes("r"));
console.log(res);


//Opgave 4 
//a
var numbers = [1, 3, 5, 10, 11];
var result = numbers.map(function (number, index, array) {
    if (index < array.length - 1) {
        var out = number + array[index + 1];
        return out;
    }
    return number;
});
console.log(result);

//b
var names = ["Lars", "Peter", "Jan", "Bo"];
var resultNav = names.map(function (e) {
    return "<a href=\"\">" + e + "</a>";
})

//c
var namesJson = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];
function toTable(array) {
    var result = "<table style=\"width:20%\">\n<tr>\n<th>Name</th>\n<th>Phone</th>\n</tr>\n<tr>"
    result += array.map(function (e) {
        return "<tr><td>" + e.name + "</td>" + "<td>" + e.phone + "</td></tr>";
    }).join("");
    result += "</tr></table>";
    return result;
}

//d (Virker - udkommenteret da document giver fejl når jeg kører koden.)
/*
document.getElementById("navid").innerHTML = resultNav.join(" - ");
document.getElementById("container").innerHTML = toTable(namesJson);
*/

//c (Virker - udkommenteret da document giver fejl når jeg kører koden.)
/*
    document.getElementById("btn1").onclick = function () {
        var result = namesJson.filter(name => name.name.toLowerCase().includes("a"));
        var resultNav = names.filter(name => name.includes('a'));
        var resultNav2 = resultNav.map(function (e) {
            return "<a href=\"\">" + e + "</a>";
        })
        document.getElementById("container").innerHTML = toTable(result);
        document.getElementById("navid").innerHTML = resultNav2.join(" - ");
    };
*/


//Opgave 5 (Reduce)
//a
var all = ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(','));
console.log(all.join(' '));
console.log(all.join('#'));

//b
function sum(total, num) {
    return total + num;
}
var numbers = [2, 3, 67, 33];
console.log(numbers.reduce(sum));

//c
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];

const membersAvg = members.reduce(function (accumulator, member, index, arr) {
    if (index === arr.length - 1) {
        return (accumulator + member.age) / arr.length;
    } else {
        return accumulator + member.age;
    }
}, 0);
console.log(membersAvg);

//d
var count = {};
var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
var count = votes.reduce(function (acc, vote) {
    if (acc[vote]) {
        acc[vote] ++;
    } else {
        acc[vote] = 1;
    }
    return acc;
},{})
console.log(count);


//Opgave 5 (Hoisting) (Virker - udkommenteret da document giver fejl når jeg kører koden.)
/*
//a
x = 5;
elem = document.getElementById("container");
elem.innerHTML = x;
var x;

var x;
x = 5;

elem = document.getElementById("container");
elem.innerHTML = x;
*/
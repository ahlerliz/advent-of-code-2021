"use strict";

const fs = require("fs");
let originalData = fs.readFileSync("./day1data.txt").toString('utf-8');
console.log(typeof(originalData))
let data =  originalData.split("\n")

let newData = data.map(num => Number(num));

function findDepths(depths){

    let count = 0;
    for (let i=1; i<depths.length; i++){
        if (depths[i] > depths[i -1]){
            count += 1;
        }
    }
    return count;
}

console.log(findDepths(newData));
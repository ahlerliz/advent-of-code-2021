"use strict";

const fs = require("fs");
let originalData = fs.readFileSync("./day1data.txt").toString('utf-8');
console.log(typeof(originalData))
let data =  originalData.split("\n")

let newData = data.map(num => Number(num));

function findDepths(depths){

    let count = 0;
    for (let i=3; i<depths.length; i++){
        let first = depths[i-3]+depths[i-2]+depths[i-1];
        let second = depths[i-2]+depths[i-1]+depths[i];
        if (second > first){
            count += 1;
        }
    }
    return count;
}

console.log(findDepths(newData));
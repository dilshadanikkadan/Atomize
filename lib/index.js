"use strict";

const { argv } = require("process");
const path = require("path");
const fs = require("fs");
const {Worker} = require('worker_threads')

const readdir = fs.promises.readdir;
const writeFile = fs.promises.writeFile;
const readFile = fs.promises.readFile;

function loadFile(readDir){

     
     const BASE_PATH = path.join(__dirname,'_ground')
     console.log(BASE_PATH);
     
    

}


loadFile(argv[1])
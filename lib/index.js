"use strict";

const { argv } = require("process");
const path = require("path");
const fs = require("fs");
const {Worker} = require('worker_threads');
const { error } = require("console");

const readdir = fs.promises.readdir;
const writeFile = fs.promises.writeFile;
const readFile = fs.promises.readFile;

/*
 Boot the file from here!!!!!
*/
function loadFile(readDir){

     
     const BASE_PATH = path.join(__dirname,'_ground');
     
     
}


loadFile(argv[1])
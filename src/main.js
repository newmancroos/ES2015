"use strict"
// let template = "<h1>Hello</h1>" +
//     "<p>This is my first template</p>"
let template = `<h1>Hello</h1>
    <p>This is my first template</p>`

document.getElementById("template").innerHTML= template;

let name = "Newman Croos";
let template1 = `<h1>Hello ${name}</h1>
    <p>This is my first template</p>`

document.getElementById("template").innerHTML= template1;

function upperCase(name)
{
    return name.toUpperCase();
}
let template2 = `<h1>Hello ${upperCase(name)}</h1>
    <p>This is my first template</p>`

document.getElementById("template").innerHTML= template2;
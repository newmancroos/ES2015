1. npm init     - create package.json file
2. npm install babel-cli babel-preset-es2015 --save-dev      -install babel and babel preser 2015 locally
3.Create a file .babelrc in root level and insert below content
{
    "presets" : [
        "es2015"
    ]
}

4. Change package.json to compile and convert to Es5 in the script tag
 "scripts": {
    "build": "babel src -d dist"
  },
  "script" : {
    "build": "babel --presets es2015 src -d dist"
  },

First compile in Es2015 and copy to dist folder 
second convert it to es5 syntax
5. Now if we create main.js and write any babel 2015 code and run
npm run build
it will compile and copy it to dist folder.

let, var and const
-------------
let - it is global and local scope as it is declared.

"var" once you declare it globally and again declare it locally it takes global scope
but "let" it will act as local in the local block and global as in outer to local block

example:
function testVar()
{
	vara = 30;
	if(true){
		vara = 50;
		console.log(a);
	}
	console.log(a);
}

Output is 50, 50

function testLet()
{
	let a = 30;
	if(true){
		let a = 50;
		console.log(a);
	}
	console.log(a);
}

Output is 50, 30

Even in for loop, 

for(var i=0;i<10;i++)
{}

you can access i outside of the for loop and it will gives the upper limit of the for loop

but
for(let i=0;i<10;i++)
{}

if you access i outside the for loop it gives error.

-----
const:

const colors =[];
colors.push("red");
colors.push("blue");

we can push to const array but can;t reuse it

color = "Grren"  // throw erros
----------------------------------------------------------------------------------------


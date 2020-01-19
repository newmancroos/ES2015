# ES2015

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
Calsses
-------
We can create regular classes llike in c# with constructor and static methods.
Also we can inhert another class.

Example: 
"use strict"
class User{
    constructor(username, email, password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    Register() {
        console.log(this.username +" is now registered.");
    }
    static countUsers()
    {
        console.log("There are 50 users");
    }

}

class Member extends User{
    constructor(username, email, password, memberPackage)
    {
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username + "is subscribed to the package " + this.package);
    }
}

let bob = new User('bob','test@test.com','test123');
bob.Register();
User.countUsers();

let mike = new Member('mike', 'mike@Test.com', 'test123', 'testPackage');
mike.Register();
mike.getPackage();
============================================================
Template Literals
------------------
* We can create string html template and assign it to a document as html element.
    ex : 
    <pre>
        "use strict"
        let template = "<h1>Hello</h1><p>This is my first template</p>"
        document.getElementById("template").innerHTML= template;
    </pre>
* For having string values in multiple line we use + symbol like below <br>
    <pre>let template = "&lt;h1&gt;Hello&lt;/h1&gt;" +
    "&lt;p&gt;This is my first template&lt;/p&gt;"  
    </pre>
but without using + symbol we can create multiline string like below<br>
    <pre>
        let template = &#x60;&#x3C;h1&#x3E;Hello&#x3C;/h1&#x3E;
    &#x3C;p&#x3E;This is my first template&#x3C;/p&#x3E;&#x60;
    </pre>

* Can also use string interpolation like in C#
ex:
    <pre>
    let name = &#x22;Newman Croos&#x22;;
    let template1 = &#x60;&#x3C;h1&#x3E;Hello ${name}&#x3C;/h1&#x3E;
    &#x3C;p&#x3E;This is my first template&#x3C;/p&#x3E;&#x60;
    document.getElementById(&#x22;template&#x22;).innerHTML= template1;
    </pre> <br>

* We can also call function using string interpolation.
ex:
    <pre>
        function upperCase(name)
        {
            return name.toUpperCase();
        }
        let template2 = &#x60;&#x3C;h1&#x3E;Hello ${upperCase(name)}&#x3C;/h1&#x3E;
            &#x3C;p&#x3E;This is my first template&#x3C;/p&#x3E;&#x60;
        document.getElementById(&#x22;template&#x22;).innerHTML= template2;
    </pre>

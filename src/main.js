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
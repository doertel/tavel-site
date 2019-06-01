

function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function(cb) {
        console.log("Hello my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
        cb();
    }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

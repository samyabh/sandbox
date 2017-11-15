"use strict"
function Animal (friends){

	this.friends = friends;
	this.hello = function (friend){
		console.log("hello " + friend);
	}

	this.helloAll = function(){

		this.friends.forEach((friend) =>{
			this.hello(friend);
		})

	}
}

let wolf = new Animal(["rox", "rookie"]);
wolf.helloAll();

// litteral object
let o = {

    traditionalFunction:function(){
     	console.log('traditionalFunction this === o', this === o);
    },

    arrrowFunction:() => {
        console.log('traditionalFunction this === o', this === o);
    }

};


function test(a,b ,c, ...toto){
	console.log()
}

o.traditionalFunction();
o.arrrowFunction();
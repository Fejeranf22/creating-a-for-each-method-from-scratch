console.log("creating my function from scratch");

// the test array
var arr = ['redd', 'yellow', 'green', 'black', 222, 'true', 33, 55, 3]

function myForEach(arr, funq){
// loop through the array
  for(var i=0; i<arr.length; i++){
// call the function "finq()" on eac item of the array
    funq(arr[i]);
  }
};
// to initiate this function:: you can add amethod where i have lefr the fnction, or you can build a specific function::::
myForEach(arr, function(){
});

// to build a function and make it behave like a method()
// 1 declare that this "array" is being "prototyped"
// 2 pass in an empty function
Array.prototype.myForEach = function(func){
  for(var i = 0; i < this.length; i++) {
   func(this[i]);
  }
};

arr.myForEach(function(color){
	console.log(color);
});

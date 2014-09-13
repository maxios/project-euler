function calc2(){
     var sum = 0;
	 var fibonacci = [1,2];
	for (var i=2; i < document.getElementById('num2').value; i++){
     var add = fibonacci[i-2]+fibonacci[i-1];
	 fibonacci.push(add);
    }	
	for (var i=0; i <= fibonacci.length ; i++){
	 if (fibonacci[i] % 2 === 0){
	     sum = sum + fibonacci[i];
	 }
	 else{
	     continue;
	 }
    }
	document.getElementById('result').innerHTML = sum;
 }
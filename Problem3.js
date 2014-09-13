function isPrime (input){
     var prime = true;
	 for (var l = 2 ; l < input; l++){
	 
	     if ( input % l === 0){
	         prime = false;
	        }
			
	    }
	 return prime;
    }
	
 function calc3(){
     var largestPrime = 0
	 for (var i = 2 ; i < document.getElementById('num3').value; i++){
	     
		 if ( document.getElementById('num3').value % i === 0) {
		 
		     if ( isPrime(i) === true){
		         largestPrime = i ;
		     }
		     else {
		         continue;
		     }
			 
		 }
		 else {
		     continue;
		 }
	 }
     document.getElementById('result').innerHTML = largestPrime;
 }
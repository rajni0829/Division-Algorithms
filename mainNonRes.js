
$(document).ready(function () {
	$('input[name="divde"]').click(function () {
		divde();
	});
});
//Restoring
function binaryToDecimal(binary){
    var binary1 = binary;
    var decimal = 0;
    var i = 0;
    var n = 0;
  
    while (binary !== 0){
      var dec = binary % 10;
      var a = Math.pow(2, i);
      decimal = decimal + dec * a;
      binary = binary / 10 ;
      // binary = Math.floor()
      binary = Math.floor(binary);
      i += 1;
    }
    return decimal
    
  }
  // binaryToDecimal('1111')
  
  
  function two_compliment(m){
    var M = '';
    for (i=0 ;i < m.length;i++){
        var temp = (Number(m[i]) + 1) % 2;
        M += temp.toString() ;
    }
    M = add(M,'0000000000000001');
    return M;
  }
  // two_compliment('1111')
  
  function add(varA, varM) {
      let carry = 0;
      var sumArr = "";
  
      for (i = varA.length - 1; i >=0; i--) {
          var temp = Number(varA[i]) + Number(varM[i]) + carry;
          // console.log("temp: ", temp);
          if (temp > 1) {
              var currentval = Number(temp % 2);
              sumArr += currentval.toString();
              carry = 1;
          } else {
              sumArr += temp.toString();
              carry = 0;
          }
      }
      sumArr.split('').reverse().join('');
      return sumArr.split('').reverse().join('');
      }
  
  function dec_to_bin(decimalNum){
    var bitStr = "";
    // console.log(typeof(decimalNum));
      while (decimalNum > 0) {
          var num = decimalNum;
          var b = num % 2;
          bitStr += b;
          num = parseInt(num / 2);
          decimalNum = parseInt(decimalNum / 2);
      }
      return bitStr.split('').reverse().join('');
  }
  // dec_to_bin(7)
  
  function restoringDivision(Q, M, A){
    var count = M.length ; 

  
    while (count != 0){
      console.log("Step : ",M.length - count + 1);
      console.log("-->Left Shift and Subtract : ")
      A = A.slice(1,) ;
      A = A + Q[0];
      comp_M = two_compliment( M );
      A = add(A, comp_M);
  
        if (A[0] == "1"){
          Q = Q.slice(1,) ;
          Q = Q + '0';
  
          A = add(A, M);
  
        }else{
          Q = Q.slice(1, ); 
          Q = Q + '1';
 
        }
        count -= 1;
    }
    
    if (dd < '0' && dr < '0'){
      binaryToDecimal(parseInt( Q ));
      binaryToDecimal(parseInt( A ) );
    }

    else if (dd < '0' || dr < '0'){
      binaryToDecimal(parseInt( Q ));
      binaryToDecimal(parseInt( A ));   
    }
  
    else{
      if (A[0] == "1"){
        A = two_compliment(A);
        binaryToDecimal(parseInt(Q));
        binaryToDecimal(parseInt(A));
        
      }
      else if (A[0] == "0"){

          binaryToDecimal(parseInt(Q));
        binaryToDecimal(parseInt(A));
          
      }
     }  
  }
  
  
  
  
  function divide() {
    var Q = parseInt($('input[name="dividend"]').val());;
    var M = parseInt($('input[name="divsor"]').val());;
    var A = 0;
    
    var dd = Q;
    var dr = M ;
    if (A == 0 || A > 0){
        console.log("A = ",A);
        A = dec_to_bin(A);
        console.log(A);
        length_A = A.length;
        for (i = 0; i < 16 - length_A;i++){
          A = '0' + A;
        }
        console.log(A);
    }
    else{
       console.log("A = ",A);
        A = dec_to_bin(A.toString);
        for (i = 0; i < 16 - A.length;i++){
          A = '0' + A;
        }
        console.log(A);
    }
  
  if (Q == 0 || Q > 0){
      console.log("Q = ",Q);
      Q = dec_to_bin(Q); 
      length_Q = Q.length;
      for (i = 0; i < 16 - length_Q ; i++){
        Q = '0' + Q;
      }
      // console.log(two_compliment);
      console.log("Q = ",Q);
  }
  
  else{
      Q = -Q;
      console.log("Q = -",Q);
      Q = dec_to_bin(Q); 
      length_Q = Q.length;
      for (i = 0 ; i <16 - length_Q;i++){
        Q = '0' + Q ;
      }
      console.log(two_compliment(Q));
  }
  
  if (M ==  0 || M > 0){
      console.log("M = ",M);
      M = dec_to_bin(M); 
      length_M = M.length;
      for (i = 0; i < 16 - length_M;i++){
        M = '0' + M;
      }
      // console.log(two_compliment);
      console.log("M = ",M);
  }
  
  else{
      M = -M;
      console.log("M = -",M);
      M = dec_to_bin(M); 
      length_M = M.length;
      for (i = 0 ; i < 16 - length_M;i++){
        M = '0' + M ;
      }
      console.log(two_compliment(M));
  }
  restoringDivision(Q,M,A);
  // }
  
  
      
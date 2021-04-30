
$(document).ready(function () {
	$('input[name="divide"]').click(function () {
		divide();
	});
});
//Restoring
function decimalBinary(decimalNum) {
     // returns a string
    var bitStr = "";
    while (decimalNum > 0) {
        var num = decimalNum;
        var b = num % 2;
        bitStr += b;
        num = parseInt(num / 2);
        decimalNum = parseInt(decimalNum / 2);
    }
    return bitStr.split('').reverse().join('');
}

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
    return decimal;
}

function Add(varA, varM) {
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

function compliment(value, len) {
    twoscomp = "";
    one = "";
    for (i = 0; i < len - 1; i++) {
        one += '0';
    }
    one += '1';

    for (i = 0; i < value.length; i++) {
        var currenttemp = Number(Number(value[i]) + 1) % 2;
        twoscomp += currenttemp.toString();
    }
    // console.log("twoscomp: ", twoscomp);
    twoscomp = Add(twoscomp, one);
    return twoscomp;
}

function writeRow(table, a, q, step) {
	table.append('<tr><td>&nbsp;&nbsp;&nbsp;' + step +'&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;'+ a + '&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;' + q+ '&nbsp;&nbsp;&nbsp;</td></tr>')
}

function divide() {
    // alert("Im here");
	var step = 0;
    var tableResult = $('#results tbody');
	tableResult.html('');
    var divident = parseInt($('input[name="divident"]').val());
    var divisor = parseInt($('input[name="divisor"]').val());
    
    if (divident > 0 && divisor > 0){       // both positive
        var q = decimalBinary(divident);
        var m = decimalBinary(divisor);


    if (m.length < q.length) {
        var diff = q.length - m.length;
        var zeros = "";
        for (i = 0; i < diff + 1; i++) {
            zeros += '0';
        }
        m = zeros.concat(m);
    }

    var acc = "";
    for (i = 0; i < m.length; i++) {
        acc += '0';
    }

    }

    if (divident > 0 && divisor < 0 ){     //dividend pos , divisor neg
        divisor = - divisor;
        var m = decimalBinary(divisor);
        var q = decimalBinary(divident);

        if (m.length < q.length) {
            var diff = q.length - m.length;
            var zeros = "";
            for (i = 0; i < diff + 1; i++) {
                zeros += '0';
            }
            m = zeros.concat(m);
        }
    
        var acc = "";
        for (i = 0; i < m.length; i++) {
            acc += '0';
        }
    
    }

    if (divident < 0 && divisor > 0){         //dividend neg , divisor pos
        divident = - divident;
        var q = decimalBinary(divident);
        var m = decimalBinary(divisor);

        if (m.length < q.length) {
            var diff = q.length - m.length;
            var zeros = "";
            for (i = 0; i < diff + 1; i++) {
                zeros += '0';
            }
            m = zeros.concat(m);
        }
    
        var acc = "";
        for (i = 0; i < m.length; i++) {
            acc += '0';
        }
    }
    
    if (divident < 0  && divisor < 0){             // both neg
        divident = -divident;
        divisor = -divisor;
        var q = decimalBinary(divident);
        var m = decimalBinary(divisor);

        if (m.length < q.length) {
            var diff = q.length - m.length;
            var zeros = "";
            for (i = 0; i < diff + 1; i++) {
                zeros += '0';
            }
            m = zeros.concat(m);
        }
    
        var acc = "";
        for (i = 0; i < m.length; i++) {
            acc += '0';
        }
    }

    let count = m.length;
    var negM = compliment(m, count);
    var flag = '1';
		step++;
    writeRow(tableResult, acc, q, step);
    while (count > 1) {
        acc = acc.slice(1, );
        acc += q[0];

        if (flag == '1') {
            acc = Add(acc, negM);
        }
        else {
            acc = Add(acc, m);
        }
				step++;
        writeRow(tableResult, acc, q, step);
        if (acc[0] == '1') {
            q = q.slice(1, );
            q += '0';
            flag = '0';
						step++;
            writeRow(tableResult, acc, q, step);
        } else {
            q = q.slice(1, );
            q += '1';
            flag = '1';
						step++;
            writeRow(tableResult, acc, q, step);
        }
        count -= 1;
    }

if (divident < 0 && divisor < 0){
    q = binaryToDecimal(parseInt( q ) );
    acc = binaryToDecimal(parseInt(acc));
    step++;
    writeRow(tableResult, acc, q, step);
}
else if (divident < 0 || divisor < 0){
    q =binaryToDecimal(parseInt(q)); 
    acc = binaryToDecimal(parseInt(acc));
    step++;
    writeRow(tableResult, acc, q, step);
}
else{
    if (acc[0] == "1"){
    // acc = compliment(acc);
    console.log("There",acc);
    // alert("Entered!");
    q = binaryToDecimal(parseInt(q));
    acc = binaryToDecimal(parseInt(acc));
    step++;
    writeRow(tableResult, acc, q, step);
  
}
    else if (acc[0] == "0"){
        // alert("hello");
    q = binaryToDecimal(parseInt(q));
    acc = binaryToDecimal(parseInt(acc));
    step++;
    writeRow(tableResult, acc, q, step);
  
}
}
}
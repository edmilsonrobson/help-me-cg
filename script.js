function calculateQuaternions(){	
	var w = $('input[name=w]').val();
	var x = $('input[name=x]').val();
	var y = $('input[name=y]').val();
	var z = $('input[name=z]').val();

	var items = [
			  [w*w + x*x - y*y - z*z, (2*x*y - 2*w*z), 2*x*z + 2*w*y, 0],
			  [(2*x*y + 2*w*z), (w*w - x*x + y*y - z*z), (2*y*z - 2*w*x), 0 ],
			  [(2*x*z -  2*w*y), (2*y*z + 2*w*x), (w*w - x*x - y*y + z*z), 0],
			  [0, 0, 0, (w*w+x*x+y*y+z*z)]
			];
	var response = "";
	for (i = 0 ; i < 4 ; i++){
		for (j = 0 ; j < 4 ; j++){
			response = response + " " + roundToTwo(items[i][j]);
		}
		response = response + "\n";
	}

	alert(response);
}

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
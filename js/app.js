// APP
window.onload = function() {

	var canvas = document.getElementById('my-canvas'),
		ctx = canvas.getContext('2d'),
		height = canvas.height,
		width = canvas.width,
		max = 40,
		draw = function(x, y, color) {
			ctx.fillStyle = color || '#000';
			ctx.fillRect(x, y, 1, 1);
		},
		color = function(iteration){
			var c = Math.round(255*iteration/max);
			return 'rgb('+c+','+c+','+c+')';
		};



	for (var row = 0; row < height; row++) {
		for (var col = 0; col < width; col++) {
			var c_re = (col - width / 2.0) * 4.0 / width;
			var c_im = (row - height / 2.0) * 4.0 / width;
			var x = 0,
				y = 0;
			var iteration = 0;
			while (x * x + y * y <= 4 && iteration < max) {
				var x_new = x * x - y * y + c_re;
				y = 2 * x * y + c_im;
				x = x_new;
				iteration++;
			}
			if (iteration < max) {
				draw(col, row,color(iteration));
			} else {
				draw(col, row);
			}
		}
	}



};
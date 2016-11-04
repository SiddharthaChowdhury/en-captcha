window.onload = function(){
	var input = {
		char_count: 6, // 4,5 or 6
		container: '.captcha_container',
		reload_sec: 30
	}

	var can_wrapper = document.createElement('div'),
		mike = document.createElement('small'),
		txt_wrapper = document.createElement('div');

	can_wrapper.setAttribute('class', '_encaptchaWrapper')
	// can_wrapper.style.width =  ;
	can_wrapper.setAttribute('style', 'width:'+((36*input.char_count)+15).toString()+'px; background-color:#fff; padding:5px; border-radius:4px;');
	// mike.style.padding = '5px 7px';
	mike.setAttribute('style', 'text-align:center; padding: 5px 7px;');
	mike.innerHTML = 'Valid for '+input.reload_sec+' sec';
	txt_wrapper.setAttribute('style', 'padding:5px; text-align:center;');

	var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d');

	var canvas_diamention = {
		width:  parseInt(36*input.char_count),
		height: 40
	}
	canvas.width = canvas_diamention.width;
	canvas.height = canvas_diamention.height;

	can_wrapper.appendChild(mike);
	can_wrapper.appendChild(canvas);
	
	for(var i = 0; i < input.char_count; i++){
		var textBox = document.createElement('input');
		textBox.setAttribute('type', 'text');
		textBox.setAttribute('data-index', i);
		textBox.setAttribute('class', 'encaptcha-inputs33');
		textBox.setAttribute('style', 'text-align:center; padding: 10px '+parseInt(36/input.char_count)+'px; width:15px; margin:1px; border:1px solid #C0C0C0; border-radius:4px;');
		txt_wrapper.appendChild(textBox);
	}
	can_wrapper.appendChild(txt_wrapper);

	document.querySelector(input.container).appendChild(can_wrapper);

	var sprite_data = [{"name":"K","x":80,"y":57,"width":19,"height":18},{"name":"L","x":80,"y":19,"width":19,"height":18},{"name":"M","x":100,"y":0,"width":19,"height":18},{"name":"N","x":100,"y":76,"width":19,"height":18},{"name":"O","x":20,"y":57,"width":19,"height":18},{"name":"P","x":60,"y":114,"width":19,"height":18},{"name":"Q","x":0,"y":114,"width":19,"height":18},{"name":"R","x":40,"y":38,"width":19,"height":18},{"name":"S","x":100,"y":95,"width":19,"height":18},{"name":"T","x":0,"y":38,"width":19,"height":18},{"name":"U","x":40,"y":0,"width":19,"height":18},{"name":"V","x":41,"y":95,"width":19,"height":18},{"name":"W","x":0,"y":95,"width":20,"height":18},{"name":"X","x":0,"y":19,"width":19,"height":18},{"name":"Y","x":80,"y":76,"width":19,"height":18},{"name":"Z","x":20,"y":19,"width":19,"height":18},{"name":"#","x":20,"y":114,"width":19,"height":18},{"name":"%","x":100,"y":19,"width":19,"height":18},{"name":"&","x":40,"y":19,"width":19,"height":18},{"name":"@","x":21,"y":95,"width":19,"height":18},{"name":"0","x":60,"y":76,"width":19,"height":18},{"name":"1","x":0,"y":57,"width":19,"height":18},{"name":"2","x":61,"y":95,"width":19,"height":18},{"name":"3","x":20,"y":0,"width":19,"height":18},{"name":"4","x":40,"y":57,"width":19,"height":18},{"name":"5","x":20,"y":76,"width":19,"height":18},{"name":"6","x":60,"y":0,"width":19,"height":18},{"name":"7","x":60,"y":57,"width":19,"height":18},{"name":"8","x":80,"y":38,"width":19,"height":18},{"name":"9","x":100,"y":38,"width":19,"height":18},{"name":"A","x":100,"y":57,"width":19,"height":18},{"name":"B","x":20,"y":38,"width":19,"height":18},{"name":"C","x":40,"y":76,"width":19,"height":18},{"name":"D","x":80,"y":114,"width":19,"height":18},{"name":"E","x":0,"y":76,"width":19,"height":18},{"name":"F","x":60,"y":38,"width":19,"height":18},{"name":"G","x":0,"y":0,"width":19,"height":18},{"name":"H","x":60,"y":19,"width":19,"height":18},{"name":"I","x":80,"y":0,"width":19,"height":18},{"name":"J","x":40,"y":114,"width":19,"height":18}]
	var sprite_img = new Image();
	sprite_img.onload = function(){
		draw_canvas();
	}

	sprite_img.src = 'cs.png';

	var active_pattern = [];

	function draw_canvas(){
		// image drawing
		ctx.clearRect(0,0, canvas_diamention.width, canvas_diamention.height);
		var	pos_width = 0,
			total_width = 0;

		for(var i = 0; i < input.char_count; i++){
			var index = parseInt(Math.floor(Math.random() * sprite_data.length) + 0);
			active_pattern.push(sprite_data[index]);
			total_width += sprite_data[index].width+5;
		}

		pos_width = parseInt((canvas_diamention.width - total_width) / 2)
		for(var i = 0; i < active_pattern.length; i++){
			ctx.drawImage(sprite_img, active_pattern[i].x, active_pattern[i].y, active_pattern[i].width, active_pattern[i].height, pos_width, 10, active_pattern[i].width+5, active_pattern[i].height+5 );
			pos_width += parseInt(active_pattern[i].width ) + 10;
		}
	}

	var lap = input.reload_sec;
	var timer = setInterval(function(){
		lap --;

		if(lap == 0){
			active_pattern.length = 0;
			draw_canvas();
			lap = input.reload_sec;
		}
		mike.innerHTML = 'Valid for '+lap+' sec'; 
	}, 1000);

}


	// window.onload = function(){
	// 	var can = document.createElement('canvas'),
	// 		ctx = can.getContext('2d');
	// 	can.width 	= window.innerWidth;
	// 	can.height 	= window.innerHeight;
	// 	document.querySelector('body').appendChild(can);

	// 	var walker_img = new Image();
	// 	walker_img.onload = function(){
	// 		index = (index + 1) % walker.length;
	// 		ctx.drawImage(walker_img, 120, 120 )
	// 	}
	// 	walker_img.src = "cs.png";
	// 	var walker = [{"name":"K","x":80,"y":57,"width":19,"height":18},{"name":"L","x":80,"y":19,"width":19,"height":18},{"name":"M","x":100,"y":0,"width":19,"height":18},{"name":"N","x":100,"y":76,"width":19,"height":18},{"name":"O","x":20,"y":57,"width":19,"height":18},{"name":"P","x":60,"y":114,"width":19,"height":18},{"name":"Q","x":0,"y":114,"width":19,"height":18},{"name":"R","x":40,"y":38,"width":19,"height":18},{"name":"S","x":100,"y":95,"width":19,"height":18},{"name":"T","x":0,"y":38,"width":19,"height":18},{"name":"U","x":40,"y":0,"width":19,"height":18},{"name":"V","x":41,"y":95,"width":19,"height":18},{"name":"W","x":0,"y":95,"width":20,"height":18},{"name":"X","x":0,"y":19,"width":19,"height":18},{"name":"Y","x":80,"y":76,"width":19,"height":18},{"name":"Z","x":20,"y":19,"width":19,"height":18},{"name":"#","x":20,"y":114,"width":19,"height":18},{"name":"%","x":100,"y":19,"width":19,"height":18},{"name":"&","x":40,"y":19,"width":19,"height":18},{"name":"@","x":21,"y":95,"width":19,"height":18},{"name":"0","x":60,"y":76,"width":19,"height":18},{"name":"1","x":0,"y":57,"width":19,"height":18},{"name":"2","x":61,"y":95,"width":19,"height":18},{"name":"3","x":20,"y":0,"width":19,"height":18},{"name":"4","x":40,"y":57,"width":19,"height":18},{"name":"5","x":20,"y":76,"width":19,"height":18},{"name":"6","x":60,"y":0,"width":19,"height":18},{"name":"7","x":60,"y":57,"width":19,"height":18},{"name":"8","x":80,"y":38,"width":19,"height":18},{"name":"9","x":100,"y":38,"width":19,"height":18},{"name":"A","x":100,"y":57,"width":19,"height":18},{"name":"B","x":20,"y":38,"width":19,"height":18},{"name":"C","x":40,"y":76,"width":19,"height":18},{"name":"D","x":80,"y":114,"width":19,"height":18},{"name":"E","x":0,"y":76,"width":19,"height":18},{"name":"F","x":60,"y":38,"width":19,"height":18},{"name":"G","x":0,"y":0,"width":19,"height":18},{"name":"H","x":60,"y":19,"width":19,"height":18},{"name":"I","x":80,"y":0,"width":19,"height":18},{"name":"J","x":40,"y":114,"width":19,"height":18}]
	// 	var index = 0;

	// 	// setInterval(function(){
	// 		// ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
	// 		// index = (index + 1) % walker.length;
	// 		// ctx.drawImage(walker_img, 120, 120 )
	// 		// console.log(index)
	// 	// }, 2000);
	// }
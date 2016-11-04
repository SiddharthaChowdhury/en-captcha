window.onload = function(){
	var input = {
		char_count: 6, // 4,5 or 6
		container: '.captcha_container',
		reload_after: 20
	}

	var can_wrapper = document.createElement('div'),
		mike = document.createElement('label'),
		txt_wrapper = document.createElement('div');
	can_wrapper.style.width =  ((36*input.char_count)+15).toString()+'px';
	mike.style.padding = '5px 7px';
	txt_wrapper.setAttribute('style', 'padding:5px; text-align:center;')

	var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d');
	canvas.width = parseInt(36*input.char_count);
	canvas.height = 36;

	can_wrapper.appendChild(canvas);
	can_wrapper.appendChild(mike);


	for(var i = 0; i < input.char_count; i++){
		var textBox = document.createElement('input');
		textBox.setAttribute('type', 'text');
		textBox.setAttribute('data-index', i);
		textBox.setAttribute('class', 'encaptcha-inputs33');
		textBox.setAttribute('style', 'padding: 10px '+parseInt(36/input.char_count)+'px; width:15px; margin:1px; border:1px solid #C0C0C0; border-radius:4px;');
		txt_wrapper.appendChild(textBox);
	}
	can_wrapper.appendChild(txt_wrapper);

	document.querySelector(input.container).appendChild(can_wrapper);

	var sprite_data = [{"name":"K","x":80,"y":57,"width":19,"height":18},{"name":"L","x":80,"y":19,"width":19,"height":18},{"name":"M","x":100,"y":0,"width":19,"height":18},{"name":"N","x":100,"y":76,"width":19,"height":18},{"name":"O","x":20,"y":57,"width":19,"height":18},{"name":"P","x":60,"y":114,"width":19,"height":18},{"name":"Q","x":0,"y":114,"width":19,"height":18},{"name":"R","x":40,"y":38,"width":19,"height":18},{"name":"S","x":100,"y":95,"width":19,"height":18},{"name":"T","x":0,"y":38,"width":19,"height":18},{"name":"U","x":40,"y":0,"width":19,"height":18},{"name":"V","x":41,"y":95,"width":19,"height":18},{"name":"W","x":0,"y":95,"width":20,"height":18},{"name":"X","x":0,"y":19,"width":19,"height":18},{"name":"Y","x":80,"y":76,"width":19,"height":18},{"name":"Z","x":20,"y":19,"width":19,"height":18},{"name":"#","x":20,"y":114,"width":19,"height":18},{"name":"%","x":100,"y":19,"width":19,"height":18},{"name":"&","x":40,"y":19,"width":19,"height":18},{"name":"@","x":21,"y":95,"width":19,"height":18},{"name":"0","x":60,"y":76,"width":19,"height":18},{"name":"1","x":0,"y":57,"width":19,"height":18},{"name":"2","x":61,"y":95,"width":19,"height":18},{"name":"3","x":20,"y":0,"width":19,"height":18},{"name":"4","x":40,"y":57,"width":19,"height":18},{"name":"5","x":20,"y":76,"width":19,"height":18},{"name":"6","x":60,"y":0,"width":19,"height":18},{"name":"7","x":60,"y":57,"width":19,"height":18},{"name":"8","x":80,"y":38,"width":19,"height":18},{"name":"9","x":100,"y":38,"width":19,"height":18},{"name":"A","x":100,"y":57,"width":19,"height":18},{"name":"B","x":20,"y":38,"width":19,"height":18},{"name":"C","x":40,"y":76,"width":19,"height":18},{"name":"D","x":80,"y":114,"width":19,"height":18},{"name":"E","x":0,"y":76,"width":19,"height":18},{"name":"F","x":60,"y":38,"width":19,"height":18},{"name":"G","x":0,"y":0,"width":19,"height":18},{"name":"H","x":60,"y":19,"width":19,"height":18},{"name":"I","x":80,"y":0,"width":19,"height":18},{"name":"J","x":40,"y":114,"width":19,"height":18}]
	// console.log(captcha_container.innerHTML);
	var sprite_img = new Image();
	sprite_img.src = 'cs.png';

	// image drawing
	for(var i = 0; i < char_count; i++){
		
	}
	// var count = input.reload_after;
	// var timer = setTimeout(function(){

	// },1000)
}
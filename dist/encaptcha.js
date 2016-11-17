// encaptcha.js

	function Encaptcha(user_input){
		this.can_wrapper 	= document.createElement('div');
		this.mike 			= document.createElement('small');
		this.txt_wrapper 	= document.createElement('div');
		this.reload 		= document.createElement('small');
		this.canvas 		= document.createElement('canvas');
		this.ctx 			= this.canvas.getContext('2d');
		this.input 			= user_input;
		this.input.char_count=user_input.char_count<5?5:user_input.char_count
		this.canvas_diamention = { width:  parseInt(36*this.input.char_count), height: 40};
		this.sprite_data 	= [{"name":"K","x":80,"y":57,"width":19,"height":18},{"name":"L","x":80,"y":19,"width":19,"height":18},{"name":"M","x":100,"y":0,"width":19,"height":18},{"name":"N","x":100,"y":76,"width":19,"height":18},{"name":"O","x":20,"y":57,"width":19,"height":18},{"name":"P","x":60,"y":114,"width":19,"height":18},{"name":"Q","x":0,"y":114,"width":19,"height":18},{"name":"R","x":40,"y":38,"width":19,"height":18},{"name":"S","x":100,"y":95,"width":19,"height":18},{"name":"T","x":0,"y":38,"width":19,"height":18},{"name":"U","x":40,"y":0,"width":19,"height":18},{"name":"V","x":41,"y":95,"width":19,"height":18},{"name":"W","x":0,"y":95,"width":20,"height":18},{"name":"X","x":0,"y":19,"width":19,"height":18},{"name":"Y","x":80,"y":76,"width":19,"height":18},{"name":"Z","x":20,"y":19,"width":19,"height":18},{"name":"#","x":20,"y":114,"width":19,"height":18},{"name":"%","x":100,"y":19,"width":19,"height":18},{"name":"&","x":40,"y":19,"width":19,"height":18},{"name":"@","x":21,"y":95,"width":19,"height":18},{"name":"0","x":60,"y":76,"width":19,"height":18},{"name":"1","x":0,"y":57,"width":19,"height":18},{"name":"2","x":61,"y":95,"width":19,"height":18},{"name":"3","x":20,"y":0,"width":19,"height":18},{"name":"4","x":40,"y":57,"width":19,"height":18},{"name":"5","x":20,"y":76,"width":19,"height":18},{"name":"6","x":60,"y":0,"width":19,"height":18},{"name":"7","x":60,"y":57,"width":19,"height":18},{"name":"8","x":80,"y":38,"width":19,"height":18},{"name":"9","x":100,"y":38,"width":19,"height":18},{"name":"A","x":100,"y":57,"width":19,"height":18},{"name":"B","x":20,"y":38,"width":19,"height":18},{"name":"C","x":40,"y":76,"width":19,"height":18},{"name":"D","x":80,"y":114,"width":19,"height":18},{"name":"E","x":0,"y":76,"width":19,"height":18},{"name":"F","x":60,"y":38,"width":19,"height":18},{"name":"G","x":0,"y":0,"width":19,"height":18},{"name":"H","x":60,"y":19,"width":19,"height":18},{"name":"I","x":80,"y":0,"width":19,"height":18},{"name":"J","x":40,"y":114,"width":19,"height":18}]
		this.sprite_img		= new Image();
		this.lap 			= this.input.reload_sec || 30;
		this.textboxsClass	= "";
		this.timerHandler	= null;
		this.active_pattern = [];
		this.form			= user_input.form || null;
		this.formControl_id	= {init:'enc_',final:null};
	}

	Encaptcha.prototype.draw_canvas = function(){
		var u_inputbxs = document.querySelectorAll('.'+this.textboxsClass);
			for(var i in u_inputbxs)
				u_inputbxs[i].value = "";
		var x = this;
		x.active_pattern.length = 0;
		x.ctx.clearRect(0,0, x.canvas_diamention.width, x.canvas_diamention.height);
		var	pos_width = 0,
			total_width = 0;

		for(var i = 0; i < x.input.char_count; i++){
			var index = parseInt(Math.floor(Math.random() * x.sprite_data.length) + 0);
			x.active_pattern.push(x.sprite_data[index]);
			total_width += x.sprite_data[index].width+5;
		}

		pos_width = parseInt((x.canvas_diamention.width - total_width) / 2)
		for(var i = 0; i < x.active_pattern.length; i++){
			x.ctx.drawImage(x.sprite_img, x.active_pattern[i].x, x.active_pattern[i].y, x.active_pattern[i].width, x.active_pattern[i].height, pos_width, 10, x.active_pattern[i].width+5, x.active_pattern[i].height+5 );
			pos_width += parseInt(x.active_pattern[i].width ) + 10;
		}	
		x.lap = x.input.reload_sec;
	}

	Encaptcha.prototype.validateCaptcha = function(){
		var u_inputbxs = document.querySelectorAll('.'+this.textboxsClass);
		var user_values = [];
		var x = this;
		var inputted = 0;
		var validation_result = true;
		for(var i = 0; i<u_inputbxs.length; i++ ){
			var indx = u_inputbxs[i].getAttribute('data-index');
			var value = u_inputbxs[i].value.trim();
			if(value != "" && value.length != 0){
				inputted++;
				user_values[indx] = value;
			}
		}
		if(inputted == this.input.char_count){
			clearTimeout(x.timerHandler);

			var captcha_values = [];
			for(var i in x.active_pattern){
				captcha_values.push(x.active_pattern[i].name);
			}

			if(captcha_values.length == user_values.length){
				for(var i = 0; i< captcha_values.length; i++)
					if( captcha_values[i] != user_values[i] ){
						validation_result = false;
						break;
					}
			}
			else
				validation_result = false;
			
			// CAPTCHA VALIDATION==========================>
			if(validation_result){
				document.querySelector(x.input.container).innerHTML = "Validation complete."
				var _form = document.querySelector(x.form);
				if(_form != null){
					x.formControl_id.final = 'enc_';
					for(var i =0; i <15; i++){
						x.formControl_id.final += parseInt(Math.floor(Math.random() * 9) + 0)
					}
					_form.setAttribute('data-finalControlEncaptcha', x.formControl_id.final);
				}
				x.input.onSuccess();
			}
			else{
				x.draw_canvas();
				x.startTimer();
				x.input.onfailure();
			}
		}
	}

	Encaptcha.prototype.startTimer = function(){
		var x = this;
		x.timerHandler = setInterval(function(){
			x.lap --;
			if(x.lap == 0){
				x.draw_canvas();
			}
			x.mike.innerHTML = 'Valid for '+x.lap+' sec'; 
		}, 1000);
	}

	Encaptcha.prototype.cookDomObjects = function(){
		var x = this;
		x.canvas.width = x.canvas_diamention.width;
		x.canvas.height = x.canvas_diamention.height

		var wrapper_class;
		var count = 0;
		do{
			var bool = 1;
			var wrpr_cls = document.querySelectorAll('._encaptchaWrapper'+count);
			if(wrpr_cls.length == 0){
				wrapper_class = '_encaptchaWrapper'+count;
				bool = 0;
			}
			else
				count++;
		}while(bool);

		count = 0;
		do{
			var bool = 1;
			var wrpr_cls = document.querySelectorAll('._encaptchaCapBox'+count);
			if(wrpr_cls.length == 0){
				x.textboxsClass = '_encaptchaCapBox'+count;
				bool = 0;
			}
			else
				count++;
		}while(bool);

		x.can_wrapper.setAttribute('class', wrapper_class)
		x.can_wrapper.setAttribute('style', 'width:'+((36*x.input.char_count)+15).toString()+'px; background-color:#fff; padding:5px; border-radius:4px;');
		
		x.mike.setAttribute('style', 'text-align:center; padding: 5px 7px; color:#000;');
		x.mike.setAttribute('class', 'encaptcha-timestamp');
		x.mike.innerHTML = 'Valid for '+x.input.reload_sec+' sec';
		
		x.reload.setAttribute('style', 'cursor:pointer; text-decoration:none; color:#000; float:right;');
		x.reload.setAttribute('class', 'encaptcha-reloadBtn');

		x.reload.addEventListener('click', function(){
			x.draw_canvas();
		})
		x.reload.innerHTML = 'Reload';
		
		x.txt_wrapper.setAttribute('style', 'padding:5px; text-align:center;');

		x.can_wrapper.appendChild(x.mike);
		x.can_wrapper.appendChild(x.reload);
		x.can_wrapper.appendChild(x.canvas);

		for(var i = 0; i < x.input.char_count; i++){
			var textBox = document.createElement('input');
			textBox.setAttribute('type', 'text');
			textBox.setAttribute('data-index', i);
			textBox.setAttribute('maxlength', '1');
			textBox.setAttribute('size', '1');
			textBox.setAttribute('class', x.textboxsClass);
			textBox.setAttribute("style", "color: #000 !important; text-align:center; padding: " + parseInt(36 / this.input.char_count) + "px; width:1em; height:10%; margin:1px; border:1px solid #C0C0C0; border-radius:4px;")
			textBox.addEventListener('keyup', function(){
				x.validateCaptcha();
			})
			x.txt_wrapper.appendChild(textBox);
		}
		x.can_wrapper.appendChild(x.txt_wrapper);
		document.querySelector(x.input.container).appendChild(x.can_wrapper);
		x.sprite_img.onload = function(){
			x.draw_canvas();
		}
		x.sprite_img.src = 'data:image/png;base64,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'
	}

	Encaptcha.prototype.run = function(){
		var x = this;
		if(document.querySelector(x.input.container).children.length == 0){
			var _form = document.querySelector(x.form);
			if( _form != null){
				
				for(var i =0; i <12; i++){
					x.formControl_id.init += parseInt(Math.floor(Math.random() * 9) + 0)
				}
				_form.setAttribute('data-initControlEncaptcha', x.formControl_id.init);

				_form.addEventListener("submit", function (e) {
		 			e.preventDefault();
		 			if(x.formControl_id.final != null){
		 				if( (_form.getAttribute('data-initControlEncaptcha') == x.formControl_id.init) && _form.getAttribute('data-finalControlEncaptcha') == x.formControl_id.final ){
		 					_form.submit();
		 				}
		 			}
		 		});
			}
			x.cookDomObjects();
			x.startTimer();
		}
	};
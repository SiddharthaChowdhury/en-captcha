class Encaptcha {
	constructor(raw){
		this.container = raw.config.container;
		this.lap = parseInt(raw.config.reload_interval) || 30;
		this.reload_btn_text = raw.config.reloadBtn_text || 'Reload';
		
		this.final 		= null;
		this.timestamp 	= null;
		this.reload_btn = null;
		this.canvas		= null;
		this.ctx 		= null;

		this.char_count	= null;
		this.char_diam  = null;
		// this.box_diam	= null;
	}

	cook_meta(){
		this.char_count = Math.floor((Math.random() * ((7-5)+1)) + 5);
		this.char_diam = {width: 25, height: 'auto'};
		// this.box_diam = { width: this.char_count*7, height: 'auto' }
	}

	crerate_dom(){
		let wrapr = document.createElement('div');
		wrapr.setAttribute('style', 'display: flex; flex-direction:column; background-color:#CCC; padding:3px 4px; width:'+((this.char_diam.width * 7) +14)+'px; margin:0px;');
		wrapr.setAttribute('class', 'enc-wrapper');

			let top_n = document.createElement('div');
			top_n.setAttribute('style', 'width:100%;') ;
			top_n.setAttribute('class', 'enc-wrapper-topn');

				let timestamp = document.createElement('label');
				timestamp.innerHTML = 'Initializing';
				timestamp.setAttribute('style', 'font-size: 0.8em; float: left;');
				timestamp.setAttribute('class', 'enc-wrapper-topn-timestamp');
				this.timestamp = timestamp;
			
				let reload_btn = document.createElement('a');
				reload_btn.setAttribute('style', 'text-decoration:none; float:right; font-size:0.8em; cursor:pointer;')
				reload_btn.innerHTML = this.reload_btn_text
				this.reload_btn = reload_btn;

			let cap_cont = document.createElement('div');
			cap_cont.setAttribute('style', 'width: 100%; text-align: center;')
				
				let captcha = document.createElement('canvas');
				captcha.width = (this.char_count * this.char_diam.width);
				captcha.height = 50;
				this.captcha = captcha;
				this.ctx = captcha.getContext('2d');


		top_n.appendChild(timestamp);
		top_n.appendChild(reload_btn);
		wrapr.appendChild(top_n);

		cap_cont.appendChild(captcha);
		wrapr.appendChild(cap_cont);

		this.final = wrapr;

		console.log('char_count', this.char_count);
		console.log('(25 * 7) + 14 = '+((this.char_diam.width * 7) +14));
		console.log('(char_count * 25) = '+(this.char_count * this.char_diam.width));
	}	 
}

Encaptcha.prototype.start = function(){
			
	if(window.jQuery){
		if(jQuery(this.container).length == 1){
			var self = this;
			this.cook_meta();
			this.crerate_dom();
			jQuery(this.container).append(this.final)
		}
		else
			console.log('Value of [container] passed in config is INVALID ( either not-UNIQUE or doesnt exist in the current page)')
	}
	else
		console.log('jQuery not loaded')
}
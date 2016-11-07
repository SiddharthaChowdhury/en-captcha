# En-captcha 
A "Completely Automated Public Turing test to tell Computers and Humans Apart" aka CAPTCHA, build on JavaScript, this plugin is standalone (no dependencies), clean, simple, light and secure. A simple integration to prevent bots from your form


**Setup-Example**

**`PLEASE NOTE`** *Include the `encaptcha.min.js` anywhere BEFORE initializing encaptcha* 

		window.onload = function(){

			var enc3 = new Encaptcha({
				char_count: 4, // 4,5 or 6
				container: '#captcha_container',
				reload_sec: 30,
				form: '#exampleForm',
				onSuccess: function(){
					alert("Captcha match was successful, OK to redirect");
				},
				onfailure: function(){
					alert("Captcha match was failed");
				},

			});
			enc3.run();
		}		

**Browser support**

Tested in all modern browser ( IE-9+, Chrome, Opera, FF )

**Resources**

 Online [Image Cropping](http://croppiconline.com/en)

 Online [Sprite generator](https://www.leshylabs.com/apps/sstool)

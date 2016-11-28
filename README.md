<a name="intro"></a> 
# En-captcha 
![alt tag](https://github.com/SiddharthaChowdhury/en-captcha/blob/master/Screen-shot.png)

A "Completely Automated Public Turing test to tell Computers and Humans Apart" aka CAPTCHA, build on JavaScript, this plugin is standalone (no dependencies), clean, simple, light and secure. A simple integration to prevent bots from your form


##CONTENT

- [Intro](#intro)
- [Setup-guide](#setup)
- [Example](#example) 
- [Configuration / Options](#CONFIGURATION)
- [Dependency] (#dependency)
- [Browser support](#browser) 


<a name="setup"></a>
##SETUP-GUIDE 

**`PLEASE NOTE`** *`encaptcha.min.js`* and *`encaptcha.js`* in directory **`/dist`** is always a stable version of en-captcha

- Clone/Download the repo in your local system
- Extract the `encaptcha.min.js` or `encaptcha.js` from the dir **`/dist`** and put it your project
- Once you already have the plugin (the `.js` file) in your project
- Write a script to configure and display the captcha. To do so (Refer the  [Example](#example) given below )   
- Create an `Encaptcha` object say `en-obj` and pass in the `configuration` explained below in [CONFIGURATION section](#CONFIGURATION)
- Execute `en-obj.run()` to start the captcha.

<a name="example"></a>
####EXAMPLE 
	
	// $(document).ready(function(){}) // If JQuery
	  window.onload = function(){ 

	  	// The configuration section
		var enc3 = new Encaptcha({
			char_count: 4, // 5 or 6
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
		
		// Execute the captcha
		enc3.run();
	  }		

<a name="CONFIGURATION"></a>
##CONFIGURATION / Options 

* **`char_count:`** Strength of CAPTCHA (ie number of letters in CAPTCHA image). *Recommended-value: 5 or 6* . It cannot be less than 5
* **`container:`**  DOM element where you want the CAPTCHA to be displayed. Value can be `id` or `class` of the element. Please make sure this CAPTCHA container is **empty**.  *Example value:* `'#container'` or `'.container'` .  
* **`reload_sec:`** The CAPTCHA must reload after certain seconds so this value should contain an integer. *Recommended-value: 30 or 60*
* **`form`** : *[OPTIONAL]* If you want to use CAPTCHA validation on form submit, you should pass the form reference here. Value can be `id` or `class`. *Example value:* `'#form'` or `'.form'` 
* **`onSuccess:`**  *[OPTIONAL]* The value has to be an anonymous function which will execute when the CAPTCHA is successfully validated.
* **`onfailure:`**  *[OPTIONAL]* The value has to be an anonymous function which will execute when the CAPTCHA validation FAILS.

---------------------------------------------------

**`object.run()`** Is REQUIRED to run the captcha.

<a name="browser"></a>
##Browser support 

Tested in all modern browser ( IE-9+, Chrome, Opera, FF, Safari )

<a name="dependency"></a>
##Dependency

NO Dependency. It is **NOT** dependent on any library/framework like JQuery or as such.

##Resources##

 Online [Image Cropping](http://croppiconline.com/en)

 Online [Sprite generator](https://www.leshylabs.com/apps/sstool)

 Online [OCR](http://www.ocrconvert.com/)

 Online [Image compress](http://optimizilla.com)

 Online [Image metadata viewer](http://regex.info/exif.cgi)

 Online [Base64](http://jsfiddle.net/handtrix/xztfbx1m/)
 
##CONTENT

- [Intro](#intro)
- [Setup-guide](#setup)
- [Example](#example) 
- [Configuration / Options](#CONFIGURATION)
- [Dependency] (#dependency)
- [Browser support](#browser) 

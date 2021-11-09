	
		function getRandomImage() {  

		var randomImage = new Array();  
	randomImage[0] = "images/random/kot1.jpg";  
	randomImage[1] = "images/random/kot2.jpg";  
	randomImage[2] = "images/random/pies1.jpg";  
	randomImage[3] = "images/random/pies2.jpg";  
	randomImage[4] = "images/random/jesien.jpg";  
	randomImage[5] = "images/random/ksiezyc.jpg"; 
	randomImage[6] = "images/random/fotograf.jpg";
	randomImage[7] = "images/random/motyl.jpg";	
	randomImage[8] = "images/random/kot3.jpg";  
	randomImage[9] = "images/random/gitary.jpg";  
	randomImage[10] = "images/random/joga.jpg";  
	randomImage[11] = "images/random/konie.jpg";  
	randomImage[12] = "images/random/kucyk.jpg";  
	randomImage[13] = "images/random/lis.jpg"; 
	randomImage[14] = "images/random/małpy.jpg";
	randomImage[15] = "images/random/motyl2.jpg";	
	randomImage[16] = "images/random/pies3.jpg";
	randomImage[17] = "images/random/pociąg.jpg";
	randomImage[18] = "images/random/sowa.jpg";
  
		var number = Math.floor(Math.random()*randomImage.length);  
  
		return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';  
}
	function checkQuiz()
	{
			document.getElementById("1a").innerHTML = "<i class='icon-ok'> </i>";
			document.getElementById("1b").innerHTML = "<i class='icon-cancel'> </i>";
			document.getElementById("1c").innerHTML = "<i class='icon-cancel'> </i>";
			
			document.getElementById("2a").innerHTML = "<i class='icon-ok'> </i>";
			document.getElementById("2b").innerHTML = "<i class='icon-cancel'> </i>";
			
			document.getElementById("3a").innerHTML = "<i class='icon-cancel'> </i>";
			document.getElementById("3b").innerHTML = "<i class='icon-ok'> </i>";
			document.getElementById("3c").innerHTML = "<i class='icon-cancel'> </i>";
	
	}
	

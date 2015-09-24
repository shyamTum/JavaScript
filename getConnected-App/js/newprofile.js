

	 var uservariable="";

	 

	 var fullName,userName,birthDate,genDer,counTry,emaiL;

	

	 function saveForShyam()

	 { 

		//http://bst.ps/jimmy/tum/php/profiles.txt

		var fullname = document.getElementById("fullname").value;

		var username = document.getElementById("newusername").value;

		var birthdate = document.getElementById("birthdate").value;

		var gender = getGender();

		

		function getGender(){

		if (document.getElementById("genderM").checked){

		return document.getElementById("genderM").value;

		}

		else {

		return document.getElementById("genderF").value;

		}

		};

		

		var country = document.getElementById("country").value;

		var email = document.getElementById("email").value;

		

		var http = new XMLHttpRequest();

		var url = "http://bst.ps/jimmy/tum/php/profiles.php";

		var params = "profile=" + "fullname="+fullname+",username="+username+",birthdate="+birthdate+",gender="+gender+",country="+country+",email="+email;

		http.open("POST", url, true);

		

		//Send the proper header information along with the request

		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		/*http.setRequestHeader("Content-length", params.length);

		http.setRequestHeader("Connection", "close");*/

		

		http.onreadystatechange = function() 

		{

			alert("Profile Saved!!");

		}

		

		http.send(params);

	 }

	

	

	

	function loadProfile(){

		var fileLoader = new XMLHttpRequest();
		
		fileLoader.open('GET', 'http://bst.ps/jimmy/tum/php/profiles.txt');

		fileLoader.onreadystatechange = function() 

		{

			if(fileLoader.responseText.length > 0)

			{
			  
			   uservariable = fileLoader.responseText.split("\n");

			   for (var i=0; i<uservariable.length; i++){
				   if (uservariable[i]==""){
					   uservariable.splice(i,1);
				   }
			   }
			   
			   //var inpObj = "54125";
			   var inpObj = "jimmy";
		           
				   var regex1 = /@/;
	               var regex2 = /.com/;
				   var regex3= /user/;
				   			
		           for(var i=0; i<uservariable.length; i++)
			    {
				
				    if (uservariable[i]!=""){
				      var tmpUser = uservariable[i].split(",");
				
				//TODO: If this username is == to inpobj(jimmy) then continue to show the fields.				
     	         //console.log(tmpUser[1].replace("username=",""));
					 
					 if (tmpUser[1].replace("username=","")==inpObj){
			         					
					//for(var q=0; q<tmpUser.length; q++){
												
					//var tmpProperty = tmpUser[q].split("=");
					//var q = 0;
					tmpUser.forEach(function (d){
						
						var tmpProperty = d.split("=");
						
                   
				   //using regex
				   
				   if (typeof (tmpProperty[1]) == 'string' && regex1.test(tmpProperty[1])==false && regex2.test(tmpProperty[1])==false && regex3.test(tmpProperty[0])==false){
		           
				   tmpProperty[1]= tmpProperty[1].toUpperCase();}
				   
                    //splitting each line element into array				   
				   
				   //for(var q=0; q<tmpUser.length; q++){
				   
				   if (tmpProperty[0] != ""){
					   console.log(tmpProperty[1]);
				   document.getElementById(tmpProperty[0]).value= tmpProperty[1];
				   //}
				 }
					
					});
					
					}
					}}
			   
			   }
			   
		}

		

		fileLoader.send();

	

	}

	function cvLoader(){
		var http = new XMLHttpRequest();
        http.open('GET', 'http://bst.ps/jimmy/tum/data/CV.txt');
		     http.onreadystatechange = function() 

		{

			if(http.responseText.length > 0)

			{
			  
			   cvValue = http.responseText;

			   document.getElementById("cvArea").value = cvValue;
				   }
				 }
				 http.send();
				
					
             	}
	
									

	function validLogin (){

		loadProfile();
       cvLoader();
	}

	

	

	

	

	function getFullName(){

		loadProfile();

		var inpObj = "jimmy";

		for(var i=0; i<uservariable.length; i++)

			{

				var tmpUser = uservariable[i].split("=");

				var local = tmpuser[2].replace(",birthdate","");

				if(local != inpObj.value)

				{

					return tmpuser[1].replace(",username","");

				}

	        }

	}
	
	function getUsernameFromURL()
	{
	   var GET = {};
	  var query= window.location.search.substring(1).split("&");
	  for (var i = 0, max = query.length; i < max; i++)
		{
			if (query[i] === "") // check for trailing & with no param
				continue;

			var param = query[i].split("=");
			GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
		}
		
		alert(GET["username"]);
	}

	

	
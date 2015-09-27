

	 var uservariable="";

	 console.log(window.location.href);

	 var fullName,userName,birthDate,genDer,counTry,emaiL;
     var urlAfterLogin;
	

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

		var imageUrl = document.getElementById("txtPicUrl").value;
		
		var cvUrl = document.getElementById("txtCVLink").value;
		
		var urlAfterLogin = imageUrl;

		var http = new XMLHttpRequest();

		var url = "http://bst.ps/jimmy/tum/php/profiles.php";

		var params = "profile=" + "fullname="+fullname+",username="+username+",birthdate="+birthdate+",gender="+gender+",country="+country+",email="+email+",image="+imageUrl+",cv="+cvUrl;

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
			   
			   
			   var inpObj = window.location.href;
		           
				   var regex1 = /@/;
	               var regex2 = /.com/;
				   var regex3= /user/;
				   var regex4 = /http:/;
				   			
		           for(var i=0; i<uservariable.length; i++)
			    {
				
				    if (uservariable[i]!=""){
				      var tmpUser = uservariable[i].split(",");
				
				//TODO: If this username is == to inpobj(jimmy) then continue to show the fields.				
     	         
					 
					 if (tmpUser[1].replace("username=","")==inpObj.replace("http://bst.ps/jimmy/tum/shyam.html?username=","")){
			         					
					//for(var q=0; q<tmpUser.length; q++){
												
					//var tmpProperty = tmpUser[q].split("=");
					//var q = 0;
					tmpUser.forEach(function (d){
						
						var tmpProperty = d.split("=");
						
                   
				   //--------------using regular expression------------------------
				   
				   if (typeof (tmpProperty[1]) == 'string' && regex1.test(tmpProperty[1])==false && regex2.test(tmpProperty[1])==false && regex3.test(tmpProperty[0])==false && regex4.test(tmpProperty[1])==false){
		           
				   tmpProperty[1]= tmpProperty[1].toUpperCase();}
				   
                    //splitting each line element into array				   
				   
				   //for(var q=0; q<tmpUser.length; q++){
				   
				   if (tmpProperty[1] != "" && tmpProperty[0]!='image' && tmpProperty[0]!='image' && tmpProperty[0]!='cv'){
					   console.log(tmpProperty[1]);
				   document.getElementById(tmpProperty[0]).value= tmpProperty[1];
				       }
					   
				//-----------------Parsing Date-----------------
				     
					 if (tmpProperty[0]=='birthdate'){
						 document.getElementById(tmpProperty[0]).value= moment(tmpProperty[1],"DD.MM.YYYY").toString().replace("00:00:00 GMT+0530","");
					 }
					 
				   //}
				 
				   
				 
				 //-------------------image loader--------------------------------
				 if (tmpProperty[0] == "image"){
					 
					 document.getElementById("profilePic").src=tmpProperty[1];
					 console.log(tmpProperty[1]);
				 }
				 
				 //--------------------cv loader------------------------
				 
				 if (tmpProperty[0] == "cv"){
				 var http = new XMLHttpRequest();
        http.open('GET', tmpProperty[1]);
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
	
							

        /*function imageLoader(){
			/*
			if( $('#txtPicUrl').parsley().isValid() && txtPicUrl.value.length > 0)
								{
									$('#profilePic').attr('src', urlAfterLogin);
								}
								
							
			
				 //$('#profilePic').attr('src', txtPicUrl.value)
	}	*/
	function validLogin (){

		loadProfile();
       // cvLoader();
	   //imageLoader();
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

	//-------------Filtering, Combination--------------
    
	function filterCountry(){
		
		var fileLoad = new XMLHttpRequest();
		
		//var getBirthVal = document.getElementById("enterbirthyear").value;
		var getSexVal = document.getElementById("entersex").value;
		var getCountryVal = document.getElementById("entercountry").value;
	    var getMatchedUser=[];
		var localArray=[];
		var count =[];
		
		assert ((getSexVal.toUpperCase()=='M' || getSexVal.toUpperCase()=='F' || getSexVal.toUpperCase()==""), "gender value is wrong");
		
		fileLoad.open('GET', 'http://bst.ps/jimmy/tum/php/profiles.txt');

		fileLoad.onreadystatechange = function() 
		{
			if(fileLoad.responseText.length > 0)

			{
			    uservariable = fileLoad.responseText.split("\n");
                
			   for (var i=0; i<uservariable.length; i++){
				   if (uservariable[i]==""){
					   uservariable.splice(i,1);
				   }
			   }
			     
				 //if (getBirthVal!="" && getSexVal!="" && getCountryVal!=""){
				 
				 if(getCountryVal!="" && getSexVal!=""){
			   		   	 	
		          for(var i=0; i<uservariable.length; i++)
			    {
		               	
												 
					var tmpUser = uservariable[i].split(",");
					
						 
					 if (tmpUser[4].replace("country=","").toUpperCase()==getCountryVal.toUpperCase() && getMatchedUser.indexOf(tmpUser[1].replace("username=",""))<0){
					 
					 if (tmpUser[3].replace("gender=","").toUpperCase()==getSexVal.toUpperCase()){
					 getMatchedUser.push(tmpUser[1].replace("username=",""));
					 
					 
					 localArray.push(tmpUser);	}			 
					 }
					 };
					 }
					 //console.log(localArray);
					 
			  if(getCountryVal!="" && getSexVal==""){
			   		   	 	
		          for(var i=0; i<uservariable.length; i++)
			    {
		            	 
					var tmpUser = uservariable[i].split(",");
				
                 //-----------------Using filter function----------------
				
						/*getMatchedUser= tmpUser.filter(function(d) { 
						
						//if(d.indexOf("country=")>=0 && d.replace("country=","").toUpperCase()==getCountryVal.toUpperCase()){
						 //return d.replace("country=","").toUpperCase()==getCountryVal.toUpperCase() ;//&& getMatchedUser.indexOf(d.replace("username=","")))
						//return uservariable[i];
						//}						 
						});
						console.log(getMatchedUser);*/
					 if (tmpUser[4].replace("country=","").toUpperCase()==getCountryVal.toUpperCase() && getMatchedUser.indexOf(tmpUser[1].replace("username=",""))<0){
					 
					 getMatchedUser.push(tmpUser[1].replace("username=",""));
					 localArray.push(tmpUser);
					 };
					 }
					 }
					 
					  if(getCountryVal=="" && getSexVal!=""){
			   		   	 	
		          for(var i=0; i<uservariable.length; i++)
			    {
		               	//---------------check assumptions--------------
						
					var tmpUser = uservariable[i].split(",");
					
						 
					 if (tmpUser[3].replace("gender=","").toUpperCase()==getSexVal.toUpperCase() && getMatchedUser.indexOf(tmpUser[1].replace("username=",""))<0){
					 
					 getMatchedUser.push(tmpUser[1].replace("username=",""));
					 localArray.push(tmpUser);
					 }
					 };
					 }
					
					 //console.log(getMatchedUser);
						document.getElementById("matchedUser").value=getMatchedUser;
						//console.log(localArray);
						
						console.log(localArray);
						count = _.zip(localArray[0],['\n','\n','\n','\n','\n','\n']);
						for(var q=0;q<localArray.length;q++){
							//for(var r=0;r<)
								
							 if(q<localArray.length-1){
							 count =_.zip(count,localArray[q+1],['\n','\n','\n','\n','\n','\n']);
							 }
						}
					     document.getElementById("dataUser").value = count;
						
			 }
                 
							
			
			}
		

		
		fileLoad.send();

		
	}
	
	function assert(isTrue, message) {
  if(!isTrue) {
    alert(message);
    return false;
  }
  return true;
}



function saveUserData()
{
	
		
  	var textToWrite = [document.getElementById("fullname").value,document.getElementById("newusername").value,Date.parse(document.getElementById("birthdate").value),document.getElementById("country").value,document.getElementById("email").value]

	var regex1 = /@/;
	var regex2 = /.com/;
	index=0;
	
	
	var fileNameToSaveAs = textToWrite[1]+"_"+document.getElementById("birthdate").value;
	textToWrite.forEach (function (d){
		
		if(typeof d == 'string' && regex1.test(d)==false && regex2.test(d)==false ){
			textToWrite[index] = d.toUpperCase();
			index=index+1;
		}
		
		
		else{
			textToWrite[index] = d;
		    index=index+1;
		}
	});
	
	
	
		
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	
	    	
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	//downloadLink.innerHTML = "Download File";
	if (window.URL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		
		
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		
		//downloadLink.href = window.URL.createObjectURL(textFileAsBlob2);
		
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}


var array=[];
var i=0;

function input() {
	var customerobject={name,address,postalcode,email,phone};
	customerobject.name=document.getElementById("firstname").value + " " + document.getElementById("lastname").value;
	customerobject.address=document.getElementById("address").value;
	customerobject.postalcode=document.getElementById("postalcode").value;
	customerobject.phone=document.getElementById("phone").value;
	customerobject.email=document.getElementById("email").value;
	array.push(customerobject);
	output();	
}

function output() {
	var customer;
	var displayString="";
	
	for(var i=0; i<array.length;i++){
 			
 		var customerobject={name,address,postalcode,email,phone};
 		customerobject=array[i];
 		customer=customerobject.name + " , " + customerobject.address + " , " + customerobject.postalcode + " , " + customerobject.email + " , " + customerobject.phone;
 		
 		displayString+="<input type=radio name=listitem value="+i+" onchange=deleteString(this.value)>" + customer + "<br>";
 	
 		
 	}
 		
		document.getElementById("display").innerHTML=displayString;

}
		
function deleteString(i) {
	array.splice(i,1);
	output();
	

}
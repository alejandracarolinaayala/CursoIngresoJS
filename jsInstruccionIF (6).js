function mostrar()
{
//tomo la edad  

var edad;
		
		edad = document.getElementById('edad').value;
		edad = parseInt (edad); 

		if (edad <13) {
			alert("Usted es un niño");
					  }
				
					else {if (edad <18) {
			alert("Usted es un adolecente");
						 				}
						 		else {alert("Usted es un adulto")
						 			 }
		
					 }

					   


}//FIN DE LA FUNCIÓN
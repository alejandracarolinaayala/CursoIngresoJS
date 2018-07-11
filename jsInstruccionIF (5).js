function mostrar()
{
//tomo la edad  
var edad;
		
		edad = document.getElementById('edad').value;
		edad = parseInt (edad); 

		if (edad > 17) {
			alert("Usted ya no es adolecente");

		}
		else {alert("Usted sigue siendo adolenten")
		}
		
		

}//FIN DE LA FUNCIÓN
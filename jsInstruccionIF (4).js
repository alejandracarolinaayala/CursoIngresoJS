function mostrar()
{
//tomo la edad  

var edad;
		
		edad = document.getElementById('edad').value;
		edad = parseInt (edad); 

		/*if (edad >= 13) {
			alert("Usted es adolecente");
		}
		if (edad < 18) {
			alert("Usted es adolecente");
		}*/

		if (edad > 12 && < 18) {
				alert("Usted es adolecente");
		}

/*corregir el &&
}//FIN DE LA FUNCIÓN
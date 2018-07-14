function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
		switch(mesDelAño)

				{
				
				case "Febrero": 
			
					alert ("tiene 28 días.");
					break;	

				case "Abril":
				case "Junio":
				case "Septiembre":
				case "Noviembre":

					alert ("tienen 30 dias")
					break;

				// meses de 30 dias: Abril, junio, septiembre y noviembre	


	default:
					alert("tiene 31 días");

				}



}//FIN DE LA FUNCIÓN
function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numeroIngresado;
	var respuesta='si';
	var numeromaximo;
	var numerominimo;
	contador=0


	while(respuesta!='no')
	{
		contador ++;
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt("numeroIngresado");

			if (contador ==1)
			{

				numeromaximo=numeroIngresado;
				numerominimo=numeroIngresado;	
			}
			else 
			{
				if (numeroIngresado>numeromaximo)
				  {numeromaximo=numeroIngresado;
			     }
				if (numeroIngresado<numerominimo)
				{
					numerominimo=numeroIngresado;
				}
			}
			 respuesta=prompt("ingrese no para salir");
			}  
	}




		
		
	
document.getElementById('maximo').value=numeromaximo;
document.getElementById('minimo').value=numerominimo;
	}



}//FIN DE LA FUNCIÓN
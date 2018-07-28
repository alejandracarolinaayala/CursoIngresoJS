/*  maria f 15
    jose m 33
    fer f 25 */

/* un while, 3 datos,
pide el nombre que se guarda en un varialbes
segundo el sexo, con validacion f o m
tercero la edad, no puede ser menor a 0 y tampoco mayor a 100*/
function mostrar()
{
var nombre;
var sexo;
var edad;
var contador=0
var cantidadVarones=0;
var cantidadMujeres=0;
var cantidadMayores=0;
var cantidadMenores=0;
var cantidadMujeresMayores=0;
var cantidadVaronesMayores=0;
var cantidadMujeresMenores=0;
var cantidadVaronesMenores=0;

while(contador<3)
{
	
			nombre=prompt ("ingrese un nombre");

			sexo=prompt ("ingrese un sexo");
				while(sexo!="f" && sexo!= "m");
				{
					sexo=prompt("error, Ingrese un sexo");
				
				}			   	

		edad=prompt("Ingrese una edad");
		edad=parseInt(edad); 
				while(isNaN(edad) || edad >100 || edad<0)
				{
					edad=prompt("Edad invalida");
					edad=parseInt(edad);
				}
			

			contador++;
		}
	}

//Aca se ingresa todos los datos
	/*
	if(sexo="f"){
		cantidadMujeres++;
	}
		else{
			cantidadVarones++;
				}

	if(edad<=18){
		cantidadMenores++;
 				}
 				else{
 					cantidadMayores++;
 				}

 	if(sexo="f"&& edad<=18){
 		cantidadVaronesMayores++;

 			if(sexo="f" && edad>18){
 				cantidadMujeresMayores++;
 			}
 	 	}

 	if (sexo="m"&& edad <=18){
 		cantidadVaronesMayores++;
							 	}
			if(sexo="m" && edad> 18){
				cantidadVaronesMayores++;
			}				 			

 }	*/

	


		
     


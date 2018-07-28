

function Mostrar()
{



/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos.
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y 
negativos, (positvos-negativos).*/


	var contador=0;
	var numero;
	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
    var contadotPositivos=0;
    var contadorCero=0;
	var contadorPares=0;
	var contadorNegativos=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var respuesta="si";

	while(respuesta!="no")
	{
		contador ++;
		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		
		if (numero%2==0 && numero!=0)
		{
           contadorPares++;
		}
		if (numero < 0) 
        {
          contadorNegativos++;
          acumuladorNegativos = acumuladorNegativos+contadorNegativos++;   
        }
	    else 
	    {
	    	if(numero > 0) 
	    	{
             acumuladorPositivos= acumuladorPositivos+contadorPositivos++;
	    	}
          
	    }else
	    {
	    	contadorCero++;
	    }

	}  
        respuesta= prompt("no para salir");

		promedioNegativos = acumuladorNegativos/contadorNegativos;
		promedioPositivos = acumuladorPositivos/contadorPositivos;
        diferencia= acumuladorPositivos - acumuladorNegativos;
     
        document.white(contadorceros + promedioPositivos)
}
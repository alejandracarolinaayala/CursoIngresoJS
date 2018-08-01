function mostrar()
{
/*Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/

var temperatura;
var promedio;
var cantidad;
var cantidadAnimalesBajoCero=0;
var peso;
var pesoMax;
var pesoMin;
var TemperaturaPar;
var respuesta="si"
var pesoTotal;




		while(respuesta =="si"){
			nombre=prompt("Ingrese nombre de un animal");
			peso=parseInt(prompt("Ingrese un peso"));
			pesoTotal=pesoTotal+peso;
			temperatura=parseInt(prompt("ingresa temperatura"));
			cantidad++;
				
				if (temperatura < 0){
		cantidadAnimalesBajoCero++;}
	

				else{
					if(pesoMax>peso){
						pesoMax=pesoMax+peso;
					}
					else{
						pesoMin=pesoMin+peso}
					}//else{
	

		promedio= pesoTotal/cantidad;
		 
		 respuesta=prompt("desea agregar otro animal");


						}//(temperatura < 0)


alert("cantidad de animales que viven bajo 0 son " + cantidadAnimalesBajoCero);
alert("el peso total de todos los animales es "+ pesoTotal);
alert(promedio);
alert(pesoMax);
alert(pesoMin);
} //while(respuesta =="si")
		
		













	


		
	


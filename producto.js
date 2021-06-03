//Declaracion e inicializacion de objetos
function Productoalimenticio(codigo, nombre, precio){
	this.codigo = codigo;
	this.nombre = nombre;
	this.precio = precio;
	this.imprimeDatos = imprimeDatos;
}

//Instancia de los objetos 
var productos = new Array(3);
productos[0] = new Productoalimenticio('0001','arroz','1.30');
productos[1] = new Productoalimenticio('0002','leche','1.85');
productos[2] = new Productoalimenticio('0003','chocolate','2.75');

/*Funcion que muestra los datos*/
function imprimeDatos(){
    alert('--------------------------\nProductos Alimenticios '+
	'\n--------------------------\nCodigo:      ' + this.codigo + '\n'
	 + 'Nombre:    '+this.nombre+ '\n' + 'Precio:       '+ this.precio +
	  '\n' +'*********************'+'\n');
}
//Funcion que llama el html de la cual se llama a la funcion imprimir 
//datos para que esta pueda mostrar los datos 
function for1(productos){
	for(var x=0; x<productos.length; x++){
	    var y = document.createElement("y");
	    y.innerHTML = productos[x].imprimeDatos();
}
}
function octal1() {
    var M = document.getElementById("resultado");
    var Octal = parseInt(document.getElementById("octal").value);
	var octaldecimal = parseInt(Octal, 8);
	M.innerHTML = "El número Octal " + Octal + " en decimal es: " + octaldecimal;
}
			
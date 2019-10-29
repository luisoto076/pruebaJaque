/*modelo poara representar las horas en que pude haber cita*/
function Hora(horas,minutos){
	this.horas = horas;
	this.minutos = minutos;
	this.compara = 
		function(h1){
			if(this.horas < h1.horas)
				return -1;
			if(this.horas > h1.horas)
				return 1;
			if(this.minutos < h1.minutos)
				return -1;
			if(this.minutos > h1.minutos)
				return 1;
			return 0;
			
		}
	this.suma = function (minutos){
		this.horas = this.horas + Math.trunc(minutos/60) + Math.trunc((this.minutos + (minutos%60))/60);
		this.minutos = (this.minutos + (minutos%60))%60
	}
}

/*modelo para representar a los Empleados*/
function Empleado(id,entrada,salida){
	this.horario = []
	for(var i = 0; i < 7; i++){
		this.horario.push([entrada[i], salida[i]]);
	}
	this.idEmpleado = id;
	this.marca = -1;
}		

/*modelo para representar las citas*/
function Cita(empleado,dia,hora){
	this.empleado = empleado
	this.dia = dia
	this.hora = hora
}

/*crea una lista con todas las horas posibles para cita en el intervalo que se le pase*/
function creaHorasPosibles(i,f){
	var xh = i;
	var xm = 0;
	var posibles = []
	var y = 0;
	console.log("llego aqui1");
	while(xh <= f){
		h = new Hora(xh,xm);
		console.log("llego aqui2");
		posibles.push({hora : h , marca : -1});
		h.suma(30);
		xh = h.horas;
		xm = h.minutos;
	}
	return posibles;
}

/*calcula los horarios disponibles en un dia particular*/
function citasDia(dia,empleados,citas,citasPosibles){
	var cd = []
	quitarApartadas(citas,citasPosibles,empleados,dia);
	console.log(dia);
	for(var i = 0; i < citasPosibles.length; i++){
		console.log(citasPosibles[i].marca);
		if(citasPosibles[i].marca != dia){
			cd.push(citasPosibles[i].hora);
			console.log(citasPosibles[i].hora.horas+" "+citasPosibles[i].hora.minutos);
		}
	}
	return cd;
}

/*separa las citas por dia en que se agendaron*/
function citasPorDia(citas){
	var cpd = []
	for(var i = 0; i < 30; i++){
		cpd.push([]);
	}
	for(var i = 0; i < citas.length; i++){
		cita =  citas[i];
		cpd[cita.dia].push(cita);
	}
	return cpd;
}

/*Regresa un objeto con los horarios disponibles separados por dia*/
function citasDisponibles(empleados, citas){
	var cpd = citasPorDia(citas);
	citasD = [];
	var posibles = creaHorasPosibles(7,17);
	for(var i = 0; i < 30; i++){
		citasD[i] = citasDia(i,empleados,cpd[i],posibles);
	}
	return citasD;
}

/*marca una hora como no disponible en un dia especifico*/
function marcaHora(hora,citasPosibles,dia){
	var i = 0;
	var j = citasPosibles.length-1;
	while(i<j){
		var m = Math.trunc((j - i) / 2);
		if(hora.compara(citasPosibles[m].hora)==0){
			citasPosibles[m].marca = dia;
			return
		}
		if(hora.compara(citasPosibles[m].hora)<0){
			if(hora.compara(citasPosibles[i].hora)==0){
				citasPosibles[i].marca = dia;
				return
			}
			i = i+1
			j = m-1
		}else{
			if(hora.compara(citasPosibles[j].hora)==0){
				citasPosibles[j].marca = dia;
				return
			}
			j = j - 1
			i = m + 1;
		}
	}
}

/*verifica si es posible que algun empleado cubra una cita en un dia especifico*/
function hayEmpleado(cita,empleados,dia){
	for(var i = 0; i < empleados.length; i++){
		var mod = dia % 7;
		if(empleados[i].marca != dia && empleados[i].horario[mod][0] <= cita.hora && empleados[i].horario[mod][1] >= cita.hora){
			return true;
		}
	}
	return false;
}

/*marca los horarios que tengan cita o que no puedan ser cubiertos por algun trabajador*/
function quitarApartadas(citasConcretas,citasPosibles, empleados, dia){
	for(var i = 0; i < citasConcretas.length; i++){
		var cita = citasConcretas[i];
		marcaHora(cita.hora,citasPosibles,dia);
		cita.empleado.marca = dia;
	}
	for(var i = 0; i < citasPosibles.length; i++){
		if(citasPosibles[i].marca != dia && !hayEmpleado(citasPosibles[i],empleados,dia))
			citasPosibles[i].marca = dia;
	}
}

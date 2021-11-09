//input text
const c1 	= document.getElementById('com1');
const c1_l1 = document.getElementById('com1_l1');
const c1_l2 = document.getElementById('com1_l2');
const c1_l3 = document.getElementById('com1_l3');



const c2 	= document.getElementById('com2');
const c2_l1 = document.getElementById('com2_l1');
const c2_l2 = document.getElementById('com2_l2');
const c2_l3 = document.getElementById('com2_l3');



const c3 	= document.getElementById('com3');
const c3_l1 = document.getElementById('com3_l1');
const c3_l2 = document.getElementById('com3_l2');
const c3_l3 = document.getElementById('com3_l3');



const c4 	= document.getElementById('com4');
const c4_l1 = document.getElementById('com4_l1');
const c4_l2 = document.getElementById('com4_l2');
const c4_l3 = document.getElementById('com4_l3');

const c5 	= document.getElementById('com5');
const c5_l1 = document.getElementById('com5_l1');
const c5_l2 = document.getElementById('com5_l2');
const c5_l3 = document.getElementById('com5_l3');


//input radio
const r1 = document.getElementById('rad1');
const r1_p = document.getElementById('rt1');
const r1_v1 = document.getElementById('rad1_l1');
const r1_v2 = document.getElementById('rad1_l2');
const r1_v3 = document.getElementById('rad1_l3');
const r1_v4 = document.getElementById('rad1_l4');

const r2 = document.getElementById('rad2');
const r2_p = document.getElementById('rt2');
const r2_v1 = document.getElementById('rad2_l1');
const r2_v2 = document.getElementById('rad2_l2');
const r2_v3 = document.getElementById('rad2_l3');
const r2_v4 = document.getElementById('rad2_l4');

const r3 = document.getElementById('rad3');
const r3_p = document.getElementById('rt3');
const r3_v1 = document.getElementById('rad3_l1');
const r3_v2 = document.getElementById('rad3_l2');
const r3_v3 = document.getElementById('rad3_l3');
const r3_v4 = document.getElementById('rad3_l4');

const r4 = document.getElementById('rad4');
const r4_p = document.getElementById('rt4');
const r4_v1 = document.getElementById('rad4_l1');
const r4_v2 = document.getElementById('rad4_l2');
const r4_v3 = document.getElementById('rad4_l3');
const r4_v4 = document.getElementById('rad4_l4');

const r5 = document.getElementById('rad5');
const r5_p = document.getElementById('rt5');
const r5_v1 = document.getElementById('rad5_l1');
const r5_v2 = document.getElementById('rad5_l2');
const r5_v3 = document.getElementById('rad5_l3');
const r5_v4 = document.getElementById('rad5_l4');

// BOTONES Y RESULTADOS
const pre =document.getElementById('anterior');
const sig =document.getElementById('siguiente');
const ter =document.getElementById('terminar');
const resul =document.getElementById('resultado');
const rei =document.getElementById('reinicio');

var pr1= {
	pr_1:"¿De que pais es el equipo Manchester ?",
	cr_1:"Inglaterra",
	pr_2:"que numero tiene messi en su camiseta en el barcelona",
	cr_2:"10",
	pr_3:"a que equipo argentina pertenece el monumental",
	cr_3:"river plate"
	
};
var pr2= {

	pr_1:"De que pais es pele",
	cr_1:"Brasil",
	pr_2:"A que equipo pertenece La Bonbonera",
	cr_2:"Boca Juniors",
	pr_3:"¿Qué nombre recibe la liga de fútbol alemana de máxima categoría?",
	cr_3:"Bundesliga"
	
};

var pr3= {

	pr_1:"Que equipo tiene la mayor cantidad de copas libertadores",
	cr_1:"Estudiantes",
	pr_2:"Donde se jugo la primera copa mundial",
	cr_2:"Uruguay",
	pr_3:"De que pais es la seleccion ganadora del mundial del 2014",
	cr_3:"Alemania"
	
};

var pr4= {

	pr_1:"De que pais es Boja Juniors",
	cr_1: "Argentina",
	pr_2:"Cuantos jugadores entran por equipo a un partido",
	cr_2:"11",
	pr_3:"Cuantos puntos se acumulan al ganar un partido",
	cr_3:"3",	
};

var pr5= {

	pr_1:"Quien es el mayor goleador de la historia de los mundiales",
	cr_1:"Miroslav Klose",
	pr_2:"Que famoso equipo se conoce como los reds",
	cr_2:"Liverpool",
	pr_3:"De que pais es la seleccion de futbol conocida como la naranja mecanica",
	cr_3:"Holanda"	
};

var rad1= {

	pregunta: "Brasil es el equipo con la mayor cantidad de mundiales, ¿cuantos son?",
	v1:"5",	
	v2:"1",
	v3:"3",
	v4:"8",
	cr:"1"
};

var rad2= {

	pregunta: "Que equipos españoles protagonizan el denominado Clasico",
	v1:"El Barcelona y El Atletico Bilbao",	
	v2:"Atletico Madrid y El Barcelona",
	v3:"Real Madrid y El Sevilla",
	v4:"Real Madrid y El Barcelona",
	cr:"4"
};


var rad3= {

	pregunta: "Con cual de estos apodos es conocido Diego Armando Maradona",
	v1:"La pulga",	
	v2:"El muñeco",
	v3:"CR7",
	v4:"El Pelusa",
	cr:"4"
};


var rad4= {

	pregunta: "Para que equipo jugo Ariel Ortega",
	v1:"Estudiantes",	
	v2:"River Plate",
	v3:"Boca Juniors",
	v4:"Independiente",
	cr:"2"
};

var rad5= {

	pregunta: "Que quiere decir AFA",
	v1:"Argentinos del Fulbo Asociados",	
	v2:"Asociacion de Futbol Argentino",
	v3:"Antes de Futbol Argentina",
	v4:"Ahora el Futbol es Argentino",
	cr:"2"
};



c1_l1.innerHTML=pr1.pr_1;
c1_l2.innerHTML=pr1.pr_2;
c1_l3.innerHTML=pr1.pr_3;

c2_l1.innerHTML=pr2.pr_1;
c2_l2.innerHTML=pr2.pr_2;
c2_l3.innerHTML=pr2.pr_3;


c3_l1.innerHTML=pr3.pr_1;
c3_l2.innerHTML=pr3.pr_2;
c3_l3.innerHTML=pr3.pr_3;

c4_l1.innerHTML=pr4.pr_1;
c4_l2.innerHTML=pr4.pr_2;
c4_l3.innerHTML=pr4.pr_3;

c5_l1.innerHTML=pr5.pr_1;
c5_l2.innerHTML=pr5.pr_2;
c5_l3.innerHTML=pr5.pr_3;

r1_p.innerHTML=rad1.pregunta;
r1_v1.innerHTML=rad1.v1;
r1_v2.innerHTML=rad1.v2;
r1_v3.innerHTML=rad1.v3;
r1_v4.innerHTML=rad1.v4;

r2_p.innerHTML=rad2.pregunta;
r2_v1.innerHTML=rad2.v1;
r2_v2.innerHTML=rad2.v2;
r2_v3.innerHTML=rad2.v3;
r2_v4.innerHTML=rad2.v4;

r3_p.innerHTML=rad3.pregunta;
r3_v1.innerHTML=rad3.v1;
r3_v2.innerHTML=rad3.v2;
r3_v3.innerHTML=rad3.v3;
r3_v4.innerHTML=rad3.v4;

r4_p.innerHTML=rad4.pregunta;
r4_v1.innerHTML=rad4.v1;
r4_v2.innerHTML=rad4.v2;
r4_v3.innerHTML=rad4.v3;
r4_v4.innerHTML=rad4.v4;

r5_p.innerHTML=rad5.pregunta;
r5_v1.innerHTML=rad5.v1;
r5_v2.innerHTML=rad5.v2;
r5_v3.innerHTML=rad5.v3;
r5_v4.innerHTML=rad5.v4;

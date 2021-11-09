	var i = 0;
	var s = 1;
	var a =-1;
	var bd=[pr1,pr2,pr3,pr4,pr5];
	var br=[rad1,rad2,rad3,rad4,rad5];
	var bl=[c1,r1,c2,r2,c3,r3,c4,r4,c5,r5];

	
asignar(bl,bd,br,i,s,a);


function asignar(bl,bd,br,i,s,a){

bl[i].style.zIndex =1;
if(s<=9){
bl[s].style.zIndex =0;}
if(a>=0){
bl[a].style.zIndex =0;}


 sig.addEventListener("click",siguiente);
 pre.addEventListener("click",previa);
 ter.addEventListener("click",respuestas)
 function siguiente(){
 	
if (s==10){}else{
	a=i;
	i=s;
	s=s+1;	
}
 		return asignar(bl,bd,br,i,s,a);
 	
 		}



 function previa(){
 	if (a==-1){}else{
 	s=i;
 	i=a;
 	a=a-1;
} 
 		return asignar(bl,bd,br,i,s,a);
 	
 		}

	


 function respuestas(){
	var puntaje=0;
	var x=0;
	var y=0;
	var z;
	var cuenta = 0;



var c1_f1 = document.getElementById('1form_1').value;
var c1_f2 = document.getElementById('1form_2').value;
var c1_f3 = document.getElementById('1form_3').value;


var c2_f1 = document.getElementById('2form_1').value;
var c2_f2 = document.getElementById('2form_2').value;
var c2_f3 = document.getElementById('2form_3').value;

var c3_f1 = document.getElementById('3form_1').value;
var c3_f2 = document.getElementById('3form_2').value;
var c3_f3 = document.getElementById('3form_3').value;


var c4_f1 = document.getElementById('4form_1').value;
var c4_f2 = document.getElementById('4form_2').value;
var c4_f3 = document.getElementById('4form_3').value;


var c5_f1 = document.getElementById('5form_1').value;
var c5_f2 = document.getElementById('5form_2').value;
var c5_f3 = document.getElementById('5form_3').value;


var rn1=document.getElementsByName('rn1');
var rn2=document.getElementsByName('rn2');
var rn3=document.getElementsByName('rn3');
var rn4=document.getElementsByName('rn4');
var rn5=document.getElementsByName('rn5');


var vec_radio=[rn1,rn2,rn3,rn4,rn5];


for (x=0;x<5;x++){
 for (y=0;y<4;y++){

	if (vec_radio[x][y].checked){
	if(vec_radio[x][y].value == br[x].cr){
			puntaje=puntaje+1;
			}
		}
	}
}


//	for (y=0;y<4;y++){	
//alert(vec_radio[x][y].value)
//vec_radio[x][y].
//	}
//}

//value==br[x].cr){
//		puntaje = puntaje +1;
 

 var vec_respuestas= [c1_f1,
	c1_f2,
	c1_f3,
	c2_f1,
	c2_f2,
	c2_f3,
 	c3_f1,
	c3_f2,
	c3_f3,
 	c4_f1,
	c4_f2,
	c4_f3,
 	c5_f1,
	c5_f2,
	c5_f3];


	


y=0;
for(x=0;x<5;x++){
	cuenta = cuenta +3;
	z=1;
	for(y;y<cuenta;y++){
		if(vec_respuestas[y]==Object.values(bd[x])[z]){
			puntaje=puntaje+1;
		}
		z=z+2;
	}
}
	

var final = puntaje/20;
final = final.toFixed(2);	

resul.innerHTML="Tenes un " +final +"% correcto";
	}

}





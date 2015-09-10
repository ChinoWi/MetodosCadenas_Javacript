var buscar,cadena,vocal,valor,opcion;


 function run(){
 buscar=document.getElementById('buscar');
 opcion=document.getElementById('opcion');
 cadena=document.getElementById('cadena');
 cadena.addEventListener('focus',QuitarTexto);
 vocal=document.getElementById('vocal');
 valor=document.getElementById('valor');
 buscar.addEventListener('click',Buscar);
 }

   

    function QuitarTexto(){
        valor.innerText="";
    }
  

  function Buscar(){
      if(cadena.value==""  || vocal.value==""){
      	Mensaje();
      }
      else{
      	Execute(cadena.value,vocal.value);
      }
  }

  function Execute(cadena,vocal)
  {
      if(opcion.checked){
          inicio(cadena,vocal);
      }
      else{
      	alert("debe seleccionar  la opcion");
      }

    }
  


  function inicio(cad,voc){
   var pos=cad.indexOf(voc);

      if(pos==-1){
      	valor.innerText="no se encontro el caracter";
      }
      else{
        valor.innerText="encontrado posicion" + pos;
      }
  }


  function Mensaje(){
   valor.innerText="No has ingresado nada";
  }








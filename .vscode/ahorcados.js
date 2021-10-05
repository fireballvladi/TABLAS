document.addEventListener('Do MContentLoaded', function()
{
    const palabraSecreta = ['pacmac','crahs', 'kratos','issac','ghost' ];
    let palabraAdivinar = [];
    let palabraMostrar =[];
    let letrasUsuario =[];
    let numeroIntentos =[];
    let LetraIntro = document.querySelector('#Letra');
    let botonSelect =document.querySelector('#boton');
    let resultadoN =document.querySelector('#resultado');
    let Intentos = document.querySelector('#intento');
    let Historial = document.querySelector('#historial');

    function prepararJuego()
    {
     let posAleatoriaPalabraSecreta = _.random(palabraSecreta.length -1); 
     let palabraAleatoria = palabraSecreta[posAleatoriaPalabraSecreta];
     palabraAdivinar= palabraAleatoria.split(' ');
     for (let LetraIntro of palabraAdivinar)
     {
         palabraMostrar.push('_')
     }  
     dibujarJuego();
    }

     function dibujarJuego() 
    {
      resultadoN.textContent = palabraMostrar.join('');
      Intentos.textContent = numeroIntentos;
      Historial.textContent = letrasUsuario.join('');

    }
    function comprobarLetras(params) 
    {
        let letrasUsuario= LetraIntro.value;
        LetraIntro.value='';
        LetraIntro.focus();

        for (const [posicion,palabraAdivinar]of palabraAdivinar.entries())
        {
            if (letrasUsuario==letraAdivinar)
            {
                palabraMostrar[posicion]=letraAdivinar;
            }
        }
        if(!palabraAdivinar.includes(letrasUsuario))
        {
            numeroIntentos = 1;
            HistorialLetrasUsuario.push(letrasUsuario);
        }
        acabarJuego();
        dibujarJuego();

    }
    function comprobarPulsado(evento) 
    {
        if(evento.code=='Enter')
        {
            comprobarletraUsuario();
        }
    }
 function acabarJuego() 
 {
  if(!palabraMostrar.includes('_'))
  {
      alert('Bien has GANADOUU¡¡');
      location.reload(true);
  }   
  if(numeroIntentos==0)
  {
      alert('losientimos se a quedado sin intentos ni con un coin podras continuar La palabra es: ' +palabraAdivinar.join('')),
      location.reload(true);
  }
 }
 botonSelect.addEventListener('click',comprobarletraUsuario);
 LetraIntro.addEventListener('keyup',comprobarPulsado);
 prepararJuego();
})
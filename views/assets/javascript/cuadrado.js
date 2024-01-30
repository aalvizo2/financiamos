const img= document.querySelector('.img');

img.addEventListener('mouseover', ()=>{
    const triangulo= document.querySelector('.triangulo');
    triangulo.classList.toggle('cuadrado');
     /*if(triangulo.classList.contains('cuadrado')){
        triangulo.classList.remove('triangulo');
     }*/
})
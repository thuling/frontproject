let text = document.getElementById('text');


window.addEventListener('scroll', () => {
  let value = window.scrollY;

  let limit = 0; // Pode ajustar conforme necessário

  // Certifique-se de que o valor não ultrapasse o limite
  if (value * 2.5 <= limit) {
      text.style.marginTop = value * 2.5 + 'px';
  }

  text.style.marginTop = value * 2.5 + 'px';
  
});

document.getElementById('next').onclick = function(){
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft += widthItem;
  
}
document.getElementById('prev').onclick = function(){
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft -= widthItem;
}




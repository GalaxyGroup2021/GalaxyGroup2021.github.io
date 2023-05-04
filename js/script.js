const popup1 = document.querySelector('#popup');
const click1 = document.querySelector('#kreatify');
const click2 = document.querySelector('#btn-notif')
const click3 = document.querySelector('#innofy');
const click4 = document.querySelector('#connetify');

click1.addEventListener('click', function() {
popup1.style.top = "50%";
});
click3.addEventListener('click', function() {
  popup1.style.top = "50%";
  });
  click4.addEventListener('click', function() {
    popup1.style.top = "50%";
    });

click2.addEventListener('click', function(){
  popup1.style.top = "-100%";
});
console.log(popup1.style);

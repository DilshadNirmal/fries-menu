const btn = document.querySelector('#fries-menu');
const line = document.querySelector('#line');
const line_2 = document.querySelector('#line2');

btn.addEventListener('click', () => {
  line_2.classList.add('toggled');
  console.log('click');
});
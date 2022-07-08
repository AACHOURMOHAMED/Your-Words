const backcolor = document.getElementById('backcolor');
const body = document.querySelector('body');
const changeBackground = () => {
  backcolor.addEventListener('change', () => {
    body.style.backgroundColor = backcolor.value;
    localStorage.setItem('color', backcolor.value);
  });
  const color = localStorage.key(1);
  body.style.backgroundColor = localStorage.getItem(color);
  backcolor.value = localStorage.getItem(color);
};

export default changeBackground;

const backcolor = document.getElementById('backcolor');
const body = document.querySelector('body');
const changeBackground = () => {
  backcolor.addEventListener('change', () => {
    body.style.backgroundColor = backcolor.value;
    window.localStorage.setItem('color', backcolor.value);
  });
  const color = window.localStorage.key(backcolor);
  body.style.backgroundColor = window.localStorage.getItem(color);
  backcolor.value = window.localStorage.getItem(color);
};

export default changeBackground;

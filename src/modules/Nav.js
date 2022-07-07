const backcolor = document.getElementById('backcolor');
const body = document.querySelector('body');
const changeBackground = () => {
  backcolor.addEventListener('change', () => {
    body.style.backgroundColor = backcolor.value;
  });
};

export default changeBackground;
const navItems = Array.from(document.querySelectorAll('.item'));
const Home = document.getElementById('Home');
const Words = document.getElementById('Words');
const Libary = document.getElementById('Libary');
const Tests = document.getElementById('Tests');
const Switchpages = () => {
  navItems.forEach((index) => {
    index.addEventListener('click', () => {
      switch (index.classList[1]) {
        case '1':
          Home.style.display = 'block';
          Words.style.display = 'none';
          Libary.style.display = 'none';
          Tests.style.display = 'none';
          break;
        case '2':
          Home.style.display = 'none';
          Words.style.display = 'block';
          Libary.style.display = 'none';
          Tests.style.display = 'none';
          break;
        case '3':
          Home.style.display = 'none';
          Words.style.display = 'none';
          Libary.style.display = 'block';
          Tests.style.display = 'none';
          break;
        case '4':
          Home.style.display = 'none';
          Words.style.display = 'none';
          Libary.style.display = 'none';
          Tests.style.display = 'block';
          break;
        default:
      }
    });
  });
};

export default Switchpages;

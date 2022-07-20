import AddWord from './AddWord.js';

const btn = document.querySelector('.back');
const popup = document.getElementById('popup');
const wordInput = document.querySelector('.textWord');
const descriptionInput = document.querySelector('.Description');
const translateInput = document.querySelector('.textTranslate');
const btnAdd = document.querySelector('.btnAddpop');
const btnCancle = document.querySelector('.Cancle');
const Popup = () => {
  popup.classList.add('active');
  btn.addEventListener('click', () => {
    popup.classList.remove('active');
    btnAdd.addEventListener('click', () => {
      AddWord(wordInput.value, descriptionInput.value, translateInput.value);
    });
    btnCancle.addEventListener('click', () => {
      popup.classList.add('active');
    });
  });
};

export default Popup;
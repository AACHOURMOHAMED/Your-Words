import AddWord from './AddWord.js';

const btn = document.querySelector('.back');
const popup = document.getElementById('popup');

const Popup = () => {
  btn.addEventListener('click', () => {
    popup.classList.remove('active');
    const back = document.createElement('div');
    back.classList.add('popupBack');
    popup.appendChild(back);
    const AddContent = document.createElement('div');
    AddContent.classList.add('AddContent');
    back.appendChild(AddContent);
    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Add Word';
    AddContent.appendChild(title);
    const inputFeild = document.createElement('div');
    inputFeild.className = 'inputsFeild';
    inputFeild.innerHTML = (`
        <div class="Input">
            <label class='text11' for='text1'>Enter your word</label>
            <input type='text' id='textWord' class='textWord text' id='text1' autocomplete='off'>
        </div>
        <div class="Input">
        <label class='text11'>Enter your description (optional)</label>
            <textarea  name="description" id="Description" class="Description" cols="30" rows="10"></textarea>
        </div>
        <div class="Input">
            <label class='text11'>Enter the translate</label>
            <input  type='text' id='textTranslate'  class='textTranslate text' >
        </div>
    `);
    AddContent.appendChild(inputFeild);
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    inputFeild.appendChild(buttons);
    const btnAdd = document.createElement('button');
    btnAdd.className = 'btnAddpop';
    btnAdd.id = 'Add';
    btnAdd.type = 'button';
    btnAdd.textContent = 'Add';
    buttons.appendChild(btnAdd);
    const wordInput = document.querySelector('.textWord');
    const descriptionInput = document.querySelector('.Description');
    const translateInput = document.querySelector('.textTranslate');
    btnAdd.addEventListener('click', () => {
      AddWord(wordInput.value, descriptionInput.value, translateInput.value);
      wordInput.value = '';
      descriptionInput.value = '';
      translateInput.value = '';
    });
    const btnCancle = document.createElement('button');
    btnCancle.classList.add('Cancle');
    btnCancle.type = 'button';
    btnCancle.textContent = 'Cancle';
    buttons.appendChild(btnCancle);
    btnCancle.addEventListener('click', () => {
      popup.classList.add('active');
    });
  });
};

export default Popup;
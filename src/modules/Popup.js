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
            <span>Enter your word</span>
            <input type='text'  class='textWord text' >
        </div>
        <div class="Input">
            <span>Enter your word</span>
            <textarea name="description" class="Description" cols="30" rows="10"></textarea>
        </div>
        <div class="Input">
            <span>Enter your word</span>
            <input type='text'  class='textTranslate text' >
        </div>
    `);
    AddContent.appendChild(inputFeild);
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    inputFeild.appendChild(buttons);
    const btnAdd = document.createElement('button');
    btnAdd.classList.add('btnAddpop');
    btnAdd.type = 'button';
    btnAdd.textContent = 'Add';
    buttons.appendChild(btnAdd);
    const btnCancle = document.createElement('button');
    btnCancle.classList.add('btnAddpop');
    btnCancle.type = 'button';
    btnCancle.textContent = 'Cancle';
    buttons.appendChild(btnCancle);
    btnCancle.addEventListener('click', () => {
      popup.classList.add('active');
    });
  });
};

export default Popup;
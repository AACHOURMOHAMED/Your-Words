import AddToArray from './AddToArray.js';

const AddWord = (wordInput, descriptionInput, translateInput) => {
  if (wordInput !== '' && translateInput !== '') {
    AddToArray(wordInput, descriptionInput, translateInput);
  } else {
    alert('no');
  }
};

export default AddWord;

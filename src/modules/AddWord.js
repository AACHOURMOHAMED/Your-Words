import AddToArray from './AddToArray.js';

const AddWord = (wordInput, descriptionInput, translateInput) => {
  if (wordInput !== '' && translateInput !== '') {
    AddToArray(wordInput, descriptionInput, translateInput);
  } else {
    console.log(wordInput);
    alert('it empty');
  }
};

export default AddWord;

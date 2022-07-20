import AddToStorge from './AddToStorge.js';
import { data } from './Data.js';

const AddToArray = (wordInput, descriptionInput, translateInput) => {
  const tasks = {
    id: Date.now(),
    word: wordInput,
    description: descriptionInput,
    translate: translateInput,
  };
  data.push(tasks);
  AddToStorge(data);
  console.log(data);
};

export default AddToArray;

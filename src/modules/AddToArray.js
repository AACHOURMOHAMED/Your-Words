import { data } from './Data.js';

const AddToArray = () => {
  const tasks = [{
    word: 'hello',
    description: 'helloit',
    translate: 'helloooo',
  }];
  data.push(tasks);
};

export default AddToArray;

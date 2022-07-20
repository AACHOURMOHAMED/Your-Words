import { data } from './Data.js';

const getData = () => {
  data = window.localStorage.getItem('tasks');
};

export default getData;

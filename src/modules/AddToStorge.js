const AddToStorge = (data) => {
  window.localStorage.setItem('words', JSON.stringify(data));
};
export default AddToStorge;
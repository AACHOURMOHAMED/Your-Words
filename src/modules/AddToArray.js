const AddToArray = (data) => {
  const tasks = [{
    word: 'hello',
    description: 'helloit',
    translate: 'helloooo',
  }];
  data.push(tasks);
  console.log(data);
};

export default AddToArray;

const transformTodoData = (item) => {
  return {
    id: item.id,
    label: item.title,
    done: item.completed
  };
};

export default transformTodoData;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      todoListItems: ["Buy milk", "Buy eggs", "Buy bread", "Buy butter"],
    },
    actions: {
      // Use getActions to call a function within a fuction
      deletetodolistitem: (index) => {
        const store = getStore();
        const todoListItems = store.todoListItems.filter(
          (item, i) => i !== index
        );
        setStore({ todoListItems: todoListItems });
      },
      addTodoListItem: (item) => {
        const store = getStore();
        const todoListItems = store.todoListItems.concat(item);
        setStore({ todoListItems: todoListItems });
      },
    },
  };
};
export default getState;

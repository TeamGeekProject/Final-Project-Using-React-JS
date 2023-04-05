const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: ["turn in the project"]
    },

    actions: {
      // Use getActions to call a function within a fuction
      addTask: (index, todo) => {
        const store = getStore();
		
		store.list.push(todo)
        console.log(store.list)

        return (store.list)
      },
	
      removeTask: (todo) => {
        const store = getStore();

        console.log("removeTask todo", todo);

        function removeTodo(task) {
          return (task != todo)
        }

        const filteredList = store.list.filter(removeTodo)

        console.log("filteredList", filteredList)

        console.log("store.list no changes yet", store.list)

        store.list = filteredList

        console.log("store.list", store.list)

        return filteredList
      }
    }
  };
};
export default getState;

const initialState = {
  todos: [
    {
      title: "get house",
      id: "3",
      status: false,
    },
    {
      title: "play gym",
      id: "5",
      status: false,
    },
    {
      title: "eat oats",
      id: "6",
      status: true,
    },
    {
      title: "make ai app",
      id: "7",
      status: true,
    },
    {
      title: "project setup",
      id: "8",
      status: false,
    },
  ],
};

export function todoReducer(state = initialState, action) {
  if (action.type === "ADD_TODO") {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  if (action.type === "DELETE_TODO") {
    let temp = state.todos.filter((todo) => todo.id !== action.payload);
    return { ...state, todos: [...temp] };
  }
  if (action.type === "TOGGLE_STATUS") {
    let temp = state.todos.map((todo) => {
      if (todo.id === action.payload) {
        todo.status = !todo.status;
      }
      return todo;
    });
    return { ...state, todos: [...temp] };
  }
  return state;
}

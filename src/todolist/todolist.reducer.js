export const initialState = {
  todos: ["clean car", "get home", "goto goa"],
};
export function reducer(state, action) {
  if (action.type === "ADDTODO") {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  return state;
}

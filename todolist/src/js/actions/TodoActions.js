import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  });
}

export function reloadTodo() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // });
  dispatcher.dispatch({ type: "FETCH_TODOS" });
  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECEIVE_TODOS", todos: [
        {
          id: 213464613,
          text: "Go Shopping Again",
          complete: false
        },
        {
          id: 335684679,
          text: "Sleep At The Yard.",
          complete: true
        }
      ]
    });
  });
}
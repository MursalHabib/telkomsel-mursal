console.info("script loaded");
let todos = [];

const submitTodo = () => {
	const newTodo = document.getElementById("newTodo").value;
	if (newTodo) {
		console.log(newTodo);
		let inputTodo = {
			id: new Date().getTime(),
			todo: newTodo,
			isCompleted: false,
			isDeleted: false,
		};

		todos.push(inputTodo);
		console.log(todos);
		window.localStorage.setItem("todos", JSON.stringify(todos));
	}
};

const displayTodo = () => {
	const todos = window.localStorage.getItem("todos");
	if (todos) {
		const list = `<div>${JSON.parse(todos).map((el) => {
			return `<p>${el.todo}</p>`;
		})}</div>`;

		document.getElementById("listTodos").innerHTML = list;
	}
};

displayTodo();

const checkTodo = () => {};

const removeTodo = () => {};

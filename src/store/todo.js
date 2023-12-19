import { makeAutoObservable } from "mobx";


class Todos {
    todo = [];

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(tdo) {
        this.todo.push(tdo)
    }

    remove(id) {
        this.todo.filter(item => item.id !== id)
    }
}

const todoStore = new Todos();
export default todoStore
const app = new Vue ({
   el: '#app',
    data: {
        todos: [
            'compiti',
            'spesa',
            'bucato',
        ], done: false,
        newTodo: '',
    }, methods: {
        addTodo() {
            if(this.newTodo.trim())
            {this.todo.push(this.newTodo.trim());
            this.newTodo = '';}
        }, deleteTodo(index) {
            this.todo.splice(index,1);
        }, todo() {
            //crea questo metodo
        }
    }
});

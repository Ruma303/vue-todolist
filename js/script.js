const app = new Vue ({
   el: '#app',
    data: {
        todos: [ {
            task: 'compiti', 
            status: false,
        }, {
            task: 'bucato', 
            status: false,
        },{
            task: 'cucinare', 
            status: false,
        },], 
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

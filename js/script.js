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
        newTask: '', //proprietà per pushare nuove task nell'array todos
    },  methods: {
        addTodo() {//funzione per aggiungere nuove task
            //solo se c'è scritto qualcosa aggiungi 
            if (this.newTask.length === 0) return;
                this.todos.push({ 
                task: this.newTask, //il task lo pusha, top
                status: false, //push status
            });
            //azzerare il campo input
            this.newTask = '';

        }, deleteTodo(i) { //metodo per cancellare i task
            this.todos.splice(i,1);
        }, isDone (i) { //cambiare status da false a true
            this.todos[i].status = !this.todos[i].status;
        },
    },
});

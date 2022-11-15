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
        newStatus: false,
    }, methods: {
        addTodo() {//funzione per aggiungere nuove task

            //solo se c'è scritto qualcosa aggiungi 
            if (this.newTask.length === 0) return;
            this.todos.push({ 
                task: this.newTask, //il task lo pusha, top
               
                // ----------->PROBLEMA QUI: NON PUSHA LO STATUS: FALSE <--------------
                status: this.newStatus,
                
            });
            //azzerare il campo input
            this.newTask = '',
            //oppure cambiare stato fuori dal push
            console.log(this.newTask.status) //mi da undefined 
            console.log(this.todos) //controllo l'intera array di oggetti e pare che ci sia

             //alternativa vista da Henri non funziona

            /*if (this.newTask.trim())
            {this.todos.push(this.newTask.trim());
            this.newTask = '';
            console.log(this.newTask.trim()) 
            } */



        }, deleteTodo(i) { //metodo per cancellare i task
            this.todos.splice(i,1);
        }, //se cliccando la task cambia da true e a false, e sbarrala
        taskDone () {this.status === true ? 'false' : ''}
        
    }
});

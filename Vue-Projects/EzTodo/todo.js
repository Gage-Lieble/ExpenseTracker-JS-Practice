
const App = {
    el: '#app',
    data:() => {
        return{
            userInp: '',
            todos: [],
            completed: []
        }
        
    },
    methods: {
        addTodo(){
            this.todos.push(this.userInp)
            this.userInp = ''
            console.log(`Added ${this.userInp} to your todo list!`)
        },
        deleteTodo(t){
            
            if(this.todos.includes(t) == true){
                this.todos.splice(this.todos.indexOf(t), 1)
            }else{
                this.completed.splice(this.completed.indexOf(t), 1)
            }
            
        },
        completeTodo(t){
            this.todos.splice(this.todos.indexOf(t), 1)
            this.completed.push(t)
        },
        undoTodo(t){
            this.completed.splice(this.completed.indexOf(t), 1)
            this.todos.push(this.userInp)
        }
    }
    
    
}

const app = Vue.createApp(App)
app.mount('#app')
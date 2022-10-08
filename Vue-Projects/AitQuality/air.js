

// 0bc1392a-b94b-4779-8fed-7f40eb640885

const App = {
    el: '#app',
    data: () =>{
        return{
            msg: 'hey it works'
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')
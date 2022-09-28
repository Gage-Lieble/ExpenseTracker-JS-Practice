console.log('Hey')

const App = {
    el: '#app',
    data: () => {
        return{
            message:'it works',
            images: [],
            data: [],
            favs: []
        }
    },
    mounted() {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => {
            console.log(response.data)
            this.data.push(response.data)
            
        })
        .catch(err => console.log(err))
    },
    methods: {
        nextImg(){
            axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
            .then(response => {
            console.log(response.data)
            this.data = []
            this.data.push(response.data)
            
        })
        .catch(err => console.log(err))
        },
        addFav(c){
            this.favs.push(c)
        },
        removeFav(c){
            this.favs.splice(this.favs.indexOf(c), 1)
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')
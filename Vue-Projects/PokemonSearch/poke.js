
const App = {
    el: '#app',
    data: () => {
        return{
            test:'It works!!',
            search: '',
            results: {}
        }
    },
    methods: {
        searchPoke(){
            console.log(this.search)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.search.toLowerCase()}`)
            .then(res => {
                console.log(res.data)
                this.results['sprite'] = res.data['sprites']['front_default'] // Image
                this.results['xp'] = res.data['base_experience'] // Experience
                this.results['height'] = res.data['height']
            })
            .catch(err => console.log(err))
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')
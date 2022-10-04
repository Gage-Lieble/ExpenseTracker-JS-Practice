


const App = {
    el: '#app',
    data: () =>{
        return{
            quotes: [],
            userInp: '',
            filter: '',
            page: 1
        }
    },
    mounted() {
        axios.get('https://favqs.com/api/quotes/', {headers: {"Authorization": 'Token token=8922823985bc0f38d1a1817f79551ac6'}})
        .then(res => {
            console.log(res.data.quotes)
            this.quotes = res.data.quotes
        })
    },
    methods: {
        searchQ(){
            axios.get(`https://favqs.com/api/quotes/?filter=${this.userInp}&type=${this.filter}`, {headers: {"Authorization": 'Token token=8922823985bc0f38d1a1817f79551ac6'}})
            .then(res => {
                console.log(res.data.quotes)
                this.quotes = res.data.quotes
            })
        },
        pageChange(x){
            if (x == 1){
                this.page += 1
                axios.get(`https://favqs.com/api/quotes/?filter=${this.userInp}&type=${this.filter}`, {headers: {"Authorization": 'Token token=8922823985bc0f38d1a1817f79551ac6'}, params: {'page': this.page}})
                .then(res => {
                    console.log(res.data.quotes)
                    this.quotes = res.data.quotes
                })
            }else if (x == 0){
                this.page -= 1
                axios.get(`https://favqs.com/api/quotes/?filter=${this.userInp}&type=${this.filter}`, {headers: {"Authorization": 'Token token=8922823985bc0f38d1a1817f79551ac6'}, params: {'page': this.page}})
                .then(res => {
                    console.log(res.data.quotes)
                    this.quotes = res.data.quotes
                })
            }
        }
    }
}
const app = Vue.createApp(App)
app.mount('#app')
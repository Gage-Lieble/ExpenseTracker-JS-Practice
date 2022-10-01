
const App = {
    el: '#app',
    data: () => {
        return{
            msg:'Hey',
            link: '',
            smlLink: '',
            remove: ''
        }
    },
    methods: {
        getLink(){
            if(this.link.includes('https://www.')){
                this.remove = this.link.replace('https://www.','')
                this.link = `https://icon.horse/icon/${this.remove}`
                this.smlLink = `https://www.${this.remove}`
            }else if(this.link.includes('http://www.')){
                this.remove = this.link.replace('http://www.','')
                this.link = `https://icon.horse/icon/${this.remove}`
                this.smlLink = `http://www.${this.remove}`
            }else{
                this.remove = this.link
                this.smlLink = `http://www.${this.link}`
                this.link = `https://icon.horse/icon/${this.link}`
                
            }
            
            
            
            }
            
            
            
            
        }
    }
        


const app = Vue.createApp(App)
app.mount('#app')
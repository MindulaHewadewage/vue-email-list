const app = Vue.createApp({
    name:'Random Mail',
    data(){
        return {
            isLoading : false,
            emails :[]
        }
    },


    methods:{
        getRandomEmail(){
            this.isLoading=true;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emails.push(response.data.response);
            }).catch((error) =>{
                console.log(error.message);
            }).then(() =>{
                isLoading=false;
            })
        }
    },

    mounted(){
        for(let i=0;i<10;i++){
            this.getRandomEmail();
            isLoading=false;
        }
    }

});



app.mount('#root');
const app = Vue.createApp({
    data(){
        return {
            a: false,
            b: false,
            c: false
        };
    },
    computed: {
        aClasses() { 
            return { active: this.a };
        },
        bClasses() { 
            return { active: this.b };
        },
        cClasses() { 
            return { active: this.c };
        }
    },
    methods: {
        select(box) {
            if(box.toLowerCase() === 'a') this.a = !this.a;
            else if(box.toLowerCase() === 'b') this.b = !this.b;
            else if(box.toLowerCase() === 'c') this.c = !this.c;
        }
    }
})

app.mount('#styling');
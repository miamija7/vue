const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      email: ''
    };
  }, 
  computed: {
    fullname(){
      console.log('Running Again...');
      if(this.name === '') return '';
      return this.name + ' ' + 'Evans';
    }
  },
  methods: {
    add(num) {
      if (this.counter < 10) {this.counter = this.counter + num}
    },
    minus(num) {
      if(this.counter > 0) {this.counter = this.counter - num}
    },
    setName(e){
      this.name = e.target.value;
    },
    submitForm(e){
      alert('Submitted!');
      // e.target[0].value = '';
      this.email = '';

    }, 
    confirmInput(){
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    }

  }
});

app.mount('#events');

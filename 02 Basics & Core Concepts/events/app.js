const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      //fullname: '',
      confirmedName: '',
      email: ''
    };
  }, 
  watch: {
    counter(value){
      if (value > 50) this.counter = 0;
    }
    // name(value){
    //   console.log('runnin again...');
    //   if (value === '') this.fullname = '';
    //   else this.fullname = value + ' ' + 'Evans';
    // }
  },
  computed: {
    fullname(){
      console.log('Running Again...');
      if(this.name === '') return '';
      return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    add(num) {
      if (this.counter < 100) {this.counter = this.counter + num}
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
      this.lastname = '';
    }

  }
});

app.mount('#events');

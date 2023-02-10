const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.userInput);
      this.userInput = '';
    },
    deleteGoal(e) {

    }
  }
});

app.mount('#user-goals');

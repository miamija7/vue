const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Learn Vue!',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            courseGoalHtml: '<h3>Dance!</h3>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randNum = Math.random();
            if (randNum < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
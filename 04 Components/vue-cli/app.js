const app = Vue.createApp({
    data () {
        return {
            friends: [
                {
                    id: 'arri',
                    name: 'Arri Evans',
                    phone: '123 456 7890',
                    email: 'arri@evans.com',
                },
                {
                    id: 'casey',
                    name: 'Casey Vannover',
                    phone: '098 765 4321',
                    email: 'casey@vannover.com',
                },
            ]
        }
    }
})

app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails()">
                {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
            </button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'arri',
                name: 'Arri Evans',
                phone: '123 456 7890',
                email: 'arri@evans.com',
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.mount('#app');


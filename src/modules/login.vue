<script>
//import axios from 'axios'

export default {
    data() {
        return {}
    },
    methods: {
        login(event) {
        // Helaas, ik kon axios niet importeren
//            axios
//                .get('http://localhost:3010/api/login')
//                .then(response => {
//                    console.log(response.data)
//                })
//                .catch(error => {
//                    console.log(error)
//                })
//                .finally(() => this.loading = false)


            const Http = new XMLHttpRequest();
            const url = 'http://localhost:3010/api/login';
            Http.open("GET", url);
            Http.send();

            Http.onreadystatechange = (e) => {
                const response = JSON.parse(Http.responseText)
                const redirectUrl = response["redirect_url"];
                window.location.replace(redirectUrl);
            }
        }
    }
}
</script>

<template>
    <button @click="login">Go to login page</button>
</template>
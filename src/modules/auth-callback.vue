<script>
//import axios from 'axios'

export default {
    data() {
        return {}
    },
    methods: {
        getAccessToken: function (event) {

            const queryString = window.location.search;
            console.log(queryString);

            const urlParams = new URLSearchParams(queryString);
            const code = urlParams.get('code')
            console.log(code);

            const state = urlParams.get('state')
            console.log(state);

            // @todo, Use httpOnly cookie. The server can't set the cookie for now.
            const Http = new XMLHttpRequest();
            const url = 'http://localhost:3010/api/callback?code=' + code + "&state=" + state;
            Http.open("GET", url);
            Http.send();

            Http.onreadystatechange = (e) => {
                console.log("status", Http.status)
                const response = JSON.parse(Http.responseText)
                console.log("response", response)
                alert("You (" + response["profile"]["name"] + ") are logged. To prove this, we make another request to retrieve your data.");

                const accessToken = response["auth"]["access_token"]
                console.log(accessToken)
                // document.cookie = "access_token=" + accessToken;

                // Get user profile
                const url = 'http://localhost:3010/api/users/me';
                const Http2 = new XMLHttpRequest();
                Http2.open("GET", url);
                Http2.setRequestHeader("Authorization", "Bearer " + accessToken)
                Http2.send();

                Http2.onreadystatechange = (e) => {
                    console.log("status", Http2.status)
                    const response = JSON.parse(Http2.responseText)
                    console.log("response", response)
                    alert(response["name"] + " from second request");
                }
            }
        }
    }
}
</script>

<template>
    This is the callback page.

    <br>
    <br>
    <button @click="getAccessToken" style="color:green">Click here (in the feature, no click needed)</button>

    <br>
    <br>
    When 401, retry this flow

</template>
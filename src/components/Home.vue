<template>
    <v-container>

        <v-layout row wrap style="text-align: center;" class="mb-3">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right" style="padding: 10px;">
                <v-btn large dark class="blue" router to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left" style="padding: 10px;">
                <v-btn large dark class="blue" router to="/meetups/new">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item v-for="meetup in meetups" :key="meetup.id" :src="meetup.imageURL"
                        reverse-transition="fade-transition" transition="fade-transition">
                        <div class="title">
                            {{ meetup.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12>
                <p style="text-align: center; padding: 15px;">Join out Awesome Meetups!</p>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    export default {
        data: () => ({
            meetups: [
                {imageURL: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: '', title: 'Meeting in Washington DC'},
                {imageURL: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: '', title: 'Meeting in St. Petersburg'}
            ]
        })
    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 15px 30px;
    }
</style>

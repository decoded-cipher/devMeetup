<template>
    <v-container>

        <v-layout row wrap style="text-align: center;" class="mb-3">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right" style="padding: 10px;">
                <v-btn large dark class="light-blue accent-3" router to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left" style="padding: 10px;">
                <v-btn large dark class="light-blue accent-3" router to="/meetups/new">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel style="cursor: pointer;">
                    <v-carousel-item v-for="meetup in meetups" :key="meetup.id" :src="meetup.imageURL"
                        reverse-transition="fade-transition" transition="fade-transition" @click="onLoadMeetup(meetup.id)">
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
        computed: {
            meetups() {
                return this.$store.getters.featuredMeetups
            }
        },
        methods: {
            onLoadMeetup(id) {
                this.$router.push('/meetups/' +id)
            }
        }
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

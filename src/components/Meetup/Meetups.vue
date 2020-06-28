<template>
    <v-container>
        <v-layout row wrap v-for=" meetup in meetups" :key="meetup.id" class="mb-2">
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="light-blue accent-3">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3 style="padding-left: 15px;">
                                <v-img :src="meetup.imageURL"
                                    height="150px">
                                </v-img>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div style="padding: 0px;">
                                        <h3 class="white--text mb-0">{{ meetup.title }}</h3>
                                        <div style="font-size: 15px;">{{ meetup.date }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions style="padding-top: 0px;">
                                    <v-btn flat :to="'/meetups/' + meetup.id" style="padding: 20px 20px;">View Meetup
                                    <v-icon left>mdi-arrow-right-bold-circle</v-icon></v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
        meetups() {
            return this.$store.getters.loadedMeetups
        }
    }
}
</script>>
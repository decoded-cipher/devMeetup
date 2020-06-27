<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="light-blue accent-3">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3 style="padding-left: 15px;">
                                <v-img src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg"
                                    height="150px">
                                </v-img>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div style="padding: 0px;">
                                        <h3 class="white--text mb-0">My Meetup</h3>
                                        <div style="font-size: 15px;">17th July 2020</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions style="padding-top: 0px;">
                                    <v-btn flat to="/meetups/1" style="padding: 20px 20px;">View Meetup
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
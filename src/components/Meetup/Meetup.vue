<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h4 style="color:#D32F2F">{{ meetup.title }}</h4>
                    </v-card-title>
                    <v-img :src="meetup.imageURL" height="400px"></v-img>
                    <v-card-text>
                        <div class="blue--text">{{ meetup.date }} - Where it takes place</div>
                       <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark class="red darken-2" style="padding: 20px 30px; margin: 10px;">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        meetup () {
            return this.$store.getters.loadedMeetup(this.id)
        }
    }
}
</script>>
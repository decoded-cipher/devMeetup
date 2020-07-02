<template>
    <v-container>
        <v-layout row style="text-align: center;">
            <v-flex xs10 offset-xs1 md8 offset-md2>
                <h2 style="color:#D32F2F">Create a New Meetup</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs10 offset-xs1 md8 offset-md2>
                            <v-text-field name="title" label="Title" id="title" required v-model="title"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs10 offset-xs1 md8 offset-md2>
                            <v-text-field name="location" label="Location" id="location" required v-model="location"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs10 offset-xs1 md8 offset-md2>
                            <v-text-field name="imageURL" label="Image URL" id="imageURL" required v-model="imageURL"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs10 offset-xs1 md8 offset-md2>
                            <img :src="imageURL" height="200">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs10 offset-xs1 md8 offset-md2>
                            <v-textarea name="description" label="Description" id="description" rows="5" required v-model="description"></v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs10 offset-xs1 md8 offset-md2>
                            <v-btn 
                            class="white--text" 
                            :disabled="!formIsValid" 
                            style="background-color: #D32F2F"
                            type="submit">Create Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            location: '',
            imageURL: '',
            description: ''
        }
    },
    computed: {
        formIsValid() {
            return this.title !== '' && 
            this.location !== '' && 
            this.imageURL !== '' && 
            this.description !== ''
        }
    },
    methods: {
        onCreateMeetup() {
            if (!this.formIsValid) {
                 return    
                }
            const meetupData = {
                title: this.title,
                location: this.location,
                imageURL: this.imageURL,
                description: this.description,
                date: new Date()
            }
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/meetups')
        }
    }
}
</script>
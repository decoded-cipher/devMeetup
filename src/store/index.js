import Vue from'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 export const store = new Vuex.Store({
     state: {
         loadedMeetups: [
            {
                imageURL: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg', 
                id: 'bkdf7yw687kfsbf37rwer4t8gctr64gr64', title: 'Meeting in Washington DC',
                date: '2020-07-17'
            },
            {
                imageURL: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg', 
                id: 'bkdf7yw687kvhusgdfjsv4t8gctr64gr64', title: 'Meeting in St. Petersburg',
                date: '2020-07-19'
            }
         ],
         users: {
             id: 'vzfgdhgfhxfgh',
             registeredUsers: ['bkdf7yw687kfsbf37rwer4t8gctr64gr64']
         }
     },
     mutations: {},
     actions: {},
     getters: {
          loadedMeetups (state) {
              return state.loadedMeetups.sort((meetupA, meetupB) => {
                  return meetupA.date > meetupB.date
              })
          },
          featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0, 5)
          },
          loadedMeetup (state) {
              return (neetupId) => {
                  return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                  })
              }
          }
     }
 })
<template>
  <v-app>

    <v-toolbar dark class="red darken-2">
      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat dark class="red darken-2" style="box-shadow: none;" v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer temporary v-model="sideNav">
      <v-list style="padding: 80px 40px;">
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon left>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content><br><br>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      sideNav: false,
      menuItems: [{
          icon: 'mdi-eye',
          title: 'View MeetUps',
          link: '/meetups'
        },
        {
          icon: 'mdi-map-marker',
          title: 'Organize MeetUps',
          link: '/meetup/new'
        },
        {
          icon: 'mdi-account',
          title: 'Profile',
          link: '/profile'
        },
        {
          icon: 'mdi-face',
          title: 'Sign Up',
          link: '/signup'
        },
        {
          icon: 'mdi-lock-open',
          title: 'Sign In',
          link: '/signin'
        }
      ]
    })
  }
</script>
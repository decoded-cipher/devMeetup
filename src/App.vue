<template>
  <v-app>

    <v-toolbar dark class="red darken-2">
      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat dark class="red darken-2" style="box-shadow: none;">
          <v-icon left>mdi-account-multiple</v-icon>
          View MeetUps
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="sideNav">
      <v-list style="padding: 50px;">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon left>mdi-account-multiple</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>VIEW MEETUPS</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <main></main>
    
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld';

  export default {
    name: 'App',

    // components: {
    //   HelloWorld,
    // },

    data: () => ({
      sideNav: false
    }),
  };
</script>
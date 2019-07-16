<template>
  <div id="app">
    <hero-banner></hero-banner>
    <section id="dropdown-section">
      <div class="container">
        <div class="select">
          <select v-model="selectedEventType">
            <option value="" disabled selected hidden>Please Choose An Event Type</option>
            <option
              v-for="(eventType, index) in eventTypesArray"
              v-bind:key="index"
              v-bind:value="eventType"
            >{{ eventType }}</option>
          </select>
        </div>
      </div>
    </section>
    <section v-show="events.length > 0">
      <div class="container">
        <ul class="list is-hoverable">
         <event-item v-for="event in events" v-bind:key="event.id" :event="event"></event-item>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import HeroBanner from "./components/HeroBanner.vue";
import EventItem from "./components/EventItem.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    HeroBanner,
    EventItem
  },
  data: function() {
    return {
      eventTypesArray: [
        "american_football_match",
        "american_football_outright",
        "baseball_match",
        "baseball_outright",
        "basketball_match",
        "boxing_match",
        "cricket_match",
        "cricket_outright",
        "current_affairs",
        "cycling",
        "darts_match",
        "darts_outright",
        "football_match",
        "football_outright",
        "golf_match",
        "golf_outright",
        "handball_match",
        "horse_racing_race",
        "ice_hockey_match",
        "mma_match",
        "motorsports_race",
        "motorsports_outright",
        "politics",
        "politics_outright",
        "rowing",
        "rugby_league_match",
        "rugby_league_outright",
        "rugby_union_match",
        "rugby_union_outright",
        "snooker_match",
        "snooker_outright",
        "tennis_match",
        "tennis_outright",
        "volleyball_match",
        "generic",
        "top_level_event",
        "tv_entertainment"
      ],
      selectedEventType: "",
      events: {}
    };
  },
  watch: {
    selectedEventType: function() {
      if (!this.selectedEventType) return;
      let $this = this;
      axios
        // .get("https://cors.io/?https://api.smarkets.com/v3/events/", {
        .get("http://localhost:3000/", {
          params: {
            state: "upcoming",
            type: $this.selectedEventType
          }
        })
        .then(function(response) {
          console.log(response);
          $this.events = response.data;
        })
        .catch(function(error) {
          alert("an error as occurred");
          console.log(error);
        })
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#dropdown-section {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>

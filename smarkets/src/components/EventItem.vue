<template>
 <li>{{ event.name }}</li>
</template>

<script>
export default {
  name: "EventItem",
  props: {
    event: Object
  }
};
</script>

<style scoped>
</style>

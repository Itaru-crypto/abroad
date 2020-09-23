<template>
  <div>
    <HeaderAuth />
    <div class="advices">
      <h1>{{country}}</h1>
      <h1>{{name}}</h1>
      <h1>{{comments}}</h1>
    </div>
  </div>
</template>
<script>
import HeaderAuth from "../components/HeaderAuth";
export default {
  props:["country", "name", "comments"],
  components: {
    HeaderAuth
  }
}
</script>
<style scoped>

</style>
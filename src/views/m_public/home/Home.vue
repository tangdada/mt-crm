<template>
  <div class="page">
    <counter></counter>
    <p>
      some features: <br />
      <router-link to="/transition">Go to transition</router-link>
    </p>
  </div>
</template>

<script>
import Counter from 'components/Counter'

export default {
  components: {
    Counter
  }
}
</script>

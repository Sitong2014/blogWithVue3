<template>
     <router-view/>
</template> 

<script lang="ts">
import mainPage from './layout/page/index.vue';

export default {
  name: 'App',
  components: {
    mainPage
  }
}
</script>

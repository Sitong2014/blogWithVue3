<template>
    <div class="main-page-container">
        <blogHead :msg="'这是头部'"/>
        <router-view/>
    </div>
    
</template> 

<script lang="ts">
import blogHead from "../head/index.vue";
export default {
  name: 'mainPage',
  components: {
      blogHead
  }
}
</script>
<style lang="less">
    .main-page-container{
        background-color:transparent;
    }
</style>

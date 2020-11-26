<template>
  <div class="image">
    <h2>A few images to get inspired ...</h2>
    <div class="images-list">
        <img src="https://picsum.photos/300?random=1"/>
        <img src="https://picsum.photos/300?random=2"/>
        <img src="https://picsum.photos/300?random=3"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'imageOfTheDay',
  data() {
      return {
      };
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .image {
        background:darkgrey;
        height:auto;
        width:60%;
        padding:20px;
        margin:0 auto;
    }
</style>

<template>
  <div class="quote">
      <button @click="getQuote">Get a new quote !</button>
      <div class="quote-content hidden">
          <p>{{quote}}</p>
          <p>{{author}}</p>
      </div>
      
  </div>
</template>

<script>
import quoteQueries from "../services/quoteQueries";

export default {
  name: 'aQuoteADay',
  data() {
      return {
          quote: '',
          author: '',
      };
  },
  methods: {
        getQuote() {
            let quoteId = Math.floor(Math.random() * (1643 - 1) + 1);
            quoteQueries.getQuote()
            .then ((response) => {
                this.quote = response.data[quoteId].text;
                this.author = response.data[quoteId].author;
            })
            .catch((e) => {
                console.log(e);
            })
        }
  },
  mounted() {
      this.getQuote();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .quote {
        background:grey;
        height:auto;
        width:60%;
        padding:20px;
        margin:0 auto;
    }
</style>

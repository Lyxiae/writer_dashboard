<template>
  <div class="words">
      <button @click="getWords">Get new words !</button>
      <div id="words-block" class="words-content hidden" v-if="words.length == 3">
          <div class="word" v-for="word in words" :key="word">
              {{word}}
          </div>
      </div>
      
  </div>
</template>

<script>
import wordsQueries from "../services/wordsQueries";

export default {
  name: 'wordsParty',
  data() {
      return {
          words: [],
      };
  },
  methods: {
        getWords() {
            this.words = [];
            let times = 3;
            for (var i=0; i < times; i++) {
                wordsQueries.getRandomWord()
                .then ((response) => {
                    this.words.push(response.data.word);
                })
                .catch((e) => {
                    console.log(e);
                })
                
            }
        },
  },
  beforeMount() {
      
  },
  mounted() {
      this.getWords();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .words {
        background:grey;
        height:auto;
        width:60%;
        padding:20px;
        margin:0 auto;
    }

</style>

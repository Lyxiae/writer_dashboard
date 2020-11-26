<template>
  <div class="home">
    <aQuoteADay/>
    <imageOfTheDay/>
    <wordsParty/>
  </div>
</template>

<script>
// @ is an alias to /src
import aQuoteADay from "@/components/aQuoteADay";
import imageOfTheDay from "@/components/imageOfTheDay";
import wordsParty from "@/components/wordsParty";

export default {
  name: 'Home',
  components: {
    aQuoteADay,
    imageOfTheDay,
    wordsParty
  }
}
</script>

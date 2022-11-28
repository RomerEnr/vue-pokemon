<script>
import PokemonFighter from '@/components/PokemonFighter.vue';

export default {
  name: "BattleStadium",
  mounted() {

  },
  props: {

  },
  data() {
    return {
      background: "grass.png"
    }
  },
  methods: {

  },
  components: {
    PokemonFighter
  },
  computed: {
    backgroundImg() {
      return `url(img/${this.background})`
    }
  }
}
</script>

<template>
  <div class="stadium">
    <PokemonFighter :player="1" />
    <PokemonFighter :player="2" />
  </div>
</template>

<style scoped>
.stadium {
  width: 900px;
  height: 450px;
  background: v-bind("backgroundImg");
  display: flex;
  justify-content: space-around;
  overflow: hidden;
}
</style>
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
    <PokemonFighter :player="2" />
    <PokemonFighter :player="1" />
  </div>
</template>

<style scoped>
.stadium {
  width: 900px;
  height: 450px;
  background: v-bind("backgroundImg");
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}
</style>
<script>
import { getRandomPokemon } from "@/modules/getRandomPokemon.js"
import PokemonLifeBar from "@/components/PokemonLifeBar.vue"

export default {

  name: "PokemonFighter",
  async mounted() {
    const pokemonData = await getRandomPokemon();
    this.pokemonName = pokemonData.name
    this.life = pokemonData.life
    this.moves = pokemonData.moves
    this.sprites = pokemonData.sprites
  },
  props: {
    player: {
      type: Number,
      required: true,
      validator: value => value >= 1 && value <= 2
    }
  },
  data() {
    return {
      pokemonName: "",
      life: 0,
      moves: [],
      sprites: {}

    }
  },
  methods: {

  },
  computed: {
    image() {
      if (this.player === 1) {
        return this.sprites.back
      } else {
        return this.sprites.front
      }
    },
    playerOneLocation() {
      if (this.player === 1) {
        return "down-position"
      } else {
        return "up-position"
      }
    }
  },
  components: {
    PokemonLifeBar
  }
}
</script>

<template>
  <div class="pokemon-container" :class="playerOneLocation">
    <PokemonLifeBar :life-value="life" />
    <div class="sprite-container">
      <img class="pokemon-sprite" :src="image" :alt="pokemonName">
      <!-- <p>{{ pokemonName }}</p> -->
    </div>

  </div>
</template>

<style scoped>
.pokemon-container {
  width: 200px;
  height: 100%;
  display: grid;
  justify-items: center;
}

.pokemon-sprite {
  image-rendering: pixelated;
  transform: scale(3);
}

.sprite-container {
  /*  width: 288px;
  height: 288px;
*/
}

.down-position {
  align-items: end;
}

.up-position .sprite-container {
  transform: translateY(50px);
}
</style>
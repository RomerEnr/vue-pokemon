<script>
import { getRandomPokemon } from "@/modules/getRandomPokemon.js"
import PokemonLifeBar from "@/components/PokemonLifeBar.vue"
import emitter from "@/emitter"

export default {

  name: "PokemonFighter",
  async mounted() {
    const pokemonData = await getRandomPokemon();
    this.pokemonName = pokemonData.name
    this.life = pokemonData.life
    this.currentHP = pokemonData.life
    this.moves = pokemonData.moves
    this.sprites = pokemonData.sprites

    emitter.$on("attack", (data) => this.handleAttack(data));
  },
  async updated() {
    // this.currentHP = 
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
      currentHP: 0,
      moves: [],
      sprites: {}

    }
  },
  methods: {
    attack() {
      const damage = Math.floor(Math.random() * 4) * 5;
      const toPlayer = this.player === 1 ? 2 : 1;
      emitter.$emit("attack", { damage, toPlayer });
    },

    handleAttack(data) {
      if (data.toPlayer === this.player) {
        this.currentHP -= data.damage;
      }
      if (data.toPlayer === 2) {
        setTimeout(() => this.attack(), 1000);
      }
    }
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
    <div class="stats-container">
      <button v-if="(this.player == 1)" class="attackButton" @click="attack">attack</button>
      <p>{{ pokemonName }}</p>
      <PokemonLifeBar :max-hp="life" :current-hp="currentHP" />
    </div>
    <div class="sprite-container">
      <img class="pokemon-sprite" :src="image" :alt="pokemonName">
    </div>

  </div>
</template>

<style scoped>
.pokemon-container {
  width: 70%;
  height: 200px;
  /* background: red; */
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  justify-items: end;
}

.pokemon-sprite {
  image-rendering: pixelated;
  transform: scale(3);
}

.stats-container p {
  padding: 10px;
  font-family: 'Press Start 2P', cursive;
  font-size: 1em;
  color: white;
  margin: 0;
  text-shadow: 5px 2px 0 black;
  text-transform: capitalize;
}

.sprite-container {
  /*  width: 288px;
  height: 288px;
*/
}

.up-position .sprite-container {
  transform: translate(-100px, 25px);
}

.down-position {
  justify-content: start;
  align-items: end;
}

.down-position .sprite-container {
  order: -1;
  transform: translate(-80px, -20px);
}
</style>
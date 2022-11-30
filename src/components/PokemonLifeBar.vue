<script>
export default {
  name: "PokemonLifeBar",
  updated() {
    // console.log(this.maxHp);
    console.log(this.currentHp);
  },
  props: {
    maxHp: {
      type: Number,
      required: true
    },
    currentHp: {
      type: Number,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    lifePercent() {
      return this.currentHp + "%"
    },

    lifeColor() {
      if (this.currentHp > 50) {
        return "greenyellow"
      } else if (this.currentHp > 25) {
        return "orange"
      } else {
        return "red"
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="bar">

    </div>
  </div>
</template>

<style>
.container {
  width: 150px;
  height: 30px;
  border: 3px solid wheat;
  border-radius: 10px;
  background-color: black;
  overflow: hidden;
}

.bar {
  width: v-bind("lifePercent");
  height: 100%;
  background-color: v-bind("lifeColor");
}
</style>
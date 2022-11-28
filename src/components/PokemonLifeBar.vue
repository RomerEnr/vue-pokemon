<script>
export default {
  name: "PokemonLifeBar",
  mounted() {

  },
  props: {
    lifeValue: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      life: this.lifeValue
    }
  },
  methods: {

  },
  computed: {
    lifePercent() {
      return this.life.toString() + "%"
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
  border-radius: 10px;
  background-color: gold;
  overflow: hidden;
}

.bar {
  width: v-bind("lifePercent");
  height: 100%;
  background-color: red;
}
</style>
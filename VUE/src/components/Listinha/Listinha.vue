<template>
  <div>
    <ul>
      <li v-for="(bla, index) in lista" :key="index">
        <div @click="handleClick(index)" style="padding: 10px; cursor: pointer">
          <span :class="bla.active ? `text active` : `text`">
            {{ bla.name }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.text {
  color: black;
}
.text.active {
  color: red;
}
</style>

<script>
export default {
  name: "Listinha",
  data() {
    return {
      message: "Navit",
      status: true,
    };
  },
  props: {
    lista: Array
  },
  computed: {
    getMessage() {
      if (this.lista.every((e) => e.active)) {
        return "Todo mundo selecionado";
      } else {
        return "Nem todo mundo foi selecionado";
      }
    },
    getColor() {
      return this.lista.every((e) => e.active)
        ? "text active"
        : "text";
    },
  },
  methods: {
    handleClick(id) {
      this.lista[
        id
      ].name = `${this.lista[id].name} - clicado`;

      this.lista[id].active = !this.lista[id].active;
    },
  },
  created() {
    this.lista[0].active = true;
  },
  mounted() {
    this.lista[0].active = false;
  },
};
</script>
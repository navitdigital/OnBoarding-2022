<template>
  <div>
    <Listinha :lista="listaDeContatos"/>
    <p :class="getColor">
      {{ getMessage }}
    </p>
    <p v-if="status">STATUS É TRUE</p>
    <p v-else>STATUS É FALSE</p>
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

import Listinha from '@/components/Listinha/Listinha.vue'

export default {
  name: "Home",
  components: {
    Listinha
  },
  data() {
    return {
      message: "Navit",
      status: true,
      listaDeContatos: [
        {
          active: false,
          name: "Dayvid",
        },
        {
          active: false,
          name: "Wesso",
        },
        {
          active: false,
          name: "Jorge",
        },
        {
          active: false,
          name: "teste",
        },
      ],
    };
  },
  computed: {
    getMessage() {
      if (this.listaDeContatos.every((e) => e.active)) {
        return "Todo mundo selecionado";
      } else {
        return "Nem todo mundo foi selecionado";
      }
    },
    getColor() {
      return this.listaDeContatos.every((e) => e.active) ? "text active" : "text";
    },
  },
  methods: {
    handleClick(id) {
      this.listaDeContatos[
        id
      ].name = `${this.listaDeContatos[id].name} - clicado`;

      this.listaDeContatos[id].active = !this.listaDeContatos[id].active;
    },
  },
  created() {
   this.handleClick(0)
  },
  mounted() {
    this.listaDeContatos[0].active = false
  },
};
</script>

<template>
  <div>
    <h1>Assistant de blagues AI</h1>

    <select v-model="category">
      <option value="Any">Any</option>
      <option value="Programming">Programming</option>
      <option value="Misc">Misc</option>
      <option value="Dark">Dark</option>
      <option value="Pun">Pun</option>
      <option value="Spooky">Spooky</option>
      <option value="Christmas">Christmas</option>
    </select>

    <button @click="getJoke" :disabled="loading">
      {{ loading ? "Chargement..." : "Nouvelle blague" }}
    </button>

    <p v-if="joke"><strong>Blague (EN) :</strong> {{ joke }}</p>
    <p v-if="jokeFR"><strong>Blague (FR) :</strong> {{ jokeFR }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joke: '',
      jokeFR: '',
      category: '',
      loading: false
    }
  },
  methods: {
    async getJoke() {
      this.loading = true;
      this.joke = '';
      this.jokeFR = '';

      try {
        const categoryParam = encodeURIComponent(this.category || 'Any');
        const url = `http://localhost:3000/api/joke?category=${categoryParam}`;

        const res = await fetch(url);
        const data = await res.json();

        this.joke = data.joke;
        this.jokeFR = data.jokeFR;

      } catch (err) {
        console.error(err);
        this.joke = "Impossible de récupérer la blague";
        this.jokeFR = '';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

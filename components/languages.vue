<script setup>
const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
<template>
  <a
  class="languages"
    href="#"
    v-for="locale in availableLocales"
    :key="locale.code"
    @click.prevent.stop="setLocale(locale.code)"
    >{{ locale.name }}</a
  >
</template>

<style scoped>
.languages{
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    padding: 5px 30px;
    border-radius: 100px;
    background: white;
    color: red;
}
</style>
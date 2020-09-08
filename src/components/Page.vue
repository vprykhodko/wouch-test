<template>
  <div class="page">
    <div class="page__head">
      <h1 class="title">{{ title }}</h1>
      <slot />
    </div>

    <div class="page__body">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {
    title: {
      type: String,
    }
  }
}
</script>

<style lang="scss">
.page {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2em;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 2rem;
    font-weight: 300;
  }
}
</style>
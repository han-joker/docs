<template>
  <Layout>
    <template #page-bottom>
      <div id="waline"></div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import Waline from "@waline/client";
export default {
  components: {
    Layout,
  },
  mounted() {
    let r = Waline({
      el: "#waline",
      serverURL: 'https://comments-of-docs-7y6fj80di-han-joker.vercel.app/',
      dark: 'html.dark',
      copyright: false,
      locale: {
        placeholder: '人过留名，雁过留声',
      }
      // ...
    })
    console.log(r)
  },
};
</script>

<style lang="scss">
:root {
  /* 主题色 */
  --waline-theme-color: #ff0000;
  --waline-active-color: #ff0000;
}
#waline {
  max-width: var(--content-width);
  margin: 0 auto;
}

.v[data-class=v] .vpanel {
  margin:auto;
}

/* 根据用户设置 ↓ */
html.dark {
  /* 布局颜色 */
  --waline-text-color: #adbac7 !important;
  --waline-bgcolor: #22272e !important;
  --waline-bgcolor-light: #22272e !important;
  --waline-border-color: #3e4c5a !important;
}
</style>
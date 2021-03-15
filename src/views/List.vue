<template>
  <div>
    <GlobalListContainer :list="htmlList" v-on:toDetail="toDetail"></GlobalListContainer>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      htmlList: [
        {
          title: '这是html',
          subTitle: '这是对内容的描述',
          author: '作者',
          releaseTime: '2021-03-11 17:45:00',
        },
      ],
    }
  },
  methods: {
    toDetail(current) {
      console.log(current)
    },
  },
}
</script>

<style lang="scss" scoped></style>

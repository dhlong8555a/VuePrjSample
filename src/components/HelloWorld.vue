<template>
  <div class="hello">
    <span
      @click="switchLang(zhLang)"
      :class="{ 'is-active': getLang() === zhLang }"
      class="header-lang">
      中文
    </span>
    <span>/</span>
    <span
      @click="switchLang(enLang)"
      :class="{ 'is-active': getLang() === enLang }"
      class="header-lang">
      En
    </span>
    <h1>{{$t('main.message')}}</h1>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
import {getLang, setLang, LANG_EN, LANG_ZH} from '@/js/lang/lang'

export default {
  name: 'HelloWorld',
  data () {
    return {
      enLang: LANG_EN,
      zhLang: LANG_ZH
    }
  },
  methods: {
    switchLang (lang) {
      setLang(lang)
    },
    getLang () {
      return getLang()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  span {
    opacity: 0.7;
  }
  .header-lang {
    cursor: pointer;
    &.is-active {
      opacity: 1;
    }
  }
}
</style>

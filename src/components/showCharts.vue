<template>
  <div class="total">
    {{props.condition}}图 {{total}}个
  </div>
  <div class="charts">
    <single-chart2 v-for="(item,index) in urls" key="item" :index="index" :src="item" v-show="isShow[index]" @getTypes="getTypes"></single-chart2>
  </div>

</template>

<script setup>
  import SingleChart2 from '@/components/SingleChart2.vue'
  import { ref,reactive,onUpdated,watchEffect,watch,isRef } from 'vue'
  const props = defineProps({
    condition: {
      type: String,
      required: true
    }
  })

  let total = ref(0)
  let isShow = ref([])
  let myTypes = reactive({})
  let name = ref(['JCR期刊区间文献分布数', '中国PCT国际专利申请的国家数(累计)', '产业分类', '企业专利数量及分类', '全国IPO金额近五年趋势', '全国PCT专利数top5区', '全球top5国家历年国际文献发表数', '创新产出', '国内外上榜企业市值', '国内外上榜企业数量', '国内外上榜企业研发费用', '国内外上榜企业营收1', '国际文献宁波浙江全国对比图', '国际文献数浙江全国对比', '宁波&浙江专利情况对标', '宁波PCT专利数top5区', '新材云创-产业资源', '新材料产业总产值', '新材料细分行业利润总额', '新材料细分行业规上工业RD经费', '浙江PCT专利数top5区', '科创成果产出-专利数量', '科创成果产出-文献数量', '科研人才数量', '细分产业融资占比', '融资概况', '融资轮次分布', '融资金额分布', '鄞州区'])
  let urls = ref([])
  name.value.forEach(n => {
    urls.value.push('static/'+ n + '.html')
  });

  const getTypes = ([index,types]) => {
    myTypes[index] = types
    changeShow(props.condition)
    // console.log(isShow.value)
  }
  const changeShow = (condition) => {
    total.value = 0

    // 遍历myTypes
    Object.keys(myTypes).forEach(element => {
      let index = element
      let types = myTypes[element]
          // 若无条件
      if(condition=='all'){
        total.value += 1
        isShow.value[index] = true
      // 若有条件
      } else {
        // 类型 array
        if(typeof types == 'object'){
          if(types.includes(condition)){
            total.value += 1
            isShow.value[index] = true
          }else{
            isShow.value[index] = false
            return
          }
        // 类型 string
        } else {
          if(types==condition){
            total.value += 1
            isShow.value[index] = true
          }else{
            isShow.value[index] = false
            return
          }
        }
      }
    })
  }

  watchEffect(()=>{
    changeShow(props.condition)
  })

</script>

<style lang="less" scoped>
.total {
  color: #FFF;
  font-size: 20px;
  font-weight: 400;
  line-height: 34px;
}
.charts {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
<template>
  <div class="object_area">
    <div
      v-for="(i,index) in Object.keys(data)"
      v-if="data!=null && Object.keys(data).length!==0"
      :key="i"
      class="object"
      :style="Array.isArray(data[i]) ? 'order: 99;': ''"
    >
      <div v-if="Array.isArray(data[i])" class="inside_array" >
        <div class="visual_label">{{i}}</div>
        <is-array :data="data[i]" :crt_key="i"></is-array>
      </div>
      <div v-else-if="typeof data[i] === 'object' && data[i]!=null && Object.keys(data[i]).length!==0" class="small_object">
        <div class="visual_label">{{i}}</div>
        <is-object :data="data[i]" style="background-color: #73c0de;"></is-object>
      </div>
      <div v-else-if="data[i]!=null" style="width: 145px;" v-show="typeof data[i] != 'object' || (data[i]!=null && Object.keys(data[i]).length!==0)">
        <span class="visual_label">{{i}}:</span>
        <deal-input :data="data[i]"></deal-input>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'IsObject',
  }
</script>
<script setup>
// import { computed } from '@vue/reactivity';

import { onMounted,computed } from 'vue'
import IsArray from './IsArray.vue'
import DealInput from './DealInput.vue'
const { data } = defineProps({
  data: {
    type: [String, Object],
    required: true
  }
})
// let data = computed(() => { data.value ? data.value : {xx: 'xx'}})

onMounted(() => {

})

</script>

<style lang="less" scoped>
.object_area {
  flex: 1;
  margin: 5px 0;
  display: flex;
  // width: 780px;
  flex-wrap: wrap;
}
  .object {
    // background-color: aquamarine;
    display: flex;
    flex-direction: column;
    // width: 150px;
    margin: 3px;
  }
  .visual_label {
    // color: #828d95;
    color: #e0edf9;

    display: inline-block;
    // padding-right:20px;
    // width: 150px;
    font-size: 16px;
  }
  .visual_input {
    display: inline-block;
   
  }
  .inside_array {
    background-color: #91cc75;
    // display: block;
    // width: 750px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .visual_label {
    display: inline-block;
    margin-right: 20px;
  }
  .small_object {
    border: 3px solid cadetblue;
    // background-color: cadetblue;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>

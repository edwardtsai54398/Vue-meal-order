<script setup>
import { reactive } from 'vue';
import WeekComponent from './components/WeekComponent.vue';

const result = reactive({
  "week_day0": "000000000000000000000000000000000000000000000000",
  "week_day1": "000000000000000000000000000000000000000000000000",
  "week_day2": "000000000000000000000000000000000000000000000000",
  "week_day3": "000000000000000000000000000000000000000000000000",
  "week_day4": "000000000000000000000000000000000000000000000000",
  "week_day5": "000000000000000000000000000000000000000000000000",
  "week_day6": "000000000000000000000000000000000000000000000000"
})
const getTimeData = (day, str) => {
  console.log(`${day}, ${str}`);
  result[`week_day${day}`] = str
}
</script>

<template>
  <h1>供餐時間選擇器</h1>
  <ol class="weeks">
    <WeekComponent :day="'日'" :dayNum="0" @sendTimeData="getTimeData"/>
    <WeekComponent :day="'一'" :dayNum="1" @sendTimeData="getTimeData"/>
    <WeekComponent :day="'二'" :dayNum="2" @sendTimeData="getTimeData"/>
    <WeekComponent :day="'三'" :dayNum="3" @sendTimeData="getTimeData"/>
    <WeekComponent :day="'四'" :dayNum="4" @sendTimeData="getTimeData"/>
    <WeekComponent :day="'五'" :dayNum="5" @sendTimeData="getTimeData"/>
    <WeekComponent :day="'六'" :dayNum="6" @sendTimeData="getTimeData"/>
  </ol>
  <div class="result">
    <p v-for="(data, key) in result" :key="key"><span class="key_name">{{ key }}:</span><span class="data_str">{{ data }}</span></p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/all.scss";
#app{
  text-align: left;
}
h1{
  font-size: $l-font;
}
.weeks{
  margin-top: $sp4;
}
.result{
  margin-top: $sp3;
  display: flex;
  flex-direction: column;
  p{
    display: flex;
    margin-bottom: $sp1;
  }
}
.data_str{
  margin-left: $sp2;
  flex-grow: 1;
  text-align: justify;
}
</style>
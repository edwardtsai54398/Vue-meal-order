<script setup>
import { ref,onMounted } from 'vue'

const props = defineProps({
  day: String,
  dayNum: Number,
})
const emit = defineEmits(["sendTimeData"])

const isDayprovide = ref(true)
const dayProvideChange = () => {
  isDayprovide.value = !isDayprovide.value
  if(!isDayprovide.value){
    let str = ''
    for(let i=0;i<48;i++){
      str += '0'
    }
    emit('sendTimeData',props.dayNum, str)
  }else{
    setTimeStr(startTime, endTime)
  }
}

const timeArr1 = () => {
  let array = []
  for(let i=0;i<24;i++){
    let hourStr = `${i}`
    hourStr = hourStr.padStart(2,'0')+':'
    for(let j=0;j<2;j++){
      let min = j*30
      let timeStr = hourStr + min.toString().padStart(2,'0')
      array.push(timeStr)
    }
  }
  return array
}

const timeArr2 = () => {
  let array = timeArr1()
  array.splice(0,1)
  array.push('23:59')
  return array
}

const startTime = ref(0)
const endTime = ref(1)
const setTimeStr = (start, end) => {
  if(start >= end){
    endTime.value = startTime.value + 1
    end = start+1
  }
    let str = ''
    for(let i=0;i<start;i++){
      str+='0'
    }
    for(let i=start;i<end;i++){
      str+='1'
    }
    str = str.padEnd(48,'0')
    timeData.value = str
    emit('sendTimeData',props.dayNum, str)
}

const timeData = ref("000000000000000000000000000000000000000000000000")

onMounted(() => {
  setTimeStr(startTime, endTime)
})
</script>

<template>
  <li class="week">
      <h2>星期{{ day }}</h2>
      <div class="day_switch">
        <div class="switch_bar" :class="{on : isDayprovide}">
          <div class="switch_btn" @click="dayProvideChange">
            <font-awesome-icon icon="fa-solid fa-check" v-show="isDayprovide"/>
            <font-awesome-icon icon="fa-solid fa-xmark" v-show="!isDayprovide"/>
          </div>
        </div>
        <span class="provide_msg">本日<span v-show="!isDayprovide">不</span>供餐</span>
      </div>
      <div class="time_select" v-show="isDayprovide">
        <select name="start-time" id="start-time" @change="setTimeStr(startTime, endTime)" v-model="startTime">
          <option disabled>請選擇時間</option>
          <option v-for="(time,index) in timeArr1()" :key="time" :value="index" :selected="index">{{ time }}</option>
        </select>
        <span>-</span>
        <select name="end-time" id="end-time" @change="setTimeStr(startTime, endTime)" v-model="endTime">
          <option disabled>請選擇時間</option>
          <option v-for="(time, index) in timeArr2()" :key="time" :value="index+1">{{ time }}</option>
        </select>
      </div>
    </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/all.scss";
.week{
  display: flex;
  align-items: center;
  margin-bottom: $sp2;
}
.day_switch{
  margin-left: $sp3;
  display: flex;
}
.switch_bar{
  width: 50px;
  height: 26px;
  border-radius: 50rem;
  background-color: $disable;
  position: relative;
  transition: .5s;
  &.on{
    background-color: $primary;
    .switch_btn{
      border: 3px solid $primary;
      left: 100%;
      transform: translateX(-100%);
    }
  }
}
.switch_btn{
  height: 100%;
  aspect-ratio: 1/1;
  position: absolute;
  border: 3px solid $disable;
  top: 0;
  left: 0;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s;
}
.fa-xmark{
  color: $disable;
}
.fa-check{
  color: $primary;
}
.provide_msg{
  margin-left: $sp2;
}
.time_select{
  display: flex;
  gap: $sp1;
  margin-left: $sp4;     
}
</style>

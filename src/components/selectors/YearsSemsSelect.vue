<script setup lang="ts">
  import { ref } from 'vue'

  const mockYearSems = {
    time: '0.42s',
    list: [{ year: '115', sem: '1', link: 'Subj.jsp?format=-2&year=115&sem=1' }, {
      year: '114',
      sem: '2',
      link: 'Subj.jsp?format=-2&year=114&sem=2',
    }],
  }
  const selectedYearSem = ref()


  function itemProps (item) {
    return {
      title:item.year + ' 年  第 ' + item.sem + ' 學期',
    }
  }
</script>

<template>


    <v-select
        v-model="selectedYearSem"

        class="w-full md:w-1/5"
        hide-details
        :item-props="itemProps"
        :items="mockYearSems.list"
        placeholder="選擇學期"
    ></v-select>



</template>

<style scoped>

</style>

<script setup lang="ts">
  import { ref } from 'vue'

  const mockYears = {
    "time": "0.11s",
    "list": [
      {
        "year": "114",
        "sem": "2",
        "code": "2806",
        "name": "互動四",
        "link": "Subj.jsp?format=-4&year=114&sem=2&code=2806"
      },
      {
        "year": "114",
        "sem": "2",
        "code": "2923",
        "name": "互動三",
        "link": "Subj.jsp?format=-4&year=114&sem=2&code=2923"
      },
      {
        "year": "114",
        "sem": "2",
        "code": "3040",
        "name": "互動二",
        "link": "Subj.jsp?format=-4&year=114&sem=2&code=3040"
      },
      {
        "year": "114",
        "sem": "2",
        "code": "3146",
        "name": "互動一",
        "link": "Subj.jsp?format=-4&year=114&sem=2&code=3146"
      },
      {
        "year": "114",
        "sem": "2",
        "code": "3176",
        "name": "互動所",
        "link": "Subj.jsp?format=-4&year=114&sem=2&code=3176"
      },
      {
        "year": "114",
        "sem": "2",
        "code": "3208",
        "name": "職互動所",
        "link": "Subj.jsp?format=-4&year=114&sem=2&code=3208"
      }
    ]
  }
  const selectedYear = ref()
  const sortedYear =[...mockYears.list].toSorted((a, b) => Number(b.code) - Number(a.code) );

  function itemProps (item) {
    return {
      title: item.name,
    }
  }
</script>

<template>

    <v-select
        v-model="selectedYear"
        class="w-full md:w-1/5"
        hide-details
        :item-props="itemProps"
        :items="sortedYear"
        placeholder="選擇年級"
    ></v-select>



</template>

<style scoped>

</style>

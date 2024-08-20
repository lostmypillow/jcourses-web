<script setup>
import { ref } from "vue";
const sem_years = ref([1, 2, 3]);
const select_sem_year = ref("");
const allSemYears = ref();
const allDeps = ref();
const allDepYears = ref()
const selectedDep = ref()
const isTrue = ref(false);
const activeTab = ref();
const selectedYear = ref()
const selectedSem = ref()

const selectedDepYear = ref()

const allCourses = ref()




async function getData(year = "", sem = "", dep_code = "", dep_year_code = "") {
  const yearSemParam = year ? "?year=" + year + "&sem=" + sem : "";
  const depCodeParam = dep_code ? "&dep_code=" + dep_code : "";
  const depYearCodeParam = dep_year_code
    ? "&dep_year_code=" + dep_year_code
    : "";

  const url =
    "http://localhost:8000/courses" +
    yearSemParam +
    depCodeParam +
    depYearCodeParam;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

async function handleClick() {
  allSemYears.value = await getData();
}

async function setActiveTab(index, curr_year, curr_sem) {
  selectedSem.value = curr_sem
  selectedYear.value = curr_year
 
  activeTab.value = index;
  allDeps.value = await getData(curr_year, curr_sem);
}

async function setActiveDep() {

  allDepYears.value = await getData(selectedYear.value, selectedSem.value, selectedDep.value)
}

async function setActiveDepYear() {
  allCourses.value = (await getData(selectedYear.value, selectedSem.value, selectedDep.value, selectedDepYear.value)).courses
  console.log(allCourses.value)
  
}
</script>

<template>
  <div class="navbar bg-base-100">
    <a class="btn btn-ghost text-xl">JCourses</a>
  </div>
  <button @click="handleClick" class="btn btn-primary">Get</button>
  <br />
  <span>Selected: {{ select_sem_year }}</span>
  <div v-if="allSemYears" role="tablist" class="tabs tabs-boxed">
    <a
      v-for="(item, index) in allSemYears?.all_years"
      role="tab"
      :class="['tab', { 'tab-active': activeTab == index }]"
      @click="setActiveTab(index, item.year, item.sem)"
      >{{ item.year }}-{{ item.sem }}</a
    >
  </div>
  <div class="join join-vertical md:join-horizontal w-full">
  <select
  v-model="selectedDep"
  v-if="allDeps" class="select select-bordered w-full " @change="setActiveDep()">
  <option disabled selected>Choose department</option>
  <option v-for="item in allDeps?.deps" :value="item.code">{{item.name}}</option>
</select>

<select
  v-model="selectedDepYear"
  v-if="allDepYears" class="select select-bordered w-full " @change="setActiveDepYear()">
  <option disabled selected>Choose dep year</option>
  <option v-for="item in allDepYears?.all_dep_year_codes" :value="item.code">{{item.name}}</option>
</select>
</div>
<button class="btn">meow</button>


<div v-for="course in allCourses" class="card bg-primary text-primary-content max-w-[4/5] m-4">
  <div v-if="!course.error" class="card-body">



    <h2 class="card-title">{{course.name}}</h2>
    <p>{{course.credits}}</p> <br>
    <p>{{ course.type }}</p><br>
    <p>{{ course.prof }}</p><br>
    <p>{{ course.sun }}</p><br>
    <p>{{ course.mon }}</p><br>
    <p>{{ course.tues }}</p><br>
    <p>{{ course.wed }}</p><br>
    <p>{{ course.thu }}</p><br>
    <p>{{ course.fri }}</p><br>
    <p>{{ course.sat }}</p><br>
    <p>{{ course.classroom }}</p><br>
    <p>{{ course.ppl }}</p><br>
    <p>{{ course.dropped_ppl }}</p><br>
    <p>{{ course.lang }}</p><br>
    <p>{{ course.notes }}</p><br>
    <p>{{ course.with_class }}</p><br>
    <p>{{ course.experiment }}</p><br>
    <p>{{ course.cross_disp }}</p><br>
    <div class="card-actions justify-end">
      <a class="btn" :href="course.link">Link</a>
    </div>
  </div>
</div>


  <!-- <div class=" w-1/4">
    <fieldset>
      <div v-for="(item, index) in allSemYears?.all_years" class="form-control">
        <label class="label cursor-pointer">
          <input
            type="radio"
            name="sem_year"
            class="radio checked:bg-blue-500"
            @change="updateValue"
            :value="index"
          />
          <!--  checked="checked" -->
  <!-- <span class="label-text">{{ item.year }}-{{ item.sem }}</span>
        </label>
      </div>
    </fieldset>
  </div> -->
</template>

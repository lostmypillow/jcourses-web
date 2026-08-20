<script setup>
import {onMounted, ref} from 'vue';
import YearsSemsSelect from "./components/YearsSemsSelect.vue";
const select_sem_year = ref('');
const allSemYears = ref();
const allDeps = ref();
const allDepYears = ref();
const selectedDep = ref();
const activeTab = ref();
const selectedYear = ref();
const selectedSem = ref();

const selectedDepYear = ref();

const allCourses = ref();

async function getData(year = '', sem = '', dep_code = '', dep_year_code = '') {
    const yearSemParam = year ? '?year=' + year + '&sem=' + sem : '';
    const depCodeParam = dep_code ? '&dep_code=' + dep_code : '';
    const depYearCodeParam = dep_year_code ? '&dep_year_code=' + dep_year_code : '';

    const url = 'http://localhost:8000/courses' + yearSemParam + depCodeParam + depYearCodeParam;

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
    selectedSem.value = curr_sem;
    selectedYear.value = curr_year;

    activeTab.value = index;
    allDeps.value = await getData(curr_year, curr_sem);
}

async function setActiveDep() {
    allDepYears.value = await getData(selectedYear.value, selectedSem.value, selectedDep.value);
}

async function setActiveDepYear() {
    allCourses.value = (
        await getData(
            selectedYear.value,
            selectedSem.value,
            selectedDep.value,
            selectedDepYear.value
        )
    ).courses;
    console.log(allCourses.value);
}
const yearsSems = ref()
 onMounted(async ()=> {
   // const response = await fetch('https://n4q4xtsgk54fghy4q3lywgycbi0krhbm.lambda-url.ap-northeast-2.on.aws/ntut/semesters')
   // yearsSems.value = await response.json()
 })
</script>

<template>
  <YearsSemsSelect />
<!--    <div class="p-4 flex flex-col items-center justify-center gap -4">-->
<!--        <div class="navbar bg-base-100">-->
<!--            <a class="btn btn-ghost text-xl"></a>-->
<!--        </div>-->
<!--        <Button @click="handleClick" class="btn btn-primary">Get</Button>-->

<!--        <span>Selected: {{ select_sem_year }}</span>-->
<!--        <Tabs v-if="allSemYears" v-model:value="activeTab">-->
<!--            <TabList>-->
<!--                <Tab-->
<!--                    v-for="(item, index) in allSemYears?.all_years"-->
<!--                    :key="index"-->
<!--                    :value="index"-->
<!--                    @click="setActiveTab(index, item.year, item.sem)"-->
<!--                >-->
<!--                    {{ item.year }}-{{ item.sem }}-->
<!--                </Tab>-->
<!--            </TabList>-->
<!--        </Tabs>-->
<!--        <div class="flex flex-row gap-4">-->
<!--            <Select-->
<!--                placeholder="Choose department"-->
<!--                v-model="selectedDep"-->
<!--                :options="allDeps?.deps"-->
<!--                :option-label="name"-->
<!--                :option-value="code"-->
<!--                @change="setActiveDep()"-->
<!--            />-->

<!--            <Select-->
<!--                v-if="selectedDep"-->
<!--                v-model="selectedDepYear"-->
<!--                @change="setActiveDepYear()"-->
<!--                :options="allDepYears?.all_dep_year_codes"-->
<!--                :option-label="code"-->
<!--                :option-value="name"-->
<!--            />-->
<!--        </div>-->
<!--        <Card v-for="course in allCourses" class="max-w-sm w-full">-->
<!--            <template #title>{{ course.name }}</template>-->
<!--            <template #content>-->
<!--                <h2 class="card-title"></h2>-->
<!--                <p>{{ course.credits }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.type }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.prof }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.sun }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.mon }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.tues }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.wed }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.thu }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.fri }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.sat }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.classroom }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.ppl }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.dropped_ppl }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.lang }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.notes }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.with_class }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.experiment }}</p>-->
<!--                <br />-->
<!--                <p>{{ course.cross_disp }}</p>-->
<!--            </template>-->
<!--            <template #footer>-->
<!--                <a class="btn" :href="course.link">Link</a>-->
<!--            </template>-->
<!--        </Card>-->
<!--    </div>-->
</template>

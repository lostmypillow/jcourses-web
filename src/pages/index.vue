<template>
  <MainLayout>


    <div class="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
      <h1 class="flex text-4xl font-bold">Lost's NTUT</h1>
      <YearsSemsSelect />
      <DepSelect />
      <YearSelect />

      <v-btn
          class="w-full md:hidden"
          color="primary"
          prepend-icon="mdi-filter"
          @click.stop="drawer = !drawer"
      >
        篩選
      </v-btn>
    </div>

    <v-navigation-drawer
        v-model="drawer"
        temporary
    >
      <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <Courses />
  </MainLayout>

</template>

<script lang="ts" setup>
  import {ref} from "vue";
  import Courses from "@/components/Courses.vue";
  import DepSelect from "@/components/selectors/DepSelect.vue";
  import YearSelect from "@/components/selectors/YearSelect.vue";
  import YearsSemsSelect from '@/components/selectors/YearsSemsSelect.vue'
  import MainLayout from "@/layouts/MainLayout.vue";
  const drawer = ref(false)
</script>

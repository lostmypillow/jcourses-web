<script setup lang="ts">
import {computed} from "vue";
import { useDisplay } from 'vuetify'

const courses = {
  "time": "0.02s",
  "list": [
    {
      "code": "357269",
      "name": "研究方法",
      "credits": "1",
      "type": "▲",
      "prof": "林淑玲",
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": "5 6 7",
      "thu": null,
      "fri": null,
      "sat": null,
      "classroom": "六教725(e)",
      "ppl": 50,
      "dropped_ppl": 0,
      "lang": null,
      "link": "ShowSyllabus.jsp?snum=357269&code=11403",
      "notes": "科研825",
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "357270",
      "name": "企業倫理與永續管理",
      "credits": "1",
      "type": "▲",
      "prof": "丁秀儀",
      "sun": null,
      "mons": "3 4",
      "tues": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "classroom": "六教725(e)",
      "ppl": 52,
      "dropped_ppl": 0,
      "lang": "英語",
      "link": "ShowSyllabus.jsp?snum=357270&code=11710",
      "notes": null,
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "359389",
      "name": "論文",
      "credits": "2",
      "type": "▲",
      "prof": null,
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "classroom": null,
      "ppl": 56,
      "dropped_ppl": 0,
      "lang": null,
      "link": null,
      "notes": null,
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "357153",
      "name": "跨文化創造力與創業家策略",
      "credits": "1",
      "type": "★",
      "prof": "劉宛淯",
      "sun": null,
      "mons": null,
      "tues": "5 6 7",
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "classroom": "六教726(e)",
      "ppl": 23,
      "dropped_ppl": 0,
      "lang": "英語",
      "link": "ShowSyllabus.jsp?snum=357153&code=21405",
      "notes": "IMBA和資財所合開",
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "357163",
      "name": "創業與籌資",
      "credits": "1",
      "type": "★",
      "prof": "林冠仲",
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": "2 3 4",
      "thu": null,
      "fri": null,
      "sat": null,
      "classroom": "六教226(e)",
      "ppl": 29,
      "dropped_ppl": 0,
      "lang": "英語",
      "link": "ShowSyllabus.jsp?snum=357163&code=24406",
      "notes": "IMBA和資財所合開",
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "364817",
      "name": "校外實務研究",
      "credits": "1",
      "type": "★",
      "prof": null,
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "classroom": null,
      "ppl": 2,
      "dropped_ppl": 0,
      "lang": null,
      "link": null,
      "notes": null,
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "359572",
      "name": "數位鑑識與調查",
      "credits": "1",
      "type": "★",
      "prof": "林敬皇",
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": null,
      "thu": null,
      "fri": "5 6 7",
      "sat": null,
      "classroom": "科研大樓240e",
      "ppl": 42,
      "dropped_ppl": 1,
      "lang": "英語",
      "link": "ShowSyllabus.jsp?snum=359572&code=12391",
      "notes": "資財所和創新資安合開",
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "357292",
      "name": "個人資料保護與管理",
      "credits": "1",
      "type": "★",
      "prof": "魏銪志",
      "sun": null,
      "mons": null,
      "tues": "2 3 4",
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "classroom": "科研大樓240e",
      "ppl": 36,
      "dropped_ppl": 0,
      "lang": null,
      "link": "ShowSyllabus.jsp?snum=357292&code=12148",
      "notes": "資財所和創新資安合開",
      "with_class": null,
      "experiment": null,
      "cross_disp": "資訊安全微學程"
    },
    {
      "code": "357293",
      "name": "資金管理",
      "credits": "1",
      "type": "★",
      "prof": "吳牧恩",
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": null,
      "thu": "2 3 4",
      "fri": null,
      "sat": null,
      "classroom": "科研大樓825",
      "ppl": 10,
      "dropped_ppl": 0,
      "lang": null,
      "link": "ShowSyllabus.jsp?snum=357293&code=11985",
      "notes": null,
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "357295",
      "name": "財務數值方法",
      "credits": "1",
      "type": "★",
      "prof": "劉亮志",
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": null,
      "thu": "5 6 7",
      "fri": null,
      "sat": null,
      "classroom": "科研大樓240e",
      "ppl": 17,
      "dropped_ppl": 0,
      "lang": "英語",
      "link": "ShowSyllabus.jsp?snum=357295&code=11982",
      "notes": null,
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "357300",
      "name": "區塊鏈與數位資產",
      "credits": "1",
      "type": "★",
      "prof": "黃朝秋\n鍾建屏",
      "sun": null,
      "mons": "5 6 7",
      "tues": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "classroom": "科研哈佛講堂",
      "ppl": 58,
      "dropped_ppl": 0,
      "lang": null,
      "link": "ShowSyllabus.jsp?snum=357300&code=24676",
      "notes": "哈佛/資財四甲、資財所合開",
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "359585",
      "name": "公司治理",
      "credits": "1",
      "type": "★",
      "prof": "陳鴻崑",
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": null,
      "thu": "8 9 A",
      "fri": null,
      "sat": null,
      "classroom": "六教226(e)",
      "ppl": 6,
      "dropped_ppl": 1,
      "lang": "英語",
      "link": "ShowSyllabus.jsp?snum=359585&code=12560",
      "notes": null,
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "359634",
      "name": "金融創新與趨勢",
      "credits": "1",
      "type": "★",
      "prof": "吳牧恩",
      "sun": null,
      "mons": null,
      "tues": "6 7 8",
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "classroom": "科研大樓825",
      "ppl": 15,
      "dropped_ppl": 0,
      "lang": null,
      "link": "ShowSyllabus.jsp?snum=359634&code=11985",
      "notes": "科研823/資財四甲、資財所合開",
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "357302",
      "name": "人工智慧開發與安全",
      "credits": "1",
      "type": "★",
      "prof": "彭祖乙",
      "sun": null,
      "mons": "8 9 A",
      "tues": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "classroom": "科研大樓243e",
      "ppl": 42,
      "dropped_ppl": 1,
      "lang": "英語",
      "link": "ShowSyllabus.jsp?snum=357302&code=12439",
      "notes": "資財四甲、資財所和創新資安合開",
      "with_class": null,
      "experiment": null,
      "cross_disp": "資訊安全微學程"
    },
    {
      "code": "357303",
      "name": "永續投資",
      "credits": "1",
      "type": "★",
      "prof": "陳鴻崑",
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": null,
      "thu": null,
      "fri": "5 6 7",
      "sat": null,
      "classroom": "科研大樓825",
      "ppl": 0,
      "dropped_ppl": 0,
      "lang": "英語",
      "link": "ShowSyllabus.jsp?snum=357303&code=12560",
      "notes": "1週【停開】",
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "357304",
      "name": "深度學習",
      "credits": "1",
      "type": "★",
      "prof": "王貞淑",
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": null,
      "thu": null,
      "fri": "2 3 4",
      "sat": null,
      "classroom": "科研大樓240e",
      "ppl": 25,
      "dropped_ppl": 0,
      "lang": null,
      "link": "ShowSyllabus.jsp?snum=357304&code=11505",
      "notes": null,
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
    {
      "code": "360023",
      "name": "強化學習於財金應用",
      "credits": "1",
      "type": "★",
      "prof": "張庭瑜",
      "sun": null,
      "mons": null,
      "tues": null,
      "wed": null,
      "thu": null,
      "fri": "8 9 A",
      "sat": null,
      "classroom": "科研大樓240e",
      "ppl": 7,
      "dropped_ppl": 1,
      "lang": "英語",
      "link": "ShowSyllabus.jsp?snum=360023&code=12677",
      "notes": "新聘專任教師",
      "with_class": null,
      "experiment": null,
      "cross_disp": null
    },
  ]
}

const { smAndDown } = useDisplay()


const headers = [
  { title: '課號', value: 'code' },
  { title: '課程名稱', value: 'name' },
  { title: '學分', value: 'credits' },
  { title: '修', value: 'type' },
  { title: '教師', value: 'prof' },
  {
    title: '上課時間',
    key: 'schedule',
    // The value function computes a single string from the individual day keys
    value: (item) => {
      const scheduleMap = [
        { label: '日', val: item.sun },
        { label: '一', val: item.mons },
        { label: '二', val: item.tues },
        { label: '三', val: item.wed },
        { label: '四', val: item.thu },
        { label: '五', val: item.fri },
        { label: '六', val: item.sat }
      ];

      return scheduleMap
          .filter(day => day.val)
          .map(day => `${day.label}: ${day.val}`)
          .join(' | ');
    }
  },
  { title: '教室', value: 'classroom' },
  { title: '人', value: 'ppl' },
  { title: '撤', value: 'dropped_ppl' },
  { title: '授課語言', value: 'lang' },
  { title: '教學大綱與進度表', value: 'link' },
  { title: '備註', value: 'notes' },
  { title: '隨班附讀', value: 'with_class' },
  { title: '實驗實習', value: 'experiment' },
  { title: '跨領域', value: 'cross_disp' }
];
const isMobile = computed(() => smAndDown.value)
const computedHeaders = computed(() => {
  if (isMobile.value) {
    // Show fewer headers on mobile screens
    return [...headers].filter(header => ['code', 'name'].includes(<string>header.value))

  }
  // Show everything on desktop
  return headers
})

const hiddenHeaders = computed(() => {
  if (isMobile.value) {
    return [...headers].filter(header => !['code', 'name'].includes(header.value))
  }
  return []
})

const weekReference = {
  "sun": "日",
  "mons": "一",
  "tues": "二",
  "wed": "三",
  "thu": "四",
  "fri": "五",
  "sat": "六",
}
const hourReference = {
  "1": "08:10 - 09:00",
  "2": "09:10 - 10:00",
  "3": "10:10 - 11:00",
  "4": "11:10 - 12:00",
"N": "12:10 - 13:00",
"5": "13:10 - 14:00",
"6": "14:10 - 15:00",
"7": "15:10 - 16:00",
"8": "16:10 - 17:00",
"9": "17:10 - 18:00",
"A": "18:30 - 19:20",
"B": "19:20 - 20:10",
"C": "20:20 - 21:10",
"D": "21:10 - 22:00"
}
const generateReference = (obj) => {
 let resultString = ''

  const targetKeys = ["sun", "mons", "tues","wed","thu","fri","sat"];

// Method 1: for...of loop (best for early exit with break/continue or async operations)
  for (const key of targetKeys) {
    if (Object.hasOwn(obj, key) && obj[key] !== null ) {
      console.log("found string", weekReference[key])
      resultString += (weekReference[key] + ' ')
      const sourceTimeString = obj[key].split(' ')
      for (const timeSlot of sourceTimeString) {
        resultString +=( hourReference[timeSlot] + ', ')
      }
      resultString += ''
    }
  }
  console.log(resultString)

  resultString = resultString.slice(0, -1)
  return resultString
}
</script>

<template>

  <v-row gap="16" class="w-full">
    <v-col
        v-for="course in courses.list"
        :key="course.code"
        cols="12"
        sm="4"
    >
      <v-card>
        <template v-slot:title>
      {{course.name}}
        </template>

        <template v-slot:subtitle>
          {{course.code}}
        </template>

        <template v-slot:text>
          <v-row gap="0">
            <v-col>
              <label class="font-semibold">學分:</label>
              {{ course.credits }}
            </v-col>
            <v-col>
              <label class="font-semibold">種類:</label>
             {{course.type}}
            </v-col>

            <v-responsive width="100%"></v-responsive>

            <v-col>
              <label class="font-semibold">時間:</label>
              {{generateReference(course)}}
            </v-col>


            <v-responsive width="100%"></v-responsive>

            <v-col>
              <label class="font-semibold">地點:</label>
              {{course.classroom}}
            </v-col>

            <v-col>
              <label class="font-semibold">教師:</label>
              {{course.prof}}
            </v-col>

          </v-row></template>

        <template v-slot:actions>
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                  v-bind="activatorProps"
                  color="surface-variant"
                  class="w-full"
                  text="教學大綱與進度表"
                  variant="flat"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Dialog">
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                      text="Close Dialog"
                      @click="isActive.value = false"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </template>
      </v-card>
    </v-col>
  </v-row>



<!--  <v-data-table density="compact" :headers="computedHeaders" item-value="code"  :items="courses.list" :show-expand="isMobile" expand-strategy="single">-->
<!--    <template #item.link="{ value }">-->
<!--      <a :href="value" target="_blank">View Syllabus</a>-->
<!--    </template>-->

<!--    <template #item.credits="{ value }">-->
<!--      <v-chip :color="value > 2 ? 'primary' : 'grey'" size="small">-->
<!--        {{ value }} Credits-->
<!--      </v-chip>-->
<!--    </template>-->
<!--    <template v-slot:expanded-row="{ columns, item }">-->
<!--      <tr>-->
<!--        <td :colspan="columns.length" class="pa-0">-->
<!--          <v-container fluid class="pa-4 bg-grey-lighten-4">-->
<!--            <v-row dense>-->
<!--              <v-col-->
<!--                  v-for="header in hiddenHeaders"-->
<!--                  :key="header.title"-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="4"-->
<!--                  class="d-flex align-start py-1"-->
<!--              >-->
<!--                <div style="min-width: max-content;">-->
<!--                  <strong>{{ header.title }}:</strong>-->
<!--                </div>-->
<!--                <div class="pl-2" style="overflow-wrap: break-word; word-break: break-word; flex: 1;">-->
<!--                  <template v-if="header.value === 'link' && item[header.value]">-->
<!--                    <a :href="item[header.value]" target="_blank">View Syllabus</a>-->
<!--                  </template>-->
<!--                  <template v-else>-->
<!--                    {{ typeof header.value === 'function' ? header.value(item) : (item[header.value] || '-') }}-->
<!--                  </template>-->
<!--                </div>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </v-container>-->
<!--        </td>-->
<!--      </tr>-->
<!--    </template>-->
<!--  </v-data-table>-->

</template>

<style scoped>

</style>
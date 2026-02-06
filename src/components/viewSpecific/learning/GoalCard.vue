<template>
  <div class="card">
    <h3>{{ plan.title }}</h3>

    <section class="section">
      <h4>Langsigtede mål</h4>
      <ul>
        <li
          v-for="goal in plan.longTermGoals"
          :key="goal.id"
        >
          {{ goal.title }}
        </li>
      </ul>
    </section>

    <section class="section" v-if="horizon !== 'all'">
      <h4>{{ horizonLabel }}</h4>
      <ul>
        <li
          v-for="goal in plan.plan[horizon]"
          :key="goal.id"
        >
          {{ goal.title }}
        </li>
      </ul>
    </section>

    <section class="section" v-else>
      <h4  style="color:aquamarine; font-size: 20px; margin-top: 30px; margin-bottom: 20px;">Læringsplan</h4>

      <div
        v-for="(goals, key) in plan.plan"
        :key="key"
        class="subsection"
      >
        <strong>{{ horizonMap[key] }}</strong>
        <ul>
          <li
            v-for="goal in goals"
            :key="goal.id"
          >
            {{ goal.title }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LearningPlan, TimeHorizon } from '@/types/learning'

const props = defineProps<{
  plan: LearningPlan
  horizon: 'all' | TimeHorizon
}>()

const horizonMap: Record<TimeHorizon, string> = {
  short: 'Kort sigt (0-1 måned)',
  mid: 'Mellemlang sigt (1-3 måneder)',
  long: 'Lang sigt (3+ måneder)',
}

const horizonLabel = computed(() => {
  if (props.horizon === 'all') return ''
  return horizonMap[props.horizon]
})
</script>

<style scoped>
.section {
  margin-top: 12px;
}

.section h4 {
  margin-bottom: 6px;
  color: slateblue;
}

.subsection {
  margin-top: 8px;
}

ul {
  padding-left: 18px;
}

li {
  margin-bottom: 4px;
  color: #00ffc8;
}
</style>

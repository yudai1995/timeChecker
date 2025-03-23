<script lang="ts">
import { isTimeInRange } from '../utils/timeUtils'
import type { Zero2TwentyThreeType } from '../utils/Zero2TwentyThreeType'

export default {
  data() {
    return {
      options: Array.from({ length: 24 }, (_, i) => ({ label: String(i), value: i })), // 0～23の配列を作成
      startTime: 0 as Zero2TwentyThreeType,
      endTime: 23 as Zero2TwentyThreeType,
      targetTime: null as Zero2TwentyThreeType | null,
      result: false,
    }
  },

  // ウォッチャー：https://ja.vuejs.org/guide/essentials/watchers.html
  watch: {
    startTime: 'checkTime',
    endTime: 'checkTime',
    targetTime: 'checkTime',
  },

  methods: {
    checkTime() {
      if (this.startTime === null || this.endTime === null || this.targetTime === null) {
        return
      }

      this.result = isTimeInRange(this.targetTime, this.startTime, this.endTime)
    },
  },
}
</script>

<template>
  <div class="timeCheck">
    <div class="description"><p>範囲内の時刻かどうかをチェックします</p></div>

    <div class="formGroup">
      <label for="startTimeInput">開始時刻</label>

      <select id="startTimeInput" v-model="startTime">
        <option disabled value="">時刻を選択してください</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>

    <div class="formGroup">
      <label for="endTimeInput">終了時刻</label>

      <select id="endTimeInput" v-model="endTime">
        <option disabled value="">時刻を選択してください</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>

    <div class="formGroup">
      <label for="targetTimeInput">チェック対象時刻</label>

      <select id="targetTimeInput" v-model="targetTime">
        <option disabled value="">時刻を選択してください</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>

    <div class="result">
      <p v-if="!result">時刻を選択すると結果が出力されます</p>
      <p v-if="result">
        {{ targetTime }}時は{{ startTime }}時 ～ {{ endTime }}時の{{
          result ? '範囲内です' : '範囲外です'
        }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.timeCheck {
  min-height: 400px;
  margin-top: 40px;
}
.description {
  margin-bottom: 20px;
  p {
    font-size: 14px;
  }
}

.formGroup {
  margin-bottom: 10px;

  label,
  select {
    display: block;
  }

  label {
    font-size: 0.9rem;
    color: var(--vt-c-indigo);
  }

  select {
    width: 100%;
    padding: 8px 10px;
    margin-top: 4px;
    border: 1px solid var(--color-border);
    border-radius: 0.25rem;

    &:focus {
      outline: none;
      border-color: var(--vt-c-indigo);
    }
  }
}

.result {
  text-align: center;
  font-size: 18px;
}

@media (min-width: 1024px) {
  .timeCheck {
    margin-top: 0;
  }

  .formWrapper {
    display: flex;
    justify-content: center;
  }

  .formGroup {
    margin-right: 20px;
  }
}
</style>

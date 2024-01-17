<template>
  <div>
    <label class="inputWrapper"
      > <h2 class="labelHeader">{{ props.label }}</h2>
      <input class="inputField"
        :type="props.type"
        v-model="model"
        :name="props.label"
        :placeholder="props.placeholder"
        required
      />
    </label>
  </div>
</template>

<script setup lang="ts">
const model = defineModel()
const props = defineProps({
  label: String,
  placeholder: String,
  type: String
})
</script>

<style scoped>
.inputWrapper {
  display: flex;
  flex-direction: column;
}

.inputField {
  padding: 5px;
  background-color: #192a34;
  border: solid #294656;
  border-radius: 5px;
  color: white;
}

.inputField:focus {
  outline: solid #fbdc58;
}

.labelHeader {
  color: #58c2fb;
}
</style>

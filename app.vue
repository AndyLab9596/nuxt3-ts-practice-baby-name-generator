<script setup lang="ts">
import { GenderType, PopularityType, LengthType, GenderObj, PopularityObj, LengthObj, nameDataArray } from '@/data-names';

interface OptionState {
  gender: GenderType;
  popularity: PopularityType;
  length: LengthType;
}

const options = reactive<OptionState>({
  gender: 'Girl',
  popularity: 'Unique',
  length: 'Long',
})

const computeSelectedName = () => {
  const filterNames = nameDataArray
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if (name.length === LengthObj.ALL) return true;
      else return name.length === options.length
    })

  selectedName.value = filterNames.map((name) => name.name);
}

const selectedName = ref<string[]>([]);

const optionsArray = [
  {
    title: 'Choose a gender',
    category: 'gender',
    buttons: [GenderObj.GIRL, GenderObj.UNISEX, GenderObj.BOY],
  },
  {
    title: "Choose the name's popularity",
    category: 'popularity',
    buttons: [PopularityObj.TRENDY, PopularityObj.UNIQUE],
  },
  {
    title: "Choose the name's length",
    category: 'length',
    buttons: [LengthObj.ALL, LengthObj.LONG, LengthObj.SHORT],
  }
];

const removeName = (index: number) => {
  const filteredNames = [...selectedName.value];
  filteredNames.splice(index, 1);
  selectedName.value = filteredNames;
}

</script>

<template>
  <div class="container">
    <h1>baby name generator</h1>
    <p>choose your options and click the "Find Names" button belows</p>
    <div class="options-container">
      <Option v-for=" option in optionsArray " :key="option.title" :option="option" :options="options" />
      <button class="primary" @click="computeSelectedName">Find Names</button>
    </div>
    <!-- Card Names -->
    <div class="cards-container">
      <CardName v-for="(name, index) in selectedName" :key="name" :name="name" @remove="() => removeName(index)" :index="index" />
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

.container h1 {
  font-size: 3rem;
  text-transform: capitalize;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}


.primary {
  background-color: rgb(249, 87, 89);
  color: #fff;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}
</style>

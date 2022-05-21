<script setup lang="ts">
import { GenderType, LengthType, PopularityType } from '~~/data-names';

interface OptionProps {
    option: {
        title: string;
        category: string;
        buttons: string[];
    };
    options: {
        gender: GenderType;
        popularity: PopularityType;
        length: LengthType
    }
}

const props = defineProps<OptionProps>();

</script>

<template>
    <div class="option-container">
        <h4>
            {{ option.title }}
        </h4>
        <div class="option-buttons">
            <button v-for="button in option.buttons" :key="button" :class="{
                'option-active': options[option.category] === button,
                'option-left': (option.buttons).indexOf(button) === 0,
                'option-right': (option.buttons).indexOf(button) === (option.buttons.length - 1)
            }" class="option" @click="options[option.category] = button">
                {{ button }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.option-container {
    margin-bottom: 2rem;
}

.option {
    background-color: #fff;
    outline: 0.15rem solid rgb(249, 87, 89);
    border: none;
    padding: 0.75rem;
    width: 12rem;
    font-size: 1rem;
    color: rgb(27, 60, 138);
    cursor: pointer;
    font-weight: 200
}

.option-left {
    border-radius: 1rem 0 0 1rem;
}

.option-right {
    border-radius: 0 1rem 1rem 0;
}

.option-active {
    background-color: rgb(249, 87, 89);
    color: #fff;
}
</style>
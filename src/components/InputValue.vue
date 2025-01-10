<template>
    <div class="mb-3">
        <label for="nameInput" class="form-label">Nome</label>
        <input
            type="text"
            class="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            name="nome"
            required
            v-model="value"
            @input="
                () => {
                    isValidate = isValue(value);
                }
            "
        />
        <div id="nameHelp" class="form-text">
            <span v-if="!isValidate"> Nome invalido</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { isValue } from "@/core/helpers/validator";

defineProps({
    value: {
        type: [String, Number],
        default: undefined,
    },
});

const isValidate = ref(true);
</script>

<style scoped></style>

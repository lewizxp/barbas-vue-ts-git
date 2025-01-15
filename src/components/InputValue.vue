<template>
    <div class="mb-3">
        <label :for="`${props.name}Input`" class="form-label">
            {{ props.name }}
        </label>
        <input
            v-model="value"
            type="text"
            class="form-control"
            :id="`${props.name}Input`"
            :aria-describedby="`${props.name}Help`"
            :required="props.required"
            @blur="
                () => {
                    isValidate = isValue(value) || !props.required;
                }
            "
        />
        <div
            :id="`${props.name}Help`"
            class="form-text"
            :class="!isValidate ? '' : 'notMessage'"
        >
            <span v-if="!isValidate">{{ props.message }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, defineEmits, defineProps } from "vue";

import { isValue } from "@/core/helpers/validator";

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: undefined,
    },
    message: String,
    name: String,
    required: {
        type: Boolean,
        default: false,
    },

});

const emit = defineEmits(["update:modelValue"]);

const isValidate = ref(true);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});
</script>

<style scoped>
.form-text {
    font-size: 12px;
    padding: 0;
    text-align: right;
    color: red;
}
.form-text.notMessage {
    padding: 10px 0;
}
</style>

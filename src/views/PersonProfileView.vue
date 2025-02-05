<template></template>
<script setup lang="ts" >

import{onMounted,ref } from "vue";
import router from "@/router";
import{personService} from "@/core/service/person.service";
import{Person } from "@/core/domain/Person";

const person = ref<Person | undefined>();
onMoutend(()=>{

const idRouter = router.currentRoute.value.params.id.toString();
console.log(">>>", idRouter);

});


</script>
<style></style>
<template>
  <div>
    <cool-table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoolTable from "@/components/CoolTable.vue";

export default defineComponent({
  name: "Home",
  components: {
    CoolTable,
  },
});
</script>

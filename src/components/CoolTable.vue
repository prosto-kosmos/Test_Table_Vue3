<template>
  <div>
    <div class="controls">
      <InputNumber v-model="lines" mode="decimal" />
      <Button label="Обновить" @click="updateTable()" />
    </div>
    <div class="card">
      <DataTable
        :value="dataSource"
        class="p-datatable-sm"
        responsiveLayout="scroll"
      >
        <template #header> Table </template>
        <Column field="interface" header="Interface">
          <template #body="slotProps">
            <InputSwitch v-model="slotProps.data.interface" />
          </template>
        </Column>
        <Column field="status" header="Status"></Column>
        <Column field="speed" header="Speed"></Column>
        <Column field="mode" header="Mode">
          <template #body="slotProps">
            <Dropdown
              v-model="slotProps.data.mode"
              :options="mode"
              optionLabel="name"
              optionValue="code"
            />
          </template>
        </Column>
        <Column field="fec" header="FEC">
          <template #body="slotProps">
            <Dropdown
              v-model="slotProps.data.fec"
              :options="fec"
              optionLabel="name"
              optionValue="code"
            />
          </template>
        </Column>
        <Column field="rxPower" header="Quantity"></Column>
        <Column field="txPower" header="Quantity"></Column>
        <Column field="txBias" header="Quantity"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TableData, Mode, Fec } from "@/interface/table-interface";

export default defineComponent({
  name: "CoolTable",
  data() {
    return {
      dataSource: new Array<TableData>(),
      lines: 5,
      mode: [
        { name: "Force Up", code: Mode.forceUp },
        { name: "Normal", code: Mode.normal },
        { name: "Loopback", code: Mode.loopback },
      ],
      fec: [
        { name: "None", code: Fec.none },
        { name: "FC", code: Fec.fc },
        { name: "RS", code: Fec.rs },
      ],
    };
  },
  methods: {
    updateTable(): void {
      this.dataSource = [];
      for (let i = 0; i < this.lines; i++) {
        this.dataSource.push({
          interface: true,
          status: "Up",
          speed: "10G",
          mode: Mode.normal,
          fec: Fec.none,
          rxPower: "10dBm",
          txPower: "10dBm",
          txBias: "10mA",
        });
      }
    },
  },
  mounted() {
    this.updateTable();
  },
});
</script>

<style scoped lang="scss">
.controls {
  padding: 15px;
}
</style>

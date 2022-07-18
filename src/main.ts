import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch";
import Dropdown from "primevue/dropdown";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("InputNumber", InputNumber);
app.component("Button", Button);
app.component("InputSwitch", InputSwitch);
app.component("Dropdown", Dropdown);
app.mount("#app");

import cfiTable from "../../components/ui/cfi-table.vue";
import cfiTabs from "../../components/ui/cfi-tabs.vue";
import cfiButton from "../../components/ui/cfi-button.vue";

export const ServiceComponents = {
  button: {
    component: cfiButton,
    fetchData: false,
    parse: (decorations) => {
      return decorations.reduce((list, decoration) => {
        const { type, data } = decoration;
        return {
          ...list,
          [type]: data.value,
        };
      }, {});
    },
  },
  list: {
    component: cfiTable,
    fetchData: true,
    parse: (decorations) => {
      return decorations.reduce((list, decoration) => {
        const { type, data } = decoration;
        const headers = data.columns;
        return {
          ...list,
          headers,
          actions: data.actions,
        };
      }, {});
    },
  },
  tabs: {
    component: cfiTabs,
    fetchData: true,
    parse: (decorations) => {
      return decorations.reduce((list, decoration) => {
        const { type, data } = decoration;
        const headers = data.columns;
        return {
          ...list,
          headers,
        };
      }, {});
    },
  },
};

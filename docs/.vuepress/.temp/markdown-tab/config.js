import { CodeTabs } from "E:/CS/blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_0551161138985c9773d85fceec630cfa/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/CS/blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_0551161138985c9773d85fceec630cfa/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/CS/blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_0551161138985c9773d85fceec630cfa/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

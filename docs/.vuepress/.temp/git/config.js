import { GitContributors } from "E:/CS/blog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_ff1c6e60d23695bb94a28db38022ef49/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "E:/CS/blog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_ff1c6e60d23695bb94a28db38022ef49/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};

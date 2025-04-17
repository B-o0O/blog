import comp from "E:/CS/blog/docs/.vuepress/.temp/pages/posts/article6.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article6.html\",\"title\":\"Article 6\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-06T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag A\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1744823370000,\"contributors\":[{\"name\":\"Bobo\",\"username\":\"Bobo\",\"email\":\"3327943945@qq.com\",\"commits\":1,\"url\":\"https://github.com/Bobo\"}],\"changelog\":[{\"hash\":\"9ad05e0ff9b00148bfdf42bd46d63111cb1ad52a\",\"time\":1744823370000,\"email\":\"3327943945@qq.com\",\"author\":\"Bobo\",\"message\":\"init blog\"}]},\"filePathRelative\":\"posts/article6.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

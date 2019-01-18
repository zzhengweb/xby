import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
      font: inherit;
      font-family:"Microsoft YaHei","Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1547788853154'); /* IE9 */
    src: url('./iconfont.eot?t=1547788853154#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1547788853154') format('woff'),
    url('./iconfont.ttf?t=1547788853154') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1547788853154#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`
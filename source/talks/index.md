---
title: 即刻短文
date: 2020-07-22 22:06:17
comments: true
aside: false
top_img: false
type: talk
---
**若无推文显示，请刷新页面**
**头像因技术原因暂时无法加载**
<head>
  <!-- ... -->
  <script src="//cdn.jsdelivr.net/gh/Uyoahz26/daodao@main/dist/qexo-dao.min.js"></script>
  <!-- ... -->
</head>
<body>
  <!-- ... -->
  <div id="qexoDaoDao"></div>
  <script>
    qexoDaodao?.init({
      el: "#qexoDaoDao",
      avatar: "",
      name: "Sixth",
      limit: 10,
      useLoadingImg: false,
      baseURL: "https://www.shoutai.space",
    }).then(function (){
      console.log("qexoDaodao加载完成");
    })
  </script>
</body>


var posts=["2025/09/05/初来乍到/","2025/09/04/壁纸分享/","2025/09/05/转载：为什么想要改变性别的大多是男生？/","2025/09/04/非常牛逼的hexo教程/","2025/09/05/转载：县城漫展，一地鸡毛/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
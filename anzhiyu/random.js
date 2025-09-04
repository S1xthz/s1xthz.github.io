var posts=["2025/09/04/壁纸分享/","2025/09/04/非常牛逼的hexo教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
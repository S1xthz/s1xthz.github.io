var posts=["2025/09/04/非常牛逼的hexo教程/","2025/09/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
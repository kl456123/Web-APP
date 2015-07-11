
//添加喜爱影片到胶卷系列
function addToLike(){
  var imgEle = this;
  var likeImgs = document.getElementById('like-left'); //likeImgs要添加进的div
  var numLikeImgs = 0;
  for(var i = 0; i < likeImgs.childNodes.length; i++){   //计算添加喜欢影片的数量 最多可加3个影片
    if(likeImgs.childNodes[i].nodeName.toLowerCase() == 'img'){
      numLikeImgs = numLikeImgs + 1;
    }
  };
  if(numLikeImgs >=5){
    alert(" 最多可以添加五张噢~. Try Click \' CLICK ME \' ");
    return;
  }
  likeImgs.appendChild(imgEle);  //添加所选影片到喜爱胶卷中，同时取消此img的onclick事件属性，避免二次点击
  imgEle.onclick = null;

};

//重新开始
function startOver(){
  console.log('get startOver')
  var likeImgs = document.getElementById('like-left');
  //var imgDiv = document.getElementById('c-one');
  var idArr = ['c-one', 'c-two', 'c-three', 'c-four'];
  while(likeImgs.hasChildNodes()){
    var firstChild = likeImgs.firstChild;
    if(firstChild.nodeName.toLowerCase() == 'img'){
      idArr.forEach(function(o, i){
        var imgDiv = document.getElementById(idArr[i]);
        var imgs = imgDiv.getElementsByTagName('img');
        if(imgs.length < 3){
          imgDiv.appendChild(firstChild);
        }
      });
    }else{
      likeImgs.removeChild(firstChild);
    }
  };
  addOnclickHandles();
};

//给每张图片添加onclick事件处理
function addOnclickHandles(){
  var idArr = ['c-one', 'c-two', 'c-three', 'c-four'];
  idArr.forEach(function(o, i){
    console.log(o, i);
    var imgDiv = document.getElementById(idArr[i]);  //imgs所在的div
    var imgs = imgDiv.getElementsByTagName('img');  //所有imgs []
    for(var i = 0; i < imgs.length; i++){           //每张img添加onclick事件
      imgs[i].onclick = addToLike;
    };
  });
  console.log('add onclick success');
};
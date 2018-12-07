console.log('collect action');

function strokeRoundeRect(ctx,x,y,width,height,radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius,y);
  ctx.arcTo(x + width,y ,x + width ,y + height ,radius );
  ctx.arcTo(x + width,y + height ,x ,y + height ,radius );
  ctx.arcTo(x ,y + height ,x  ,y  ,radius );
  ctx.arcTo(x ,y ,x + width ,y  ,radius );
  ctx.stroke();
}

window.onload = function(){
  var canvas = document.getElementById('test_canvas');
  //２次元の場合
  var ctx = canvas.getContext('2d');
  // ３次元要素の場合
  // var ctx = canvas.getContext('webgl');
  // 枠
  ctx.strokeRect(50,60,200,100);
  //塗りつぶす
  ctx.fillRect(50,40,120,90);
  //透明
  ctx.clearRect(90,65,40,40);
  //三角形
  ctx.beginPath();
  ctx.moveTo(60,10);
  ctx.lineTo(110,100);
  ctx.lineTo(10,100);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(60,10);
  ctx.lineTo(110,210);
  ctx.lineTo(10,210);
  ctx.fill();
  //circle
  ctx.closePath();
  ctx.arc(400,100,80,0,2*Math.PI,true);
  ctx.closePath();
  ctx.stroke();
  //ctx.beginPath();

  strokeRoundeRect(ctx,150,10,100,80,30);


}

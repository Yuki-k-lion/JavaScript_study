function fact(n) {
    if (n<=1) return n;
    return n*fact(n-1);
}
for (var i = 1; i < 10; i++) {
  console.log(i + "! = " + fact(i));
}

var sym1 = Symbol.for("club");
var sym2 = Symbol("club");
console.log(Symbol.keyFor(sym1));
console.log(Symbol.keyFor(sym2));

var a = 2, b = 3;
console.log(`${a} + ${b} = ${a + b}`);
var now = new Date();
console.log(`今日は${now.getMonth()+1}月${now.getDate()}日です。`);

var card = {"suit": "hart", 'rank':"A"}
card.value = 14
//add propaty
console.log(card);

delete card.rank;
//delete propaty
console.log(card);

console.log("suit" in card);
//propaty present?
console.log("toSrting" in card);
//継承している全てのプロパティから見つけてくる。

function dist(p,q) {
  var dx = q.x - p.x;
  var dy = q.y - p.y;
  return Math.sqrt(dx*dx + dy*dy);
}

var p1  = {x:1,y:1};
var p2  = {x:4,y:5};
var d   = dist(p1,p2);
console.log('dist:' + d);

//ブロックスコープ
{
  let x = 'inner scope';
  console.log(x);
  const c = 2;
  //再代入不可。定数。オブジェクトなら変更できる。
}

//オブジェクトのプロパティのうち、値が関数値のものをメソットよ呼ぶ。
var circle = {
    center: {x:1.0, y:2.0},
    radius: 2.5,
    area: function(){
      return Math.PI*this.radius*this.radius;
    }
}

// classの代わりにコンストラクタを用いる
function Card(suit,rank) {
    this.suit = suit;
    this.rank = rank;
}
var card = new Card('ハート','A');
console.log(card);

//Date constracter
var now = new Date();
console.log(now);
//you can set a date
var then = new Date(2009,2,21);
console.log(then);
//計算血の中ではms単位の整数型に変換される
var elapsed = now - then;
console.log(elapsed);
//応用として、プログラムの実行時間をミリビョウで計測できる。

//examples
now.getFullYear();
now.getMonth();//１月を０とした数値
now.getDate();
now.getHours();
now.getMinutes();
now.getSeconds();
now.getMilliseconds();
now.toString();
now.toLocaleString(); //所在地での日時
now.toLocaleDateString();
now.toLocaleTimeString();
now.getUTCHours();//協定世界時での時刻
now.toUTCString();

//native object is difine in ECMAScript
//or host object ex.DOM

var ary = new Array(2,344,6);
var ary_enp = new Array(2);
console.log(ary);
console.log(ary_enp);

//配列の追加と削除
ary.push(22);
console.log(ary);
console.log(ary.length);
delete ary[1];
console.log(ary);
console.log(ary.length);
//削除しても変化しない。
ary[6] = 1234;
console.log(ary);
//Jsに置いて、配列はオブジェクトである。（疎な配列）
//存在確認
for(var i in ary) console.log(i);
ary.hasOwnProperty('4');
ary.hasOwnProperty('8');

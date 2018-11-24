console.log(1 + null);
//null=> 0
a = 1;
b = ++a;
//b=2,a=2
c = a++ + 2;
//c=4,a=3

console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.abs(-23));

//プリミティブ値をオブジェクトに変換
var msgObj = new String("Everything is practice");
console.log(msgObj.length);
console.log(msgObj.charAt(3));
//実は自動的に、オブジェクトに変換される。p110
var msg = "Everything is practice";
console.log(msg.length + msg.charAt(3));

//左右のオペランドの型が等しい場合
//オブジェクトの値が等しいかどうかは、参照先が等しいかどうかの判定
var obj_a = [1,2,3];
var obj_b = [1,2,3];
var c = a;
console.log(a == b);
console.log(a == c);

//&& || a 論理値ではなく、最後に評価した値を返す。
//そのため、論理和演算子は、複数の値の候補の中から、null,undefined出ない値を選びたい時によく使われる。
var time = time_interval || animationSettings.time || 33;
/*
time_intervalがてイフィされている場合は、この変数のあたいが利用される。
定義されていない場合は、animationSettingsオブジェクトのプロパティが利用される。
このプロパティも定義されていない場合は、定数が利用される。
*/

//関数の初期値セットにも使われる。
function f(x) {
  x = x || 200;
}

//データ型を示す。
var type_s = "ABC";
console.log(typeof type_s);

//明示的な型変換
parseFloat('2.34');
parseInt('33.66 ');

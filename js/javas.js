// for (i = 0; i <= 100; i++) {
//   document.write(i);
//   document.write('<br>');
// }

// let count = 0;

// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     count++;
//     document.write(i + ' ,');
//   }
// }

// document.write('<br>3의 배수는'+ count + '입니다.')

// let fruit = ['바나나', '사과', '배']
//             // [0:바나나, 1:사과, 2:배]


// for(i in fruit){
//   document.write('<br>'+i+', ') ;
// }

// for (i = 0; i < fruit.length; i++){
//   document.write(i+',');
// }
// for ( i of fruit){
//   document.write(i+',');

// }

// let pg = ['html', 'css', 'javascript']
// for(i of pg){
  // document.write('<br>');
  // document.write(i);
// }

// for (i = 0; i <= 3; i++){
//   document.write(i + ', ');
// }

// document.write('<br>');

// let t = prompt('숫자를 입력하세요');
// while (t <=3){
//   document.write(t + ',');
//   t++
// }

// // do{}while()
// let k = 0;
// do{
//   document.write(k + ',')
//   k++
// } while(k <= 3);
// do while는 실행수 조건을 봅니다.


// let a = 0;
// while (confirm('계속 실행 하시겠습니까?')){
//   alert(`${a}번째 출력`);
//   a++;
// }
// while문은 조건문을 먼저 확인하고 실행합니다.


// 함수!! function
// 각 명령의 시작과 끝을 명확하게 구별할 수 있다.
// 함수에 별도의 이름을 붙이면 같은 기능이 필요할 때마다 해당 함수를 실행 할 수 있다.

let today = new Date();   
document.write(today);

document.write('<br>');

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일

document.write(year + '/' + month + '/' + date);
document.write('<br>');
document.write(day);

document.write('<br>');

// function name1(){
//   for(i=0; i<=3; i++){
//     document.write(i+',');
//   }
//   document.write('<br>');
// }

// function sum(a,b,d){
//   //a+b=c
//   let c = a+b+d;
//   document.write(`<p>${a} + ${b} = ${c}</p>`);

// }
// sum('너', '나', '우리')
// sum(2,3,4);
// sum(2,4,3);
// sum(200,50,4);

// var sum =function (a,b){
//   return a + b;
// }
// var add = sum(2,3);
// document.write("add : " + add);
// var add1 = sum(2,3);
// var add2 = sum(3,4);
// document.write('<p>'+'add : ' + add1 +'</p>');
// document.write('add : ' + add2);

function addNum(a,b){
  var c = a + b;
  // document.getElementById('add').innerHTML = c;
  document.querySelector('#add').innerHTML = c;
}

function tab1( ){
  document.getElementById('tab1_txt').style.display = 'block';
  document.getElementById('tab2_txt').style.display = 'none';
  document.getElementById('tab2_txt').style.backgroundColor = '#555';
}
function tab2(){
  document.querySelector('#tab1_txt').style.display = 'none';
  document.querySelector('#tab2_txt').style.display = 'block';
}
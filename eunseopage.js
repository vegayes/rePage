// JS 정리

// 1) innerText / innerHTML 

// <innerText>
// - 내용을 읽어올 때 태그는 모두 무시함.
// - 내용을 변경할 때 태그는 문자열 자체로 해석됨. (태그 해석x)

// <innerHTML>
// 내용을 읽어올 때 태그+속성도 모두 포함함.
// 내용을 변경할 때 HTML 요소로 해석됨(태그 해석 O)

// 2) window 객체
// aleart("내용")
// confirm("내용")
// prompt("내용")

// 3) 요소 접근
// id : document.getElementByID("id속성값");
// class : document.getElementByClassName("class 속성값");
// name : document.getElementByName("name 속성값");
// tag : document.getElementByTagName("태그명");
// CSS 선택자 (여러개 하나 접근) : document.querySelector("css 선택자");
// CSS 선택자 (여러개 모두 접근) : document.querySelectorAll("css 선택자");
 

// value : input 영향
// innerText : Element 속성














//  JS 이벤트 종류 

// 마우스 이벤트
// 1) click 
// 2) mouseover
// 3) mouse move (마우스가 움직였을 때)

// 키 이벤트
// 1) keydown (키를 눌렸을 때)
// 2) keyup (키를 떼었을 때)
// 3) keypress (키를 누른상태)

// 폼 이벤트 
// 1) focus 요소에서 포커스가 이동되었을 때 
// 2) blur 요소에서 포커스가 벗어났을 때 
// 3) change 요소에서 값이 변경 되었을 때 
// 4) select input이나 textarea 요소 안의 텍스트를 드래그하여 선택했을 떄 

// 페이지 이벤트 
// 1) load 페이지의 로딩이 완료된 경우
// 2) scroll 스크롤바를 움직인 경우


// 마우스 오버 시, 색 변환
// 입력 값 많으면 오류뜨게하기
// 옆으로 넘기기?
// 키보드 형태


// 1) YES blog 색깔 랜덤 지정 마우스 오버시,
const text = document.getElementById("blog-name");

document.getElementById("blog-name").addEventListener("mouseover", function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // console.log(r + g +  b );
    // this.style.color = rgb(rColor, gColor, bColor);

    text.style.color = `rgb(${r}, ${g}, ${b})`;
    // this.style.color = `rgb(${r}, ${g}, ${b})`;


    // this.style.color = "rgb(" + r + "," + g + "," + b + ")"
});



// 2) aside-bar 마우스 오버시, 고정된 값 변화하기
// 요소를 여러개 접근하는 경우 [배열] 형태로 반환됨
// const arr = document.getElementsByClassName("left-bar");
// for(let i = 0; i < arr.length; i++){
//     arr[i].addEventListener("mouseover", function(){
//         // arr[i].style.color = "rgb(130, 220, " + (50 * i+10) + ")";
//         arr[i].innerText = "★";
//         arr[i].style.color = `rgb(180, ${60* i + 20}, ${20* i + 5})`;

//     });
// }

// //  2) 요소 접근 끝나면 
// for(let i = 0; i < arr.length; i++){
//     arr[i].addEventListener("mouseout", function(){
//         arr[i].innerText = "●";
//         arr[i].style.color = 'white';
//     });
// }


// ------------------------
const arr = document.getElementsByClassName("left-bar");
var click  = 0;
for(let i = 0; i < arr.length; i++){
    arr[i].addEventListener("click", function(){
        // arr[i].style.color = "rgb(130, 220, " + (50 * i+10) + ")";

        if(click != i){
            console.log("원래 선택된 값 " + click);
            console.log("지금 선택된 값 " + i);

            console.log(arr[i]);
            arr[i].innerText = "★";
            arr[i].style.color = `rgb(180, ${60* i + 20}, ${20* i + 5})`;

            console.log(arr[click]);
            arr[click].innerText ="●";
            arr[click].style.color ="white";

            // arr[click].innerText = "●";
            // arr[click].style.color = 'white';



            click = i;
            console.log("지금 선택된 값 " + click);


        }


    });
}

// 3) 배경 색 바꾸기 
// document.getElementById("search").addEventListener("change", function(){

//     console.log("change 이벤트 발생");

//     const body = document.getElementById("body");
//     const search = document.getElementById("search");

//     const bgColor = search.value;
//     console.log(bgColor);

//     // body.style.backgroundColor = bgColor;
// });

// 검색 창에 검색 시, inner value로 변경????????????????????????????????????
const div1 = document.querySelectorALL("nav>div, nav li");
console.log(div1);
// for (const i = 0; i < sections.length; i++) {
//   const item = sections.item(i);
//   item.style.border = "1px solid #ff0000";
// }


// for(let i = 0 ; i <div1.length; i++){
//     console.log("div"+[i] +" : "+ div1[i]);

//     div1.style.backgroundColor = "red";
// }
// div1.style.backgroundColor="red";

document.getElementById("search-input").addEventListener("change", function(){

    console.log("change 이벤트 발생");

    const div1 = document.querySelectorALL("nav *");

    console.log(div1);
    const input1 = document.getElementById("search-input");

    const bgColor = input1.value;

    console.log(bgColor);

    div1.style.backgroundColor = bgColor;
});





// for (let i = 0; i < arr.length; i++) {
//     function mouseLeaveFunc(a,i) {
//         a.innerText = "★";
//         arr[i].style.color = `rgb(210, ${60* i + 20}, ${20* i + 5})`;
//     }
    
//     function MouseOut(a,i) {
//         a.innerText = "●";
//         arr[i].style.color = "white";
//     }



//     arr[i].addEventListener("mouseover", handleMouse(arr[i],i));
//     arr[i].addEventListener("mouseout", handleMouseLeave(arr[i],i));
//   }


// for(let i = 0; i < arr.length; i++){
//     arr[i].addEventListener("click", function(){
//         arr[i].style.color = `rgb(210, ${60* i + 20}, ${20* i + 5})`;
//     });
// }



// arr[0].addEventListener("mouseover", function(){
//     console.log(arr[0]);

//     setTimeout( function(){
//         arr[0].style.color = 'red';
//     }, 100);

// })

// // mouseout
// arr[0].addEventListener("mouseout", function(){
//     console.log(arr[0]);

//     setTimeout( function(){
//         arr[0].style.color = 'white';
//     }, 100);

// })

// document.getElementsByClassName("left-bar").addEventListener("click ", function(){

//     const arr = document.getElementsByClassName("left-bar");

//     console.log(arr);

//     // for(let i = 0; i < arr.length; i++){

//     //     const num = arr[i].innerText;
//     //     arr[i].style.backgroundColor = "rgb(130, 220, " + (50 * num) + ")";
//     // }
// });







//  입력창에 포커스가 생기면
// document.getElementById("search-input").addEventListener("focus",function(){

//     console.log("focus됨");

//     // 색깔 지정하기


// })









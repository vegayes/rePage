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


// ① 문자열.indexOf("str");
// ② 문자열.substring(시작인덱스, 종료인덱스) :문자열 일부 잘라내기
// ③ 문자열.split("구분자") : 문자열을 "구분자"로 잘라서 배열로 반환
// ① Infinity 리터럴 확인
// ② NaN 리터럴 확인
// ③ isNaN(값) : 값이 NaN이면 true, 아니면 false반환
// ④ Math.random() : 0이상 1미만의 난수 발생 ( 0 <= random < 1)
// ⑤ 소수점 관련 함수
// round(), ceil(), floor(), trunc()
// ⑥ 숫자.toFixed(자릿수) : 지정된 자릿수까지 반올림해서 표현

// parseInt() : 정수로 변환함 ("3.14" -> 3)
// parseFloat() : "정수" -> 정수 / "실수 "-> 실수 

// 1) #test의 자식 노드를 모두 얻어오기
// - 요소.childNodes : 요소의 자식 노드를 모두 반환


/*1. 정규 표현식 객체 생성 방법
1) const regExp = new RegExp("정규표현식");
2) const regExp = /정규표현식/;
    -> 양쪽 '/' 기호 정규 표현식의 리터럴 표기법 

2. 문자열 패턴 확인 메서드(함수)
1) regExp.test(문자열)
  -> 문자열에 정규표현식과 일치하는 패턴이 있을 경우 true, 없으면 false
2) regExp.exec(문자열)
  -> 문자열에 정규표현식과 일치하는 패턴이 있을 경우 처음 매칭되는 문자열을 반환
     없으면 null 반환   

*/






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



// ============ 연습


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



// 4)??

// const navbarMenu = document.querySelector('.navbar__menu');
// navbarMenu.addEventListener('click', (event) => {

//   const target = event.target;
//   const link = target.dataset.link;

//   console.log(event.target.dataset.link);
  
//   if (link == null) {
//     return;
//   } else {
//     const scroll = document.querySelector(link);
//     scroll.scrollIntoView({behavior:"smooth"}); //option으로 애니메이션을 smooth하게 만든다
//   }
// });

// 5) 스크롤 예쁘게 내리기
// for(let i = 0; i < arr.length; i++){
//     arr[i].addEventListener("click", function(){

//         const link = arr[i].href;

//         if(link == null){
//             return;
//         }else{
//             const scroll = document.querySelector(link);
//             scroll.scrollIntoView({behavior:"smooth"});
//         }

//     });
// }


// document.getElementById("footer-move").addEventListener("click", function(){
//     console.log("smooth");
//     document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
// })





// document.getElementById("footer-move").addEventListener("click", function(){
//     console.log("smooth");
//     window.scrollTo({left:0, top:0})
// })



// document.getElementById("seventh-page").addEventListener("doubleclick",function(){
//     const addText = document.getElementById("addText");
//     var displayValue = window.getComputedStyle(addText).getPropertyValue("display");
//     console.log("addText의 display 값:", displayValue);
    
//     if(displayValue =="none"){
//         addText.style.display ="block";
//     }else{
//         addText.style.display ="none";
//     }

// })


// 7) 시계
// let interval; // setInterval을 저장하기 위한 전역 변수
// let flag = 0 ; 

// // 현재 시간 문자열로 반환 함수 
// function  currentTime(){

//     const now = new Date();
//     // Date() 날짜관련 JS 내장 객체

//     let hour = now.getHours(); // 시
//     let min = now.getMinutes(); // 분
//     let sec = now.getSeconds(); // 초

//     if(hour < 10) hour = "0" + hour;
//     if(min < 10) min = "0" + min;
//     if(sec < 10) sec = "0" + sec;

//     return hour + " : " + min + " : " + sec;
// }

// function clockFn(){
//     const clock = document.getElementById("clock");

//     clock.innerText = currentTime();

  
//     interval = setInterval(function(){
//         clock.innerText = currentTime();
//     }, 1000);
    
// }

// clockFn(); //함수호출









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


// ===============================================================================================


// 1) YES blog 색깔 랜덤 지정 마우스 오버시,
const text = document.getElementById("blog-name");

document.getElementById("blog-name").addEventListener("mouseover", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // console.log(r + g +  b );
    // this.style.color = rgb(rColor, gColor, bColor);

    text.style.color = `rgb(${r}, ${g}, ${b})`;
    // this.style.color = `rgb(${r}, ${g}, ${b})`;
    // this.style.color = "rgb(" + r + "," + g + "," + b + ")"
});

//  1-2) 함수로 바꿔서 진행하기 
function generateRandomColor(element) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    element.style.color = `rgb(${r}, ${g}, ${b})`;
}

document.getElementById("git-move").addEventListener("mouseover", function(){
    generateRandomColor(this);
});

var originalColor ="white"; // 원래 색상을 저장할 변수
document.getElementById("git-move").addEventListener("mouseout", function(){
    this.style.color = originalColor; // 원래 색상으로 복원
});



// ------------------------
// 2) 요소 색깔 및 변화하게하기
const arr = document.getElementsByClassName("left-bar");
var click  = null;
for(let i = 0; i < arr.length; i++){
    arr[i].addEventListener("click", function(){
        // arr[i].style.color = "rgb(130, 220, " + (50 * i+10) + ")";

        if(click != i){
            console.log("원래 선택된 값 " + click);
            console.log("지금 선택된 값 " + i);

            console.log(arr[i]);
            arr[i].innerText = "★";
            arr[i].style.fontSize = "20px";
            arr[i].style.color = `rgb(180, ${60* i + 20}, ${20* i + 5})`;


            if(click != null){
                console.log(arr[click]);
                arr[click].innerText ="●";
                arr[click].style.fontSize = "16px";
                arr[click].style.color ="white";
            }

            click = i;
            console.log("지금 선택된 값 " + click);
        }
    });
}

// 3) 네비 색 바꾸기 

document.getElementById("search-input").addEventListener("change", function(){

    const select = document.querySelectorAll("nav *");
    const val = document.getElementById("search-input");

    const backColor = val.value;


    for(let i = 0 ; i < select.length; i++){
        select[i].style.backgroundColor = backColor;
    }

});


// 4) 제출 버튼 누르면 타이틀 나와서 알림창에 뜨게하기.

document.getElementById("send-btn").addEventListener("click", function(){
    const sendMsg = document.getElementById("Title").value;

    console.log(sendMsg);
    if(sendMsg.length > 0){
        alert(sendMsg + "이 제출되었습니다.");
    }else{
        alert("제출에 오류가 발생하였습니다.")
    }
});


//  5) 스크롤 예쁘게 내리기
const footer = document.getElementById("footer").offsetTop;

document.getElementById("footer-move").addEventListener("click", function(){
    window.scroll({
        top:footer, 
        behavior: "smooth"
    });
})


const section = document.querySelectorAll(".content>section");
// const arr = document.getElementsByClassName("left-bar");
const first = section[0].offsetTop;
const second = section[1].offsetTop;
const third = section[2].offsetTop;
const fourth = section[3].offsetTop;
const fifth = section[4].offsetTop;
const sixth = section[5].offsetTop;
const seventh = section[6].offsetTop;

console.log(second);
for(let i = 0 ; i < arr.length; i++){
    console.log(arr[i]);
    arr[i].addEventListener("click", function(){
        console.log(section[i].offsetTop);
        whindow.scroll({
            top : section[i].offsetTop,
            behavior :"smooth"
        });
    });
};




// 6) 접고 펼치기
document.getElementById("content").addEventListener("click",function(){
    const addText = document.getElementById("addText");
    var displayValue = window.getComputedStyle(addText).getPropertyValue("display");
    console.log("addText의 display 값:", displayValue);
    
    if(displayValue =="none"){
        addText.style.display ="block";
    }else{
        addText.style.display ="none";
    }

})



//7) 정규표현식
document.getElementById("search-input").addEventListener("keyup", function() {

    // 결과 출력용 span 
    const span = document.getElementById("searchResult");

    // 한글 2~5글자 정규 표현식
    const regExp =/^[a-zA-Z]+$/;


    // 빈칸인지 검사 
    if(this.value.length == 0){
        // 지운경우 span Tag 안의 값을 지워줌.
        span.innerText = "";
        return;
    }

    // 유효성 검사
    if( !regExp.test(this.value)){
        console.log("안된다.");
        // 유효한 경우 
        span.innerText = "형식이 유효하지 않습니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
});


// 8) 글자 바꾸기
// document.getElementById("addText").addEventListener("click", function(){

//     this.innerText = "안녕히가세요!";
// });


// 9) 요소 추가하기
document.getElementById("addText").addEventListener("click",function() {

    const div = document.createElement("div");

    const input = document.createElement("span");
    input.innerText = "!!감사합니다!!";

    div.append(input);

    document.getElementById("seventh-page").append(div);
});

// document.getElementById("add").addEventListener("click", function(){

//     // div 요소 생성
//     const div = document.createElement("div");

//     // div에 row클래스 추가
//     div.classList.add("row");
//     // <div class="row"></div>이 생성됨

//     // ------------------------------------------------

//     // input 요소 생성 및 in클래스 추가
//     const input = document.createElement("input");
//     input.classList.add("in");
//     //<input class="in">이 생성됨

//     // ------------------------------------------------
    
//     // span요소 생성
//     const span = document.createElement("span");
//     // remove 클래스 추가
//     span.classList.add("remove");
//     // span 동그라미 안에 X 표시 추가
//     span.innerText = "X";
//     // <span clas="remove"></span>

//     // ------------------------------------------------

//     div.append(input);
//     // <div class="row">
//     //      <input class="in">
//     // </div> 이 생성됨

//     div.append(span);
//     // <div class="row">
//     //      <input class="in">
//     //      <span class="remove"></span>
//     // </div> 이 생성됨

//     document.getElementById("container").append(div);

//     span.addEventListener("click", function(){
//         span.parentElement.remove();
//     })

// })
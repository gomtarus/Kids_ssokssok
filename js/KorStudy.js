const quiz_sel = document.querySelectorAll("[id^=quiz_sel_]");
let quiz_sel_count = 0;

let quiz_score = 0;
let quiz_life = 5;
let quiz_count = 0;

// 상태 or 정답

// 변수

let quiz_animal_answer = ["뱀", "비둘기", "고슴도치", "토끼", "팬더"];
let quiz_exercise_answer = ["레슬링", "달리기", "스케이트", "테니스", "럭비"];

let quiz_animal_img = [
  "/img/Quiz/Q-1.png",
  "/img/Quiz/Q-2.png",
  "/img/Quiz/Q-3.png",
  "/img/Quiz/Q-4.png",
  "/img/Quiz/Q-5.png",
  "/img/Quiz/Q-5.png",
];

let quiz_exercise_img = [
  "/img/Quiz/Q-6.png",
  "/img/Quiz/Q-7.png",
  "/img/Quiz/Q-8.png",
  "/img/Quiz/Q-9.png",
  "/img/Quiz/Q-10.png",
  "/img/Quiz/Q-10.png",
];

// 데이터

let quiz_answer;
let quiz_img;

// 배열 복사

for (i = 0; i < quiz_sel.length; i++) {
  quiz_sel[i].addEventListener("click", run);
  let num = i;
  function run() {
    if (num == 0) {
      $("#quiz_btn_1").css("top", "82%");
      $("#quiz_btn_2").css("top", "106%");
      quiz_answer = quiz_animal_answer;
      quiz_img = quiz_animal_img;
      $("#quiz_img").css(
        "background",
        "url(" + quiz_img[quiz_count] + ") no-repeat center"
      );
    } else {
      quiz_sel_count = 1;
      $("#quiz_btn_2").css("top", "82%");
      $("#quiz_btn_1").css("top", "106%");
      quiz_answer = quiz_exercise_answer;
      quiz_img = quiz_exercise_img;
      $("#quiz_img").css(
        "background",
        "url(" + quiz_img[quiz_count] + ") no-repeat center"
      );
    }
  }
}

// 퀴즈 선택하기

const quiz_btn = document.querySelectorAll("[id^=quiz_btn_]");

for (i = 0; i < quiz_btn.length; i++) {
  quiz_btn[i].addEventListener("click", run);
  let num = i;
  function run() {
    $("#quiz_form").css("top", "0px");
  }
}

// 퀴즈 시작

const quiz_stop_btn = document.getElementById("quiz_stop");

quiz_stop_btn.addEventListener("click", quiz_stop);

function quiz_stop() {
  if (confirm("그만할까요?") == true) {
    $("#quiz_form").css("top", "820px");
    $("#score").attr("value", "0");
    $("#life").attr("value", "5");
    $("#answer").val("");
    quiz_score = 0;
    quiz_life = 5;
    quiz_count = 0;
  }
}
// 퀴즈 종료

function enter() {
  if (window.event.keyCode == 13) {
    if ($("#answer").val() == "") {
      quiz_alert("정답을 입력해주세요!!!");
    }
    // 정답 입력이 없을 떄
    else {
      if ($("#answer").val() == quiz_answer[quiz_count]) {
        $("#score").attr("value", (quiz_score += 100));
        $("#answer").val("");
        $("#quiz_img").css(
          "background",
          "url(" + quiz_img[(quiz_count += 1)] + ") no-repeat center"
        );
        if (quiz_count == 5) {
          setTimeout(run, 200);
          function run() {
            alert("모두 정답입니다~~~ 잘했어요!!!");
            quiz_reset();
          }
        }
      }
      // 정답일 때
      else {
        $("#life").attr("value", (quiz_life -= 1));
        if (quiz_life != 0) {
          alert("정답이 아니에요ㅠㅠ 다시 해보세요!!!");
        } else {
          setTimeout(run, 300);
          function run() {
            alert("게임오버ㅠㅠ 다시해보세요...");
            quiz_reset();
          }
        }
      }
      // 틀렸을 때
    }
  }

  function quiz_alert(title) {
    setTimeout(run, 100);
    function run() {
      alert(title);
    }
  }
  // 빈칸일때

  function quiz_reset() {
    $("#quiz_form").css("top", "820px");
    $("#score").attr("value", "0");
    $("#life").attr("value", "5");
    $("#answer").val("");
    quiz_score = 0;
    quiz_life = 5;
    quiz_count = 0;
  }
  //초기화
}

// 퀴즈 호출

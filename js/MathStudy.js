const quiz_sel = document.querySelectorAll("[id^=quiz_sel_]");
let quiz_sel_count = 0;

let quiz_score = 0;
let quiz_life = 5;
let quiz_count = 0;

// 상태 or 정답

// 변수

let quiz_pm = ["1 + 1", "3 + 5", "9 + 2", "10 + 5", "7 + 9"];
let quiz_mul = ["3 X 5", "2 X 2", "9 X 4", "6 X 3", "5 X 5"];

let quiz_pm_answer = ["2", "8", "11", "15", "16"];
let quiz_mul_answer = ["15", "4", "36", "18", "25"];

// 데이터

let quiz_answer;
let quiz_question;

// 배열 복사

for (i = 0; i < quiz_sel.length; i++) {
  quiz_sel[i].addEventListener("click", run);
  let num = i;
  function run() {
    if (num == 0) {
      $("#quiz_btn_1").css("top", "82%");
      $("#quiz_btn_2").css("top", "106%");
      quiz_answer = quiz_pm_answer;
      quiz_question = quiz_pm;
      $("#quiz_value").text(quiz_question[0]);
    } else {
      quiz_sel_count = 1;
      $("#quiz_btn_2").css("top", "82%");
      $("#quiz_btn_1").css("top", "106%");
      quiz_answer = quiz_mul_answer;
      quiz_question = quiz_mul;
      $("#quiz_value").text(quiz_question[0]);
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
        $("#quiz_value").text(quiz_question[(quiz_count += 1)]);
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

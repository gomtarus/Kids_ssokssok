const color = [
  "#ea1b07",
  "#ee911a",
  "#feed24",
  "#0b8b74",
  "#0696f7",
  "#1032ae",
  "#430486",
  "#ffffff",
  "#b2b2b2",
  "#000000",
];

const color_name = [
  "빨강",
  "주황",
  "노랑",
  "초록",
  "파랑",
  "남",
  "보라",
  "흰",
  "회",
  "검",
];

for (let i = 0; i < color.length; i++) {
  let list = `<li id="brush_color_${i}"><p id="color_name_${i}">${color_name[i]}</p></li>`;
  $("#color_ul").append(list);
  //-------------------------------------------------
  $("#brush_color_" + i).css("background-color", color[i]);
  if (i == 7) {
    $("#brush_color_7").css("border", "2px solid #000000");
    $("#color_name_7").css("color", "black");
  }
}

// 팔레트 생성

const pencel_panel_close = document.getElementById("pencel_panel_close");
const pencel = document.getElementById("pencel");

let panel_count = 0;

pencel_panel_close.addEventListener("click", pencel_close);
pencel.addEventListener("click", pencel_close);

function pencel_close() {
  if (panel_count == 0) {
    panel_count = 1;
    $("#pencel_panel").css("top", "75%");
  } else {
    panel_count = 0;
    $("#pencel_panel").css("top", "115%");
  }
}

// 팔레트 버튼 할당

const art_panel_close = document.getElementById("art_panel_close");
const art_btn = document.getElementById("art_panel");

let art_count = 0;

art_panel_close.addEventListener("click", art_close);
art_btn.addEventListener("click", art_close);

function art_close() {
  if (art_count == 0) {
    art_count = 1;
    $("#choiecArt").css("right", "50px");
    $("#art_panel").css("right", "-150px");
  } else {
    art_count = 0;
    $("#choiecArt").css("right", "-150px");
    $("#art_panel").css("right", "50px");
  }
}

// 그림 선택 패널

const art_choice = document.querySelectorAll("[id^=art_img_]");

for (i = 0; i < art_choice.length; i++) {
  art_choice[i].addEventListener("click", run);
  let num = i;
  function run() {
    $("#canvas").css(
      "background",
      "url(/img/ArtStudy/" + (num + 1) + ".png) no-repeat center"
    );
    if (num == 4) {
      $("#canvas").css("background", "url()");
    }
  }
}
// 그림 선택

var canvas;
var ctx;
var sx, sy;
var drawing = false;

let color_temp;

window.onload = function () {
  canvas = document.getElementById("canvas");
  if (canvas == null || canvas.getContext == null) return;
  ctx = canvas.getContext("2d");
  ctx.lineCap = "round";

  canvas.onmousedown = function (e) {
    e.preventDefault();
    sx = canvasX(e.clientX);
    sy = canvasY(e.clientY);
    drawing = true;
  };

  canvas.onmousemove = function (e) {
    if (drawing) {
      e.preventDefault();
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      sx = canvasX(e.clientX);
      sy = canvasY(e.clientY);
      ctx.lineTo(sx, sy);
      ctx.stroke();
    }
  };

  canvas.onmouseup = function (e) {
    drawing = false;
  };
};

function canvasX(clientX) {
  var bound = canvas.getBoundingClientRect();
  var bw = 5;
  return (clientX - bound.left - bw) * (canvas.width / (bound.width - bw * 2));
}

function canvasY(clientY) {
  var bound = canvas.getBoundingClientRect();
  var bw = 5;
  return (clientY - bound.top - bw) * (canvas.height / (bound.height - bw * 2));
}

// 캔버스 부여

const eraser_btn = document.getElementById("eraser");

eraser_btn.addEventListener("click", eraser);

function eraser() {
  ctx.strokeStyle = "#ffffff";
}

// 지우개

const clear_all = document.getElementById("clear_all");

clear_all.addEventListener("click", clear);

function clear() {
  var con = confirm("그림이 전부 삭제됩니다.");
  var cnvs = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  if (con == true) {
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    ctx.beginPath();
  }
}

// 모두 지우기

function brush_size(brushSize) {
  ctx.lineWidth = brushSize;
}

function ShowSliderValue(sVal) {
  var obValueView = document.getElementById("brush_size");
  obValueView.innerHTML = sVal;
}

var RangeSlider = function () {
  var range = $(".brush_size_range");
  range.on("input", function () {
    ShowSliderValue(this.value);
  });
};

RangeSlider();

// 붓 크기

const brush_color = document.querySelectorAll("[id^=brush_color_]");

for (i = 0; i < brush_color.length; i++) {
  brush_color[i].addEventListener("click", run);
  let num = i;
  function run() {
    ctx.strokeStyle = color[num];
  }
}

// 붓 색

// 캔버스

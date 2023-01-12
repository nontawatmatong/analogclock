$(document).ready(function () {
  setTimeout(function () {
    $('.clock').css('transition', '.5s');
    $('.frame_wrap').css('transition', '.5s');
  }, 1500);
  var rotate = 13;
  const deg = 6;
  const hr = document.querySelector('#hr');
  const mn = document.querySelector('#mn');
  const sc = document.querySelector('#sc');

  function RotateFrame() {
    let deg_val = $(sc).attr('style');
    if (deg_val == 'transform: rotateZ(0deg);' || deg_val == 'transform: rotateZ(60deg);' || deg_val == 'transform: rotateZ(120deg);' ||
      deg_val == 'transform: rotateZ(180deg);' || deg_val == 'transform: rotateZ(240deg);' || deg_val == 'transform: rotateZ(300deg);') {

      $('.frame_wrap').css('rotate', (rotate += 30) + 'deg');
      let randomNumber = Math.floor(Math.random() * (7 - 5) + 5);
      let randomNumber_2 = Math.floor(Math.random() * (9 - 1) + 1);
      $('.clock').css('transform', 'scale(' + '0.' + randomNumber + randomNumber_2 + ')');
      $('.frame_wrap').css('transform', 'scale(' + '0.' + randomNumber + randomNumber_2 + ')');
    }
  }
  var window_focus = true;
  $(window).focus(function () {
    window_focus = true;
    $('.frame_wrap').css('rotate', (rotate += 30) + 'deg');
    let randomNumber = Math.floor(Math.random() * (7 - 5) + 5);
    let randomNumber_2 = Math.floor(Math.random() * (9 - 1) + 1);
    $('.clock').css('transform', 'scale(' + '0.' + randomNumber + randomNumber_2 + ')');
    $('.frame_wrap').css('transform', 'scale(' + '0.' + randomNumber + randomNumber_2 + ')');
  }).blur(function () {
    window_focus = false;
  });
  setInterval(function () {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    let day_no = day.getDate().toString();
    let day_name = day.toString().split(' ')[0];
    let yyyy = day.toString().split(' ')[3];

    let day_name_1 = day_name.substring(0, 1);
    let day_name_2 = day_name.substring(1, 2);
    let day_name_3 = day_name.substring(2, 3);

    let day_no_1 = day_no.substring(0, 1);
    let day_no_2 = day_no.substring(1, 2);

    $('.name_1').text(day_name_1);
    $('.name_2').text(day_name_2);
    $('.name_3').text(day_name_3);

    $('.no_1').text(day_no_1);
    $('.no_2').text(day_no_2);

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
    if (window_focus) {
      RotateFrame();
    }
  }, 1000);
  var bg_count = 0;
  let bg_color_day = [
    "rgb(222 20 19 / 30%)",
    "rgb(175 175 0 / 30%)",
    "rgb(222 20 19 / 30%)",
    "rgb(7 143 33 / 30%)",
    "rgb(241 110 18 / 50%)",
    "rgb(30 120 170 / 30%)",
    "rgb(206 21 222 / 30%)",
  ];
  let clock_color_day = [
    "rgb(255 236 237)",
    "rgb(249 241 202)",
    "rgb(255 236 237)",
    "rgb(234 245 213)",
    "rgb(255 237 233)",
    "rgb(231 243 255)",
    "rgb(248 237 254)",
  ];
  let sec_color_day = [
    "rgb(233 69 69)",
    "rgb(90 125 105)",
    "rgb(146 111 69)",
    "rgb(80 126 123)",
    "rgb(131 117 68)",
    "rgb(127 112 151)",
    "rgb(145 100 113)",
  ];
  let min_color_day = [
    "rgb(192 40 70)",
    "rgb(128 119 42)",
    "rgb(169 95 110)",
    "rgb(97 127 65)",
    "rgb(172 98 77)",
    "rgb(66 124 162)",
    "rgb(128 108 166)",
  ];
  let hr_color_day = [
    "rgb(92 63 67)",
    "rgb(75 71 42)",
    "rgb(92 63 67)",
    "rgb(58 67 45)",
    "rgb(93 65 54)",
    "rgb(55 73 87)",
    "rgb(76 67 86)",
  ];
  const day = new Date();
  const day_name = day.toString().split(' ')[0];
  const hours = day.getHours();

  setTimeout(function () {
    if (hours > 7 < 18) {
      if (!$('.event_checkbox').is(':checked')) {
        $('.event_checkbox').click();
      }
    }
  }, 2000);

  var auto_dark = window.setInterval(function () {
    if (hours > 17) {
      if ($('.event_checkbox').is(':checked')) {
        $('.event_checkbox').click();
        window.clearInterval(auto_dark);
      }
    }
  }, 5000);
  $('.copyright span').css('transition', '.5s');
  $(document).on("change", ".event_checkbox", function () {
    if ($(this).is(':checked')) {
      if (day_name == 'Sun') {
        $("body").css("background-color", bg_color_day[0]);
        $('.clock').css('background-color', clock_color_day[0]);
        $('.dot').css('background-color', sec_color_day[0]);
        $('.min .tail').css('background-color', min_color_day[0]);
        $('.hr .tail').css('background-color', hr_color_day[0]);
        $('.copyright span').css('color', sec_color_day[0]);
        $('.fill').css('fill', clock_color_day[0]);
      } else if (day_name == 'Mon') {
        $("body").css("background-color", bg_color_day[1]);
        $('.clock').css('background-color', clock_color_day[1]);
        $('.dot').css('background-color', sec_color_day[1]);
        $('.min .tail').css('background-color', min_color_day[1]);
        $('.hr .tail').css('background-color', hr_color_day[1]);
        $('.copyright span').css('color', sec_color_day[1]);
        $('.fill').css('fill', clock_color_day[1]);
      } else if (day_name == 'Tue') {
        $("body").css("background-color", bg_color_day[2]);
        $('.clock').css('background-color', clock_color_day[2]);
        $('.dot').css('background-color', sec_color_day[2]);
        $('.min .tail').css('background-color', min_color_day[2]);
        $('.hr .tail').css('background-color', hr_color_day[2]);
        $('.copyright span').css('color', sec_color_day[2]);
        $('.fill').css('fill', clock_color_day[2]);
      } else if (day_name == 'Wed') {
        $("body").css("background-color", bg_color_day[3]);
        $('.clock').css('background-color', clock_color_day[3]);
        $('.dot').css('background-color', sec_color_day[3]);
        $('.min .tail').css('background-color', min_color_day[3]);
        $('.hr .tail').css('background-color', hr_color_day[3]);
        $('.copyright span').css('color', sec_color_day[3]);
        $('.fill').css('fill', clock_color_day[3]);
      } else if (day_name == 'Thu') {
        $("body").css("background-color", bg_color_day[4]);
        $('.clock').css('background-color', clock_color_day[4]);
        $('.dot').css('background-color', sec_color_day[4]);
        $('.min .tail').css('background-color', min_color_day[4]);
        $('.hr .tail').css('background-color', hr_color_day[4]);
        $('.copyright span').css('color', sec_color_day[4]);
        $('.fill').css('fill', clock_color_day[4]);
      } else if (day_name == 'Fri') {
        $("body").css("background-color", bg_color_day[5]);
        $('.clock').css('background-color', clock_color_day[5]);
        $('.dot').css('background-color', sec_color_day[5]);
        $('.min .tail').css('background-color', min_color_day[5]);
        $('.hr .tail').css('background-color', hr_color_day[5]);
        $('.copyright span').css('color', sec_color_day[5]);
        $('.fill').css('fill', clock_color_day[5]);
      } else if (day_name == 'Sat') {
        $("body").css("background-color", bg_color_day[6]);
        $('.clock').css('background-color', clock_color_day[6]);
        $('.dot').css('background-color', sec_color_day[6]);
        $('.min .tail').css('background-color', min_color_day[6]);
        $('.hr .tail').css('background-color', hr_color_day[6]);
        $('.copyright span').css('color', sec_color_day[6]);
        $('.fill').css('fill', clock_color_day[6]);
      }
      $('.text').css('color', '#000');
    } else {
      $('body').css('background-color', '#000');
      $('.clock').css('background-color', 'rgb(0 65 80)');
      $('.sec .dot').css('background-color', 'rgb(100 200 170)');
      $('.min .tail').css('background-color', 'rgb(155 174 255)');
      $('.hr .tail').css('background-color', 'rgb(105 145 215)');
      $('.copyright span').css('color', '#fff');
      $('.text').css('color', 'rgb(225 225 225)');
      $('.fill').css('fill', 'rgb(0 65 80)');
    }
  });
});
function add_head() {
    var head_str = '';
    head_str += '<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0"/>';
    head_str += '<title>橘皮的網頁</title>';
    head_str += '<link rel="stylesheet" href="app.css" type="text/css" />';
    head_str += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">';
    head_str += '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>';
    head_str += '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>';
    head_str += '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>';
    head_str += '<script src="app.js"></script>';
    document.write(head_str);
}
function shownav(page) {//依頁面顯示導覽列
    var nav_str = '';
    nav_str = '<div class="row">';
    nav_str += '<div class="">';//col-md-12 col-sm-12
    nav_str += '<nav class="navbar navbar-inverse navbar-fixed-top">';
    nav_str += '<div class="container-fluid">';
    nav_str += '<div class="navbar-header">';
    nav_str += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">';
    nav_str += '<span class="icon-bar"></span>';
    nav_str += '<span class="icon-bar"></span>';
    nav_str += '<span class="icon-bar"></span>';
    nav_str += '</button>';
    nav_str += '<a class="navbar-brand" href="index.html">橘皮的網站</a>';
    nav_str += '</div>';
    nav_str += '<div class="collapse navbar-collapse" id="myNavbar">';
    nav_str += '<ul class="nav navbar-nav navbar-right">';     

    nav_str += '<li id="about"><a href="#about_tab">關於我</a></li>';
    nav_str += '<li id="skill"><a href="#skill_tab">技能專長</a></li>';
    nav_str += '<li id="exp"><a href="#exp_tab">經歷</a></li>';
    nav_str += '<li id="portfolio"><a href="#prof_tab">作品集</a></li>';
    nav_str += '<li id="mylife"><a href="#mylife_tab">自傳</a></li>';
    nav_str += '</ul></div></div></nav></div></div>';

    document.write(nav_str);
    document.getElementById(page).className = "active";
}
function changeTab(page) {
    document.getElementById(page).className = "active";
}
function showfooter() {
    var footer_str = '';
    footer_str += '<div id="footer">';
    footer_str += '<span>網頁製作：許紫婷&nbsp&nbsp&nbsp聯絡信箱：donna41827@gmail.com</span>';
    footer_str += '</div>';
    document.write(footer_str);
}
function discribe_control_btn() {

    //alert('btn' + document.getElementById('discribe_control_btn').value);

    var arr = document.getElementsByName('skill_describe');
    var arr2 = document.getElementsByName('skill_div');
    var arr3 = document.getElementsByName('skill_clearfix2');
    var arr4 = document.getElementsByName('skill_clearfix3');
    var btn_val = document.getElementById('discribe_control_btn').value;

    if (btn_val == "1") {
        for (var i = 0; i < arr.length ; i++) {
            arr[i].style.display='none';
        }
        for (var i = 0; i < arr2.length; i++) {
            arr2[i].className = "col-md-3 col-sm-3 col-xs-6";
        }
        for (var i = 0; i < arr3.length; i++) {
            arr3[i].className = "";
        }
        for (var i = 0; i < arr4.length; i++) {
            arr4[i].className = "";
        }
        document.getElementById('discribe_control_btn').value = "0";
        document.getElementById('discribe_control_btn').textContent = "打開說明";
    } else {
        for (var i = 0; i < arr.length ; i++) {
            arr[i].style.display = '';
        }
        for (var i = 0; i < arr2.length; i++) {
            arr2[i].className = "col-md-4 col-sm-6";
        }
        for (var i = 0; i < arr3.length; i++) {
            arr3[i].className = "clearfix hidden-xs hidden-md hidden-lg hidden-xl";
        }
        for (var i = 0; i < arr4.length; i++) {
            arr4[i].className = "clearfix hidden-xs hidden-sm";
        }
        document.getElementById('discribe_control_btn').value = "1";
        document.getElementById('discribe_control_btn').textContent = "收起說明";
    }
}
//NAVBAR點擊自動收起
$(function () {
    if ($(window).width() < 480) { //當視窗小於480時才運作
        $('.navbar a').on('click', function () {
            $('.navbar-toggle').click();
        });
    }
});


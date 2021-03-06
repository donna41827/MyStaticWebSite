//網頁的NEW
var myVideo = document.createElement('video');
var c;
var ctx;
var FRAME_RATE = 12;
var loop_function = empty;
//ani
var btn_ani = new Array();
var btn_ani_count = new Array();
//home_animation
var home_animation_ar = new Array();
var num;
var skip = new myImgObj('animation/skip.png', 550, 900, 1, 1);
//initimage
var myImages = new Array();
var myImages_link1 = new Array();
var myImages_link2 = new Array();
var myImages_image = new Array();
var img_count = 0;
var page = 'homepage';
var link_ar = new Array();
var link_top = new Array();
//key
var key_draw_finish = false;
//mouse
var flat = false;
var mouse = new Array();
var mouse_count = 0;
var MD_range;
var who = null;
//level
var level_check = 'simple';
var level_big_map_num = 8;
var map = new myImgObj('img/road_simple1.png', 63, 375, 0.6, 0.6);
//limit
var limit_check = new Array();
//design
var bg_count = 9;
var open = '';
var no = null;
var print_little_ar = new Array();
var order_data = new Object();
var order_real_XY = new Array();
var flat_SE = new Object({ SE: false, S: false, E: false });
var order_flat = null;
//mapdata
var map_data = new Array();
var user_map = 'simple1';
var node = new Array();
var edge = new Array();
var playpage_node = new Array();
var playpage_edge = new Array();
var node_connect = new Object();
var edge_connect = new Object();
var limit1 = new Object({ limit_TF: false, num: null, node: null });
var limit2 = new Object({ limit_TF: false, ob_node: null, ob_edge: null });
var limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
var BG = 'bg_style1';
//save
var save_ar = new Array();
var choose_save;
var draw_memo = null;
var txt_line = 0;
//play
var draw_point_ar = new Array();
var draw_line_ar = new Array();
var draw_circle_ar = new Array();
var play_start = null;
var play_end = null;
var next = new Array();
var new_next = new Array();
var step_ar = new Array();
var step_obj = new Object({ step: 0, step_no: null });
var step = 0;
var visit = new Array();
var draw_line_flat = false;
var draw_type = new Array();//false=circle,true=line
var circle_line = new Array();
var no1 = null;
var no2 = null;
var circle_count = null;
//music
var loadCount = 0;
var itemsToLoad = 6;
var SOUND = "sound";
var MUSIC = "music";
var MAX_SOUNDS = 6;
var soundPool = new Array();
var music1;
var music2;
var music3;
var music4;
var music5;
var music6;
var music7;
var music8;
var music9;
var music10;
var music11;
var audioType;
var sound_d = false;
//check_ans
var check_ans_ar = new Array();
//win
var win_ar = new Array(false, false, false, false, false, false, false, false, false, false);
//var win_ar = new Array(false, false, true, true, true, true, true, true, true, true);
//tablegame
var circle_page = 'circle1';
var circle_map = new Array("road_simple2_big", "table_game_line", "road_simple2_little", "road_middle2_little", "road_hard2_little","table_game_circle_next");
var circle2_map = new Array("road_hard3_big", "table_game_line", "road_hard3_little","table_game_circle_last");
var rect_map = new Array("road_simple3_big","table_game_line" ,"road_simple3_little", "road_middle1_little");
var polygon_map = new Array("road_simple1_big", "table_game_line", "road_simple1_little", "road_middle3_little", "road_hard1_little");
var shape = null;
var tg_choose_map = null;
var all_map = new Array('simple1', 'simple2', 'simple3', 'middle1', 'middle2', 'middle3', 'hard1', 'hard2', 'hard3');
var circle_map_num = new Array(1, 4, 7, 8);
var rect_map_num = new Array(2, 3);
var polygon_map_num = new Array(0, 5, 6);
var from = null;
//tg_play
var painter = new Array();
var draw_path = new Array();
var draw_path_flat = false;
//State
var State;
var GS_GAME_READY = 0;
var GS_HOME_ANIMATION = 1;
var GS_HOMEPAGE = 2;
var GS_WAIT_USER = 3;
var GS_MOUSEDOWN = 4;
var GS_MOUSEUP = 5;
var GS_GAMECHOOSE = 6;
var GS_HOMEPAGE_MOVIE = 7;
var GS_HOMEPAGE_TABLEGAME = 8;
var GS_LEVEL = 9;
var GS_LIMIT = 10;
var GS_LIMIT_SIMPLE = 11;
var GS_LIMIT_MIDDLE = 12; 
var GS_LIMIT_HARD = 13;
var GS_LIMIT_READY = 14;
var GS_DESIGN = 15;
var GS_MOUSEMOVE = 16;
var GS_SAVE = 17;
var GS_PLAY = 18;
var GS_PLAY_MOUSEMOVE = 19;
var GS_WIN = 20;
var GS_TABLE_GAME_PLAY = 21;
var GS_KEY = 22;

function GameState(newState) {
    State = newState;
    switch (State) {
        case GS_GAME_READY:
            game_ready();
            break;
        case GS_HOME_ANIMATION:
            initImage_home_animation();
            break;
        case GS_HOMEPAGE:
            homepage();
            break;
        case GS_GAMECHOOSE:
            gamechoose();
            break;
        case GS_LEVEL:
            level();
            break;
        case GS_LIMIT:
            limit();
            break;
        case GS_LIMIT_SIMPLE:
            limit_simple();
            break;
        case GS_LIMIT_MIDDLE:
            limit_middle();
            break;
        case GS_LIMIT_HARD:
            limit_hard();
            break;
        case GS_LIMIT_READY:
            limit_lock();
            break;
        case GS_DESIGN:
            design();
            break;
        case GS_WAIT_USER:
            mouse_event_listener();
            break;
        case GS_MOUSEDOWN:
            MD_switch_page();
            break;
        case GS_MOUSEUP:
            MU_switch_page();
            break;
        case GS_HOMEPAGE_MOVIE:
            homepage_movie();
            break;
        case GS_HOMEPAGE_TABLEGAME:
            homepage_tablegame();
            break;
        case GS_MOUSEMOVE:
            design_mousemove();
            break;
        case GS_SAVE:
            save();
            break;
        case GS_PLAY:
            play();
            break;
        case GS_PLAY_MOUSEMOVE:
            MM_play();
            break;
        case GS_WIN:
            win();
            break;
        case GS_TABLE_GAME_PLAY:
            mouse_event_listener();
            break;
        case GS_KEY:
            key();
            break;
    }
}
function game_ready() {
    c = document.getElementById("Canvas");
    ctx = c.getContext("2d");
    var intervalTime = 1000 / FRAME_RATE;
    setInterval(loop, intervalTime);
    music_ready();
}
function music_ready() {
    music1 = document.createElement("audio");
    document.body.appendChild(music1);
    audioType = supportedAudioFormat(music1);
    music1.setAttribute("src", "music/first." + audioType);
    music1.addEventListener("canplaythrough", itemLoaded, false);

    music2 = document.createElement("audio");
    document.body.appendChild(music2);
    audioType = supportedAudioFormat(music2);
    music2.setAttribute("src", "music/game." + audioType);
    music2.addEventListener("canplaythrough", itemLoaded, false);

    music3 = document.createElement("audio");
    document.body.appendChild(music3);
    audioType = supportedAudioFormat(music3);
    music3.setAttribute("src", "music/put." + audioType);
    music3.addEventListener("canplaythrough", itemLoaded, false);

    music4 = document.createElement("audio");
    document.body.appendChild(music4);
    audioType = supportedAudioFormat(music4);
    music4.setAttribute("src", "music/select." + audioType);
    music4.addEventListener("canplaythrough", itemLoaded, false);

    music5 = document.createElement("audio");
    document.body.appendChild(music5);
    audioType = supportedAudioFormat(music5);
    music5.setAttribute("src", "music/walk." + audioType);
    music5.addEventListener("canplaythrough", itemLoaded, false);

    music6 = document.createElement("audio");
    document.body.appendChild(music6);
    audioType = supportedAudioFormat(music6);
    music6.setAttribute("src", "music/wrong." + audioType);
    music6.addEventListener("canplaythrough", itemLoaded, false);

    music7 = document.createElement("audio");
    document.body.appendChild(music7);
    audioType = supportedAudioFormat(music7);
    music7.setAttribute("src", "music/key_music." + audioType);
    music7.addEventListener("canplaythrough", itemLoaded, false);

    music8 = document.createElement("audio");
    document.body.appendChild(music8);
    audioType = supportedAudioFormat(music8);
    music8.setAttribute("src", "music/key2-2." + audioType);
    music8.addEventListener("canplaythrough", itemLoaded, false);

    music9 = document.createElement("audio");
    document.body.appendChild(music9);
    audioType = supportedAudioFormat(music9);
    music9.setAttribute("src", "music/key5-2." + audioType);
    music9.addEventListener("canplaythrough", itemLoaded, false);

    music10 = document.createElement("audio");
    document.body.appendChild(music10);
    audioType = supportedAudioFormat(music10);
    music10.setAttribute("src", "music/key5-3." + audioType);
    music10.addEventListener("canplaythrough", itemLoaded, false);

    music11 = document.createElement("audio");
    document.body.appendChild(music11);
    audioType = supportedAudioFormat(music11);
    music11.setAttribute("src", "music/key6-12." + audioType);
    music11.addEventListener("canplaythrough", itemLoaded, false);

    load_finish();
}
function mouse_event_listener() {
    /*c.addEventListener("mousedown", mousedown_event, false);
    c.addEventListener("mousemove", mousemove_event, false);
    c.addEventListener("mouseup", mouseup_event, false);*/
    c.addEventListener("touchstart", mousedown_event,false);
    c.addEventListener("touchmove", mousemove_event,false);
    c.addEventListener("touchend", mouseup_event,false);
    if (page == 'key' && key_draw_finish == true) {
        MD_key();
    }
}
function loop() {
    loop_function();
}
function empty() { }
function myImgObj(path, left, top, wp, hp) {
    var IMG = new Image();
    IMG.src = path;
    this.img = IMG;
    this.path = path;
    this.top = top;
    this.left = left;
    this.w = wp;
    this.h = hp;
}
function initImage_home_animation() {
    page = 'hp_animation';
    for (var i = 1; i <= 70; i++) {
        var home_IMG = new myImgObj('animation/home' + checkZero(i) + '.jpg', 0, 0, 1, 1);
        home_animation_ar.push(home_IMG);
    }
    GameState(GS_WAIT_USER);
    soundloopplay('first');
    loop_function = animation;
}
function checkZero(num) {
    if (num >= 0 && num < 10) {
        return "000" + num;
    } else if (num >= 10 && num < 100) {
        return "00" + num;
    } else if (num >= 100 && num < 1000) {
        return "0" + num;
    } else if (num >= 1000 && num < 10000) {
        return num;
    } else {
        return "0000";
    }
}
function animation() {
    if (home_animation_ar.length == 0) {
        loop_function = empty;
        GameState(GS_HOMEPAGE);
    } else {
        ctx.drawImage(home_animation_ar[0].img,
           home_animation_ar[0].left,
           home_animation_ar[0].top,
           home_animation_ar[0].img.width * home_animation_ar[0].w,
           home_animation_ar[0].img.height * home_animation_ar[0].h);
        home_animation_ar.shift();
        ctx.drawImage(skip.img, skip.left, skip.top, skip.img.width * skip.w, skip.img.height * skip.h);
    }
}
function hp_ani_btn() {
    if (mouse[mouse.length - 1].x >= skip.left && mouse[mouse.length - 1].x <=skip.left +skip.img.width * skip.w
       && mouse[mouse.length - 1].y >= skip.top && mouse[mouse.length - 1].y <= skip.top + skip.img.height * skip.h) {
        loop_function = draw;
        GameState(GS_HOMEPAGE);
    }
}
function initimage() {
    for (var i = 0; i < myImages_image.length; i += 6) {
        myImages[myImages_image[i]] = new myImgObj(myImages_image[i + 1], myImages_image[i + 2], myImages_image[i + 3],
            myImages_image[i + 4], myImages_image[i + 5]);
    }
    onload_image();
}
function onload_image() {
    for (var i = 0; i < myImages_image.length; i += 6) {
        myImages[myImages_image[i]].img.onload = function () {
            img_count++;
            if (img_count == (myImages_image.length / 6)) {
                img_count = 0;
                draw();
            }
        };
    }
}
//持續畫圖
function draw() {
    for (var i = 0; i < myImages_link1.length; i++) {
        ctx.drawImage(myImages[myImages_link1[i]].img,
            myImages[myImages_link1[i]].left,
            myImages[myImages_link1[i]].top,
            myImages[myImages_link1[i]].img.width * myImages[myImages_link1[i]].w,
            myImages[myImages_link1[i]].img.height * myImages[myImages_link1[i]].h);
    }
    if (page == 'homepage' || page == 'gamechoose') {
        for (var i = 0; i < btn_ani_count.length; i++) {
            ctx.drawImage(myImages[btn_ani[btn_ani_count[i]]].img,
                myImages[btn_ani[btn_ani_count[i]]].left,
                myImages[btn_ani[btn_ani_count[i]]].top,
                myImages[btn_ani[btn_ani_count[i]]].img.width * myImages[btn_ani[btn_ani_count[i]]].w,
                myImages[btn_ani[btn_ani_count[i]]].img.height * myImages[btn_ani[btn_ani_count[i]]].h);
            btn_ani_count[i]++;
        }
        if (page == 'homepage') {
            if (btn_ani_count[0] == 8) {
                btn_ani_count[0] = 0;
            }
            if (btn_ani_count[1] == 16) {
                btn_ani_count[1] = 8;
            }
            if (btn_ani_count[2] == 24) {
                btn_ani_count[2] = 16;
            }
        } else if (page == 'gamechoose') {
            if (btn_ani_count[0] == 48) {
                btn_ani_count[0] = 0;
            }
            /*if (btn_ani_count[1] == 20) {
                btn_ani_count[1] = 9;
            }
            if (btn_ani_count[2] == 40) {
                btn_ani_count[2] = 20;
            }
            if (btn_ani_count[3] == 48) {
                btn_ani_count[3] = 40;
            }*/
        }
    }
    if (page == 'design' || page == 'play') {
        for (var i = 0; i < print_little_ar.length; i++) {
            ctx.drawImage(myImages[print_little_ar[i]].img,
            myImages[print_little_ar[i]].left,
            myImages[print_little_ar[i]].top,
            myImages[print_little_ar[i]].img.width * myImages[print_little_ar[i]].w,
            myImages[print_little_ar[i]].img.height * myImages[print_little_ar[i]].h);
        }
    } else if (page == 'save') {
        var save_txt_XY = new Array({ x: 340, y: 454 }, { x: 170, y: 548 }, { x: 480, y: 446 }
            , { x: 235, y: 406 }, { x: 295, y: 269 }, { x: 480, y: 315 },
            { x: 450, y: 181 });
        var memo_xy = new Array({ x: 411, y: 492 }, { x: 195, y: 604 }, { x: 523, y: 492 }
            , { x: 327, y: 442 }, { x: 372, y: 307 }, { x: 543, y: 381 },
            { x: 543, y: 234 });
        for (var i = 0; i < save_ar.length; i++) {
            ctx.font = "18px Verdana";
            ctx.fillStyle = "#ffffff";
            ctx.fillText(save_ar[i].name, save_txt_XY[i].x, save_txt_XY[i].y);
        } if (choose_save != null) {
            ctx.font = "18px Verdana";
            ctx.fillStyle = "#000000";
            ctx.fillText(save_ar[choose_save].name, save_txt_XY[choose_save].x, save_txt_XY[choose_save].y);
            if (draw_memo != null) {
                ctx.fillStyle = "#fff299";
                ctx.fillRect(memo_xy[choose_save].x, memo_xy[choose_save].y, 200, 40 * (1 + parseInt((save_ar[choose_save].memo.length / 12))));
                for (var i = 0; i < save_ar[choose_save].memo.length; i++) {
                    ctx.font = "18px Verdana";
                    ctx.fillStyle = "#000000";
                    ctx.fillText(save_ar[choose_save].memo[i], memo_xy[choose_save].x + 5 + (i * 16) % 180, memo_xy[choose_save].y + 20 + 25 * parseInt((i * 16) / 180));
                }
            }
        }
    } if ((page == 'play' && from == 'limit') || (page == 'play' && from == 'save')) {
        for (var i = 0; i < draw_line_ar.length; i++) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(draw_line_ar[i].startX, draw_line_ar[i].startY);
            ctx.lineTo(draw_line_ar[i].endX, draw_line_ar[i].endY);
            ctx.stroke();
            ctx.closePath();
        }
        for (var i = 0; i < draw_circle_ar.length; i++) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.arc(draw_circle_ar[i].cX, draw_circle_ar[i].cY, draw_circle_ar[i].r, (Math.PI / 180) * draw_circle_ar[i].sa, (Math.PI / 180) * draw_circle_ar[i].ea, false);
            ctx.stroke();
            ctx.closePath();
        } for (var i = 0; i < draw_point_ar.length; i++) {
            ctx.beginPath();
            ctx.strokeStyle = '#0000ff';
            ctx.lineWidth = 30;
            ctx.arc(draw_point_ar[i].x, draw_point_ar[i].y, 10, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
            ctx.stroke();
            ctx.closePath();
        }
        for (var i = 0; i < step_ar.length; i++) {
            ctx.font = "32px Verdana";
            ctx.fillStyle = "#ffffff";
            if (step_ar[i].step <= 9) {
                ctx.fillText(String(step_ar[i].step), map_data[9][step_ar[i].step_no].x - 10, map_data[9][step_ar[i].step_no].y + 10);
            } else {
                ctx.fillText(String(step_ar[i].step), map_data[9][step_ar[i].step_no].x - 20, map_data[9][step_ar[i].step_no].y + 10);
            }
        }
    } else if (page == 'play' && from == 'tablegame') {
        for (var i = 0; i < painter.length; i++) {
            for (var j = 1; j < painter[i].length; j++) {
                ctx.beginPath();
                ctx.strokeStyle = '#ff0000';
                ctx.lineCap = 'round';
                ctx.lineWidth = 10;
                ctx.moveTo(painter[i][j-1].x, painter[i][j-1].y);
                ctx.lineTo(painter[i][j].x, painter[i][j].y);
                //ctx.arc(painter[i][j].x, painter[i][j].y, 3, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
                ctx.stroke();
                ctx.closePath();
            }
        } for (var i = 0; i < draw_point_ar.length; i++) {
            ctx.beginPath();
            ctx.strokeStyle = '#0000ff';
            ctx.lineWidth = 30;
            ctx.arc(draw_point_ar[i].x, draw_point_ar[i].y, 10, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
            ctx.stroke();
            ctx.closePath();
        }
        for (var i = 0; i < step_ar.length; i++) {
            ctx.font = "32px Verdana";
            ctx.fillStyle = "#ffffff";
            if (step_ar[i].step <= 9) {
                ctx.fillText(String(step_ar[i].step), map_data[9][step_ar[i].step_no].x - 10, map_data[9][step_ar[i].step_no].y + 10);
            } else {
                ctx.fillText(String(step_ar[i].step), map_data[9][step_ar[i].step_no].x - 20, map_data[9][step_ar[i].step_no].y + 10);
            }
        }
    } else if (page == 'tablegame') {
        if (shape != null) {
            del_ar(myImages_link1, "table_start_txt");
            if (shape == 'rect') {
                for (var i = 0; i < rect_map.length; i++) {
                    ctx.drawImage(myImages[rect_map[i]].img,
                        myImages[rect_map[i]].left,
                        myImages[rect_map[i]].top,
                        myImages[rect_map[i]].img.width * myImages[rect_map[i]].w,
                        myImages[rect_map[i]].img.height * myImages[rect_map[i]].h);
                }
            } else if (shape == 'polygon') {
                for (var i = 0; i < polygon_map.length; i++) {
                    ctx.drawImage(myImages[polygon_map[i]].img,
                        myImages[polygon_map[i]].left,
                        myImages[polygon_map[i]].top,
                        myImages[polygon_map[i]].img.width * myImages[polygon_map[i]].w,
                        myImages[polygon_map[i]].img.height * myImages[polygon_map[i]].h);
                }
            } else if (shape == 'circle') {
                if (circle_page == 'circle1') {
                    for (var i = 0; i < circle_map.length; i++) {
                        ctx.drawImage(myImages[circle_map[i]].img,
                            myImages[circle_map[i]].left,
                            myImages[circle_map[i]].top,
                            myImages[circle_map[i]].img.width * myImages[circle_map[i]].w,
                            myImages[circle_map[i]].img.height * myImages[circle_map[i]].h);
                    }
                } else if (circle_page == 'circle2') {
                    for (var i = 0; i < circle2_map.length; i++) {
                        ctx.drawImage(myImages[circle2_map[i]].img,
                            myImages[circle2_map[i]].left,
                            myImages[circle2_map[i]].top,
                            myImages[circle2_map[i]].img.width * myImages[circle2_map[i]].w,
                            myImages[circle2_map[i]].img.height * myImages[circle2_map[i]].h);
                    }
                }
            }
        }
    }
    GameState(GS_WAIT_USER);
}
function homepage() {
    page = 'homepage';
    FRAME_RATE = 30;
    myImages_image = new Array('firstpage', 'img/firstpage.jpg', 0, 0, 1, 1, 'btn_game', 'img/btn_game.png', 134.8, 357.35, 1, 1,
        'btn_movie', 'img/btn_movie.png', 454.95, 267.85, 1, 1, 'btn_tablegame', 'img/btn_tableGame.png', 389.3, 628.8, 1, 1, 'sound_y',
        'img/volumeB1.png', 700, 950, 1, 1, 'sound_n', 'img/volumeB2.png', 700, 950, 1, 1,
        'empty', 'img/empty_img.png', 0, 0, 1, 1);
    for (var i = 1; i <= 8; i++) {
        myImages_image.push('ani_game' + String(i), 'img/ani_game' + String(i) + '.png', 120, 345, 1, 1);
        myImages_image.push('ani_movie' + String(i), 'img/ani_movie' + String(i) + '.png', 451, 265, 1, 1);
        myImages_image.push('ani_tablegame' + String(i), 'img/ani_tablegame' + String(i) + '.png', 380, 615, 1, 1);
    }
    btn_ani_count = new Array(0,8,16);
    //btn_ani_count[0] = 0;
    btn_ani = new Array("ani_game1", "ani_game2", "ani_game3", "ani_game4", "ani_game5", "ani_game6", "ani_game7", "ani_game8",
        "ani_movie1", "ani_movie2", "ani_movie3", "ani_movie4", "ani_movie5", "ani_movie6", "ani_movie7", "ani_movie8",
        "ani_tablegame1", "ani_tablegame2", "ani_tablegame3", "ani_tablegame4", "ani_tablegame5", "ani_tablegame6", "ani_tablegame7", "ani_tablegame8");
    myImages_link1 = new Array("firstpage", "ani_game1", "ani_movie1", "ani_tablegame1", "sound_y");
    myImages_link2 = new Array("sound_n", "sound_y");
    loop_function = draw;
    initimage();
}
function gamechoose() {
    page = 'gamechoose';
    myImages_image = new Array('gamechoose_BG', 'img/gamechoose_BG.png', 0, 0, 1, 1, 'attainments_btn1', 'img/attainments.png', 475, 182, 1, 1,'home','img/btn_S_goBack.png',141.99,708.35,1,1,
         'record_btn1', 'img/record.png', 634, 369, 1, 1, 'design_btn1', 'img/design.png', 575, 243, 1, 1, 'attainments_btn2', 'img/attainments_2.png', 475, 182, 1, 1, 'record_btn2', 'img/record_2.png', 634, 369, 1, 1,
         'design_btn2', 'img/design_2.png', 575, 243, 1, 1, 'choose_key1', 'img/key.png', 577, 153, 1, 1, 'choose_key2', 'img/key_2.png', 577, 153, 1, 1);
    for (var i = 1; i <= 9; i++) {
        myImages_image.push('attainments' + String(i), 'img/attainments' + String(i) + '.png', 475, 182, 1, 1);
    }
    for (var i = 1; i <= 11; i++) {
        myImages_image.push('key' + String(i), 'img/key' + String(i) + '.png', 577, 153, 1, 1);
    }
    for (var i = 1; i <= 20; i++) {
        myImages_image.push('design' + String(i), 'img/design' + String(i) + '.png', 575, 243, 1, 1);
    }
    for (var i = 1; i <= 8; i++) {
        myImages_image.push('record' + String(i), 'img/record' + String(i) + '.png', 634, 369, 1, 1);
    }
    btn_ani_count = new Array();
    btn_ani_count[0] = 0;
    btn_ani = new Array("attainments1", "attainments2", "attainments3", "attainments4", "attainments5", "attainments6", "attainments7", "attainments8", "attainments9",
        "key1", "key2", "key3", "key4", "key5", "key6", "key7", "key8", "key9", "key10", "key11",
        "design1", "design2", "design3", "design4", "design5", "design6", "design7", "design8", "design9", "design10",
        "design11", "design12", "design13", "design14", "design15", "design16", "design17", "design18", "design19", "design20",
        "record1", "record2", "record3", "record4", "record5", "record6", "record7", "record8");
    myImages_link1 = new Array("gamechoose_BG", "attainments_btn1", "record_btn1", "design_btn1", "choose_key1", "home");
    myImages_link2 = new Array("attainments_btn2", "record_btn2", "design_btn2","choose_key2");
    initimage();
}
function level() {
    page = 'level';
    myImages_image = new Array('level_BG', 'img/level_BG.png', 0, 0, 1, 1, 'simple1', 'img/simple.png', 546, 37, 1, 1,
        'middle2', 'img/middle_2.png', 616, 37, 1, 1, 'hard2', 'img/hard_2.png', 684, 37, 1, 1, 'home', 'img/bt_GAME_homepage.png', 387, 949, 1, 1,
        'last', 'img/bt_GAME_last.png', 86, 949, 1, 1, 'next', 'img/bt_GAME_next.png', 239, 949, 1, 1, 'road_simple1_little', 'img/road_simple1.png', 570, 110, 0.22, 0.22,
        'road_simple2_little', 'img/road_simple2.png', 560, 305, 0.25, 0.25, 'road_simple3_little', 'img/road_simple3.png', 570, 530, 0.22, 0.22,
        'road_simple1_big', 'img/road_simple1.png', 5, 300, 0.75, 0.75, 'simple2', 'img/simple_2.png', 546, 37, 1, 1, 'middle1', 'img/middle.png', 616, 37, 1, 1, 'hard1', 'img/hard.png', 684, 37, 1, 1,
        'road_middle1_little', 'img/road_middle1.png', 570, 110, 0.22, 0.22, 'road_middle2_little', 'img/road_middle2.png', 570, 320, 0.22, 0.22,
        'road_middle3_little', 'img/road_middle3.png', 570, 530, 0.22, 0.22, 'road_hard1_little', 'img/road_hard1.png', 565, 110, 0.23, 0.23,
        'road_hard2_little', 'img/road_hard2.png', 568, 320, 0.22, 0.22, 'road_hard3_little', 'img/road_hard3.png', 569, 530, 0.23, 0.23,
        'road_simple1_big', 'img/road_simple1.png', 5, 300, 0.75, 0.75, 'road_simple2_big', 'img/road_simple2.png', 5, 300, 0.75, 0.75,
        'road_simple3_big', 'img/road_simple3.png', 5, 300, 0.75, 0.75, 'road_middle1_big', 'img/road_middle1.png', 5, 300, 0.75, 0.75,
        'road_middle2_big', 'img/road_middle2.png', 5, 300, 0.75, 0.75, 'road_middle3_big', 'img/road_middle3.png', 5, 300, 0.75, 0.75,
        'road_hard1_big', 'img/road_hard1.png', 5, 300, 0.75, 0.75, 'road_hard2_big', 'img/road_hard2.png', 5, 300, 0.75, 0.75, 'road_hard3_big', 'img/road_hard3.png', 5, 300, 0.75, 0.75);
    myImages_link1 = new Array("level_BG", "simple1", "middle2", "hard2", "home", "last", "next",
        "road_simple1_little", "road_simple2_little", "road_simple3_little", "road_simple1_big");
    myImages_link2 = new Array("simple2", "middle1", "hard1", "road_middle1_little", "road_middle2_little", "road_middle3_little",
        "road_hard1_little", "road_hard2_little", "road_hard3_little", "road_simple1_big", "road_simple2_big", "road_simple3_big",
        "road_middle1_big", "road_middle2_big", "road_middle3_big", "road_hard1_big", "road_hard2_big", "road_hard3_big",
        "simple1", "middle2", "hard2", "road_simple1_little", "road_simple2_little", "road_simple3_little", "road_simple1_big");
    choose_map('simple', '1');
    choose_level = 'simple';
    loop_function = draw;
    initimage();
}
function limit() {
    page = 'limit';
    myImages_image = new Array('limit_BG', 'img/limit_BG.png', 0, 0, 1, 1, 'limit1_1', 'img/limit_1.png', 275, 578, 1, 1,
    'limit1_2', 'img/limit_1_2.png', 275, 578, 1, 1, 'limit2_1', 'img/limit_2.png', 270, 674, 1, 1,
    'limit2_2', 'img/limit_2_2.png', 270, 674, 1, 1, 'limit3_1', 'img/limit_3.png', 265, 770, 1, 1,
    'limit3_2', 'img/limit_3_2.png', 265, 770, 1, 1, 'home', 'img/bt_GAME_homepage.png', 497, 900, 1, 1,
    'last', 'img/bt_GAME_last.png', 222, 900, 1, 1, 'next', 'img/bt_GAME_next.png', 362, 900, 1, 1);
    myImages_link1 = new Array("limit_BG", "limit1_1", "limit2_1", "limit3_1", "home", "last", "next");
    myImages_link2 = new Array("limit1_2", "limit2_2", "limit3_2", "limit1_1", "limit2_1", "limit3_1");
    loop_function = draw;
    initimage();
}
function design() {
    if (page == 'limit') {
        from = 'limit';
    } else if (page == 'tablegame') {
        from = 'tablegame';
    } else if (page == 'save') {
        from = 'save';
    }
    page = 'design';
    myImages_image = new Array('design_BG', 'img/gamedesign_BG.png', 0, 0, 1, 1, 'background', 'img/designbtn_background.png', 546, 362, 1, 1,
    'obstacle', 'img/designbtn_obstacle.png', 546, 139, 1, 1, 'order', 'img/designbtn_order.png', 546, 250, 1, 1,
    'startend', 'img/designbtn_startend.png', 546, 28, 1, 1, 'obstacle_lock', 'img/designbtn_obstacle_lock.png', 546, 139, 1, 1,
    'order_lock', 'img/designbtn_order_lock.png', 546, 250, 1, 1, 'startend_lock', 'img/designbtn_startend_lock.png', 546, 28, 1, 1,
    'explain', 'img/explain.png', 88, 73, 1, 1, 'save', 'img/bt_GAME_save.png', 161, 949, 1, 1,
    'home', 'img/bt_GAME_homepage.png', 432, 949, 1, 1, 'last', 'img/bt_GAME_last.png', 27, 949, 1, 1,
    'next', 'img/bt_GAME_next.png', 297, 949, 1, 1, 'explain_end', 'img/explain_end.png', 156, 76, 1, 1,
   'explain_obstacle', 'img/explain_obstacle.png', 175, 117, 1, 1, 'explain_order', 'img/explain_order.png', 129, 73, 1, 1,
   'explain_start', 'img/explain_start.png', 156, 76, 1, 1, 'explain_style', 'img/explain_style.png', 102, 117, 1, 1
    , 'map', map.path, map.left, map.top, map.w, map.h, 'bg_style1', 'img/bg_style1.png', 45, 281, 0.6, 0.6,
        'bg_style2', 'img/bg_style2.png', 45, 281, 0.6, 0.6, 'bg_style3', 'img/bg_style3.png', 45, 281, 0.6, 0.6,
        'bg_style4', 'img/bg_style4.png', 45, 281, 0.6, 0.6, 'bg_style5', 'img/bg_style5.png', 45, 281, 0.6, 0.6,
        'down_line', 'img/down_btn_line.png', 546, 455, 1, 1, 'down_start', 'img/down_btn_start.png', 551, 180, 1, 1,
        'down_end', 'img/down_btn_end.png', 551, 226, 1, 1, 'down_startend', 'img/down_btn_startend.png', 551, 134, 1, 1,
        'down_ob_edge', 'img/down_btn_ob_edge.png', 551, 294, 1, 1, 'down_ob_node', 'img/down_btn_ob_node.png', 551, 248, 1, 1,
        'down_style1', 'img/down_btn_style1.png', 551, 468, 1, 1, 'down_style2', 'img/down_btn_style2.png', 551, 514, 1, 1,
        'down_style3', 'img/down_btn_style3.png', 551, 560, 1, 1, 'down_style4', 'img/down_btn_style4.png', 551, 606, 1, 1,
        'down_order', 'img/down_btn_order.png', 551, 356, 1, 1,
        'mark_startend', 'img/mark_startend.png', 574, 158, 1, 1, 'mark_start', 'img/mark_start.png', 578, 206, 1, 1,
        'mark_end', 'img/mark_end.png', 576, 248, 1, 1, 'mark_ob_edge', 'img/mark_ob_edge.png', 580, 270, 0.7, 0.7,
        'mark_ob_node', 'img/mark_ob_node.png', 580, 318, 0.85, 0.85, 'explain_startend', 'img/explain_startend.png', 120, 106, 1, 1,
        'explain_ob_node', 'img/explain_ob_node.png', 118, 120, 1, 1, 'explain_ob_edge', 'img/explain_ob_edge.png', 118, 120, 1, 1,
        'explain_btn_startend', 'img/explain_btn_startend.png', 170, 88, 1, 1);
    var j = 0;
    var a = 0;
    for (var i = 0; i <= 19; i++) {
        j = Math.floor(i / 5);
        a = i % 5;
        myImages_image.push(String(i + 3), 'img/' + String(i + 3) + '.png', 35 * a + 561, 400 + 38 * j, 1, 1);
        order_real_XY.push(35 * a + 561, 400 + 38 * j);
    }
    myImages_link1 = new Array("design_BG", "bg_style1", "background", "order_lock", "obstacle_lock", "startend_lock", "explain",
        "save", "home", "last", "next", "map");
    myImages_link2 = new Array("explain_end", "explain_obstacle", "explain_order", "explain_start", "explain_style"
        , "order", "obstacle", "startend", "explain", "bg_style1", "bg_style2", "bg_style3", "bg_style4", "bg_style5", "explain_startend",
        "explain_ob_node", "explain_ob_edge", "explain_btn_startend");
    print_little_ar = new Array();
    initimage();
    loop_function = draw;
    limit_print();
}
function play() {
    soundloopreplay('game');
    soundpause('first');
    page = 'play';
    myImages_image = new Array('bg_style1', 'img/bg_style1.png', 0, 0, 1, 1, 'bg_style2', 'img/bg_style2.png', 0, 0, 1, 1,
         'bg_style3', 'img/bg_style3.png', 0, 0, 1, 1, 'bg_style4', 'img/bg_style4.png', 0, 0, 1, 1, 'map', map.path, 19, 142, 1, 1,
         'home', 'img/bt_GAME_homepage.png', 650, 949, 1, 1, 'mark_startend', 'img/mark_startend.png', 574, 158, 1.5, 1.5, 'mark_start', 'img/mark_start.png', 578, 206, 1.5, 1.5,
         'mark_end', 'img/mark_end.png', 576, 248, 1.5, 1.5, 'mark_ob_edge', 'img/mark_ob_edge.png', 580, 270, 1.5, 1.5,
         'mark_ob_node', 'img/mark_ob_node.png', 580, 318, 1.5, 1.5, 'return', 'img/return_btn.png', 500, 949, 1, 1, 'again', 'img/again_btn.png', 350, 949, 1, 1);
    var j = 0;
    var a = 0;
    for (var i = 0; i <= 19; i++) {
        j = Math.floor(i / 5);
        a = i % 5;
        myImages_image.push(String(i + 3), 'img/' + String(i + 3) + '.png', 35 * a + 561, 400 + 38 * j, 1.5, 1.5);
        order_real_XY.push(35 * a + 561, 400 + 38 * j);
    }
    myImages_link1 = new Array(map_data[6], "map", "home", "return","again");
    initimage();
    loop_function = draw;
    print_play_limit();
}
function save() {
    page = 'save';
    myImages_image = new Array('record_BG', 'img/save_bg.png', 0, 0, 1, 1, 'home', 'img/save_home_btn.png', 28, 288, 1, 1,
        'last', 'img/save_last_btn.png', 598, 584, 1, 1, 'next', 'img/save_ok_btn.png', 578, 74, 1, 1, 'del', 'img/del.png', 575, 175, 1, 1,
        'save_1', 'img/save_1.png', 334, 419, 1, 1, 'save_2', 'img/save_2.png', 149, 488, 1, 1, 'save_3', 'img/save_3.png', 471, 396, 1, 1,
        'save_4', 'img/save_4.png', 201, 342, 1, 1, 'save_5', 'img/save_5.png', 269, 220, 1, 1, 'save_6', 'img/save_6.png', 445, 269, 1, 1,
        'save_7', 'img/save_7.png', 429, 130, 1, 1);
    myImages_link1 = new Array("record_BG", "home", "last", "next");
    myImages_link2 = new Array();
    for (var i = 1; i <= 7; i++) {
        myImages_link1.push("save_" + String(i));
    }
    initimage();
    loop_function = draw;
}
function key() {
    page = 'key';
    //soundloopplay('key_music');
    soundpause('first');
    myImages_image = new Array('BG_Key', 'img/BG_Key.png', 0, 0, 1, 1, 'btn_K_01_1', 'img/btn_K_01_1.png', 61, 61, 1, 1, 'btn_K_01_2', 'img/btn_K_01_2.png', 61, 61, 1, 1, 'btn_K_02_1', 'img/btn_K_02_1.png', 331, 94, 1, 1, 'btn_K_02_2', 'img/btn_K_02_2.png', 331, 94, 1, 1
        , 'btn_K_03_1', 'img/btn_K_03_1.png', 573, 75, 1, 1, 'btn_K_03_2', 'img/btn_K_03_2.png', 573, 75, 1, 1, 'btn_K_04_1', 'img/btn_K_04_1.png', 66, 896, 1, 1, 'btn_K_04_2', 'img/btn_K_04_2.png', 66, 896, 1, 1, 'btn_K_05_1', 'img/btn_K_05_1.png', 317, 902, 1, 1, 'btn_K_05_2', 'img/btn_K_05_2.png', 317, 902, 1, 1
        , 'btn_K_06_1', 'img/btn_K_06_1.png', 590, 900, 1, 1, 'btn_K_06_2', 'img/btn_K_06_2.png', 590, 900, 1, 1, 'home', 'img/btn_K_goBack.png', 528, 54, 1, 1, 'continue', 'img/btn_K_continue.png', 438, 875, 1, 1, 'continue2', 'img/continue2.png', 438, 875, 1, 1, 'tip_say1', 'img/tip_say1.png', 636, 860, 0.5, 0.5, 'tip_say2', 'img/tip_say2.png', 636, 860, 1, 1
        , 'tip_say3', 'img/tip_say3.png', 636, 860, 1, 1, 'tip_back', 'img/tip_back.png', 209, 875, 1, 1);
    myImages_link1 = new Array("BG_Key", "btn_K_01_1", "btn_K_02_1", "btn_K_03_1", "btn_K_04_1", "btn_K_05_1", "btn_K_06_1", "home", "continue", "tip_say1", "btn_K_01_2");
    myImages_link2 = new Array("btn_K_01_2", "btn_K_02_2", "btn_K_03_2", "btn_K_04_2", "btn_K_05_2", "btn_K_06_2", "continue", "btn_K_01_1", "btn_K_02_1", "btn_K_03_1", "btn_K_04_1", "btn_K_05_1", "btn_K_06_1", "tip_say1", "tip_say2", "tip_say3", "continue2", "continue");
    loop_function = draw;
    initimage();
    keymovieload();
    key_draw_finish = true;
    //MD_key();
}
function keymovieload() {
    myVideo_key = document.createElement('video');
    keymovie = new Array('movie_key1_1', 'movie_key1_2', 'movie_key1_3', 'movie_key1_4', 'movie_key1_5', 'movie_key1_6', 'movie_key1_7', 'movie_key1_8', 'movie_key1_9', 'movie_key2_1', 'movie_key2_2', 'movie_key2_3'
        , 'movie_key2_4', 'movie_key2_5', 'movie_key2_6', 'movie_key2_7', 'movie_key2_8', 'movie_key2_9', 'movie_key2_10', 'movie_key2_11', ' movie_key3_1', ' movie_key3_2', ' movie_key3_3', ' movie_key3_4', ' movie_key3_5'
        , ' movie_key3_6', ' movie_key3_7', ' movie_key4_1', ' movie_key4_2', ' movie_key4_3', ' movie_key4_4', ' movie_key4_5', ' movie_key4_6', ' movie_key4_7', ' movie_key5_1', ' movie_key5_2', ' movie_key5_3',
        ' movie_key5_4', ' movie_key5_5', ' movie_key5_6', ' movie_key5_7', 'movie_key6_1', 'movie_key6_2', 'movie_key6_3', 'movie_key6_4', 'movie_key6_5', 'movie_key6_6', 'movie_key6_7', 'movie_key6_8',
        'movie_key6_9', 'movie_key6_10', 'movie_key6_11', 'movie_key6_12');
    soundpause('first');
    soundpause('game');
    myVideo_key.controls = false;
    myVideo_key.style.position = 'absolute';
    myVideo_key.style.top = '165px';
    myVideo_key.style.left = '92px';
    myVideo_key.style.width = '600px';
    myVideo_key.style.height = '700px';
    document.body.appendChild(myVideo_key);
    keymovieplay();
    //MD_key();
}


function keymovieplay() {
    myVideo_key.src = keymovie[0] + '.mp4';
    myVideo_key.play();
}

function MD_key() {
    alert("請點擊continue繼續影片!");
    key_draw_finish = false;
    /*if (MD_range('btn_K_01_1')) {
        changimg(link_ar = new Array(1, 0));
    } else if (MD_range('btn_K_02_1')) {
        changimg(link_ar = new Array(2, 1));
    } else if (MD_range('btn_K_03_1')) {
        changimg(link_ar = new Array(3, 2));
    } else if (MD_range('btn_K_04_1')) {
        changimg(link_ar = new Array(4, 3));
    } else if (MD_range('btn_K_05_1')) {
        changimg(link_ar = new Array(5, 4));
    } else if (MD_range('btn_K_06_1')) {
        changimg(link_ar = new Array(6, 5));
    }*/
}
function key_home() {
    if (MU_range('home')) {
        soundpause('key2-2');
        soundpause('key5-2');
        soundpause('key5-3');
        soundpause('key6-12');
        myVideo_key.pause();
        myVideo_key.style.display = 'none';
        // this.i = undefined;
        back_home();
    }
}
function keymovie_btn() {
    var flag = false;
    if (this.i == undefined) {
        this.i = 0;
    }
    if (MU_range('btn_K_01_1')) {
        this.i = 0;
        myVideo_key.src = keymovie[this.i] + '.mp4';
        myVideo_key.play();
        changimg(link_ar = new Array(1, 7, 10, 0));
        if (this.i == 9 || this.i == 20 || this.i == 27 || this.i == 34 || this.i == 41 || this.i == 0) {
            del_ar(myImages_link1, "tip_back");
        }
    } else if (MU_range('btn_K_02_1')) {
        this.i = 9;
        myVideo_key.src = keymovie[this.i] + '.mp4';
        myVideo_key.play();
        changimg(link_ar = new Array(2, 8, 10, 1));
        if (this.i == 9 || this.i == 20 || this.i == 27 || this.i == 34 || this.i == 41 || this.i == 0) {
            del_ar(myImages_link1, "tip_back");
        }
    } else if (MU_range('btn_K_03_1')) {
        this.i = 20;
        myVideo_key.src = keymovie[this.i] + '.mp4';
        myVideo_key.play();
        changimg(link_ar = new Array(3, 9, 10, 2));
        if (this.i == 9 || this.i == 20 || this.i == 27 || this.i == 34 || this.i == 41 || this.i == 0) {
            del_ar(myImages_link1, "tip_back");
        }
    } else if (MU_range('btn_K_04_1')) {
        this.i = 27;
        myVideo_key.src = keymovie[this.i] + '.mp4';
        myVideo_key.play();
        changimg(link_ar = new Array(4, 10, 10, 3));
        if (this.i == 9 || this.i == 20 || this.i == 27 || this.i == 34 || this.i == 41 || this.i == 0) {
            del_ar(myImages_link1, "tip_back");
        }
    } else if (MU_range('btn_K_05_1')) {
        this.i = 34;
        myVideo_key.src = keymovie[this.i] + '.mp4';
        myVideo_key.play();
        changimg(link_ar = new Array(5, 11, 10, 4));
        if (this.i == 9 || this.i == 20 || this.i == 27 || this.i == 34 || this.i == 41 || this.i == 0) {
            del_ar(myImages_link1, "tip_back");
        }
    } else if (MU_range('btn_K_06_1')) {
        this.i = 41;
        myVideo_key.src = keymovie[this.i] + '.mp4';
        myVideo_key.play();
        changimg(link_ar = new Array(6, 12, 10, 5));
        if (this.i == 9 || this.i == 20 || this.i == 27 || this.i == 34 || this.i == 41 || this.i == 0) {
            del_ar(myImages_link1, "tip_back");
        }
    } else if (MU_range('continue')&&myImages_link1[8]=="continue") {
        if (this.i !== 8 && this.i !== 19 && this.i !== 26 && this.i !== 33 && this.i !== 40 && this.i !== 52) {
            this.i++;
        }
        myVideo_key.src = keymovie[this.i] + '.mp4';
        myVideo_key.play();
        if (this.i !== 9 && this.i !== 20 && this.i !== 27 && this.i !== 34 && this.i !== 41 && this.i !== 0) {
            if (myImages_link1.length <= 11) {
                myImages_link1.push("tip_back");
                draw();
            }
        }
    } else if (MU_range('tip_back') && myImages_link1.length > 11) {
        if (this.i == 9 || this.i == 20 || this.i == 27 || this.i == 34 || this.i == 41 || this.i == 0) {
            del_ar(myImages_link1, "tip_back");
        } else {
            if (myImages_link1.length == 11) {
                myImages_link1.push("tip_back");
            }
            this.i--;
            if (this.i == 9 || this.i == 20 || this.i == 27 || this.i == 34 || this.i == 41 || this.i == 0) {
                del_ar(myImages_link1, "tip_back");
            }
        }
        myVideo_key.src = keymovie[this.i] + '.mp4';
        myVideo_key.play();
    }
    if (this.i == 8) {
        changimg(link_ar = new Array(8, 16));
    }
    if (this.i == 19) {
        changimg(link_ar = new Array(8, 16));
    }
    if (this.i == 26) {
        changimg(link_ar = new Array(8, 16));
    }
    if (this.i == 33) {
        changimg(link_ar = new Array(8, 16));
    }
    if (this.i == 40) {
        changimg(link_ar = new Array(8, 16));
    }
    if (this.i == 52) {
        changimg(link_ar = new Array(8, 16));
    }
    if (this.i !== 8 && this.i !== 19 && this.i !== 26 && this.i !== 33 && this.i !== 40 && this.i !== 52) {
        changimg(link_ar = new Array(8, 17));
    }
    if (this.i == 10) {
        changimg(link_ar = new Array(9, 14));
    }
    if (this.i == 35) {
        changimg(link_ar = new Array(9, 14));
    }
    if (this.i == 36) {
        changimg(link_ar = new Array(9, 14));
    }
    if (this.i == 52) {
        changimg(link_ar = new Array(9, 14));
    }
    if (this.i !== 10 && this.i !== 35 && this.i !== 36 && this.i !== 52) {
        changimg(link_ar = new Array(9, 13));
    }

    if (MU_range('tip_say2')) {
        if (this.i == 10) {
            soundkey('key2-2');
            changimg(link_ar = new Array(9, 15));
        } else if (this.i == 35) {
            soundkey('key5-2');
            changimg(link_ar = new Array(9, 15));
        } else if (this.i == 36) {
            soundkey('key5-3');
            changimg(link_ar = new Array(9, 15));
        } else if (this.i == 52) {
            soundkey('key6-12');
            changimg(link_ar = new Array(9, 15));
        }

    }

    //------------------------停止語音
    if (this.i !== 10) {
        soundpause('key2-2');
    }
    if (this.i !== 35) {
        soundpause('key5-2');
    }
    if (this.i !== 36) {
        soundpause('key5-3');
    }
    if (this.i !== 52) {
        soundpause('key6-12');
    }
}
function homepage_movie() {
    page = 'homepage_movie';
    myImages_image = new Array('BG_Movie', 'img/BG_Movie.png', 0, 0, 1, 1, 'btn_M_topEASY', 'img/btn_M_topEASY.png', 109, 85.2, 1, 1, 'btn_M_Easy', 'img/btn_M_Easy.png', 49.23, 888.7, 1, 1, 'btn_M_goBack', 'img/btn_M_goBack.png', 616, 75, 1, 1,
        'btn_M_Hard', 'img/btn_M_Hard.png', 590.82, 901.57, 1, 1, 'btn_M_Medium', 'img/btn_M_Medium.png', 318.61, 903.59, 1, 1, 'btn_M_topHARD', 'img/btn_M_topHARD.png', 105, 75, 1, 1, 'btn_M_topMEDIUM', 'img/btn_M_topMEDIUM.png', 96, 83, 1, 1);
    myImages_link1 = new Array("BG_Movie", "btn_M_goBack", "btn_M_Easy", "btn_M_Hard", "btn_M_Medium", "btn_M_topEASY");
    myImages_link2 = new Array("btn_M_topEASY", "btn_M_topMEDIUM", "btn_M_topHARD");
    loop_function = draw;
    initimage();
    movieplay();
    movie_btn();
}
function movieplay() {
    myVideo = document.createElement('video');
    soundpause('first');
    soundpause('game');
    myVideo.controls = true;
    myVideo.style.position = 'absolute';
    myVideo.style.top = '175px';
    myVideo.style.left = '96px';
    myVideo.style.width = '600px';
    myVideo.style.height = '700px';
    document.body.appendChild(myVideo);
    myVideo.src = 'movie1.mp4';
    if (sound_d == false) {
        myVideo.play();
    } else if (sound_d == true) {
        movie_volume();
        myVideo.play();
    }
}
function movie_volume() {
    myVideo.volume = 0;
}
function movie_btn() {
    if (MU_range('btn_M_goBack')) {
        back_home();
        myVideo.pause();
        myVideo.style.display = 'none';
    } else if (MU_range('btn_M_Easy')) {
        myVideo.src = 'movie1.mp4';
        if (sound_d == false) {
            myVideo.play();
        } else if (sound_d == true) {
            movie_volume();
            myVideo.play();
        }
        changimg(link_ar = new Array(5, 0));
    } else if (MU_range('btn_M_Medium')) {
        myVideo.src = 'movie2.mp4';
        if (sound_d == false) {
            myVideo.play();
        } else if (sound_d == true) {
            movie_volume();
            myVideo.play();
        }
        changimg(link_ar = new Array(5, 1));
    } else if (MU_range('btn_M_Hard')) {
        myVideo.src = 'movie3.mp4';
        if (sound_d == false) {
            myVideo.play();
        } else if (sound_d == true) {
            movie_volume();
            myVideo.play();
        }
        changimg(link_ar = new Array(5, 2));
    }
}
function win() {
    page = 'win';
    myImages_image = new Array('BG_Achievement', 'img/BG_Achievement.png', 0, 0, 1, 1, 'badge_B', 'img/badge_B.png', 260, 336, 1, 1, 'badge_A',
        'img/badge_A.png', 260, 336, 1, 1, 'last', 'img/btn_A_goBack_A.png', 18, 971, 1, 1, 'btn_A_goBack_B', 'img/btn_A_goBack_B.png', 18, 951, 1, 1,
        'home', 'img/btn_A_goHOME_A.png', 725, 971, 1, 1, 'btn_A_goHOME_B', 'img/btn_A_goHOME_B.png', 695, 951, 1, 1, 'perfect_A', 'img/perfect_A.png', 214, 85, 1, 1,
        'perfect_B', 'img/perfect_B.png', 214, 85, 1, 1, 'start_B_1', 'img/start_B.png', 13, 524, 1, 1, 'start_B_2', 'img/start_B.png', 92, 524, 1, 1, 'start_B_3', 'img/start_B.png', 172, 524, 1, 1
        , 'start_B_4', 'img/start_B.png', 255, 868, 1, 1, 'start_B_5', 'img/start_B.png', 335, 868, 1, 1, 'start_B_6', 'img/start_B.png', 415, 868, 1, 1, 'start_B_7', 'img/start_B.png', 518, 523, 1, 1
        , 'start_B_8', 'img/start_B.png', 598, 523, 1, 1, 'start_B_9', 'img/start_B.png', 678, 523, 1, 1, 'start_A_1', 'img/start_A.png', 13, 524, 1, 1, 'start_A_2', 'img/start_A.png', 92, 524, 1, 1, 'start_A_3', 'img/start_A.png', 172, 524, 1, 1
        , 'start_A_4', 'img/start_A.png', 255, 868, 1, 1, 'start_A_5', 'img/start_A.png', 335, 868, 1, 1, 'start_A_6', 'img/start_A.png', 415, 868, 1, 1, 'start_A_7', 'img/start_A.png', 518, 523, 1, 1
        , 'start_A_8', 'img/start_A.png', 598, 523, 1, 1, 'start_A_9', 'img/start_A.png', 678, 523, 1, 1);
    myImages_link1 = new Array("BG_Achievement", "badge_B", "last", "home", "perfect_B", "start_B_1", "start_B_2", "start_B_3", "start_B_4", "start_B_5", "start_B_6", "start_B_7", "start_B_8", "start_B_9");
    myImages_link2 = new Array("badge_A", "perfect_A", "btn_A_goBack_B", "btn_A_goHOME_B", "start_A_1", "start_A_2", "start_A_3", "start_A_4", "start_A_5", "start_A_6", "start_A_7", "start_A_8", "start_A_9");
    loop_function = draw;
    initimage();
    winArray();
}
function winArray() {
    if (win_ar[1] == true) {
        changimg(link_ar = new Array(5, 4));
    } if (win_ar[2] == true) {
        changimg(link_ar = new Array(6, 5));
    } if (win_ar[3] == true) {
        changimg(link_ar = new Array(7, 6));
    } if (win_ar[4] == true) {
        changimg(link_ar = new Array(8, 7));
    } if (win_ar[5] == true) {
        changimg(link_ar = new Array(9, 8));
    } if (win_ar[6] == true) {
        changimg(link_ar = new Array(10, 9));
    } if (win_ar[7] == true) {
        changimg(link_ar = new Array(11, 10));
    } if (win_ar[8] == true) {
        changimg(link_ar = new Array(12, 11));
    } if (win_ar[9] == true) {
        changimg(link_ar = new Array(13, 12));
    } if (win_ar[1] == true && win_ar[2] == true && win_ar[3] == true && win_ar[4] == true &&
    win_ar[5] == true && win_ar[6] == true && win_ar[7] == true && win_ar[8] == true && win_ar[9] == true) {
        changimg(link_ar = new Array(1, 0, 4, 1));
    }
}
function MD_win_choose() {
    if (MD_range('last')) {
        changimg(link_ar = new Array(2, 2));
    } else if (MD_range('home')) {
        changimg(link_ar = new Array(3, 3));
    }
    draw();
}
function win_btn() {
    below_btn('win');
}
function homepage_tablegame() {
    page = 'tablegame';
    myImages_image = new Array('table_game_BG', 'img/tg_BG.png', 0, 0, 1, 1, 'table_game_circle', 'img/tg_circle.png', 408, 134, 1, 1,
        'table_game_circle_choose', 'img/tg_circle_choose.png', 408, 134, 1, 1, 'table_game_rect', 'img/tg_rect.png', 197, 130, 1, 1,
        'table_game_rect_choose', 'img/tg_rect_choose.png', 197, 130, 1, 1, 'table_game_polygon', 'img/tg_polygon.png', 398, 33, 1, 1,
        'table_game_polygon_choose', 'img/tg_polygon_choose.png', 398, 33, 1, 1, 'home', 'img/tg_goback.png', 57, 862, 1, 1,
        'next', 'img/tg_next.png', 658, 914, 1, 1, 'table_game_line', 'img/tg_line.png', 159, 747, 1, 1,
        'table_start_txt', 'img/tg_start.png', 251, 556, 1, 1, 'table_game_circle_next', 'img/tg_circle_next.png', 603, 837, 1, 1, 'table_game_circle_last', 'img/tg_circle_last.png', 138, 837, 1, 1,
        'road_simple1_little', 'img/road_simple1.png', 144, 778, 0.2, 0.2, 'road_simple2_little', 'img/road_simple2.png', 144, 778, 0.2, 0.2,
        'road_simple3_little', 'img/road_simple3.png', 144, 778, 0.2, 0.2, 'road_middle1_little', 'img/road_middle1.png', 307, 778, 0.2, 0.2,
        'road_middle2_little', 'img/road_middle2.png', 297, 778, 0.2, 0.2, 'road_middle3_little', 'img/road_middle3.png', 307, 778, 0.2, 0.2,
        'road_hard1_little', 'img/road_hard1.png', 460, 778, 0.2, 0.2, 'road_hard2_little', 'img/road_hard2.png', 460, 778, 0.2, 0.2,
        'road_hard3_little', 'img/road_hard3.png', 184, 778, 0.2, 0.2, 'road_simple1_big', 'img/road_simple1.png', 128.5, 250, 0.7, 0.7, 'road_simple2_big', 'img/road_simple2.png', 128.5, 250, 0.7, 0.7,
        'road_simple3_big', 'img/road_simple3.png', 128.5, 250, 0.7, 0.7, 'road_middle1_big', 'img/road_middle1.png', 132, 250, 0.68, 0.68,
        'road_middle2_big', 'img/road_middle2.png', 165, 285, 0.6, 0.6, 'road_middle3_big', 'img/road_middle3.png', 138, 250, 0.68, 0.68,
        'road_hard1_big', 'img/road_hard1.png', 128.5, 250, 0.7, 0.7, 'road_hard2_big', 'img/road_hard2.png', 165, 285, 0.6, 0.6,
        'road_hard3_big', 'img/road_hard3.png', 160, 280, 0.65, 0.65);
    myImages_link1 = new Array("table_game_BG", "table_game_circle", "table_game_rect", "table_game_polygon", "table_start_txt", "home", "next");
    myImages_link2 = new Array("table_game_circle_choose", "table_game_rect_choose", "table_game_polygon_choose", "table_game_circle", "table_game_rect", "table_game_polygon");
    loop_function = draw;
    initimage();
}
function tg_btn() {
    if (MU_range('table_game_circle')) {
        shape = 'circle';
        changimg(link_ar = new Array(1, 0, 2, 4, 3, 5));
        tg_choose_map = 'simple2';
        circle_map[0] = 'road_' + tg_choose_map + '_big';
    } else if (MU_range('table_game_rect')) {
        shape = 'rect';
        changimg(link_ar = new Array(1, 3, 2, 1, 3, 5));
        tg_choose_map = 'simple3';
        rect_map[0] = 'road_' + tg_choose_map + '_big';
    } else if (MU_range('table_game_polygon')) {
        shape = 'polygon';
        changimg(link_ar = new Array(1, 3, 2, 4, 3, 2));
        tg_choose_map = 'simple1';
        polygon_map[0] = 'road_' + tg_choose_map + '_big';
    }
    if (shape == 'rect') {
        for (var i = 0; i < rect_map_num.length; i++) {
            if (MU_range('road_' + all_map[rect_map_num[i]] + '_little')) {
                tg_choose_map = all_map[rect_map_num[i]];
                rect_map[0] = 'road_' + tg_choose_map + '_big';
            }
        }
    } else if (shape == 'polygon') {
        for (var i = 0; i < polygon_map_num.length; i++) {
            if (MU_range('road_' + all_map[polygon_map_num[i]] + '_little')) {
                tg_choose_map = all_map[polygon_map_num[i]];
                polygon_map[0] = 'road_' + tg_choose_map + '_big';
            }
        }
    }
    else if (shape == 'circle') {
        if (circle_page == 'circle1') {
            for (var i = 0; i < circle_map_num.length - 1; i++) {
                if (MU_range('road_' + all_map[circle_map_num[i]] + '_little')) {
                    tg_choose_map = all_map[circle_map_num[i]];
                    circle_map[0] = 'road_' + tg_choose_map + '_big';
                }
            } if (MU_range('table_game_circle_next')) {
                circle_page = 'circle2';
                tg_choose_map = 'hard3';
            }
        } else if (circle_page == 'circle2') {
            if (MU_range('road_hard3_little')) {
                tg_choose_map = 'hard3';
                circle2_map[0] = 'road_' + tg_choose_map + '_big';
            } if (MU_range('table_game_circle_last')) {
                circle_page = 'circle1';
                tg_choose_map = 'simple2';
            }
        }
    } if (MU_range('home')) {
        soundreplay('select');
        back_home();
    } else if (MU_range('next')) {
        soundreplay('select');
        next_btn('tablegame');
    }
}
function mousedown_event() {   
    flat = true;
    if (flat == true) {
        ta.textContent = null;
        mouse.length = 0;
        mouse_count = 0;
        record_mouse_XY("mousedown");
        GameState(GS_MOUSEDOWN);
    }
}
function mousemove_event() {
    if (flat == true) {
        record_mouse_XY("mousemove");
        if (page == 'design') {
            GameState(GS_MOUSEMOVE);
        } else if (page == 'play') {
            GameState(GS_PLAY_MOUSEMOVE);
        }
    }
}
function mouseup_event() {
    if (flat == true) {
        flat = false;
        record_mouse_XY("mouseup");
        GameState(GS_MOUSEUP);
    }
}
function record_mouse_XY(mouseType) {
    var mouseObj = new Object();
        if (mouseType == 'mouseup') {
        //alert('fghh');
    }
    else {
        event.preventDefault();
        x = event.targetTouches[0].pageX;
        y = event.targetTouches[0].pageY;
    /*x = event.clientX;
    y = event.clientY;*/
    mouseObj.type = mouseType;
    mouseObj.x = x;
    mouseObj.y = y;
    mouse[mouse_count] = mouseObj;
    mouse_count++;
    } 
}
function MU_switch_page() {
    switch (page) {
        case 'hp_animation':
            hp_ani_btn();
            break;
        case 'homepage':
            homepage_btn();
            break;
        case 'gamechoose':
            gamechoose_btn();
            break;
        case 'level':
            level_btn();
            break;
        case 'limit':
            limit_switch();
            break;
        case 'design':
            design_btn();
            break;
        case 'save':
            save_btn();
            break;
        case 'play':
            play_btn();
            break;
        case 'homepage_movie':
            movie_btn();
            break;
        case 'win':
            win_btn();
            break;
        case 'tablegame':
            tg_btn();
            break;
        case 'tg_play':
            MU_tg_play();
            break;
        case 'key':
            keymovie_btn();
            key_home();
            break;
    }
    for (var i = 0; i < mouse_count; i++) {
        ta.textContent += mouse[i].type + "XY:(" + mouse[i].x + "," + mouse[i].y + ")\n";
    }
}
function MD_switch_page() {
    switch (page) {
        case 'gamechoose':
            MD_gamechoose_btn_color();
            break;
        case 'design':
            MD_design();
            break;
        case 'play':
            MD_play();
            break;
    }
}
//看點到誰
function MD_range(image) {
    if (mouse[0].x >= myImages[image].left && mouse[0].x <= myImages[image].left + myImages[image].img.width * myImages[image].w
        && mouse[0].y >= myImages[image].top && mouse[0].y <= myImages[image].top + myImages[image].img.height * myImages[image].h) {
        return true;
    } else {
        return false;
    }
}
function MU_range(image) {
    if (mouse[mouse.length - 1].x >= myImages[image].left && mouse[mouse.length - 1].x <= myImages[image].left + myImages[image].img.width * myImages[image].w
       && mouse[mouse.length - 1].y >= myImages[image].top && mouse[mouse.length - 1].y <= myImages[image].top + myImages[image].img.height * myImages[image].h) {
        return true;
    } else {
        return false;
    }
}
//點及畫面切換到遊戲選項畫面
function homepage_btn() {
    if (MU_range('btn_game')) {
        soundreplay('select');
        GameState(GS_GAMECHOOSE);
    } else if (MU_range('btn_movie')) {
        soundreplay('select');
        GameState(GS_HOMEPAGE_MOVIE);
    } else if (MU_range('btn_tablegame')) {
        soundreplay('select');
        GameState(GS_HOMEPAGE_TABLEGAME);
    }
    if (MU_range('sound_y') || MU_range('sound_n')) {
        if (sound_d == false) {
            changimg(link_ar = new Array(4, 0));
            sound_d = true;
            soundpause('first');
        } else if (sound_d == true) {
            changimg(link_ar = new Array(4, 1));
            sound_d = false;
            soundloopreplay('first');
        }
    }
}
//遊戲選項畫面的按鈕
function gamechoose_btn() {
    if (MU_range('attainments_btn1')) {
        soundreplay('select');
        //alert("attainments");
        GameState(GS_WIN);
    } else if (MU_range('record_btn1')) {
        soundreplay('select');
        //alert("record");
        if (save_ar.length == 0) {
            alert("您還沒有儲存任何紀錄喔!!\nYou don't have any record!");
        } else {
            GameState(GS_SAVE);
        }
    } else if (MU_range('design_btn1')) {
        soundreplay('select');
        GameState(GS_LEVEL);
    } else if (MU_range('choose_key1')) {
        soundreplay('select');
        GameState(GS_KEY);
    } else if (MU_range('home')) {
        GameState(GS_HOMEPAGE);
    }
}
//limit_check.length = 0;
//右上的"簡"."中"."難"
//點簡下面會跑出簡單的圖,並且預覽框會出現簡的第一張圖,點中跟難也一樣,LEVEL_CHECK變數存取選到的難易度
function level_btn() {
    if (MU_range('middle2')) {
        soundreplay('select');
        changimg(link_ar = new Array(1, 0, 2, 1, 3, 20, 7, 3, 8, 4, 9, 5, 10, 12));
        //changimg_top(link_top = new Array(1, 44, 2, 42, 3, 44));
        choose_map('middle', '1');
        choose_level = 'middle';
        level_big_map_num = 11;
    } else if (MU_range('hard2')) {
        soundreplay('select');
        changimg(link_ar = new Array(3, 2, 2, 19, 1, 0, 7, 6, 8, 7, 9, 8, 10, 15));
        //changimg_top(link_top = new Array(1, 44, 2, 44, 3, 42));
        choose_map('hard', '1');
        choose_level = 'hard';
        level_big_map_num = 14;
    } else if (MU_range('simple2')) {
        soundreplay('select');
        changimg(link_ar = new Array(1, 18, 2, 19, 3, 20, 7, 21, 8, 22, 9, 23, 10, 24));
        //changimg_top(link_top = new Array(1, 42, 2, 44, 3, 44));
        choose_map('simple', '1');
        choose_level = 'simple';
        level_big_map_num = 8;
    } else {
        level_map(level_check, level_big_map_num);
    }
}
function limit_switch() {
    switch (level_check) {
        case 'simple':
            GameState(GS_LIMIT_SIMPLE);
            break;
        case 'middle':
            GameState(GS_LIMIT_MIDDLE);
            break;
        case 'hard':
            GameState(GS_LIMIT_HARD);
            break;
    }
}
function limit_simple() {
    if (MU_range('limit1_1')) {
        soundreplay('select');
        changimg(link_ar = new Array(1, 0, 2, 4, 3, 5));
        limit_check[0] = 'limit1';
    } else if (MU_range('limit2_1')) {
        soundreplay('select');
        changimg(link_ar = new Array(1, 3, 2, 1, 3, 5));
        limit_check[0] = 'limit2';
    } else if (MU_range('limit3_1')) {
        soundreplay('select');
        changimg(link_ar = new Array(1, 3, 2, 4, 3, 2));
        limit_check[0] = 'limit3';
    } below_btn('limit');
}
function limit_middle() {
    if (limit_check.length < 2) {
        if (MU_range('limit1_1')) {
            soundreplay('select');
            limit_check.push("limit1");
            changimg(link_ar = new Array(1, 0));
        } else if (MU_range('limit2_1')) {
            soundreplay('select');
            limit_check.push("limit2");
            changimg(link_ar = new Array(2, 1));
        } else if (MU_range('limit3_1')) {
            soundreplay('select');
            limit_check.push("limit3");
            changimg(link_ar = new Array(3, 2));
        } below_btn('limit');
    } else if (limit_check.length >= 2) {
        if (MU_range('limit1_1')) {
            soundreplay('select');
            changimg(link_ar = new Array(1, 0, 2, 4, 3, 5));
            limit_check.length = 0;
            limit_check.push("limit1");
        } else if (MU_range('limit2_1')) {
            soundreplay('select');
            changimg(link_ar = new Array(1, 3, 2, 1, 3, 5));
            limit_check.length = 0;
            limit_check.push("limit2");
        } else if (MU_range('limit3_1')) {
            soundreplay('select');
            changimg(link_ar = new Array(1, 3, 2, 4, 3, 2));
            limit_check.length = 0;
            limit_check.push("limit3");
        } below_btn('limit');
    }
}
function limit_hard() {
    if (MU_range('limit3_1') || MU_range('limit2_1') || MU_range('limit1_1')) {
        soundreplay('select');
        changimg(link_ar = new Array(1, 0, 2, 1, 3, 2));
        limit_check = new Array('limit1', 'limit2', 'limit3');
        State = GS_LIMIT_HARD;
    } else { below_btn('limit'); }
}
function design_btn() {
    var MU_X = mouse[mouse.length - 1].x;
    var MU_Y = mouse[mouse.length - 1].y
    if (who == null) {
        if (MU_range('startend') && map_data[5].limit_TF == true) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 17));
            myImages['down_line'].h = 0.8;
            design_push_down_btn(down_btn = new Array("down_line", "down_startend", "down_start", "down_end"));
            changimg_top(link_top = new Array(4, 270, 2, 493, 3, 381, 12, 121));
            open = 'startend';
        } else if (MU_range('obstacle') && map_data[4].limit_TF == true) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 1));
            myImages['down_line'].h = 0.6;
            design_push_down_btn(down_btn = new Array("down_line", "down_ob_node", "down_ob_edge"));
            changimg_top(link_top = new Array(4, 139, 2, 456, 3, 344, 12, 232));
            open = 'obstacle';
        } else if (MU_range('order') && map_data[3].limit_TF == true) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 2));
            myImages['down_line'].h = 1.2;
            down_btn = new Array("down_line", "down_order");
            for (var i = 3; i <= 22; i++) {
                down_btn.push(String(i));
            }
            design_push_down_btn(down_btn);
            changimg_top(link_top = new Array(2, 565, 3, 250, 4, 139, 12, 343));
            open = 'order';
        } else if (MU_range('background')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 4));
            myImages['down_line'].h = 1;
            design_push_down_btn(down_btn = new Array("down_line", "down_style1", "down_style2", "down_style3", "down_style4"));
            changimg_top(link_top = new Array(4, 139, 2, 362, 3, 250, 12, 455));
            open = 'background';
        } else {
            if (open == 'background') {
                for (var i = 1; i <= 4; i++) {
                    if (MU_range('down_style' + String(i))) {
                        soundreplay('select');
                        changimg(link_ar = new Array(1, 8 + i));
                        BG = myImages_link1[1];
                    }
                }
            }
            if (MU_range('save')) {
                soundreplay('select');
                //map_data.splice(3, 0, limit1, limit2, limit3, BG);
                map_data[3] = limit1;
                map_data[4] = limit2;
                map_data[5] = limit3;
                map_data[6] = BG;
                var save = prompt("請在5字內為您的檔案命名", "SAVE" + save_ar.length);
                if (save != null) {
                    if (save.length > 5) {
                        alert("你超過5個字囉!");
                    } else {
                        if (save_ar.length >= 7) {
                            save_ar.shift();
                        } var memo = prompt("要為你的檔案加點備註嗎?");
                        save_ar_input(save,memo);
                        
                    }
                }
            } else { below_btn('design'); }
        }
    } else {
        if (who == 'mark_startend') {
            if (check_map_collide(map_data[1], MU_X, MU_Y)) {
                if (no == limit2.ob_node || no == limit1.node) {
                    del_ar(print_little_ar, 'mark_startend');
                    flat_SE.SE = false;
                    limit3.SE = null;
                    alert("這個點有別的限制了唷!\nthis node have other limit aready");
                } else {
                    MU_instyle(1, 'mark_startend', 0, 45);
                    flat_SE.SE = true;
                    limit3.SE = no;
                    soundreplay('put');
                }
            } else {
                del_ar(print_little_ar, 'mark_startend');
                flat_SE.SE = false;
                limit3.SE = null;
            }
        } else if (who == 'mark_start') {
            if (check_map_collide(map_data[1], MU_X, MU_Y)) {
                if (no == limit2.ob_node || no == limit1.node) {
                    del_ar(print_little_ar, 'mark_start');
                    flat_SE.S = false;
                    limit3.S = null;
                    alert("這個點有別的限制了唷!\nthis node have other limit aready");
                } else {
                    MU_instyle(1, 'mark_start', 0, 45);
                    flat_SE.S = true;
                    limit3.S = no;
                    soundreplay('put');
                }
            } else {
                del_ar(print_little_ar, 'mark_start');
                flat_SE.S = false;
                limit3.S = null;
            }
        } else if (who == 'mark_end') {
            if (check_map_collide(map_data[1], MU_X, MU_Y)) {
                if (no == limit2.ob_node || no == limit1.node) {
                    del_ar(print_little_ar, 'mark_end');
                    flat_SE.E = false;
                    limit3.E = null;
                    alert("這個點有別的限制了唷!\nthis node have other limit aready");
                } else {
                    MU_instyle(1, 'mark_end', 0, 45);
                    flat_SE.E = true;
                    limit3.E = no;
                    soundreplay('put');
                }
            } else {
                del_ar(print_little_ar, 'mark_end');
                flat_SE.E = false;
                limit3.E = null;
            }
        } else if (who == 'mark_ob_node') {
            if (check_map_collide(map_data[1], MU_X, MU_Y)) {
                if (no == limit3.SE || no == limit3.S || no == limit3.E || no == limit1.node) {
                    del_ar(print_little_ar, 'mark_ob_node');
                    limit2.ob_node = null;
                    alert("這個點有別的限制了唷!\nthis node have other limit aready");
                } else {
                    MU_instyle(1, 'mark_ob_node', 15, 25);
                    limit2.ob_node = no;
                    soundreplay('put');
                }
            } else {
                del_ar(print_little_ar, 'mark_ob_node');
                limit2.ob_node = null;
            }
        } else if (who == 'mark_ob_edge') {
            if (check_map_collide(map_data[2], MU_X, MU_Y)) {
                MU_instyle(2, 'mark_ob_edge', 20, 40);
                limit2.ob_edge = no;
                soundreplay('put');
            } else {
                del_ar(print_little_ar, 'mark_ob_edge');
                limit2.ob_edge = null;
            }
        } else if (who == order_data.num) {
            if (check_map_collide(map_data[1], MU_X, MU_Y)) {
                if (no == limit3.SE || no == limit3.S || no == limit3.E || no == limit2.ob_node) {
                    del_ar(print_little_ar, order_data.num);
                    myImages[String(order_data.num)].left = order_real_XY[(order_data.num - 3) * 2];
                    myImages[String(order_data.num)].top = order_real_XY[(order_data.num - 3) * 2 + 1];
                    order_flat = null;
                    limit1.num = order_flat;
                    limit1.node = null;
                    alert("這個點有別的限制了唷!\nthis node have other limit aready");
                } else {
                    MU_instyle(1, order_data.num, 17, 19);
                    order_flat = order_data.num;
                    limit1.num = order_flat;
                    limit1.node = no;
                    soundreplay('put');
                }
            } else {
                del_ar(print_little_ar, order_data.num);
                myImages[String(order_data.num)].left = order_real_XY[(order_data.num - 3) * 2];
                myImages[String(order_data.num)].top = order_real_XY[(order_data.num - 3) * 2 + 1];
                order_flat = null;
                limit1.num = order_flat;
                limit1.node = null;
            }
        } if (MU_range('save')) {
            soundreplay('select');
            map_data[3] = limit1;
            map_data[4] = limit2;
            map_data[5] = limit3;
            map_data[6] = BG;
            var save = prompt("請在5字內為您的檔案命名", "SAVE" + save_ar.length);
            if (save != null) {
                if (save.length > 5) {
                    alert("你超過5個字囉!");
                } else {
                    if (save_ar.length >= 7) {
                        save_ar.shift();
                    } var memo = prompt("要為你的檔案加點備註嗎?");
                    save_ar_input(save, memo);
                }
            }
        } else { below_btn('design'); }
    }
}
function save_ar_input(save,memo) {
    var map_data_copy = new Array(map_data[0], map_data[1], map_data[2], map_data[3], map_data[4], map_data[5],
        map_data[6], map_data[7], map_data[8], map_data[9], map_data[10], map_data[11]);
    save_ar.push({ name: save, memo: memo, ar: map_data_copy });
}
function play_btn() {
    var MU_X = mouse[mouse.length - 1].x;
    var MU_Y = mouse[mouse.length - 1].y;
    if (from == 'limit' || from == 'save') {
        if (draw_line_flat == true) {
            draw_line_flat = false;
        } else {
            if (MU_range('home')) {
                back_home();
            } else {
                if (visit.length > 0) {
                    if (MU_range('return')) {
                        var new_next_copy = new Array();
                        if (draw_type[draw_type.length - 1]) {
                            draw_line_ar.pop();
                        } else if (!draw_type[draw_type.length - 1]) {
                            draw_circle_ar.pop();
                        }
                        draw_type.pop();
                        draw_point_ar.pop();
                        step--;
                        step_ar.pop();
                        visit.pop();
                        next = map_data[7][visit[visit.length - 1]];
                        new_next = new Array();
                        for (var i = 0; i < next.length; i++) {
                            new_next_copy.push(next[i]);
                        }
                        new_next = new_next_copy;
                        check_have_next();
                        draw_line_flat = false;
                        if (step == 0) {
                            play_start = null;
                            play_limit_inf();
                        }
                    } else if (MU_range('again')) {
                        draw_point_ar = new Array();
                        draw_line_ar = new Array();
                        draw_circle_ar = new Array();
                        next = new Array();
                        step_ar = new Array();
                        step_obj = new Object({ step: 0, step_no: null });
                        step = 0;
                        visit = new Array();
                        draw_line_flat = false;
                        draw_type = new Array();//false=circle,true=line
                        circle_line = new Array();
                        no1 = null;
                        no2 = null;
                        circle_count = null;
                        if (map_data[5].SE == null && map_data[5].S == null && map_data[5].E == null) {
                            play_start = null;
                            play_end = null;
                        }
                    }
                }
            }
        }
    } else if (from == 'tablegame') {
        if (MU_range('home')) {
            back_home();
        } else if (MU_range('return')) {
            var new_next_copy = new Array();
            painter.pop();
            if (step > 0) {
                if (painter.length >= draw_point_ar.length) {
                    painter.pop();
                    step--;
                    step_ar.pop();
                    visit.pop();
                }
                painter.pop();
                draw_point_ar.pop();
                step--;
                step_ar.pop();
                visit.pop();
                next = map_data[7][visit[visit.length - 1]];
                new_next = new Array();
                for (var i = 0; i < next.length; i++) {
                    new_next_copy.push(next[i]);
                }
                new_next = new_next_copy;
                check_have_next();
            }
        } else if (MU_range('again')) {
            painter = new Array();
            draw_path = new Array();
            draw_point_ar = new Array();
            draw_path_flat = false;
            step_ar = new Array();
            step_obj = new Object({ step: 0, step_no: null });
            step = 0;
            visit = new Array();
            no1 = null;
            if (map_data[5].SE == null && map_data[5].S == null && map_data[5].E == null) {
                play_start = null;
                play_end = null;
            }
        }else {
            draw_path_flat = false;
            draw_path.push({ x: MU_X, y: MU_Y });
            painter[painter.length - 1] = draw_path;
        }
    }
}
function save_btn() {
    var del_XY = new Array({ x: 390, y: 474 }, { x: 190, y: 568 }, { x: 500, y: 456 }
            , { x: 264, y: 426 }, { x: 340, y: 293 }, { x: 550, y: 320 },
            { x: 491, y: 200 });
    for (var i = 1; i <= save_ar.length; i++) {
        if (MU_range('save_' + String(i))) {
            if (choose_save != (i - 1)) {
                choose_save = i - 1;
                map_data = save_ar[choose_save].ar;
            }
            soundreplay('select');
            myImages['del'].left = (del_XY[choose_save].x);
            myImages['del'].top = (del_XY[choose_save].y);
            if (!check_ar("del")) {
                myImages_link1.push("del");
            }
            if (save_ar[choose_save].memo != null) {
                draw_memo = save_ar[choose_save].memo;
            }
            ta.textContent += save_ar[choose_save].ar[0] + ",\n order:(" + save_ar[choose_save].ar[3].limit_TF + ",num:" + save_ar[choose_save].ar[3].num + ",node:" + save_ar[choose_save].ar[3].node +
                "),\n obstacle:(" + save_ar[choose_save].ar[4].limit_TF + ",ob_node:" + save_ar[choose_save].ar[4].ob_node + ",ob_edge:" + save_ar[choose_save].ar[4].ob_edge +
                "),\n SE:(" + save_ar[choose_save].ar[5].limit_TF + ",SE:" + save_ar[choose_save].ar[5].SE + ",S:" + save_ar[choose_save].ar[5].S + ",E:" + save_ar[choose_save].ar[5].E + "),\n BG:" + save_ar[choose_save].ar[6] + "\n";
        }
    } if (MU_range('del')) {
        soundpause('select');
        soundreplay('put');
        save_ar.splice(choose_save, 1);
        del_ar(myImages_link1, "del");
        choose_save = null;
        if (save_ar.length == 0) {
            del_ar(myImages_link1, "del");
            choose_save = null;
        }
    }
        below_btn('save');
}
function MU_instyle(type,MD_case,add_left,add_top) {
        myImages[MD_case].left = map_data[type][no].x - add_left;
        myImages[MD_case].top = map_data[type][no].y - add_top;
}
function del_ar(ar,del_value) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == del_value) {
            ar.splice(i,1);
        }
    }
}
function limit_ready() {
    map = new myImgObj('img/road_' + map_data[0] + '.png', 63, 375, 0.6, 0.6);
    switch (map_data[0]) {
        case 'simple1':
            simple1_XY();
            break;
        case 'simple2':
            simple2_XY();
            break;
        case 'simple3':
            simple3_XY();
            break;
        case 'middle1':
            middle1_XY();
            break;
        case 'middle2':
            middle2_XY();
            break;
        case 'middle3':
            middle3_XY();
            break;
        case 'hard1':
            hard1_XY();
            break;
        case 'hard2':
            hard2_XY();
            break;
        case 'hard3':
            hard3_XY();
            break;
    }
}
function level_map(choose_level, num) {
    for (var i = 1; i <= 3; i++) {
        if (MU_range('road_' + choose_level + String(i) + '_little')) {
            soundreplay('select');
            changimg(link_ar = new Array(10, (num + i)));
            choose_map(choose_level, i);
            draw();
        }
    } below_btn('level');
}
function below_btn(thispage) {
    if (MU_range('home')) {
        soundreplay('select');
        back_home();
    } else if (MU_range('last')) {
        soundreplay('select');
        last_btn(thispage);
    } else if (MU_range('next')) {
        soundreplay('select');
        next_btn(thispage);
    }
}
function back_home() {
    soundloopreplay('first');
    soundpause('game');
    page = 'homepage';
    choose_map('simple', '1');
    level_big_map_num = 8;
    limit_zero();
    open = '';
    flat_SE = new Object({ SE: false, S: false, E: false });
    order_flat = null;
    BG = 'bg_style1';
    map_data[6] = null;
    choose_save = null;
    draw_point_ar = new Array();
    draw_line_ar = new Array();
    line_end_flat = true;
    play_start = null;
    play_end = null;
    next = new Array();
    step_ar = new Array();
    step_obj = new Object({ step: 0, step_no: null });
    step = 0;
    visit = new Array();
    draw_line_flat = false;
    no1 = null;
    no2 = null;
    circle_count = null;
    draw_line_flat = false;
    draw_type = new Array();//false=circle,true=line
    circle_line = new Array();
    draw_point_ar = new Array();
    draw_line_ar = new Array();
    draw_circle_ar = new Array();
    draw_memo = null;
    shape = null;
    tg_choose_map = null;
    circle_map = new Array("road_simple2_big", "table_game_line", "road_simple2_little", "road_middle2_little", "road_hard2_little", "table_game_circle_next");
    circle2_map = new Array("road_hard3_big", "table_game_line", "road_hard3_little", "table_game_circle_last");
    rect_map = new Array("road_simple3_big", "table_game_line", "road_simple3_little", "road_middle1_little");
    polygon_map = new Array("road_simple1_big", "table_game_line", "road_simple1_little", "road_middle3_little", "road_hard1_little");
    circle_page = 'circle1';
    from = null;
    painter = new Array();
    draw_path = new Array();
    draw_path_flat = false;
    new_next = new Array();
    FRAME_RATE = 30;
    btn_ani_count = 0;
    GameState(GS_HOMEPAGE);
    if (sound_d == true) {
        changimg(link_ar = new Array(4, 0));
    } else if (sound_d == false) {
        sound_d = false;
        soundloopreplay('first');
    }
}
function last_btn(this_page) {
    switch (this_page) {
        case 'level':
            choose_map('simple', '1');
            level_big_map_num = 8;
            GameState(GS_GAMECHOOSE);
            break;
        case 'limit':
            choose_map('simple', '1');
            level_big_map_num = 8;
            limit_check.length = 0;
            GameState(GS_LEVEL);
            break;
        case 'design':
            limit_zero();
            MD_btn = '';
            open = '';
            flat_SE = new Object({ SE: false, S: false, E: false });
            order_flat = null;
            GameState(GS_LIMIT);
            BG = 'bg_style1';
            map_data[6] = null;
            if (from == 'save') {
                for (var i = 1; i <= 3; i++) {
                    if (map_data[0] == 'simple' + String(i)) {
                        level_check = 'simple';
                    } else if (map_data[0] == 'middle' + String(i)) {
                        level_check = 'middle';
                    } else if (map_data[0] == 'hard' + String(i)) {
                        level_check = 'hard';
                    }
                }
            } else if (from == 'tablegame') {
                homepage_tablegame();
            }
            break;
        case 'save':
            choose_save = null;
            draw_memo = null;
            GameState(GS_GAMECHOOSE);
            break;
        case 'win':
            GameState(GS_GAMECHOOSE);
            break;
    }
}
function next_btn(this_page) {
    var startend_OK = false;
    switch (this_page) {
        case 'level':
            //alert(user_map);
            GameState(GS_LIMIT);
            break;
        case 'limit':
            if (State == GS_LIMIT_SIMPLE) {
                if (limit_check.length != 1) {
                    alert("請選擇一個限制才能繼續唷!\nPlease choose one condition.");
                } else {
                    //alert(limit_check + "\n" + "map:" + user_map);
                    GameState(GS_LIMIT_READY);
                }
            } else if (State == GS_LIMIT_MIDDLE) {
                if (limit_check.length != 2) {
                    alert("必須選擇兩個限制才能繼續下一步唷!\nPlease choose two conditions.");
                } else {
                    //alert(limit_check + "\n" + "map:" + user_map);
                    GameState(GS_LIMIT_READY);
                }
            } else if (State == GS_LIMIT_HARD) {
                if (limit_check.length == 3) {
                    //alert(limit_check + "\n" + "map:" + user_map);
                    GameState(GS_LIMIT_READY);
                } else {
                    alert("三個限制都必須勾選才能繼續唷!\nPlease choose three conditions.");
                }
            }
            break;
        case 'design':
            map_data[3] = limit1;
            map_data[4] = limit2;
            map_data[5] = limit3;
            map_data[6] = BG;
            ta.textContent += map_data[0] + ",\n order:(" + map_data[3].limit_TF + ",num:" + map_data[3].num + ",node:" + map_data[3].node +
                "),\n obstacle:(" + map_data[4].limit_TF + ",ob_node:" + map_data[4].ob_node + ",ob_edge:" + map_data[4].ob_edge +
                "),\n SE:(" + map_data[5].limit_TF + ",SE:" + map_data[5].SE + ",S:" + map_data[5].S + ",E:" + map_data[5].E + "),\n BG:" + map_data[6] + "\n";
            if (map_data[5].limit_TF == true) {
                if ((map_data[5].S != null && map_data[5].E == null) || map_data[5].E != null && map_data[5].S == null) {
                    alert("您選擇的是起終點不同的選項,\n您必須擺放起點以及終點!\nYou choose start and end are different.\nYou shoule put both start flag and end flag in the image.");
                } else {
                    startend_OK = true;
                }
            } else {
                startend_OK = true;
            }
            if (startend_OK == true) {
                var save = prompt("請在5字內為您的檔案命名", "SAVE" + save_ar.length);
                if (save != null) {
                    if (save.length > 5) {
                        alert("你超過5個字囉!");
                    } else {
                        if (save_ar.length >= 7) {
                            save_ar.shift();
                        } var memo = prompt("要為你的檔案加點備註嗎?");
                        save_ar_input(save, memo);
                    }
                }
                check_ans();
            }
            break;
        case 'save':
            if (choose_save == null) {
                alert("你必須先選一個限制唷!\nYou have to choose a record.");
            } else {
                var map_data_copy = new Array(save_ar[choose_save].ar[0], save_ar[choose_save].ar[1], save_ar[choose_save].ar[2]
                    , save_ar[choose_save].ar[3], save_ar[choose_save].ar[4], save_ar[choose_save].ar[5], save_ar[choose_save].ar[6],
                    save_ar[choose_save].ar[7], save_ar[choose_save].ar[8], save_ar[choose_save].ar[9], save_ar[choose_save].ar[10],save_ar[choose_save].ar[11]);
                map_data = new Array();
                map_data = map_data_copy;
                choose_save = null;
                //alert(map_data);
                limit_ready();
            }
            break;
        case 'tablegame':
            if (tg_choose_map == null) {
                alert("請選擇一個地圖\nPlease choose the map.");
            } else {
                map_data = new Array();
                user_map = tg_choose_map;
                map_data[0] = tg_choose_map;
                limit1 = new Object({ limit_TF: true, num: null, node: null });
                limit2 = new Object({ limit_TF: true, ob_node: null, ob_edge: null });
                limit3 = new Object({ limit_TF: true, SE: null, S: null, E: null });
                BG = 'bg_style1';
                map_data[3] = limit1;
                map_data[4] = limit2;
                map_data[5] = limit3;
                map_data[6] = BG;
                limit_ready();
            }
            break;
    }
}
function check_ans() {
    check_ans_ar = new Array(map_data[7], map_data[8], map_data[3].num, map_data[3].node, map_data[4].ob_node, map_data[4].ob_edge, map_data[5].SE, map_data[5].S, map_data[5].E);
    ta.textContent += "check_ans_ar:\n";
    for (var i = 0; i < check_ans_ar.length; i++) {
        ta.textContent += check_ans_ar[i] + "\n";
    }
    if (check1(check_ans_ar[0], check_ans_ar[1], check_ans_ar[2], check_ans_ar[3], check_ans_ar[4], check_ans_ar[5], check_ans_ar[6], check_ans_ar[7], check_ans_ar[8])) {
        alert("題目有解\nhave ans");
        GameState(GS_PLAY);
    } else {
        alert("題目無解請繼續編輯!\nno ans");
    }
}
function MD_gamechoose_btn_color() {
    if (MD_range('attainments_btn1')) {
        changimg(link_ar = new Array(1, 0));
    } else if (MD_range('record_btn1')) {
        changimg(link_ar = new Array(2, 1));
    } else if (MD_range('design_btn1')) {
        changimg(link_ar = new Array(3, 2));
    } else if (MD_range('choose_key1')) {
        changimg(link_ar = new Array(4, 3));
    }
    draw();
}
function MD_design() {
    var map_node = map_data[1].length;
    who = null;
    //BTN_explain
    if (MD_range(myImages_link1[1])) {
        if (MD_range('mark_startend')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 14));
            movewho('mark_startend');
        } else if (MD_range('mark_start')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 3));
            movewho('mark_start');
        } else if (MD_range('mark_end')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 0));
            movewho('mark_end');
        } else if (MD_range('mark_ob_node')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 15));
            movewho('mark_ob_node');
        } else if (MD_range('mark_ob_edge')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 16));
            movewho('mark_ob_edge');
        } else if (order_flat != null) {
            soundreplay('select');
            movewho(order_flat);
            order_data.num = order_flat;
        }
    }
    if (open == 'startend') {
        if (MD_range('down_startend') || MD_range('mark_startend')) {
            changimg(link_ar = new Array(6, 14));
            if (flat_SE.S != true && flat_SE.E != true) {
                soundreplay('select');
                movewho('mark_startend');
            }
        } else if (MD_range('down_start') || MD_range('mark_start')) {
            changimg(link_ar = new Array(6, 3));
            if (flat_SE.SE != true) {
                soundreplay('select');
                movewho('mark_start');
            }
        } else if (MD_range('down_end') || MD_range('mark_end')) {
            changimg(link_ar = new Array(6, 0));
            if (flat_SE.SE != true) {
                soundreplay('select');
                movewho('mark_end');
            }
        }
    } else if (open == 'obstacle') {
        if (MD_range('down_ob_node') || MD_range('mark_ob_node')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 15));
            movewho('mark_ob_node');
        } else if (MD_range('down_ob_edge') || MD_range('mark_ob_edge')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 16));
            movewho('mark_ob_edge');
        }
    } else if (open == 'order') {
        if (order_flat == null) {
            for (var i = 3; i <= 22; i++) {
                if (i <= map_node - 1) {
                    if (MD_range(String(i))) {
                        soundreplay('select');
                        movewho(String(i));
                        order_data.num = i;
                    }
                }
            }
        } else {
            if (MD_range(order_flat)) {
                soundreplay('select');
                movewho(order_flat);
                order_data.num = order_flat;
            }
        }
    } else if (open == 'background' && MD_range(myImages_link1[1])) {
        if (MD_range('mark_startend')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 14));
            movewho('mark_startend');
        } else if (MD_range('mark_start')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 3));
            movewho('mark_start');
        } else if (MD_range('mark_end')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 0));
            movewho('mark_end');
        } else if (MD_range('mark_ob_node')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 15));
            movewho('mark_ob_node');
        } else if (MD_range('mark_ob_edge')) {
            soundreplay('select');
            changimg(link_ar = new Array(6, 16));
            movewho('mark_ob_edge');
        } else if (order_flat != null) {
            soundreplay('select');
            movewho(order_flat);
            order_data.num = order_flat;
        }
    }
}
function MD_play() {
    var MD_X = mouse[0].x;
    var MD_Y = mouse[0].y;
    if (from == 'limit' || from == 'save') {
        if (step == 0) {
            if (play_start != null) {
                if (check_map_collide(map_data[9], MD_X, MD_Y)) {
                    if (no == play_start) {
                        draw_line_flat = true;
                        draw_point();
                        no1 = no;
                    }
                }
            } else {
                if (check_map_collide(map_data[9], MD_X, MD_Y)) {
                    if (no != map_data[4].ob_node && no != map_data[3].node) {
                        draw_line_flat = true;
                        draw_point();
                        no1 = no;
                        play_start = no;
                        play_end = no;
                    }
                }
            }
        } else {
            if (check_map_collide(map_data[9], MD_X, MD_Y)) {
                if (no == visit[visit.length - 1]) {
                    draw_line_flat = true;
                    next = map_data[7][no];
                    no1 = no;
                }
            }
        }
    } else if (from == 'tablegame') {
        if (step == 0) {
            if (play_start != null) {
                if (check_map_collide(map_data[9], MD_X, MD_Y)) {
                    if (no == play_start) {
                        draw_path_flat = true;
                        draw_path = new Array();
                        draw_path.push({ x: MD_X, y: MD_Y });
                        painter.push(draw_path);
                        draw_point();
                    }
                }
            } else {
                if (check_map_collide(map_data[9], MD_X, MD_Y)) {
                    if (no != map_data[4].ob_node && no != map_data[3].node) {
                        draw_path_flat = true;
                        draw_path = new Array();
                        draw_path.push({ x: MD_X, y: MD_Y });
                        painter.push(draw_path);
                        draw_point();
                        play_start = no;
                        play_end = no;
                    }
                }
            }
        } else {
            draw_path_flat = true;
            draw_path = new Array();
            painter.push(draw_path);
            draw_path.push({ x: MD_X, y: MD_Y });
            painter[painter.length - 1] = draw_path;
        }
        /*draw_path_flat = true;
        draw_path = new Array();
        painter.push(draw_path);
        draw_path.push({ x: MD_X, y: MD_Y });
        painter[painter.length - 1] = draw_path;*/
    }
}
function check_visit(val) {
    var same = false;
    for (var i = 0; i < visit.length; i++) {
        if (val == visit[i]) {
            same = true;
        }
    } return same;
}
function check_next(val) {
    var same = false;
    for (var i = 0; i < next.length; i++) {
        if (val == next[i]) {
            same = true;
        }
    }
    return same;
}
function draw_point() {
    var new_next_copy = new Array();
    draw_point_ar.push({ x: map_data[9][no].x, y: map_data[9][no].y });
    step_obj.step = step;
    step_obj.step_no = no;
    step_ar.push(step_obj);
    step++;
    visit.push(no);
    next = map_data[7][no];
    new_next = new Array();
    for (var i = 0; i < next.length; i++) {
        new_next_copy.push(next[i]);
    }
    new_next = new_next_copy;
    check_have_next();
}
function get_a_new_line() {
    draw_line_ar.push({
        startX: map_data[9][no1].x, startY: map_data[9][no1].y,
        endX: map_data[9][no2].x, endY: map_data[9][no2].y
    });
}
function draw_circle_or_line() {
    var min = null;
    var max = null;
    if (no1 > no2) {
        min = no2;
        max = no1;
    } else {
        min = no1;
        max = no2;
    }
    if (check_circle_or_line(min, max)) {//line
        draw_type.push(true);
        get_a_new_line();
    } else {//circle
        draw_type.push(false);
        draw_circle_ar.push(map_data[11][circle_count]);
    }
}
function check_circle_or_line(min, max) {
    var circle_or_line = true;
    for (var i = 0; i < map_data[11].length; i++) {
        if (map_data[11][i].s_no == min && map_data[11][i].e_no == max) {
            circle_or_line = false;
            circle_count = i;
        }
    }
    return circle_or_line;
}
function movewho(move_who) {
    who = move_who;
    if (!check_ar(move_who)) {
        print_little_ar.push(move_who);
    }
}
function check_ar(mark) {
    var have = false;
    if (page != 'save') {
        for (var i = 0; i < print_little_ar.length; i++) {
            if (print_little_ar[i] == mark) {
                have = true;
            }
        }
    } else {
        for (var i = 0; i < myImages_link1.length; i++) {
            if (myImages_link1[i] == mark) {
                have = true;
            }
        }
    }
    if (have == true) {
        return true;
    } else {
        return false;
    }
}
function design_mousemove() {
    if (who != null) {
        var add_left = 0;
        var add_top = 0;
        if (who == 'mark_startend' || who == 'mark_start' || who == 'mark_end') {
            add_top = 45;
        } else if (who == 'mark_ob_edge') {
            add_left = 25;
            add_top = 52;
        } else if (who == 'mark_ob_node') {
            add_left = 19;
            add_top = 19;
        } else {
            for (var i = 3; i < 22; i++) {
                if (who == String(i)) {
                    add_left = 17;
                    add_top = 19;
                }
            }
        }
        myImages[who].left = event.clientX - add_left;
        myImages[who].top = event.clientY - add_top;
    }
}
function MM_play() {
    var MM_X = mouse[mouse.length - 1].x;
    var MM_Y = mouse[mouse.length - 1].y;
    if (from == 'limit' || from == 'save') {
        if (draw_line_flat == true) {
            if (check_map_collide(map_data[9], MM_X, MM_Y)) {
                if (check_new_next(no)) {
                    soundreplay('walk');
                    no2 = no;
                    draw_circle_or_line();
                    no1 = no;
                    draw_point();
                    if (check_finish_new()) {
                        put_win(map_data[0]);
                        no2 = no;
                        draw_circle_or_line();
                        draw();
                        alert("FINISH!!\n恭喜過關!!你太棒了!!");
                        GameState(GS_HOMEPAGE_MOVIE);
                    } else {
                        if (new_next.length == 0) {
                            draw_line_flat = false;
                            draw();
                            alert("Blind alley!!\n你走到死路囉,可以按退回或是再玩一次繼續遊戲!");
                        }
                    }
                }
            }
        }
    } else if (from == 'tablegame') {
        if (draw_path_flat == true) {
            draw_path.push({ x: MM_X, y: MM_Y });
            painter[painter.length - 1] = draw_path;
            if (check_map_collide(map_data[9], MM_X, MM_Y)) {
                if (check_new_next(no)) {
                    draw_point();
                    draw_path.push({ x: MM_X, y: MM_Y });
                    painter[painter.length - 1] = draw_path;
                    draw_path = new Array();
                    draw_path.push({ x: MM_X, y: MM_Y });
                    painter.push(draw_path);
                    no1 = no;
                    if (check_finish_new()) {
                        put_win(map_data[0]);
                        alert("FINISH!!\n恭喜過關!!你太棒了!!");
                        GameState(GS_HOMEPAGE_MOVIE);
                    } else {
                        if (new_next.length == 0) {
                            draw_path_flat = false;
                            draw();
                            alert("Blind alley!!\n你走到死路囉,可以按退回或是再玩一次繼續遊戲!");
                        }
                    }
                }
            }
        }
    }
}
function check_have_next() {
    var v = map_data[1].length;
    if (map_data[4].ob_node != null) {
        v --;
    }
    for (var i = 0; i < new_next.length; i++) {
        if (check_visit(new_next[i])) {
            new_next.splice(i, 1);
            i--;
        }
    }
    //alert("visit_same:" + new_next);
    if (map_data[4].ob_node != null) {
        for (var i = 0; i < new_next.length; i++) {
            if (new_next[i] == map_data[4].ob_node) {
                new_next.splice(i, 1);
            }
        } //alert("ob_node:" + new_next);
    }
    if (map_data[4].ob_edge != null) {
        for (var i = 0; i < new_next.length; i++) {
            //alert("check_ob_node:" + map_data[4].ob_edge + "," + no + "," + new_next[i]);
            if (check_ob_edge_new(map_data[4].ob_edge, no, new_next[i])) {
                new_next.splice(i, 1);
            }
        } //alert("ob_edge:" + new_next);
    }
    if (map_data[3].node != null && map_data[3].num != null) {
        for (var i = 0; i < new_next.length; i++) {
            if (new_next[i] == map_data[3].node) {
                if (step != map_data[3].num) {
                    new_next.splice(i, 1);
                }
            }
        }
        if (step == map_data[3].num) {
            if (check_new_next(map_data[3].node)) {
                new_next = new Array();
                new_next.push(map_data[3].node);
            }
            else {
                new_next = new Array();
            }
        }
        //alert("order:" + new_next);
    }
    for (var i = 0; i < new_next.length; i++) {
        if (new_next[i] == play_start) {
            new_next.splice(i, 1);
        }
    } //alert("play_start_same:" + new_next);
    for (var i = 0; i < new_next.length; i++) {
        if (new_next[i] == play_end) {
            new_next.splice(i, 1);
        }
    } //alert("play_end_same:" + new_next);
    if (play_start == play_end) {
        if (visit.length == v) {
            if (check_next(play_end)) {
                if (map_data[4].ob_edge == null){
                    new_next.push(play_end);
                } else {
                    if (!check_ob_edge_new(map_data[4].ob_edge, no, play_end)) {
                        new_next.push(play_end);
                    }
                }
            }
        }
    } else {
        if (visit.length == v - 1) {
            if (check_next(play_end)) {
                if (!check_ob_edge_new(map_data[4].ob_edge, no, play_end)) {
                    new_next.push(play_end);
                }
            }
        }
    }
    //alert("add_end:" + new_next);
}
function check_new_next(val) {
    var same = false;
    for (var i = 0; i < new_next.length; i++) {
        if (new_next[i] == val) {
            same = true;
        }
    }
    return same;
}
function check_ob_edge() {
    var ob_edge_bool=true;
    if (map_data[4].ob_edge != null) {
        if (no1 == map_data[8][map_data[4].ob_edge][0]) {
            if (no == map_data[8][map_data[4].ob_edge][1]) {
                ob_edge_bool = false;
            }
        } else if (no1 == map_data[8][map_data[4].ob_edge][1]) {
            if (no == map_data[8][map_data[4].ob_edge][0]) {
                ob_edge_bool = false;
            }
        }
    } return ob_edge_bool;
}
function check_order() {
    var order_bool = false;
    if (map_data[3].num != null) {
        if (step == map_data[3].num) {
            for (var i = 0; i < next.length; i++) {
                if (next[i] == map_data[3].node) {
                    order_bool = true;
                }
            }
        } else {
            order_bool = true;
        }
    } else {
        order_bool = true;
    }
    return order_bool;
}
function check_finish_new() {
    var finish = false;
    var node_num = map_data[1].length;
    if (map_data[4].ob_node != null) {
        node_num--;
    }
    if (play_start == play_end) {
        if (visit.length == node_num + 1) {
            finish = true;
        }
    } else {
        if (visit.length == node_num) {
            finish = true;
        }
    }
    return finish;
}
function check_finish() {
    if (visit.length == map_data[1].length - 1) {
        if (play_start != play_end) {
            if (check_next(play_end)) {
                no = play_end;
                no2 = play_end;
                draw_point();
                draw_circle_or_line();
                draw();
                put_win(map_data[0]);
                alert("FINISH!!\n恭喜過關!!你太棒了!!");
                GameState(GS_HOMEPAGE_MOVIE);
            }
        }
    } else {
        if (play_start == play_end) {
            if (check_next(play_end)) {
                no = play_end;
                no2 = play_end;
                draw_point();
                draw_circle_or_line();
                draw();
                put_win(map_data[0]);
                alert("FINISH!!\n恭喜過關!!你太棒了!!");
                GameState(GS_HOMEPAGE_MOVIE);
            }
        }
    }
}
function put_win(map) {
    var win_map = new Array('simple1', 'simple2', 'simple3', 'middle1', 'middle2', 'middle3', 'hard1', 'hard2', 'hard3');
    for (var i = 0; i < win_map.length; i++) {
        if (map == win_map[i]) {
            win_ar[i + 1] = true;
        }
    }
}
function check_dead() {
    var dead = true;
    for (var i = 0; i < next.length; i++) {
        if (!check_visit(next[i])) {
            if (!check_next_dead(next[i])) {
                dead = false;
            }
        } else {
            if (next[i] == play_end && visit.length >= (map_data[1].length - 1)) {
                dead = false;
            }
        }
    }
    if (!check_order()) {
        dead = true;
    }
    return dead;
}
function check_ob_edge_new(edge_num, val_1, val_2) {
    if (map_data[8][edge_num][0] == val_1 && map_data[8][edge_num][1] == val_2) {
        return true;
    } else if (map_data[8][edge_num][0] == val_2 && map_data[8][edge_num][1] == val_1) {
        return true;
    } else {
        return false;
    }
}
function check_next_dead(val) {
    if (val == play_end && visit.length < (map_data[1].length - 1)) {
        return true;
    } else {
        return false;
    }
}
function design_push_down_btn(down_btn) {
    myImages_link1.length = 13;
    for (var i = 0; i < down_btn.length; i++) {
        myImages_link1[12 + i] = down_btn[i];
    }
}
function limit_lock() {
    for (var i = 0; i < limit_check.length; i++) {
        if (limit_check[i] == 'limit1') {
            limit1.limit_TF = true;
        } else if (limit_check[i] == 'limit2') {
            limit2.limit_TF = true;
        } else if (limit_check[i] == 'limit3') {
            limit3.limit_TF = true;
        } else {
            limit_check.shift(i);
        }
    }
    map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;
    limit_ready();
}
function limit_print() {
    for (var i = 3; i <= 5; i++) {
        if (map_data[i].limit_TF == true) {
            changimg(link_ar = new Array(i, (i + 2)));
            if (i == 3) {
                limit1.limit_TF = true;
                if (map_data[3].num != null && map_data[3].node != null) {
                    limit1.num = map_data[3].num;
                    limit1.node = map_data[3].node;
                    order_flat = map_data[3].num;
                    print_little_ar.push(String(map_data[3].num));
                    no = map_data[3].node;
                    order_data.num = map_data[3].num;
                    MU_instyle(1, String(map_data[3].num), 17, 19);
                }
            } else if (i == 4) {
                limit2.limit_TF = true;
                if (map_data[4].ob_node != null) {
                    limit2.ob_node = map_data[4].ob_node;
                    print_little_ar.push("mark_ob_node");
                    no = map_data[4].ob_node;
                    MU_instyle(1, 'mark_ob_node', 15, 25);
                }
                if (map_data[4].ob_edge != null) {
                    limit2.ob_edge = map_data[4].ob_edge;
                    print_little_ar.push("mark_ob_edge");
                    no = map_data[4].ob_edge;
                    MU_instyle(2, 'mark_ob_edge', 20, 40);
                }
            } else if (i == 5) {
                limit3.limit_TF = true;
                if (map_data[5].SE != null) {
                    limit3.SE = map_data[5].SE;
                    print_little_ar.push("mark_startend");
                    no = map_data[5].SE;
                    flat_SE.SE = true;
                    MU_instyle(1, 'mark_startend', 0, 45);
                }
                if (map_data[5].S != null) {
                    limit3.S = map_data[5].S;
                    print_little_ar.push("mark_start");
                    no = map_data[5].S;
                    flat_SE.S = true;
                    MU_instyle(1, 'mark_start', 0, 45);
                }
                if (map_data[5].E != null) {
                    limit3.E = map_data[5].E;
                    print_little_ar.push("mark_end");
                    no = map_data[5].E;
                    flat_SE.E = true;
                    MU_instyle(1, 'mark_end', 0, 45);
                }
            }
        }
    }
    //bg
    if (map_data[6] != null) {
        myImages_link1[1] = map_data[6];
        BG = map_data[6];
    }
}
function print_play_limit() {
    if (map_data[3].limit_TF == true) {
        if (map_data[3].num != null && map_data[3].node != null) {
            no = map_data[3].node;
            MU_instyle(9, String(map_data[3].num), 30, 35);
        }
    }
    if (map_data[4].limit_TF == true) {
        if (map_data[4].ob_node != null) {
            no = map_data[4].ob_node;
            MU_instyle(9, 'mark_ob_node', 15, 25);
        }
        if (map_data[4].ob_edge != null) {
            no = map_data[4].ob_edge;
            MU_instyle(10, 'mark_ob_edge', 20, 40);
        }
    }
    if (map_data[5].limit_TF == true) {
        if (map_data[5].SE != null) {
            no = map_data[5].SE;
            MU_instyle(9, 'mark_startend', 10, 70);
        } if (map_data[5].S != null) {
            no = map_data[5].S;
            MU_instyle(9, 'mark_start', 10, 70);
        } if (map_data[5].E != null) {
            no = map_data[5].E;
            MU_instyle(9, 'mark_end', 10, 70);
        }
    } play_limit_inf();
}
function play_limit_inf() {
    if (map_data[5].limit_TF == true) {
        if (map_data[5].SE != null) {
            play_start = map_data[5].SE;
            play_end = map_data[5].SE;
        } else {
            if (map_data[5].S != null) {
                play_start = map_data[5].S;
            }
            if (map_data[5].E != null) {
                play_end = map_data[5].E;
            }
        }
    }
}
function limit_zero() {
    limit1 = new Object({ limit_TF: false, num: null, node: null });
    limit2 = new Object({ limit_TF: false, ob_node: null, ob_edge: null });
    limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
    limit_check.length = 0;
    map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;

}
function changimg(link_ar) {
    for (var i = 0; i < link_ar.length; i+=2) {
        myImages_link1[link_ar[i]] = myImages_link2[link_ar[i + 1]];
    }
    draw();
}
function changimg_top(link_top) {
    for (var i = 0; i < link_top.length; i+=2) {
        myImages[myImages_link1[link_top[i]]].top = link_top[i + 1];
    }
    draw();
}
function choose_map(level,num) {
    level_check = level;
    user_map = level + num;
    map = new myImgObj('img/road_' + user_map + '.png', 63, 375, 0.6, 0.6);
    map_data[0] = user_map;
}
function check_map_collide(ar,x, y) {
    var a;
    var b;
    no = null;
    for (var i = 0; i < ar.length; i++) {
        a = x - ar[i].x;
        b = y - ar[i].y;
        if (Math.sqrt(a * a + b * b) <= 25) {
            no = i;
        }
    } if (no != null) {
        return true;
    } else {
        return false;
    }
}
function simple1_XY() {
    node_connect = new Object({
        0: [6, 7, 11], 1: [2, 6, 7], 2: [1, 3, 8], 3: [2, 4, 9], 4: [3, 5, 10], 5: [4, 6, 11],
        6: [1, 5, 0], 7: [1, 8, 0], 8: [2, 7, 9], 9: [3, 8, 10], 10: [4, 9, 11], 11: [5, 10, 0]
    });
    edge_connect = new Object({
        0: [4, 10], 1: [1, 6], 2: [1, 2], 3: [2, 3], 4: [3, 4], 5: [4, 5], 6: [5, 6], 7: [11, 0],
        8: [7, 0], 9: [7, 8], 10: [8, 9], 11: [17, 18], 12: [10, 11], 13: [5, 11], 14: [6, 0],
        15: [1, 7], 16: [2, 8], 17: [3, 9]
    });
    node = new Array({ node_num: 0, x: 151, y: 605 }, { node_num: 1, x: 180, y: 434 }, { node_num: 2, x: 372, y: 432 },
        { node_num: 3, x: 474, y: 606 }, { node_num: 4, x: 372, y: 772 }, { node_num: 5, x: 175, y: 774 },
        { node_num: 6, x: 80, y: 604 }, { node_num: 7, x: 208, y: 486 }, { node_num: 8, x: 344, y: 488 },
        { node_num: 9, x: 412, y: 604 }, { node_num: 10, x: 346, y: 722 }, { node_num: 11, x: 208, y: 722 });
    edge = new Array({ edge_num: 0, x: 364, y: 758 }, { edge_num: 1, x: 130, y: 518 }, { edge_num: 2, x: 282, y: 430 },
        { edge_num: 3, x: 436, y: 530 }, { edge_num: 4, x: 436, y: 696 }, { edge_num: 5, x: 284, y: 780 },
        { edge_num: 6, x: 134, y: 704 }, { edge_num: 7, x: 176, y: 666 }, { edge_num: 8, x: 178, y: 554 },
        { edge_num: 9, x: 280, y: 490 }, { edge_num: 10, x: 388, y: 548 }, { edge_num: 11, x: 384, y: 670 },
        { edge_num: 12, x: 282, y: 732 }, { edge_num: 13, x: 202, y: 748 }, { edge_num: 14, x: 118, y: 606 },
        { edge_num: 15, x: 202, y: 468 }, { edge_num: 16, x: 362, y: 470 }, { edge_num: 17, x: 448, y: 606 });
    playpage_node = new Array({ node_num: 0, x: 154, y: 515 }, { node_num: 1, x: 219, y: 222 }, { node_num: 2, x: 547, y: 222 },
        { node_num: 3, x: 719, y: 515 }, { node_num: 4, x: 547, y: 804 }, { node_num: 5, x: 219, y: 804 },
        { node_num: 6, x: 47, y: 515 }, { node_num: 7, x: 270, y: 318 }, { node_num: 8, x: 495, y: 318 },
        { node_num: 9, x: 609, y: 515 }, { node_num: 10, x: 495, y: 713 }, { node_num: 11, x: 270, y: 713 });
    playpage_edge = new Array({ edge_num: 0, x: 526, y: 764 }, { edge_num: 1, x: 136, y: 382 }, { edge_num: 2, x: 394, y: 228 }
        , { edge_num: 3, x: 394, y: 228 }, { edge_num: 4, x: 636, y: 674 }, { edge_num: 5, x: 386, y: 810 }, { edge_num: 6, x: 142, y: 672 }
        , { edge_num: 7, x: 226, y: 632 }, { edge_num: 8, x: 220, y: 426 }, { edge_num: 9, x: 386, y: 324 }, { edge_num: 10, x: 564, y: 432 },
        { edge_num: 11, x: 554, y: 630 }, { edge_num: 12, x: 384, y: 718 }, { edge_num: 13, x: 250, y: 764 }, { edge_num: 14, x: 106, y: 522 }
        , { edge_num: 15, x: 250, y: 278 }, { edge_num: 16, x: 530, y: 272 }, { edge_num: 17, x: 670, y: 522 });
    circle_line = new Array();
    map_data[1] = node;
    map_data[2] = edge;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
    GameState(GS_DESIGN);
}
function simple2_XY() {
    node_connect = new Object({ 0: [3, 4, 5], 1: [2, 3, 4], 2: [1, 3, 5], 3: [1, 2, 0], 4: [1, 5, 0], 5: [2, 4, 0] });
    edge_connect = new Object({ 0: [3, 0], 1: [1, 2], 2: [2, 3], 3: [1, 3], 4: [4, 5], 5: [5, 0], 6: [4, 0], 7: [1, 4], 8: [2, 5] });
    node = new Array({ node_num: 0, x: 364, y: 647 }, { node_num: 1, x: 280, y: 440 }, { node_num: 2, x: 141, y: 673 },
        { node_num: 3, x: 420, y: 677 }, { node_num: 4, x: 276, y: 514 }, { node_num: 5, x: 198, y: 646 });

    edge = new Array({ edge_num: 0, x: 400, y: 662 }, { edge_num: 1, x: 134, y: 540 }, { edge_num: 2, x: 286, y: 768 },
        { edge_num: 3, x: 440, y: 540 }, { edge_num: 4, x: 208, y: 574 }, { edge_num: 5, x: 288, y: 698 },
        { edge_num: 6, x: 372, y: 574 }, { edge_num: 7, x: 290, y: 490 }, { edge_num: 8, x: 172, y: 664 });

    playpage_node = new Array({ node_num: 0, x: 534, y: 588 }, { node_num: 1, x: 388, y: 250 }, { node_num: 2, x: 152, y: 640 },
        { node_num: 3, x: 624, y: 648 }, { node_num: 4, x: 390, y: 370 }, { node_num: 5, x: 256, y: 584 });
    playpage_edge = new Array({ edge_num: 0, x: 582, y: 622 }, { edge_num: 1, x: 160, y: 374 }, { edge_num: 2, x: 382, y: 788 }, { edge_num: 3, x: 624, y: 382 },
        { edge_num: 4, x: 266, y: 438 }, { edge_num: 5, x: 394, y: 674 }, { edge_num: 6, x: 520, y: 442 }, { edge_num: 7, x: 394, y: 316 }, { edge_num: 8, x: 206, y: 616 });
    circle_line = new Array({ s_no: 0, e_no: 4, cX: 387, cY: 516, r: 150, sa: 270, ea: 28.09 }, { s_no: 0, e_no: 5, cX: 387, cY: 516, r: 150, sa: 28.09, ea: 152.12 },
         { s_no: 0, e_no: 5, cX: 387, cY: 516, r: 150, sa: 28.09, ea: 152.12 }, { s_no: 1, e_no: 2, cX: 385.5, cY: 513.5, r: 270.5, sa: 152.12, ea: 270 }
        , { s_no: 1, e_no: 3, cX: 385.5, cY: 513.5, r: 270.5, sa: 270, ea: 28.09 }, { s_no: 2, e_no: 3, cX: 385.5, cY: 513.5, r: 270.5, sa: 28.09, ea: 152.12 }
        , { s_no: 4, e_no: 5, cX: 387, cY: 516, r: 150, sa: 152.12, ea: 270 });
    map_data[1] = node;
    map_data[2] = edge;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
    GameState(GS_DESIGN);
}
function simple3_XY() {
    node_connect = new Object({
        0: [3, 5, 7], 1: [2, 4, 6], 2: [1, 3, 7], 3: [2, 4, 0], 4: [1, 3, 5], 5: [4, 6, 0],
        6: [1, 5, 7], 7: [2, 6, 0]
    });
    edge_connect = new Object({
        0: [4, 5], 1: [1, 4], 2: [3, 4], 3: [2, 3], 4: [1, 2],
        5: [6, 7], 6: [7, 0], 7: [5, 0], 8: [5, 6], 9: [1, 6], 10: [2, 7], 11: [3, 0]
    });
    node = new Array({ node_num: 0, x: 378, y: 704 }, { node_num: 1, x: 112, y: 432 }, { node_num: 2, x: 444, y: 436 },
        { node_num: 3, x: 444, y: 770 }, { node_num: 4, x: 112, y: 770 }, { node_num: 5, x: 180, y: 704 },
        { node_num: 6, x: 180, y: 502 }, { node_num: 7, x: 376, y: 502 });
    edge = new Array({ edge_num: 0, x: 148, y: 740 }, { edge_num: 1, x: 114, y: 610 }, { edge_num: 2, x: 286, y: 780 },
        { edge_num: 3, x: 462, y: 610 }, { edge_num: 4, x: 290, y: 426 }, { edge_num: 5, x: 290, y: 498 },
        { edge_num: 6, x: 390, y: 610 }, { edge_num: 7, x: 284, y: 710 }, { edge_num: 8, x: 186, y: 610 },
        { edge_num: 9, x: 164, y: 476 }, { edge_num: 10, x: 414, y: 472 }, { edge_num: 11, x: 422, y: 746 });
    playpage_node = new Array({ node_num: 0, x: 558, y: 696 }, { node_num: 1, x: 102, y: 222 }, { node_num: 2, x: 678, y: 222 }
        , { node_num: 3, x: 678, y: 808 }, { node_num: 4, x: 102, y: 808 }, { node_num: 5, x: 218, y: 696 }, { node_num: 6, x: 218, y: 342 },
        { node_num: 7, x: 558, y: 344 });
    playpage_edge = new Array({ edge_num: 0, x: 100, y: 397 }, { edge_num: 1, x: 44, y: 376 }, { edge_num: 2, x: 304, y: 695 }, { edge_num: 3, x: 603, y: 406 },
        { edge_num: 4, x: 322, y: 105 }, { edge_num: 5, x: 321, y: 228 }, { edge_num: 6, x: 484, y: 402 }, { edge_num: 7, x: 315, y: 579 }, { edge_num: 8, x: 144, y: 393 },
        { edge_num: 9, x: 91, y: 171 }, { edge_num: 10, x: 546, y: 168 }, { edge_num: 11, x: 542, y: 641 });
    circle_line = new Array();
    map_data[1] = node;
    map_data[2] = edge;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
    GameState(GS_DESIGN);
}
function middle1_XY() {
    node_connect = new Object({
        0: [18, 21, 23], 1: [2, 8, 10], 2: [1, 3, 11], 3: [2, 4, 13], 4: [3, 5, 14], 5: [4, 6, 16],
        6: [5, 7, 17], 7: [6, 8, 19], 8: [1, 7, 20], 9: [10, 20, 21], 10: [1, 9, 11], 11: [2, 10, 12],
        12: [11, 13, 22], 13: [3, 12, 14], 14: [4, 13, 15], 15: [14, 16, 23], 16: [5, 15, 17], 17: [6, 16, 18],
        18: [0, 17, 19], 19: [7, 18, 20], 20: [8, 9, 19], 21: [0, 9, 22], 22: [12, 21, 23], 23: [0, 15, 22]
    });
    edge_connect = new Object({
        0: [0, 23], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [4, 5], 5: [5, 6], 6: [6, 7],
        7: [7, 8], 8: [1, 8], 9: [1, 10], 10: [2, 11], 11: [3, 13], 12: [4, 14], 13: [5, 16],
        14: [6, 17], 15: [7, 19], 16: [8, 20], 17: [9, 20], 18: [9, 10], 19: [10, 11], 20: [11, 12],
        21: [12, 13], 22: [13, 14], 23: [14, 15], 24: [15, 16], 25: [16, 17], 26: [17, 18], 27: [18, 19],
        28: [19, 20], 29: [9, 21], 30: [12, 22], 31: [15, 23], 32: [0, 18], 33: [0, 21], 34: [21, 22], 35: [22, 23]
    });
    node = new Array({ node_num: 0, x: 218, y: 682 }, { node_num: 1, x: 180, y: 422 }, { node_num: 2, x: 402, y: 422 },
        { node_num: 3, x: 472, y: 480 }, { node_num: 4, x: 474, y: 730 }, { node_num: 5, x: 410, y: 788 },
        { node_num: 6, x: 174, y: 790 }, { node_num: 7, x: 110, y: 730 }, { node_num: 8, x: 112, y: 480 },
        { node_num: 9, x: 170, y: 482 }, { node_num: 10, x: 214, y: 474 }, { node_num: 11, x: 368, y: 476 },
        { node_num: 12, x: 410, y: 480 }, { node_num: 13, x: 420, y: 522 }, { node_num: 14, x: 420, y: 692 },
        { node_num: 15, x: 410, y: 730 }, { node_num: 16, x: 378, y: 740 }, { node_num: 17, x: 206, y: 738 },
        { node_num: 18, x: 172, y: 728 }, { node_num: 19, x: 164, y: 692 }, { node_num: 20, x: 162, y: 522 },
        { node_num: 21, x: 220, y: 528 }, { node_num: 22, x: 364, y: 528 }, { node_num: 23, x: 364, y: 684 });
    edge = new Array({ edge_num: 0, x: 284, y: 688 }, { edge_num: 1, x: 294, y: 420 }, { edge_num: 2, x: 446, y: 446 },
        { edge_num: 3, x: 474, y: 606 }, { edge_num: 4, x: 452, y: 766 }, { edge_num: 5, x: 292, y: 792 },
        { edge_num: 6, x: 134, y: 770 }, { edge_num: 7, x: 108, y: 606 }, { edge_num: 8, x: 138, y: 446 },
        { edge_num: 9, x: 196, y: 448 }, { edge_num: 10, x: 388, y: 448 }, { edge_num: 11, x: 446, y: 504 },
        { edge_num: 12, x: 446, y: 710 }, { edge_num: 13, x: 396, y: 768 }, { edge_num: 14, x: 190, y: 766 },
        { edge_num: 15, x: 136, y: 714 }, { edge_num: 16, x: 138, y: 504 }, { edge_num: 17, x: 164, y: 500 },
        { edge_num: 18, x: 188, y: 480 }, { edge_num: 19, x: 288, y: 476 }, { edge_num: 20, x: 390, y: 478 },
        { edge_num: 21, x: 418, y: 500 }, { edge_num: 22, x: 420, y: 606 }, { edge_num: 23, x: 418, y: 710 },
        { edge_num: 24, x: 390, y: 738 }, { edge_num: 25, x: 294, y: 740 }, { edge_num: 26, x: 186, y: 736 },
        { edge_num: 27, x: 166, y: 706 }, { edge_num: 28, x: 164, y: 608 }, { edge_num: 29, x: 200, y: 506 },
        { edge_num: 30, x: 386, y: 504 }, { edge_num: 31, x: 386, y: 702 }, { edge_num: 32, x: 198, y: 704 },
        { edge_num: 33, x: 216, y: 604 }, { edge_num: 34, x: 292, y: 530 }, { edge_num: 35, x: 368, y: 602 });
    playpage_node = new Array({ node_num: 0, x: 270, y: 650 }, { node_num: 1, x: 204, y: 210 }, { node_num: 2, x: 592, y: 210 },
        { node_num: 3, x: 698, y: 302 }, { node_num: 4, x: 698, y: 750 }, { node_num: 5, x: 598, y: 830 }, { node_num: 6, x: 194, y: 830 },
        { node_num: 7, x: 90, y: 746 }, { node_num: 8, x: 90, y: 300 }, { node_num: 9, x: 186, y: 308 }, { node_num: 10, x: 270, y: 308 },
        { node_num: 11, x: 516, y: 308 }, { node_num: 12, x: 606, y: 308 }, { node_num: 13, x: 606, y: 390 }, { node_num: 14, x: 606, y: 662 },
        { node_num: 15, x: 606, y: 738 }, { node_num: 16, x: 534, y: 738 }, { node_num: 17, x: 254, y: 738 }, { node_num: 18, x: 186, y: 738 },
        { node_num: 19, x: 186, y: 660 }, { node_num: 20, x: 186, y: 390 }, { node_num: 21, x: 274, y: 394 }, { node_num: 22, x: 514, y: 394 },
        { node_num: 23, x: 514, y: 650 });
    playpage_edge = new Array({ edge_num: 0, x: 396, y: 656 }, { edge_num: 1, x: 388, y: 210 }, { edge_num: 2, x: 652, y: 256 },
        { edge_num: 3, x: 698, y: 524 }, { edge_num: 4, x: 660, y: 792 }, { edge_num: 5, x: 392, y: 832 }, { edge_num: 6, x: 132, y: 790 },
        { edge_num: 7, x: 90, y: 524 }, { edge_num: 8, x: 140, y: 254 }, { edge_num: 9, x: 232, y: 254 }, { edge_num: 10, x: 558, y: 258 },
        { edge_num: 11, x: 656, y: 350 }, { edge_num: 12, x: 650, y: 696 }, { edge_num: 13, x: 568, y: 788 }, { edge_num: 14, x: 224, y: 786 },
        { edge_num: 15, x: 132, y: 700 }, { edge_num: 16, x: 136, y: 346 }, { edge_num: 17, x: 182, y: 346 }, { edge_num: 18, x: 232, y: 310 },
        { edge_num: 19, x: 388, y: 302 }, { edge_num: 20, x: 558, y: 306 }, { edge_num: 21, x: 604, y: 352 }, { edge_num: 22, x: 606, y: 520 },
        { edge_num: 23, x: 602, y: 704 }, { edge_num: 24, x: 568, y: 740 }, { edge_num: 25, x: 396, y: 744 }, { edge_num: 26, x: 216, y: 740 },
        { edge_num: 27, x: 186, y: 706 }, { edge_num: 28, x: 182, y: 522 }, { edge_num: 29, x: 236, y: 350 }, { edge_num: 30, x: 550, y: 352 },
        { edge_num: 31, x: 552, y: 684 }, { edge_num: 32, x: 232, y: 688 }, { edge_num: 33, x: 268, y: 518 }, { edge_num: 34, x: 390, y: 392 },
        { edge_num: 35, x: 520, y: 524 });
    circle_line = new Array();
    map_data[1] = node;
    map_data[2] = edge;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
    GameState(GS_DESIGN);
}
function middle2_XY() {
    node_connect = new Object({
        0: [15, 16, 17], 1: [2, 6, 8], 2: [1, 3, 9], 3: [2, 4, 10], 4: [3, 5, 11], 5: [4, 6, 12],
        6: [1, 5, 7], 7: [6, 8, 13], 8: [1, 7, 14], 9: [2, 10, 14], 10: [3, 9, 15], 11: [4, 12, 15],
        12: [5, 11, 13], 13: [7, 12, 16], 14: [8, 9, 17], 15: [10, 11, 0], 16: [13, 17, 0], 17: [14, 16, 0]
    });
    edge_connect = new Object({
        0: [16, 17], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [4, 5], 5: [5, 6], 6: [1, 6], 7: [1, 8],
        8: [2, 9], 9: [3, 10], 10: [4, 11], 11: [5, 12], 12: [6, 7], 13: [7, 13], 14: [7, 8], 15: [8, 14],
        16: [9, 14], 17: [9, 10], 18: [10, 15], 19: [11, 15], 20: [11, 12], 21: [12, 13], 22: [13, 16], 23: [14, 17],
        24: [15, 0], 25: [17, 0], 26: [16, 0]
    });
    node = new Array({ node_num: 0, x: 350, y: 632 }, { node_num: 1, x: 174, y: 448 }, { node_num: 2, x: 408, y: 448 },
        { node_num: 3, x: 482, y: 590 }, { node_num: 4, x: 410, y: 754 }, { node_num: 5, x: 172, y: 758 },
        { node_num: 6, x: 98, y: 584 }, { node_num: 7, x: 162, y: 588 }, { node_num: 8, x: 212, y: 496 },
        { node_num: 9, x: 370, y: 496 }, { node_num: 10, x: 420, y: 590 }, { node_num: 11, x: 370, y: 702 },
        { node_num: 12, x: 216, y: 710 }, { node_num: 13, x: 174, y: 658 }, { node_num: 14, x: 290, y: 474 },
        { node_num: 15, x: 400, y: 666 }, { node_num: 16, x: 226, y: 632 }, { node_num: 17, x: 293, y: 531 });
    edge = new Array({ edge_num: 0, x: 232, y: 566 }, { edge_num: 1, x: 288, y: 406 }, { edge_num: 2, x: 460, y: 508 },
        { edge_num: 3, x: 468, y: 680 }, { edge_num: 4, x: 292, y: 798 }, { edge_num: 5, x: 110, y: 684 },
        { edge_num: 6, x: 122, y: 504 }, { edge_num: 7, x: 194, y: 472 }, { edge_num: 8, x: 388, y: 474 },
        { edge_num: 9, x: 450, y: 590 }, { edge_num: 10, x: 390, y: 730 }, { edge_num: 11, x: 196, y: 734 },
        { edge_num: 12, x: 130, y: 586 }, { edge_num: 13, x: 164, y: 622 }, { edge_num: 14, x: 178, y: 536 },
        { edge_num: 15, x: 248, y: 482 }, { edge_num: 16, x: 334, y: 482 }, { edge_num: 17, x: 404, y: 542 },
        { edge_num: 18, x: 416, y: 624 }, { edge_num: 19, x: 386, y: 686 }, { edge_num: 20, x: 290, y: 730 },
        { edge_num: 21, x: 192, y: 688 }, { edge_num: 22, x: 202, y: 648 }, { edge_num: 23, x: 292, y: 504 },
        { edge_num: 24, x: 374, y: 648 }, { edge_num: 25, x: 350, y: 568 }, { edge_num: 26, x: 286, y: 668 });
    playpage_node = new Array({ node_num: 0, x: 496, y: 566 }, { node_num: 1, x: 196, y: 260 }, { node_num: 2, x: 594, y: 262 },
        { node_num: 3, x: 712, y: 498 }, { node_num: 4, x: 592, y: 766 }, { node_num: 5, x: 198, y: 776 }, { node_num: 6, x: 74, y: 486 },
        { node_num: 7, x: 178, y: 492 }, { node_num: 8, x: 262, y: 334 }, { node_num: 9, x: 526, y: 336 }, { node_num: 10, x: 610, y: 496 },
        { node_num: 11, x: 530, y: 688 }, { node_num: 12, x: 274, y: 696 }, { node_num: 13, x: 206, y: 608 }, { node_num: 14, x: 396, y: 302 },
        { node_num: 15, x: 578, y: 622 }, { node_num: 16, x: 288, y: 566 }, { node_num: 17, x: 396, y: 400 });
    playpage_edge = new Array({ edge_num: 0, x: 300, y: 458 }, { edge_num: 1, x: 390, y: 192 }, { edge_num: 2, x: 684, y: 364 }, { edge_num: 3, x: 686, y: 652 },
        { edge_num: 4, x: 410, y: 844 }, { edge_num: 5, x: 90, y: 648 }, { edge_num: 6, x: 112, y: 360 }, { edge_num: 7, x: 230, y: 300 }, { edge_num: 8, x: 556, y: 306 },
        { edge_num: 9, x: 660, y: 496 }, { edge_num: 10, x: 564, y: 730 }, { edge_num: 11, x: 234, y: 738 }, { edge_num: 12, x: 122, y: 490 }, { edge_num: 13, x: 186, y: 546 },
        { edge_num: 14, x: 208, y: 404 }, { edge_num: 15, x: 326, y: 320 }, { edge_num: 16, x: 468, y: 316 }, { edge_num: 17, x: 578, y: 410 }, { edge_num: 18, x: 602, y: 560 },
        { edge_num: 19, x: 558, y: 658 }, { edge_num: 20, x: 404, y: 732 }, { edge_num: 21, x: 236, y: 660 }, { edge_num: 22, x: 246, y: 594 }, { edge_num: 23, x: 400, y: 352 },
        { edge_num: 24, x: 534, y: 596 }, { edge_num: 25, x: 492, y: 460 }, { edge_num: 26, x: 390, y: 624 });

    circle_line = new Array({ s_no: 0, e_no: 17, cX: 384, cY: 512, r: 112, sa: 270, ea: 32 }, { s_no: 0, e_no: 16, cX: 384, cY: 512, r: 112, sa: 32, ea: 152.5 }, { s_no: 16, e_no: 17, cX: 384, cY: 512, r: 112, sa: 152.5, ea: 270 },
{ s_no: 9, e_no: 14, cX: 384, cY: 512, r: 213, sa: 270, ea: 313.5 }, { s_no: 9, e_no: 10, cX: 384, cY: 512, r: 213, sa: 313.5, ea: 1.5 }, { s_no: 10, e_no: 15, cX: 384, cY: 512, r: 213, sa: 1.5, ea: 34 }, {
    s_no: 11, e_no: 15, cX: 384, cY: 512, r: 213, sa: 34, ea: 49.5
}, { s_no: 11, e_no: 12, cX: 384, cY: 512, r: 213, sa: 49.5, ea: 126 }, { s_no: 12, e_no: 13, cX: 384, cY: 512, r: 213, sa: 126, ea: 151 }, { s_no: 7, e_no: 13, cX: 384, cY: 512, r: 213, sa: 151, ea: 182 }, { s_no: 7, e_no: 8, cX: 384, cY: 512, r: 213, sa: 182, ea: 229 }, { s_no: 8, e_no: 14, cX: 384, cY: 512, r: 213, sa: 229, ea: 270 },
{ s_no: 1, e_no: 2, cX: 384, cY: 512, r: 328, sa: 233, ea: 311.5 }, { s_no: 2, e_no: 3, cX: 384, cY: 512, r: 328, sa: 311.5, ea: 0 }, { s_no: 3, e_no: 4, cX: 384, cY: 512, r: 328, sa: 0, ea: 50 }, { s_no: 4, e_no: 5, cX: 384, cY: 512, r: 328, sa: 50, ea: 125.5 }, { s_no: 5, e_no: 6, cX: 384, cY: 512, r: 328, sa: 125.5, ea: 183.5 }, { s_no: 1, e_no: 6, cX: 384, cY: 512, r: 328, sa: 183.5, ea: 229.5 }
);
    map_data[1] = node;
    map_data[2] = edge;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
    GameState(GS_DESIGN);
}
function middle3_XY() {
    node_connect = new Object({
        0: [9, 16, 19], 1: [2, 5, 6], 2: [1, 3, 14], 3: [2, 4, 12], 4: [3, 5, 10], 5: [1, 4, 8],
        6: [1, 7, 15], 7: [6, 8, 16], 8: [5, 7, 9], 9: [8, 10, 0], 10: [4, 9, 11], 11: [10, 12, 19],
        12: [3, 11, 13], 13: [12, 14, 18], 14: [2, 13, 15], 15: [6, 14, 17], 16: [7, 17, 0], 17: [15, 16, 18],
        18: [13, 17, 19], 19: [11, 18, 0]
    });
    edge_connect = new Object({
        0: [19, 0], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [4, 5], 5: [1, 5], 6: [1, 6], 7: [2, 14],
        8: [3, 12], 9: [4, 10], 10: [5, 8], 11: [7, 8], 12: [6, 7], 13: [6, 15], 14: [14, 15], 15: [13, 14],
        16: [12, 13], 17: [11, 12], 18: [10, 11], 19: [9, 10], 20: [8, 9], 21: [7, 16], 22: [15, 17], 23: [13, 18],
        24: [11, 19], 25: [9, 0], 26: [16, 0], 27: [16, 17], 28: [17, 18], 29: [18, 19]
    });
    node = new Array({ node_num: 0, x: 236, y: 624 }, { node_num: 1, x: 282, y: 424 }, { node_num: 2, x: 470, y: 558 },
        { node_num: 3, x: 406, y: 782 }, { node_num: 4, x: 160, y: 780 }, { node_num: 5, x: 102, y: 558 },
        { node_num: 6, x: 282, y: 484 }, { node_num: 7, x: 230, y: 544 }, { node_num: 8, x: 152, y: 580 },
        { node_num: 9, x: 192, y: 642 }, { node_num: 10, x: 198, y: 736 }, { node_num: 11, x: 280, y: 710 },
        { node_num: 12, x: 370, y: 732 }, { node_num: 13, x: 372, y: 644 }, { node_num: 14, x: 412, y: 580 },
        { node_num: 15, x: 336, y: 544 }, { node_num: 16, x: 250, y: 574 }, { node_num: 17, x: 312, y: 574 },
        { node_num: 18, x: 326, y: 622 }, { node_num: 19, x: 282, y: 662 });
    edge = new Array({ edge_num: 0, x: 262, y: 644 }, { edge_num: 1, x: 384, y: 486 }, { edge_num: 2, x: 450, y: 670 },
        { edge_num: 3, x: 280, y: 792 }, { edge_num: 4, x: 120, y: 672 }, { edge_num: 5, x: 186, y: 484 },
        { edge_num: 6, x: 282, y: 458 }, { edge_num: 7, x: 438, y: 570 }, { edge_num: 8, x: 386, y: 754 },
        { edge_num: 9, x: 178, y: 758 }, { edge_num: 10, x: 132, y: 572 }, { edge_num: 11, x: 190, y: 562 },
        { edge_num: 12, x: 258, y: 514 }, { edge_num: 13, x: 310, y: 512 }, { edge_num: 14, x: 372, y: 560 },
        { edge_num: 15, x: 392, y: 614 }, { edge_num: 16, x: 372, y: 686 }, { edge_num: 17, x: 324, y: 724 },
        { edge_num: 18, x: 238, y: 724 }, { edge_num: 19, x: 192, y: 682 }, { edge_num: 20, x: 172, y: 612 },
        { edge_num: 21, x: 242, y: 558 }, { edge_num: 22, x: 322, y: 562 }, { edge_num: 23, x: 348, y: 632 },
        { edge_num: 24, x: 282, y: 682 }, { edge_num: 25, x: 218, y: 632 }, { edge_num: 26, x: 244, y: 600 },
        { edge_num: 27, x: 280, y: 576 }, { edge_num: 28, x: 320, y: 598 }, { edge_num: 29, x: 304, y: 644 });
    playpage_node = new Array({ node_num: 0, x: 304, y: 548 }, { node_num: 1, x: 378, y: 208 }, { node_num: 2, x: 706, y: 440 },
        { node_num: 3, x: 600, y: 820 }, { node_num: 4, x: 164, y: 820 }, { node_num: 5, x: 72, y: 436 }, { node_num: 6, x: 382, y: 320 },
        { node_num: 7, x: 296, y: 418 }, { node_num: 8, x: 160, y: 476 }, { node_num: 9, x: 228, y: 578 }, { node_num: 10, x: 238, y: 738 },
        { node_num: 11, x: 380, y: 694 }, { node_num: 12, x: 528, y: 738 }, { node_num: 13, x: 530, y: 582 }, { node_num: 14, x: 600, y: 474 },
        { node_num: 15, x: 470, y: 418 }, { node_num: 16, x: 330, y: 472 }, { node_num: 17, x: 432, y: 470 }, { node_num: 18, x: 456, y: 550 },
        { node_num: 19, x: 382, y: 614 });
    playpage_edge = new Array({ edge_num: 0, x: 342, y: 586 }, { edge_num: 1, x: 546, y: 318 }, { edge_num: 2, x: 666, y: 626 },
        { edge_num: 3, x: 380, y: 834 }, { edge_num: 4, x: 110, y: 624 }, { edge_num: 5, x: 222, y: 320 }, { edge_num: 6, x: 380, y: 278 },
        { edge_num: 7, x: 644, y: 458 }, { edge_num: 8, x: 556, y: 770 }, { edge_num: 9, x: 206, y: 776 }, { edge_num: 10, x: 124, y: 462 },
        { edge_num: 11, x: 226, y: 448 }, { edge_num: 12, x: 336, y: 368 }, { edge_num: 13, x: 426, y: 366 }, { edge_num: 14, x: 532, y: 444 },
        { edge_num: 15, x: 564, y: 530 }, { edge_num: 16, x: 530, y: 656 }, { edge_num: 17, x: 450, y: 718 }, { edge_num: 18, x: 310, y: 716 },
        { edge_num: 19, x: 234, y: 658 }, { edge_num: 20, x: 198, y: 530 }, { edge_num: 21, x: 312, y: 446 }, { edge_num: 22, x: 448, y: 444 },
        { edge_num: 23, x: 488, y: 566 }, { edge_num: 24, x: 380, y: 654 }, { edge_num: 25, x: 270, y: 566 }, { edge_num: 26, x: 316, y: 510 },
        { edge_num: 27, x: 378, y: 468 }, { edge_num: 28, x: 444, y: 510 }, { edge_num: 29, x: 418, y: 584 });
    circle_line = new Array();
    map_data[1] = node;
    map_data[2] = edge;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
    GameState(GS_DESIGN);
}
function hard1_XY() {
    node_connect = new Object({
        0: [18, 19, 23], 1: [2, 6, 7], 2: [1, 3, 8], 3: [2, 4, 9], 4: [3, 5, 10], 5: [4, 6, 11],
        6: [1, 5, 12], 7: [1, 8, 13], 8: [2, 7, 14], 9: [3, 10, 15], 10: [4, 9, 16], 11: [5, 12, 17], 12: [6, 11, 18],
        13: [7, 18, 19], 14: [8, 15, 20], 15: [9, 14, 21], 16: [10, 17, 22], 17: [11, 16, 23], 18: [0, 12, 13],
        19: [0, 13, 20], 20: [14, 19, 21], 21: [15, 20, 22], 22: [16, 21, 23], 23: [0, 17, 22]
    });
    edge_connect = new Object({
        0: [1, 2], 1: [2, 3], 2: [3, 4], 3: [4, 5], 4: [5, 6], 5: [1, 6], 6: [1, 7], 7: [2, 8], 8: [3, 9],
        9: [4, 10], 10: [5, 11], 11: [6, 12], 12: [7, 8], 13: [9, 10], 14: [11, 12], 15: [12, 18], 16: [7, 13], 17: [8, 14],
        18: [9, 15], 19: [10, 16], 20: [11, 17], 21: [13, 18], 22: [14, 15], 23: [16, 17], 24: [0, 18], 25: [13, 19], 26: [14, 20],
        27: [15, 21], 28: [16, 22], 29: [17, 23], 30: [0, 23], 31: [0, 19], 32: [19, 20], 33: [20, 21], 34: [21, 22], 35: [22, 23]
    });
    node = new Array({ node_num: 0, x: 240, y: 616 }, { node_num: 1, x: 190, y: 460 }, { node_num: 2, x: 390, y: 460 },
        { node_num: 3, x: 482, y: 614 }, { node_num: 4, x: 388, y: 770 }, { node_num: 5, x: 188, y: 770 },
        { node_num: 6, x: 96, y: 612 }, { node_num: 7, x: 216, y: 500 }, { node_num: 8, x: 364, y: 500 },
        { node_num: 9, x: 430, y: 616 }, { node_num: 10, x: 366, y: 726 }, { node_num: 11, x: 214, y: 728 },
        { node_num: 12, x: 148, y: 616 }, { node_num: 13, x: 234, y: 530 }, { node_num: 14, x: 346, y: 532 },
        { node_num: 15, x: 388, y: 614 }, { node_num: 16, x: 340, y: 690 }, { node_num: 17, x: 242, y: 690 },
        { node_num: 18, x: 192, y: 612 }, { node_num: 19, x: 264, y: 572 }, { node_num: 20, x: 314, y: 572 },
        { node_num: 21, x: 338, y: 616 }, { node_num: 22, x: 318, y: 652 }, { node_num: 23, x: 264, y: 654 });
    edge = new Array({ edge_num: 0, x: 288, y: 458 }, { edge_num: 1, x: 440, y: 536 }, { edge_num: 2, x: 440, y: 696 },
        { edge_num: 3, x: 286, y: 772 }, { edge_num: 4, x: 140, y: 694 }, { edge_num: 5, x: 140, y: 536 },
        { edge_num: 6, x: 202, y: 482 }, { edge_num: 7, x: 378, y: 482 }, { edge_num: 8, x: 458, y: 616 },
        { edge_num: 9, x: 378, y: 750 }, { edge_num: 10, x: 202, y: 750 }, { edge_num: 11, x: 120, y: 616 },
        { edge_num: 12, x: 288, y: 498 }, { edge_num: 13, x: 400, y: 674 }, { edge_num: 14, x: 180, y: 674 },
        { edge_num: 15, x: 170, y: 616 }, { edge_num: 16, x: 226, y: 516 }, { edge_num: 17, x: 356, y: 514 },
        { edge_num: 18, x: 408, y: 616 }, { edge_num: 19, x: 350, y: 708 }, { edge_num: 20, x: 230, y: 708 },
        { edge_num: 21, x: 212, y: 570 }, { edge_num: 22, x: 370, y: 574 }, { edge_num: 23, x: 286, y: 696 },
        { edge_num: 24, x: 216, y: 616 }, { edge_num: 25, x: 250, y: 552 }, { edge_num: 26, x: 330, y: 552 },
        { edge_num: 27, x: 362, y: 616 }, { edge_num: 28, x: 328, y: 672 }, { edge_num: 29, x: 252, y: 672 },
        { edge_num: 30, x: 252, y: 634 }, { edge_num: 31, x: 254, y: 594 }, { edge_num: 32, x: 288, y: 574 },
        { edge_num: 33, x: 328, y: 596 }, { edge_num: 34, x: 328, y: 636 }, { edge_num: 35, x: 290, y: 654 });
    playpage_node = new Array({ node_num: 0, x: 308, y: 540 }, { node_num: 1, x: 224, y: 280 }, { node_num: 2, x: 561, y: 280 },
        { node_num: 3, x: 717, y: 534 }, { node_num: 4, x: 561, y: 798 }, { node_num: 5, x: 222, y: 798 }, { node_num: 6, x: 66, y: 534 },
        { node_num: 7, x: 265, y: 340 }, { node_num: 8, x: 519, y: 340 }, { node_num: 9, x: 632, y: 536 }, { node_num: 10, x: 518, y: 726 },
        { node_num: 11, x: 267, y: 726 }, { node_num: 12, x: 151, y: 534 }, { node_num: 13, x: 300, y: 394 }, { node_num: 14, x: 484, y: 394 },
        { node_num: 15, x: 560, y: 536 }, { node_num: 16, x: 478, y: 669 }, { node_num: 17, x: 307, y: 669 }, { node_num: 18, x: 223, y: 534 },
        { node_num: 19, x: 351, y: 468 }, { node_num: 20, x: 435, y: 468 }, { node_num: 21, x: 475, y: 536 }, { node_num: 22, x: 439, y: 602 },
        { node_num: 23, x: 348, y: 602 });
    playpage_edge = new Array({ edge_num: 0, x: 393, y: 276 }, { edge_num: 1, x: 639, y: 403 }, { edge_num: 2, x: 645, y: 662 },
        { edge_num: 3, x: 393, y: 801 }, { edge_num: 4, x: 141, y: 666 }, { edge_num: 5, x: 141, y: 409 }, { edge_num: 6, x: 243, y: 310 },
        { edge_num: 7, x: 537, y: 313 }, { edge_num: 8, x: 668, y: 536 }, { edge_num: 9, x: 539, y: 764 }, { edge_num: 10, x: 244, y: 764 },
        { edge_num: 11, x: 109, y: 536 }, { edge_num: 12, x: 387, y: 340 }, { edge_num: 13, x: 578, y: 636 }, { edge_num: 14, x: 207, y: 633 },
        { edge_num: 15, x: 192, y: 537 }, { edge_num: 16, x: 282, y: 369 }, { edge_num: 17, x: 499, y: 370 }, { edge_num: 18, x: 591, y: 536 },
        { edge_num: 19, x: 493, y: 690 }, { edge_num: 20, x: 289, y: 693 }, { edge_num: 21, x: 261, y: 465 }, { edge_num: 22, x: 524, y: 468 },
        { edge_num: 23, x: 393, y: 669 }, { edge_num: 24, x: 267, y: 539 }, { edge_num: 25, x: 325, y: 432 }, { edge_num: 26, x: 459, y: 429 },
        { edge_num: 27, x: 513, y: 540 }, { edge_num: 28, x: 454, y: 630 }, { edge_num: 29, x: 328, y: 630 }, { edge_num: 30, x: 328, y: 569 },
        { edge_num: 31, x: 330, y: 504 }, { edge_num: 32, x: 393, y: 468 }, { edge_num: 33, x: 457, y: 507 }, { edge_num: 34, x: 457, y: 569 },
        { edge_num: 35, x: 391, y: 602 });
    circle_line = new Array();
    map_data[1] = node;
    map_data[2] = edge;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
    GameState(GS_DESIGN);
}
function hard2_XY() {
    node_connect = new Object({
        0: [1, 9, 10], 1: [0, 2, 12], 2: [1, 3, 13], 3: [2, 4, 15], 4: [3, 5, 16], 5: [4, 6, 18],
        6: [5, 7, 19], 7: [6, 8, 21], 8: [7, 9, 22], 9: [0, 8, 24], 10: [0, 11, 24], 11: [10, 12, 25], 12: [1, 11, 13],
        13: [2, 12, 14], 14: [13, 15, 26], 15: [3, 14, 16], 16: [4, 15, 17], 17: [16, 18, 27], 18: [5, 17, 19], 19: [6, 18, 20],
        20: [19, 21, 28], 21: [7, 20, 22], 22: [8, 21, 23], 23: [22, 24, 29], 24: [9, 10, 23], 25: [11, 30, 31], 26: [14, 31, 32],
        27: [17, 32, 33], 28: [20, 33, 34], 29: [23, 30, 34], 30: [25, 29, 31, 34], 31: [25, 26, 30, 32], 32: [26, 27, 31, 33],
        33: [27, 28, 32, 34], 34: [28, 29, 30, 33]
    });
    edge_connect = new Object({
        0: [0, 1], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [4, 5], 5: [5, 6], 6: [6, 7], 7: [7, 8], 8: [8, 9],
        9: [0, 9], 10: [0, 10], 11: [1, 12], 12: [2, 13], 13: [3, 15], 14: [4, 16], 15: [5, 18], 16: [6, 19], 17: [7, 21],
        18: [8, 22], 19: [9, 24], 20: [10, 24], 21: [10, 11], 22: [11, 12], 23: [12, 13], 24: [13, 14], 25: [14, 15],
        26: [15, 16], 27: [16, 17], 28: [17, 18], 29: [18, 19], 30: [19, 20], 31: [20, 21], 32: [21, 22], 33: [22, 23],
        34: [23, 24], 35: [11, 25], 36: [14, 26], 37: [17, 27], 38: [20, 28], 39: [23, 29], 40: [25, 30], 41: [25, 31],
        42: [26, 31], 43: [26, 32], 44: [27, 32], 45: [27, 33], 46: [28, 33], 47: [28, 34], 48: [29, 34], 49: [29, 30],
        50: [30, 31], 51: [31, 32], 52: [32, 33], 53: [33, 34], 54: [30, 34]
    });
    node = new Array({ node_num: 0, x: 210, y: 426 }, { node_num: 1, x: 368, y: 426 }, { node_num: 2, x: 442, y: 476 },
        { node_num: 3, x: 484, y: 626 }, { node_num: 4, x: 454, y: 710 }, { node_num: 5, x: 332, y: 790 },
        { node_num: 6, x: 248, y: 790 }, { node_num: 7, x: 124, y: 710 }, { node_num: 8, x: 94, y: 624 },
        { node_num: 9, x: 140, y: 478 }, { node_num: 10, x: 246, y: 504 }, { node_num: 11, x: 290, y: 478 },
        { node_num: 12, x: 330, y: 504 }, { node_num: 13, x: 378, y: 536 }, { node_num: 14, x: 412, y: 566 },
        { node_num: 15, x: 402, y: 614 }, { node_num: 16, x: 388, y: 662 }, { node_num: 17, x: 366, y: 710 },
        { node_num: 18, x: 314, y: 714 }, { node_num: 19, x: 264, y: 716 }, { node_num: 20, x: 210, y: 710 },
        { node_num: 21, x: 192, y: 662 }, { node_num: 22, x: 176, y: 614 }, { node_num: 23, x: 166, y: 566 },
        { node_num: 24, x: 202, y: 536 }, { node_num: 25, x: 290, y: 528 }, { node_num: 26, x: 370, y: 586 },
        { node_num: 27, x: 340, y: 676 }, { node_num: 28, x: 240, y: 674 }, { node_num: 29, x: 210, y: 586 },
        { node_num: 30, x: 268, y: 578 }, { node_num: 31, x: 312, y: 582 }, { node_num: 32, x: 326, y: 620 },
        { node_num: 33, x: 290, y: 644 }, { node_num: 34, x: 254, y: 618 });
    edge = new Array({ edge_num: 0, x: 286, y: 408 }, { edge_num: 1, x: 408, y: 446 }, { edge_num: 2, x: 474, y: 546 },
        { edge_num: 3, x: 472, y: 670 }, { edge_num: 4, x: 402, y: 762 }, { edge_num: 5, x: 286, y: 798 },
        { edge_num: 6, x: 176, y: 758 }, { edge_num: 7, x: 104, y: 668 }, { edge_num: 8, x: 104, y: 544 },
        { edge_num: 9, x: 170, y: 448 }, { edge_num: 10, x: 226, y: 462 }, { edge_num: 11, x: 352, y: 464 },
        { edge_num: 12, x: 410, y: 508 }, { edge_num: 13, x: 424, y: 686 }, { edge_num: 14, x: 422, y: 686 },
        { edge_num: 15, x: 322, y: 754 }, { edge_num: 16, x: 256, y: 754 }, { edge_num: 17, x: 160, y: 686 },
        { edge_num: 18, x: 136, y: 620 }, { edge_num: 19, x: 172, y: 508 }, { edge_num: 20, x: 224, y: 522 },
        { edge_num: 21, x: 266, y: 492 }, { edge_num: 22, x: 310, y: 488 }, { edge_num: 23, x: 354, y: 520 },
        { edge_num: 24, x: 396, y: 550 }, { edge_num: 25, x: 408, y: 588 }, { edge_num: 26, x: 396, y: 638 },
        { edge_num: 27, x: 380, y: 688 }, { edge_num: 28, x: 338, y: 716 }, { edge_num: 29, x: 286, y: 716 },
        { edge_num: 30, x: 238, y: 714 }, { edge_num: 31, x: 200, y: 686 }, { edge_num: 32, x: 182, y: 634 },
        { edge_num: 33, x: 170, y: 592 }, { edge_num: 34, x: 184, y: 550 }, { edge_num: 35, x: 290, y: 510 },
        { edge_num: 36, x: 382, y: 580 }, { edge_num: 37, x: 350, y: 690 }, { edge_num: 38, x: 230, y: 686 },
        { edge_num: 39, x: 194, y: 578 }, { edge_num: 40, x: 278, y: 556 }, { edge_num: 41, x: 304, y: 554 },
        { edge_num: 42, x: 336, y: 582 }, { edge_num: 43, x: 346, y: 606 }, { edge_num: 44, x: 334, y: 642 },
        { edge_num: 45, x: 312, y: 658 }, { edge_num: 46, x: 266, y: 660 }, { edge_num: 47, x: 246, y: 642 },
        { edge_num: 48, x: 232, y: 606 }, { edge_num: 49, x: 240, y: 582 }, { edge_num: 50, x: 288, y: 580 },
        { edge_num: 51, x: 316, y: 600 }, { edge_num: 52, x: 308, y: 632 }, { edge_num: 53, x: 274, y: 630 },
        { edge_num: 54, x: 262, y: 602 });
    playpage_node = new Array({ node_num: 0, x: 262, y: 222 }, { node_num: 1, x: 528, y: 222 }, { node_num: 2, x: 644, y: 312 },
        { node_num: 3, x: 714, y: 552 }, { node_num: 4, x: 668, y: 694 }, { node_num: 5, x: 462, y: 828 }, { node_num: 6, x: 324, y: 830 },
        { node_num: 7, x: 118, y: 690 }, { node_num: 8, x: 72, y: 552 }, { node_num: 9, x: 144, y: 310 }, { node_num: 10, x: 322, y: 354 },
        { node_num: 11, x: 394, y: 310 }, { node_num: 12, x: 464, y: 354 }, { node_num: 13, x: 536, y: 408 }, { node_num: 14, x: 604, y: 454 },
        { node_num: 15, x: 580, y: 538 }, { node_num: 16, x: 554, y: 616 }, { node_num: 17, x: 524, y: 700 }, { node_num: 18, x: 436, y: 704 },
        { node_num: 19, x: 354, y: 704 }, { node_num: 20, x: 260, y: 698 }, { node_num: 21, x: 230, y: 616 }, { node_num: 22, x: 206, y: 538 },
        { node_num: 23, x: 182, y: 456 }, { node_num: 24, x: 250, y: 406 }, { node_num: 25, x: 394, y: 372 }, { node_num: 26, x: 538, y: 482 },
        { node_num: 27, x: 478, y: 640 }, { node_num: 28, x: 312, y: 634 }, { node_num: 29, x: 256, y: 484 }, { node_num: 30, x: 358, y: 478 },
        { node_num: 31, x: 428, y: 480 }, { node_num: 32, x: 454, y: 542 }, { node_num: 33, x: 392, y: 582 }, { node_num: 34, x: 336, y: 540 });
    playpage_edge = new Array({ edge_num: 0, x: 392, y: 188 }, { edge_num: 1, x: 592, y: 260 }, { edge_num: 2, x: 704, y: 428 }, { edge_num: 3, x: 704, y: 630 },
        { edge_num: 4, x: 582, y: 782 }, { edge_num: 5, x: 392, y: 842 }, { edge_num: 6, x: 204, y: 786 }, { edge_num: 7, x: 84, y: 626 }, { edge_num: 8, x: 82, y: 426 },
        { edge_num: 9, x: 198, y: 262 }, { edge_num: 10, x: 288, y: 284 }, { edge_num: 11, x: 496, y: 284 }, { edge_num: 12, x: 590, y: 362 }, { edge_num: 13, x: 648, y: 546 },
        { edge_num: 14, x: 612, y: 656 }, { edge_num: 15, x: 446, y: 770 }, { edge_num: 16, x: 340, y: 770 }, { edge_num: 17, x: 174, y: 658 }, { edge_num: 18, x: 136, y: 548 },
        { edge_num: 19, x: 196, y: 360 }, { edge_num: 20, x: 286, y: 382 }, { edge_num: 21, x: 356, y: 334 }, { edge_num: 22, x: 428, y: 334 }, { edge_num: 23, x: 500, y: 382 },
        { edge_num: 24, x: 566, y: 430 }, { edge_num: 25, x: 594, y: 498 }, { edge_num: 26, x: 570, y: 578 }, { edge_num: 27, x: 540, y: 656 }, { edge_num: 28, x: 476, y: 708 },
        { edge_num: 29, x: 394, y: 708 }, { edge_num: 30, x: 304, y: 706 }, { edge_num: 31, x: 244, y: 660 }, { edge_num: 32, x: 220, y: 578 }, { edge_num: 33, x: 198, y: 502 },
        { edge_num: 34, x: 216, y: 432 }, { edge_num: 35, x: 394, y: 352 }, { edge_num: 36, x: 556, y: 474 }, { edge_num: 37, x: 494, y: 662 }, { edge_num: 38, x: 294, y: 662 },
        { edge_num: 39, x: 226, y: 476 }, { edge_num: 40, x: 370, y: 436 }, { edge_num: 41, x: 416, y: 440 }, { edge_num: 42, x: 474, y: 482 }, { edge_num: 43, x: 488, y: 522 },
        { edge_num: 44, x: 468, y: 588 }, { edge_num: 45, x: 432, y: 616 }, { edge_num: 46, x: 352, y: 614 }, { edge_num: 47, x: 320, y: 588 }, { edge_num: 48, x: 292, y: 522 },
        { edge_num: 49, x: 306, y: 484 }, { edge_num: 50, x: 390, y: 482 }, { edge_num: 51, x: 440, y: 518 }, { edge_num: 52, x: 422, y: 564 }, { edge_num: 53, x: 364, y: 564 },
        { edge_num: 54, x: 348, y: 510 });
    circle_line = new Array({ s_no: 0, e_no: 1, cX: 387, cY: 512, r: 328, sa: 245, ea: 295.5 }, { s_no: 1, e_no: 2, cX: 387, cY: 512, r: 328, sa: 295.5, ea: 321 },
         { s_no: 2, e_no: 3, cX: 387, cY: 512, r: 328, sa: 321, ea: 7 }, { s_no: 3, e_no: 4, cX: 385.5, cY: 512, r: 328, sa: 7, ea: 32.5 }
        , { s_no: 4, e_no: 5, cX: 385.5, cY: 512, r: 328, sa: 32.5, ea: 75 }, { s_no: 5, e_no: 6, cX: 385.5, cY: 512, r: 328, sa: 77, ea: 95.5 }
        , { s_no: 6, e_no: 7, cX: 387, cY: 512, r: 328, sa: 100.5, ea: 145 }, { s_no: 7, e_no: 8, cX: 387, cY: 512, r: 328, sa: 145, ea: 171 }, { s_no: 8, e_no: 9, cX: 387, cY: 512, r: 328, sa: 171, ea: 220.5 }, { s_no: 0, e_no: 9, cX: 387, cY: 512, r: 328, sa: 220.5, ea: 245 }
);
    map_data[1] = node;
    map_data[2] = edge;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
    GameState(GS_DESIGN);
}
function hard3_XY() {
    node_connect = new Object({
        0: [1, 11, 12], 1: [0, 2, 13], 2: [1, 3, 15], 3: [2, 4, 16], 4: [3, 5, 18], 5: [4, 6, 19],
        6: [5, 7, 21], 7: [6, 8, 22], 8: [7, 9, 24], 9: [8, 10, 25], 10: [9, 11, 27], 11: [0, 10, 28], 12: [0, 13, 29],
        13: [1, 12, 14], 14: [13, 15, 32], 15: [2, 14, 16], 16: [3, 15, 17], 17: [16, 18, 33], 18: [4, 17, 19], 19: [5, 18, 20],
        20: [19, 21, 35], 21: [6, 20, 22], 22: [7, 21, 23], 23: [22, 24, 36], 24: [8, 23, 25], 25: [9, 24, 26], 26: [25, 27, 38],
        27: [10, 26, 28], 28: [11, 27, 29], 29: [12, 28, 30], 30: [29, 31, 38], 31: [30, 32, 39], 32: [14, 31, 33],
        33: [17, 32, 34], 34: [33, 35, 40], 35: [20, 34, 36], 36: [23, 35, 37], 37: [36, 38, 41], 38: [26, 30, 37],
        39: [31, 40, 41], 40: [34, 39, 41], 41: [37, 39, 40]
    });
    edge_connect = new Object({
        0: [0, 1], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [4, 5], 5: [5, 6], 6: [6, 7], 7: [7, 8], 8: [8, 9],
        9: [9, 10], 10: [10, 11], 11: [0, 11], 12: [0, 12], 13: [1, 13], 14: [2, 15], 15: [3, 16], 16: [4, 18], 17: [5, 19],
        18: [6, 21], 19: [7, 22], 20: [8, 24], 21: [9, 25], 22: [10, 27], 23: [11, 28], 24: [28, 29], 25: [12, 29], 26: [12, 13],
        27: [13, 14], 28: [14, 15], 29: [15, 16], 30: [16, 17], 31: [17, 18], 32: [18, 19], 33: [19, 20], 34: [20, 21],
        35: [21, 22], 36: [22, 23], 37: [23, 24], 38: [24, 25], 39: [25, 26], 40: [26, 27], 41: [27, 28], 42: [29, 30],
        43: [14, 32], 44: [17, 33], 45: [20, 35], 46: [23, 36], 47: [26, 38], 48: [30, 38], 49: [30, 31], 50: [31, 32],
        51: [32, 33], 52: [33, 34], 53: [34, 35], 54: [35, 36], 55: [36, 37], 56: [37, 38], 57: [31, 39], 58: [34, 40],
        59: [37, 41], 60: [39, 41], 61: [39, 40], 62: [40, 41]
    });
    node = new Array({ node_num: 0, x: 234, y: 414 }, { node_num: 1, x: 340, y: 412 }, { node_num: 2, x: 420, y: 466 },
        { node_num: 3, x: 462, y: 546 }, { node_num: 4, x: 462, y: 634 }, { node_num: 5, x: 426, y: 714 },
        { node_num: 6, x: 352, y: 768 }, { node_num: 7, x: 240, y: 778 }, { node_num: 8, x: 146, y: 720 },
        { node_num: 9, x: 100, y: 626 }, { node_num: 10, x: 108, y: 528 }, { node_num: 11, x: 150, y: 462 },
        { node_num: 12, x: 250, y: 456 }, { node_num: 13, x: 324, y: 458 }, { node_num: 14, x: 366, y: 482 },
        { node_num: 15, x: 388, y: 496 }, { node_num: 16, x: 422, y: 556 }, { node_num: 17, x: 422, y: 590 },
        { node_num: 18, x: 420, y: 624 }, { node_num: 19, x: 394, y: 688 }, { node_num: 20, x: 368, y: 706 },
        { node_num: 21, x: 336, y: 728 }, { node_num: 22, x: 252, y: 736 }, { node_num: 23, x: 202, y: 708 },
        { node_num: 24, x: 178, y: 692 }, { node_num: 25, x: 142, y: 624 }, { node_num: 26, x: 144, y: 546 },
        { node_num: 27, x: 178, y: 494 }, { node_num: 28, x: 200, y: 480 }, { node_num: 29, x: 202, y: 480 },
        { node_num: 30, x: 228, y: 518 }, { node_num: 31, x: 286, y: 500 }, { node_num: 32, x: 340, y: 516 },
        { node_num: 33, x: 376, y: 586 }, { node_num: 34, x: 364, y: 640 }, { node_num: 35, x: 342, y: 666 },
        { node_num: 36, x: 228, y: 672 }, { node_num: 37, x: 198, y: 638 }, { node_num: 38, x: 188, y: 586 },
        { node_num: 39, x: 284, y: 542 }, { node_num: 40, x: 330, y: 616 }, { node_num: 41, x: 236, y: 616 });
    edge = new Array({ edge_num: 0, x: 280, y: 404 }, { edge_num: 1, x: 382, y: 434 }, { edge_num: 2, x: 448, y: 502 },
        { edge_num: 3, x: 468, y: 590 }, { edge_num: 4, x: 450, y: 678 }, { edge_num: 5, x: 390, y: 752 },
        { edge_num: 6, x: 300, y: 786 }, { edge_num: 7, x: 184, y: 758 }, { edge_num: 8, x: 114, y: 680 },
        { edge_num: 9, x: 96, y: 576 }, { edge_num: 10, x: 124, y: 490 }, { edge_num: 11, x: 188, y: 432 },
        { edge_num: 12, x: 242, y: 432 }, { edge_num: 13, x: 332, y: 432 }, { edge_num: 14, x: 402, y: 482 },
        { edge_num: 15, x: 442, y: 554 }, { edge_num: 16, x: 442, y: 628 }, { edge_num: 17, x: 408, y: 700 },
        { edge_num: 18, x: 344, y: 748 }, { edge_num: 19, x: 246, y: 756 }, { edge_num: 20, x: 162, y: 708 },
        { edge_num: 21, x: 122, y: 626 }, { edge_num: 22, x: 130, y: 538 }, { edge_num: 23, x: 166, y: 478 },
        { edge_num: 24, x: 192, y: 486 }, { edge_num: 25, x: 224, y: 468 }, { edge_num: 26, x: 284, y: 452 },
        { edge_num: 27, x: 346, y: 466 }, { edge_num: 28, x: 378, y: 492 }, { edge_num: 29, x: 410, y: 526 },
        { edge_num: 30, x: 424, y: 572 }, { edge_num: 31, x: 422, y: 604 }, { edge_num: 32, x: 412, y: 656 },
        { edge_num: 33, x: 384, y: 696 }, { edge_num: 34, x: 354, y: 718 }, { edge_num: 35, x: 292, y: 738 },
        { edge_num: 36, x: 224, y: 726 }, { edge_num: 37, x: 188, y: 702 }, { edge_num: 38, x: 152, y: 658 },
        { edge_num: 39, x: 142, y: 602 }, { edge_num: 40, x: 144, y: 562 }, { edge_num: 41, x: 160, y: 516 },
        { edge_num: 42, x: 212, y: 498 }, { edge_num: 43, x: 354, y: 502 }, { edge_num: 44, x: 400, y: 590 },
        { edge_num: 45, x: 354, y: 686 }, { edge_num: 46, x: 214, y: 690 }, { edge_num: 47, x: 164, y: 586 },
        { edge_num: 48, x: 200, y: 546 }, { edge_num: 49, x: 250, y: 506 }, { edge_num: 50, x: 312, y: 506 },
        { edge_num: 51, x: 364, y: 544 }, { edge_num: 52, x: 376, y: 610 }, { edge_num: 53, x: 354, y: 656 },
        { edge_num: 54, x: 284, y: 688 }, { edge_num: 55, x: 214, y: 656 }, { edge_num: 56, x: 192, y: 606 },
        { edge_num: 57, x: 286, y: 522 }, { edge_num: 58, x: 344, y: 628 }, { edge_num: 59, x: 218, y: 628 },
        { edge_num: 60, x: 242, y: 564 }, { edge_num: 61, x: 324, y: 562 }, { edge_num: 62, x: 284, y: 640 });
    playpage_node = new Array({ node_num: 0, x: 304, y: 202 }, { node_num: 1, x: 472, y: 200 }, { node_num: 2, x: 610, y: 292 },
        { node_num: 3, x: 682, y: 428 }, { node_num: 4, x: 680, y: 570 }, { node_num: 5, x: 622, y: 706 }, { node_num: 6, x: 500, y: 796 },
        { node_num: 7, x: 310, y: 810 }, { node_num: 8, x: 152, y: 712 }, { node_num: 9, x: 78, y: 558 }, { node_num: 10, x: 88, y: 392 },
        { node_num: 11, x: 156, y: 284 }, { node_num: 12, x: 328, y: 272 }, { node_num: 13, x: 450, y: 274 }, { node_num: 14, x: 522, y: 318 },
        { node_num: 15, x: 558, y: 338 }, { node_num: 16, x: 612, y: 440 }, { node_num: 17, x: 610, y: 490 }, { node_num: 18, x: 612, y: 556 },
        { node_num: 19, x: 570, y: 660 }, { node_num: 20, x: 528, y: 690 }, { node_num: 21, x: 472, y: 728 }, { node_num: 22, x: 330, y: 742 },
        { node_num: 23, x: 246, y: 690 }, { node_num: 24, x: 210, y: 668 }, { node_num: 25, x: 144, y: 552 }, { node_num: 26, x: 146, y: 488 },
        { node_num: 27, x: 152, y: 420 }, { node_num: 28, x: 212, y: 334 }, { node_num: 29, x: 246, y: 314 }, { node_num: 30, x: 286, y: 372 },
        { node_num: 31, x: 386, y: 348 }, { node_num: 32, x: 478, y: 374 }, { node_num: 33, x: 542, y: 490 }, { node_num: 34, x: 516, y: 580 },
        { node_num: 35, x: 480, y: 628 }, { node_num: 36, x: 292, y: 632 }, { node_num: 37, x: 242, y: 578 }, { node_num: 38, x: 224, y: 486 },
        { node_num: 39, x: 386, y: 420 }, { node_num: 40, x: 458, y: 540 }, { node_num: 41, x: 302, y: 540 });
    playpage_edge = new Array({ edge_num: 0, x: 386, y: 188 }, { edge_num: 1, x: 552, y: 236 }, { edge_num: 2, x: 656, y: 354 }, { edge_num: 3, x: 692, y: 498 },
        { edge_num: 4, x: 660, y: 648 }, { edge_num: 5, x: 570, y: 764 }, { edge_num: 6, x: 404, y: 820 }, { edge_num: 7, x: 220, y: 780 }, { edge_num: 8, x: 104, y: 646 },
        { edge_num: 9, x: 70, y: 476 }, { edge_num: 10, x: 120, y: 334 }, { edge_num: 11, x: 226, y: 234 }, { edge_num: 12, x: 314, y: 234 }, { edge_num: 13, x: 462, y: 236 },
        { edge_num: 14, x: 582, y: 318 }, { edge_num: 15, x: 642, y: 436 }, { edge_num: 16, x: 644, y: 560 }, { edge_num: 17, x: 592, y: 682 }, { edge_num: 18, x: 484, y: 760 },
        { edge_num: 19, x: 322, y: 770 }, { edge_num: 20, x: 186, y: 692 }, { edge_num: 21, x: 110, y: 554 }, { edge_num: 22, x: 122, y: 410 }, { edge_num: 23, x: 184, y: 312 },
        { edge_num: 24, x: 228, y: 322 }, { edge_num: 25, x: 284, y: 294 }, { edge_num: 26, x: 386, y: 264 }, { edge_num: 27, x: 486, y: 296 }, { edge_num: 28, x: 538, y: 328 },
        { edge_num: 29, x: 592, y: 386 }, { edge_num: 30, x: 614, y: 466 }, { edge_num: 31, x: 612, y: 524 }, { edge_num: 32, x: 598, y: 612 }, { edge_num: 33, x: 550, y: 674 },
        { edge_num: 34, x: 500, y: 708 }, { edge_num: 35, x: 402, y: 742 }, { edge_num: 36, x: 284, y: 722 }, { edge_num: 37, x: 222, y: 680 }, { edge_num: 38, x: 166, y: 612 },
        { edge_num: 39, x: 148, y: 514 }, { edge_num: 40, x: 148, y: 452 }, { edge_num: 41, x: 176, y: 378 }, { edge_num: 42, x: 262, y: 346 }, { edge_num: 43, x: 502, y: 346 },
        { edge_num: 44, x: 576, y: 496 }, { edge_num: 45, x: 502, y: 658 }, { edge_num: 46, x: 266, y: 664 }, { edge_num: 47, x: 182, y: 488 }, { edge_num: 48, x: 246, y: 424 },
        { edge_num: 49, x: 330, y: 358 }, { edge_num: 50, x: 438, y: 358 }, { edge_num: 51, x: 522, y: 434 }, { edge_num: 52, x: 536, y: 534 }, { edge_num: 53, x: 502, y: 606 },
        { edge_num: 54, x: 390, y: 662 }, { edge_num: 55, x: 264, y: 610 }, { edge_num: 56, x: 228, y: 530 }, { edge_num: 57, x: 388, y: 386 }, { edge_num: 58, x: 486, y: 560 },
        { edge_num: 59, x: 276, y: 562 }, { edge_num: 60, x: 314, y: 454 }, { edge_num: 61, x: 456, y: 464 }, { edge_num: 62, x: 380, y: 586 });
    circle_line = new Array({ s_no: 0, e_no: 1, cX: 370.5, cY: 497.5, r: 314, sa: 254, ea: 287.5 }, { s_no: 1, e_no: 2, cX: 370.5, cY: 497.5, r: 314, sa: 287.5, ea: 318.5 },
            { s_no: 2, e_no: 3, cX: 370.5, cY: 497.5, r: 314, sa: 318.5, ea: 349 }, { s_no: 3, e_no: 4, cX: 370.5, cY: 497.5, r: 314, sa: 350, ea: 10 }, { s_no: 4, e_no: 5, cX: 370.5, cY: 497.5, r: 314, sa: 10, ea: 38 },
            { s_no: 5, e_no: 6, cX: 370.5, cY: 497.5, r: 314, sa: 38, ea: 69.5 }, { s_no: 6, e_no: 7, cX: 370.5, cY: 497.5, r: 314, sa: 69.5, ea: 102 }, { s_no: 7, e_no: 8, cX: 370.5, cY: 497.5, r: 314, sa: 102, ea: 137.5 },
            { s_no: 8, e_no: 9, cX: 370.5, cY: 497.5, r: 314, sa: 137.5, ea: 167.5 }, { s_no: 9, e_no: 10, cX: 370.5, cY: 497.5, r: 314, sa: 167.5, ea: 200.5 }, { s_no: 10, e_no: 11, cX: 370.5, cY: 497.5, r: 314, sa: 200.5, ea: 224 },
            { s_no: 0, e_no: 11, cX: 370.5, cY: 497.5, r: 314, sa: 224, ea: 254 }, { s_no: 12, e_no: 13, cX: 370.5, cY: 497.5, r: 239, sa: 255.5, ea: 287 },
            { s_no: 13, e_no: 14, cX: 370.5, cY: 497.5, r: 239, sa: 287, ea: 309 }, { s_no: 14, e_no: 15, cX: 370.5, cY: 497.5, r: 239, sa: 309, ea: 317.5 }, { s_no: 15, e_no: 16, cX: 370.5, cY: 497.5, r: 239, sa: 317.5, ea: 345 },
            { s_no: 16, e_no: 17, cX: 370.5, cY: 497.5, r: 239, sa: 345, ea: 359.5 }, { s_no: 17, e_no: 18, cX: 370.5, cY: 497.5, r: 239, sa: 359.5, ea: 11.5 }, { s_no: 18, e_no: 19, cX: 370.5, cY: 497.5, r: 239, sa: 11.5, ea: 41 },
            { s_no: 19, e_no: 20, cX: 370.5, cY: 497.5, r: 239, sa: 41, ea: 52 }, { s_no: 20, e_no: 21, cX: 370.5, cY: 497.5, r: 239, sa: 52, ea: 70 }, { s_no: 21, e_no: 22, cX: 370.5, cY: 497.5, r: 239, sa: 70, ea: 103 },
            { s_no: 22, e_no: 23, cX: 370.5, cY: 497.5, r: 239, sa: 103, ea: 126 }, { s_no: 23, e_no: 24, cX: 370.5, cY: 497.5, r: 239, sa: 126, ea: 138.5 }, { s_no: 24, e_no: 25, cX: 370.5, cY: 497.5, r: 239, sa: 138.5, ea: 171 },
            { s_no: 25, e_no: 26, cX: 370.5, cY: 497.5, r: 239, sa: 171, ea: 182 }, { s_no: 26, e_no: 27, cX: 370.5, cY: 497.5, r: 239, sa: 182, ea: 199 }, { s_no: 27, e_no: 28, cX: 370.5, cY: 497.5, r: 239, sa: 199, ea: 222 },
            { s_no: 28, e_no: 29, cX: 370.5, cY: 497.5, r: 239, sa: 222, ea: 232 }, { s_no: 12, e_no: 29, cX: 370.5, cY: 497.5, r: 239, sa: 232, ea: 255.5 }, { s_no: 30, e_no: 31, cX: 370.5, cY: 497.5, r: 160, sa: 232.5, ea: 270 },
            { s_no: 31, e_no: 32, cX: 370.5, cY: 497.5, r: 160, sa: 270, ea: 305 }, { s_no: 32, e_no: 33, cX: 370.5, cY: 497.5, r: 160, sa: 305, ea: 355.5 }, { s_no: 33, e_no: 34, cX: 370.5, cY: 497.5, r: 160, sa: 355.5, ea: 29.5 },
            { s_no: 34, e_no: 35, cX: 370.5, cY: 497.5, r: 160, sa: 29.5, ea: 50.5 }, { s_no: 35, e_no: 36, cX: 370.5, cY: 497.5, r: 160, sa: 50.5, ea: 125.5 }, { s_no: 36, e_no: 37, cX: 370.5, cY: 497.5, r: 160, sa: 125.5, ea: 148 },
            { s_no: 37, e_no: 38, cX: 370.5, cY: 497.5, r: 160, sa: 148, ea: 182 }, { s_no: 30, e_no: 38, cX: 370.5, cY: 497.5, r: 160, sa: 182, ea: 232.5 }, { s_no: 39, e_no: 40, cX: 370.5, cY: 497.5, r: 84, sa: 270, ea: 34 },
            { s_no: 40, e_no: 41, cX: 370.5, cY: 497.5, r: 84, sa: 34, ea: 147 }, { s_no: 39, e_no: 41, cX: 370.5, cY: 497.5, r: 84, sa: 147, ea: 270 }
    );




    map_data[1] = node;
    map_data[2] = edge;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
    GameState(GS_DESIGN);
}
//music
function itemLoaded() {
    //loadCount++;
    if (loadCount >= itemsToLoad) {
        load_finish();
    }
}
function load_finish() {
        soundPool['first'] = { element: music1, played: false };
        soundPool['game'] = { element: music2, played: false };
        soundPool['put'] = { element: music3, played: false };
        soundPool['select'] = { element: music4, played: false };
        soundPool['walk'] = { element: music5, played: false };
        soundPool['wrong'] = { element: music6, played: false };
        soundPool['key_music'] = { element: music7, played: false };
        soundPool['key2-2'] = { element: music8, played: false };
        soundPool['key5-2'] = { element: music9, played: false };
        soundPool['key5-3'] = { element: music10, played: false };
        soundPool['key6-12'] = { element: music11, played: false };
        GameState(GS_HOME_ANIMATION);
}
function soundloopreplay(name) {
    if (sound_d == true) {
        soundPool[name].element.pause();

    }
    else if (sound_d == false) {
        soundPool[name].element.play();
        soundPool[name].element.currentTime = 0;
        soundPool[name].element.loop = true;
    }
}
function soundreplay(name) {
    if (sound_d == true) {
        soundPool[name].element.pause();
    }
    else if (sound_d == false) {
        soundPool[name].element.play();
        soundPool[name].element.currentTime = 0;
    }
}
function soundloopplay(name) {
    if (sound_d == false) {
        soundPool[name].element.play();
        soundPool[name].element.loop = true;
    } else if (sound_d == true) {
        soundPool[name].element.pause();
    }
}
function soundplay(name) {
    if (sound_d == true) {
        soundPool[name].element.pause();
    }
    else if (sound_d == false) {
        soundPool[name].element.play();
    }
}
function soundkey(name) {
    soundPool[name].element.play();
    soundPool[name].element.currentTime = 0;
}
function soundpause(name) {
    soundPool[name].element.pause();
}
function supportedAudioFormat(audio) {
    var returnExtension = "";
    if (audio.canPlayType("audio/wav") == "probably" ||
        audio.canPlayType("audio/wav") == "maybe") {
        returnExtension = "wav";
    }
    else if (audio.canPlayType("audio/mp3") == "probably" ||
    audio.canPlayType("audio/mp3") == "maybe") {
        returnExtension = "mp3";
    }
    else if (audio.canPlayType("audio/ogg") == "probably" ||
        audio.canPlayType("audio/ogg") == "maybe") {
        returnExtension = "ogg";
    }
    return returnExtension;

}
function parseData(graph) {
    var ar = new Array();
    for (var i in graph) {
        var arr = new Array();
        for (var j in graph[i]) {
            arr.push(graph[i][j]);
        }
        arr.push(-1);
        ar.push(arr.concat());
    }
    return ar;
}
function check1(vertex, edge, order1, orderVertex, badVertex, badEdge, startEnd, start1, end1) {

    var s = new Array();
    var s1 = new Array();
    var MAX_SIZE = 100;
    var visit_1 = new Array();
    var graph = new Array();
    graph.push(new Array());
    var graph_edge = new Array();
    graph_edge.push(new Array());
    var temp_graph = new Array();
    temp_graph.push(new Array());
    var start_point = 0;
    var point_num = 0;
    var bad_vertex = 0;
    var bad_edge = 0;
    var bad_vertex_num = 0, bad_edge_num = 0;
    var temp = 0, temp1 = 0;
    var number = 0;
    var count = 0;
    var Adjacent_num = 0;
    var a = 0, b = 0;
    var start = 0, end = 0;
    var point = 0, order = 0;
    var flag = 0;
    var input = 0;
    var check_start_point = new Array();

    graph = parseData(vertex);//get grpah data
    graph_edge = parseData(edge);//get graph_edge data
    var check = 0, final_check = 0;
    for (var i = 0; i < graph.length; i++) {
        for (var j = 0; j < graph.length; j++) {
            if (graph[i][j] == -1) {
                point_num = point_num + 1;//get graph points number
                Adjacent_num = j;//get graph point Adjacent number
            }
        }
    }
    temp_graph = graph;
    if (startEnd == null) {
        //起終點不同
        if (start1 == null && end1 == null) {
            start = 0;
            end = 0;
        }
        else {
            start = start1;
            end = end1;
        }
    }
    else {
        //起終點相同
        start = startEnd;
        end = startEnd;
    }
    if (badVertex == null) {
        //表示沒有壞點
        bad_vertex_num = 0;
        bad_vertex = badVertex;
    }
    else {
        bad_vertex_num = 1;
        bad_vertex = badVertex;
        vertex_fault(graph, bad_vertex_num, bad_vertex);
    }
    if (badEdge == null) {
        //表示沒有壞線
        bad_edge_num = 0;
        bad_edge = badEdge;
    }
    else {
        bad_edge_num = 1;
        bad_edge = badEdge;
        edge_fault(graph, graph_edge, bad_edge_num, bad_edge);
    }
    order = order1;
    point = orderVertex;
    for (var i = 0; i < MAX_SIZE; i++) {
        visit_1[i] = false;
    }
    if (startEnd == null && start1 == null && end1 == null && order1 == null && orderVertex == null) {//have nothing
        inpt = 0;
    }
    else if (startEnd == null && start1 == null && end1 == null) {//have order1 and orderVertex
        input = 1;
    }
    else if (startEnd == null) {//have start1 and end1 and order1 and orderVertex
        input = 2;
    }
    else if (start1 == null && end1 == null) {//have startEnd and order1 and orderVertex
        input = 3;
    }
    switch (input) {
        case 0: {//have nothing
            for (var i = 0; i < bad_vertex_num; i++) {
                if (start == bad_vertex || end == bad_vertex) {
                    check = false;
                    flag = 1;
                    break;
                }
            }
            if (flag) {
                break;
            }
            var j = 0;
            for (var i = 0; i < point_num; i++) {
                start = i;
                end = i;
                check = Hamilton_cycle(graph, start, end);
                clear_search_point_value();
                if (check == true) {
                    check_start_point[j] = i;
                    j++;
                    final_check = check;
                }
            }
            clear_all_value();
            break;
        }
        case 1: {//have order1 and orderVertex
            for (var i = 0; i < bad_vertex_num; i++) {
                if (start == bad_vertex || end == bad_vertex) {
                    check = false;
                    flag = 1;
                    break;
                }
            }
            if (flag) {
                break;
            }
            var j = 0;
            for (var i = 0; i < point_num; i++) {
                start = i;
                end = i;
                check = korder_Hamilton_cycle(graph, point, order, start, end);
                clear_search_point_value();
                if (check == true) {
                    check_start_point[j] = i;
                    j++;
                    final_check = check;
                }
            }
            clear_all_value();
            break;
        }
        case 2: {//have start1 and end1 and order1 and orderVertex
            for (var i = 0; i < bad_vertex_num; i++) {
                if (start == bad_vertex || end == bad_vertex) {
                    check = false;
                    flag = 1;
                    break;
                }
            }
            if (flag) {
                break;
            }
            if (start == end) {
                check = korder_Hamilton_cycle(graph, point, order, start, end);
                final_check = check;
            }
            else if (start != end) {
                check = korder_Hamilton_path(graph, point, order, start, end);
                final_check = check;
            }
            clear_all_value();
            break;
        }
        case 3: {//have startEnd and order1 and orderVertex
            for (var i = 0; i < bad_vertex_num; i++) {
                if (start == bad_vertex || end == bad_vertex) {
                    check = false;
                    flag = 1;
                    break;
                }
            }
            if (flag) {
                break;
            }
            if (start == end) {
                check = korder_Hamilton_cycle(graph, point, order, start, end);
                final_check = check;
            }
            else if (start != end) {
                check = korder_Hamilton_path(graph, point, order, start, end);
                final_check = check;
            }
            clear_all_value();
            break;
        }
    }
    return final_check;
    function check_Adjacent_points(temp, temp1, graph, s, s1)/*檢查是否有鄰點*/ {
        var i = 0;
        var j = 0;
        for (j = temp; j < point_num; j++) {
            for (i = temp1; i < point_num; i++) {
                if (graph[j][i] != -1) {
                    if (visit_1[graph[j][i]] == false) {
                        if (graph[j][i] != start_point) {
                            s.push(j);
                            s1.push(i + 1);
                            s.push(graph[j][i]);
                            s1.push(0);
                            visit_1[j] = true;
                            visit_1[graph[j][i]] = true;
                            //printf("visit_1[%d]=%d\n",j,visit_1[j]);
                            return s;
                        }
                    }
                }
                else {
                    break;
                }
            }
            return s;
        }
        return s;
    }
    function check_Condition_cycle(s, s1, start, end)/*檢查是否有到達標準*/ {
        if (s.length - 1 == point_num - 1 - bad_vertex_num) {
            s = check_Hamilton_cycle(s, start, end);
            return s;
        }
        else {
            return s;
        }
    }
    function check_Condition_path(s, s1, start, end)/*檢查是否有到達標準*/ {
        if (s.length - 1 == point_num - 1 - bad_vertex_num) {
            if (start == start_point && end == s[s.length - 1]) {
                count++;
                return s;
            }
            return s;
        }
        else {
            return s;
        }
    }
    function check_Condition_cycle_korder(s, s1, point, order, start, end)/*檢查是否有到達標準*/ {
        if (s.length - 1 == point_num - 1 - bad_vertex_num) {
            if (s[order] == point) {
                s = check_Hamilton_cycle_korder(s, s1, start, end);
                return s;
            }
            else {
                return s;
            }
        }
        else {
            return s;
        }
    }
    function check_Condition_path_korder(s, s1, point, order, start, end)/*檢查是否有到達標準*/ {
        if (s.length - 1 == point_num - 1 - bad_vertex_num) {
            if (start == start_point && end == s[s.length - 1]) {
                if (s[order] == point) {
                    count++;
                    return s;
                }
                else {
                    return s;
                }
            }
            return s;
        }
        else {
            return s;
        }
    }
    function check_Hamilton_cycle(s, start, end)/*檢查是否為漢米爾頓迴圈*/ {
        temp = s[s.length - 1];
        for (var i = 0; i < Adjacent_num; i++) {
            if (graph[temp][i] == start_point) {
                if (start == start_point && end == graph[temp][i]) {
                    count++;
                    return s;
                }
                return s;
            }
        }
        return s;
    }
    function check_Hamilton_cycle_korder(s, s1, start, end)/*檢查是否為漢米爾頓迴圈*/ {
        temp = s[s.length - 1];
        for (var i = 0; i < Adjacent_num; i++) {
            if (graph[temp][i] == start_point) {
                if (start == start_point && end == graph[temp][i]) {
                    count++;
                    return s;
                }
                return s;
            }
        }
        return s;
    }
    function vertex_fault(graph, bad_vertex_num, bad_vertex) {
        for (var i = 0; i < bad_vertex_num; i++) {
            for (var j = 0; j < Adjacent_num; j++) {
                if (graph[bad_vertex][j] != -1)/*把壞的點所連接的點都變成-1*/ {
                    graph[bad_vertex][j] = -1;
                }
            }
        }
        var temp2 = 0;
        for (var i = 0; i < point_num; i++) {
            for (var j = 0; j < Adjacent_num; j++) {
                if (graph[i][j] == bad_vertex)/*拿掉graph中壞的那個點變成-1*/ {
                    graph[i][j] = -1;
                    if (graph[i][j + 1] != -1) {
                        temp2 = graph[i][j];
                        graph[i][j] = graph[i][j + 1];
                        graph[i][j + 1] = temp2;
                    }
                }
                else if (graph[i][j] == -1) {
                    graph[i][j] = -1;
                    if (graph[i][j + 1] != -1) {
                        temp2 = graph[i][j];
                        graph[i][j] = graph[i][j + 1];
                        graph[i][j + 1] = temp2;
                    }
                }
            }
        }
    }
    function edge_fault(graph, graph_edge, bad_edge_num, bad_edge) {
        var k = 0;
        var temp2;
        for (var i = 0; i < bad_edge_num; i++) {
            a = graph_edge[bad_edge][0];
            b = graph_edge[bad_edge][1];
            for (var j = 0; j < 3; j++) {
                if (graph[a][j] == b) {
                    graph[a][j] = -1;
                    if (graph[a][j + 1] != -1) {
                        temp2 = graph[a][j];
                        graph[a][j] = graph[a][j + 1];
                        graph[a][j + 1] = temp2;
                    }
                }
                else if (graph[a][j] == -1) {
                    graph[a][j] = -1;
                    if (graph[a][j + 1] != -1) {
                        temp2 = graph[a][j];
                        graph[a][j] = graph[a][j + 1];
                        graph[a][j + 1] = temp2;
                    }
                }
            }
            for (var j = 0; j < 3; j++) {
                if (graph[b][j] == a) {
                    graph[b][j] = -1;
                    if (graph[b][j + 1] != -1) {
                        temp2 = graph[b][j];
                        graph[b][j] = graph[b][j + 1];
                        graph[b][j + 1] = temp2;
                    }
                }
                else if (graph[b][j] == -1) {
                    graph[b][j] = -1;
                    if (graph[b][j + 1] != -1) {
                        temp2 = graph[b][j];
                        graph[b][j] = graph[b][j + 1];
                        graph[b][j + 1] = temp2;
                    }
                }
            }
        }
    }
    function Hamilton_cycle(graph, start, end) {
        for (start_point = start; start_point < point_num; start_point++) {
            s.push(start_point);
            s1.push(0);
            visit_1[start_point] = true;
            while (s.length > 0) {
                temp = s[s.length - 1];
                temp1 = s1[s1.length - 1];
                s.pop(s);
                s1.pop(s1);
                visit_1[temp] = false;
                if (count == 0) {
                    s = check_Adjacent_points(temp, temp1, graph, s, s1);
                    s = check_Condition_cycle(s, s1, start, end);
                }
                else if (count == 1) {
                    return true;
                }
            }
        }
        return false;
    }
    function Hamilton_path(graph, start, end) {
        for (start_point = start; start_point < point_num; start_point++) {
            s.push(start_point);
            s1.push(0);
            visit_1[start_point] = true;
            while (s.length > 0) {
                temp = s[s.length - 1];
                temp1 = s1[s1.length - 1];
                s.pop(s);
                s1.pop(s1);
                visit_1[temp] = false;
                if (count == 0) {
                    s = check_Adjacent_points(temp, temp1, graph, s, s1);
                    s = check_Condition_path(s, s1, start, end);
                }
                else if (count == 1) {
                    return true;
                }
            }
        }
        return false;
    }
    function korder_Hamilton_cycle(graph, point, order, start, end) {
        for (start_point = start; start_point < point_num; start_point++) {
            s.push(start_point);
            s1.push(0);
            visit_1[start_point] = true;
            while (s.length > 0) {
                temp = s[s.length - 1];
                temp1 = s1[s1.length - 1];
                s.pop(s);
                s1.pop(s1);
                visit_1[temp] = false;
                if (count == 0) {
                    s = check_Adjacent_points(temp, temp1, graph, s, s1);
                    s = check_Condition_cycle_korder(s, s1, point, order, start, end);
                }
                else if (count == 1) {
                    return true;
                }
            }
        }
        return false;
    }
    function korder_Hamilton_path(graph, point, order, start, end) {
        for (start_point = start; start_point < point_num; start_point++) {
            s.push(start_point);
            s1.push(0);
            visit_1[start_point] = true;
            while (s.length > 0) {
                temp = s[s.length - 1];
                temp1 = s1[s1.length - 1];
                s.pop(s);
                s1.pop(s1);
                visit_1[temp] = false;
                if (count == 0) {
                    s = check_Adjacent_points(temp, temp1, graph, s, s1);
                    s = check_Condition_path_korder(s, s1, point, order, start, end);
                }
                else if (count == 1) {
                    return true;
                }
            }
        }
        return false;
    }
    function clear_all_value() {
        start_point = 0;
        for (var i = 0; i < MAX_SIZE; i++) {
            bad_vertex = 0;
            bad_edge = 0;
        }
        bad_vertex_num = 0;
        bad_edge_num = 0;
        temp = 0;
        temp1 = 0;
        count = 0;
        a = 0;
        b = 0;
        start = 0;
        end = 0;
        point = 0;
        order = 0;
        graph = temp_graph;
        for (var i = 0; i < MAX_SIZE; i++) {
            visit_1[i] = false;
        }
        for (var i = 0; i < MAX_SIZE; i++) {
            s.pop(s);
            s1.pop(s1);
        }
    }
    function clear_search_point_value() {
        temp = 0;
        temp1 = 0;
        count = 0;
        for (var i = 0; i < MAX_SIZE; i++) {
            visit_1[i] = false;
        }
        for (var i = 0; i < MAX_SIZE; i++) {
            s.pop(s);
            s1.pop(s1);
        }
    }
}



/* 클릭한 포션에 따라 show/hide를 결정하는 함수 
    portion count 구분 
    1 → red portion
    2 → yellow portion
    3 → sky blue portion
    4 → blue portion
    5 → green portion
    6 → Deep green portion
    7 → purple portion
    8 → brown portion
    9 → white portion
    10 → black portion
    0 → reset
*/
function show_hide(portion_count){
    if(portion_count==1){
        $('#red_portion_pour').show();
        $('#red_portion_shining').show();

        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==2){
        $('#yellow_portion_pour').show();
        $('#yellow_portion_shining').show();

        $('#red_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==3){
        $('#skyblue_portion_pour').show();
        $('#skyblue_portion_shining').show();

        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();
        
    }else if(portion_count==4){
        $('#blue_portion_pour').show();
        $('#blue_portion_shining').show();

        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==5){
        $('#green_portion_pour').show();
        $('#green_portion_shining').show();

        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==6){
        $('#deepgreen_portion_pour').show();
        $('#deepgreen_portion_shining').show();

        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==7){
        $('#purple_portion_pour').show();
        $('#purple_portion_shining').show();

        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==8){
        $('#brown_portion_pour').show();
        $('#brown_portion_shining').show();

        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==9){
        $('#white_portion_pour').show();
        $('#white_portion_shining').show();

        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==10){
        $('#black_portion_pour').show();
        $('#black_portion_shining').show();

        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();

    }else if(portion_count==0){
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();


        /* 선택된 포션을 보여주는 shining 이미지 삭제 */
        $('#red_portion_shining').hide();
        $('#yellow_portion_shining').hide();
        $('#skyblue_portion_shining').hide();
        $('#blue_portion_shining').hide();
        $('#green_portion_shining').hide();
        $('#deepgreen_portion_shining').hide();
        $('#purple_portion_shining').hide();
        $('#brown_portion_shining').hide();
        $('#white_portion_shining').hide();
        $('#black_portion_shining').hide();
    }
}
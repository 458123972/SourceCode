/*
 * @Author: your name
 * @Date: 2021-12-05 11:37:40
 * @LastEditTime: 2021-12-05 15:00:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\HTML案例（九）\HTML\js\index.js
 */
$(function () {
    $('.container,.ul_box').mouseover(function () {
        $('.ul_box').css({
            'display':'block'
        });
    });
    $('.container a').mouseover(function(e){
        $(this).siblings('a').removeClass('container_a');
        $(this).addClass('container_a');
        $('.ul_box ul').css('display','none');
        var a = $('.container a').index(this);
        $('.ul_box ul')[a].style.display = 'block'
    })
    $('.box').mouseleave(function(){
        $('.ul_box').css({
            'display':'none'
        });
        $('.container a').removeClass('container_a')
    })
})
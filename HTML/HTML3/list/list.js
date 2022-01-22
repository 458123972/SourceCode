/*
 * @Author: your name
 * @Date: 2021-06-13 11:06:59
 * @LastEditTime: 2021-06-13 13:11:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML案列（三）\list\list.js
 */
var image = ["../image/1.jpg","../image/2.jpg","../image/3.jpg","../image/4.jpg"];
var img =document.getElementsByClassName('contentbox')[0].getElementsByTagName('img')[0];
var li = document.getElementById('libox').getElementsByTagName('li')
var pict = 0

function chang(value) {
    // 点击切换图片 顶部导航栏变色
    pict = value
    for (let index = 0; index < li.length; index++) {
        if (value === index) {
        li[index].className='show'
        img.src = image[index]
        } else {
        li[index].className=''
        }
    }
}
// 监听鼠标事件
for (let index = 0; index < li.length; index++) {
    // 监听鼠标移动到那个li上
    li[index].onmouseover = function () {
        img.src = image[index]
    }
    // 监听鼠标移出到那个li上
    li[index].onmouseout = function () {
        img.src = image[pict]
    }
}
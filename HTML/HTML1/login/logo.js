/*
 * @Author: your name
 * @Date: 2021-06-05 17:48:34
 * @LastEditTime: 2021-06-05 23:18:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML\login\logo.js
 */

function user_change(){
    var input = document.getElementById("username").value.length
    var span = document.getElementById("user_point")
    if(input <8){
       span.style.display= "inline-block"
    }else {
        span.style.display= "none"
    }

}

function password_change(){
    var password = document.getElementById("password").value.length
    var spans = document.getElementById("password_point")
    if(password <8){
        spans.style.display= "inline-block"
     }else {
        spans.style.display= "none"
     }
}
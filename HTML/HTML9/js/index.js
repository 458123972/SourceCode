/*
 * @Author: your name
 * @Date: 2021-12-08 21:35:44
 * @LastEditTime: 2021-12-08 22:59:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\HTML案例（十）\HTML\js\index.js
 */

// 图片路径
const images = [
    '../image/digital1.jpeg', '../image/digital2.jpeg', '../image/digital3.jpeg', '../image/digital4.jpeg', '../image/digital5.jpeg',
    '../image/dress1.jpg', '../image/dress2.jpeg', '../image/dress3.jpeg', '../image/dress4.jpeg', '../image/dress5.jpeg',
    '../image/food1.jpg', '../image/food2.jpeg', '../image/food3.jpeg', '../image/food4.jpeg', '../image/food5.jpeg',
    '../image/home appliances1.jpeg', '../image/home appliances2.jpeg', '../image/home appliances3.jpeg', '../image/home appliances4.jpeg', '../image/home appliances5.jpeg',
    '../image/toy1.jpeg', '../image/toy2.jpeg', '../image/toy3.jpeg', '../image/toy4.jpeg', '../image/toy5.jpeg',
]

var commodity = document.getElementsByClassName('commodity');
endow(images.slice(0, 25), 0)
endow(images.slice(15, 20), 1)
endow(images.slice(0, 5), 2)
endow(images.slice(5, 10), 3)
endow(images.slice(10, 15), 4)
endow(images.slice(20, 25), 5)
chicken()


function endow(a, b) {
    var all = ''
    for (let index = 0; index < a.length; index++) {
        all += '<img src="' + a[index] + '"/>';
    }
    commodity[b].querySelector('div').innerHTML = all
}

function chicken() {
    var li = document.getElementsByClassName('list-box')[0].getElementsByTagName('li')
    for (let index = 0; index < li.length; index++) {
        li[index].onclick = function () {
            for (let accord = 0; accord < li.length; accord++) {
                if (index === accord) {
                    li[accord].className = 'all-goods'
                } else {
                    li[accord].className = ''
                }
            }
        }
    }
}
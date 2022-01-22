/*
 * @Author: your name
 * @Date: 2021-12-10 22:26:38
 * @LastEditTime: 2021-12-11 00:34:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\HTML案例（十一）\HTML\js\index.js
 */
var monenIndex, salesIndex, brandIndex;
saveLast()

function saveLast() {
    var moneysort = document.getElementById("money");
    var salessort = document.getElementById("sales");
    var brandsort = document.getElementById("brand");

    moneysort.onclick = function () {
        monenIndex = moneysort.selectedIndex;
        if (monenIndex !== 0) {
            mnsort(monenIndex)
        }
    }

    salessort.onclick = function () {
        salesIndex = salessort.selectedIndex;
        if (salesIndex !== 0) {
            slsort(salesIndex)
        }
    }

    brandsort.onclick = function () {
        brandIndex = brandsort.selectedIndex;
        switch (brandIndex) {
            case 1:
                bdsort('全部')
                break;
            case 2:
                bdsort('小米')
                break;
            case 3:
                bdsort('华为')
                break;
            case 4:
                bdsort('一加')
                break;
            case 5:
                bdsort('Apple')
                break;
            case 6:
                bdsort('vivo')
                break;
            case 7:
                bdsort('oppo')
                break;
            default:
                break;
        }
    }
}

function mnsort(a) {
    var nowsort = [];
    var money = document.getElementsByClassName('money-box')
    var li = document.getElementsByClassName('ul-box')[0].querySelector('ul').querySelectorAll('li')
    var m = -1
    if (a === 1) {
        for (let frist = 0; frist < money.length; frist++) {
            var now = parseInt(money[frist].querySelector('i').innerText)
            var html = li[frist].innerHTML
            if (li[frist].style.display === '') {
                nowsort.push({
                    html,
                    now
                })
            }
        }
        nowsort.sort(function (a, b) {
            return b.now - a.now
        })
        for (let index = 0; index < li.length; index++) {
            if (li[index].style.display === '') {
                m = m + 1
                li[index].innerHTML = nowsort[m].html
            }
        }
    } else if (a === 2) {
        for (let frist = 0; frist < money.length; frist++) {
            var now = parseInt(money[frist].querySelector('i').innerText)
            var html = li[frist].innerHTML
            if (li[frist].style.display === '') {
                nowsort.push({
                    html,
                    now
                })
            }
        }
        nowsort.sort(function (a, b) {
            return a.now - b.now
        })
        for (let index = 0; index < li.length; index++) {
            if (li[index].style.display === '') {
                m = m + 1
                li[index].innerHTML = nowsort[m].html
            }
        }
    }

}

function slsort(a) {
    var nowsort = [];
    var money = document.getElementsByClassName('money-box')
    var li = document.getElementsByClassName('ul-box')[0].querySelector('ul').querySelectorAll('li')
    var m = -1
    if (a === 1) {
        for (let frist = 0; frist < money.length; frist++) {
            var now = parseInt(money[frist].querySelector('span').innerText.slice(3, money[frist].querySelector('span').innerText.length))
            var html = li[frist].innerHTML
            if (li[frist].style.display === '') {
                nowsort.push({
                    html,
                    now
                })
            }
        }
        nowsort.sort(function (a, b) {
            return b.now - a.now
        })
        for (let index = 0; index < li.length; index++) {
            if (li[index].style.display === '') {
                m = m + 1
                li[index].innerHTML = nowsort[m].html
            }
        }
    } else if (a === 2) {
        for (let frist = 0; frist < money.length; frist++) {
            var now = parseInt(money[frist].querySelector('span').innerText.slice(3, money[frist].querySelector('span').innerText.length))

            var html = li[frist].innerHTML
            if (li[frist].style.display === '') {
                nowsort.push({
                    html,
                    now
                })
            }
        }
        nowsort.sort(function (a, b) {
            return a.now - b.now
        })
        for (let index = 0; index < li.length; index++) {
            if (li[index].style.display === '') {
                m = m + 1
                li[index].innerHTML = nowsort[m].html
            }
        }
    }

}

function bdsort(a) {
    var commodity = document.getElementsByClassName('commodity-box')
    var li = document.getElementsByClassName('ul-box')[0].querySelector('ul').querySelectorAll('li')
    for (let index = 0; index < commodity.length; index++) {
        var brand = commodity[index].querySelector('span').innerText
        li[index].style = {
            display: 'block'
        }
        if (a === '全部') {
            li[index].style = {
                display: 'block'
            }
        } else if (brand !== a) {
            li[index].style.display = 'none'
        }
    }
}
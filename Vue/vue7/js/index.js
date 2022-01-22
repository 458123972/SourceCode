/*
 * @Author: your name
 * @Date: 2021-12-22 16:06:38
 * @LastEditTime: 2021-12-22 17:01:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\【HTML+CSS+VUE】商品轮播图\vue\js\index.js
 */
Vue.config.productionTip = false //阻止vue在启动时生成生产提示

const app = new Vue({
    el: '#app',
    data: {
        // 图片地址
        src: ['./images/20433fde03fa8ded.jpg', './images/80c9f62ed025bc69.jpg',
            './images/e2a31a6b80830bc7.jpg'
        ],
        // 商品介绍
        introduce: {
            title: '圣诞节大礼包',
            text: '夜幕有星星显得迷人，大海有涛声显得渊博，冬季有雪花倍感浪漫，朋友中有你深感幸福！把最美好的祝福送给你，圣诞快乐！'
        },
        radioindex: 0,
        sure: true
    },
    methods: {
        circulate() {
            const span = document.getElementsByClassName('select-box')[0].querySelectorAll('span')
            const img = document.getElementsByClassName('img-box')[0]
            this.radioindex = this.radioindex + 1
            for (let index = 0; index < span.length; index++) {
                span[index].style.backgroundColor = 'rgb(243,243,243)'
            }
            if (this.radioindex >= span.length) {
                this.sure = false
                span[0].style.backgroundColor = 'rgb(243,71,71)'
                img.style.marginLeft = 0
                this.radioindex = 0
            } else {
                this.sure = true
                span[this.radioindex].style.backgroundColor = 'rgb(243,71,71)'
                img.style.marginLeft = -(this.radioindex * 100) + '%'
            }
        },
        go(){
            setInterval(()=>{
                this.circulate()
            },3000)
        },
        select(i){
            this.radioindex = i -1
            this.circulate()
        },
        money(even){
            const mn = document.getElementsByClassName('buy')[0].querySelector('i')
            mn.classList.add('buymoney')
            even.currentTarget.innerText = '已购买'
        }
    },
    mounted() {
        this.go()
    },
})
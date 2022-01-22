/*
 * @Author: your name
 * @Date: 2022-01-04 17:54:58
 * @LastEditTime: 2022-01-04 20:03:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\HTML+CSS+VUE 动态图片切换\vue\js\index.js
 */
Vue.config.productionTip = false

new Vue({
    el: '#app',
    data: {
        // 图片路径
        src: ['./images/1.jpeg', './images/2.jpg', './images/3.jpeg', './images/4.jpg',
            './images/5.jpeg', './images/6.jpg', './images/7.jpeg', './images/8.jpg',
            './images/9.jpeg', './images/10.jpg', './images/11.jpeg', './images/12.jpg', './images/13.jpeg',
            './images/14.jpeg', './images/15.jpeg', './images/16.jpeg'
        ],
        liheight: 0,
        bigimg: ''
    },
    methods: {
        onScroll(e) {
            let delta = e.deltaY
            let scroll = this.$refs.scroll
            let compen = scroll.offsetHeight - this.$refs.scrollbox.offsetHeight
            if (delta > 0) {
                if (this.liheight + 1 < this.src.length - 1) {
                    this.liheight = this.liheight + 1
                    scroll.style.transform = 'translateY(-' + (compen / this.src.length - 1) * this.liheight + 'px)'
                } else {
                    scroll.style.transform = 'translateY(-' + compen + 'px)'
                }
            }

            if (delta < 0) {
                if (this.liheight > 0) {
                    this.liheight = this.liheight - 1
                    scroll.style.transform = 'translateY(-' + (compen / this.src.length - 1) * this.liheight + 'px)'
                }
            }
        },
        imgshow(a) {
            let scrollli = this.$refs.scroll.querySelectorAll('li')
            scrollli.forEach(element => {
                element.classList.remove('lishow')
            });
            scrollli[a].classList.add('lishow')
            this.bigimg = this.src[a]
            this.bigshow(a)
        },
        bigshow(a) {
            let bigimg = this.$refs.bigimg
            bigimg.style.transform = 'translateX(-' + a * 820 + 'px)'
            let pictures = this.$refs.pictures
            pictures.style.opacity = 0
            for (let index = 0; index < 100000; index++) {
                setTimeout(() => {
                    pictures.style.opacity = index * 0.00001
                }, 1000)
            }
            pictures.innerText = 'pictures' + (a + 1)
        }
    },
    mounted() {
        this.imgshow(0)
    },
})
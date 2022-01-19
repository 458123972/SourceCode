/*
 * @Author: your name
 * @Date: 2022-01-17 15:01:08
 * @LastEditTime: 2022-01-17 16:05:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\vue案例：图片轮播图\vue\js\index.js
 */
Vue.config.productionTip = false

new Vue({
    el: '#app',
    data: {
        src: ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg',
            './images/5.jpg', './images/6.jpg', './images/7.jpg', './images/8.jpg'
        ],
        translateX: 0,
        tsion: true
    },
    methods: {
        last() {
            this.translateX--
            this.tsion = true
            if (this.translateX < 0) {
                setTimeout(() => {
                    this.tsion = false
                    this.translateX = this.src.length - 1
                }, 500)
            }
        },
        next() {
            this.translateX++
            this.tsion = true
            if (this.translateX > this.src.length - 1) {
                setTimeout(() => {
                    this.tsion = false
                    this.translateX = 0
                }, 500)
            }
        },
        swiper(i) {
            this.translateX = i
        }
    },
    mounted() {
        setInterval(()=>{
            this.next()
        },3000)
    },
    computed: {
        translate() {
            return -(this.translateX + 1) * 650
        }
    },
    watch: {
        translateX: {
            handler(val) {
                let a = this.$refs.swiper.querySelectorAll('span')
                a.forEach(element => {
                    element.style.width = '12px'
                });
                if (this.translateX < 0) {
                    val = this.src.length - 1
                }
                if (this.translateX > this.src.length - 1) {
                    val = 0
                }
                a[val].style.width = '100px'
            }
        }
    }
})
/*
 * @Author: your name
 * @Date: 2022-01-21 16:43:46
 * @LastEditTime: 2022-01-21 17:09:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\vue案例：消消乐\vue\js\index.js
 */
Vue.config.productionTip = false

new Vue({
    el: '#app',
    data: {
        src: [{
                image: './images/1.jpeg',
                opacity: 1,
                show: true
            },
            {
                image: './images/2.jpg',
                opacity: 1,
                show: true

            }, {
                image: './images/3.jpeg',
                opacity: 1,
                show: true

            }, {
                image: './images/4.jpg',
                opacity: 1,
                show: true

            }, {
                image: './images/5.jpeg',
                opacity: 1,
                show: true

            }, {
                image: './images/6.jpg',
                opacity: 1,
                show: true

            }, {
                image: './images/7.jpeg',
                opacity: 1,
                show: true

            }, {
                image: './images/8.jpg',
                opacity: 1,
                show: true

            }, {
                image: './images/1.jpeg',
                opacity: 1,
                show: true

            },
            {
                image: './images/2.jpg',
                opacity: 1,
                show: true

            }, {
                image: './images/3.jpeg',
                opacity: 1,
                show: true

            }, {
                image: './images/4.jpg',
                opacity: 1,
                show: true

            }, {
                image: './images/5.jpeg',
                opacity: 1,
                show: true

            }, {
                image: './images/6.jpg',
                opacity: 1,
                show: true

            }, {
                image: './images/7.jpeg',
                opacity: 1,
                show: true

            }, {
                image: './images/8.jpg',
                opacity: 1,
                show: true

            }

        ],
        compare: []
    },
    methods: {
        selective(i) {
            if (this.compare.indexOf(i) !== -1) return
            this.src[i].opacity = 0
            this.compare.push(i)
            if (this.compare.length >= 2) {
                setTimeout(() => {
                    this.alter()
                }, 300)
            }
        },
        alter() {
            if (this.src[this.compare[0]].image === this.src[this.compare[1]].image) {
                this.compare.forEach(element => {
                    this.src[element].show = false
                });
            } else {
                this.compare.forEach(element => {
                    this.src[element].opacity =1
                });
            }
            this.compare = []
        },
        sort() {
            this.src = this.src.sort(()=>{
                return .5 - Math.random()
            })
        }
    },
    mounted() {
        this.sort()
    },
    watch: {
        src:{
            handler(){
                for (let index = 0; index < this.src.length; index++) {
                    if (this.src[index].show) {
                        return
                    }
                }
                setTimeout(()=>{
                    if (confirm('游戏结束了，要再来一局吗？')) {
                        this.src.forEach(element => {
                            element.opacity = 1
                            element.show = true
                        });
                        this.sort()
                    }
                },300)
            },
            deep:true,
            immediate:true
        }
    }
})
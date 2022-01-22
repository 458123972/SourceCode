/*
 * @Author: your name
 * @Date: 2022-01-02 15:37:53
 * @LastEditTime: 2022-01-02 16:29:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\HTML+CSS+VUE 时钟特效\vue\js\index.js
 */
Vue.config.productionTip = false //阻止vue在启动时生成生产提示

new Vue({
    el: '#app',
    data: {
        noatime: '',
        title: 'The time now is',
        seconds2: true,
        seconds1: true,
        minutes2: true,
        minutes1: true,
        hours2: true,
        hours1: true,
    },
    methods: {
        acquisitiontime() {
            const date = new Date()
            let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
            let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
            let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()

            return hours + '' + minutes + '' + seconds
        },
        statement(){
            let seconds1 = this.$refs.seconds1.querySelectorAll('span')
            let seconds2 = this.$refs.seconds2.querySelectorAll('span')
            let minutes1 = this.$refs.minutes1.querySelectorAll('span')
            let minutes2 = this.$refs.minutes2.querySelectorAll('span')
            let hours1 = this.$refs.hours1.querySelectorAll('span')
            let hours2 = this.$refs.hours2.querySelectorAll('span')

            return {
                seconds1,
                seconds2,
                minutes1,
                minutes2,
                hours1,
                hours2
            }
        },
        circulate(){
            this.noatime = this.acquisitiontime().split('')
            let a =this.statement()
            if (this.noatime[0]!==a.hours1[0].innerText&& this.noatime[0]!==a.hours1[1].innerText) {
                this.repeat(a.hours1,this.hours1,0)
                this.hours1 = !this.hours1
            }
            if (this.noatime[1]!==a.hours2[0].innerText&& this.noatime[1]!==a.hours2[1].innerText) {
                this.repeat(a.hours2,this.hours2,1)
                this.hours2 = !this.hours2
            }
            if (this.noatime[2]!==a.minutes1[0].innerText&& this.noatime[2]!==a.minutes1[1].innerText) {
                this.repeat(a.minutes1,this.minutes1,2)
                this.minutes1 = !this.minutes1
            }
            if (this.noatime[3]!==a.minutes2[0].innerText&& this.noatime[3]!==a.minutes2[1].innerText) {
                this.repeat(a.minutes2,this.minutes2,3)
                this.minutes2 = !this.minutes2
            }
            if (this.noatime[4]!==a.seconds1[0].innerText&& this.noatime[4]!==a.seconds1[1].innerText) {
                this.repeat(a.seconds1,this.seconds1,4)
                this.seconds1 = !this.seconds1
            }
            if (this.noatime[5]!==a.seconds2[0].innerText&& this.noatime[5]!==a.seconds2[1].innerText) {
                this.repeat(a.seconds2,this.seconds2,5)
                this.seconds2 = !this.seconds2
            }
        },
        repeat(a,c,d){
            a.forEach(element => {
                element.classList.remove('spantop')
            });
            let b = c?[0,1]:[1,0]
            a[b[0]].innerText = this.noatime[d]
            a[b[1]].classList.add('spantop')
        }
    },
    mounted() {
        setInterval(()=>{
            this.circulate()
        },1000)
    },

})
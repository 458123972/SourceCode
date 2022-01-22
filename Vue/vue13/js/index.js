/*
 * @Author: your name
 * @Date: 2022-01-06 16:24:50
 * @LastEditTime: 2022-01-19 21:45:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulider\vue\vue\vue11\js\index.js
 */
Vue.config.productionTip = false

new Vue({
    el: '#app',
    data: {
        Commodity: [{
            name: '相机',
            text: '一亿像素，画面更清晰',
            src: './images/camera.jpeg',
            // 数量
            quantity: 1,
            // 单价
            money: 99.10,
            // 小计
            subtotal: 0,
            decide: false
        }, {
            name: '毛绒衬衫',
            text: '最新推出，八折优惠',
            src: './images/clothes1.jpeg',
            quantity: 1,
            money: 128.88,
            subtotal: 0,
            decide: false
        }, {
            name: '保暖大衣',
            text: '冬季的必备物品',
            src: './images/clothes2.jpeg',
            quantity: 1,
            money: 246.9,
            subtotal: 0,
            decide: false
        }, {
            name: 'vivo X70 Pro',
            text: '最新推出的vivo手机',
            src: './images/mobile.jpg',
            quantity: 1,
            money: 3999,
            subtotal: 0,
            decide: false
        }, {
            name: '电动牙刷',
            text: '一次充电，超长续航',
            src: './images/toothbrush.jpg',
            quantity: 1,
            money: 399,
            subtotal: 0,
            decide: false
        }, {
            name: '儿童玩具一',
            text: '一个普普通通的玩具小船',
            src: './images/toy1.jpeg',
            quantity: 1,
            money: 60.99,
            subtotal: 0,
            decide: false
        }, {
            name: '儿童玩具二',
            text: '可爱的毛绒玩具',
            src: './images/toy2.jpeg',
            quantity: 1,
            money: 58,
            subtotal: 0,
            decide: false
        }, {
            name: '儿童玩具三',
            text: '趣味玩具',
            src: './images/toy3.jpeg',
            quantity: 1,
            money: 89,
            subtotal: 0,
            decide: false
        }],
        del: false,
        all: false,
        fixed: false
    },
    methods: {
        last(i) {
            this.del = !this.del
        },
        add(i) {
            if (this.Commodity[i].quantity >= 50) return
            this.Commodity[i].quantity++
        },
        minus(i) {
            if (this.Commodity[i].quantity <= 1) return
            this.Commodity[i].quantity--
        },
        lose(i) {
            if (this.Commodity[i].quantity > 50 || this.Commodity[i].quantity < 0 || this.Commodity[i].quantity === '') {
                alert('数量不正确')
                this.Commodity[i].quantity = 1
            }
        },
        deleteLi(i) {
            console.log(i)
            this.Commodity.splice(i, 1)
            this.decideCheck('')
        },
        allCheck() {
            this.all = !this.all
            this.Commodity.forEach(p => {
                p.decide = this.all
            })
        },
        decideCheck(i) {
            console.log(i)
            if (i !== '') {
                this.Commodity[i].decide = !this.Commodity[i].decide
            }
            for (let index = 0; index < this.Commodity.length; index++) {
                if (this.Commodity[index].decide === false) {
                    this.all = false
                    return
                }
            }
            this.all = true
        },
        allDel() {
            this.Commodity =
                this.Commodity.filter(item => {
                    // console.log(item)
                    return item.decide === false
                });
        },
        scrollToTop() {
            // 获取视窗高度
            let domHight = document.body.offsetHeight;
            // dom滚动位置
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            //   获取窗口高度
            let height = document.documentElement.clientHeight + 100
            // 元素的高度
            // let summarize = this.$refs.summarize.scrollTop
            if (domHight <= 600) {
                return
            }
            if (domHight < scrollTop + height) {
                this.fixed = false
            } else {
                this.fixed = true
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop);
    },
    destroyed() {
        // 跳页的时候销毁
        window.removeEventListener('scroll', '')
    },
    computed: {
        summarize() {
            return this.Commodity.length
        },
        settle() {
            let a = 0
            this.Commodity.forEach(item => {
                if (item.decide === true) {
                    a++
                }
            })
            return a
        },
        allMoney() {
            let money = 0
            this.Commodity.forEach(item => {
                if (item.decide === true) {
                    money = money + item.subtotal
                }
            })
            return money
        }
    },
    watch: {
        Commodity: {
            handler(newvalue, oldvalue) {
                // console.log(newvalue)
                if (newvalue.length > 0) {
                    for (let index = 0; index < newvalue.length; index++) {
                        newvalue[index].subtotal = newvalue[index].quantity * newvalue[index].money
                    }
                }
            },
            deep: true,
            immediate: true
        }
    }
})
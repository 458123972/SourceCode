/*
 * @Author: your name
 * @Date: 2021-12-16 20:33:59
 * @LastEditTime: 2021-12-17 01:04:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\【HTML+CSS+VUE】：简易的便签\vue\js\index.js
 */
Vue.config.productionTip = false //阻止vue在启动时生成生产提示

const app = new Vue({
    el: '#app',
    data: {
        // 便签内容的所有内容
        memo: [{
                title: '经典优美的句子',
                text: '童年像糖果一样甜美；童年像百合一样纯洁；童年像花园一样美丽。',
                presenttime: '2021-12-13 00:55:28'
            },
            {
                title: '经典优美的句子',
                text: '着秋虫的唧令声，蝈蝈也偶然加上几声伴奏，吹地翁像断断续续吹着寒茄。柳树在路边静静地垂着枝条，荫影罩着蜿蜒的野草丛丛的小路。',
                presenttime: '2021-12-13 00:55:28'
            },
            {
                title: '经典优美的句子',
                text: '夜雾袭来，仲夏的夜晚倒有点凉意，朦胧的月光下，看不到几颗星星。',
                presenttime: '2021-12-13 00:55:28'
            },
            {
                title: '经典优美的句子',
                text: '冬天的白昼似乎那么短暂，几乎一眨眼的功夫就已经夜幕降临，城市的灯红酒绿早已掩盖夜的黑，那依稀可见的月牙透过云层射出微弱的光芒，风使劲的吹着树干，摇晃着枝条，那坚强的树叶奋力的抓着哺育他的母体，迟迟不愿松手。',
                presenttime: '2021-12-13 00:55:28'
            },
            {
                title: '经典优美的句子',
                text: '夏夜，热气笼罩着大地，皓月高悬在天空，稀疏的星星快活地眨着眼睛。',
                presenttime: '2021-12-13 00:55:28'
            },
            {
                title: '经典优美的句子',
                text: '回忆是一壶茶，一壶用情感的弗水冲切的溶茶：翻滚起伏，然后冷却沉静，像起起落落欣喜狂悲的人生终归于“；万物看开，得矢随缘”的平淡恰栝美。',
                presenttime: '2021-12-13 00:55:28'
            },
            {
                title: '经典优美的句子',
                text: '西风自然是不会来的。临睡时，我们在堂中点上两三枝洋蜡。怯怯的焰子让大屋顶压着，喘不出气来。我们隔着烛光彼此相看，也像蒙着一层烟雾。外面是连天漫地一片黑，海似的。只有远近几声犬吠，教我们知道还在人世间里。',
                presenttime: '2021-12-13 00:55:28'
            },
            {
                title: '经典优美的句子',
                text: '夜晚，是一个活泼可爱的小姑娘。她拿起画笔，将天空涂上颜色，看呀！深蓝的天空，星星在玩耍嬉戏。咦，太阳呢？哦，原来夜晚姑娘把太阳送回家了。没有太阳，我们怎么看见呢？别担心，夜晚请来了月亮为我们照明。在淡淡的、柔和的月光下，是多么舒适呀！',
                presenttime: '2021-12-13 00:55:28'
            },
            {
                title: '经典优美的句子',
                text: '夏天真美好，“呱，呱呱呱！”是谁再喊。哦，原来是一只小青蛙再蹦蹦跳跳，好像很喜欢这美好时光。雨沥沥地下着，为夏季也织上了价值名贵的丝绵。',
                presenttime: '2021-12-13 00:55:28'
            },
        ],
        // 便签背景颜色板
        notebackground: ['#fb83a7', '#d3cce3', '#c6edff', '#ff426c', '#39dbad', '#ba8fba',
            '#6d94ca', '#8c443c', '#a8c1ef', '#0ca38b'
        ],
        // 被筛选出来当背景的颜色
        background: [],
        // 要显示的便签内容
        memonext: [],
        // 输入框的显隐属性
        modify: false,
        // 筛选框的内容
        inputvalue: '',
        // 监听是否要修改
        updated: {
            affirm: false,
            index: ''
        }
    },
    methods: {
        acquisitiontime() {
            const date = new Date()
            let year = date.getFullYear();
            let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
            let day = date.getDate() + 1 < 10 ? "0" + date.getDate() : date.getDate()
            let hours = date.getHours() + 1 < 10 ? "0" + date.getHours() : date.getHours()
            let minutes = date.getMinutes() + 1 < 10 ? "0" + date.getMinutes() : date.getMinutes()
            let seconds = date.getSeconds() + 1 < 10 ? "0" + date.getSeconds() : date.getSeconds()
            return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
        },
        getinput() {
            if (this.inputvalue === '') return this.memonext = this.memo
            let sift = this.memo.filter((p) => {
                return p.title.indexOf(this.inputvalue) !== -1 || p.text.indexOf(this.inputvalue) !== -1
            });
            return this.memonext = sift
        },
        addbackground() {
            for (let index = 0; index < this.memo.length; index++) {
                let notebackground = this.notebackground[Math.ceil(Math.random() * this.notebackground.length)]
                this.background = this.background.concat(notebackground)
            }
        },
        addnotes() {
            this.modify = true
        },
        cancel() {
            this.modify = false
            this.updated.affirm = false
            this.updated.index = ''
            this.$refs.getValue.value = ''
            this.$refs.gettextarea.value = ''
        },
        control() {
            if (this.updated.affirm) {
                this.modifycontent(this.updated.index)
            } else {
                this.add()
            }
        },
        add() {
            if (this.$refs.getValue.value == '' && this.$refs.gettextarea.value == '') return alert('还没输入内容')
            let addnotes = {
                title: this.$refs.getValue.value,
                text: this.$refs.gettextarea.value,
                presenttime: this.acquisitiontime()
            }
            this.memo.unshift(addnotes)
            this.addbackground()
            alert('添加成功')
            this.$refs.getValue.value = ''
            this.$refs.gettextarea.value = ''
            this.cancel()
            this.getinput()
        },
        revise(a) {
            this.updated.affirm = true
            this.updated.index = a
            this.modify = true
            this.$refs.getValue.value = this.memo[a].title
            this.$refs.gettextarea.value = this.memo[a].text
        },
        modifycontent(a) {
            this.memo[a].title = this.$refs.getValue.value
            this.memo[a].text = this.$refs.gettextarea.value
            this.memo[a].presenttime = this.acquisitiontime()
            alert('修改成功')
            this.$refs.getValue.value = ''
            this.$refs.gettextarea.value = ''
            this.cancel()
        },
        out(a) {
            if (confirm('确定要删除吗？')) {
                for (let index = 0; index < this.memo.length; index++) {
                    let title = this.memonext[a].title
                    let text = this.memonext[a].text
                    let presenttime = this.memonext[a].presenttime
                    if (title === this.memo[index].title && text === this.memo[index].text && presenttime === this.memo[index].presenttime) {
                        this.memo.splice(index, 1)
                        return
                    }

                }
            }
        }
    },
    mounted() {
        this.addbackground()
        this.getinput()
    },
})
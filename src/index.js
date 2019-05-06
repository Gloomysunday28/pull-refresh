import './index.css'

class PullRefresh {
  constructor(opt) {
    const { el, pullDown, initLoad } = opt

    if (typeof el === 'string') {
      this.el = document.getElementById(el)
    } else if (Object.prototype.toString.call(el) === "[object HTMLDivElement]") {
      this.el = el
    }
    this.initY = 100 // 下拉加载loading的高度
    this.pullDown = pullDown // 下拉加载执行函数

    this.initPullContain() // 初始化下拉刷新容器
    if (initLoad) this.initLoad() // 是否在初始化的时候加载
  }
  // 初始化容器
  initPullContain() {
    this.container = document.createElement('div')
    this.container.classList.add('m-pull__refresh')
    
    this.container.style.transform = `translate3d(0, -${this.initY}px, 0)`
    this.el.classList.add('m-pull__contain')
    this.initPullIcon()
  }
  /**
   *  @description 创建下拉加载图标,并且将容器的所有子节点移到新添加的容器中, 这是为了适应应用代码里容易的高度设置
   */
  initPullIcon() {    
    this.pullDownContain = document.createElement('div')
    this.pullDownContain.classList.add('c-pull__icon')
    this.pullDownContain.style.height = `${this.initY}px`

    this.pullIcon = document.createElement('div')
    this.pullIcon .classList.add('pull-down__icon')
    this.pullDownContain.appendChild(this.pullIcon)

    this.container.prepend(this.pullDownContain) // 添加下拉Loading

    const fragement = document.createDocumentFragment() // 创建文档碎片, 防止过多操作DOM带来性能问题

    const map = Array.from(this.el.childNodes) // 所有节点包括文本节点
    map.map(el => {
      fragement.appendChild(el) // 添加所有子节点
    })

    this.container.appendChild(fragement)
    this.el.appendChild(this.container) // 将新的容器放入到初始化设置的容器中

    this.initPullEvent()
  }
  initPullEvent() { // 初始化下拉loading事件
    this.el.addEventListener('touchstart', e => {
      const startY = e.touches[0].pageY
      this.el.addEventListener('touchmove', e => {
        const scrollTop = window.scrollY // 判断是否滑到顶部
        const scrollY = e.touches[0].pageY
        if (scrollTop <= 0) {
          this.container.style.transform = `translate3d(0, -${this.initY - scrollY}px, 0)` // 根据滑动的距离来划出loading下拉距离
          if (this.initY - scrollY + startY < 0) { // 如果超过了则设置为0
            this.container.style.transform = `translate3d(0, 0, 0)`
          }
        }
      }, {
        passive: true // 提前通知浏览器执行默认事件
      })
    }, {
      passive: false
    })

    this.el.addEventListener('touchend', e => {
      this.eventPullDown()
    })
  }
  finishLoad() { // 完成加载
    this.container.style.transform = `translate3d(0, -${this.initY}px, 0)`
  }
  initLoad() { // 初始化加载
    this.container.style.transform = `translate3d(0, 0, 0)`
    this.eventPullDown()
  }
  eventPullDown() {
    if (typeof this.pullDown === 'function') {
      this.pullDown()
    } else {
      setTimeout(_ => {
        this.container.style.transform = `translate3d(0, -${this.initY}px, 0)`
      }, 500)
    }
  }
}

export default PullRefresh
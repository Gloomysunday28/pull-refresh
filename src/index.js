import './index.css'

class PullRefresh {
  constructor(opt) {
    const { el, pullDown, initLoad } = opt
    if (typeof el === 'string') {
      this.el = document.getElementById(el)
    } else if (Object.prototype.toString.call(el) === "[object HTMLDivElement]") {
      this.el = el
    }
    this.initY = 100
    this.pullDown = pullDown
    this.initPullContain() // 初始化下拉刷新容器
    if (initLoad) this.initLoad()
  }
  initPullContain() {
    this.el.style.position = `absolute`
    this.el.style.left = `0`
    this.el.style.top = `0`
    this.el.style.right = `0`
    this.el.style.margin = `auto`
    this.el.style.overflowY = 'auto'
    this.el.style.height = '10000px'
    this.el.style.transform = `translate3d(0, -${this.initY}px, 0)`
    this.el.style.transition = `all .5s`
    this.initPullIcon()
  }
  initPullIcon() {
    this.pullDownContain = document.createElement('div')
    this.pullDownContain.classList.add('c-pull__icon')
    this.pullDownContain.style.height = `${this.initY}px`

    this.pullIcon = document.createElement('div')
    this.pullIcon .classList.add('pull-down__icon')
    this.pullDownContain.appendChild(this.pullIcon)

    this.el.prepend(this.pullDownContain)
    this.initPullEvent()
  }
  initPullEvent() {
    this.el.addEventListener('touchstart', e => {
      const startY = e.touches[0].pageY
      this.el.addEventListener('touchmove', e => {
        const scrollTop = window.scrollY
        const scrollY = e.touches[0].pageY
        if (scrollTop <= 0) {
          this.el.style.transform = `translate3d(0, -${this.initY - scrollY}px, 0)`
          if (this.initY - scrollY + startY < 0) {
            this.el.style.transform = `translate3d(0, 0, 0)`
          }
        }
      }, {
        passive: true
      })
    }, {
      passive: false
    })

    this.el.addEventListener('touchend', e => {
      if (typeof this.pullDown === 'function') {
        this.pullDown()
      } else {
        setTimeout(_ => {
          this.el.style.transform = `translate3d(0, -${this.initY}px, 0)`
        }, 500)
      }
    })
  }
  finishLoad() {
    this.el.style.transform = `translate3d(0, -${this.initY}px, 0)`
  }
  initLoad() {
    this.el.style.transform = `translate3d(0, 0, 0)`
    if (typeof this.pullDown === 'function') {
      this.pullDown()
    }
  }
}

export default PullRefresh
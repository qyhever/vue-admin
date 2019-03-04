<template>
  <transition :name="transitionName">
    <div v-show="visible" :style="customStyle" class="back-to-ceiling" @click="backToTop">
      <svg width="16" height="16" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--backToTopArrow" aria-hidden="true" style="height: 16px; width: 16px;">
        <title>回到顶部</title>
        <g>
          <path d="M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z" fill-rule="evenodd"/>
        </g>
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    dom: {
      default: () => window
    },
    visibilityHeight: {
      type: Number,
      default: 400
    },
    backPosition: {
      type: Number,
      default: 0
    },
    customStyle: {
      type: Object,
      default: function() {
        return {
          right: '50px',
          bottom: '50px',
          width: '40px',
          height: '40px',
          'border-radius': '4px',
          'line-height': '45px',
          background: '#e7eaf1'
        }
      }
    },
    transitionName: {
      type: String,
      default: 'fade'
    }
  },
  data() {
    return {
      visible: false,
      isMoving: false
    }
  },
  watch: {
    dom(el) {
      if (el) {
        el.addEventListener('scroll', this.handleScroll)
      }
    }
  },
  mounted() {
    if (this.dom) {
      this.dom.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeDestroy() {
    if (this.dom) {
      this.dom.removeEventListener('scroll', this.handleScroll)
    }
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    handleScroll() {
      let alreadyScroll = 0
      if (this.dom) {
        alreadyScroll = this.dom.scrollTop
      } else {
        alreadyScroll = window.pageYOffset
      }
      this.alreadyScroll = alreadyScroll
      this.visible = alreadyScroll > this.visibilityHeight
    },
    backToTop() {
      // this.scrollTo(this.dom, this.alreadyScroll, 0, 800)
      let scrollTop = this.alreadyScroll
      let position = 0
      this.timer = setInterval(() => {
        let distance = scrollTop - position
        scrollTop = scrollTop - distance / 6
        if (Math.abs(distance) > 1) {
          this.dom.scrollTop = scrollTop
        } else {
          this.dom.scrollTop = scrollTop
          clearInterval(this.timer)
        }
      }, 16)
    }
  }
}
</script>

<style scoped>
.back-to-ceiling {
  position: fixed;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.back-to-ceiling:hover {
  background: #d5dbe7;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.back-to-ceiling .Icon {
  fill: #9aaabf;
  background: none;
}
</style>

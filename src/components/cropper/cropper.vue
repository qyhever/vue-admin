<template>
  <div class="cropper-wrapper">
    <div class="img-box">
      <img class="cropper-image" :id="imgId" alt="">
    </div>
    <div class="right-con">
      <div v-if="preview" class="preview-box" :id="previewId"></div>
      <div class="button-box">
        <slot>
          <el-button type="primary" @click="upload">上传图片</el-button>
        </slot>
        <div v-show="insideSrc" class="mt10">
          <el-button type="primary" @click="rotate" class="control-btn">
            <i class="fa fa-rotate-right"></i>
          </el-button>
          <el-button type="primary" @click="shrink" class="control-btn">
            <i class="fa fa-minus"></i>
          </el-button>
          <el-button type="primary" @click="magnify" class="control-btn">
            <i class="fa fa-plus"></i>
          </el-button>
          <el-button style="width: 150px;margin-top: 10px;margin-left: 0;" type="primary" @click="crop">{{ cropButtonText }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.min.css'
import { createInput } from '@/utils/utils'
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    preview: {
      type: Boolean,
      default: true
    },
    moveStep: {
      type: Number,
      default: 4
    },
    cropButtonText: {
      type: String,
      default: '裁剪'
    }
  },
  data () {
    return {
      cropper: null,
      insideSrc: ''
    }
  },
  computed: {
    imgId () {
      return `cropper${this._uid}`
    },
    previewId () {
      return `cropper_preview${this._uid}`
    }
  },
  watch: {
    src (src) {
      this.replace(src)
    },
    insideSrc (src) {
      this.replace(src)
    }
  },
  mounted () {
    this.$nextTick(() => {
      const dom = document.getElementById(this.imgId)
      this.cropper = new Cropper(dom, {
        preview: `#${this.previewId}`,
        checkCrossOrigin: true,
        autoCropArea: 1,
        modal: false,
        background: false,
        scalable: false
      })
    })
  },
  methods: {
    upload () {
      createInput('img').then(file => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = event => {
          this.insideSrc = event.target.result
        }
      })
    },
    replace (src) {
      this.cropper.replace(src)
      this.insideSrc = src
    },
    rotate () {
      this.cropper.rotate(90)
    },
    shrink () {
      this.cropper.zoom(-0.1)
    },
    magnify () {
      this.cropper.zoom(0.1)
    },
    scale (d) {
      this.cropper[`scale${d}`](-this.cropper.getData()[`scale${d}`])
    },
    move (...rest) {
      this.cropper.move(...rest)
    },
    crop () {
      this.cropper.getCroppedCanvas().toBlob(blob => {
        this.$emit('on-crop', blob)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin bg{
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")
}
.cropper-wrapper {
  width: 700px;
  height: 340px;
  .img-box{
    float: left;
    height: 340px;
    width: 430px;
    border: 1px solid #ebebeb;
    @include bg;
    img{
      max-width: 100%;
      display: block;
    }
  }
  .right-con{
    float: left;
    width: 170px;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 10px;
    .preview-box{
      height: 150px !important;
      width: 100% !important;
      overflow: hidden;
      border: 1px solid #ebebeb;
      @include bg;
    }
    .button-box{
      padding: 10px 0 0;
    }
  }
  .control-btn {
    padding: 8px 10px;
  }
}
</style>

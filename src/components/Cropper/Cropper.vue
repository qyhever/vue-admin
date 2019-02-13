<template>
  <div class="cropper-wrapper">
    <div class="img-box">
      <img class="cropper-image" :id="imgId" alt="">
    </div>
    <div class="right-con">
      <div v-if="preview" class="preview-box" :id="previewId"></div>
      <div class="button-box">
        <slot>
          <Upload action="image/upload" :before-upload="beforeUpload">
            <Button style="width: 150px;" type="primary">上传图片</Button>
          </Upload>
        </slot>
        <div v-show="insideSrc">
          <el-button type="primary" @click="rotate">
            <i class="fa fa-rotate-right"></i>
          </el-button>
          <el-button type="primary" @click="shrink">
            <i class="fa fa-minus"></i>
          </el-button>
          <el-button type="primary" @click="magnify">
            <i class="fa fa-plus"></i>
          </el-button>
          <el-button style="width: 150px;margin-top: 10px;" type="primary" @click="crop">{{ cropButtonText }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from 'cropperjs'
import './index.less'
import 'cropperjs/dist/cropper.min.css'
export default {
  name: 'Cropper',
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
  methods: {
    beforeUpload (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        this.insideSrc = event.srcElement.result
      }
      return false
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
    move (...argu) {
      this.cropper.move(...argu)
    },
    crop () {
      this.cropper.getCroppedCanvas().toBlob(blob => {
        this.$emit('on-crop', blob)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      let dom = document.getElementById(this.imgId)
      this.cropper = new Cropper(dom, {
        preview: `#${this.previewId}`,
        checkCrossOrigin: true
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
.bg{
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")
}
.cropper-wrapper {
  width: 600px;
  height: 340px;
  .img-box{
    height: 340px;
    width: 430px;
    border: 1px solid #ebebeb;
    display: inline-block;
    .bg;
    img{
      max-width: 100%;
      display: block;
    }
  }
  .right-con{
    display: inline-block;
    width: 170px;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 10px;
    .preview-box{
      height: 150px !important;
      width: 100% !important;
      overflow: hidden;
      border: 1px solid #ebebeb;
      .bg;
    }
    .button-box{
      padding: 10px 0 0;
    }
  }
}
</style>

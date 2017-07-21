<template>
  <el-upload
    ref="upload"
    :action="action"
    :data="data"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
  export default {
    data () {
      return {
        action: '',
        data: {}
      }
    },
    methods: {
      submitUpload () {
        this.$http.get('http://127.0.0.1/tests/bootstrap.php').then(response => {
          let data = response.data

          this.action = data.host

          this.$nextTick(() => {
            this.data.key = `${data.dir}$\{filename}`
            this.data.policy = data.policy
            this.data.OSSAccessKeyId = data.accessKeyId
            this.data.signature = data.signature
            this.$refs.upload.submit()
          })
        }, response => {
          console.log(response)
        }).catch(err => {
          console.log(err)
        })
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      }
    }
  }
</script>

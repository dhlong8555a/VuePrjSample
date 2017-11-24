import RepeatRunner from 'repeat-runner'

let refresh = {
  data () {
    return {
      refreshRunner: null,
      refreshFlag: null
    }
  },
  created () {
    this.refreshRunner = new RepeatRunner(this.refreshFun, this.refreshInterval)
  },
  mounted () {
    this.refreshFlag = true
  },
  beforeDestroy () {
    this.refreshRunner.stop()
    console.log('destory')
  },
  watch: {
    refreshFlag (refresh) {
      if (refresh) {
        if (this.refreshRunner != null && !this.refreshRunner.isRunning) {
          console.log('refresh start:', this.curPage)
          this.refreshRunner.start()
        }
      } else {
        if (this.refreshRunner != null && this.refreshRunner.isRunning) {
          this.refreshRunner.stop()
        }
      }
    }
  }
}

export default refresh

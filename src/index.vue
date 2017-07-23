<template>
  <div>
    <slot :list="checkList" :selections="selections" :check-all-change="checkAllChange">
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'check-all',
    data () {
      return {
        checkList: []
      }
    },
    props: {
      list: Array,
      checkAll: Boolean
    },
    methods: {
      /**
       * 给列表数据设置 checked 键值，如果有指定 checked 的值，则使用指定的值，否则将选中的项设置为true
       * @param checked {Boolean} 是否选中
       */
      setCheckKey (checked) {
        this.checkList = this.list.map(item => {
          return {
            checked: typeof checked === 'boolean' ? checked : this.selections.includes(item),
            data: item
          }
        })
      },
      /**
       * 手动更改全选按钮的值时，需要调用此方法，更新列表中 checked 的值
       */
      checkAllChange () {
        this.$nextTick(() => {
          if (this.checkAll && this.selections.length !== this.checkList.length) {
            this.setCheckKey(true)
          } else if (this.selections.length !== 0) {
            this.setCheckKey(false)
          }
        })
      }
    },
    computed: {
      /**
       * 选中的项
       */
      selections: {
        get () {
          const selections = this.checkList.filter(item => item.checked).map(item => item.data)
          // 更新 checkAll 的值
          selections.length === this.checkList.length ? this.$emit('update:checkAll', true) : this.$emit('update:checkAll', false)
          this.$emit('selection-change', selections)
          return selections
        }
      }
    },
    watch: {
      'list.length' () {
        this.setCheckKey()
      }
    },
    mounted () {
      this.setCheckKey()
    }
  }
</script>

<template>
  <div>
    <slot :list="checkList" :selections="selections" :select-all-change="selectAllChange">
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
      selectAll: Boolean
    },
    methods: {
      setCheckKey (checked) {
        return this.list.map(item => {
          return {
            checked: typeof checked === 'boolean' ? checked : this.selections.includes(item),
            data: item
          }
        })
      },
      selectAllChange () {
        this.$nextTick(() => {
          if (this.selectAll && this.selections.length !== this.checkList.length) {
            this.checkList = this.setCheckKey(true)
          } else if (this.selections.length !== 0) {
            this.checkList = this.setCheckKey(false)
          }
        })
      }
    },
    computed: {
      selections: {
        get () {
          const selections = this.checkList.filter(item => item.checked).map(item => item.data)
          selections.length === this.checkList.length ? this.$emit('update:selectAll', true) : this.$emit('update:selectAll', false)
          this.$emit('selection-change', selections)
          return selections
        }
      }
    },
    watch: {
      'list.length' () {
        this.checkList = this.setCheckKey()
      }
    },
    mounted () {
      this.checkList = this.setCheckKey()
    }
  }
</script>

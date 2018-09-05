<template>
  <div>
    <span @click="updateVal(item.value,item.isDisabled)" v-for="item in option" class="radio" :key="item.label"
          :class="{changeColor:changeIndex === item.value,disabledColor:item.isDisabled === true}">O   {{item.label}}</span>
  </div>
</template>

<script>
    export default {
        props:{
          option:Array,
        },
      data(){
        return{
          changeIndex:''
        }
      },
      methods: {
        updateVal: function (data,item) {//当用户点击radio时,触发change事件更新v-model
            if(item === true){
              return;
            }
            this.changeIndex = data;
            this.$emit('update:changeValue',data);
        }
      }
    }
</script>

<style scoped>
  .changeColor{
    color:blue;
  }
  .radio{
    cursor:pointer ;
  }
  .disabledColor{
    /*pointer-events: none;*/
    cursor:not-allowed;
    color:#ccc;
  }

</style>

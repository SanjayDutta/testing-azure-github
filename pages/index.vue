<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>Enter your Name: <input type="text" v-model=name></h2>
    <button @click="changeName">Click to change name</button>
      <h1 v-if="buttonClicked">{{ inputName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      message: 'Hello World',
      name:"",
      inputName:"",
      buttonClicked:true
    }
  },
  methods: {
    changeName() {
      this.inputName = `Hello ${this.name}`
     //this.buttonClicked = !this.buttonClicked
    }
  }
}
</script>

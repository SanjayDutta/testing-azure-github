<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>Enter your Name: <input type="text" v-model=name></h2>
    <button @click="changeName">Click to change name</button>
      <h1 v-if="buttonClicked">{{ inputName }}</h1>
    <button @click="callApi">Get Weather</button><br>
    {{weatherInfo}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  data() {
    return {
      message: 'Test Application',
      name:"",
      inputName:"",
      buttonClicked:true,
      weatherInfo:null
    }
  },
  methods: {
    changeName() {
      this.inputName = `Hello ${this.name}`
     //this.buttonClicked = !this.buttonClicked
    },
    callApi(){
      console.log('Calling API')
      axios.get('/api/test').then(response=>{
        console.log(response.data)
        this.weatherInfo = response.data
      }).catch
    }
  }
}
</script>

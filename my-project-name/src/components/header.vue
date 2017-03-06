<template>
  <div>
    <div>
      <router-link to="list1">去列表1</router-link>
      <router-link to="list2">去列表2</router-link>
      <router-link to="list3">去列表3</router-link>
    </div>
    <div>
      <router-link to="list1">去列表1</router-link>
      <router-link to="list2">去列表2</router-link>
      <router-link to="list3">去列表3</router-link>
    </div>
  </div>
</template>

<script>
  'use strict';
  var printArgs = function () {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i])
    }
  }
  printArgs(1, 2, 3) // will throw error
</script>

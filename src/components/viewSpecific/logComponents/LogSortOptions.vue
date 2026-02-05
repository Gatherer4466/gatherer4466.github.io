<template>
<!-- Potentially add filter options for month, and allow to sort based on latest or oldest first. -->
<!-- ! DEFAULT NEEDS TO BE NEWEST FIRST OF COURSE. -->
 <a v-for="option in sortOptions" href="#" style="padding: 5px;"> {{ option.name }} </a>
</template>


<script setup lang="ts">
const sortOptions = [
  {name: 'newest', default: ''},
  {name: 'oldest'},
  {name: 'march'},
  {name: 'feb'},
  {name: 'april'},
  {name: 'may'},
  {name: 'june'},
]

</script>

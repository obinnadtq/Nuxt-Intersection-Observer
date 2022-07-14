<template>
  <div class='comment'>
    <p>{{comment}}</p>
  </div>
</template>

<script>
export default {
    name: 'Comment',
    props: ['comment', 'id']
}
</script>

<style>
.comment{
    padding: 1rem;
    border: 1px dotted #ccc;
    margin: 1rem 0;
}
</style>
<template>
  <div class="container">
    <h2>Comments</h2>
    <Comment v-for="comment in comments" :key="comment.id" :comment="comment.comments"/>
    <Observer @intersect="getComments" />
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'
import {database} from '../init'
import Observer from '../components/Observer.vue'
export default {
  components: { Comment, Observer },
  name: 'IndexPage',
  data(){
    return{
      comments: []
    }
  },
  methods: {
    async getComments(){
       try {
          const response = await database.listDocuments('62d0536ac6b5c5beee2f', [], 100);
          this.comments = response.documents;
        } catch(err){
            console.log(err);
        }
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #f4f4f4;
}
.container{
  max-width: 800px;
  margin: 2rem auto;
  overflow: hidden;
  padding: 1rem 2rem;
  background: #fff;
}
h2{
  text-align: center;
}
</style>

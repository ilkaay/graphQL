<template>
  <div class="container mx-auto">
    <h1 class="text-center">Home</h1>
    <ul v-for="post in getPosts" :key="post._id">
      <li>
        {{ post.title }}
        {{ post.imageurl }}
        {{ post.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
export default {
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
          }
        }
      `,
    },
  },
};
</script>

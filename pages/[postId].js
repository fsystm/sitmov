import React from "react";
import fetch from "isomorphic-unfetch";

const SitmovPost = ({ post }) => (
  <div className="containerr user-select-none">
    <h1 >{post.name}</h1>
    <embed width="560" height="315" allow="fullscreen;"></embed>
  </div>
);

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'film1312' } },
      { params: { slug: '2' } }
    ],
    fallback: false// See the "fallback" section below
  };
}

export async function getStaticProps({ req, query }) {
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json()
  return {
    props:{
      post: json.post,
    }
  };
};


export default SitmovPost
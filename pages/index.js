import React from "react";
import Link from "next/link";
import Navigation from "../component/nav";
import unfetch from "isomorphic-unfetch";
import { Slide } from "react-slideshow-image";

export default function Home({ posts, home }) {

  return (
    <div>
      <head>
        <title>Sitmov</title>
        
      </head>
      <div className="containerr user-select-none">
        <Navigation />

         <div className="bigPhotoHome">
          <Link href="">
            <a>
              <img
                className="bigPic"
                src={home.img}
                alt="Deleted Picture"
              />
            </a>
          </Link>
        </div> 

        <div className="sitmovList">
          <div className="sitmovListTitle">
            <h2>All Series</h2>
            <h3 className="total">Total Series: {posts.sitmovAPI.length + 1}</h3>
          </div>
          <hr className="hr" />

          {posts.sitmovAPI.map((post) => (
            <div className="littleContainer" key={post.id}>
              <Link href="/post/[id]" as={`/post/${post.id}`}>
                <a onClick={() => alert("Loading: " + post.title)}>
                  <img
                    className="sitmovPic"
                    width="100px"
                    src={post.pic}
                    alt=""
                  />
                  <p className="imdbHome">{post.imdb}/10</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <footer className="footer">
          <p>&copy;2020 Emirhan Akpınar</p>
        </footer>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await unfetch("https://sitmov-api.vercel.app/db.json");
  const posts = await data.json();
  const data2 = await unfetch("https://sitmov-api.vercel.app/db.json");
  const home = await data2.json();
  return {
    props: {
      posts: posts,
      home: home.HomePage[0],
    },
  };
}

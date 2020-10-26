import React from "react";
import Link from "next/link";
import Navigation from "../component/nav";
import unfetch from "isomorphic-unfetch";

export default function Home({ posts, home }) {
  return (
    <div className="all">
      <head>
        <title>Sitmov</title>
      </head>
      <div className="containerr user-select-none">
        <Navigation />

        <div className="bigPhotoHome">
          <div className="content">
            <h3>{home.title}</h3>
            <p className="contentText">{home.details}</p>
            <Link
              className="contPlay"
              href="/series/[id]"
              as={`/series/${home.id}`}
            >
              <a>
                <div className="playbttn"></div>
                <p className="playtext">watch trailer</p>
              </a>
            </Link>
          </div>
        </div>

        <div className="sitmovList">
          <div className="sitmovListTitle">
            <h2>All Series{posts.title}</h2>
            <h3 className="total">Total Series: {posts.length}</h3>
          </div>
          <hr className="hr" />

          {posts.map((post) => (
            <div className="littleContainer" key={post.id}>
              <Link href="/series/[id]" as={`/series/${post.id}`}>
                <a>
                  <img
                    className="sitmovPic"
                    width="100px"
                    src={post.pic}
                    alt={post.title}
                  />
                  <div class="middle">
                    <div class="text">{post.title}</div>
                  </div>
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
  const data2 = await fetch("https://sitmov-api.vercel.app/db.json");
  const home = await data2.json();
  return {
    props: {
      posts: posts,
      home: home.HomePage[0],
    },
  };
}

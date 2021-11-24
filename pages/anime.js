import React from "react";
import Link from "next/link";
import Navigation from "../component/nav";
import unfetch from "isomorphic-unfetch";
import SitNavigation from "../component/sitNav";
import { useState } from "react";

export default function Home({ posts, home }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="all">
      <head>
        <title>Anime</title>
      </head>
      <div className="containerr user-select-none">
        <Navigation />

        <div className="bigPhotoHomeAnime">
          <div className="content">
            <h3>{home.title}</h3>
            <p className="contentText">{home.details}</p>
            <Link
              className="contPlay"
              href="/anime/[id]"
              as={`/anime/${home.id}`}
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
            <ul>
              <li>
                <Link href="/" as={``}>
                  <a className="sitNav">
                    <h2>Series</h2>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/movie" as={`/movie`}>
                  <a className="sitNav">
                    <h2>Movie</h2>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="" as={`/anime`}>
                  <a className="sitNav , sitNavAnime">
                    <h2>Anime</h2>
                  </a>
                </Link>
              </li>
            </ul>
            <input
              className="Search"
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            {/* <h3 className="total">Total Series: {posts.sitmovAPI.length}</h3> */}
          </div>
          <hr className="hr" />
          {posts.AnimeAPI.filter((post) => {
            if (searchTerm == "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return post;
            }
          }).map((post) => {
            return (
              <div className="littleContainer" key={post.id}>
                <Link href="/anime/[id]" as={`/anime/${post.id}`}>
                  <a>
                    <img
                      className="sitmovPic"
                      width="100px"
                      alt={post.title}
                      src={post.pic}
                    />
                    <div class="middle">
                      <div class="text">{post.title}</div>
                    </div>
                    <p className="imdbHome"> {post.imdb}/10</p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <footer className="footer">
          <p>&copy;2020 Emirhan Akpınar</p>
        </footer>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await unfetch("https://api.npoint.io/510ec877f4b496a3d5db");
  const posts = await data.json();
  const data2 = await fetch(
    "https://api.npoint.io/67d5347999bab7147f17/AnimeHomePage/0/"
  );
  const home = await data2.json();
  return {
    props: {
      posts: posts,
      home: home,
    },
  };
}

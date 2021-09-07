import React from "react";
import { Container } from "reactstrap";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Navigation from "../../component/nav";

export default function SitmovId({ post }) {
  console.log(post)
  return (
    <div className="all">
      <head>
        <title>{post.title}</title>
      </head>
      <div className="containerr user-select-none">
        <Navigation />

        <Container>
          <div className="sitmovList">
            <h2 className="sitmovListTitle">{post.title}</h2>
            <hr className="hr" />
            <img className="idPic" src={post.pic} alt="" />

            <div className="idDetails">
              <h3>Description</h3>
              <p className="idDetailsText">&nbsp;&nbsp; {post.details}</p>
              <h6 className="genreTitle">Genre:</h6>
              <p className="genre">&nbsp;{post.kind}</p>

              <table id="table-example-1">
                <tbody>
                  <tr className="tr1">
                    <td>COUNTRY</td>
                    <td>SEASON</td>
                    <td>EPISODES</td>
                    <td>IDMB</td>
                    <td>YEARS</td>
                  </tr>
                  <tr className="tr2">
                    <td>{post.country.toUpperCase()}</td>
                    <td>{post.season}</td>
                    <td>{post.episodes}</td>
                    <td className="td-imdb">{post.imdb}</td>
                    <td>{post.years}</td>
                  </tr>
                </tbody>
              </table>
              <h5>Cast:</h5>
              {post.casts.map((cast) => (
                <div className="castPics">
                  <Link href={cast.pic} >
                  <a target="_" ><img className="castPic" src={cast.pic} alt={https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png} /></a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="yt">
            <iframe
              className="embedTrailer"
              src={post.trailer}
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <footer className="footer">
            <p>&copy;2020 Emirhan Akpınar</p>
          </footer>
        </Container>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
const data = await fetch("https://sitmov-api.vercel.app/db.json");
  const posts = await data.json();
  return {
    paths: posts.map((post) => {
      return {
        params: { id: post.id },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
   const data = await fetch(`https://sitmov-api.vercel.app/${params.id}.json`);
  const post = await data.json();
  return {
    props: {
      post,
    },
  };
}

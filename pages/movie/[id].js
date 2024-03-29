import React from "react";
import { Container } from "reactstrap";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Navigation from "../../component/nav";

export default function SitmovId({ post }) {
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
            <img className="idPic" src={post.posterurl} alt="" />

            <div className="idDetails">
              <h3>Description</h3>
              <p className="idDetailsText">&nbsp;&nbsp; {post.storyline}</p>
              <h6 className="genreTitle">Genre:</h6>
            //  <p className="genre">&nbsp;{post.genres[]}</p>

              <table id="table-example-1">
                <tbody>
                  <tr className="tr1">
                    <td>COUNTRY</td>
                    <td>HOUR</td>
                    <td>IDMB</td>
                    <td>YEARS</td>
                  </tr>
                  <tr className="tr2">
                   // <td>{post.country.toUpperCase()}</td>
                   // <td>{post.hour}</td>
                //    <td className="td-imdb">{post.imdb}</td>
                    <td>{post.year}</td>
                  </tr>
                </tbody>
              </table>
              <h5>Cast:</h5>
              //{post.casts.map((cast) => (
               // <Link href={cast.pic} >
               //   <a target="_" ><img className="castPic" src={cast.pic} alt="" /></a>
            //    </Link>
            //  ))}
            </div>
          </div>
          <div className="yt">
            <iframe
              className="embedTrailer"
             // src={post.trailer}
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
const data = await fetch("https://api.npoint.io/0c5f075f00934def7037/MovieAPI/");
  const posts = await data.json();
  return {
    paths: posts.map((post) => {
      
      return {
        params: { id: post.id},
      };
      
    }),
    fallback: false,
    
  };
}

export async function getStaticProps({ params }) {
   const data = await fetch(`https://api.npoint.io/0c5f075f00934def7037/MovieAPI/${params.id}/`);
  const post = await data.json();
  return {
    props: {
      post,
    },
  };
}

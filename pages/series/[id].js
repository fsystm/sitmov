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
                <Link href={cast.pic} >
                  <a target="_" ><img className="castPic" src={cast.pic} alt="" /></a>
                </Link>
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
const data = [ "title": "La Casa De Papel",
      "id": "la-casa-de-papel",
      "pic": "http://es.web.img3.acsta.net/pictures/19/06/26/14/51/0019735.jpg?coixp=49&coiyp=67",
      "casts": [
        {
          "pic": "https://m.media-amazon.com/images/M/MV5BYzcyMGU2YmYtN2JjNi00ZTYyLTgxMjMtMWNmMzBkZWU0MjUwXkEyXkFqcGdeQXVyMTIxNzA0MTg@._V1_.jpg"
        },
        {
          "pic": "https://m.media-amazon.com/images/M/MV5BZGVlMTQyODEtNTlmZS00MTg1LWEwNmYtZmRlNjFmNzg0MDNhXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg"
        },
        {
          "pic": "https://m.media-amazon.com/images/M/MV5BODMzZDNjZjUtYzlhOC00ODNhLWI4NDMtNjc0ZmE1YWNlYzQ0XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SY1000_CR0,0,836,1000_AL_.jpg"
        },
        {
          "pic": "https://m.media-amazon.com/images/M/MV5BNTQwOTZlOTktZWI2Ni00MGU0LTg3MDItOGFlOGZjYzVmOTYwXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg"
        },
        {
          "pic": "https://vignette.wikia.nocookie.net/elite-netflix/images/d/db/Miguel_Herr%C3%A1n.jpg/revision/latest?cb=20190820080037"
        },
        {
          "pic": "https://m.media-amazon.com/images/M/MV5BMTY2NTU2NDU1OF5BMl5BanBnXkFtZTgwMTQ5NDAzNjM@._V1_SY1000_CR0,0,677,1000_AL_.jpg"
        },
        {
          "pic": "https://image.tmdb.org/t/p/original/6k4AnIGrqxuZcE2fLZSHoxjmMIb.jpg"
        },
        {
          "pic": "https://m.media-amazon.com/images/M/MV5BYTkxNDlmNWItY2I3NC00OWM5LWFiN2ItMGJkM2ZmZTllNDgxXkEyXkFqcGdeQXVyMjM4MjIyOTM@._V1_SY1000_CR0,0,999,1000_AL_.jpg"
        },
        {
          "pic": "https://m.media-amazon.com/images/M/MV5BY2FjZmVkODQtZTFmMC00OTNmLTkyNGMtNjRjY2RmOTY3MWJmXkEyXkFqcGdeQXVyODM4NzgwOTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
        },
        {
          "pic": "https://m.media-amazon.com/images/M/MV5BMzFjNjViYTgtMTZjNS00MzA0LTk5MTgtYTUwNzQzNmRiNjBmXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg"
        }
      ],
      "imdb": "8.4",
      "trailer": "https://www.youtube.com/embed/hMANIarjT50",
      "details": "Money Heist is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor, one on the Royal Mint of Spain, and one on the Bank of Spain. The series was initially intended as a limited series to be told in two parts.",
      "season": "4",
      "episodes": "40",
      "country": "es",
      "kind": "Crime drama, Heist, Thriller, Mystery, Suspense",
      "years": "2017-"
    }];
  const posts = await data.json();
 // return {
   // paths: posts.map((post) => {
   //   return {
    //    params: { id: post.id.toString()},
    //  };
   // }),
  //  fallback: false,
//  };
}
console.log(data)
export async function getStaticProps({ params }) {
   const data = await fetch(`https://sitmov-api.vercel.app/la-casa-de-papel.json`);
  const post = await data.json();
  return {
    props: {
      post,
    },
  };
}

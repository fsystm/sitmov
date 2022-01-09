import React from "react";
import { Container } from "reactstrap";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Navigation from "../../component/nav";

export default function SitmovId({ post }) {
  return (
    <div className="all">
      <head>
        <title></title>
      </head>
      <div className="containerr user-select-none">
        <Navigation />

        <Container>
          <div className="sitmovList">
            

            <div className="idDetails">
              <h3>Description</h3>
              
              <table id="table-example-1">
                <tbody>
                  <tr className="tr1">
                    <td>COUNTRY</td>
                    <td>HOUR</td>
                    <td>IDMB</td>
                    <td>YEARS</td>
                  </tr>
                  <tr className="tr2">
                    
                  </tr>
                </tbody>
              </table>
              <h5>Cast:</h5>
              
            </div>
          </div>
          <div className="yt">
            
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

import Head from "next/head";
import Layout from "../components/Layout";
import Markdown from "react-markdown";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Artist from "../components/Artist";

export default function Home({ artistes = [] }, props) {
  function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  fisherYatesShuffle(artistes);

  return (
    <html lang="fr">
      <div className=" bgColor">
        <Head>
          <title>L'Amicale | Bizarre Bazar</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com"></link>
          <link rel="preconnect" href="https://cdn.snipcart.com"></link>
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css"
          />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js"
          ></script>

          <div
            id="snipcart"
            // data-config-modal-style="side"
            data-api-key={process.env.SNIPCART_DATA_API_KEY}
            hidden
          ></div>
        </Head>
        <Layout>
          <div>
            <div className="flex justify-between pt-6 hidden md:inline-flex">

              <div className="">
                <strong className="text-9xl px-6 mt-6 arkm motion-safe:animate-fadeIn ">
                  BIZ
                </strong>
                <br />
                <strong className="text-9xl px-6 mt-6 arkm motion-safe:animate-fadeIn pl-44">
                  AR
                </strong>
                <br />
                <strong className=" text-9xl px-6 mt-6 arkm motion-safe:animate-fadeIn ">
                  R E
                </strong>
              </div>

              <div className="">
                <span className="text-9xl px-6 mt-6 arkm motion-safe:animate-fadeIn ">
                  BAZ
                </span>
                <br />
                <span className="text-9xl px-6 mt-6 arkm motion-safe:animate-fadeIn">
                  A
                </span>
                <br />
                <span className="text-9xl px-6 mt-6 arkm motion-safe:animate-fadeIn">
                  R
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse hidden md:inline-flex">
              <button className=" snipcart-checkout px-6 text-xl no-underline hover:underline">
                Panier
              </button>
              {/* <span class="snipcart-items-count"></span> <br/>
              <span class="snipcart-total-price"></span> */}
            </div>

            <div className=" text-sm pt-3 pl-6 px-6 LibreBaskerville md:text-xl">
              <p className="md:border-t md:border-black">
                <span className="arkm ">
                  <strong>Bizarre</strong> Bazar{" "}
                </span>
                a été créé pour tenter de rendre visible un geste qui nous tient
                à coeur : l’infinie puissance créatrice de nos proches au profit
                de l’achat de l’Amicale. Vous trouverez donc ici des pièces
                toutes fantastiques qui nous ont été généreusement données par
                nos ami.e.s musicien.nes, artistes, plasticien.nes,
                illustrateur.rices, photographes, imprimeuse.rs, tisserand.es,
                potier.es, bijoutier.es, graphistes, designeuse.rs textile,
                peintres… Vous avez la possibilité de les acheter si elles vous
                plaisent afin de contribuer d’une manière originale à l’achat
                des murs de l’Amicale. Vous pourrez également faire un don
                supplémentaire lorsde votre commande. N'hésitez surtout pas!
              </p>
                      {" "}
              <p>
                Découvrez aussi les supers compiles de l’Amicale que les copines
                et copains musiciens nous ont concoctés mais aussi une série
                spéciale de t-shirts imprimé dans les ateliers de{" "}
                <a
                  className="textDecorationNone hover:text-red-600"
                  href="https://www.grrrndzero.org/"
                  target="_blank"
                >
                  Grrrnd Zero
                </a>
                avec les dessins de{" "}
                <a
                  className="textDecorationNone hover:text-red-600"
                  href="https://felicite.land/"
                  target="_blank"
                >
                  Félicité Landrivon
                </a>
                ,
                <a
                  className="textDecorationNone hover:text-red-600"
                  href="https://servicelocal.fr/"
                  target="_blank"
                >
                  {" "}
                  Service Local
                </a>
                ,
                <a
                  className="textDecorationNone hover:text-red-600"
                  href="https://marionjdanoff.net/"
                  target="_blank"
                >
                  {" "}
                  Marion Jdanoff
                </a>
                ,
                <a
                  className="textDecorationNone hover:text-red-600"
                  href="https://www.alaricgarnier.fr/"
                  target="_blank"
                >
                  {" "}
                  Alaric Garnier
                </a>
                ,
                <a
                  className="textDecorationNone hover:text-red-600"
                  href="http://www.benoitfrancois.art/"
                  target="_blank"
                >
                  {" "}
                  Benoît François
                </a>
                , et
                <a
                  className="textDecorationNone hover:text-red-600"
                  href="https://www.instagram.com/soleil_de_nuit__/"
                  target="_blank"
                >
                  {" "}
                  Soleil de nuit
                </a>{" "}
                !
              </p>
                      {" "}
              <p>
                Et rendez-vous prochainement pour un{" "}
                <span className="arkm">
                  <strong>Bizarre</strong> Bazar{" "}
                </span>{" "}
                en réel !! Bonne visite !
              </p>
            </div>

            <div className="pt-3 pl-6 px-6 text-xl pb-3">
              <p className="arkm border-b border-t border-black py-1">
                COMPILE DE L'AMICALE ---- link ---- COMPILE DE L'AMICALE ----
                link
              </p>
              <img
                src="https://res.cloudinary.com/dbqfcp9vd/image/upload/v1616165428/illustration/compile_ddzfu2.jpg"
                alt="cassette compil de l'Amicale!"
                className="tailleImage"
              ></img>
            </div>

            {artistes.map((artiste, i) => {
              return <Artist artiste={artiste} />;
            })}
          </div>
        </Layout>

        <div>
          <div></div>
        </div>
      </div>
      //
    </html>
  );
}

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const artistes = await client
    .getEntries({ content_type: "artiste" })
    .then((response) => response.items);

  return {
    props: {
      artistes,
    },
  };
}

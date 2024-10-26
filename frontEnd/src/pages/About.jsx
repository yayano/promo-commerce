import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import useTheme from "../context/theme";
const About = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"À PROPOS"} text2={"DE NOUS"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={themeMode === "light" ? assets.about_img : assets.about_img_dark}
          className="w-full md:max-w-[450px] "
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 dark:text-gray-400">
          <p>
            Large Gamme de Produits : Chez Promophone, nous proposons une vaste
            sélection de téléphones et d'accessoires de qualité pour répondre à
            tous vos besoins en matière de technologie mobile.
          </p>
          <p>
            Services Complets : En plus de la vente, nous offrons des services
            de réparation professionnels, du rechargement Flexy et bien plus
            encore. Que ce soit pour un achat ou une assistance technique, vous
            trouverez tout ce qu’il vous faut chez Promophone
          </p>
          <p>
            Expertise et Fiabilité : Notre équipe de spécialistes s'assure que
            chaque client bénéficie d’un service fiable, rapide, et
            personnalisé, que ce soit pour des conseils d'achat ou des
            réparations.
          </p>
          <p>
            Engagement envers la Satisfaction Client : Nous mettons tout en
            œuvre pour que chaque expérience soit simple, rapide, et
            satisfaisante. Votre satisfaction est notre priorité.
          </p>
          <b className="text-gray-800 de dark:text-gray-300">Notre Mission</b>
          <p>
            Chez Promophone, notre mission est de rendre la technologie mobile
            accessible, fiable et durable pour tous. Nous nous engageons à
            offrir une gamme de produits et de services de qualité, comprenant
            des téléphones, des accessoires, des réparations, et des recharges
            Flexy, pour répondre aux besoins variés de nos clients.
          </p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"POURQUOI "} text2={"NOUS CHOISIR"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="dark:text-gray-300">Assurance Qualité :</b>
          <p className="text-gray-600 dark:text-gray-400">
            Nous nous engageons à fournir des produits et services d'une qualité
            irréprochable, garantissant ainsi votre satisfaction et votre
            confiance à chaque achat.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="dark:text-gray-300">Commodité :</b>
          <p className="text-gray-600 dark:text-gray-400">
            Nous simplifions votre expérience d'achat en offrant un large choix
            de produits et de services accessibles, le tout dans un
            environnement convivial et efficace.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="dark:text-gray-300">Service Client Exceptionnel :</b>
          <p className="text-gray-600 dark:text-gray-400">
            Notre équipe dédiée est à votre écoute pour répondre à toutes vos
            questions et préoccupations, assurant un support rapide et
            personnalisé pour une expérience client inégalée.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;

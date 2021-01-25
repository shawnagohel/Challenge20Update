import React from "react";
import Project from "./Project";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="portfolio-projects">
//         <Project
//           title="password generator"
//           github="ttps://github.com/shawnagohel/Password-Generator"
//           url="https://shawnagohel.github.io/Password-Generator/"
//           img="\images\pwd-gen.PNG"
//         />
      <Project
          title="FINAL CHALLENGE"
          github="https://github.com/shawnagohel/adopt-a-dog"
          url="https://adopt-me-hameed1239.herokuapp.com/"
          img="\images\pwd-gen.PNG"
        />
    
        <Project
          title="Weather Dashboard"
          github="https://github.com/shawnagohel/weather_dashboard"
          url="https://shawnagohel.github.io/weather_dashboard/"
          img="\images\weather.png"
        />
        <Project
          title="Quiz Game"
          github="https://github.com/shawnagohel/quizgame"
          url="https://shawnagohel.github.io/quizgame/index.html"
          img="\images\quiz.png"
        />
        <Project
          title="RunBuddy"
          github="https://github.com/shawnagohel/run-buddy"
          url="https://lernantino.github.io/run-buddy/"
          img="\images\run.PNG"
        />
        <Project
          title="HORISEON"
          github="https://github.com/shawnagohel/Horiseon"
          url="https://shawnagohel.github.io/Horiseon/index.html"
          img="\images\horiseon.png
          "
        />
        <Project
          title="password generator"
          github="sasa"
          url="sada"
          img="\images\pwd-gen.PNG"
        />
      </div>
    </div>
  );
}

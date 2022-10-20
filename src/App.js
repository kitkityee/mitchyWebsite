import Project from "./Projects/Project";
import Header from "./Header/Header.js"
import mitch from "./images/mitch.png";
import pinball from "./images/pinball.png";
import iac from "./images/iac.png";
import mechro4k from "./images/mechro4k.jpg";
import nokia3310 from "./images/nokia3310.png";
import entrymusic from "./images/entrymusic.PNG";
import React from "react";
import Footer from "./Footer/Footer";

function App() {
  const projects = [
    {
      name: "mit.ch",
      description:
        'This site right here',
      image: mitch,
      link: "https://github.com/kitkityee/mitchyWebsite",
    },
    {
      name: "SpaceCadetPinballLeaderboard",
      description:
        "An online leaderboard for the previously offline only Windows pinball",
      image: pinball,
      link: "https://pinball.etrash.pro",
    },
    {
      name: "IAC",
      description:
        "IAC for all of my personal sites using Terraform, Packer, and Ansible (Not public ATM)",
      image: iac,
      link: "https://github.com/Meeshoo",
    },
    {
      name: "Mechro 4K",
      description: "A small macro pad with custom PCB and QMK firmware",
      image: mechro4k,
      link: "https://github.com/Meeshoo/Mechro4K",
    },
    {
      name: "Nokia 3310 Game Controller",
      description:
        "A custom PCB with QMK firmware that fits inside the Nokia 3310 for use as a keyboard or game controller",
      image: nokia3310,
      link: "https://github.com/Meeshoo/Nokia-3310-Controller",
    },
    {
      name: "Entry Music Discord Bot",
      description: "A bot for Discord that plays music/SFX on user entry.",
      image: entrymusic,
      link: "https://github.com/Meeshoo/announcer-discord-bot",
    },
  ];

  return (
    <React.Fragment>
      <Header></Header>
      <Project projects={projects}></Project>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;

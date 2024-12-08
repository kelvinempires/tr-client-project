import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/chatContainer";
const Dashboard = () => {
  const characters = [
    {
      name: "bob",
      url: "https://i.pinimg.com/736x/97/ea/12/97ea12854ee7fdbc52197a7f99109000.jpg", // Updated to an actual image URL
    },
    {
      name: "grace",
      url: "https://i.pinimg.com/736x/c7/ab/3a/c7ab3af63ab1705bc977511b754cb851.jpg",
    },
    {
      name: "ania",
      url: "https://i.pinimg.com/736x/b5/69/d3/b569d3140501be45f3b452185958bf33.jpg",
    },
    {
      name: "blessing",
      url: "https://i.pinimg.com/736x/a6/8b/82/a68b82391f3bdb5f46ff71ef45df68b9.jpg",
    },

    {
      name: "john",
      url: "https://i.pinimg.com/736x/aa/c3/b3/aac3b387a1005ec6422266eab3497315.jpg",
    },
    {
      name: "esther",
      url: "https://i.pinimg.com/736x/1f/c1/54/1fc1548276ea6d7c107d91b7e99fd69e.jpg",
    },
    {
      name: "stev",
      url: "https://i.pinimg.com/736x/2e/8a/d1/2e8ad1d177dfc3d94714d557552168d7.jpg",
    },
    {
      name: "flower",
      url: "https://i.pinimg.com/736x/ca/9a/a0/ca9aa08bd46561348761fe8cc6c30294.jpg",
    },
    {
      name: "love",
      url: "https://i.pinimg.com/736x/9b/36/41/9b364144a0411bbc46461615f5840e9a.jpg",
    },
    {
      name: "mike",
      url: "https://i.pinimg.com/736x/c6/b1/80/c6b1800566bbdbed116d7111588c4cf4.jpg",
    },
    {
      name: "calvin",
      url: "https://i.pinimg.com/736x/5a/08/ba/5a08ba5dab2a05916ba20b72dff53103.jpg",
    },
    {
      name: "micheal",
      url: "https://i.pinimg.com/736x/e6/e0/1f/e6e01f71f33e46cb3c76879a979c84bd.jpg",
    },
    {
      name: "joyce",
      url: "https://i.pinimg.com/736x/f3/ad/9c/f3ad9c6fe0cace33fbd35d938814ab89.jpg",
    },
    {
      name: "henry",
      url: "https://i.pinimg.com/736x/d8/65/24/d8652489eb427a7c710f83c156b32bdc.jpg",
    },
    {
      name: "praise",
      url: "https://i.pinimg.com/736x/31/0e/ca/310ecabd670093df051e86623f12b20e.jpg",
    },
    {
      name: "winner",
      url: "https://i.pinimg.com/736x/e6/4e/ff/e64effb26912b4e2df43c5baa279d3c0.jpg",
    },
    {
      name: "mathew",
      url: "https://i.pinimg.com/736x/63/92/23/6392231c2c8af569ecf41e6682242d7e.jpg",
    },
    {
      name: "mathew",
      url: "https://i.pinimg.com/736x/d6/4b/4d/d64b4d5a311dbe3f19d2eb19c9cc4d09.jpg",
    },
    {
      name: "kelvin luke",
      url: "https://i.pinimg.com/736x/76/7c/dc/767cdcf5baa9dcadfc3e574794a74051.jpg",
    },
    {
      name: "mike luke",
      url: "https://i.pinimg.com/736x/e1/e7/f5/e1e7f5be7e657b0a3a04dfb51feeee1a.jpg",
    },
    {
      name: "john",
      url: "https://i.pinimg.com/736x/3d/93/0d/3d930dacdd4d0df5976dd4cfca3967b0.jpg",
    },
    {
      name: "joy",
      url: "https://i.pinimg.com/736x/f9/17/a8/f917a8e1d9a05c9cd8534596bdf326e3.jpg",
    },
    {
      name: "ada",
      url: "https://i.pinimg.com/736x/ec/aa/a9/ecaaa92b66b82304ac69c304c4a145e0.jpg",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swiper-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: `url(${character.url})` }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { Button } from "rsuite";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // const [audio, setAudio] = useState(new Audio());
  const [placeImg, setPlaceImg] = useState()
  const audio = new Audio();

  const whichAudio = (e) => {
    if (e.target.id === "si") {
      audio.src = "cat-laugh-meme-1.mp3";
      audioPlay();
      setPlaceImg("https://media.tenor.com/Ngb9u3HnHcIAAAAM/gato-riendo.gif");
    }
    if (e.target.id === "no") {
      audio.src =
        "giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3";
      audioPlay();
      setPlaceImg('https://static.tvtropes.org/pmwiki/pub/images/a411cc3f_a147_478f_84a6_c5c006168157.jpeg');

    }
  };
  const audioPlay = () => {
    audio.volume = 0.2;
    audio.play();
  };

  return (
    <>
      <div className="bg-zinc-800 p-2 flex justify-center gap-5">
        <h1 className="text-2xl text-zinc-200">SE COMIENZA LA PSS?</h1>
        <Button
          appearance="primary"
          id="si"
          onKeyUp={() => console.log("fire")}
          onClick={(e) => whichAudio(e)}
        >
          Si
        </Button>
        <Button
          appearance="primary"
          id="no"
          color="red"
          onClick={(e) => whichAudio(e)}
        >
          No?
        </Button>
      </div>
      <div className="flex justify-center">
        <img
          className="w-1/2 m-5"
          src={placeImg}
        />
      </div>
    </>
  );
}

export default App;

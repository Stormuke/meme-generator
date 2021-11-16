import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import React from "react";
import api from "../utils/api";

function App() {
    const [randomImage, setRandomImage] = React.useState('https://99px.ru/sstorage/86/2019/09/image_862209192214338119696.gif')

    function newImage() {
        api.getImages()
            .then((res) => {
                setRandomImage(res[Math.floor(Math.random() * res.length)].url)
            })
    }

  return (
      <>
        <div className="page">
            <Header/>
            <Main
                url={randomImage}
                click={newImage}
            />
            <Footer/>
        </div>
      </>
  )
}

export default App;

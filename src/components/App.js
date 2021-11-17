import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import React from "react";
import api from "../utils/api";

function App() {
    const [randomImage, setRandomImage] = React.useState(['https://99px.ru/sstorage/86/2019/09/image_862209192214338119696.gif'])
    const [loading, setLoading] = React.useState(`Нажми меня`)
    function isLoading(isLoad) {
        setLoading(isLoad === true ? `Подождите...` : `Нажми меня`)
    }

    function newImage() {
        isLoading(true)
        api.getImages()
            .then((res) => {
                setRandomImage(res[Math.floor(Math.random() * res.length)].url)
            })
            .catch((err) => {
                alert(`Ошибка загрузки: ${err}`)
            })
            .finally(() => {
                isLoading(false)
            })
    }


  return (
      <>
        <div className="page">
            <Header/>
            <Main
                url={randomImage}
                click={newImage}
                loading={loading}
            />
            <Footer/>
        </div>
      </>
  )
}

export default App;

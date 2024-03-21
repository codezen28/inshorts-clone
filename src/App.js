import { useEffect, useState } from "react";
import "./App.css";
import Navinshorts from "./components/Navinshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  console.log(process.env);

  const newsApi = async () => {
   const proxyUrl = "https://inshorts-clone-app.onrender.com/";

      const news = await axios.get(
        `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=7d89f29a853144c0abb1f7c00a5c6ec5&pageSize=${loadmore}&category=${category}`
      );
    setNewsArray(news.data.articles);
    setNewsResults(news.data.totalResults);
    console.log(news);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadmore]);
  return (
    <div className="App">
      <Navinshorts setCategory={setCategory} />
      <NewsContent
        setLoadmore={setLoadmore}
        loadmore={loadmore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
      <Footer />
    </div>
  );
}

export default App;

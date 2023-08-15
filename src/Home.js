import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import Pagination from './Pagination';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

function Home() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6); // Display 6 news in total
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(API_URL);
      setNews(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <h1>Top News Headlines</h1>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <>
          <div className="news-columns">
            {currentNews.map((article, index) => (
              <div key={index} className="news-column">
                <NewsList news={[article]} /> {/* Pass a single article */}
              </div>
            ))}
          </div>
          <Pagination
            newsPerPage={newsPerPage}
            totalNews={news.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
}

export default Home;

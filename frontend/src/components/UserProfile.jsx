import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE } from "../utils/apiBase";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function UserProfile() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_BASE}/user-api/articles`, { withCredentials: true });

        setArticles(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  // convert UTC → IST
  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

  return (
    <div>
      {error && <p className={errorClass}>{error}</p>}

      <div className={articleGrid}>
        {articles.map((articleObj) => (
          <div className={articleCardClass} key={articleObj._id}>
            <div className="flex flex-col h-full">
              {/* Top Content */}
              <div>
                <p className={articleTitle}>{articleObj.title}</p>

                <p>{articleObj.content.slice(0, 20)}...</p>

                <p className={timestampClass}>{formatDateIST(articleObj.createdAt)}</p>
              </div>

              {/* Button at bottom */}
              <button className={`${ghostBtn} mt-auto pt-4`} onClick={() => navigateToArticleByID(articleObj)}>
                Read Article →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;

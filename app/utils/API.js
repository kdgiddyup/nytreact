import axios from "axios";

const API = {
  // Retrieves all articles from the db via get
  getArticles: function() {
    return axios.get("/api/saved");
  },
  // Saves a new article to the db via post
  saveArticles: function(article) {
    return axios.post("/api/saved", { article });
  },
  // Deletes an article from the db via delete
  deleteArticle: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};

export default API;

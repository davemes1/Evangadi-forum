import axios from "axios";

const Instance = axios.create({
  baseURL: "https://evangadi-forum-backend-5lh9.onrender.com/api",
});

export default Instance;

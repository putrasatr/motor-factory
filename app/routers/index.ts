import askUsername from "app/pages/login";
import localStorage from "app/local-storage";

const isLogin = localStorage.get("isLogin");

export default function Routers() {
  if (isLogin) {
    console.log("Welcome Back");
    return;
  }
  askUsername();
}

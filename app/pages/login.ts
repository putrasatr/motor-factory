import rl from "@libs/services/readline";
import synclize from "@libs/services/synclize/index";
import ls from "../local-storage";
var sl = "sl" in global ? global.sl : {};
console.log(typeof global);
console.log("Selamat datang di pabrik motor");
console.log("Silahkan login terlebih dahulu");

const askUsername = () => {
  rl.question("Username : ", (input) => {
    const data = synclize("users", "username", input);
    if (data[0]) return askPassword();
    console.log("Username tidak ditemukan");
    askUsername();
  });
};
const askPassword = () => {
  rl.question("Password : ", (input) => {
    const data = synclize("users", "password", input);
    if (data[0]) {
      ls.set("isLogin", true);
      console.log("Welcome");
      return;
    }
    console.log("Password Salah");
    askPassword();
  });
};

export default askUsername;

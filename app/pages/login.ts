import rl from "@libs/services/readline";
import synclize from "@libs/services/synclize/index";
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
    if (data[0]) return console.log("Welcome");
    console.log("Password Salah");
    askPassword();
  });
};

export default askUsername;

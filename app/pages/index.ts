import handleDeleteDb from "@libs/handle-delete-db";
import rl from "@libs/services/readline";

const mainLogin = () => {
  rl.question("Type : ", (i) => {
    handleDeleteDb(i);
    mainLogin();
  });
};

export default mainLogin;

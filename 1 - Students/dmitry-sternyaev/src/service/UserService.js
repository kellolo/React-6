import Users from "../../public/assets/data/Users.json";
import "../../public/assets/images/ant.png";
import "../../public/assets/images/fish.png";
import "../../public/assets/images/lobster.png";
import "../../public/assets/images/parrot.png";
import "../../public/assets/images/gorilla.png";
import "../../public/assets/images/bee.png";
import "../../public/assets/images/crab.png";
import "../../public/assets/images/crocodile.png";
import "../../public/assets/images/duck.png";
import "../../public/assets/images/reindeer.png";
export default class UserService {
  users = Users.data;

  getUser(userId) {
    return this.users.find((user) => user.userId === userId);
  }
}

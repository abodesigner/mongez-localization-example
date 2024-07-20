import "./router-configuration";
import router from "@mongez/react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

router.add("/", HomePage)
router.add("/account/login", LoginPage)
router.add("/account/register", RegisterPage);
// router.add("/", HomePage)
// router.add("/", HomePage)
// router.add("/", HomePage)
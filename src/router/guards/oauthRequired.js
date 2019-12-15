import loginService from "../../service/login.service";
import { STORAGE_KEYS } from "../../service/sessionStorage.service";

const oauthRequired = (to, from, next) => {
    if (loginService.isLogin()) {
        next();
    } else {
        sessionStorage.removeItem(STORAGE_KEYS.TOKEN_LOGGED_IN);
        next.redirect('/');
    }
};

export default oauthRequired;

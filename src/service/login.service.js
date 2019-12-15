import { STORAGE_KEYS } from './sessionStorage.service';

class LoginService {
    isLogin(){
        if(sessionStorage.getItem(STORAGE_KEYS.TOKEN_LOGGED_IN)){
            return true;
        }
        return false;
    }
}

export default new LoginService();
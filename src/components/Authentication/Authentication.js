/**
 *
 * @version 1.0.0
 * @author [PBMR]
 * 
 */

const Authentication ={
    isLogged:false,
    user:{uid:''},
    onAuthentication(uid){
      this.isLogged=true;
      this.user.uid=uid;
    },
    getLogginStatus(){
      return this.isLogged;
    },
    onLogout(){
      this.isLogged=false;
      this.user.uid='';
    }
}

export default Authentication;


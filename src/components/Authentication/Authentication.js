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
      //Trigger timer for logout user :: 1000 = 1s
      //setTimeout(function(){ alert("Session is over, please login again."); }, 3000);
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


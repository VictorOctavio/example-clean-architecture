import AirIlustration from '@/assets/air.svg'
import { UserLogin } from '@/models';

export interface LoginInterface {
   handleChangeUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
   user: UserLogin;
   loading: boolean;
   login: boolean;
   setLogin: any
}

const Login: React.FC<LoginInterface> = ({ handleChangeUser, onSubmit, user, loading, login, setLogin }) => {
   return (
      <div className="login">
         <div className="login__contain container">
            <div className="login__wrapper container">

               <form className="login__wrapper__form" onSubmit={onSubmit}>

                  <h3 className="login__wrapper__form__text">{login ? 'Signin' : 'Signup'} </h3>

                  {!login && (
                     <div className="login__wrapper__form__containInput">
                        <label htmlFor="Nickname" className="login__wrapper__form__containInput__label">Name</label>
                        <input name='name' type="text" className="login__wrapper__form__containInput__inputForm" placeholder="Name" onChange={handleChangeUser} value={user.name} />
                     </div>
                  )}


                  <div className="login__wrapper__form__containInput">
                     <label htmlFor="Nickname" className="login__wrapper__form__containInput__label">Nickname</label>
                     <input name='nickname' type="text" className="login__wrapper__form__containInput__inputForm" placeholder="Nickname" onChange={handleChangeUser} value={user.nickname} />
                  </div>

                  <div className="login__wrapper__form__containInput">
                     <label htmlFor="Password" className="login__wrapper__form__containInput__label">Password</label>
                     <input type="password" name='password' className="login__wrapper__form__containInput__inputForm" placeholder="Password" onChange={handleChangeUser} value={user.password} />
                  </div>

                  <button className="login__wrapper__form__btn" disabled={loading}>{!loading ? login ? 'Login' : 'Register' : '...'}</button>

                  <span className="login__wrapper__form__span">¿olvidaste tu clave?</span>

               </form>

               <div className="login__wrapper__help">
                  <span className="login__wrapper__help__btn" onClick={() => setLogin(!login)}>
                     {login ? '¿No tenes cuenta?' : '¿Ya tienes cuenta?'}
                  </span>
               </div>


               <img src={AirIlustration} className="login__wrapper__ilustration" />
            </div>
         </div>

      </div>
   )
}
export default Login
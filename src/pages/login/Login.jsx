// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { useState }  from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  async function submit (e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/",{
        email,password
      })
      .then(res =>{
        if(res.data == "exist"){
          history("/Dashboard",{state:{id:email}})
        }
        else if(res.data == "notexist"){
          alert("User Doesnt Exist")
        }
      })
      .catch(e=>{
        alert("wrong detail")
        console.log(e);
      })
      
    } 
    catch{
      console.log(e)
    }
  }



  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 font-roboto font-bold text-[#012970]">Login Form</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-[#012970] ">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded" 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-[#012970]">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded" 
            />
          </div>
          <button type="submit" onClick={submit} className="my-4 w-full bg-[#4154F1] hover:bg-[#505bbf] text-white p-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;








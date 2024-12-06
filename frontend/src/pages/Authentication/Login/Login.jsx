import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../../providers/AuthProvider";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isDisable, setIsDisable] = useState(true);

  const {control, setControl} = useAuth();

  useEffect(() => {
    if (phoneNumber && password) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [phoneNumber, password]);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://127.0.0.1:8000/user/login", {
        phoneNumber,
        password,
      });
      if(data?.status == 200){
        localStorage.setItem("user", JSON.stringify(data?.data));
        setControl(!control);
        navigate("/");
      }else{
        toast.error("Wrong credential");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 ">
        <LoginForm
          setPassword={setPassword}
          setPhoneNumber={setPhoneNumber}
          handleLogin={handleLogin}
          isDisable={isDisable}
        />
        <p className="text-xs text-center sm:px-6">
          Do not have an account?{" "}
          <Link to="/register" className="hover:text-green-400 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

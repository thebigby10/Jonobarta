import { useEffect, useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { uploadImage } from "../../../utils/uploadImage";
import OTPModal from "../components/OTPModal";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nidNumber, setNidNumber] = useState("");
  const [image, setImage] = useState(null);
  const [isDisable, setIsDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
//   const OTP = 3333;

  useEffect(() => {
    if (
      name &&
      phoneNumber &&
      password &&
      confirmPassword &&
      nidNumber &&
      image
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [confirmPassword, image, name, nidNumber, password, phoneNumber]);

  const handleImageUrl = async (img) => {
    setLoading(true);
    try {
      const imageUrl = await uploadImage(img);
      setImage(imageUrl);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      return toast.error("Password must be minimum of 8 characters!");
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    //-------------nid verification---------------

    try {
      const data = await axios.post("http://127.0.0.1:8000/user/register", {
        name,
        phoneNumber,
        password,
        nidNumber,
        image,
      });
      if(data?.status == 200){
        setIsModalOpen(true);
      }else{
        toast.error("Invalid NID");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   -----------------check otp-----------

  const handleOtpSubmit = async() => {
    try {
        const data =await axios.post("http://127.0.0.1:8000/user/checkotp", {phoneNumber, password, otp})
        if(data?.status == 200){
            toast.success("Registration success!!");
            navigate("/login");
        }else{
            toast.error("Invalid OTP");
        }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-2">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <RegisterForm
          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setNidNumber={setNidNumber}
          setImage={setImage}
          handleRegister={handleRegister}
          isDisable={isDisable}
          image={image}
          handleImageUrl={handleImageUrl}
          loading={loading}
        />
        <p className="text-xs text-center sm:px-6">
          Already have an account?{" "}
          <Link to="/login" className="hover:text-green-400 font-bold">
            Login
          </Link>
        </p>
      </div>

      {/* OTP Modal */}
      <OTPModal
        isModalOpen={isModalOpen}
        setOtp={setOtp}
        otp={otp}
        setIsModalOpen={setIsModalOpen}
        handleOtpSubmit={handleOtpSubmit}
      />
    </div>
  );
};

export default Register;

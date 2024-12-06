/* eslint-disable react/prop-types */
const LoginForm = ({ setPassword, setPhoneNumber, handleLogin, isDisable }) => {
    return (
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="text-sm">
          <label htmlFor="phoneNumber" className="font-bold">
            Phone number
          </label>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter phone number"
            className="w-full px-4 py-3 rounded-md border border-green-200"
            required
          />
        </div>
        <div className="text-sm">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="w-full px-4 py-3 border border-green-200 rounded-md"
            required
          />
        </div>
        <button
          disabled={isDisable}
          className={`block w-full p-2  text-white text-center rounded-sm ${
            isDisable ? "bg-green-200" : "bg-green-400"
          }`}
        >
          Login
        </button>
      </form>
    );
  };
  
  export default LoginForm;
  
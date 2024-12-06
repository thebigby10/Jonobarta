/* eslint-disable react/prop-types */
const RegisterForm = ({
    setName,
    setPhoneNumber,
    setPassword,
    setConfirmPassword,
    setNidNumber,
    handleRegister,
    isDisable,
    image,
    handleImageUrl,
    loading,
  }) => {
    return (
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="text-sm">
          <label htmlFor="name" className="font-bold">
            Full Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-md border border-green-200"
            required
          />
        </div>
        <div className="text-sm">
          <label htmlFor="phoneNumber" className="font-bold">
            Phone Number
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
        <div className="text-sm">
          <label htmlFor="confirmPassword" className="font-bold">
            Confirm Password
          </label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="w-full px-4 py-3 border border-green-200 rounded-md"
            required
          />
        </div>
        <div className="text-sm">
          <label htmlFor="nidNumber" className="font-bold">
            NID Number
          </label>
          <input
            onChange={(e) => setNidNumber(e.target.value)}
            type="text"
            name="nidNumber"
            id="nidNumber"
            placeholder="Enter your NID Number"
            className="w-full px-4 py-3 rounded-md border border-green-200"
            required
          />
        </div>
        <div className="text-sm">
          <label htmlFor="image" className="font-bold">
            Upload Image
          </label>
          <input
            onChange={(e) => handleImageUrl(e.target.files[0])}
            type="file"
            name="image"
            id="image"
            className="w-full px-4 py-3 rounded-md border border-green-200"
            accept="image/*"
            required
          />
          {loading && <p className="text-sm text-blue-500">Uploading Image...</p>}
          {image && !loading && (
            <div>
              <img src={image} alt="" />
            </div>
          )}
        </div>
        <button
          disabled={isDisable || loading}
          className={`block w-full p-2  text-white text-center rounded-sm ${
            isDisable ? "bg-green-200" : "bg-green-400"
          }`}
        >
          Register
        </button>
      </form>
    );
  };
  
  export default RegisterForm;
  
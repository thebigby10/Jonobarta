/* eslint-disable react/prop-types */

const OTPModal = ({ isModalOpen, setIsModalOpen, setOtp, otp, handleOtpSubmit }) => {
    if (isModalOpen)
      return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-6 w-11/12 max-w-md">
            <h2 className="text-lg font-bold text-center mb-4">Enter OTP</h2>
            <input
              type="text"
              maxLength={4}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 4-digit OTP"
              className="w-full px-4 py-2 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleOtpSubmit}
                className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-500"
              >
                Submit
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
  };
  
  export default OTPModal;
  
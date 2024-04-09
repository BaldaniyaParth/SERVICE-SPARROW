import React from "react";
import Navbar from "../../Component/User/Navbars";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userHomeService } from "../../store/action/user.action";
import { userAddService } from "../../store/action/user.action";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adddetails = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  const [validationErrors, setValidationErrors] = useState({
    service: "",
    city: "",
    experience: "",
    expectedfees: "",
    aadharCardNo: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
  });

  useEffect(() => {
    dispatch(userHomeService());
  }, [dispatch]);

  console.log(
    "serviceData?.serviceCategories",
    data?.userHomeService?.data?.serviceCategories
  );
  const [formData, setFormData] = useState({
    service: "",
    city: "",
    experience: "",
    expectedfees: "",
    aadharCardNo: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
  });
  const bankNames = [
    "State Bank of India (SBI)",
    "HDFC Bank",
    "ICICI Bank",
    "Punjab National Bank (PNB)",
    "Axis Bank",
    "Bank of Baroda (BoB)",
    "Union Bank of India",
    "Bank of India (BOI}",
    "kotak Bank",
    "Central Bank Of India  ",
  ];
  const [isSubmitted, setIsSubmitted] = useState(false);

  const data2 = useSelector((state) => state.user.userAddService);

  console.log("data2", data2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const parsedValue = name === 'expectedfees' && value !== '' ? parseInt(value) : value;


    // If the field is AadharCardNo, AccountNumber, or expectedfees, validate input as numbers
    if (
      name === "aadharCardNo" ||
      name === "accountNumber" ||
      name === "expectedfees"
    ) {
      const regex = /^[0-9]*$/; // Regex to allow only numbers
      // Check if the input value matches the regex pattern
      if (!regex.test(parsedValue)) {
        // If input doesn't match, set value to empty string (prevents non-numeric characters)
        setFormData((prevData) => ({
          ...prevData,
          [name]: "",
        }));
      } else {
        // If input matches, update the formData directly
        setFormData((prevData) => ({
          ...prevData,
          [name]: parsedValue,
        }));
      }
    } else {
      // For other fields, update the formData directly
      setFormData((prevData) => ({
        ...prevData,
        [name]: parsedValue,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    // Basic validation checks
    if (!formData.serviceCategoryId) {
      errors.serviceCategoryId = "Select a service";
    }
    if (!formData.city) {
      errors.city = "City is required";
    }
    if (!formData.experience) {
      errors.experience = "Experience is required";
    }
    if (!formData.expectedfees) {
      errors.expectedfees = "Expected Fees is required";
    } else if (parseInt(formData.expectedfees) > 4000) {
      errors.expectedfees = "Expected Fees cannot be greater than 4000";
    }
    if (!validateAadharCard(formData.aadharCardNo)) {
      errors.aadharCardNo = "Invalid Aadhar Card Number. Must be 12 digits";
    }
    if (!validateAccountNumber(formData.accountNumber)) {
      errors.accountNumber = "Invalid Account Number. Must be 11-13 characters";
    }
    if (!validateIFSCCode(formData.ifscCode)) {
      errors.ifscCode = "Invalid IFSC Code. Must be 11 characters";
    }
    if (!formData.bankName) {
      errors.bankName = "Bank Name is required";
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const validateAadharCard = (aadharCardNo) => {
    const regex = /^\d{12}$/;
    return regex.test(aadharCardNo);
  };

  const validateAccountNumber = (accountNumber) => {
    const regex = /^.{11,13}$/;
    return regex.test(accountNumber);
  };

  const validateIFSCCode = (ifscCode) => {
    const regex = /^[A-Za-z]{4}[0-9]{7}$/;
    return regex.test(ifscCode);
  };


  const Adddetails = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      dispatch(userAddService(formData));
      setIsSubmitted(true); // Updated variable name
  
      // Clear form fields
      setFormData({
        serviceCategoryId: "",
        city: "",
        experience: "",
        expectedfees: "",
        aadharCardNo: "",
        accountNumber: "",
        ifscCode: "",
        bankName: "",
      });
    } else {
      toast.error("Please fill in all the required fields correctly");
    }
  };
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="min-h-screen  bg-[#344955] flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-full max-w-md">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
              Add Deatils
            </h1>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 text-lg text-left"
                htmlFor="service"
              >
                Services
              </label>

              <select
                className="border rounded-lg w-full py-2 px-4 text-gray-800 focus:outline-none"
                id="serviceCategoryId"
                name="serviceCategoryId"
                onChange={handleInputChange}
                value={formData.serviceCategoryId}
              >
                <option value="">Select a service</option>
                {data?.userHomeService?.data?.serviceCategories?.map(
                  (service) => (
                    <option key={service._id} value={service._id}>
                      {service.name}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <label
                className="text-gray-800 text-left text-lg font-semibold block my-3 text-md"
                for="city"
              >
                City
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Add City"
              />
              <div className="text-red-500 text-sm">
                {validationErrors.city}
              </div>
            </div>
            <div>
              <label
                className="text-gray-800 text-left text-lg font-semibold block my-3 text-md"
                for="experiance"
              >
                Experiance
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="experience"
                id="experiance"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Add Experiance"
                maxLength={2}
              />
              <div className="text-red-500 text-sm">
                {validationErrors.experience}
              </div>
            </div>
            <div>
              <label
                className="text-gray-800 text-left text-lg font-semibold block my-3 text-md"
                for="experiance"
              >
                Expected Fees
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="expectedfees"
                id="fees"
                value={formData.expectedfees}
                onChange={handleInputChange}
                placeholder="Add Your Expected Fees"
                maxLength={4}
              />
              <div className="text-red-500 text-sm">
                {validationErrors.expectedfees}
              </div>
            </div>
            <div>
              <label
                className="text-gray-800 text-left text-lg font-semibold block my-3 text-md"
                for="adhar"
              >
                AdharCard No
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="aadharCardNo"
                id="aadharCardno"
                value={formData.aadharCardNo}
                onChange={handleInputChange}
                placeholder="Add AharCard No"
                maxLength={12}
              />
              <div className="text-red-500 text-sm">
                {validationErrors.aadharCardNo}
              </div>
            </div>
            <div>
              <label
                className="text-gray-800 text-left text-lg font-semibold block my-3 text-md"
                for="accountNumber"
              >
                Bank Account Number
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="accountNumber"
                id="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                placeholder="Add Bank Account Number"
                maxLength={16}
              />
              <div className="text-red-500 text-sm">
                {validationErrors.accountNumber}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 pr-2">
                <label
                  className="text-gray-800 text-left text-lg font-semibold block my-3 text-md"
                  htmlFor="ifscCode"
                >
                  IFSC Code
                </label>
                <input
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  type="text"
                  name="ifscCode"
                  id="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                  placeholder="Add IFSC Code"
                  maxLength={11}
                />
                <div className="text-red-500 text-sm">
                  {validationErrors.ifscCode}
                </div>
              </div>

            </div>
            <label
              className="text-gray-800 text-left text-lg font-semibold block my-3 text-md"
              htmlFor="bankName"
            >
              Bank Name
            </label>
            <select
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              name="bankName"
              id="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
            >
              <option value="">Select Bank Name</option>
              {bankNames.map((bankName, index) => (
                <option key={index} value={bankName}>
                  {bankName}
                </option>
              ))}
            </select>
            <div className="text-red-500 text-sm">
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-[#344955] rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
              onClick={Adddetails}
            >
              Add
            </button>
          </form>
          {isSubmitted && <p>Form submitted successfully!</p>}
        </div>
      </div>
    </>
  );
};

export default Adddetails;

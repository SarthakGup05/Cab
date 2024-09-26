import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingType, setBookingType] = useState("outstation"); // Set default to outstation

  // Handle booking type change
  const handleBookingTypeChange = (type) => {
    setBookingType(type);
    formik.resetForm(); // Reset form when switching between booking types
  };

  // Validation schema for local/airport booking
  const localSchema = yup.object({
    fullName: yup.string().required("Full Name is required"),
    pickupLocation: yup.string().required("Pick-up location is required"),
    dropLocation: yup.string().required("Drop-off location is required"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  // Validation schema for outstation booking
  const outstationSchema = yup.object({
    fullName: yup.string().required("Full Name is required"),
    pickupLocation: yup.string().required("Pick-up location is required"),
    dropLocation: yup.string().required("Drop-off location is required"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  // Separate submit function for local/airport booking
  const handleLocalSubmit = (values) => {
    setIsSubmitting(true);
    const emailParams = {
      fullName: values.fullName,
      pickupLocation: values.pickupLocation,
      dropLocation: values.dropLocation,
      phoneNumber: values.phoneNumber,
      bookingType: "local",
    };

    emailjs
      .send("service_ui714w8", "template_3q1bw2s", emailParams, "tTWvX9HD0Fdy91t1_")
      .then((response) => {
        toast.success("Local booking successful!");
        setIsSubmitting(false);
        formik.resetForm();
      })
      .catch((error) => {
        toast.error("Local booking failed. Please try again.");
        setIsSubmitting(false);
      });
  };

  // Separate submit function for outstation booking
  const handleOutstationSubmit = (values) => {
    setIsSubmitting(true);
    const emailParams = {
      fullName: values.fullName,
      pickupLocation: values.pickupLocation,
      dropLocation: values.dropLocation,
      phoneNumber: values.phoneNumber,
      bookingType: "outstation",
    };

    emailjs
      .send("service_ui714w8", "template_3q1bw2s", emailParams, "tTWvX9HD0Fdy91t1_")
      .then((response) => {
        toast.success("Outstation booking successful!");
        setIsSubmitting(false);
        formik.resetForm();
      })
      .catch((error) => {
        toast.error("Outstation booking failed. Please try again.");
        setIsSubmitting(false);
      });
  };

  // Select schema and submit function based on booking type
  const validationSchema = bookingType === "local" ? localSchema : outstationSchema;
  const handleSubmit = bookingType === "local" ? handleLocalSubmit : handleOutstationSubmit;

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      fullName: "",
      pickupLocation: "",
      dropLocation: "",
      phoneNumber: "+91",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      <Toaster /> {/* Toaster for notifications */}
      <div className="flex mb-4">
        <button className="w-full py-2 bg-[#86ab89] text-white rounded-t-md font-semibold">
          Book Cabs
        </button>
      </div>

      <div className="flex justify-around mt-4">
        {/* Outstation first */}
        <button
          className={`py-2 px-4 w-1/2 transition-all duration-300 ${
            bookingType === "outstation" ? "bg-[#86ab89] text-white" : "bg-gray-200"
          } rounded-l-md font-semibold`}
          onClick={() => handleBookingTypeChange("outstation")}
        >
          Outstation
        </button>

        {/* Local / Airport second */}
        <button
          className={`py-2 px-4 w-1/2 transition-all duration-300 ${
            bookingType === "local" ? "bg-[#86ab89] text-white" : "bg-gray-200"
          } rounded-r-md font-semibold`}
          onClick={() => handleBookingTypeChange("local")}
        >
          Local / Airport
        </button>
      </div>

      <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
        {/* Full Name */}
        <div className="relative">
          <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`pl-10 p-3 w-full border ${
              formik.touched.fullName && formik.errors.fullName
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md focus:outline-none`}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
          )}
        </div>

        {/* Outstation Fields */}
        {bookingType === "outstation" && (
          <div className="transition-all duration-300">
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="pickupLocation"
                placeholder="Pick-up Location"
                value={formik.values.pickupLocation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`pl-10 p-3 w-full border ${
                  formik.touched.pickupLocation && formik.errors.pickupLocation
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none`}
              />
              {formik.touched.pickupLocation && formik.errors.pickupLocation && (
                <div className="text-red-500 text-sm">{formik.errors.pickupLocation}</div>
              )}
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="dropLocation"
                placeholder="Drop-off Location"
                value={formik.values.dropLocation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`pl-10 p-3 w-full border ${
                  formik.touched.dropLocation && formik.errors.dropLocation
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none`}
              />
              {formik.touched.dropLocation && formik.errors.dropLocation && (
                <div className="text-red-500 text-sm">{formik.errors.dropLocation}</div>
              )}
            </div>
          </div>
        )}

        {/* Local / Airport Fields */}
        {bookingType === "local" && (
          <div className="transition-all duration-300">
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="pickupLocation"
                placeholder="Pick-up Location"
                value={formik.values.pickupLocation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`pl-10 p-3 w-full border ${
                  formik.touched.pickupLocation && formik.errors.pickupLocation
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none`}
              />
              {formik.touched.pickupLocation && formik.errors.pickupLocation && (
                <div className="text-red-500 text-sm">{formik.errors.pickupLocation}</div>
              )}
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="dropLocation"
                placeholder="Drop-off Location"
                value={formik.values.dropLocation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`pl-10 p-3 w-full border ${
                  formik.touched.dropLocation && formik.errors.dropLocation
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none`}
              />
              {formik.touched.dropLocation && formik.errors.dropLocation && (
                <div className="text-red-500 text-sm">{formik.errors.dropLocation}</div>
              )}
            </div>
          </div>
        )}

        {/* Phone Number */}
        <div className="relative">
          <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            name="phoneNumber"
            placeholder="+91"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`pl-10 p-3 w-full border ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md focus:outline-none`}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
          )}
        </div>

        <button
          type="submit"
          className={`w-full py-3 bg-[#86ab89] rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

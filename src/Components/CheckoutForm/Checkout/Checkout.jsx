import React, { useState, useEffect } from "react";
import AddressFrom from "../AddressFrom";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../Commerce/Commerce";
import { Link, useNavigate } from "react-router-dom";
const Checkout = ({ cart, onCaptureCheckout, error, order, refreshCart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const steps = ["Shipping address", " Payment details"];
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          setCheckoutToken(token);
        } catch (error) {
          navigate("/");
        }
      };

      generateToken();
    }
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = () => (
    <div>
      <h2 className="my-4">Thank you for your purchase...</h2>
      <button className="border-2 border-gray-200 px-3 py-2 rounded text-sm">
        <Link onClick={refreshCart} to="/">
          Back to home
        </Link>
      </button>
    </div>
  );

  // if (error) {
  //   Confirmation = () => (
  //     <>
  //       <h5>Error: {error}</h5>
  //       <br />
  //       <Link to="/">Back to home</Link>
  //     </>
  //   );
  // }

  const Form = () =>
    activeStep === 0 ? (
      <AddressFrom checkoutToken={checkoutToken} test={test} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
      />
    );
  return (
    <div className="flex justify-center items-center w-screen h-screen  absolute top-0 left-0 bg-[#f0f0f0]">
      <main className=" rounded max-w-md p-3 bg-white flex flex-col ">
        <h4 className="text-center text-2xl font-semibold my-3">Checkout</h4>
        <div className="flex fex-row justify-around mb-3 items-center ">
          <div>
            <h6
              className={`inline-block text-xs ${
                activeStep >= 0 ? " bg-blue-500 " : ""
              } bg-gray-200 rounded-full h-4 w-4 text-center `}
            >
              1
            </h6>
            <h6 className="inline text-xs"> {steps[0]}</h6>
          </div>
          <div
            class={`h-[2px] border-b-2 border-gray-200 w-32 mt-2 ${
              activeStep >= 1 ? "mx-2 " : ""
            }`}
          ></div>
          <div>
            <h6
              className={`inline-block text-xs ${
                activeStep >= 1 ? "bg-blue-500 " : ""
              } bg-gray-200 rounded-full h-4 w-4 text-center`}
            >
              2
            </h6>
            <h6 className="inline text-xs">{steps[1]}</h6>
          </div>
        </div>
        {activeStep === steps.length ? (
          <Confirmation />
        ) : (
          checkoutToken && <Form />
        )}
      </main>
    </div>
  );
};

export default Checkout;

import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import { commerce } from "../../Commerce/Commerce";
import FormInput from "./CustomTextField";

const AddressForm = ({ checkoutToken, test }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log(countries);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region: stateProvince }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  return (
    <>
      <h6 className="text-2xl py-3">Shipping address</h6>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            test({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <div className="grid grid-cols-2 gap-3">
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />
            <div className="pb-3">
              <label className="text-gray-400 text-sm" htmlFor="">
                Shipping Country
              </label>
              <select
                className="w-full bg-transparent border-b-[3px] border-gray-300  pb-1"
                value={shippingCountry}
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {Object.entries(shippingCountries)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
            </div>
            <div className="pb-3">
              <label className="text-gray-400 text-sm" htmlFor="">
                Shipping Subdivision
              </label>
              <select
                className="w-full bg-transparent border-b-[3px] border-gray-300  pb-1"
                value={shippingSubdivision}
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {Object.entries(shippingSubdivisions)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm" for="fname">
                Shipping Options
              </label>
              <select
                className="w-full bg-transparent border-b-[3px] border-gray-300 pb-1"
                value={shippingOption}
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {shippingOptions
                  .map((sO) => ({
                    id: sO.id,
                    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
                  }))
                  .map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
            </div>
            <br />
          </div>
          <div className="pb-3 pt-5 flex justify-between">
            <button>
              <Link
                className="border-2 border-gray-200 px-3 py-2 rounded text-sm"
                to="/cart"
              >
                BACK TO CART
              </Link>
            </button>
            <button
              className="px-3 py-2 rounded text-sm bg-[#2E76CF] text-white"
              type="submit"
            >
              NEXT
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;

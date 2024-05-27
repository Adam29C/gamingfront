import React, { useState } from "react";
import axios from "axios";
import {baseurl} from "../Config/Frontend.config";
// import Files
import { header } from "../Config/Header";



// ALL CLIENTS
export async function LOGIN( token) {
  const data = {
    mobileNumber: 1234567890,
    password: "superAdmin123",
  };

  try {
    const res = await axios.post(`${baseurl}authRouter/login`, data, {
      headers: header(token),
    });
    console.log("res", res);
    return await res?.data;
  } catch (err) {
    return err;
  }
}
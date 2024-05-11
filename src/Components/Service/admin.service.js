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

    return await res?.data;
  } catch (err) {
    return err;
  }
}

//get profile api data
export async function ProfileGet(token){



  try {
    const res = await axios.get(`${baseurl}authRouter/getUserProfile`,{
      headers: header(token),
    })

    return await res?.data;
    
  } catch (error) {
    return error;
  }
}

//change password 

export async function ChangePasswordApi(data,token){
  try {
    const res = await axios.post(`${baseurl}authRouter/changePassword`,data ,{
      headers : header(token)
    })
    return res
    
  } catch (error) {
    return error
    
  }
}
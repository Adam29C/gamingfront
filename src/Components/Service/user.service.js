import React, { useState } from "react";
import axios from "axios";
import { header } from "../Config/Header";
import { baseurl } from "../Config/Frontend.config";




//withdrwa get api

export async function Withdraw(id,token){

try {
      const res = await axios.get(`${baseurl}userRouter/viewWallet?userId=${id}`,{
        headers: header(token),
      })
  
      return await res?.data;
      
    } catch (error) {
      return error;
    }
  }


  //user profile get
export async function UserProfileGetApi(id,token){
  try {
    const res = await axios.get(`${baseurl}authRouter/getUserProfile?userId=${id}`,{headers:header(token)})
    return await res?.data
    
  } catch (error) {
    return error;
  }
}
  
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
  

//all match get api
export async function AllMatchesApi(token){
  try {
    const res = await axios.get(`${baseurl}sports/getAllMatchesList`,{headers:header(token)})

    return await res?.data
    
  } catch (error) {
    return error
  }
}

//get match list
export async function MatchListApi(id,token){
  try {
    const res = await axios.get(`${baseurl}sports/getMatchsList/${id}`,{headers:header(token)})
    return await res?.data
  } catch (error) {
    return error
  }
}


//get series list
export async function SeriesListApi(token){
  try {
    const res = await axios.get(`${baseurl}sports/getSeriesList`,{headers:header(token)})
    return await res?.data
    
  } catch (error) {
    return error
    
  }
}
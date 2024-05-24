import React, { useState } from "react";
import axios from "axios";
import { baseurl } from "../Config/Frontend.config";
// import Files
import { header } from "../Config/Header";

// ALL ANTADMINS
export async function ALL_ADMINS(token) {
  try {
    const res = await axios.post(
      `${baseurl}adminRouter/listOfUserAndSubAdmin`,

      {
        headers: header(token),
      }
    );

    return await res?.data;
  } catch (err) {
    return err;
  }
}





// ALL ANTADMINS
export async function ADD_ADMINS(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}adminRouter/createSubAdmin`,
      data,
      {
        headers: header(token),
      }
    );

    return await res?.data;
  } catch (err) {
    return err;
  }
}


//game rule list status change api
export async function GET_ALL_SUBADMINS(data, token) {
  try {
    const res = await axios.get(
      `${baseurl}adminRouter/subAdminList?adminId=${data}`,

      { headers: header(token) }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}




// ---------------  Game Rules -------------------------------




//add game rule api
export async function GameRuleAddApi(data, token) {

  try {
    const res = await axios.post(`${baseurl}adminRouter/addRules`, data, { headers: header(token) })
    return await res?.data

  } catch (error) {
    return error;
  }
}

//update rule api
export async function GameRuleUpdateApi(data, token) {
  try {
    const res = await axios.patch(`${baseurl}adminRouter/updateRules`, data, { headers: header(token) })
    return await res?.data

  } catch (error) {
    return error;
  }
}




//delete rule api
export async function GameRuleDeleteApi(id, token) {
  try {
    const res = await axios.delete(`${baseurl}adminRouter/deleteRules?ruleId=${id}`, { headers: header(token) })
    return await res?.data

  } catch (error) {
    return error;
  }
}



//game rule list status change api
export async function GameRuleListStatus(data, token) {
  try {
    const res = await axios.patch(`${baseurl}adminRouter/updateRulesStatus`, data, { headers: header(token) })
    return await res?.data

  } catch (error) {
    return error;
  }
}



// add admin account details
export async function ADD_ADMIN_ACCOUNT_DETAILS(data, token) {
  try {
    const res = await axios.post(`${baseurl}adminRouter/addAdminAccountDetail`, data, {
      headers: header(token),
      'Content-Type': 'multipart/form-data'
    })
    return await res?.data
  } catch (error) {
    return error
  }
}





// //get profile api data
// export async function ProfileGet(token){

//   try {
//     const res = await axios.get(`${baseurl}authRouter/getUserProfile`,{
//       headers: header(token),
//     })

//     return await res?.data;

//   } catch (error) {
//     return error;
//   }
// }

// //change password

// export async function ChangePasswordApi(data,token){
//   try {
//     const res = await axios.post(`${baseurl}authRouter/changePassword`,data ,{
//       headers : header(token)
//     })
//     return res

//   } catch (error) {
//     return error

//   }
// }

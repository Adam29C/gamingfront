//get game rule api

import axios from "axios";
import toast from "react-hot-toast";
import { baseurl } from "../Config/Frontend.config";
import { header } from "../Config/Header";


//get game rule api
export async function GameRuleGetApi(token){
    try {
      const res = await axios.get(`${baseurl}common/getRules`,{headers:header(token)})
      return await res?.data
      
    } catch (error) {
      return error;
    }
  }
    
  //add game rule api
export async function GameRuleAddApi(data,token){

    try {
      const res = await axios.post(`${baseurl}adminRouter/addRules`,data,{headers:header(token)})
      return await res?.data
      
    } catch (error) {
      return error;
    }
  }
    
  //update rule api
export async function GameRuleUpdateApi(data,token){
    try {
      const res = await axios.patch(`${baseurl}adminRouter/updateRules`,data,{headers:header(token)})
      return await res?.data
      
    } catch (error) {
      return error;
    }
  }
    

  

    //delete rule api
export async function GameRuleDeleteApi(id,token){
    try {
      const res = await axios.delete(`${baseurl}adminRouter/deleteRules?ruleId=${id}`,{headers:header(token)})
      return await res?.data
      
    } catch (error) {
      return error;
    }
  }
    

  
    //game rule list status change api
export async function GameRuleListStatus(data,token){
  try {
    const res = await axios.patch(`${baseurl}adminRouter/updateRulesStatus`,data,{headers:header(token)})
    return await res?.data
    
  } catch (error) {
    return error;
  }
}
  

    //get game list api
    export async function GetGameListApi(token){
      try {
        const res = await axios.get(`${baseurl}common/gamesList`,{headers:header(token)})
        return await res?.data
        
      } catch (error) {
        return error;
      }
    }
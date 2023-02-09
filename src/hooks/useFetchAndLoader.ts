import { AxiosCall } from "@/models";
import { AxiosResponse } from 'axios'
import { useState } from "react";

export const useFetchAndLoader = () => {


   const [loading, setLoading] = useState<boolean>(false)

   const callEndpoint = async (axiosCall: AxiosCall<any>) => {

      let result = {} as AxiosResponse<any>

      try {
         setLoading(true)
         result = await axiosCall.call
      } finally {
         setLoading(false)
      }

      return result.data
   }

   return { loading, callEndpoint }

}
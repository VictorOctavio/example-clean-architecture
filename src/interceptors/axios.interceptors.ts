import { getValidationErros } from "@/utilities/getValidationErrors.utility";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";

export const AxiosInterceptors = () => {
   axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
      // console.log('request: ', request)
      return request
   })

   axios.interceptors.response.use(
      (response: AxiosResponse) => {
         console.log('response: ', response)
         return response
      },
      (error) => {
         toast.error(getValidationErros(error.code))
         return Promise.reject(error)
      }
   );
}
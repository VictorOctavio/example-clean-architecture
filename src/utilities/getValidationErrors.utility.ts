import { TypeWithKey } from "@/models"

export const getValidationErros = (errorCode: any) => {
   const codeMatcher: TypeWithKey<string> = {
      ERR_NETWORK: "URL IS NOT VALID",
      ERR_BAD_REQUEST: 'DATA IS NOT VALID REQUEST',
      ERR_BAD_RESPONSE: 'SERVIDOR ERROR',
      INVALID_LOGIN_DATA: 'INVALID DATA FROM'
   }

   return codeMatcher[errorCode]
}
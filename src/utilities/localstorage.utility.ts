export const removeItem = (itemName: string) => {
   localStorage.removeItem(itemName)
}

export const addItem = (itemName: string, data: any) => {
   localStorage.setItem(itemName, JSON.stringify(data))
}

export const getItem = (itemName: string) => {
   return localStorage.getItem(itemName)
}
import {useState,useEffect} from 'react';

const useFormatDate = (defaultDate) => {
  const [dateFormat,setDate] = useState(new Date(defaultDate));
 
   useEffect(() => {
  setDate(`${dateFormat.getDate()} ${dateFormat.toLocaleString('default', { month: 'long' })} ${dateFormat.getFullYear()}`)

}, []) 
  
  return dateFormat;
}

export default useFormatDate;

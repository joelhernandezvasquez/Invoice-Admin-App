import {useEffect} from 'react';
import { fetchCurrentLocation } from '../actions';

const useLocation = (location) => {
    
   useEffect(() => {
     fetchCurrentLocation(location.pathname.replace('/',''))
   }, [])
}

export default useLocation;

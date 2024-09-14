"use client"
import Cookies from 'universal-cookie';
import { createContext, useContext, useMemo, useState } from "react";

interface AccessibilityContextProps {
  cookieItem: any;
  setCookieItem: React.Dispatch<React.SetStateAction<any>>;
  handleSetCookie: () => void;
}

const AccessibilityContext = createContext({} as AccessibilityContextProps);

function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const cookies = new Cookies();

  const [cookieItem, setCookieItem] = useState(cookies.get('toggle-theme') ?? false)
  
  function handleSetCookie() {
    const hasCookie = cookies.get('toggle-theme')

    if (!hasCookie) {
      cookies.set('toggle-theme', true)
      
      setCookieItem(cookies.get('toggle-theme'))

      return
    }

    cookies.set('toggle-theme', false)
      
    setCookieItem(cookies.get('toggle-theme'))
  }
  
  const valuesMemoized = useMemo(
    () => ({
      cookieItem,
      setCookieItem,
    }),
    [cookieItem, setCookieItem],
  );

  return (
    <AccessibilityContext.Provider value={{...valuesMemoized, handleSetCookie}}>
      {children}
    </AccessibilityContext.Provider>
  )
}

const useAccessibilityContext = () => {
  return useContext(AccessibilityContext)
}

export { AccessibilityProvider, useAccessibilityContext };

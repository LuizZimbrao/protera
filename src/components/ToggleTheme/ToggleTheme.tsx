"use client";
import { useEffect } from "react";

import Toggle from "@/svgs/Toggle";

import { useAccessibilityContext } from "@/contexts/AccessibilityContetxt";

export default function ToggleTheme() {
  const { handleSetCookie, cookieItem } = useAccessibilityContext();

  useEffect(() => {
    if (cookieItem) {
      document.documentElement.classList.add('toggle-theme')
    } else {
      document.documentElement.classList.remove('toggle-theme')
    }
  }, [cookieItem])

  return (
    <button onClick={handleSetCookie}>
      <Toggle />
    </button>
  )
}
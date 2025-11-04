'use client'
import { HiMoon, HiSun } from "react-icons/hi2"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"

const ToggleTheme = () => {

  const { theme, setTheme } = useTheme()

  const toggleButton = () => {
    console.log("Current theme:", theme)
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button onClick={toggleButton} className="p-2 rounded-lg hover:bg-accent/20 transition cursor-pointer" variant="ghost">
      {theme === "dark" ? <HiSun className="w-6 h-6" /> :
        <HiMoon className="w-6 h-6" />}
    </Button>
  )
}

export default ToggleTheme

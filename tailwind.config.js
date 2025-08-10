/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand:{ teal:"#54AFCC", blue:"#5677D5", violet:"#6741DC" },
        ink:{ 900:"#0F172A" }, slate:{ 700:"#334155", 400:"#94A3B8", 100:"#F1F5F9" }
      },
      borderRadius:{ xl:"12px", full:"999px" }, boxShadow:{ soft:"0 8px 24px rgba(0,0,0,0.12)" }
    }
  }, plugins:[]
}

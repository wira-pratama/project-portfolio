module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'primary': ['Plus Jakarta Sans', 'sans-serif'],
            'secondary': ['Poppins', 'sans-serif'],
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#007eff",
          
                    "secondary": "#00afe7",
                            
                    "accent": "#3800ff",
                            
                    "neutral": "#0b110e",
                            
                    "base-100": "#f0feff",
                            
                    "info": "#00cfea",
                            
                    "success": "#009d45",
                            
                    "warning": "#ec4600",
                            
                    "error": "#ff688a",          
                },
            },
        ],
    },
    plugins: [
        require('daisyui'),
    ]
}
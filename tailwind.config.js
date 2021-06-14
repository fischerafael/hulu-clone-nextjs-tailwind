module.exports = {
    node: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: '#06202A'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}

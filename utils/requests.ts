const API_KEY = process.env.API_KEY

export const requests = {
    discover: {
        title: 'DISCOVER',
        url: `http://www.omdbapi.com/?apikey=${API_KEY}&`
    }
}

export const categories = [
    {
        title: 'Descubra',
        url: '#'
    },
    {
        title: 'Ação',
        url: '#'
    },
    {
        title: 'Comédia',
        url: '#'
    },
    {
        title: 'Drama',
        url: '#'
    },
    {
        title: 'Animação',
        url: '#'
    },
    {
        title: 'Infantil',
        url: '#'
    }
]

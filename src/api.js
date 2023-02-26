import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID FYg-VnQ_AwCgdgS8JKWvLo3uQvpdt8bWLwOm_nJVV-I'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;
const result = document.querySelector('.result')

const  fetchedData = async () => {
    try{
        //const {data} = await axios.get('/.netlify/functions/1-hello') - Original URL befor using the redirects in the (root netlify.toml) file
        const {data} = await axios.get('/api/1-hello')
        result.textContent = data;

    } catch (error) {
        console.log(error.response)
    }
}

fetchedData();
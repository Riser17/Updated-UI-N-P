import axios from 'axios';
// Api url of backend server
const apiUrl = 'http://localhost:8080/api/';

// Function for posting data to server
export const multipleFilesUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'multipleFiles', data, options);
    } catch (error) {
        throw error;
    }
}

// Function for getting data from server includeing filter and sorting condition 
export const getMultipleFiles = async (filter, sort, connectedAccount, minPrice, maxPrice,category) => {
    try {
        let apiurl = apiUrl + 'getMultipleFiles'
        if (!filter && !sort && !minPrice && !maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&category=${JSON.stringify(category)}`
        }
        if (filter && !sort && !minPrice && !maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&filter=${JSON.stringify(filter)}&category=${JSON.stringify(category)}`
        }
        if (sort && !filter && !minPrice && !maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&sort=${JSON.stringify(sort)}&category=${JSON.stringify(category)}`
        }
        if (sort && filter && !minPrice && !maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&sort=${JSON.stringify(sort)}&filter=${JSON.stringify(filter)}&category=${JSON.stringify(category)}`
        }
        if (filter && !sort && minPrice && !maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&minPrice=${JSON.stringify(minPrice)}&filter=${JSON.stringify(filter)}&category=${JSON.stringify(category)}`
        }
        if (filter && sort && minPrice && !maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&minPrice=${JSON.stringify(minPrice)}&filter=${JSON.stringify(filter)}&sort=${JSON.stringify(sort)}&category=${JSON.stringify(category)}`
        }
        if (filter && sort && !minPrice && maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&maxPrice=${JSON.stringify(maxPrice)}&filter=${JSON.stringify(filter)}&sort=${JSON.stringify(sort)}&category=${JSON.stringify(category)}`
        }
        if (filter && !sort && !minPrice && maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&maxPrice=${JSON.stringify(maxPrice)}&filter=${JSON.stringify(filter)}&category=${JSON.stringify(category)}`
        }
        if (filter && !sort && minPrice && maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&minPrice=${JSON.stringify(minPrice)}&maxPrice=${JSON.stringify(maxPrice)}&filter=${JSON.stringify(filter)}&category=${JSON.stringify(category)}`
        }
        if (!filter && sort && minPrice && !maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&sort=${JSON.stringify(sort)}&minPrice=${JSON.stringify(minPrice)}&category=${JSON.stringify(category)}`
        }
        if (!filter && sort && !minPrice && maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&sort=${JSON.stringify(sort)}&maxPrice=${JSON.stringify(maxPrice)}&category=${JSON.stringify(category)}`
        }
        if (!filter && sort && minPrice && maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&minPrice=${JSON.stringify(minPrice)}&maxPrice=${JSON.stringify(maxPrice)}&sort=${JSON.stringify(sort)}&category=${JSON.stringify(category)}`
        }
        if (filter && sort && minPrice && maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&minPrice=${JSON.stringify(minPrice)}&maxPrice=${JSON.stringify(maxPrice)}&filter=${JSON.stringify(filter)}&&sort=${JSON.stringify(sort)}&category=${JSON.stringify(category)}`
        }
        if (!filter && !sort && minPrice && !maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&minPrice=${JSON.stringify(minPrice)}&category=${JSON.stringify(category)}`
        }
        if (!filter && !sort && !minPrice && maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&maxPrice=${JSON.stringify(maxPrice)}&category=${JSON.stringify(category)}`
        }
        if (!filter && !sort && minPrice && maxPrice) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&minPrice=${JSON.stringify(minPrice)}&maxPrice=${JSON.stringify(maxPrice)}&category=${JSON.stringify(category)}`
        }
        const { data } = await axios.get(apiurl);
        return data;
    } catch (error) {
        throw error;
    }
}

// Function for getting the particular asset from the server by it ID 
export const getnfts = async (_id) => {
    try {
        let apiurl = `http://localhost:8080/api/DetailNFT/${_id}`
        const { data } = await axios.get(`http://localhost:8080/api/DetailNFT/${_id}`);
        return data;
    } catch (error) {
        throw error;
    }
}

// Function for update database when asset listed on marketplace
export const updateDB = async (tokenId, itemId, listed) => {
    try {
        let apiurl = apiUrl + 'update';
        apiurl = `${apiurl}?tokenId=${(tokenId)}&itemId=${(itemId)}&listed=${(listed)}`
        await axios.put(apiurl);
    } catch (error) {
        throw error;
    }
}

// Function for get Multiple Files on MyNFTsMarketPlace
export const getMultipleFilesMyNFTsMarketPlace = async (filter, sort, connectedAccount,category) => {
    try {
        let apiurl = apiUrl + 'getMultipleFilesMyNFTsMarketPlace'
        if (!filter && !sort) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&category=${JSON.stringify(category)}`
        }
        if (filter && !sort) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&filter=${JSON.stringify(filter)}&category=${JSON.stringify(category)}`
        }
        if (sort && !filter) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&sort=${JSON.stringify(sort)}&category=${JSON.stringify(category)}`
        }
        if (sort && filter) {
            apiurl = `${apiurl}?connectedAccount=${JSON.stringify(connectedAccount)}&sort=${JSON.stringify(sort)}&filter=${JSON.stringify(filter)}&category=${JSON.stringify(category)}`
        }
        const { data } = await axios.get(apiurl);
        return data;
    } catch (error) {
        throw error;
    }
}

// Function for get Multiple Files on MarketPlace
export const getMultipleFilesMarketPlace = async (filter, sort, category) => {
    try {
        
        let apiurl = apiUrl + 'getMultipleFilesMarketPlace'
        if (!filter && !sort) {
            apiurl = `${apiurl}?category=${JSON.stringify(category)}`
        }
        if (filter && !sort) {
            apiurl = `${apiurl}?filter=${JSON.stringify(filter)}&category=${JSON.stringify(category)}`
        }
        if (sort && !filter) {
            apiurl = `${apiurl}?sort=${JSON.stringify(sort)}&category=${JSON.stringify(category)}`
        }
        if (sort && filter) {
            apiurl = `${apiurl}?sort=${JSON.stringify(sort)}&filter=${JSON.stringify(filter)}&category=${JSON.stringify(category)}`
        }
        const { data } = await axios.get(apiurl);
        return data;
    } catch (error) {
        throw error;
    }
}

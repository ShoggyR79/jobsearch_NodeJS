import axios from "axios"

const url = "http://localhost:8070/api"

export const getCompanies = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${url}/company`,
                method: 'GET'
            });
            console.log("result: ", result.data)
            dispatch({
                type: 'SET_COMPANIES_ARR',
                companiesList: result.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const createCompany = (company) =>{
    return async () =>{
        try {
            await axios({
                url: `${url}/company`,
                method: 'POST',
                data: company
            })
            window.location.reload();

        } catch (error) {
            console.log(error)
        }
    }
}

export const updateCompany = (id, company) =>{
    return async() =>{
        try {
            const result = await axios({
                url: `${url}/company/${id}`,
                method: 'PUT',
                data: company
            })
            alert(result.data)
            window.location.reload();

        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteCompany = (id) =>{
    return async() =>{
        try {
            const result = await axios({
                url:`${url}/company/${id}`,
                method:"DELETE"
            })
            alert(result.data)
        } catch (error) {
            console.log(error)
        }
    }
}
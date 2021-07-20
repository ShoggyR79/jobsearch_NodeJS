const initialState = {
    companiesList: []
}

export const CompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMPANIES_ARR':{
            return {...state, companiesList:action.companiesList}
        }
        default:
            return { ...state }
    }
}
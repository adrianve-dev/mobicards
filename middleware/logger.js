const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('The action: ', action)
        const returnValue = next(action) //runs middleware or in this case store.dispatch to update state
        console.log('The new state: ', store.getState())
    console.groupEnd
    return returnValue
}

export default logger
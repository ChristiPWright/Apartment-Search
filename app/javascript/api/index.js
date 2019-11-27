const getApartments = () => {
    return fetch("/apartments.json")
        .then((response)=>{
            if(response.status === 200){
                return response.json()
            }else{
                return Promise.new(() => {
                    resolve({error: "there was an error."})
                })
            }
        })
}



const createApartments =() => {
    return fetch('/apartments')
        .then((response)=>{
            return response.json()
        })
}

export {
    getApartments,
    createApartments
}
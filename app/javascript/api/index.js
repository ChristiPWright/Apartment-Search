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

// fetch GET unit data from rails
const getUnits = () => {
    return fetch("/units.json")
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


// takes form data pushes into Rails method POST(line 22) returns json of submitted data sends back to NewApartment's handleclick promise then
const createApartment =(aptdata) => {
    return fetch('/apartments.json', {
       body: JSON.stringify(aptdata),
        headers: {
            'Content-Type': 'application/json'
        }, 
        method: "POST"
    })
        .then((response)=>{
            return response.json()
        })
}

export {
    getApartments,
    createApartment,
    getUnits
}
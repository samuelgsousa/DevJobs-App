export const filtrar = (fArray, fparametro) =>{

  const retorno = []

    if(fparametro !== '' && fparametro !== null && fparametro !== undefined){
          //console.log(fArray[1].localidade)
        let retI = 0

        for(let i = 0; i< fArray.length; i++){

           if(JSON.stringify(fArray[i]).toLowerCase().includes(fparametro.toString().toLowerCase()) ){
            retorno[retI] = fArray[i]
            retI++
           } 
        }

        return retorno
  
    } else{
      return fArray
    }
}

// const exp = () =>{
//     vagas.filter((vaga) => {
//         return searchQuery.toLowerCase() === '' ? vaga : vaga.nome_empresa.toLowerCase().includes(searchQuery.toLowerCase()) || vaga.cargo.toLowerCase().includes(searchQuery.toLowerCase())
//      }).map((vaga, index) => ()
// }
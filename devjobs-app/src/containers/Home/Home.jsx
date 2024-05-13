import Search from './filters/SearchBar'
import Jobs from './Jobs'
import './Home.css'
import { useState } from 'react'
import { filtrar } from './filters/filtrarFunction'


const Home = () => {


const [searchQuery, setSearchQuery] = useState('')

const handleSearch = (query) => {
    setSearchQuery(query)
}


    return(
        <>
        <Search onSearch={handleSearch}/> {/*barra de pesquisa*/}

        <div class="jobs_list"><Jobs searchQuery={searchQuery}/></div>
        
         {/*componente que busca as vagas no banco de dados e cria uma div para cada*/}

        </>
    )
}
export default Home
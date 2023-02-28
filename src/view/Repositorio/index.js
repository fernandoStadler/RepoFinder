import React , {useState, useEffect}from "react";

import { FaArrowCircleLeft } from 'react-icons/fa'

import { Container,Owner,Loading,BackButton } from "./styled";

import api from '../../services/api';

const Repositorio = ({match}) => {

const [repositorio, setRepositorio] = useState({});
const [issues, setIssues] = useState([]);
const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async ()=>{
            const nomeRepo = decodeURIComponent(match.params.repositorio);

          const [dataRepositorio, dataIssues]  = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`,{
                    params: {
                        state: 'open',
                        per_page:5
                    }
                })
            ]);
            setRepositorio(dataRepositorio.data)
            setIssues(dataIssues.data)
            setLoading(false);
        }
        load();
    },[match.params.repositorio]);

    if (loading) {
        return(
         <Loading>
            <h1>Carregando...</h1>
         </Loading>   
        )
    }
    return (
        <Container>
            <BackButton to={'/'}>
            <FaArrowCircleLeft size={25}/>

            </BackButton>
            <Owner>
                <img 
                src={repositorio.owner.avatar_url} 
                alt={repositorio.owner.login}
                />
                <h1>{repositorio.name}</h1>
                <p>{repositorio.description}</p>
            </Owner>
        </Container>
    );
}

export default Repositorio
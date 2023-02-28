import React , {useState, useEffect}from "react";

import { FaArrowCircleLeft } from 'react-icons/fa'

import { Container,Owner,Loading,BackButton,IssuesList,Info } from "./styled";

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
            <IssuesList>
                {issues.length<=0?
                <Info>
                    <span>Este repostorio não possui Issues a serem carregadas</span> 
                </Info>
                : issues.map(issue=>
                <li key={String(issue.id)}>
                    <img src={issue.user.avatar_url} alt={issue.user.login} />
                    <div>
                        <strong>
                            <a href={issue.html_url}>{issue.title}  </a>
                            {issue.labels.map(label=>(
                                <span key={String(label.id)}>{label.name}</span>
                            ))}
                        </strong>
                        <p>{issue.user.login}</p>
                    </div>
                </li>
                )}
            </IssuesList>
        </Container>
    );
}
export default Repositorio
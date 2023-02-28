import React, { useState, useCallback,useEffect } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars,FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, DeleteButton } from './styled'
import {Link} from 'react-router-dom'

import api from '../../services/api'

const Main = () => {

    const [newRepo, setNewRepo] = useState('')
    const [repositorios, setRepositorios] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)

    //buscar
    useEffect(() => {
        const repoStorage = localStorage.getItem('repos')
        if (repoStorage) {
            setRepositorios(JSON.parse(repoStorage))
        }
    }, [])
    //Salvar

    useEffect(()=>{
        localStorage.setItem('repos', JSON.stringify(repositorios))
    },[repositorios]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        const submit = async () => {
            setLoading(true);
            setAlert(null);
            try {

                if(newRepo===""){
                    throw new Error("A busca pelo repositório não pode estar vazia!")
                }

                const response = await api.get(`/repos/${newRepo}`)
                const hasRepo = repositorios.find(repo => repo.name === newRepo);

                if(hasRepo){
                    throw new Error("Repositorio já consta na lista!");
                }
                const data = {
                    name: response.data.full_name
                }
                setRepositorios([...repositorios, data]);
                setNewRepo('');
            } catch (error) {
                setAlert(true)
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        submit();
    }, [newRepo, repositorios]);

    const handleInputChange = (event) => {
        setNewRepo(event.target.value);
        setAlert(null);
    }

 
const handleDelete = useCallback ((repo)=>{
    const find = repositorios.filter(repoReturn => repoReturn.name !== repo)
    setRepositorios(find);
    console.log(repositorios)
},[repositorios]);

    return (
        <Container>
            <FaGithub size={25} />
            <h1>Meus Repositórios</h1>
            <Form onSubmit={handleSubmit} error={alert}>
                <input
                    type="text"
                    placeholder="adicionar repositorio"
                    value={newRepo}
                    onChange={handleInputChange}
                />
                <SubmitButton loading={loading ? 1 : 0}>
                    {loading ?(
                        <FaSpinner color="#FFF" size={14}/>
                    ):(
                        <FaPlus color="#FFF" size={14}/>
                    )
                }
                </SubmitButton>
            </Form>
            <List>
                {Array.isArray(repositorios) && repositorios.map(repo=>(
                    <li key={repo.name}>
                        <span>
                            <DeleteButton onClick={()=> handleDelete(repo.name)}>
                                <FaTrash size={14}/>
                            </DeleteButton>
                            {repo.name}
                        </span>
                        <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                            <FaBars size={20}/>
                        </Link> 
                    </li>
                    
                ))}
            </List>
        </Container>
        
        
    );
}
export default Main;
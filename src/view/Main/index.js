import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars,FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, DeleteButton } from './styled'

import api from '../../services/api'

const Main = () => {

    const [newRepo, setNewRepo] = useState('')
    const [repositorios, setRepositorios] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        const submit = async () => {
            setLoading(true)
            try {
                const response = await api.get(`/repos/${newRepo}`)
                const data = {
                    name: response.data.full_name
                }
                setRepositorios([...repositorios, data]);
                setNewRepo('');
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        submit();
    }, [newRepo, repositorios]);

    const handleInputChange = (event) => {
        setNewRepo(event.target.value);
    }

 
const handleDelete = useCallback ((repo)=>{
    const find = repositorios.filter(repoReturn => repoReturn.name !== repo)
    setRepositorios(find);
    console.log(repositorios)
},[repositorios]);

const alerta =()=>{
    alert("Oi")
}

    return (
        <Container>
            <FaGithub size={25} />
            <h1>Meus Repositórios</h1>
            <Form onSubmit={handleSubmit}>
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
                        <a href="#">
                            <FaBars size={20}/>
                        </a> 
                    </li>
                ))}
            </List>
        </Container>
    );
}
export default Main;
import React,{useState, useCallback} from "react";
import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styled'

import api from '../../services/api'

const Main = () => {

    const [newRepo, setNewRepo] = useState('')
    const [repositorios, setRepositorios] = useState('')

    const handleSubmit =  useCallback((event) => {
        event.preventDefault()
        const submit = async () =>{
            const response = await api.get(`/repos/${newRepo}`)
            const data = {
                name:response.data.full_name
            }
            setRepositorios([...repositorios, data]);
            setNewRepo('');
        } 
        submit();
    },[newRepo, repositorios]);

    const  handleInputChange = (event) => {
        setNewRepo(event.target.value);
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
                <SubmitButton>
                    <FaPlus color="#fff" size={14} />
                </SubmitButton>
            </Form>
        </Container>
    );
}
export default Main;
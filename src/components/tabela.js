import React, {useState} from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function Tabela(){

    const [adicionando, setAdicionando] = useState(false);

    const [dados, setDados] = useState([{
        nome: '',
        cpf: '',
        idade: '',
        estadocivil: ''
      }])
    
      const [novoaluno, setNovoaluno] = useState({
        nome: '',
        cpf: '',
        idade: '',
        estadocivil: ''
      })

  
    function salvar(){
        if(novoaluno.nome === '' || novoaluno.cpf === '' || novoaluno.idade === '' || novoaluno.estadocivil === ''){
          alert('Erro. Favor preencher todos os dados')
        }else{
          const dadoscopia = [...dados]
          dadoscopia.push(novoaluno)
          setDados(dadoscopia)
          setNovoaluno({nome: '', cpf: '', idade: '', estadocivil: ''})
          setAdicionando(false)      
        }      
      }
    return(
        <div>
            {!adicionando ? (
            <div>
                <h2>Alunos Cadastrados</h2>
                <Table striped bordered hover style={{width: '40em'}}>
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Idade</th>
                    <th>Estado Civil</th>
                    </tr>
                </thead>
                <tbody>
                {dados.map((dado) => (
                    <tr key={dado}>
                    <td>{dado.nome}</td>
                    <td>{dado.cpf}</td>
                    <td>{dado.idade}</td>
                    <td>{dado.estadocivil}</td>
                    </tr>
                ))}
                </tbody>
                </Table>
                <Button onClick={() => setAdicionando(true)} variant="primary">Adicionar novo aluno</Button><br/><br/>
            </div>
            ):(
            <div> 
                <h2>Novo Cadastro</h2>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" value={novoaluno.nome} onChange={(e) => {setNovoaluno({...novoaluno, nome: e.target.value})}}/>
                    <Form.Text className="text-muted">      
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" value={novoaluno.cpf} onChange={(e) => {setNovoaluno({...novoaluno, cpf: e.target.value})}}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Idade</Form.Label>
                    <Form.Control type="number" value={novoaluno.idade} onChange={(e) => {setNovoaluno({...novoaluno, idade: e.target.value})}}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Estado Civil:</Form.Label>
                    <Form.Control type="text" value={novoaluno.estadocivil} onChange={(e) => {setNovoaluno({...novoaluno, estadocivil: e.target.value})}}/>
                    <Form.Text className="text-muted">      
                    </Form.Text>
                </Form.Group>           

                <Button variant="success" onClick={salvar}>Salvar</Button>
                </Form>
            </div>
            )}

        </div>
    )
}
export default Tabela;
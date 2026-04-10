import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Check,
  Trash,
  InputWrapper,
} from "./styles";

function App() {
  const [list, setList] = useState(() => {
    const tarefasSalvas = localStorage.getItem("@lista-tarefas");

    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas);
    }

    return [];
  });

  const [inputTask, setInputTask] = useState("");

  useEffect(() => {
    localStorage.setItem("@lista-tarefas", JSON.stringify(list));
  }, [list]);

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function cliqueiNoBotao() {
    if (inputTask.trim()) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }]);
      setInputTask(""); //
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item,
    );

    setList(newList);
  }

  function removerTarefa(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <Container>
      <h1>Lista de tarefas</h1>

      <ToDoList>
        <InputWrapper>
          <Input
            onChange={inputMudou}
            value={inputTask}
            placeholder="O que tenho para fazer"
          />
          <Button onClick={cliqueiNoBotao}> Adicionar </Button>
        </InputWrapper>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => removerTarefa(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há tarefas.</h3>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;

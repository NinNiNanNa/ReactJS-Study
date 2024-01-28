const { useState } = require("react");

function App() {
  // input의 값
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  // console.log(toDo);
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(toDo);

    // toDo가 비어있다면
    if (toDo === "") {
      // 함수 종료
      return;
    }
    // 현재 toDos를 받아와서 새로운 toDo의 배열로 return
    setToDos((currentArray) => [toDo, ...currentArray]);
    // input 비워주기
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

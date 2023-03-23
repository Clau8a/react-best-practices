import './App.css';
import notesList from "./notes.json"

function App() {
  return (<>
    <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
    </head>
    <header className="header">
      Welcome to Notes
    </header>
    <div className="App">
      <div className='container'>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Take notes" />
          <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <div className="card-container">
          {
            notesList.map((note) => (
              <div key={note.title} className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {note.title}
                  </h5>
                  {
                    note.body.type === "text" &&
                    <div className="card-text">
                      {note.body.content}
                    </div>
                  }
                  {
                    note.body.type === "checkList" &&
                    <div className="card-text">
                      {note.body.content.map((item) => (
                        <div className="form-check" key={item.text}>
                          {
                            item.checked ?
                              <input className="form-check-input" type="checkbox" checked />
                              :
                              <input className="form-check-input" type="checkbox" />
                          }
                          <label className="form-check-label" for="flexCheckDefault">
                            {item.text}
                          </label>
                        </div>
                      ))}
                    </div>
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </>
  );
}

export default App;

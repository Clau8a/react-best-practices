import './App.css';
import { Tabs } from './components/Tabs';
import notesList from "./data/notes.json"

function App() {
  return (<>
    <header className="header">
      Welcome to Notes
    </header>
    <div className="App">
      <div className='container'>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Take notes" />
          <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>

        <Tabs>
          <Tabs.TabsWrapper defaultActiveTab="1">
            <Tabs.Tab tab="1">
              All
            </Tabs.Tab>
            <Tabs.Tab tab="2">
              Work
            </Tabs.Tab>
            <Tabs.Tab tab="3">
              Recipes
            </Tabs.Tab>
          </Tabs.TabsWrapper>
          <Tabs.TabContent>
            <Tabs.TabPanel tab="1">
              <div className="card-container">
                {
                  notesList.map((note) => (
                    <div key={note.id} className="card">
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
                            {note.body.content.map((item, i) => (
                              <div className="form-check" key={item.i}>
                                {
                                  item.checked ?
                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                    :
                                    <input className="form-check-input" type="checkbox" />
                                }
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  {item.text}
                                </label>
                              </div>
                            ))}
                          </div>
                        }
                      </div>
                      {
                        note.labels.length > 0 &&
                        <div className="card-footer">
                          {note.labels.map((label) => <span className="badge text-bg-info">{label}</span>)}
                        </div>

                      }
                    </div>
                  ))
                }
              </div>
            </Tabs.TabPanel>
            <Tabs.TabPanel tab="2">
              empty
            </Tabs.TabPanel>
          </Tabs.TabContent>
        </Tabs>


      </div>
    </div>
  </>
  );
}

export default App;

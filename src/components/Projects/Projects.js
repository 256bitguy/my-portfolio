import { useState } from 'react';

import List from './lists/List';
import { useEffect } from 'react';

const list = [
  {
    id: 1,
    description: "project",
    listItem: ["academic achievements:Secured a perfect 10 CGPA in class 10", "academic achievements:Secured a perfect 10 CGPA in class 10", "academic achievements:Secured a perfect 10 CGPA in class 10"]
  }, {
    id: 2,
    description: "Class 12",
    listItem: ["academic achievements:Secured a perfect 10 CGPA in class 12", "academic achievements:Secured a perfect 10 CGPA in class 12", "academic achievements:Secured a perfect 10 CGPA in class 12"]
  }, {
    id: 3,
    description: "B Tech",
    listItem: ["academic achievements:Secured a perfect 10 CGPA in B Tech", "academic achievements:Secured a perfect 10 CGPA in B Tech", "academic achievements:Secured a perfect 10 CGPA in B Tech"]
  }
];

const menu = [
  {
    id: 1,
    title: "HTML",
  }, {
    id: 2,
    title: "CSS",
  }, {
    id: 3,
    title: "JavaScript",
  },{
    id: 4,
    title: "ReactJs",
  },{
    id: 5,
    title: "NodeJS",
  }
];

const Academics = () => {
  const [current, setCurrent] = useState(1);
  const [lists, setLists] = useState([]);

  function change(id) {
    const filteredList = list.filter(item => item.id === id);
    setCurrent(id);
    setLists([...filteredList]);
  
  }

  return (
    <div className='border'>
      <div className="title">
        <div className="menu">
          {
            menu.map((menu) => (
              <ul key={menu.id} style={{ width: "100px", height: "20px" }}>
                <li> <button onClick={() => change(menu.id)}>  {menu.title}</button></li>
              </ul>
            ))
          }
        </div>
        <div className="academics">Projects</div>
      </div>
      <div>
        <div>
            <button>projects1</button>
            <button>projects2</button>
            <button>projects3</button>
            <button>projects4</button>
            <button>projects5</button>
        </div>
        <div><div>
        {
            lists.map((item)=>{
                return(
                    <List title={item}/>
                )
            })
        }
      </div></div>
      </div>
    </div>
  );
};

export default Academics;

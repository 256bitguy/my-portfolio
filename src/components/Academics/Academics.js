import { useState } from 'react';
import './academics.css';
import List from './list/List';
import { useEffect } from 'react';
import { BiDownArrow } from "react-icons/bi";

const list = [
  {
    id: 1,
    name: "Class 10",
    listItem: ["academic achievements:Secured a perfect 10 CGPA in class 10", "academic achievements:Secured a perfect 10 CGPA in class 10", "academic achievements:Secured a perfect 10 CGPA in class 10"]
  }, {
    id: 2,
    name: "Class 12",
    listItem: ["academic achievements:Secured a perfect 10 CGPA in class 12", "academic achievements:Secured a perfect 10 CGPA in class 12", "academic achievements:Secured a perfect 10 CGPA in class 12"]
  }, {
    id: 3,
    name: "B Tech",
    listItem: ["academic achievements:Secured a perfect 10 CGPA in B Tech", "academic achievements:Secured a perfect 10 CGPA in B Tech", "academic achievements:Secured a perfect 10 CGPA in B Tech"]
  }
];

const menu = [
  {
    id: 1,
    title: "Class 10",
  }, {
    id: 2,
    title: "Class 12",
  }, {
    id: 3,
    title: "B Tech",
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
        <div  className='dropdown'>
          <button className='dropdown-button' style={{background:"none",padding:"10px",fontSize:"38px",margin:"10px",borderStyle:"none"}}><BiDownArrow />
</button>
          <div className="dropdown-content">
            {
              menu.map((menu) => (
                <ul key={menu.id} >
                <li> <button onClick={() => change(menu.id)}>  {menu.title}</button></li>
              </ul>
            ))
          }
          </div>
        </div>
        <div className="academics">Academics</div>
      </div>
      <div>
        {
            lists.map((item)=>{
                return(
                    <List title={item}/>
                )
            })
        }
      </div>
    </div>
  );
};

export default Academics;

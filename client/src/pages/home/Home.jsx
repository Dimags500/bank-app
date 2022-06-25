
import {useState, useEffect}from 'react' ;
import {getAllUsers} from '../../services/users.service'

function Home() {

  const [users ,setUsers] = useState([]);
  const [loading ,setLoading] = useState(true);


  useEffect(() => {
    

  
    return () => {
      fetchData();
    }
  }, [])


  const fetchData = async ()=>{
    let data = await getAllUsers();
    console.log(data);
    setUsers(data) ;
    setLoading(false);


  }
  


  return (
    <div >
        {loading ? <h2>Loading</h2> : users.map(item => <p key={item._id}>{item.age}</p>)}
    </div>
  );
} 


export default Home;



import {useState, useEffect}from 'react' ;
import  User  from '../../components/user/User';
import {getAllUsers} from '../../services/users.service' ;
import'./home.css'

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
    <div  className='container users-container '>
        {loading ? <h2>Loading</h2> : users.map(item => <User key={item._id} data={item} /> )}
    </div>
  );
} 


export default Home;


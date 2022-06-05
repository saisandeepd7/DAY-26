import logo from './logo.svg';
import './App.css';

function App() {
  const data=[{
    access:"FREE",price:"$0",sub:"/month",user:"✔Single User",
    storage:"✔5GB Storage",projects:"✔ Unlimited Public Projects",group:"✔Community Access",project:"❌Unlimited Private Projects",support:"❌Dedicated Phone Support",domain:"❌Free Subdomain",report:"❌Monthly Status Reports",
  },{
    access:"PLUS",price:"$9",sub:"/month",user:"✔5 Users",
    storage:"✔50GB Storage",projects:"✔ Unlimited Public Projects",group:"✔Community Access",project:"✔ Unlimited Private Projects",support:"✔Dedicated Phone Support",domain:"✔Free Subdomain",report:"❌Monthly Status Reports",
  },{
    access:"PRO",price:"$49",sub:"/month",user:"✔ Unlimited Users",
    storage:"✔150GB Storage",projects:"✔ Unlimited Public Projects",group:"✔Community Access",project:"✔ Unlimited Private Projects",support:"✔Dedicated Phone Support",domain:"✔ Unlimited Free Subdomain",report:"✔Monthly Status Reports",
  },
]
  return (
    <div className="App">
     <div className='row'>
       {data.map((ur)=>(
         <Msg access={ur.access}
         price={ur.price}
         sub={ur.sub}
         user={ur.user}
         group={ur.group}
         storage={ur.storage}
         projects={ur.projects}
         project={ur.project}
         support={ur.support}
         domain={ur.domain}
         report={ur.report}/>
       ))}
       </div> 
       </div> 
  );
}
function Msg({access,price,sub,user,projects,group,project,storage,support,domain,report}){
  return(
    <div className='col-sm-4 md-4 lg-4'>
      <div className='card text-black bg-white'>
        <div className='card-body'>
          <h1 className='access'>{access}</h1>
          <h3 className='price'>{price}
          <sub className='sub'>{sub}</sub>
          </h3>
          <hr></hr>
          <ul>
            <li className='check'>{user}</li>
            <li className='check'>{storage}</li>
            <li className='check'>{projects}</li>
            <li className='check'>{group}</li>
            <li>{project}</li>
            <li>{support}</li>
            <li>{domain}</li>
            <li>{report}</li>
          </ul>
          <button className='btn btn-outline-primary w-100'>BUTTON</button>
        </div>
      </div>
    </div>
  )
}

export default App;

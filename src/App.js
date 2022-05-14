import './App.css'
import Profile from './Component/Profile/Profile'

function App() {
  const name = "person name";
  const bio = "person bio";
  const profession = "person profession";
  const consolelog=(x)=> console.log(`hy ${x}`)
  return (
    <div className='container'>
      <div className="card">
      <Profile name={name} bio={bio} profession={profession} consolelog={consolelog}>
        <img src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" alt='img' style={{width:"300px", borderRadius:"50px"}}/>
      </Profile>
      </div>
    </div>
  );
}

export default App;

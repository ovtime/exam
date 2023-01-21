import UserProvider from './components/User/UserProvider';
import Hearing from './components/Hearing/Hearing';


// TODO: set all text in resources
// TODO: create login screen to get userName and hearingId

const App = () => {
  return (
    <UserProvider userId={123}>
      <Hearing hearingId="123"></Hearing>
    </UserProvider>
  )
}

export default App;
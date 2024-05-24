import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { loginuser } from './redux/slices';
import { fetchapi, loginuser } from './redux/action';
import { useEffect, useState } from 'react';

function App() {
  // const auth = useSelector((data) => data.isauth)
  // console.log(auth)
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.data);
  const { isautha, isloading } = useSelector((state) => state.login);
  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')
  useEffect(() => {
    dispatch(fetchapi())
  }, [dispatch])
  useEffect(() => {
    console.log(data, 'sdfsd')
  }, [data])

  console.log(isautha, 'dfs')


  const login = (e) => {
    e.preventDefault()
    dispatch(loginuser({ user: user, pass: pass }))
    // console.log(user, pass)
  }

  return (
    <>
      {/* <button onClick={() => dispatch(loginuser('login'))}>login</button>
      <button onClick={() => dispatch(loginuser('logout'))}>logout</button> */}
      {loading && 'loading...'}
      {error && 'its error'}
      {data?.data?.map((item) => (<p>{item.name}</p>))}
      <form onSubmit={login}>
        <input type="text" value={user} onChange={(e) => setuser(e.target.value)} name="" id="" />
        <input type="text" value={pass} onChange={(e) => setpass(e.target.value)} name="" id="" />
        <button type='submit'>login {isloading && 'loding..'}</button>
      </form>
    </>
  );
}

export default App;

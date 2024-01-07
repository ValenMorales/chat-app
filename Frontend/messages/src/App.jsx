import io from 'socket.io-client';
import {useState, useEffect} from 'react';

const socket = io.connect("/");

function App(){

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      from: 'Me',
      body: message
    }
    socket.emit('message', message);
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    socket.on('message', receiveMessage);
    return () => {socket.off('message', 
      receiveMessage)};
  }, []);

    const receiveMessage = (message) => {
      setMessages((actualState) => [...actualState, message]);
    }
    return(
     
      <div className='h-screen bg-zinc-800 text-white flex items-center justify-center'>
        <form onSubmit={handleSubmit} className= 'bg-zinc-900 p-10' >
          <h1 className='text-2xl font-bold my-2'>Messages</h1>
        
      
        <ul>
          {messages.map((message, index) => (
            
            <li className = {`my-2 p-2 table text-sm rounded-md ${message.from === 'Me' ? 'bg-sky-700' : 'bg-black ml-auto'}`}
            
            key={index}>
              <span className='text-xs text-slate-500 '>{message.from}</span> 
              <span> {message.body}</span>
            </li>
          ))}
        </ul>
        <input  type="text" id="message" placeholder="Type your message"
          onChange={(e) => setMessage(e.target.value)}
          className='border-2 border-zinc-500 p-2 w-full text-black' />
         
        </form>
      </div>
    )
}

export default App;
 import React, { useEffect, useState } from 'react'
import { Col, Grid, Row }  from 'rsuite';
import Sidebar from '../Components/Sidebar';

 const Home = function(){
    const [message, setMessage] = useState('');
     const [input, setInput] = useState(''); 
     useEffect(() => { 
        const ws = new WebSocket('wss://backend-git-ioi-fvc7.vercel.app');
         ws.onopen = () => { 
            console.log('Connected to server'); 
        };
          ws.onmessage = (event) => { 
            setMessage(event.data); 
            console.log(event.data)
        };
         ws.onclose = () => { 
            console.log('Disconnected from server'); 
        }; 
        return () => { 
            ws.close(); 
        }; 
    }, []); 
    const sendMessage = (msg) => { 
        const ws = new WebSocket('wss://backend-git-ioi-fvc7.vercel.app');
         ws.onopen = () => { 
            ws.send(msg);

          };
          ws.onmessage = (event) => { 
            setMessage(event.data); 
            console.log(event.data)
        };
        }
    return(
        <>
            {/* <Grid fluid className='h-100 border'>
            <Row>
                <Col xs={24} md={9}>
                <Sidebar/>

                </Col>
            </Row>

            </Grid> */}
            <div className="App"> 
            <h1>WebSocket Client</h1> 
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /> 
            <button onClick={() => sendMessage(input)}>Send</button> 
            <p>Message from server: {message?message:''}</p>
            </div>

        </>
    )

}
export default Home;

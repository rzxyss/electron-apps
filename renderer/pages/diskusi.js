import Navbar from "../components/Navbar";
import io from 'socket.io-client';
import { useEffect, useState } from "react";

const socket = io("http://192.168.2.179:5050/", {
    transports: ["websocket", "polling"]
});

function Diskusi(){
    const [chat, setChat] = useState('') 
    const [currentChat, setCurrentChat] = useState([])
    
    useEffect(() => {
        socket.on('message', pesan => {
            setCurrentChat([...currentChat, pesan])
        })
    })

    const sendChat = (e) => {
        e.preventDefault();
        console.log(chat)
        socket.emit('message', chat)
        setChat('')
    }

    return(
        <>
        <Navbar />
        <div className="p-5">
            <div className="w-full">
                <div className="border rounded">
                    <div className="flex flex-col">
                        <h1 className="flex items-center justify-center text-lg font-semibold mt-1">Chat Forum</h1>
                        <form onSubmit={sendChat}>
                            <div className="flex flex-row p-2">
                                <input value={chat} onChange={(e) => {setChat(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Kirim Pesan" />
                                <button type='submit' className="text-white ml-2 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Kirim</button>
                            </div>
                        </form>
                        <div className="flex">
                            <div className="flex-row p-2 w-full space-y-1">
                                {
                                    currentChat.map((pesan) => {
                                        return(
                                            <div className="border rounded">
                                                <h1 className="text-lg font-semibold p-1">{pesan}</h1>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Diskusi
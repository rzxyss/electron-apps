export default function Navbar(){
    return(
        <nav className="w-full flex justify-around bg-white shadow-lg">
            <h1 className="text-lg p-2 font-bold">Omnijin</h1>
            <div className="flex text-gray-500">
                <ul className="flex space-x-5 items-center">
                    <li className="p-2 hover:text-white hover:bg-orange-500">
                        <a href="/home">Home</a>
                    </li>
                    <li className="p-2 hover:text-white hover:bg-orange-500">
                        <a href="diskusi">Diskusi</a>
                    </li>
                    <li className="p-2 hover:text-white hover:bg-orange-500">
                        <a href="contac">Contact</a>
                    </li>
                    <li className="p-2 hover:text-white hover:bg-orange-500">
                        <a href="galery">Galery</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
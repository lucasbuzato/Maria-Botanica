

function Home() {
    
    return ( 
        <div className="bg-footer-texture bg-cover bg-center p-10">
        <div className="flex flex-col bg-Cinza bg-opacity-65 h-[45rem] p-5 justify-end ">
            <div className="flex flex-row w-full">
                <div>
                    <img src="src/Componentes/img/Group 9.png" alt="" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white">Salvia.Ia</h1>
                    <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil at accusamus dolor doloremque eveniet esse dolore quo, dolores, excepturi rerum quae dolorum nulla quis sed atque distinctio culpa inventore.</p>
                </div>
            </div>
        <div>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 w-[65rem] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        </div>
        </div>
        
     );
} 

export default Home;

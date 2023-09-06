import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
    const {error, status, statusText} = useRouteError();
    console.log(error);
    
	return (
		<div className="bg-gray-900 h-screen grid content-center justify-center gap-5 text-center">
			<h1 className="text-5xl text-red-600 font-semibold">{status}</h1>
			<p className=" text-2xl text-red-600">{statusText}</p>
           
            <Link to={'/'} className="text-blue-600 dark:text-blue-500 hover:underline" >Regresar al Inicio</Link>
		</div>
	);
};
export default NotFound;

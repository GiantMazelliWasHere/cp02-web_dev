import { FaHeartBroken } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function PageNotFound() {
    return (
        <div className="flex justify-center m-72 gap-10">
            <IconContext.Provider value={{size:"4em"}}>
                <FaHeartBroken />
            </IconContext.Provider>
            <h1 className="font-mono text-5xl font-bold self-center">404 Page not found</h1>
        </div>
    )
}
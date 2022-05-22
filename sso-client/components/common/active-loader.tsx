import { useEffect } from "react";
import { MetroSpinner } from "react-spinners-kit";

const ActiveLoader = () => {

    useEffect(() => {
        let loaderContainer = document.querySelector("#loading-spinner") as HTMLElement;
        loaderContainer.style.visibility = "visible";
    });

    return (
        <div className="loader-modal h-screen" id="loading-spinner">
            <div className="loader">
                <MetroSpinner size={50} color="#686769" loading={true} />
            </div>
        </div>
    );
};

export default ActiveLoader;
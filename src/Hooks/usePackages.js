import { useEffect, useState } from 'react';

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("https://warm-cove-96847.herokuapp.com/package")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);
    
    return { packages };

};

export default usePackages;
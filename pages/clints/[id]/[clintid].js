import { useRouter } from "next/router";


const Clintd = () => {

    const router = useRouter();
     const {clintid}=router.query

    return (
        <div>
            <h1>This is the router clint is :{clintid} </h1>
        </div>
    );
};

export default Clintd;
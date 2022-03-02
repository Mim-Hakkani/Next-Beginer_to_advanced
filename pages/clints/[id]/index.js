import { useRouter } from "next/router";

const Cid = () => {
    const router=useRouter();
    const{id} = router.query
    return (
        <div>
            <h1>Clint 1st dynamic routing name is {id}</h1>
        </div>
    );
};

export default Cid;
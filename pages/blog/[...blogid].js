import { useRouter } from "next/router";

const Blogid = () => {
    const router = useRouter();

    const {blogid} =router.query 

    console.log(router.query);

    return (
        <div>
            <h1>Name is :{blogid} </h1>
        </div>
    );
};

export default Blogid;
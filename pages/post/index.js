import { useRouter } from "next/router";


const Post = () => {

   const router =useRouter();
   
    const handlesinglpage =()=>{

        router.push('/post/singlepost')
    }
    return (
        <div>
            <h1>Ehana Marketing Posts : </h1>
            <button onClick={handlesinglpage}>PostDetails</button>
        </div>
    );
};

export default Post;
import { useRouter } from "next/router";

const SinglePost = () => {
      const router = useRouter();
      const {post_id} =router.query
    return (
        <div>
            <h1>This is the post that number is :{post_id} </h1>
        </div>
    );
};

export default SinglePost;
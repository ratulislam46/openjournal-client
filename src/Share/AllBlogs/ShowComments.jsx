import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";


const ShowComments = ({ data, comments }) => {

    const { user } = use(AuthContext)

    // console.log(data);
    // console.log(comments);

    const [allComment, setallComment] = useState([]);
    // console.log(allComment);

    useEffect(() => {
        const remaining = comments.filter(owmComment => owmComment && owmComment.blogId === data._id);
        setallComment(remaining)
    }, [comments, data._id])


    return (
        <div>
            <h1 className="text-3xl lg:text-4xl mt-12 mb-3 font-serif text-gray-600">All Comments</h1>
            <div>
                {
                    allComment?.map(cmnts =>
                        <div cmnts={cmnts} key={cmnts._id} className="border mt-3 border-gray-400 px-2 py-2 rounded-md bg-gray-50 hover:bg-gray-200">
                            <h3 className="text-gray-600 px-1 inline-block bg-blue-100">{cmnts.userEmail}</h3>
                            <p className="text-xl">{cmnts.comment}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShowComments;
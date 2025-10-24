import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { MdOutlineWarningAmber } from "react-icons/md";

const ShowComments = ({ data, comments }) => {

    const { user } = use(AuthContext)

    const [allComment, setallComment] = useState([]);
    // console.log(allComment);

    useEffect(() => {
        const remaining = comments.filter(owmComment => owmComment && owmComment.blogId === data._id);
        setallComment(remaining)
    }, [comments, data._id])

    return (
        <div>
            {/* <h1 className="text-3xl lg:text-4xl mt-12 mb-3 font-serif text-base-content">All Comments</h1> */}
            <div className="space-y-4 mt-8">
                {allComment.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 border border-yellow-300/50 rounded-xl bg-yellow-50 dark:bg-base-200 transition-all duration-300">
                        <MdOutlineWarningAmber className="text-yellow-500 text-5xl mb-3 animate-bounce" />
                        <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 text-center">
                            This blog has no comment yet.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Be the first to share your thoughts 💬
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {allComment.map((cmnts) => (
                            <div
                                key={cmnts._id}
                                className="flex items-start gap-4 p-4 rounded-xl border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/70 dark:bg-base-200"
                            >
                                {/* 🧑 User Avatar (auto-generated initial) */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg uppercase shadow-sm">
                                    {cmnts?.userEmail?.charAt(0)}
                                </div>

                                {/* 💬 Comment Content */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-sm md:text-base font-semibold text-base-content">
                                            {cmnts?.userEmail}
                                        </h3>
                                        {/* Optional: add comment date if available */}
                                        {cmnts?.date && (
                                            <span className="text-xs text-gray-400">
                                                {new Date(cmnts?.date).toLocaleDateString()}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-base md:text-lg italic text-gray-500 mt-1 leading-relaxed">
                                        “{cmnts?.comment}”
                                    </p>

                                    {/* Subtle line */}
                                    <div className="mt-3 border-t border-gray-200 dark:border-gray-700"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShowComments;
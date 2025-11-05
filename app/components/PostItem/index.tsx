"use client";
import { useState } from "react";
import UpdatePostForm from "../UpdatePostForm";
import { deletePost } from "../../actions";
import { IPost } from "@/app/models/Post";

const PostItem = ({ post }: { post: IPost }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCloseEditing = () => setIsEditing(false);

  if (isEditing)
    return <UpdatePostForm post={post} onClose={handleCloseEditing} />;

  return (
    <div className="border p-3 rounded flex flex-col gap-3">
      {isEditing ? (
        <UpdatePostForm post={post} onClose={handleCloseEditing} />
      ) : (
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.description}</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 h-10 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <form action={deletePost} className="inline-flex">
              <input type="hidden" name="id" value={post._id} />
              <button
                type="submit"
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostItem;

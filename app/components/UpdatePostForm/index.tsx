"use client";

import { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { IPost } from "@/app/models/Post";
import { updatePost } from "../../actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-yellow-500 text-white px-2 rounded"
    >
      {pending ? "Saving..." : "Update"}
    </button>
  );
};

const UpdatePostForm = ({
  post,
  onClose,
}: {
  readonly post: IPost;
  readonly onClose: () => void;
}) => {
  const { pending } = useFormStatus();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted && !pending) {
      onClose();
    }
  }, [pending, submitted, onClose]);

  return (
    <form
      action={updatePost}
      className="flex gap-4 border p-4"
      onSubmit={() => setSubmitted(true)}
    >
      <input type="hidden" name="id" value={post._id} />
      <input
        type="text"
        name="title"
        defaultValue={post.title}
        className="border p-2 rounded max-w-[150px] flex-1 h-10"
        required
      />
      <input
        name="description"
        defaultValue={post.description}
        className="border p-2 rounded max-w-[150px] flex-1 h-10"
        required
      />
      <div className="inline-flex gap-4">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white px-3 py-1 rounded h-10"
        >
          Close
        </button>

        <SubmitButton />
      </div>
    </form>
  );
};

export default UpdatePostForm;

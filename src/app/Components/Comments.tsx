"use client";
import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const commentSave = localStorage.getItem("comments");
    if (commentSave) {
      setComments(JSON.parse(commentSave));
    }
  }, []);

  const addComments = () => {
    if (comment.trim() !== "") {
      const updateComments = [...comments, comment];
      setComments(updateComments);
      setComment("");
      localStorage.setItem("comments", JSON.stringify(updateComments));
    }
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mt-5">Comment Box:</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your Comment here"
        className="w-1/2 p-2 border-2 border-black rounded-sm"
      />
      <br />
      <button
        onClick={addComments}
        className="bg-slate-500 text-white font-medium p-2 mt-3 rounded-md"
      >
        Add Comment
      </button>

      <div className="mt-2">
        <h2 className="font-bold">Comments :</h2>
        {comments.length === 0 ? (
          <p>No Comment yet , Add yours </p>
        ) : (
          <ul>
            {comments.map((comment, indx) => (
              <li key={indx}>{comment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Comments;

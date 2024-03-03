import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { FaTrashAlt } from "react-icons/fa";
import { FETCH_POSTS_QUERY } from "./util/Grapgql";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ postId, callback, commentId }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const navigate = useNavigate();
  const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;
  const [deletePostOrMutation] = useMutation(mutation, {
    update(proxy) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });

      if (data && data.getPosts) {
        if (!commentId) {
          const updatedPosts = data.getPosts.filter((p) => p.id !== postId);
          const newData = { ...data, getPosts: updatedPosts };
          proxy.writeQuery({ query: FETCH_POSTS_QUERY, data: newData });
          // Navigate back to posts only if the deleted item is a single post
          navigate("/posts");
        }
      }

      if (callback) callback();
    },
    variables: {
      postId,
      commentId,
    },
  });

  const handleDelete = () => {
    // Open confirmation dialog before deleting the post
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    // Call deletePost mutation after user confirms deletion
    deletePostOrMutation();

    // Close confirmation dialog after deletion
    setConfirmOpen(false);
  };

  const handleCancelDelete = () => {
    // Close confirmation dialog if user cancels deletion
    setConfirmOpen(false);
  };

  return (
    <div className="deleteMe">
      {confirmOpen ? (
        <div className="deleteNote">
          <p>Wanna delete me 😥?</p>
          <button className="deleteNoteButton yes" onClick={handleConfirmDelete}>Yes</button>
          <button className="deleteNoteButton no" onClick={handleCancelDelete}>No</button>
        </div>
      ) : (
        <button className="deleteIcon" onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      )}
    </div>
  );
};

const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      commentCount
    }
  }
`;

export default DeleteButton;


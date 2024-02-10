import React,{useState} from "react";
import { useForm } from "./util/Hooks";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

import { FETCH_POSTS_QUERY } from "./util/Grapgql";

const PostForm = () => {
    const [errors, setErrors] = useState({});

  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: "",
  });

  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      const newPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({
        query: FETCH_POSTS_QUERY,
        data: { getPosts: newPosts },
      });
      values.body = "";
    },
     onError(error) {
      setErrors(error.graphQLErrors[0].extensions.errors);
    },
  });

  function createPostCallback() {
    createPost();
  }

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <h2>Create a post</h2>
        <input
          type="text"
          placeholder="Write post info here..."
          name="body"
          onChange={onChange}
          value={values.body}
        />
        <button type="Submit">Submit</button>
      </form>
   {Object.keys(errors).length > 0 && (
          <div>
            {Object.values(errors).map((value, index) => (
              <ul key={index}>
                <li>{value}</li>
              </ul>
            ))}
          </div>
        )}
    </div>
  );
};

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export default PostForm;

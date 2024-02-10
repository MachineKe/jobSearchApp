import React, {useState} from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { FaTrashAlt } from "react-icons/fa";


const DeleteButton = ({postId}) => {
const [confirmOpen,setConfirmOpen] = useState(false)
const [deletePost] = useMutation(DELETE_POST_MUTATION,{
  update(){
setConfirmOpen(false)
// TODO remove post from cache
  },
  
  variables: {
    postId
  }
})

  return (
    <div>

      
<button onClick={setConfirmOpen(true)}><FaTrashAlt /></button>

    </div>
  )
}

const DELETE_POST_MUTATION = gql`
mutation deletePost($postId: ID!){
  deletePost(postId: $postId)
}
`

export default DeleteButton
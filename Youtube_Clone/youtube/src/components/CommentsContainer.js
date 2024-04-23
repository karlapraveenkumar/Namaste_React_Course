import React from 'react'


const commentsData = [
  {
    name : "K Praveen Kumar",
    text : "Lorem ipsum dolor sit amet, consectetur adip",
    replies : [

    ]
  },
  {
    name : "K Praveen Kumar",
    text : "Lorem ipsum dolor sit amet, consectetur adip",
    replies : [
      {
        name : "K Praveen Kumar",
        text : "Lorem ipsum dolor sit amet, consectetur adip",
        replies : [
          
        ]
      },
      {
        name : "K Praveen Kumar",
        text : "Lorem ipsum dolor sit amet, consectetur adip",
        replies : [
          
        ]
      },
      {
        name : "K Praveen Kumar",
        text : "Lorem ipsum dolor sit amet, consectetur adip",
        replies : [
          {
            name : "K Praveen Kumar",
            text : "Lorem ipsum dolor sit amet, consectetur adip",
            replies : [
              {
                name : "K Praveen Kumar",
                text : "Lorem ipsum dolor sit amet, consectetur adip",
                replies : [
                  {
                    name : "K Praveen Kumar",
                    text : "Lorem ipsum dolor sit amet, consectetur adip",
                    replies : [
                      
                    ]
                  },
                  
                ]
              },
              
            ]
          },
          
        ]
      },
      
    ]
  },
  {
    name : "K Praveen Kumar",
    text : "Lorem ipsum dolor sit amet, consectetur adip",
    replies : [
      
    ]
  },
  {
    name : "K Praveen Kumar",
    text : "Lorem ipsum dolor sit amet, consectetur adip",
    replies : [
      
    ]
  },
  {
    name : "K Praveen Kumar",
    text : "Lorem ipsum dolor sit amet, consectetur adip",
    replies : [
      
    ]
  },
];

const Comment = ({data})=>{
  const {name, text, replies} = data;

  return (

  <div className='flex  p-2 my-2 shadow-sm bg-gray-100 rounded-lg'>
    <img 
      alt='user'
      src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' 
      className='h-10 w-10' 
    />
    <div className='px-3'>
      <p className='font-bold'>{name}</p>
      <p>{text}</p>
    </div>
</div>)

}

const CommentsList = ({comments})=>{
  // Don't use Index key
  return comments.map((comment, index) =>( 
    <div key={index}>
      <Comment  data={comment}/>
      <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
  
};

const CommentsContainer = () => {


  return (
    <div className='m-5 p-2'>
        <h1 className='text-xl font-bold'>Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
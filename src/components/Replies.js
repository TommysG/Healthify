import React from 'react'
import PostView from './PostView';


const manageDate = (date) =>{
    let diff =  new Date().getTime() - new Date(date).getTime()
    var seconds = Math.abs(diff) / 1000;

    if(seconds > 60){
      var minutes = seconds/60;

      if(minutes > 60){
        var hours = minutes/60;

        if(hours > 24){
          var days = hours/24;
          return Math.floor(days) + 'd';
        }

        return Math.floor(hours) + 'h';
      }

      return Math.floor(minutes) + 'm';
    }

    return Math.floor(seconds) + 's';
}

const Replies = ({replies, loading, error}) => {

    let postReplies;

     //show posts
     if(error){
        postReplies = <div>Error: {error.message}</div>
      }
      else if (!loading) {
        postReplies =  <div>Loading...</div>;
      }
      else{
        postReplies = replies.map((item) => (
            <PostView
                key={item.reply_id}
                user= {item.user_id}
                id={item.reply_id}
                title={item.title}
                content={item.comment}
                date={manageDate(item.createdAt)}
                upvotes = {item.totalVotes}
                // upvoteClick = {(e) => this.upvote(e, item.reply_id)}
                ></PostView>
               
        ));   
      }


    return (
        <div>
            {postReplies}
        </div>
    )
}

export default Replies

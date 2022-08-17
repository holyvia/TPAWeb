import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "../Post/Post";
// import FlipMove from "react-flip-move";

function Feed() {

const [input, setInput] = useState(() => "");
const [posts, setPosts] = useState(() => []);

return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      <div>
        {posts.map((item) => {
          if (item) {
            const {
              id,
              data: { name, description, message, photoUrl }
            } = item;
            return (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Feed;

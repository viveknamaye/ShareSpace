import "./FeedCard.css";

export default function FeedCard(room) {
  // console.log(room.data.tags);
  return (
    <>
      <div className="card">
        <img src="" alt="" />
        <div className="content">
          <div className="rname">{room.data.name}</div>
          <div className="location">{room.data.location}</div>
          <div className="size">{room.data.size} sq.foot room</div>
          <div className="rent">RS. {room.data.rent} onwards</div>
          <div className="tags">
            {room.data.tags.map((tag) => {
              return (
                <>
                  <p className="tag">{tag}</p>
                </>
              );
            })}
          </div>
          <div className="view">View Profile</div>
        </div>
        <div className="starcol">
          <div className="star">{room.data.stars}*</div>
        </div>
      </div>
    </>
  );
}

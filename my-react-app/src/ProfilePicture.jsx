
function ProfilePicture() {
  const imgUrl = "./src/assets/img.jpeg";

  const handleClick = (e) => e.target.style.display ="none";    

    return (
        <div>
        <img onClick={(e)=>handleClick(e)} src={imgUrl} alt="profile picture" />
        </div>
    );
}



export default ProfilePicture;
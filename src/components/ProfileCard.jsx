function ProfileCard() {
  return (
    <section className="pofileCard">
      <div className="info">
        <div className="imgCon">
          <img src="/images/avatar-jessica.jpeg" alt="profileImg" />
        </div>
        <h1 className="name inter-600">Jessica Randall</h1>
        <span className="inter-600">London, United Kingdom</span>
        <p className="inter-400">"Front-end developer and avid reader."</p>
      </div>
      <div className="buttonCon inter-700">
        <button className="inter-700">GitHub</button>
        <button className="inter-700">Frontend Mentor</button>
        <button className="inter-700">LinkedIn</button>
        <button className="inter-700">Twitter</button>
        <button className="inter-700">Instagram</button>
      </div>
    </section>
  );
}

export default ProfileCard;

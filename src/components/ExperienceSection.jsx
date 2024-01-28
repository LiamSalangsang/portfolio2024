
const ExperienceSection = (props) => {
  const {title, location, timeWorked, achievements,photos} = props;
  return <><section className="bg-black/60 text-white min-w-80">
    <div className=" text-center p-4 m-2 border-b border-b-white/50">{title}</div>
    <div className="flex gap-2 overflow-hidden" >
      <div className="p-2">
        <div>{location}</div>
        <div>{timeWorked}</div>
      </div>
      <img src={photos} className="w-[15rem] shadow-2xl" alt="" />
    </div>
    </section></>
};

export default ExperienceSection;
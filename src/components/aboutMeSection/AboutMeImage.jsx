const AboutMeImage = () => {
  return (
    <div className="h-[600px] w-[400px] relative">
      <div className="h-full w-full overflow-hidden rounded-[100px]">
        <img
          src="/images/aboutMePic.png"
          alt="About Me Image"
          className="h-full w-full object-contain animate-soft-bounce"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;

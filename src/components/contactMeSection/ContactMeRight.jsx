import ContactInfo from "./ContactInfo";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="/images/email-image.png"
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo />
      
    </div>
  );
};

export default ContactMeRight;
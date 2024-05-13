import ContactForm from "@/Components/ContactForm/ContactForm";

export default function page() {
  return (
    <div className="container box-shadow contact">
      <div className="title">
        <span>Contact</span>
        <div className="title-border"></div>
      </div>

      <div className="description">Have a question or want to work together?</div>
      <ContactForm />
    </div>
  );
}

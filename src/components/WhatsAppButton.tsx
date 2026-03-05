import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Hi Bright Angel Herbal Beauty Parlour, I would like to book a herbal treatment appointment."
  );

  return (
    <a
      href={`https://wa.me/919876543210?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-[#fff] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;

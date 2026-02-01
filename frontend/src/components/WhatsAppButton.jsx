import { schoolInfo } from "../data/mockData";

export default function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${schoolInfo.whatsapp.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-green-600"
    >
      WhatsApp
    </a>
  );
}

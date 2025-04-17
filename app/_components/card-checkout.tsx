import { ArrowRight, CheckCircle } from "lucide-react";

interface CardCheckoutProps {
  title: string;
  description: string;
  href: string;
}

const CardCheckout = ({ title, description, href }: CardCheckoutProps) => {
  return (
    <div className="w-full bg-white space-y-5 rounded-md p-10 md:w-2/5">
      <h3 className="text-[#101010] font-bold text-2xl md:text-3xl">{title}</h3>
      <ul className="space-y-3">
        <li className="flex text-[#616161] gap-1 items-center">
          <CheckCircle color="#BC2327" /> {description}
        </li>
        <li className="flex text-[#616161] gap-1 items-center">
          <CheckCircle color="#BC2327" /> Ative a sua personalidade
        </li>
        <li className="flex text-[#616161] gap-1 items-center">
          <CheckCircle color="#BC2327" /> Óculos Ideal
        </li>
        <li className="flex text-[#616161] gap-1 items-center">
          <CheckCircle color="#BC2327" /> Confiança e Estilo
        </li>
      </ul>
      <div className="flex flex-col">
        <span className="text-gray-500 text-sm">
          De R$: <s>247,00</s> por
        </span>
        <span className="text-black text-4xl font-semibold">R$ 99,90</span>
        <a
          href={href}
          target="_blank"
          className="bg-[#be2c31] w-full mt-4 mb-1 sm:max-w-[325px] transition-all rounded-sm hover:bg-[#95081E]"
        >
          <button className="flex justify-center gap-2 text-white font-medium p-2 w-full">
            Agendar Agora
            <ArrowRight />
          </button>
        </a>
        <span className="text-[#616161]  text-sm">
          Cartão de crédito ou Pix
        </span>
      </div>
    </div>
  );
};

export default CardCheckout;

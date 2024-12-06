import Image from "next/image";

interface CardBenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const CardBenefits = ({ icon, title, description }: CardBenefitsProps) => {
  return (
    <div className="flex items-start gap-3 bg-white p-4 rounded-md shadow-md">
      <Image src={icon} alt="icone oculos" width={38} height={38} />
      <div className="space-y-1">
        <h3 className="text-base font-bold text-[#101010]">{title}</h3>
        <p className="text-sm text-[#616161]">{description}</p>
      </div>
    </div>
  );
};

export default CardBenefits;

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CardBenefits from "./_components/card-benefits";
import CardCheckout from "./_components/card-checkout";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <ApresetationSection />
      <AboutSection />
      <VideoSection />
      <CheckoutSection />
    </>
  );
};

const BannerSection = () => {
  return (
    <section className="flex flex-col justify-start bg-cover bg-no-repeat bg-center bg-gradient-to-r from-[#220809] to-[#882124] md:justify-center md:bg-[url('/banner-home-d.webp')] md:min-h-[690px] ">
      <Image
        src="/banner-home-t.webp"
        alt="banner tablet"
        width={0}
        height={0}
        sizes="100vh"
        className="block w-full md:hidden"
      />
      <div className="px-4 pt-2 pb-12 max-w-6xl w-full mx-auto gap-4 flex flex-col items-start">
        <h1 className="max-w-[600px] mx-0 text-white font-bold text-3xl md:text-5xl">
          Descubra o poder dos óculos que revelam sua essência.
        </h1>
        <p className="max-w-[550px] text-white text-sm">
          Transforme a visão que as pessoas tem ao seu respeito, acesse o seu
          posicionamento e ative a sua personalidade através da minha
          consultoria.
        </p>
        <a
          href="#checkout"
          className="bg-[#be2c31] w-full sm:max-w-[325px] transition-all rounded-sm hover:bg-[#95081E]"
        >
          <button className="flex justify-center gap-2 text-white p-2 font-medium w-full">
            Agendar Agora
            <ArrowRight />
          </button>
        </a>
      </div>
    </section>
  );
};

const ApresetationSection = () => {
  return (
    <section className="px-4 py-8 md:py-16">
      <div className="flex flex-col gap-6 items-center max-w-5xl mx-auto bg-white shadow-xl rounded-md p-8 md:flex-row">
        <div className="space-y-2 w-full">
          <h2 className="text-[#101010] text-3xl font-bold pb-4">
            Uma experiência única e personalizada
          </h2>
          <p className="text-[#616161] text-sm">
            Você já parou para pensar no impacto que os óculos têm na sua
            imagem? Eles não são apenas para enxergar melhor, são uma extensão
            de quem você é e uma ferramenta poderosa para transmitir sua
            personalidade.
          </p>
          <p className="text-[#616161] text-sm">
            A{" "}
            <span className="font-bold">Consultoria de Estilo para Óculos</span>{" "}
            é um serviço personalizado pensado para você que quer encontrar o
            modelo ideal, que harmonize com o seu formato de rosto, combine com
            seu estilo e transmita exatamente a mensagem que você deseja passar.
          </p>
          <p className="text-[#616161] text-sm">
            Seja para um ar mais sério, criativo ou descontraído, nós ajudamos
            você a descobrir a armação perfeita que representa sua essência.
          </p>
          <p className="text-[#616161] text-sm">
            Quer transformar os óculos no seu maior aliado? Agende agora a sua
            consultoria, presencial ou online, e descubra como elevar sua imagem
            a outro nível.
          </p>
        </div>
        <Image
          src="/banner-apresetation.webp"
          alt=""
          width={0}
          height={0}
          sizes="100vh"
          quality={100}
          className="w-full max-w-[423px]"
        />
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8 flex flex-col items-center gap-6 md:py-16 md:flex-row">
      <Image
        src="/banner-about.webp"
        alt="banner da sessão sobre"
        width={0}
        height={0}
        sizes="100vh"
        quality={100}
        className="w-full max-w-[500px]"
      />
      <div className="w-full">
        <h2 className="text-[#101010] text-3xl font-bold">Quem sou</h2>
        <h3 className="text-[#BC2327] text-sm pb-3">
          Proprietária da Óticas Ana Luf
        </h3>
        <div className="space-y-2">
          <p className="text-[#616161] text-sm">
            Meu nome é Ana Paula, sou mãe, empresária e apaixonada por óculos.
            Desde 2017, dedico minha carreira a explorar e compreender como esse
            acessório pode ir além de sua funcionalidade e transformar vidas,
            promovendo não apenas uma melhor visão, mas também um posicionamento
            de imagem marcante.
          </p>
          <p className="text-[#616161] text-sm">
            Desde então, tenho me dedicado a estudar o universo do
            posicionamento de imagem, entendendo como os óculos desempenham um
            papel essencial nesse processo. Estou aqui para te ajudar a
            encontrar o modelo ideal, aquele que não só atende às suas
            necessidades visuais, mas também expressa sua personalidade e
            valoriza quem você é. Vamos juntos descobrir o óculos perfeito para
            você!
          </p>
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section className="px-4 py-8 md:py-16">
      <iframe
        src="https://www.youtube.com/embed/ob8YD-iuzTo?si=PpLP_fWgXOKkUvqd"
        className="w-full min-h-[500px] max-w-4xl mx-auto rounded-md"
        allowFullScreen
      />
    </section>
  );
};

const CheckoutSection = () => {
  return (
    <section className="bg-[#882124] px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-4">
          <h2 className="text-white font-bold text-3xl">
            Transforme seu estilo com nossa consultoria
          </h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <CardBenefits
              icon="/icons/icone-oculos.svg"
              title="Óculos que valorizam você"
              description="Encontre armações que harmonizam com seu rosto e reforçam sua confiança, refletindo sua personalidade."
            />
            <CardBenefits
              icon="/icons/icone-conversa.svg"
              title="Atendimento exclusivo"
              description="Atendimento presencial ou online, focado em cada detalhe para te orientar a escolha perfeita."
            />
            <CardBenefits
              icon="/icons/icone-guia.svg"
              title="Guia personalizado"
              description="Receba orientações e dicas práticas para usar seus óculos com estilo e transmitir autenticidade."
            />
          </div>
        </div>
        <Image
          src="/banner-checkout.webp"
          alt="banner da sessão de checkout"
          width={0}
          height={0}
          sizes="100vh"
          className="w-full max-w-[700px] mx-auto rounded-md"
        />
        <div
          id="checkout"
          className="flex justify-center w-full flex-col gap-6 md:flex-row"
        >
          <CardCheckout
            title="On-line"
            description="Consultoria individualizada (1:30h)"
            href="https://pay.cakto.com.br/93GPCre"
          />
          <CardCheckout
            title="Presencial"
            description="Consultoria individualizada"
            href="https://pay.cakto.com.br/634U5W2"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;

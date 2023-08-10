import Image from 'next/image'
export default function Home() {

  return (
    <main>
      {/* max-w-[75rem] px-[32px] mx-auto */}
      <nav className=" max-w-[75rem] h-[88px] mx-auto px-[32px] flex items-center">
        <section className='items-center flex flex-row'>
          <Image
            src="/auto_awesome_black_24dp 1.svg"
            alt="Logo"
            className="block m-0"
            width={24}
            height={24}
          />
          <h1 className="font-bold text-base pl-2">Fulano de Tal</h1>

        </section>
        <section className='items-center flex flex-row space-x-[32px] pl-[350px] font-medium text-base'>
          <p className='font-medium text-base'>Sobre mim</p>
          <p className='font-medium text-base'>Skills</p>
          <p className='font-medium text-base'>Hobbies</p>
          <p className='font-medium text-base'>Formação</p>
          <p className='font-medium text-base'>Projetos</p>
          <p className='font-bold text-base'>contato@fulana.com</p>
        </section>
      </nav>

      <div className='w-auto min-h-[363px] mt-8 max-w-[75rem] px-[32px] mx-auto flex  justify-center flex-row-reverse'>
        <Image
          src="/unsplash_anAAZ0nrqBY.png"
          alt="Logo"
          className="m-0 h-[368px] pl-[17px]"
          width={368}
          height={368}
        />
        <div>
          <h1 className='font-bold text-[52px] mt-[61px] text-[#464646]'>
            Olá, meu nome é Fulana de Tal e construo páginas web
          </h1>
          <h2 className='font-regular text-[22px] my-[24px]'> Eu sou formada em lorem ipsum sit amet consectetur e atualmente estou participando no projeto Oracle ONE na Alura.</h2>
          <section className='justify-start flex flex-row items-center space-x-[32px] font-medium  mb-[61px]'>
            <div className='flex flex-row'>
              <p className='font-medium text-base pr-1'>Github</p>
              <Image src="/arrow_back_black_24dp 1.svg"
                alt='Link'
                className="block m-0"
                width={24}
                height={24}
              />
            </div>
            <div className='flex flex-row'>
              <p className='font-medium text-base pr-1'>Linkedin</p>
              <Image src="/arrow_back_black_24dp 1.svg"
                alt='Link'
                className="block m-0"
                width={24}
                height={24}
              />
            </div>
            <div className='flex flex-row'>
              <p className='font-medium text-base pr-1'>Instagram</p>
              <Image src="/arrow_back_black_24dp 1.svg"
                alt='Link'
                className="block m-0"
                width={24}
                height={24}
              />
            </div>
            <div className='flex flex-row'>
              <p className='font-medium text-base pr-1'>Curriculo</p>
              <Image src="/arrow_back_black_24dp 1.svg"
                alt='Link'
                className="block m-0"
                width={24}
                height={24}
              />
            </div>
          </section>
        </div>
      </div>
      <div className='w-auto h-[383px] max-w-[75rem] px-[32px] mt-[32px] mx-auto flex justify-center flex-col'>
        <h1 className='font-bold text-[32px] '>Sobre mim</h1>
        <p className='font-normal text-base my-4 max-w-[751px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper sagittis ligula et lacinia.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper sagittis ligula et lacinia. Aenean sit amet felis venenatis, egestas metus vitae, aliquet metus.</p>
        <Image
          src="/image 4.png"
          alt="Sign"
          className="m-0"
          width={140}
          height={52}
        />
      </div>

      <div className='flex flex-col'>
        <h1 className='font-bold text-[32px]  max-w-[75rem] mx-auto mt-[32px] self-center'>Skills</h1>
        <section className='flex flex-row max-w-[75rem] mx-auto mt-[32px] gap-4'>
          <Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          />
          <Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          /><Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          /><Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          /><Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          /><Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          />
        </section>
        <h1 className='font-bold text-[32px]  max-w-[75rem] mx-auto mt-[88px] self-center'>Hobbies</h1>
        <section className='flex flex-row max-w-[75rem] mx-auto mt-[32px] gap-4'>
          <Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          />
          <Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          /><Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          /><Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          /><Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          /><Image
            src="/Skill.png"
            alt="Logo"
            className="m-0"
            width={176}
            height={174}
          />
        </section>
        <h1 className='font-bold text-[32px]  max-w-[75rem] mx-auto mt-[88px] self-center'>Formação acadêmica</h1>
        <section className='flex flex-row max-w-[75rem] mx-auto mt-[32px] gap-4'>
          <div>
            <Image
              src="/Imagem.png"
              alt="Logo"
              className="m-0"
              width={368}
              height={286}
            />
            <p className='font-bold text-[22px] pb-2'>Analise de dados</p>
            <p className='font-medium text-[16px]'>2018 UFRP</p>
          </div>
          <div>
            <Image
              src="/Imagem.png"
              alt="Logo"
              className="m-0"
              width={368}
              height={286}
            />
            <p className='font-bold text-[22px] pb-2'>Analise de dados</p>
            <p className='font-medium text-[16px]'>2018 UFRP</p>
          </div>
          <div>
            <Image
              src="/Imagem.png"
              alt="Logo"
              className="m-0"
              width={368}
              height={286}
            />
            <p className='font-bold text-[22px] pb-2'>Analise de dados</p>
            <p className='font-medium text-[16px]'>2018 UFRP</p>
          </div>
        </section>
      </div>

      <div className='flex flex-col mt-[114px] max-w-[75rem] px-[12px] mx-auto'>
        <h1 className='font-bold text-[32px]  max-w-[75rem] mx-auto mt-[32px] self-center'>Experiência profissional</h1>
        <div className='flex flex-row items-center'>
          <Image
            src="/Rectangle.png"
            alt="Logo"
            className="m-0 h-[368px] pl-[17px] mt-[32px]"
            width={705}
            height={406}
          />
          <div className='flex flex-col mx-[26px]'>
            <h1 className='font-bold text-[22px]'>Decodificador de texto</h1>
            <p>Challenge Alura
              Codificador</p>
            <div className=' mt-[6px] items-center flex flex-row'>
              <button
                type="button"
                className="inline-block border-2 leading-5 border-primary p-4 font-normal text-[16px] text-[#2A7AE4]  transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 border-[#2A7AE4] active:text-primary-700 mr-4"
                data-te-ripple-init>
                Repositório
              </button >
              <button
                type="button"
                className="inline-block leading-5 border-primary p-4 font-normal text-[16px] text-[#FFFF] bg-[#2A7AE4] transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
                data-te-ripple-init>
                Ver Demo
              </button >
            </div>

          </div>
        </div>
        {/* copias */}

        <div className='flex flex-row items-center mt-16'>
          <Image
            src="/Rectangle.png"
            alt="Logo"
            className="m-0 h-[368px] pl-[17px] mt-[32px]"
            width={705}
            height={406}
          />
          <div className='flex flex-col mx-[26px]'>
            <h1 className='font-bold text-[22px]'>Decodificador de texto</h1>
            <p>Challenge Alura
              Codificador</p>
            <div className=' mt-[6px] items-center flex flex-row'>
              <button
                type="button"
                className="inline-block border-2 leading-5 border-primary p-4 font-normal text-[16px] text-[#2A7AE4]  transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 border-[#2A7AE4] active:text-primary-700 mr-4"
                data-te-ripple-init>
                Repositório
              </button >
              <button
                type="button"
                className="inline-block leading-5 border-primary p-4 font-normal text-[16px] text-[#FFFF] bg-[#2A7AE4] transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
                data-te-ripple-init>
                Ver Demo
              </button >
            </div>

          </div>
        </div>
        <div className='flex flex-row items-center mt-16'>
          <Image
            src="/Rectangle.png"
            alt="Logo"
            className="m-0 h-[368px] pl-[17px] mt-[32px]"
            width={705}
            height={406}
          />
          <div className='flex flex-col mx-[26px]'>
            <h1 className='font-bold text-[22px]'>Decodificador de texto</h1>
            <p>Challenge Alura
              Codificador</p>
            <div className=' mt-[6px] items-center flex flex-row'>
              <button
                type="button"
                className="inline-block border-2 leading-5 border-primary p-4 font-normal text-[16px] text-[#2A7AE4]  transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 border-[#2A7AE4] active:text-primary-700 mr-4"
                data-te-ripple-init>
                Repositório
              </button >
              <button
                type="button"
                className="inline-block leading-5 border-primary p-4 font-normal text-[16px] text-[#FFFF] bg-[#2A7AE4] transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
                data-te-ripple-init>
                Ver Demo
              </button >
            </div>

          </div>
        </div>
        <div className='flex flex-row items-center mt-16'>
          <Image
            src="/Rectangle.png"
            alt="Logo"
            className="m-0 h-[368px] pl-[17px] mt-[32px]"
            width={705}
            height={406}
          />
          <div className='flex flex-col mx-[26px]'>
            <h1 className='font-bold text-[22px]'>Decodificador de texto</h1>
            <p>Challenge Alura
              Codificador</p>
            <div className=' mt-[6px] items-center flex flex-row'>
              <button
                type="button"
                className="inline-block border-2 leading-5 border-primary p-4 font-normal text-[16px] text-[#2A7AE4]  transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 border-[#2A7AE4] active:text-primary-700 mr-4"
                data-te-ripple-init>
                Repositório
              </button >
              <button
                type="button"
                className="inline-block leading-5 border-primary p-4 font-normal text-[16px] text-[#FFFF] bg-[#2A7AE4] transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
                data-te-ripple-init>
                Ver Demo
              </button >
            </div>

          </div>
        </div>
      </div>
      <div className='flex flex-col mt-[114px] max-w-[75rem] px-[12px] mx-auto'>
        <div className='flex flex-row justify-items-start'>
          <Image
            src="/unsplash_JYGnB9gTCls.png"
            alt="Logo"
            className="m-0 h-[563px]"
            width={494}
            height={563}
          />
          <div className='flex flex-col mx-[26px]'>
            <h1 className='font-bold text-[22px]'>Contato</h1>
            <p>Challenge Alura
              Codificador</p>
            <form className=' mt-[6px] items-center flex flex-row'>
              <button
                type="button"
                className="inline-block leading-5 border-primary p-4 font-normal text-[16px] text-[#FFFF] bg-[#2A7AE4] transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
                data-te-ripple-init>
                Enviar Mensagen
              </button >
            </form>

          </div>
        </div>
      </div>
    </main >
  )
}

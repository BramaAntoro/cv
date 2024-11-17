import picture from '../assets/img/Profile.png';

export function Profile() {
  return (
    <section id="home" className="home container px-14 mt-14 md:mt-5">
      <div className="flex items-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-2/3 order-2 md:order-1">
          <h3 className="font-semibold text-5xl">Hi! I am</h3>
          <h1 className="font-bold text-7xl">Muhammad Brama Antoro</h1>
          <p>I am a Web Developer in Indonesia</p>
        </div>
        <div className="flex justify-center md:justify-end md:w-1/3 w-full order-1 md:order-2">
          <img src={picture} alt="Portrait" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
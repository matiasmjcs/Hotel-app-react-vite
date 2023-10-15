const Footer = () => {
  return (
    <footer className="bg-[#1976D2] py-8 text-white">
      <section className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <article className="w-5/6 p-2">
          <h2 className="text-2xl font-bold">Personal Project</h2>
          <p className="text-sm mt-2">
            This is a personal project to showcase my skills. The backend is hosted on Render on a shared server and goes to sleep when inactive, so it may take up to 30 seconds to wake up.
          </p>
        </article>
        <article className="w-5/6 p-2">
          <h2 className="text-2xl font-bold">Contact</h2>
          <ul className="mt-2">
            <li className="text-sm">Email: matiasmejiascisternas@gmail.com</li>
            <li className="text-sm">LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/matias-mejias-cisternas" className="text-blue-300 hover:underline">Your Profile</a></li>
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;

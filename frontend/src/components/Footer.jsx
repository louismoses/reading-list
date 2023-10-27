const Footer = () => {
  const currentYear = new Date();
  return (
    <div className="text-center bg-slate-300 p-4 absolute bottom-0 w-full text-slate-600">
      <p>Reading List ©️ {currentYear.getFullYear()}</p>
    </div>
  );
};

export default Footer;

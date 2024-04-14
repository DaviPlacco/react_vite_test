
const CopyrightNotice = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p className="text-lg text-gray">© {currentYear} todos os direitos reservados</p>
    </div>
  )
}

export default CopyrightNotice;
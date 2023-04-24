function Footer({ texto }: { texto: string }) {
  return (
    <footer>
      <h2 className="progress">{texto}</h2>
    </footer>
  );
}

export default Footer;

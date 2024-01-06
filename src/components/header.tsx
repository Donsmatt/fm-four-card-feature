type HeaderProps = {
  header: string;
  headerSpan: string;
  text: string;
};

const Header = (props: HeaderProps) => {
  return (
    <header className="p-4">
      <div className="m-auto text-center mb-4">
        <h1 className=" text-3xl font-light">{props.header}</h1>
        <span className="font-bold text-accent text-3xl">{props.headerSpan}</span>
      </div>
      <p className="text-sm text-primary max-w-[420px] m-auto text-center">
        {props.text}
      </p>
    </header>
  );
};

export default Header;

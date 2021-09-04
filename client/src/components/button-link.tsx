interface Props {
  name: string;
  link: string;
}

const ButtonLink = ({ name, link }: Props) => {
  return (
    <a href={link} className="btn btn-outline-info">
      {name}
    </a>
  );
};

export default ButtonLink;

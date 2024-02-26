import { Link } from 'react-router-dom';

interface Menu {
  idx?: string;
  menuName: string;
  imgsrc: string;
  imgalt: string;
  LinkTo: string;
}

function FormOfMenu({ LinkTo, menuName, imgsrc, imgalt }: Menu) {
  return (
    <>
      <Link to={LinkTo}>
        <img src={imgsrc} alt={imgalt} loading="lazy" />
      </Link>
      <span>{menuName}</span>
    </>
  );
}

export default FormOfMenu;

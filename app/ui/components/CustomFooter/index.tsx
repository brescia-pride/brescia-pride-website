import Block from "../Block";

const CustomFooter = () => {
  return (
    <Block className={`col-span-6 p-6 bg-lilac text-green`}>
      <div
        className={
          "list-none flex flex-col gap-4 md:flex-row md:justify-between md:items-end"
        }
        tabIndex={0}
      >
        <div className="wrap">
          <span>
            <b>Comitato Brescia Pride ETS</b>
          </span>
          <span>
            <ul>
              <li>
                <b>Sede legale</b>: Via F.lli Folonari 7, Brescia 25100
              </li>
              <li>
                <b>Codice fiscale</b>: 98201800178
              </li>
              <li>
                <b>PEC</b>: comitatobresciapride@pec-legal.it
              </li>
            </ul>
          </span>
        </div>
        <a href="/resources">
          <b className="text-2xl uppercase font-extrabold __className_bd8993">
            Archivio
          </b>
        </a>
      </div>
    </Block>
  );
};

CustomFooter.displayName = "CustomFooter";

export default CustomFooter;

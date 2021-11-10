function SelectMenu({urlHome, home, urlSobre, sobre, urlContato, contato}) {
  return(
    <>
      <li href={urlHome}> {home} </li>
      <li href={urlSobre}> {sobre} </li>
      <li href={urlContato}> {contato} </li>
    </>
  )
}

export default SelectMenu;

import './FooterNav.css'

interface FooterData {
  index: number,
  ChangeIndex: Function,
  numberOfIndexs: number
}

function FooterNav({ index, ChangeIndex, numberOfIndexs }: FooterData) {
  const navButtons = []
  for (let Bindex = 1; Bindex <= numberOfIndexs; Bindex++) {
    navButtons.push(
      <button key={Bindex}
        className={(Bindex == index) ? "FooterNav--button selected--FooterNav--button" : 'FooterNav--button'}
        onClick={() => ChangeIndex((prev: FooterData) => { return { ...prev, pageSelceted: Bindex } })}

      >{Bindex}</button>
    )
  }
  return (
    <div className='FooterNav--container'>
      {navButtons}
    </div>
  )
}

export default FooterNav
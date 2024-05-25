import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_inner default_size">
        <ul className="footer_nav">
          <li className="footer_nav_item">
            <Link href="https://www.ibkbox.net/CMS309/onload.do?dcffStplId=10005&dcffStplDtlSqn=1" target="_blank">
              IBKBOX 이용약관{' '}
            </Link>
          </li>
          <li className="footer_nav_item">
            <Link href={'https://www.ibkbox.net/CMS309/onload.do?dcffStplId=10027&dcffStplDtlSqn=1'} target="_blank">
              개인정보처리방침
            </Link>
          </li>
        </ul>
        <div className="footer_info_wrap">
          <h2 className="logo">
            <Image src="/assets/images/new_logo.png" alt="Ibk bank Logo" width={100} height={24} priority />
          </h2>
          <p className="notice">
            IBK BOX는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은
            판매자에게 있습니다.
          </p>
          <p className="copyright">Copyright ⓒ IBK(INDUSTRIAL BANK OF KOREA). All right reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

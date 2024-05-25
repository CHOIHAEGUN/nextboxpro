/**
 * 로그인 iframe 창
 * @return
 */
export default function LoginIframe(props: { open: boolean }) {
  //   return <iframe src="https://www.youtube.com/watch?v=gfU1iZnjRZM" frameBorder="0" allowFullScreen />
  //   console.log('NEXT_PUBLIC_BOX_URL', process.env.NEXT_PUBLIC_BOX_URL)
  return (
    <div className={`pcLoginWrap ` + (props.open ? 'on' : '')} id="pcLoginWrap">
      <div className="bg"></div>
      <div className="pclayerPopCont">
        <iframe
          src={`${process.env.NEXT_PUBLIC_BOX_URL}/COM001/login.do?callType=spa`}
          width="100%"
          height="100%"
          allowFullScreen
          id="ifrmPage"
        />
      </div>
    </div>
  )
}

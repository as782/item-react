import React, { Fragment } from 'react'
import { Footerstyle, FooterCenter, FooterCopy } from './footer.js'

export default function Footer() {


  const footerLinks = [
    {
      title: "服务条款",
      link: "https://st.music.163.com/official-terms/service"
    },
    {
      title: "隐私政策",
      link: "https://st.music.163.com/official-terms/privacy"
    },
    {
      title: "儿童隐私政策",
      link: "https://st.music.163.com/official-terms/children"
    },
    {
      title: "版权投诉指引",
      link: "https://music.163.com/st/staticdeal/complaints.html"
    },
    {
      title: "意见反馈",
      link: "#"
    }
  ]

  const footerImages = [
    {
      logoclass: 'logo1',
      title: '音乐开放平台',
      link: "https://developer.music.163.com/st/developer",
    },
    {
      logoclass: 'logo2',
      title: '云村交易所',
      link: "https://music.163.com/st/web-sublicense/home",
    },
    {
      logoclass: 'logo3',
      title: 'Amped Studio',
      link: "https://web-amped.music.163.com/",
    },
    {
      logoclass: 'logo4',
      title: '用户认证',
      link: "https://music.163.com/st/userbasic#/auth",
    },
    {
      logoclass: 'logo5',
      title: '音乐交易平台',
      link: "https://music.163.com/st/ad-cms-bills/mlogin?from=mainStation",
    },
    {
      logoclass: 'logo6',
      title: '赞赏',
      link: "https://music.163.com/web/reward",
    },
    {
      logoclass: 'logo7',
      title: '视频激励',
      link: "https://music.163.com/st/ncreator/revenue-plan",
    }
  ]
  // 底部
  const showUnits = item => {
    return (
      <li key={item.link} className="item">
        <a href={item.link} rel="noopener noreferrer" target="_blank" className={`logo ${item.logoclass}`}> </a>
        <span className="title">{item.title}</span>
      </li>
    )
  }
  return (
    <Footerstyle>
      <div className='footerbox'>
        <div className="footer">
          <div className="wrap">
            <FooterCenter>
              <ul className="center">
                {footerImages.map(item => showUnits(item))}
              </ul>
            </FooterCenter>
            <FooterCopy>
              <div className="copy">
                <p className="link">
                  {
                    footerLinks.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          <a href={item.link} className="item">{item.title}</a>
                          <span className='line'>|</span>
                        </Fragment>
                      )
                    })
                  }
                </p>
                <p className="footer-text">
                  <a href="https://jubao.163.com" target="_blank" rel="noopener noreferrer"  className="sep">廉正举报</a>
                  <span className="sep span">不良信息举报邮箱: 51jubao@service.netease.com</span>
                  <span className="span">客服热线：95163298</span>
                </p>
                <p className="footer-text">
                  <span className="span">互联网宗教信息服务许可证：浙（2022）0000120</span>
                  <span className="span">增值电信业务经营许可证：浙B2-20150198</span>
                  <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank" className="alink s-fc3">粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
                </p>
                <p className="footer-text">
                  <span className="sep span">网易公司版权所有©1997-2023</span><span className="span">杭州乐读科技有限公司运营：</span><a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24498695788/9de7/9e78/fc8d/35d33543c69c9f4c5ac8aeb937217597.png" rel="noopener noreferrer"  target="_blank" className="alink s-fc3">浙网文[2021] 1186-054号</a>
                  <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target="_blank" className="alink s-fc3 police-link">
                    <span className="police-logo"></span>
                    <span className="police-text">浙公网安备 33010902002564号</span>
                  </a>
                </p>
              </div>
            </FooterCopy>
          </div>
        </div>
      </div>
    </Footerstyle>
  )
}

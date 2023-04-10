import React from 'react'
import propTypes from 'prop-types'
import { ThemeHeaderStyled } from './themeheader'
export default function ThemeHeader(props) {
    return (
        <ThemeHeaderStyled className='sprite_02'>
            <a href="#!" className='themetitle'>{props.title}</a>
            <div className='tab'>
                <ul className='tablist'>
                    {props.keyword.map((item, index) => {
                        return (
                            <li key={index}  className='listitem'>
                                <a href="#!">{item}</a>
                                <span className='line'>|</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <span className='more'>
                <a href="#!" className='more-text'>更多</a>
                <i className='more-icon sprite_02'>&nbsp;</i>
            </span>
        </ThemeHeaderStyled>
    )
}

// 对传入该组建的标题和关键字的类型进行限制，并且赋予默认值。

ThemeHeader.propTypes = {
    // 必填标题
    title: propTypes.string.isRequired,
    // 推荐的关键值分类数组
    keyword: propTypes.array,

}

ThemeHeader.defaultProps = {
    //默认空数组
    keyword: []
}
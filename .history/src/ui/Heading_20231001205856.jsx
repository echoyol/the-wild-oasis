import styled, { css } from 'styled-components'

// const test = css`
//   text-align: center;
//   ${10 > 5 && 'background-color:yellow'}
// `

const Heading = styled.h1`
  ${(props) =>
    props.type === 'h1' &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}

  line-height:1.2
`
export default Heading

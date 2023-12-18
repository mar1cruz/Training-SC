import styled, {css} from "styled-components";

type BtnPropType = {
    primary?:boolean
    outlined?:boolean
    color?: string
    backgroundColor?:string
}

export const Btn = styled.button<BtnPropType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 10px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  border: none;
  
  ${props => props.primary && css<BtnPropType>`
    color: ${props.color || '#FFF'};
    background: ${props.backgroundColor || '#4E71FE'};
    transition: color .3s ease, background .3s ease;
    margin-right: 20px;

    &:hover {
      color: ${props.backgroundColor || '#4E71FE'};
      background: ${props.color || '#FFF'};
      border: 2px solid ${props.backgroundColor || '#4E71FE'};
    }
  `}

  ${props => props.outlined && css<BtnPropType>`
    border: 2px solid ${props.color || '#4E71FE'};
    color: ${props.color || '#4E71FE'};
    transition: color .3s ease, background .3s ease;

    &:hover {
      background: ${props.color || '#4E71FE'};
      color: ${props.backgroundColor || '#FFF'};
    }
  `}
`
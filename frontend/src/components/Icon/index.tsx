import React from 'react'
import Close from './Close'
import MaxSize from './MaxSize'
import MinSize from './MinSize'
import NormalSize from './NormalSize'
import Plus from './Plus'
import ThreeDots from './ThreeDots'
import Person from './Person'
const SvgMap = {
  Person,
  ThreeDots,
  Plus,
  Close,
  MaxSize,
  MinSize,
  NormalSize,
}
export interface IProps extends React.SVGProps<SVGSVGElement> {
  type: keyof typeof SvgMap
}
export default function ICon(props: IProps) {
  const { type, ...svgAttr } = props
  const IConCom = SvgMap[type]
  return <IConCom {...svgAttr} />
}

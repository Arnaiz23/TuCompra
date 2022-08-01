import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const IconHome = (props) => (
  <Svg height={21} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m1.5 10.5 9-9 9 9" />
      <Path d="M3.5 8.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    </G>
  </Svg>
)

export default IconHome

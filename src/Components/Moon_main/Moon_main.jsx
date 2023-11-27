import React from 'react'


import Moon_dev from '../Moon_dev/Moon_dev'
import Moon_features from '../Moon_features/Moon_features'
import Moon_header from '../Moon_header/Moon_header'
import Moon_token from '../Moon_token/Moon_token'
import MoonFaq from '../MoonFaq/MoonFaq'
import Moon_u_footer from '../Moon__upper_footer/Moon_u_footer'
import Moon_choose from '../Moon_choose/Moon_choose'
import Moon_footer from '../Moon_footer/Moon_footer'

function Moon_main() {
  return (
    <div>
      <Moon_header />
      <Moon_token />
      <Moon_choose />
      <Moon_features />

      <MoonFaq />
      <Moon_u_footer />
      <Moon_footer />



    </div>
  )
}

export default Moon_main

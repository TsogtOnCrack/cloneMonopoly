import Typography from '../Typography'

export const Special = (props) => {
  const { name } = props

  const Go = (
    <div className="flex flex-col items-center bg-[#C1E1D4] w-[110px] h-[110px] border-[2px] border-black">
      <div
        className="flex flex-col max-w-[75%] max-h-[60%] mt-4 mr-3"
        style={{
          transform: ' rotate(-45deg)',
        }}
      >
        <Typography className="uppercase m-0" variants="main-small">
          Collect M200 salary as you pass
        </Typography>
        <Typography variants="mega" className="uppercase m-0 ">
          GO
        </Typography>
      </div>

      <div className="mt-3">
        <svg width="72" height="12" viewBox="0 0 72 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_104_9" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.25714 0.272705L0 5.91424L9.25714 11.5558V8.31424H58.837L60.7597 10.3714H72L68.1546 6.2571L72 2.14281H60.7597L58.837 4.19996H9.25714V0.272705Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.25714 0.272705L0 5.91424L9.25714 11.5558V8.31424H58.837L60.7597 10.3714H72L68.1546 6.2571L72 2.14281H60.7597L58.837 4.19996H9.25714V0.272705Z"
            fill="#D10505"
          />
          <path
            d="M0 5.91424L-0.520401 5.06032L-1.92159 5.91424L-0.520401 6.76816L0 5.91424ZM9.25714 0.272705H10.2571V-1.50779L8.73674 -0.581217L9.25714 0.272705ZM9.25714 11.5558L8.73674 12.4097L10.2571 13.3363V11.5558H9.25714ZM9.25714 8.31424V7.31424H8.25714V8.31424H9.25714ZM58.837 8.31424L59.5676 7.63142L59.2711 7.31424H58.837V8.31424ZM60.7597 10.3714L60.0291 11.0542L60.3255 11.3714H60.7597V10.3714ZM72 10.3714V11.3714H74.3034L72.7306 9.68856L72 10.3714ZM68.1546 6.2571L67.424 5.57427L66.7858 6.2571L67.424 6.93993L68.1546 6.2571ZM72 2.14281L72.7306 2.82564L74.3034 1.14281H72V2.14281ZM60.7597 2.14281V1.14281H60.3255L60.0291 1.45999L60.7597 2.14281ZM58.837 4.19996V5.19996H59.2711L59.5676 4.88279L58.837 4.19996ZM9.25714 4.19996H8.25714V5.19996H9.25714V4.19996ZM0.520401 6.76816L9.77754 1.12663L8.73674 -0.581217L-0.520401 5.06032L0.520401 6.76816ZM9.77754 10.7019L0.520401 5.06032L-0.520401 6.76816L8.73674 12.4097L9.77754 10.7019ZM8.25714 8.31424V11.5558H10.2571V8.31424H8.25714ZM58.837 7.31424H9.25714V9.31424H58.837V7.31424ZM58.1064 8.99707L60.0291 11.0542L61.4902 9.68856L59.5676 7.63142L58.1064 8.99707ZM60.7597 11.3714H72V9.37139H60.7597V11.3714ZM72.7306 9.68856L68.8852 5.57427L67.424 6.93993L71.2694 11.0542L72.7306 9.68856ZM71.2694 1.45999L67.424 5.57427L68.8852 6.93993L72.7306 2.82564L71.2694 1.45999ZM60.7597 3.14281H72V1.14281H60.7597V3.14281ZM59.5676 4.88279L61.4902 2.82564L60.0291 1.45999L58.1064 3.51713L59.5676 4.88279ZM9.25714 5.19996H58.837V3.19996H9.25714V5.19996ZM8.25714 0.272705V4.19996H10.2571V0.272705H8.25714Z"
            fill="black"
            mask="url(#path-1-inside-1_104_9)"
          />
        </svg>
      </div>
    </div>
  )

  const JustVisiting = (
    <div className="flex flex-col justify-start items-end w-[110px] h-[110px] bg-[#C1E1D4] border-[2px] border-black">
      <div className="flex flex-row">
        <div
          style={{
            transform: ' rotate(90deg)',
          }}
          className="mt-3 mr-3"
        >
          <Typography className="uppercase">Just</Typography>
        </div>
        <div className="w-[80px] h-[80px] border-l-[2px] border-b-[2px] border-black bg-[#ED9423] flex justify-center flex-col items-center">
          <div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="38" height="38" fill="white" stroke="black" stroke-width="2" />
              <rect x="4" y="1" width="2" height="38" fill="black" />
              <rect x="10" y="1" width="2" height="38" fill="black" />
              <rect x="16" y="1" width="2" height="38" fill="black" />
              <rect x="22" y="1" width="2" height="38" fill="black" />
              <rect x="28" y="1" width="2" height="38" fill="black" />
              <rect x="34" y="1" width="2" height="38" fill="black" />
            </svg>
          </div>
          <div className="w-[40px] h-[13px] bg-red-500"></div>
        </div>
      </div>
      <Typography className="uppercase mr-2">Visiting</Typography>
    </div>
  )

  const FreeParking = (
    <div className="flex flex-col justify-center items-center bg-[#C1E1D4] w-[110px] h-[110px] border-[2px] border-black">
      <div
        style={{
          transform: ' rotate(135deg)',
        }}
        className="flex flex-col justify-center items-center mt-4 ml-3"
      >
        <Typography className="uppercase mr-2">Free</Typography>
        <div className="w-[40px] h-[40px] flex justify-center items-center">
          <svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_107_33" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.6135 5.76993C3.14101 2.73816 5.48549 0 8.55386 0H29.4461C32.5145 0 34.859 2.73816 34.3865 5.76993L31.9722 21.2619H36C37.1046 21.2619 38 22.1573 38 23.2619V31.9285C38 33.0331 37.1046 33.9285 36 33.9285H24.2576C23.655 36.2699 21.5295 38 19 38C16.4705 38 14.345 36.2699 13.7424 33.9285H2C0.89543 33.9285 0 33.0331 0 31.9285V23.2619C0 22.1573 0.895431 21.2619 2 21.2619H6.02782L3.6135 5.76993Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.6135 5.76993C3.14101 2.73816 5.48549 0 8.55386 0H29.4461C32.5145 0 34.859 2.73816 34.3865 5.76993L31.9722 21.2619H36C37.1046 21.2619 38 22.1573 38 23.2619V31.9285C38 33.0331 37.1046 33.9285 36 33.9285H24.2576C23.655 36.2699 21.5295 38 19 38C16.4705 38 14.345 36.2699 13.7424 33.9285H2C0.89543 33.9285 0 33.0331 0 31.9285V23.2619C0 22.1573 0.895431 21.2619 2 21.2619H6.02782L3.6135 5.76993Z"
              fill="#D10505"
            />
            <path
              d="M3.6135 5.76993L5.58964 5.46196L5.58964 5.46196L3.6135 5.76993ZM34.3865 5.76993L32.4104 5.46196L32.4104 5.46196L34.3865 5.76993ZM31.9722 21.2619L29.996 20.9539L29.6363 23.2619H31.9722V21.2619ZM24.2576 33.9285V31.9285H22.7071L22.3207 33.43L24.2576 33.9285ZM13.7424 33.9285L15.6793 33.43L15.2929 31.9285H13.7424V33.9285ZM6.02782 21.2619V23.2619H8.36365L8.00397 20.9539L6.02782 21.2619ZM8.55386 -2C4.25814 -2 0.975873 1.83343 1.63735 6.0779L5.58964 5.46196C5.30615 3.6429 6.71284 2 8.55386 2V-2ZM29.4461 -2H8.55386V2H29.4461V-2ZM36.3627 6.0779C37.0241 1.83342 33.7418 -2 29.4461 -2V2C31.2872 2 32.6938 3.6429 32.4104 5.46196L36.3627 6.0779ZM33.9483 21.5698L36.3627 6.0779L32.4104 5.46196L29.996 20.9539L33.9483 21.5698ZM36 19.2619H31.9722V23.2619H36V19.2619ZM40 23.2619C40 21.0527 38.2091 19.2619 36 19.2619V23.2619H40ZM40 31.9285V23.2619H36V31.9285H40ZM36 35.9285C38.2091 35.9285 40 34.1377 40 31.9285H36V31.9285V35.9285ZM24.2576 35.9285H36V31.9285H24.2576V35.9285ZM22.3207 33.43C21.94 34.9092 20.5948 36 19 36V40C22.4642 40 25.3699 37.6306 26.1944 34.427L22.3207 33.43ZM19 36C17.4052 36 16.06 34.9092 15.6793 33.43L11.8056 34.427C12.6301 37.6306 15.5358 40 19 40V36ZM2 35.9285H13.7424V31.9285H2V35.9285ZM-2 31.9285C-2 34.1377 -0.209142 35.9285 2 35.9285V31.9285H2H-2ZM-2 23.2619V31.9285H2V23.2619H-2ZM2 19.2619C-0.209141 19.2619 -2 21.0527 -2 23.2619H2V23.2619V19.2619ZM6.02782 19.2619H2V23.2619H6.02782V19.2619ZM1.63735 6.0779L4.05167 21.5698L8.00397 20.9539L5.58964 5.46196L1.63735 6.0779Z"
              fill="black"
              mask="url(#path-1-inside-1_107_33)"
            />
            <circle cx="19" cy="25.7857" r="5.78571" fill="white" stroke="black" stroke-width="2" />
            <mask id="path-4-inside-2_107_33" fill="white">
              <rect x="10.8571" y="6.78577" width="16.2857" height="6.78571" rx="1" />
            </mask>
            <rect
              x="10.8571"
              y="6.78577"
              width="16.2857"
              height="6.78571"
              rx="1"
              fill="white"
              stroke="black"
              stroke-width="4"
              mask="url(#path-4-inside-2_107_33)"
            />
            <circle cx="19" cy="25.7857" r="2.35714" fill="white" stroke="black" stroke-width="2" />
            <rect
              x="3.71429"
              y="32.2142"
              width="3.42857"
              height="8.85714"
              rx="1"
              fill="white"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="30.8571"
              y="32.2142"
              width="3.42857"
              height="8.85714"
              rx="1"
              fill="white"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
        <Typography className="uppercase mr-2">Parking</Typography>
      </div>
    </div>
  )

  const GoToJail = (
    <div className="flex flex-col justify-center items-center bg-[#C1E1D4] w-[110px] h-[110px] border-[2px] border-black">
      <div
        style={{
          transform: ' rotate(-135deg)',
        }}
        className="flex flex-col justify-center items-center mb-4 mr-3"
      >
        <Typography className="uppercase mr-2">Go to </Typography>
        <div className="w-[40px] h-[40px] flex justify-center items-center">
          <img src="https://www.pngkey.com/png/full/217-2171984_monopoly-go-to-jail-monopoly-go-to-jail.png" alt="" />
        </div>
        <Typography className="uppercase mr-2">Jail</Typography>
      </div>
    </div>
  )

  switch (name) {
    case '':
      return ''
    case 'Go':
      return Go
    case 'Just visiting':
      return JustVisiting
    case 'Free Parking':
      return FreeParking
    case 'GO TO JAIL':
      return GoToJail
  }
}

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";




function Home(props){
    const Navigate = useNavigate()


    return(
        <>
        
        {/* <div className="homepage"> */}
        {/* <div style={{height:'115px'}}></div> */}
        {/* <h1>Home</h1> */}
        <div className="doctor_info extended">
            <h1>Pro Healthcare of Marietta</h1>
            <h3> 3208 Canton Road, Suite 112 Marietta, GA 30066</h3>
            <h3>(Across the street from Marietta Fish Market)</h3>
            <div style={{width:'100%', display:'flex', flexWrap:'wrap', justifyContent:"space-evenly", margin:'25px 0'}}>
            <div className="buttons_holder" onClick={() => {Navigate('/personal-injury')}} >
                <img alt={'Chiropractic Care'} src={`https://lh3.googleusercontent.com/u/0/docs/ADP-6oHl3pYSBCvaIGkhZgRi9eJRwDxlmDLaAToWgT-I2yqKW0oHCU5J-HtcSLHd_xgYPWPbOIo2vXZRc3uxLAt1ARo8evnpQc6xUU2GdqoYJgj-aRcv9uwMOh9kwjEmThTI05Ke-7SZxh-du12nBxJdDgI9deTb72CyrHeKCtmu6IMUAMnG-2p6WxfG7CBY69jWwx57lhmXudueTD6QEZMblnbM9Hxo1PN7UCdJzBEqTxyJHloiD6jDM9NM1sVMEhVJR4YcDLRMRGG1toM1yKcLUtMs3_9bCLjVROvZBT3efvCyw2rJ4ykOoxbFySIW596CGeD0b12Q_w0qYwJl1CtKzmNLe5IOlBmLIhK3kG_s7jZyFoNCe7FVyuz-XvAeNBpdQSi1xo0eV9IYhrIHnJo0Z_bLkHrPI3_m9bm9Nqrn2Rzdqjh4-2xcErKZ5M_KLuZ3PjtOx2qziZiu0tsXQ-vQtnz-QY1YKjPur9eSr93wrGLRi4rx_JwLrkeDFdYYzCyEWEmkH2IWMwPHaBPLq6aB7rG820jHIWii0s55wosv9fm-xlwBEvsO2WiGUfLCirwhKgFp9iUnxSbEvzbug0Zens53e3udExpF3xyvdzknsS2vxz61mDF5Cf-GfFhGO-2iUS8h5ZEuiSNSxznBzFAVy9E7KatRbfm8Xe4Xw9HwOFCa4Ij-BdKykxDhdMUUmjXYhBeO_9CP_YPvwRDpE-mkv18qGKiXn4hnDlsZM5afZNIDfyRLnc5FZm-NCtcnpUiQecVicPweLlWKA_YE3p-lt7w5w9Ape2Alx6OkwYlMaBPGELJI85Xp0VKzQgaxTJK4WZboYDRrO8fx99vscz1apdIklX7ZhkLHnjDIlYdQQ8azAVEqQ10rnl6FMECoPR6bdOSy_NGtQrS-GF1r79ufCUo`} />
                <h2>Chiropractic Care</h2>
            </div>
            <div className="buttons_holder" onClick={() => {Navigate('/personal-injury')}}>
                <img alt="Rehab Therapy" src="https://lh3.googleusercontent.com/u/0/docs/ADP-6oEIAdZUF_rPhbGeeTg84nHQxFf4Caxtp2d1cVIffGo93Bx5GM50oPxXex3I4QCT3WMhE-5UF01dasMPACJxeAcbRbOHUK2NtYSUKm-qePZBZ2lpneXbG_ej83gMqf1u2MSSbsSdBxPfgEgcViHleiZoHVCOtQqBWjkQfyC-2r7UWkLILif1DMfnQ80VpggMoUnvVkH2zFkIKtfFkjT4tiV5SzRAEZTmVcwVq_10zs176ny3BsaDslp3XN-IhhcfllwwVZS2wQO0ACaqk_BisL5_3VemZk8tRGGNMMEk7_DUCqY96tGJTOIPdI5eRXGQGZS6YBZcV-tFFOeZsxY-G3gqyX23y9KvbuXfTAX2qk4XUWanksKGeLUAvAIb1AxMGufQW3sM7BFB4gaOJ789OU7W1oKmGui9Af7LyNyuwhAwNe5GpEDTH6ory4pF8ASI80vYyApCz6lGEoEmRs8Mr_FwrTK1sj0KJWzXVnu46fVBppkHNl4V9Hoaze0NP3N48Mom7GjEnGa9BuTwedJj97obfOyaic3gEiFJ11F0ZZ8yqKcCkytOYn8EQG5mX8Zz5tL0zkKB6-UruzLuop5pxuE9tr3NeefDD-qeQy_BwkxD8JBAbxH_qDSzasBJO58nMEr5GLCR5bQG7IDKXmGS-j8tzpf0x-3tf0VBffUMt-cRiM8WMwCqHUIjkE5KkQlFLj-tfzwxH1vvu6ugBDMnacTxm0x5kohvxyol4CImaHVOo1fHNo8hmp4sCINdXhmauhRKajFaJVHpaDcdU_YQb7IaeN_rGg8FXT7RacihLlk9uXB1raz0mybDLLVCvOzkg1r0XWA_XYAHozqqxrUNUwhzrL4WY9-PEEwR1dXyInrXDdd8IpVJUkO41cOBXz9fukCjBFPQO99kOWrKqNtDB6Q" />
                <h2>Rehab Therapy</h2>
            </div>
            <div className="buttons_holder" onClick={() => {Navigate('/personal-injury')}}>
                <img alt="Auto Accidents" src="https://lh3.googleusercontent.com/u/0/docs/ADP-6oHbfq4LPQFS29ybWOrB9jk-68U-QBK8SH8821I1eggKHuv5WPfc5bUO4QOoel1Nq06GI6vDzkW4aXBg87mWPWvIRsEbxqadWr48_xyOw7GOs7SZ0zQjsMJxxHQ9_ylZlSeTW1lysohYv2_WhuCbifI9VVtZJaCddIllxPsuusXwpfS6B-uGZIkPtZbJuleU-D8zYedteBFDPQlCTarbjr_jotamknpb6xj_Eo2GEoNT_BZ4_kQrCDIk7p2z2dYR7uh5oOBVzWOdQiKHKyUws7tudz-BJpikhYBQ2How64rz5B6Kx8Un7FU9fWtZjLY5296rbR-dwSxzfavbPl9hMaWCTJ9C6pRd3fmccPmjjOnjaywSs2SDy79bRNiExdPSJOQwiJA8MBs491in47nynxizyC4IEKjlCBEYMe9xffJlFK38ECxLAaHxOMUJUTPGZr2LoPnr1QkNMmnlCiyA4NrDLqVkfmf1jbn76A6coWv8jQeelp7X532_TUjR7zpcBPw8kN3t6l1I_-p7G2wgzoN7qdmH4KobdbR9yvSDcb9AOUpcPfFafsQJZuiUWVvbBSeHef-_bKLxWJS2ZlzcLipw6Lsslgrf0xTpjwnf_i4dSqMt1BSzDRA07nC5MklBu4C9OMSlBxfwyduiX2-dfgWsGABEFmBQKtiwFd7JHlEqpDO92saK3kgnN2KdeVtX387OQrXao5o06D7-E5k0aAL0LjK3SyJYsd9KOCzBFrTr87IE0layZUuq-9cPsdukATJRP8nkJdOnzgbZKeLkTdw69utYCcaQtGB3dNtvbgKfXiJQZ4w3oKl0agJ3-ecewd2j9zxEfcjUo5aOqDoRpJzySeVZakTfRv0AcRlhVvyNH3o3uqtvDxiwi6XB-U0ALwCdkIMSRrdN-IVgYbtY5cg"/>
                <h2>Auto Accidents</h2>
            </div>
            </div>
        </div>

        {/* </div> */}
        </>
    )
    
}


export default Home
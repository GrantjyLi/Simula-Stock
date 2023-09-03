import './NetStatistics.css'
import { useState, useEffect } from 'react'

export default function NetStatistics({props}){
    const [backGroundColor, setBackGround] = useState()
    const [netWord, setNetWord] = useState("Gains")
    const [netSign, setNetSign] = useState("+")

    const balance = 5
    const assetsValue = 2100.00
    const gainPercent = 1.52
    const gainAmount = 32

    useEffect(()=>{
        setBackGround("netZero")
        setNetWord("Gains")
        setNetSign("+")
    }, [])
    
    return (
        <div className = "NetStatisticsMain" id = {backGroundColor}>
            <div id = "topData">
                <div id = "balanceData" className='data'>
                    <h2 className = "value">${balance} USD</h2>
                    <h2 className = "description">Balance</h2>
                </div>
                <div id = "assetData" className='data'>
                    <h2 className = "value">${assetsValue} USD</h2>
                    <h2 className = "description">in Assets</h2>
                </div>
            </div>
            <div id = "unrealizedData" className='data'>
                    <h2 className = "value">{netSign + gainPercent}%{netSign + gainAmount} USD</h2>
                    <h2 className = "description">in Unrealized {netWord}</h2>
            </div>
        </div>
    )
}
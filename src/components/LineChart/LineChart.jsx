import React, { useEffect } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {

    const [data, setData] = useState([["Date","Price"]])

    useEffect(()=>{
       let dataCopy = [["Data","Prices"]];
       if(historicalData.prices){
        historicalData.prices.map((item)=>{
            dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
            
        })
        setData(dataCopy);
       }  // 10/05
    },[historicalData])
  return (
    <Chart
    chartType='LineChart'
    data={(data)}
    height="100%"
    legendToggle
    />  
  )
}

export default LineChart

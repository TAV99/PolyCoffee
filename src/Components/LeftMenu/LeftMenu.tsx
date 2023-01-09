import { View, Text, TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import styles from './LeftMenuStyle'



const LeftMenu = (props: any) => {
    // props.inputName
    const [isSelect, setIsSelect ] = useState({})
    const [isColor, setColor ] = useState({
      colorCoffee:"#5A4334", 
      colorTea:'#5A4334',
      colorMilkTea:'#5A4334',
      colorJuice:'#5A4334' })

    const handlePress = (props: string)=>{
      switch (props){
        case 'coffee': 
        setColor({
          colorCoffee:"#CA9251",
          colorTea:'#5A4334',
          colorMilkTea:'#5A4334',
          colorJuice:'#5A4334'
        })
        break;
        case 'tea': 
        setColor({
          colorCoffee:"#5A4334",
          colorTea:'#CA9251',
          colorMilkTea:'#5A4334',
          colorJuice:'#5A4334'
        })
        break;
        case 'milkTea': 
        setColor({
          colorCoffee:"#5A4334",
          colorTea:'#5A4334',
          colorMilkTea:'#CA9251',
          colorJuice:'#5A4334'
        })
        break;
        case 'juice': 
        setColor({
          colorCoffee:"#5A4334",
          colorTea:'#5A4334',
          colorMilkTea:'#5A4334',
          colorJuice:'#CA9251'
        })
        break;
        default:
          setColor({
            ...isColor
          })
      }
    }
  return (
    <View style={styles.leftView}>
      {/* Chưa truyển được props */}
      {/* {props.inputName.map((item:String) =>
        {<TouchableOpacity style={styles.touchLeft}>
              <Text style={styles.textBar}>{item}</Text>
        </TouchableOpacity>
        console.log(">>>>>>"+item)})
          } */}
          <TouchableOpacity style={styles.touchLeft} onPress={()=>handlePress("coffee")}>
            <Text style={[styles.textBar, {color:isColor.colorCoffee}]}>{"Coffee"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchLeft } onPress={()=>handlePress("tea")}>
            <Text style={[styles.textBar, {color:isColor.colorTea}]}>{"Tea"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchLeft} onPress={()=>handlePress("milkTea")}>
            <Text style={[styles.textBar, {color:isColor.colorMilkTea}]}>{"Milk Tea"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchLeft} onPress={()=>handlePress("juice")}>
            <Text style={[styles.textBar, {color:isColor.colorJuice}]}>{"Juice"}</Text>
          </TouchableOpacity>
        </View>
  )
}

export default LeftMenu
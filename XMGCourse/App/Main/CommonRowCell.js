/**
 * @providesModule CommonRowCell
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch
} from 'react-native';

import {PropTypes} from 'prop-types'

export default class CommonRowCell extends Component<{}>{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isOn:false
        };
      }


    static PropTypes = {
        rowData:PropTypes.object,
        /**标题字体的样式*/
        titleLabelStyle:PropTypes.oneOfType([PropTypes.number,PropTypes.object]),
        /***图片样式**/
        imageStyle:PropTypes.oneOfType([PropTypes.number,PropTypes.object])

    };

    render(){
        return(
            <TouchableOpacity
                onPress={()=>{
                     if (this.props.rowData.RowItemClick){
                        this.props.rowData.RowItemClick()
                     }
                }}
                style={styles.cellStyle}
                disabled={this.props.rowData.disabled}
            >
                <Image source={{uri:this.props.rowData.image}} style={[styles.TitleImageStyle,this.props.imageStyle]}/>
                <Text style={[styles.TitleTextStyle,this.props.titleLabelStyle]}>{this.props.rowData.title}</Text>
                {this._renderAccesoryView()}
            </TouchableOpacity>
        )
    }

    _renderAccesoryView(){

        var className = this.props.rowData.constructor.name;

        if (className == 'CommonArrowItem'){
            return(
                <View style={{flexDirection:'row',alignItems:'center',position:'absolute',right: 15}}>
                    <Text style={styles.subTitleStyle}>{this.props.rowData.subTitle}</Text>
                    <Image source={{uri:'icon_shike_arrow'}} style={styles.AccessoryStyle}/>
                </View>
            )
        } else if (className == 'CommonSwitchItem'){
            return(
                <View style={{flexDirection:'row',alignItems:'center',position:'absolute',right: 15}}>
                    <Switch
                        onValueChange={(newValue)=>{
                          this.setState({
                             isOn:newValue
                          })
                        }}
                        value={this.state.isOn}
                    />
                </View>
            )
        }
    }


}

const styles = StyleSheet.create({
    cellStyle:{
        height:44,
        width:375,
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'#e5e5e5',
        borderBottomWidth:1
    },
    TitleImageStyle:{
        width:17,
        height:17,
        marginLeft:15
    },
    AccessoryStyle:{
        width:7,
        height:12,
        // position:'absolute',
        // right:10
    },
    TitleTextStyle:{
        marginLeft:5
    },
    subTitleStyle:{
        marginRight:10
    }
});
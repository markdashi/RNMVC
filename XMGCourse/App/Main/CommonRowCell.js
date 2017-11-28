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
    TouchableOpacity
} from 'react-native';

import {PropTypes} from 'prop-types'

export default class CommonRowCell extends Component<{}>{

    static PropTypes = {
        rowData:PropTypes.object
    }

    render(){
        return(
            <TouchableOpacity style={styles.cellStyle}>
                <Image source={{uri:this.props.rowData.image}} style={styles.TitleImageStyle}/>
                <Text style={styles.TitleTextStyle}>{this.props.rowData.title}</Text>
                <Text style={styles.subTitleStyle}>{this.props.rowData.subTitle}</Text>
                <Image source={{uri:'icon_shike_arrow'}} style={styles.AccessoryStyle}/>
            </TouchableOpacity>
        )
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
        position:'absolute',
        right:10
    },
    TitleTextStyle:{

    },
    subTitleStyle:{
        marginRight:10
    }
});
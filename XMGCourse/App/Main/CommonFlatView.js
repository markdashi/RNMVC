/**
 * @providesModule CommonFlatView
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList
} from 'react-native';

import {PropTypes} from 'prop-types'



/**
 *  [s1,s2]
 *  s1 : [{} {}]
 *  s2 : [{} {}]
 *
 *
 */

export default class CommonFlatView extends Component<{}> {


    static propTypes = {
        groups:PropTypes.array
    }

    // 构造
      constructor(props) {
          super(props);
          // 初始状态


          var sectionData = [];

          var groups = this.props.groups;

          groups.forEach((groupItem,index)=>{
              sectionData.push(groupItem.rowData)
          })
          this.state = {
              ds:sectionData
          };

      }


//     *  [s1,s2]
//     *  s1 : [{} {}]
// *  s2 : [{} {}]
// *
    componentDidMount() {


        console.log(this.props.groups);

        var dataS = []

        dataS.push({
            s1:'section1',
            data:[
                {text: 'Section1 item0', key: '0'}
            ]
        })
        dataS.push({
            s1:'section2',
            data:[
                {text: 'Section1 item0', key: '0'},
                {text: 'SSection2 item0', key: '1'}
            ]
        })
        // this.setState({
        //     ds:dataS
        // })


    }

    _renderSectionHeader({section}){
        // console.log(section)
       return(
           <Text>{section.s1}</Text>
       )
    }
    _renderItem({item}){
        // console.log(item);
        return(
            <Text>{item.text}</Text>
        )
    }



    render() {

        return (
            <SectionList
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                sections={this.state.ds}
                style={{marginTop:20}}
            />
        );
    }
}


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

import CommonGroupItem from 'CommonGroupItem'
import CommonRowItem from 'CommonRowItem'

/**
 *  [s1,s2]
 *  s1 : [{} {}]
 *  s2 : [{} {}]
 *
 *
 */

export default class CommonFlatView extends Component<{}> {


    _setupGroup0(groups){

        var item0 = new CommonRowItem('icon_mine_myAccount_address','小码哥','年薪100W');
        var item1 = new CommonRowItem('icon_mine_myAccount_livingCity','到过的公园','');
        var item2 = new CommonRowItem('icon_mine_myAccount_password','阅历','');


        var group = CommonGroupItem([item0,item1,item2],0);
        groups.push(group)
    }

    _setupGroup1(groups){

        var item0 = new CommonRowItem('icon_mine_myAccount_address','小码哥','年薪100W');
        var item1 = new CommonRowItem('icon_mine_myAccount_livingCity','到过的公园','');
        var item2 = new CommonRowItem('icon_mine_myAccount_password','阅历','');


        var group = CommonGroupItem([item0,item1],0);
        groups.push(group)
    }


    // 构造
      constructor(props) {
          super(props);
          // 初始状态

          var groups = [];

          //加载第一组数据
          this._setupGroup0(groups)
          //加载第二组数据
          this._setupGroup1(groups)

          this.state = {
              ds:[]
          };
      }


//     *  [s1,s2]
//     *  s1 : [{} {}]
// *  s2 : [{} {}]
// *
    componentDidMount() {





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
        this.setState({
            ds:dataS
        })


    }

    _renderSectionHeader({section}){
        console.log(section)
       return(
           <Text>{section.s1}</Text>
       )
    }
    _renderItem({item}){
        console.log(item);
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


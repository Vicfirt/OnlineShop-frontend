import React, {Component} from 'react';
import {ResponsivePie} from '@nivo/pie'
import {connect} from "react-redux";
import {getSalesByCategories} from "../../actions/statistics_actions";

class Statistics extends Component {

    componentDidMount() {
        this.props.getSalesByCategories();
    }

    render() {
        let data = []
        const sales = this.props.salesByCategories;
        sales.map((sale) => {
            data.push(Object.create({}, {
                id: {value: sale.category},
                label: {value: sale.salesSum},
                value: {value: sale.salesSum}
            }));

        })

        return (
            <div style={{height: "500px"}}>
                <h6 className="text-center">Sales by categories in the past month, $</h6>
                <ResponsivePie
                    data={data}
                    margin={{top: 40, right: 80, bottom: 80, left: 80}}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{scheme: 'nivo'}}
                    borderWidth={1}
                    borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkColor={{from: 'color'}}
                    sliceLabelsSkipAngle={10}
                    sliceLabelsTextColor="#333333"
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'Books'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'Electronics'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'Musical instruments'
                            },
                            id: 'dots'
                        },

                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>


        )
    }
}

const mapStateToProps = (state) => ({
    salesByCategories: state.statistics.salesByCategories
})

export default connect(mapStateToProps, {getSalesByCategories})(Statistics);


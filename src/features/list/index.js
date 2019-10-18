import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, TextInput } from 'react-native';
import { setFilter, getFilteredData, getData } from 'actions';
import { dispatch } from 'rxjs/internal/observable/range';
import { filteredSelectorData } from './../../selectors';

class List extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		};
	}

	createList = () => (
		this.props.filteredData.map(item => (
				<Text key={item.first_name}>{`${item.first_name} ${item.last_name}`}</Text>
			)
		)
	)

	createListFromSelector = () => (
		this.props.filteredSelectorData.map(item => (
				<Text key={item.first_name}>{`${item.first_name} ${item.last_name}`}</Text>
			)
		)
	)

	onChangeText = text => {
		this.setState({ inputValue: text });
		this.props.setFilter(text.toLowerCase());
		this.props.getFilteredData();
	}

	render() {
		return (
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<View>
					<TextInput style={{ backgroundColor: 'lightgray', marginLeft: 5, marginRight: 5 }} value={this.state.inputValue} onChangeText={this.onChangeText} />
					<View>
						{
							this.createList()
						}
					</View>
					<View>
						<Text>-----------------------------</Text>
					</View>
					<View>
						{
							this.createListFromSelector()
						}
					</View>
				</View>
			</ScrollView>
		);
	}
};

const mapStateToProps = state => {
	return ({
		filteredData: state.dataReducer.filteredData,
		filteredSelectorData: filteredSelectorData(state),
	}
)};

const mapDispatchToProps = dispatch => ({
	setFilter: filter => dispatch( setFilter(filter) ),
	getData: () => dispatch( getData() ),
	getFilteredData: () => dispatch( getFilteredData() ),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

export default NavigationDefaults = ({navigation}, title) => ({
    headerTitle: navigation.state.params.item.name,
    headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffe81f',
        backgroundColor: 'black'
    },
    headerTintColor: '#ffe81f',
    headerTitleStyle: {
        color: '#ffe81f',
    },
    pressColorAndroid: 'white'
});


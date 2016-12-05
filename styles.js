const React = require('react-native')
const {StyleSheet} = React
const constants = {
    primaryDark : '#455A64',
    primary: '#607D8B',
    primaryLight: '#CFD8DC', 
    accent: '#00BCD4',
    primaryText:'#212121',
    secondaryText: '#757575',
    inverseText: '#ffffff'

};

var styles = StyleSheet.create({
    app: {
        flex:1    
    },
    statusBar:{
        backgroundColor: constants.primary,
        height: 22,
        
    },
    navBar:{
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: constants.primary,
        height: 58,
        flexDirection: 'row',
    },
    navBarText:{
        color: constants.inverseText,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10
    }, 
    displayTextContainer:{
        backgroundColor: constants.primaryLight,
        padding:10,
        flex: 1    
    },
    displayText:{
        flex: 1,
        backgroundColor: '#fff',
        color: constants.accent,
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10, 
        
        borderRadius: 8   
    },
    buttonContainer:{
        backgroundColor: constants.primaryDark,
        flex: 7,
        padding: 5,
    },
    buttonContainerRow:{
        flexDirection: 'row',
        flex: 1
    },
    buttonDigit:{
        backgroundColor: constants.primary,
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
      
    },
    buttonDigitZero:{
        backgroundColor: constants.primary,
        flex: 2,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    buttonDigitText:{
        color: constants.inverseText,
        
    }
})
module.exports = styles
module.exports.constants = constants;
import {
    StyleSheet,
    Dimensions,
    Platform,
    PixelRatio,
    Alert,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export const Window = {
    height,
    width,
};

// Alert.alert(JSON.stringify(Window));

export const COLORS = {
    green: "#C8C751",
    blueGreen: "#60A471",
    blue: "#00849B",
    yellow: "#44CC22",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#00000022",
    darkGray: "#00000044"
};

// My own responsive CSS functions
// property: calc(minimum px + range * (viewport width - minimum screen width px) / max screen width);
// 2px + 4 * (100vw - 769px) / 2048
const minWindowWidth = 320;
const maxWindowWidth = 1300;
const multiplier = (width - minWindowWidth) / maxWindowWidth;

const dynamicSize = (size, range = 1) => size + range * multiplier;


// Solution from gihub
// based on iphone 5s's scale
const scale = width / 320;
const normalize = size => {
    const newSize = size * scale;
    return Platform.OS === 'ios' ?
        Math.round(PixelRatio.roundToNearestPixel(newSize))
        :
        Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const SIZES = {
    xxLarge: dynamicSize(24),
    xLarge: dynamicSize(20),
    large: dynamicSize(18),
    mLarge: dynamicSize(15),
    medium: dynamicSize(13),
    mSmall: dynamicSize(12),
    small: dynamicSize(11),
    xSmall: dynamicSize(8),
    xxSmall: dynamicSize(5),
    homeIcon: dynamicSize(55),
};

export default StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        backgroundColor: COLORS.white,
        paddingTop: SIZES.xxLarge,
        paddingBottom: SIZES.xxLarge * 3,
        paddingLeft: SIZES.large,
        paddingRight: SIZES.large,
        flex: 1,
        flexGrow: 1,
    },
    // extra large bold
    title: {
        fontSize: SIZES.xxLarge,
        fontWeight: 'bold',
    },
    // large bold
    h1: {
        fontSize: SIZES.xLarge,
        fontWeight: 'bold',
    },
    // medium large bold
    header: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
    },
    // medium large bold blue
    h2: {
        fontSize: SIZES.mLarge,
        fontWeight: 'bold',
        color: COLORS.blue,
    },
    // medium bold
    h3: {
        fontSize: SIZES.medium,
        fontWeight: 'bold',
    },
    // medium small italic
    h4: {
        fontSize: SIZES.mSmall,
        fontStyle: 'italic',
    },
    // small
    text: {
        fontSize: SIZES.small,
    },
    speakerphoto: {
        height: Window.width * 0.7,
        width: Window.width * 0.7,
        borderRadius: Window.width * 0.35,
        marginLeft: Window.width * 0.15 - SIZES.large,
        marginRight: Window.width * 0.15 - SIZES.large,
        marginBottom: SIZES.xLarge,
        backgroundColor: COLORS.gray,
    },
    sliderLabels: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    switchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchLabel: {
        marginLeft: SIZES.medium,
    },
    searchInput: {
        marginTop: SIZES.xxSmall,
        marginBottom: SIZES.xxSmall,
        paddingTop: SIZES.xxSmall,
        paddingBottom: SIZES.xxSmall,
        paddingLeft: SIZES.medium,
        paddingRight: SIZES.medium,
        borderColor: COLORS.darkGray,
        borderWidth: 1,
        borderRadius: SIZES.large,
    },
    input: {
        marginTop: SIZES.xxSmall,
        marginBottom: SIZES.xxSmall,
        padding: SIZES.xxSmall,
        borderColor: COLORS.black,
        borderWidth: 1,
    },
    feedbackLabel: {
        fontSize: SIZES.medium,
        fontWeight: 'bold',
    },
    emptySession: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: COLORS.blue,
        borderWidth: 1,
        borderRadius: SIZES.xxSmall,
        padding: SIZES.small,
    },
    notification: {
        borderColor: COLORS.blue,
        borderWidth: 1,
        borderRadius: SIZES.xxSmall,
        padding: SIZES.small,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.blue,
        borderWidth: 1,
        borderRadius: SIZES.xxSmall,
        padding: SIZES.small,
    },
    buttonText: {
        color: COLORS.blue,
        fontSize: SIZES.mSmall,
        fontWeight: 'bold',
    },
    speakerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: COLORS.blue,
        borderWidth: 1,
        borderRadius: SIZES.xxSmall,
        padding: SIZES.small,
    },
    speakerButtonText: {
        color: COLORS.black,
        fontSize: SIZES.mSmall,
        fontWeight: 'bold',
        width: '85%'
    },
    speakerButtonArrow: {
        fontSize: SIZES.mSmall,
        fontWeight: 'bold',
        color: COLORS.darkGray,
    },
    breakoutHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sessionTileBar: {
        height: '100%',
        width: SIZES.xxSmall,
        marginRight: SIZES.small,
    },
    sessionTile: {
        flexDirection: 'row',
        // width: Window.width - SIZES.large * 2,
    },
    blueBackground: {
        backgroundColor: COLORS.blue + '44',
    },
    blackBackground: {
        backgroundColor: COLORS.black + '44',
    },
    marginTopSmall: {
        marginTop: SIZES.small,
    },
    marginTopMedium: {
        marginTop: SIZES.medium,
    },
    marginTopXLarge: {
        marginTop: SIZES.xLarge,
    },
    marginTopXxLarge: {
        marginTop: SIZES.xxLarge,
    },
    marginBottomMedium: {
        marginBottom: SIZES.medium,
    },
    marginBottomXxSmall: {
        marginBottom: SIZES.xxSmall,
    },
    marginBottomLarge: {
        marginBottom: SIZES.large,
    },
    marginBottomXLarge: {
        marginBottom: SIZES.xLarge,
    },
    marginBottomXxLarge: {
        marginBottom: SIZES.xxLarge,
    },
    blackText: {
        color: COLORS.black,
    },
});
